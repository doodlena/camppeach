
// Hamburger menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navOverlay = document.getElementById('navOverlay');

  if (hamburger && mobileNav && navOverlay) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      navOverlay.classList.toggle('active');
    });

    // Close menu when overlay is clicked
    navOverlay.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      navOverlay.classList.remove('active');
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
      });
    });
  }
});
