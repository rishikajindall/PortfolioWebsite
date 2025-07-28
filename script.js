document.addEventListener("DOMContentLoaded", function () {
  // Typed animation
  new Typed("#typed-line-1", {
    strings: ["Hi! I'm Rishika Jindal"],
    typeSpeed: 40,
    showCursor: false,
    onComplete: () => {
      new Typed("#typed-line-2", {
        strings: ["Aspiring Developer"],
        typeSpeed: 40,
        showCursor: false,
        onComplete: () => {
          document.querySelector("#typed-line-2").innerHTML += ' <span class="emoji">💻</span>';
          new Typed("#typed-line-3", {
            strings: ["Let's build something beautiful together."],
            typeSpeed: 40,
            showCursor: false,
            onComplete: () => {
              document.querySelector("#typed-line-3").innerHTML += ' <span class="emoji">🧩</span>';
            }
          });
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

  // Carousels
  window.workIndex = 0;
  const workContainer = document.getElementById("work-carousel-container");

  window.showWorkSlide = function (index) {
    const totalSlides = workContainer.children.length;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    workContainer.style.transform = `translateX(-${index * 100}%)`;
    window.workIndex = index;
  };

  window.nextWorkSlide = function () {
    window.showWorkSlide(window.workIndex + 1);
  };

  window.prevWorkSlide = function () {
    window.showWorkSlide(window.workIndex - 1);
  };

  window.volunteerIndex = 0;
  const volunteerContainer = document.getElementById("volunteer-carousel-container");

  window.showVolunteerSlide = function (index) {
    const totalSlides = volunteerContainer.children.length;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    volunteerContainer.style.transform = `translateX(-${index * 100}%)`;
    window.volunteerIndex = index;
  };

  window.nextVolunteerSlide = function () {
    window.showVolunteerSlide(window.volunteerIndex + 1);
  };

  window.prevVolunteerSlide = function () {
    window.showVolunteerSlide(window.volunteerIndex - 1);
  };

  // Show initial carousel slides
  window.showWorkSlide(0);
  window.showVolunteerSlide(0);
});

// GLOBAL TAB SWITCHING (needs to be outside DOMContentLoaded for HTML to call it)
window.showTab = function (tab) {
  document.getElementById("technical-projects").classList.add("hidden");
  document.getElementById("design-projects").classList.add("hidden");
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

  document.getElementById(`${tab}-projects`).classList.remove("hidden");
  document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add("active");
};

// AOS Global config (in case of second init)
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true
});
