//cagar los botonoes de inicio y cerrar sesión
function cargarBoton(){
var dato1 = sessionStorage.Usuario;
    //alert(dato1);
    var usu = document.getElementById("usu");
    if(dato1 != "marchelo"){
        usu.innerHTML += `<li><a href="Login.html" class="button primary small">Iniciar Sesion</a></li>`;
        //alert("Sin coneccion "+dato1);
    }else{
        usu.innerHTML += `<li><a href="#" onclick="cerrarSession()" class="button primary small">Cerrar Sesion ${dato1}</a></li>`+`<li><a href="HomeTutorial.html" class="button primary small">Home Tutoriales</a></li>`;
        //alert("Con coneccion "+dato1);
    }
}

// validar si hay una sesión iniciada para las WEB que la solicite
function validarSession(){
    var dato1 = sessionStorage.Usuario;
	if (dato1 == "marchelo") {
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
		//window.location.href='Home.html';
	}
}

//cargar las 2 funciones al cargar las Pagina WEB
function cargarDatos(){
    cargarBoton();
    validarSession();
}
//window.onload = cargarDatos;

//cerrar sesión elimina todos los datos
function cerrarSession(){
	//Elimina la sesión activa
	sessionStorage.clear();
	alert("session cerrada");
	window.location.href='Home.html';
}

//Para inicar sesión
function datos(){
    var nom = document.getElementById("demo-name").value;
    var cla = document.getElementById("demo-password").value;
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    fecha=day + "-" + month + "-" + year;
    //fecha="123";
    //alert(day + "-" + month + "-" + year);
    //document.getElementById("current_date").innerHTML = month + "-" + day + "-" + year;
    if(nom=="marchelo" && cla==fecha ){
        sessionStorage.Usuario=nom;
        sessionStorage.Clave=cla;
        //alert("oki");
        //window.location.href='HomeTutorial.html';
        window.history.back();
    }else{
        alert("Usuario Incorrecto o Clave Incorrecto");
    }
}

//Verifica si estan escrito el usuario y password
function Iniciar(){

    sessionStorage.clear();
    if(document.getElementById("demo-name").value != '' && (document.getElementById("demo-password").value != '')){
        datos();
    }else{
        alert("No has introducido tu nombre y tu password");
    }
}
