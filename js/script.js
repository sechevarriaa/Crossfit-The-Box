const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

// Abre/cierra el menú al pulsar el botón hamburguesa
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// 🔥 Cierra el menú al hacer clic en cualquier enlace del menú
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');

  });
});

// Cierra el menú si se hace clic fuera del panel (opcional, pero elegante)
document.addEventListener('click', (e) => {
  if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
    mainNav.classList.remove('open');
  }
});
