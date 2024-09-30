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
    
    document.getElementById('agregar-mascota-btn').addEventListener('click', function() {
        // Obtener valores del formulario
        var nombre = document.getElementById('nombre-mascota').value;
        var raza = document.getElementById('raza-mascota').value;
        var edad = document.getElementById('edad-mascota').value;
    
        // Verificar que los campos no estén vacíos
        if(nombre && raza && edad) {
            // Crear una nueva tarjeta para la mascota
            var nuevaMascota = `
            <div class="col-md-4">
                <div class="mascota-card">
                    <img src="ruta-imagen/default.jpg" alt="${nombre}">
                    <p>${nombre}</p>
                    <p>Raza: ${raza}</p>
                    <p>Edad: ${edad}</p>
                </div>
            </div>
            `;
            
            // Insertar la nueva tarjeta en la sección de Mis Mascotas
            document.getElementById('lista-mascotas').insertAdjacentHTML('beforeend', nuevaMascota);
    
            // Limpiar los campos del formulario
            document.getElementById('form-agregar-mascota').reset();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
    
});

