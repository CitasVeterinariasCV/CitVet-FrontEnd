// Seleccionamos los botones
const btnMascotas = document.getElementById('btn-mascotas');
const btnCitas = document.getElementById('btn-citas');
const btnAgregar = document.getElementById('btn-agregar');

// Seleccionamos las secciones
const sectionMascotas = document.getElementById('mascotas');
const sectionCitas = document.getElementById('citas');
const sectionAgregar = document.getElementById('agregar-mascota');

// Función para cambiar entre secciones
function showSection(button, section) {
    // Desactivar todos los botones y secciones
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));

    // Activar el botón y la sección seleccionada
    button.classList.add('active');
    section.classList.add('active');
}

// Eventos para los botones
btnMascotas.addEventListener('click', () => showSection(btnMascotas, sectionMascotas));
btnCitas.addEventListener('click', () => showSection(btnCitas, sectionCitas));
btnAgregar.addEventListener('click', () => showSection(btnAgregar, sectionAgregar));
