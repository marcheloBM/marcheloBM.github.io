function PS4Update(){verificarSesionYAbrirEnlace("https://mega.nz/folder/nARQlDgB#Py2-_d7txCc1AbeLV9M7uQ");}
function PS4UpdateWeb(){verificarSesionYAbrirEnlace("https://www.playstation.com/es-cl/support/hardware/ps4/system-software/");}



function nombre(){verificarSesionYAbrirEnlace("");}
function Web(){verificarSesionYAbrirEnlace("");}


function verificarSesionYAbrirEnlace(enlace) {
    if (sessionStorage.length > 0) {
        // Hay una sesión activa
        window.open(enlace);
    } else {
        iniciarSesion();
    }
}

function iniciarSesion() {
    var resultado = window.confirm('Sesión no iniciada.\n¿Desea iniciar sesión?');
    if (resultado === true) {
        window.alert('Ingrese los datos a continuación');
        window.location.href = '../Login.html';
    } else {
        window.alert('Sesión no iniciada');
    }
}
