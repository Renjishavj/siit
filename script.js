/* ===== CONTACT FORM SCRIPT ===== */

window.addEventListener("load", function () {

  /* ---------- EMAILJS INIT ---------- */
  if (typeof emailjs !== "undefined") {
    emailjs.init({
      publicKey: "S01LXNnZqVCQkaZlw"
    });
  } else {
    console.error("EmailJS not loaded");
    return;
  }

  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    /* CAPTCHA VALIDATION */
    const captcha = grecaptcha.getResponse();

    if (captcha.length === 0) {
      alert("Please complete the captcha");
      return;
    }

    /* SEND EMAIL */
    emailjs.sendForm(
      "service_mu1e2f1",
      "template_g58ks3c",
      this
    )
    .then(() => {
      alert("Message sent successfully ✅");
      form.reset();
      grecaptcha.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send ❌");
    });

  });

});