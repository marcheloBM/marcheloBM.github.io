function datos() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        var rut = document.getElementById("demo-rut").value;
        var password = document.getElementById("demo-password").value;

        // Validar que el RUT y la contraseña no estén vacíos
        if (rut.trim() === '' || password.trim() === '') {
            document.getElementById('mensaje').innerHTML = 'Por favor, completa todos los campos.';
            return; // Detener el proceso de inicio de sesión si hay campos vacíos
        }

        // Hashear la contraseña utilizando SHA1
        var passwordSha1 = sha1(password);

        // Si los datos son válidos, enviar la solicitud al servidor
        enviarSolicitud(rut, passwordSha1);
    });

    function enviarSolicitud(rut, password) {
        fetch('https://marchebm.000webhostapp.com/ws/index.php?rut=' + rut + '&pass=' + password) // Reemplazar la URL con la ruta correcta al script PHP en el servidor
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo iniciar sesión. Por favor, verifica tus credenciales.');
            }
            return response.json();
        })
        .then(data => {
            // Verificar la respuesta del servidor para determinar si el inicio de sesión fue exitoso
            if (data && data.length > 0) {
                // Si hay datos en la respuesta, significa que el inicio de sesión fue exitoso
                document.getElementById('mensaje').innerHTML = 'Inicio de sesión exitoso.';
                // Aquí podrías redirigir al usuario a la página principal u otra página de su elección

                // Procesar los datos y mostrarlos en la página
                const usuarios = data; // Array de objetos de usuario
                let html = '';

                usuarios.forEach(usuario => {
                    html += `
                        <div>
                            <p><strong>ID de Usuario:</strong> ${usuario.idusuario}</p>
                            <p><strong>RUT:</strong> ${usuario.rut}</p>
                            <p><strong>Contraseña:</strong> ${usuario.pass}</p>
                            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
                            <p><strong>Apellido:</strong> ${usuario.apellido}</p>
                            <p><strong>Tipo de Usuario:</strong> ${usuario.tipousuario}</p>
                        </div>
                        <hr>
                    `;
                });

                document.getElementById('datosUsuario').innerHTML = html;
            } else {
                // Si la respuesta está vacía, significa que el inicio de sesión falló
                throw new Error('No se pudo iniciar sesión. Por favor, verifica tus credenciales.');
            }
        })
        .catch(error => {
            console.error('Error al iniciar sesión:', error.message);
            document.getElementById('mensaje').innerHTML = error.message;
        });
    }

    // Función para hashear la contraseña utilizando SHA1
    function sha1(str) {
        var sha1 = new jsSHA('SHA-1', 'TEXT');
        sha1.update(str);
        return sha1.getHash('HEX');
    }
}
