// Selecciona el botón hamburguesa y el menú
const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav ul');

// Agrega el evento click para mostrar/ocultar el menú
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

