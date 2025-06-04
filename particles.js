  particlesJS("particles-js", {
    particles: {
      number: { value: 1500 },
      color: { value: "#e3a1a1" },
      shape: { type: "circle" },
      opacity: {
        value: 0.6,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 2,
        direction: "center",
        straight: false
      },
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: ["bubble", "repulse"]
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 30,
          duration: 0.2
        },
        bubble: {
          distance: 300,
          size: 3,
          duration: 0.5,
          opacity: 1.5
        }
      }
    },
    retina_detect: true
  });
