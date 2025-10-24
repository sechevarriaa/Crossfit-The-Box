const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  document.body.classList.toggle('menu-abierto'); // 🔥 Añadido
});
