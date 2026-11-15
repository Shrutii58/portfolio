/* ============================================================
   CONTACT.JS — EmailJS Form Submit
   ============================================================ */

(function () {
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const btn      = document.getElementById('form-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    btn.disabled    = true;
    btn.textContent = 'Sending…';

    // EmailJS — replace with real service/template IDs
    // emailjs.init("YOUR_PUBLIC_KEY");
    // await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form);

    // Simulated send (remove when EmailJS is configured)
    await new Promise(r => setTimeout(r, 1200));

    // Success state
    btn.textContent = 'Sent ✓';
    feedback.innerHTML = `
      <div class="form-success">
        <svg viewBox="0 0 52 52" class="checkmark-svg">
          <circle class="checkmark-circle" cx="26" cy="26" r="24" fill="none"/>
          <path class="checkmark-path" fill="none" d="M14 26 l8 8 l16-16"/>
        </svg>
        <p>Message sent! Shruti will reply soon ✦</p>
      </div>`;
    form.reset();

    setTimeout(() => {
      feedback.innerHTML = '';
      btn.disabled    = false;
      btn.textContent = 'Send Message ✦';
    }, 5000);
  });
})();
