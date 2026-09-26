// Progressive enhancement only — every piece of content works without this file.
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');

  // Mobile menu
  const setMenu = open => {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', e => {
    if (!header.contains(e.target)) setMenu(false);
  });

  // Header shadow once the page scrolls (no scroll listener)
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;height:8px;width:1px;pointer-events:none';
  document.body.prepend(sentinel);
  new IntersectionObserver(([entry]) => header.classList.toggle('is-scrolled', !entry.isIntersecting)).observe(sentinel);

  // One-time reveals
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

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
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    bookingFrame.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  });
})();
