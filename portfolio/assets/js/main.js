// Portfolio JavaScript - Jeffrey Mutchnik

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.endsWith(href) ||
        (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/portfolio/')))) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Animate stats on scroll
  const animateStats = () => {
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
      const rect = stat.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        stat.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', animateStats);
  animateStats(); // Run on load

  // Form validation for contact page
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const email = this.querySelector('input[type="email"]');
      const message = this.querySelector('textarea');

      if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        email.focus();
        return;
      }

      if (message && message.value.trim().length < 10) {
        e.preventDefault();
        alert('Please enter a message (at least 10 characters).');
        message.focus();
        return;
      }
    });
  }
});
