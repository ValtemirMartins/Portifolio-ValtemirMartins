// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 2000,
  once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Typing effect for the hero section
const texts = ['Backend !', 'Frontend !', 'Fullstack !' ];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) {
      count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  document.querySelector('.typing-text').textContent = ` Developer ${letter}`;
  
  if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 3000);
  } else {
      setTimeout(type, 100);
  }
}

// Start the typing animation
type();

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
      navbar.style.background = 'transparent';
      navbar.style.boxShadow = 'none';
  }
});
