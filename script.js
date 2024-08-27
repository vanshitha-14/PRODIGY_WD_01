// script.js
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
          navbar.style.background = 'linear-gradient(90deg, #FFFFFF, #1da2f5)';
      } else {
          navbar.style.background = 'linear-gradient(90deg, #1da2f5, 	#FFFFFF)';
      }
  });
});
