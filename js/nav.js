/* ============================================================
   NAV.JS — Mobile Drawer, Active Link, Scroll Progress,
            Page Transitions
   ============================================================ */

(function () {
  /* ---- Scroll Progress ---- */
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`;
    }, { passive: true });
  }

  /* ---- Mobile Drawer ---- */
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer    = document.querySelector('.nav-drawer');
  const backdrop  = document.querySelector('.nav-backdrop');
  const closeBtn  = document.querySelector('.nav-drawer-close');

  function openDrawer() {
    drawer && drawer.classList.add('open');
    backdrop && backdrop.classList.add('show');
  }
  function closeDrawer() {
    drawer && drawer.classList.remove('open');
    backdrop && backdrop.classList.remove('show');
  }

  hamburger && hamburger.addEventListener('click', openDrawer);
  closeBtn  && closeBtn.addEventListener('click',  closeDrawer);
  backdrop  && backdrop.addEventListener('click',  closeDrawer);

  /* ---- Active link highlight ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Page Transition (fade) ---- */
  const overlay = document.getElementById('page-overlay');

  // Fade in on load
  if (overlay) {
    overlay.classList.add('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.transition = 'opacity 0.4s ease';
        overlay.classList.remove('active');
      });
    });
  }

  // Fade out before navigate
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') ||
        href.startsWith('http') || href.startsWith('tel')) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
      if (overlay) {
        overlay.style.transition = 'opacity 0.25s ease';
        overlay.classList.add('active');
        setTimeout(() => { window.location.href = href; }, 260);
      } else {
        window.location.href = href;
      }
    });
  });
})();
