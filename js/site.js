// Progressive enhancement only — every piece of content works without this file.
(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Theme: dark by default, light as the alternate; remembered per visitor
  const themeBtn = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const applyTheme = light => {
    if (light) root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
    themeBtn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    themeMeta.setAttribute('content', light ? '#FAF8F6' : '#131211');
  };
  applyTheme(root.getAttribute('data-theme') === 'light');
  themeBtn.addEventListener('click', () => {
    const light = root.getAttribute('data-theme') !== 'light';
    applyTheme(light);
    try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch (e) {}
  });

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  const setMenu = open => { toggle.setAttribute('aria-expanded', String(open)); links.classList.toggle('is-open', open); };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });
  document.addEventListener('click', e => { if (!header.contains(e.target)) setMenu(false); });

  // Header hairline once the page scrolls (no scroll listener)
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;height:8px;width:1px;pointer-events:none';
  document.body.prepend(sentinel);
  new IntersectionObserver(([e]) => header.classList.toggle('is-scrolled', !e.isIntersecting)).observe(sentinel);

  // One-time reveals
  const reveals = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  reveals.forEach(el => io.observe(el));

  // Case-study dialog: moves the in-page case article into the dialog and back
  const dialog = document.getElementById('case-dialog');
  const body = dialog.querySelector('.dialog-body');
  let current = null, home = null, trigger = null;
  const openCase = (id, from) => {
    const node = document.getElementById(id);
    if (!node || !node.classList.contains('case-full')) return false;
    if (dialog.open) dialog.close();
    current = node; trigger = from || null;
    home = document.createComment('case-home');
    node.before(home);
    body.append(node);
    body.scrollTop = 0;
    const title = node.querySelector('.case-title');
    if (title) dialog.setAttribute('aria-labelledby', title.id);
    root.classList.add('dialog-open');
    dialog.showModal();
    dialog.querySelector('.dialog-close').focus();
    return true;
  };
  dialog.addEventListener('close', () => {
    if (current && home) { home.replaceWith(current); }
    current = home = null;
    root.classList.remove('dialog-open');
    if (trigger && document.contains(trigger)) trigger.focus();
    trigger = null;
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-case]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (openCase(a.dataset.case, a)) e.preventDefault();
  });
  if (location.hash.startsWith('#case-')) openCase(location.hash.slice(1));

  // All builds: filters + "show all"
  const grid = document.getElementById('builds-grid');
  const cards = [...grid.querySelectorAll('.card')];
  const filters = document.querySelector('.filters');
  const more = document.querySelector('.show-more');
  const count = document.getElementById('builds-count');
  const LIMIT = 6;
  let filter = 'all', expanded = false;
  const render = () => {
    const matches = cards.filter(c => filter === 'all' || c.dataset.tags.split(' ').includes(filter));
    cards.forEach(c => { c.hidden = true; });
    matches.forEach((c, i) => { c.hidden = !expanded && i >= LIMIT; });
    const shown = matches.filter(c => !c.hidden).length;
    count.textContent = `Showing ${shown} of ${matches.length} ${matches.length === 1 ? 'build' : 'builds'}`;
    more.hidden = matches.length <= LIMIT;
    more.setAttribute('aria-expanded', String(expanded));
    more.textContent = expanded ? 'Show fewer' : `Show all ${matches.length} builds`;
  };
  filters.hidden = false;
  filters.addEventListener('click', e => {
    const b = e.target.closest('.filter');
    if (!b) return;
    filter = b.dataset.filter;
    filters.querySelectorAll('.filter').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    render();
  });
  more.addEventListener('click', () => {
    const firstHidden = cards.find(c => c.hidden && (filter === 'all' || c.dataset.tags.split(' ').includes(filter)));
    expanded = !expanded;
    render();
    if (expanded && firstHidden) firstHidden.querySelector('h3 a').focus({ preventScroll: true });
  });
  render();

  // Booking calendar: third-party iframe loads only on request
  const bookingBtn = document.getElementById('load-booking');
  const bookingFrame = document.getElementById('booking-frame');
  bookingBtn.addEventListener('click', e => {
    if (!bookingBtn.dataset.src) return;               // no calendar configured: plain link
    if (e.metaKey || e.ctrlKey || e.shiftKey) return; // let modified clicks open a tab
    e.preventDefault();
    if (!bookingFrame.firstChild) {
      const status = document.createElement('p');
      status.className = 'booking-status';
      status.setAttribute('role', 'status');
      status.textContent = 'Loading calendar…';
      const iframe = document.createElement('iframe');
      iframe.src = bookingBtn.dataset.src;
      iframe.title = 'Booking calendar for a call with Angelo Torrevillas';
      iframe.addEventListener('load', () => { status.textContent = ''; status.hidden = true; }, { once: true });
      bookingFrame.append(status, iframe);
    }
    bookingFrame.hidden = false;
    bookingBtn.textContent = 'Calendar opened below';
    bookingFrame.scrollIntoView({ block: 'start', behavior: reduceMotion() ? 'auto' : 'smooth' });
  });
})();
