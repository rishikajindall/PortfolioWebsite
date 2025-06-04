document.addEventListener("DOMContentLoaded", function () {
  // Typed animation
  new Typed("#typed-line-1", {
    strings: ["Hi! I'm Rishika Jindal"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: () => {
      new Typed("#typed-line-2", {
        strings: ["Aspiring Front-End Developer"],
        typeSpeed: 50,
        showCursor: false,
        onComplete: () => {
          document.querySelector("#typed-line-2").innerHTML += ' <span class="emoji">💻</span>';
          new Typed("#typed-line-3", {
            strings: ["Creative Problem Solver"],
            typeSpeed: 50,
            showCursor: false,
            onComplete: () => {
              document.querySelector("#typed-line-3").innerHTML += ' <span class="emoji">🧩</span>';
            
          }})
        }
      });
    }
  });

  // AOS init
  AOS.init({ once: true });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  // Carousel logic
  let slideIndex = 0;
  const carousel = document.getElementById('carousel-container');
  const cards = document.querySelectorAll('.carousel-card');

  function showSlide(index) {
    const offset = index * -100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  window.nextSlide = function () {
    slideIndex = (slideIndex + 1) % cards.length;
    showSlide(slideIndex);
  }

  window.prevSlide = function () {
    slideIndex = (slideIndex - 1 + cards.length) % cards.length;
    showSlide(slideIndex);
  }

  showSlide(slideIndex); // Show first card

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

window.showTab = function (tab) {
  document.getElementById("technical-projects").classList.add("hidden");
  document.getElementById("design-projects").classList.add("hidden");
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

  document.getElementById(`${tab}-projects`).classList.remove("hidden");
  document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add("active");
};
