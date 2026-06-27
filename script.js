document.addEventListener("DOMContentLoaded", function () {
  runTerminal();

  AOS.init({ duration: 600, easing: 'ease-in-out', once: true });

  window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("scrolled", window.scrollY > 20);
  });

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
  navLinks.addEventListener("click", () => navLinks.classList.remove("active"));
});

function typeText(el, text, speed, cb) {
  let i = 0;
  el.textContent = '';
  (function tick() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, speed);
    } else if (cb) cb();
  })();
}

function show(id) {
  const el = document.getElementById(id);
  if (el) { el.style.display = ''; el.classList.add('t-reveal'); }
}

function runTerminal() {
  typeText(document.getElementById('t-cmd1'), 'whoami', 80, () => {
    setTimeout(() => {
      show('t-out1');
      setTimeout(() => {
        show('t-line2');
        typeText(document.getElementById('t-cmd2'), 'cat role.txt', 60, () => {
          setTimeout(() => {
            show('t-out2');
            setTimeout(() => {
              show('t-line3');
              typeText(document.getElementById('t-cmd3'), 'echo $STATUS', 55, () => {
                setTimeout(() => {
                  show('t-out3');
                  setTimeout(() => show('t-cursor'), 300);
                }, 200);
              });
            }, 400);
          }, 200);
        });
      }, 350);
    }, 200);
  });
}

window.showTab = function (tab) {
  document.getElementById("technical-projects").classList.add("hidden");
  document.getElementById("design-projects").classList.add("hidden");
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`${tab}-projects`).classList.remove("hidden");
  document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add("active");
};
