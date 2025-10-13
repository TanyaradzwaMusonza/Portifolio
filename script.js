
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active classes
      tabButtons.forEach(b => b.classList.remove('active-tab'));
      tabContents.forEach(c => c.classList.add('hidden'));

      // Activate selected tab
      btn.classList.add('active-tab');
      document.getElementById(btn.dataset.tab).classList.remove('hidden');
    });
  });

    // Initialize Feather Icons
    feather.replace();
    
    // Cursor Effects
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    
    document.addEventListener('mousemove', (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
      
      cursorCircle.style.left = `${e.clientX}px`;
      cursorCircle.style.top = `${e.clientY}px`;
    });
    
    // Add hover effects for interactive elements
    document.querySelectorAll('a, button, .tech-icon, .card-hover').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorCircle.style.transform = 'translate(-50%, -50%) scale(0.5)';
      });
      
      el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorCircle.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
    
    // Initialize particles.js
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#3b82f6"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.3,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#3b82f6",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    });
    
    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        ease: "back.out(1.2)"
      });
    });
    
    // Animate project cards
    gsap.utils.toArray('.gradient-border').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
      });
    });
  
  const form = document.getElementById('contact-form');
const notification = document.getElementById('notification'); // Make sure you have this div in your HTML

// Function to show notification
function showNotification(message, success = true) {
  notification.textContent = message;
  // Gradient background: blue-purple for success, red for error
  notification.style.background = success
    ? "linear-gradient(to right, #3b82f6, #8b5cf6)"
    : "linear-gradient(to right, #f87171, #f43f5e)";
  
  // Show notification
  notification.classList.remove('opacity-0', 'pointer-events-none');
  notification.classList.add('opacity-100');

  // Hide after 3 seconds
  setTimeout(() => {
    notification.classList.remove('opacity-100');
    notification.classList.add('opacity-0', 'pointer-events-none');
  }, 3000);
}

// Form submit handler
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  emailjs.sendForm('service_tqpat7d', 'template_gpuabyt', this)
    .then(() => {
      showNotification('Message sent successfully!');
      form.reset();
    })
    .catch(err => {
      showNotification('Failed to send message.', false);
      console.error('EmailJS Error:', err);
    });
});


const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuToggle.querySelector('i');

// Toggle menu when hamburger is clicked
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.dataset.feather = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
  feather.replace();
});

// Close mobile menu when any link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); // hide menu
    menuIcon.dataset.feather = 'menu';  // reset icon to hamburger
    feather.replace();
  });
});
