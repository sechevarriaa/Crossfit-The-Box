/*
  Script para el Botón del menú en móviles y tablets:
  - Selecciona el botón de menú, el menú principal y todos los enlaces del menú.
  - Al hacer clic en el botón, alterna la clase 'open' para mostrar u ocultar el menú.
  - Al hacer clic en cualquier enlace, cierra el menú.
  - Al hacer clic fuera del menú, también se cierra automáticamente.
*/

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
    mainNav.classList.remove('open');
  }
});