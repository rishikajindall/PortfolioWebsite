document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-line-1", {
    strings: ["Hi, I'm Rishika Jindal."],
    typeSpeed: 60,
    showCursor: true,
  });

  new Typed("#typed-line-2", {
    strings: ["Aspiring Developer"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 2000,
    loop: true,
    showCursor: false
  });

  new Typed("#typed-line-3", {
    strings: ["Let's build something beautiful together."],
    typeSpeed: 40,
    startDelay: 5000,
    showCursor: false
  });
});
