function RetroArchAnd() {verificarSesionYAbrirEnlace("https://mega.nz/folder/eUxSXATT#haVNqG37Rklu19WV3xRebQ");}
function RetroArchWeb() {verificarSesionYAbrirEnlace("https://www.retroarch.com/index.php?page=platforms");}
function YoutubeVanced() {verificarSesionYAbrirEnlace("https://mega.nz/folder/jM5ywCCA#vaUPPRMbTnhNbmhPR3fBHQ");}
function YoutubeVancedWeb() {verificarSesionYAbrirEnlace("https://youtubevanced.com/");}
function RAR() {verificarSesionYAbrirEnlace("https://mega.nz/folder/7UZGyBZI#a-gaJCaFOUzVVk2UFZ8srQ");}


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
