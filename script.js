document.addEventListener("DOMContentLoaded", function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".link");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Form Validation
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields!");
      return;
    }

    alert("Message sent successfully!");
    this.reset();
  });

  // Scroll Animations
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Initial check
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuToggle.addEventListener("click", function () {
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Optional: Close the menu if the user clicks outside of it
  document.addEventListener("click", function (event) {
      if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = "none";
      }
  });
});

document.querySelectorAll(".back-to-home").forEach(button => {
  button.addEventListener("click", function () {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
});
let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const slideWidth = images[0].offsetWidth + 20; // Add margin to slide width
  
  slideIndex += step;

  if (slideIndex < 0) slideIndex = images.length - 1; // Loop to the last image
  if (slideIndex >= images.length) slideIndex = 0; // Loop to the first image

  // Move the slides container to the appropriate position
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });
});
