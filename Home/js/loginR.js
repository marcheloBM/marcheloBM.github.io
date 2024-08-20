function datos() {
    document.getElementById("loginRegisForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        var usuario = document.getElementById("demo-usuario").value;
        var password = document.getElementById("demo-password").value;

        var nombre = document.getElementById("demo-nombre").value;
        var apellido = document.getElementById("demo-apellido").value;
        // Obtener el valor del país
        var select = document.getElementById("country");
        var manualInput = document.getElementById("manual-country");
        var pais;

        if (manualInput.style.display === 'block') {
            pais = manualInput.value;
        } else {
            pais = select.value;
        }
        var celular = document.getElementById("demo-celular").value;
        var email = document.getElementById("demo-email").value;
        var ahora = new Date();
        var fecha = ahora.getFullYear() + '-' +
            ('0' + (ahora.getMonth() + 1)).slice(-2) + '-' +
            ('0' + ahora.getDate()).slice(-2) + ' ' +
            ('0' + ahora.getHours()).slice(-2) + ':' +
            ('0' + ahora.getMinutes()).slice(-2) + ':' +
            ('0' + ahora.getSeconds()).slice(-2);

            //console.log(pais);
        // Validar que el usuario y la contraseña no estén vacíos
        if (usuario.trim() === '' || password.trim() === '' || nombre.trim() === '' || pais.trim() === '' || celular.trim() === '' || email.trim() === '') {
            document.getElementById('mensaje').innerHTML = 'Por favor, completa todos los campos.';
            return; // Detener el proceso de inicio de sesión si hay campos vacíos
        }

        // Hashear la contraseña utilizando SHA1
        var passwordSha1 = sha1(password);

        // Si los datos son válidos, enviar la solicitud al servidor
        enviarSolicitud(usuario, passwordSha1,nombre,apellido,pais,celular,email,fecha);
    });

    function enviarSolicitud(usuario, password,nombre,apellido,pais,celular,email,fecha) {
        const url = 'https://marchebm.000webhostapp.com/wsLogin/json.php';
    
        // Crear un objeto con los datos a enviar
        const data = {
            usuario: usuario,
            pass: password,
            nombre: nombre,
            apellido: apellido,
            pais: pais,
            celular: celular,
            correo: email, // Asegúrate de que el nombre del campo coincide con el esperado en el servidor
            fechaR: fecha
        };

        // Enviar la solicitud POST
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Tipo de contenido adecuado para la mayoría de los servidores PHP
            },
            body: new URLSearchParams(data) // Convertir el objeto data a un formato de cadena para enviar
        })
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            console.log(data); // Manejar la respuesta

            // Si la respuesta es exitosa, redirigir al usuario a Login.html
            window.location.href = 'Login.html';
        })
        .catch(error => console.error('Error:', error)); // Manejar cualquier error
    }

    // Función para hashear la contraseña utilizando SHA1
    function sha1(str) {
        var sha1 = new jsSHA('SHA-1', 'TEXT');
        sha1.update(str);
        return sha1.getHash('HEX');
    }
}
