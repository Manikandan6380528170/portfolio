document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formStatus").innerText = "Thanks for contacting me, " + name + "!";
    this.reset();
  } else {
    document.getElementById("formStatus").innerText = "Please fill out all fields.";
  }
});
