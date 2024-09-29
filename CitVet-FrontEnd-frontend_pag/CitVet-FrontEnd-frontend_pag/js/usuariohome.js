document.addEventListener('DOMContentLoaded', function () {
    const btnMascotas = document.getElementById('btn-mascotas');
    const btnAgregar = document.getElementById('btn-agregar');
    const btnCitas = document.getElementById('btn-citas');

    const secMascotas = document.getElementById('mascotas');
    const secAgregar = document.getElementById('agregar');
    const secCitas = document.getElementById('citas');

    function mostrarSeccion(seccion) {
        secMascotas.classList.remove('active');
        secAgregar.classList.remove('active');
        secCitas.classList.remove('active');

        seccion.classList.add('active');
    }

    btnMascotas.addEventListener('click', function () {
        mostrarSeccion(secMascotas);
        btnMascotas.classList.add('active');
        btnAgregar.classList.remove('active');
        btnCitas.classList.remove('active');
    });

    btnAgregar.addEventListener('click', function () {
        mostrarSeccion(secAgregar);
        btnAgregar.classList.add('active');
        btnMascotas.classList.remove('active');
        btnCitas.classList.remove('active');
    });

    btnCitas.addEventListener('click', function () {
        mostrarSeccion(secCitas);
        btnCitas.classList.add('active');
        btnMascotas.classList.remove('active');
        btnAgregar.classList.remove('active');
    });
});

