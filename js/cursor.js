/* ============================================================
   CURSOR.JS — Custom Gold Cursor + Magnetic Effect
   ============================================================ */

(function () {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let raf;

  // Move dot instantly
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Smooth lag for ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    raf = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Card hover — expand to pill
  document.querySelectorAll('.cursor-expand').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('expanded'));
    el.addEventListener('mouseleave', () => ring.classList.remove('expanded'));
  });

  // Link hover — ring grows
  document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('link-mode'));
    el.addEventListener('mouseleave', () => ring.classList.remove('link-mode'));
  });

  // Magnetic pull on buttons
  document.querySelectorAll('.btn, .nav-logo, .social-tile').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const dx = (e.clientX - cx) * 0.14;
      const dy = (e.clientY - cy) * 0.14;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // Hide on leave
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();
