function Twitter(){
        window.open("https://twitter.com/marchelo_bm")
}
function Facebook(){
        window.open("https://www.facebook.com/marcelo.bm")
}
function Instagram(){
        window.open("https://www.instagram.com/marchelo.bm")
}
function Whatsapp(){
        window.open("https://api.whatsapp.com/send?phone=56946426130")
}
function Messenger(){
        window.open("https://m.me/marcelo.bm")
}
function Github(){
        window.open("https://github.com/marcheloBM")
}
function Telegram(){
        window.open("https://t.me/marcheBMPC")
}
function CorreoContac(){
        window.open("mailto:marchelo.bm@hotmail.com?Subject=Interesado%20en%20sus%20servicios")
}
function NumeroContac(){
        window.open("tel:+56xxxxxxxxx")
}

// Definir una función para cargar la información de contacto
function cargarInfoContacto() {
    //console.log("si");
    // Datos de contacto
    var correo = "marchelo.bm@hotmail.com";
    var numero = "(+569) xxxx xxxx";
    var ubicacion = "Puente Alto<br/>Región Metropolitana, Chile";

    // Obtener los elementos <a> por su ID
    var elementoCorreo = document.getElementById('correo-contacto');
    var elementoNumero = document.getElementById('numero-contacto');

    // Obtener el elemento para la ubicación
    var elementoUbicacion = document.getElementById('ubicacion-contacto');

    // Asignar los datos a los elementos correspondientes
    elementoCorreo.textContent = correo;
    elementoCorreo.href = "mailto:" + correo; // Agregar enlace de correo electrónico

    elementoNumero.textContent = numero;

    // Asignar el contenido de la ubicación (con HTML)
    elementoUbicacion.innerHTML = ubicacion;
}
