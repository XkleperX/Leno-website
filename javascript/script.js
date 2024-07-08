document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuItems = document.querySelector('.mobile-menu-items');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuItems.classList.toggle('open');
  });
});
