// Progressive enhancement only — every piece of content works without this file.
(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');

  // Booking calendar: the third-party iframe loads once, as the visitor nears it (not on page load).
  // Kept first so its no-IntersectionObserver fallback still runs if later features fail.
  const bookingFrame = document.getElementById('booking-frame');
  if (bookingFrame && bookingFrame.dataset.src) {
    const status = document.createElement('p');
    status.className = 'booking-status';
    status.setAttribute('role', 'status');
    status.textContent = 'The calendar loads as you reach it.';
    bookingFrame.append(status);
    bookingFrame.hidden = false;   // shown only with JS; hidden elements are never observed
    let loaded = false;
    const loadBooking = () => {
      if (loaded) return;
      loaded = true;
      status.textContent = 'Loading calendar…';
      const iframe = document.createElement('iframe');
      iframe.src = bookingFrame.dataset.src;
      iframe.title = 'Booking calendar for a call with Angelo Torrevillas';
      iframe.addEventListener('load', () => { status.textContent = ''; status.hidden = true; }, { once: true });
      // Height follows each booking step: the GHL widget ships iframe-resizer's child script, and
      // this is its parent half. Until the first size report the iframe keeps its fixed CSS height,
      // so if the script fails the calendar still works exactly as before.
      const resizer = document.createElement('script');
      resizer.src = 'js/vendor/iframeResizer.min.js';
      resizer.onload = () => {
        bookingFrame.append(iframe);
        window.iFrameResize({
          checkOrigin: [new URL(iframe.src).origin],
          heightCalculationMethod: 'offset',
          sizeWidth: false,
          scrolling: 'omit',
          onResized: () => bookingFrame.classList.add('is-autosized')
        }, iframe);
      };
      resizer.onerror = () => bookingFrame.append(iframe);
      document.head.append(resizer);
    };
    if ('IntersectionObserver' in window) {
      const bookingIo = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) { bookingIo.disconnect(); loadBooking(); }
      }, { rootMargin: '300px 0px' });
      bookingIo.observe(bookingFrame);
    } else {
      loadBooking();
    }
  }

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

  // Back-to-top: shown once the hero is fully above the viewport, hidden again at the top.
  // One observer, no scroll listener.
  const toTop = document.querySelector('.to-top');
  const hero = document.querySelector('.hero');
  if (toTop && hero) {
    new IntersectionObserver(([e]) => {
      toTop.classList.toggle('is-visible', !e.isIntersecting && e.boundingClientRect.top < 0);
    }).observe(hero);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    toTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      header.querySelector('.brand').focus({ preventScroll: true });   // keep keyboard focus at the top, not on the now-hidden button
    });
  }

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
    const title = node.querySelector('.case-title');
    if (title) dialog.setAttribute('aria-labelledby', title.id);
    dialog.showModal();
    // Reset only once the dialog is rendered: while closed it is display:none, so an earlier
    // reset is ignored and the browser restores the previous case's scroll offset.
    body.scrollTop = 0;
    syncScrollLock();
    dialog.querySelector('.dialog-close').focus();
    return true;
  };
  dialog.addEventListener('close', () => {
    if (current && home) { home.replaceWith(current); }
    current = home = null;
    syncScrollLock();
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

  // Image viewer: its own modal layer over the case dialog. Without JS, gallery links open the image file.
  const viewer = document.getElementById('viewer');
  const vStage = viewer.querySelector('.viewer-stage');
  const vImg = viewer.querySelector('.viewer-img');
  const vCount = viewer.querySelector('.viewer-count');
  const vCap = viewer.querySelector('.viewer-cap');
  const vPrev = viewer.querySelector('.viewer-prev');
  const vNext = viewer.querySelector('.viewer-next');
  const vZoom = viewer.querySelector('.viewer-zoom');
  let shots = [], index = 0, canZoom = false, origin = null;
  function syncScrollLock() { root.classList.toggle('dialog-open', dialog.open || viewer.open); }
  const setZoom = on => {
    viewer.classList.toggle('is-zoomed', on);
    vZoom.setAttribute('aria-pressed', String(on));
    vZoom.setAttribute('aria-label', on ? 'Fit image to screen' : 'Show actual size');
    if (on) { vStage.tabIndex = 0; vStage.setAttribute('aria-label', 'Image at actual size, scrollable'); }
    else { vStage.removeAttribute('tabindex'); vStage.removeAttribute('aria-label'); }
    vStage.scrollTo(0, 0);
  };
  const show = i => {
    index = (i + shots.length) % shots.length;
    const link = shots[index];
    const thumb = link.querySelector('img');
    const cap = link.closest('figure').querySelector('figcaption');
    const w = +thumb.getAttribute('width'), h = +thumb.getAttribute('height');
    setZoom(false);
    vImg.width = w; vImg.height = h;
    vImg.src = link.href;
    vImg.alt = thumb.alt;
    vCount.textContent = `${index + 1} / ${shots.length}`;
    vCap.textContent = cap ? cap.textContent.trim() : '';
    // "Actual size" only helps when the image is larger than the space it is fitted into
    canZoom = w > vStage.clientWidth + 1 || h > vStage.clientHeight + 1;
    vZoom.hidden = !canZoom;
    viewer.classList.toggle('can-zoom', canZoom);
  };
  const openViewer = link => {
    shots = [...link.closest('.gallery-wrap').querySelectorAll('.shot-link')];
    vPrev.hidden = vNext.hidden = shots.length < 2;
    viewer.showModal();
    syncScrollLock();
    show(shots.indexOf(link));
    viewer.querySelector('.viewer-close').focus();
    origin = link;
  };
  viewer.addEventListener('close', () => {
    vImg.removeAttribute('src');
    setZoom(false);
    syncScrollLock();
    if (origin && document.contains(origin)) origin.focus();   // back to the thumbnail; the case dialog stays open
    origin = null;
  });
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  vPrev.addEventListener('click', () => show(index - 1));
  vNext.addEventListener('click', () => show(index + 1));
  vZoom.addEventListener('click', () => setZoom(!viewer.classList.contains('is-zoomed')));
  vImg.addEventListener('click', () => { if (canZoom) setZoom(!viewer.classList.contains('is-zoomed')); });
  vStage.addEventListener('click', e => { if (e.target === vStage) viewer.close(); });   // empty space only, never the image
  viewer.addEventListener('keydown', e => {
    if (shots.length < 2 || viewer.classList.contains('is-zoomed')) return;   // zoomed: arrows scroll the image
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
  });
  let touchX = null, touchY = 0;
  vStage.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; touchY = e.touches[0].clientY; }, { passive: true });
  vStage.addEventListener('touchend', e => {
    if (touchX === null || shots.length < 2 || viewer.classList.contains('is-zoomed')) { touchX = null; return; }
    const dx = e.changedTouches[0].clientX - touchX, dy = e.changedTouches[0].clientY - touchY;
    touchX = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
  }, { passive: true });
  document.addEventListener('click', e => {
    const a = e.target.closest('a.shot-link');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    openViewer(a);
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
})();
