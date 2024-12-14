function datos() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        var usuario = document.getElementById("demo-usuario").value;
        var password = document.getElementById("demo-password").value;

        // Validar que el usuario y la contraseña no estén vacíos
        if (usuario.trim() === '' || password.trim() === '') {
            document.getElementById('mensaje').innerHTML = 'Por favor, completa todos los campos.';
            return; // Detener el proceso de inicio de sesión si hay campos vacíos
        }

        // Hashear la contraseña utilizando SHA1
        var passwordSha1 = sha1(password);

        // Si los datos son válidos, enviar la solicitud al servidor
        enviarSolicitud(usuario, passwordSha1);
    });
    //Uso estatico
    function enviarSolicitud2(usuario, password) {
        sessionStorage.usuario="admin";
        sessionStorage.nombre="admin";
        sessionStorage.apellido="admin";
        window.location.href='Home.html';
    }
    //Uso con web service 
    function enviarSolicitud(usuario, password) {
        fetch('http://marchelobm.kesug.com/wsLogin/jsonBuscar.php?usuario=' + usuario + '&pass=' + password) // Reemplazar la URL con la ruta correcta al script PHP en el servidor
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
                usuarios.forEach(usuario => {
                sessionStorage.usuario=usuario.usuario;
                sessionStorage.nombre=usuario.nombre;
                sessionStorage.apellido=usuario.apellido;

                //console.log(id,fecha,useragent);
                });
                
                window.location.href='Home.html';
                
                //window.history.back();
                //console.log("Hay una sesión activa ");

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
//cagar los botonoes de inicio y cerrar sesión
function cargarBoton(){
var dato1 = sessionStorage.usuario;
var dato2 = sessionStorage.nombre;
var dato3 = sessionStorage.apellido;
    //alert(dato1);
    var usu = document.getElementById("usu");
    if (sessionStorage.length > 0) {
        // Hay una sesión activa
        usu.innerHTML += `<li><b>Usuario: </b>${dato1}</li>`;
        usu.innerHTML += `<li><b>Nombre: </b>${dato2} ${dato3}</li>`;
        usu.innerHTML +=`<li><a href="HomeTutorial.html" class="button primary small fit">Home Tutoriales</a></li>`;
        usu.innerHTML +=`<li><a href="#" onclick="cerrarSession()" class="button primary small fit">Cerrar Sesion</a></li>`;

        //console.log("Hay una sesión activa");
    } else {
        // No hay una sesión activa
        usu.innerHTML += `<li><a href="Login.html" class="button primary small">Iniciar Sesion</a></li>`;
        console.log("No hay una sesión activa");
    }
}
// validar si hay una sesión iniciada para las WEB que la solicite
function validarSession(){
	if (sessionStorage.length > 0) {
        //validamos si alguna sesión activa
	}else{
    var resultado = window.confirm('Sesión no iniciada.\nDesea iniciar sesión?');
    if (resultado === true) {
        window.alert('Ingrese los datos a continuación');
        window.location.href='Login.html';
    } else {
        window.alert('session no iniciada');
        window.history.back();
    }
		//alert("2: "+dato1);
		//Comentar para programar los turoriales
		window.location.href='Home.html';
	}
}

//cargar las 2 funciones al cargar las Pagina WEB
function cargarBotonInfo(){
    cargarBoton();
    cargarInfoContacto();
}
function cargarDatos(){
    cargarBoton();
    validarSession();
    cargarInfoContacto();
}

//cerrar sesión elimina todos los datos
function cerrarSession(){
	//Elimina la sesión activa
	sessionStorage.clear();
	alert("session cerrada");
	window.location.href='Home.html';
}
