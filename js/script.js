const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
