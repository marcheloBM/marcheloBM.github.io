function RetroArchAnd() {verificarSesionYAbrirEnlace("https://mega.nz/folder/aQg0lZBB#CLlITOYrv_HBq9dXTeb6EQ");}
function RetroArchWeb() {verificarSesionYAbrirEnlace("https://www.retroarch.com/index.php?page=platforms");}
function YoutubeVanced() {verificarSesionYAbrirEnlace("https://mega.nz/folder/6coXkIxT#zqscjPtfNfm5naVZjP2ucA");}
function YoutubeVancedWeb() {verificarSesionYAbrirEnlace("https://youtubevanced.com/");}
function RAR() {verificarSesionYAbrirEnlace("https://mega.nz/folder/rdZAmSgA#wgSKWd58nvljkG4UrQTewg");}


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
