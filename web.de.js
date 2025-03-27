window.onload = function () {
  document.body.style.zoom = "75%";
};
(function () {
  // Initialize EmailJS
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  // Send the email using EmailJS
  emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(
          function (response) {
              alert("Email sent successfully!");
              console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
              alert("Failed to send email.");
              console.log("FAILED...", error);
          }
      );
});
</script>