/* ========================= Custom JS ========================= */

// Preloader
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 500);
  }
});

// Scroll Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Mobile Menu Close
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarToggle.getAttribute('aria-expanded') === 'true') {
      navbarToggle.click();
    }
  });
});

// Wow Initialize
if (typeof WOW !== 'undefined') {
  new WOW().init();
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Show success message
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    
    // Reset form
    this.reset();
  });
}

// Navbar Active Link
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Document Ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Página cargada');
});
