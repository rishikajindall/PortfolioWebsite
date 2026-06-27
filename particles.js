particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#7dd3fc" },
    shape: { type: "circle" },
    opacity: {
      value: 0.2,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false }
    },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#7dd3fc",
      opacity: 0.07,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.3 } },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
});
