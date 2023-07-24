// Datos de ejemplo para cada categoría
const contenidoPorCategoria = {
    PS2: [
        { nombre: "Seleccionar", ubicacion: "#", comentario: "Elija una opción" },
        { nombre: "PS2 XtremeEliteBoot + PS2SX", ubicacion: "PS2XtremeEliteBootPS2SX", comentario: "XEB con estilos nuevos y nuevas aplicaciones como PS2SX Instalará, configurará, decorará y administrará tus juegos de PS1 (PS-X)" },
        { nombre: "PS2 ChipMatrix", ubicacion: "PS2ChipMatrix", comentario: "Configura tu ChipMatrix a tu gusto toda la información necesaria para configurarlo y dejar como tu prefieras." },
		{ nombre: "PS2 FreeDVDBoot", ubicacion: "PS2FreeDVDBoot", comentario: "Instalar FreeDVDBoot para poder desbloquear nuestra consola con una memory card solamente" },
		{ nombre: "PS2 FunTuna", ubicacion: "PS2FunTuna", comentario: "Instalar Fontuna para poder desbloquear nuestra consola con una memory card para todas las consolas" },
		{ nombre: "PS2 OPL Actualizar/Configurar", ubicacion: "PS2OPLActConfig", comentario: "Instalar o Actualizar y configurar nuestro OPL en el menú principal, para agregar o eliminar ítems del menu" },
		{ nombre: "PS2 RetroArch", ubicacion: "PS2RetroArch", comentario: "RetroArch es una interfaz para emuladores, motores de juegos y reproductores multimedia." },
		{ nombre: "PS1 en PS2", ubicacion: "PS2PS1EnPS2", comentario: "Podemos probar nuestra aplicación para correr juegos de PS1 en nuestra PS2." },
		{ nombre: "PS2 Añadir Juegos", ubicacion: "PS2Juegos", comentario: "Si queremos agregar juegos en formato ISO de más de 4GB de capacidad en nuestra USB." },
		{ nombre: "PS2 OPL Server", ubicacion: "PS2OPLServer", comentario: "Con OPL Server podemos pasar nuestros juegos desde nuestra computadora hacia nuestra consola de PS2 sin la necedad de un USB solo con un cable de red." },
		{ nombre: "PS2 Formatear Memory Card PS2", ubicacion: "PS2FormaMemCardPS2", comentario: "Podemos formatear nuestra memory card de PS2 y eliminar todo el contenido para empezar con una Memory card desde cero" },
		{ nombre: "PS2 APPS USB", ubicacion: "PS2APPSUSB", comentario: "Modo APPS de nuestro USB o Servidor con aplicaciones automáticas para nuestra consola PS2 bien explicado" },
		{ nombre: "PS2 Temas OPL", ubicacion: "PS2Temas", comentario: "Los mejores temas para nuestra app OPL podemos dar un nuevo estilo gracias al pack de temas que emos recopilados para nuestra consola de PS2" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
	PSP: [
        { nombre: "Seleccionar", ubicacion: "#", comentario: "Elija una opción" },
        { nombre: "Firmware Oficial", ubicacion: "PSPFirmwareOficial", comentario: "Si queremos instalar el firmware oficial podemos seguir esta guía." },
        { nombre: "Hack Permanente", ubicacion: "PSPHack", comentario: "Podemos liberar nuestra consola PSP para poder instalar aplicaciones o juegos y también la podemos dejar de forma permanente el hack." },
		{ nombre: "Agenda Digital", ubicacion: "PSPAgendaDigital", comentario: "PSP-PDA, añade funciones de agenda digital a nuestra PSP" },
		{ nombre: "Air Crack-PSP (Wifi)", ubicacion: "PSPAirCrackPSP", comentario: "Desvelador de contraseñas wifi AirCrack-PSP test 0.52 es una aplicacion que sirve para desencriptar las contraseñas de red wifi." },
		{ nombre: "Alarma PSP", ubicacion: "PSPAlarma", comentario: "PSPALARM! es un homebrew desarrollado por CoD3r-D que hará que nuestra PSP se convierta en un efectivo despertador" },
		{ nombre: "PSP con OSB", ubicacion: "PSPConOSB", comentario: "Plugin (p.o.c) de video UVC de PS Vita portado a PSP por @Xerpi. Este es un complemento que te permite transmitir la pantalla de tu PSP a tu computadora a través de USB.." },
		{ nombre: "Chronoswitch", ubicacion: "PSPChronoswitch", comentario: "Impresionante Homebrew que nos permitirá bajar nuestras PSP de casi cualquier versión 6.XX a 6.20 (o menor, si tu PSP lo soporta)." },
		{ nombre: "CIPL Flasher", ubicacion: "PSPCIPLFlasher", comentario: "INSTALACION DE CFW EN PSP ADVERTENCIA, NO INSTALAR CFW PERMANENTE EN CONSOLAS CON PLACA MALDITA." },
		{ nombre: "CWCheat Trucos", ubicacion: "PSPCWCheat", comentario: "Si te gusta jugar a los juegos con trucos, necesitas este plugin." },
		{ nombre: "FuSa GAMEPAD", ubicacion: "PSPFuSaGAMEPAD", comentario: "Usa tu PSP como PAD para tus juegos del PC y juegos de PS3, vía USB." },
		{ nombre: "Linterna", ubicacion: "PSPLinterna", comentario: "PSPLight es una curiosa aplicación que nos puede ayudar en más de una ocasión, convertirá nuestra PSP en una linterna para cuando sea que la necesitemos." },
		{ nombre: "LIVE TV", ubicacion: "PSPLIVETV", comentario: "Podamos ver la televisión vía streaming desde nuestra PSP siempre y cuando dispongamos de una conexión wifi." },
		{ nombre: "Mapa de santiago", ubicacion: "PSPMapViewer", comentario: "Con esta aplicación podemos tener el mapa de Santiago de chile en nuestra consola no actualizado al día de hoy." },
		{ nombre: "Navegador HTML", ubicacion: "PSPNavegadorHtml", comentario: "Seguro sabes del Navegador que lanzo Google, Google Chrome, ahora finalmente llega para nuestras portatiles, es un navegador dentro de un portal, funciona en cualquier PSP, con CF o sin CF." },
		{ nombre: "NitePr Trucos", ubicacion: "PSPNitePrTrucos", comentario: "Con NitePR podemos colocarles trucos a nuestros juegos de PSP y crear nuevos si no los tiene." },
		{ nombre: "Radio", ubicacion: "PSPRadio", comentario: "Popular y practico programa, que nos permitira escuchar la radio de internet desde nuestra PSP, a través de la conexion WIFI." },
		{ nombre: "PSP textos", ubicacion: "PSPTextos", comentario: "Al presionar Seleccionar, aparece el menú, lo que le permite marcar, buscar, cargar y guardar archivos de testo." },
		{ nombre: "Ubuntu", ubicacion: "PSPUbuntu", comentario: "Ubuntu 7.10 homebrew de jack118218 para PSP. El desarrollador ha anunciado que esta aplicación shell se ha actualizado a la versión 1.0." },
		{ nombre: "Windows 7", ubicacion: "PSPWindows7", comentario: "Windows 7, donde disponemos de varias aplicaciones para realizar tareas distintas. En esta primera versión BETA." },
		{ nombre: "Atari 2600", ubicacion: "PSPAtari2600", comentario: "La Atari 2600 es una videoconsola lanzada al mercado en 1977 y ahora podemos usarla en nuestra consola PSP." },
		{ nombre: "ColecoVision", ubicacion: "PSPColecoVision", comentario: "La ColecoVision es una consola de videojuegos de segunda generación lanzada al mercado estadounidense en agosto de 1982 por la empresa Coleco que ahora podemos disfrutar en PSP." },
		{ nombre: "DosBox", ubicacion: "PSPDosBox", comentario: "DOSBox es un emulador que recrea un entorno similar al sistema MS-DOS con el objetivo de poder ejecutar programas y videojuegos." },
		{ nombre: "Game Boy", ubicacion: "PSPGBA", comentario: "La Game Boy Advance, abreviada GBA, es una videoconsola portátil de la quinta generación de la familia de sistemas de videojuegos de Nintendo." },
		{ nombre: "MAME FBA", ubicacion: "PSPMAMEFBA", comentario: "MAME, Multiple Arcade Machine Emulator, es un emulador arcade gratuito y de código abierto diseñado para ser capaz de emular la mayoría de las máquinas arcade y listo para nuestra PSP." },
		{ nombre: "MegaDrive", ubicacion: "PSPMegaDrive", comentario: "Mega Drive, conocida en diversos territorios de América como Genesis, es una clásica videoconsola de sobremesa de 16 bits desarrollada por Sega Enterprises disponible en muestra consola PSP." },
		{ nombre: "RetroArch", ubicacion: "PSPRETROARCH", comentario: "RetroArch es un multi-emulador que combina varios cores de emuladores desarrollados por otros programadores y que fueron portados a la librería conocida como libretro que utiliza RetroArch." },
		{ nombre: "Sega Master System y Game Gear", ubicacion: "PSPSMSyGG", comentario: "Es la tercera consola portátil con pantalla en color de la historia, después de la Atari Lynx y la Turbo Express y listo para usar en nuestra consola PSP." },
		{ nombre: "Super Nintendo", ubicacion: "PSPSuperNintendo", comentario: "La Super Nintendo Entertainment System, conocida popularmente como la Super Nintendo disponible en nuestra consola PSP." },
		{ nombre: "Super Nintendo 64", ubicacion: "PSPSuperNintendo64", comentario: "Nintendo 64 es la cuarta videoconsola de sobremesa producida por Nintendo para disfrutar en nuestra consola PSP." },
		{ nombre: "Picture", ubicacion: "PSPPICTURE", comentario: "Algunas imágenes de fonde de pantalla para darle algún estilo nuevo a nuestra consola." },
		{ nombre: "Temas", ubicacion: "PSPTemas", comentario: "Esta es una recopilación de temas en formato ctf para el plugin Custom XMB, estos y los temas en formato ptf son los únicos que no tocan la flash de la PSP." },
		{ nombre: "Todo para PSP", ubicacion: "PSPTodoPSP", comentario: "Donde podemos encontrar todo lo necesario para nuestra consola PSP en una misma WEB." },
		{ nombre: "PSX2PSP", ubicacion: "PSXaPSP", comentario: "Si tienes juegos de PlayStation 1 (PSX/PS1) en tu PC, te explicamos como puedes convertirlos para poder jugarlos en tu PSP (PlayStation Portable). Con PSX2PSP." }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
    PS3: [
        { nombre: "Seleccionar", ubicacion: "#", comentario: "Elija una opción" },
        { nombre: "PS3 Backup IDPS-NOR", ubicacion: "PS3BackupIDPSNOR", comentario: "Copias de seguridad del act-id y memoria flash de nuestra consola" },
        { nombre: "PS3 Activar HEN", ubicacion: "PS3ActivarHEN", comentario: "Activando el HEN en nuestra consola PS3 (4.88-4.89 HFW)" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
	PSVita: [
		{ nombre: "Seleccionar", ubicacion: "#", comentario: "Elija una opción" },
        { nombre: "nombre", ubicacion: "Contenido 1 de PSVita", comentario: "Comentario para Contenido 1 de PSVita" },
        { nombre: "nombre", ubicacion: "Contenido 2 de PSVita", comentario: "Comentario para Contenido 2 de PSVita" },
        { nombre: "nombre", ubicacion: "Contenido 3 de PSVita", comentario: "Comentario para Contenido 3 de PSVita" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
    PS4: [
		{ nombre: "Seleccionar", ubicacion: "#", comentario: "Elija una opción" },
        { nombre: "nombre", ubicacion: "Contenido 1 de PS4", comentario: "Comentario para Contenido 1 de PS4" },
        { nombre: "nombre", ubicacion: "Contenido 2 de PS4", comentario: "Comentario para Contenido 2 de PS4" },
        { nombre: "nombre", ubicacion: "Contenido 3 de PS4", comentario: "Comentario para Contenido 3 de PS4" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
    PC: [
        { nombre: "Seleccionar", ubicacion: "#", comentario: "Elija una opción" },
        { nombre: "CMD Defender", ubicacion: "CmdDefender", comentario: "Cómo abrir Windows defender desde comando cmd en Windows" },
        { nombre: "Contenido 3 de PC", ubicacion: "ubicacion12", comentario: "Comentario para Contenido 3 de PC" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ]
};

function actualizarContenido() {
    const categoriaSeleccionada = document.getElementById("categorias").value;
    const contenidoSelect = document.getElementById("contenido");
    const comentarioContenedor = document.getElementById("comentarioContenedor");

    // Limpiar opciones previas
    contenidoSelect.innerHTML = "";
    comentarioContenedor.textContent = "";

    // Agregar las opciones correspondientes a la categoría seleccionada
    contenidoPorCategoria[categoriaSeleccionada].forEach((opcion, index) => {
        const option = document.createElement("option");
        option.value = index; // Asignar un valor numérico para cada opción
        option.text = opcion.nombre;
        option.title = opcion.comentario; // Agregar el comentario
        contenidoSelect.add(option);
    });
}

function irAPagina() {
    const categoriaSeleccionada = document.getElementById("categorias").value;
    const contenidoSelect = document.getElementById("contenido");
    const contenidoSeleccionadoIndex = contenidoSelect.value;

    if (categoriaSeleccionada && contenidoSeleccionadoIndex !== null) {
        const contenidoSeleccionado = contenidoPorCategoria[categoriaSeleccionada][contenidoSeleccionadoIndex];
        const ubicacionSeleccionada = contenidoSeleccionado.ubicacion;
        const nombreSeleccionado = contenidoSeleccionado.nombre;
        const comentarioSeleccionado = contenidoSeleccionado.comentario;

        // Puedes utilizar la información seleccionada como necesites, por ejemplo, para redirigir a una página con la ubicación y nombre seleccionados
        const url = `Tutoriales/${categoriaSeleccionada}/${ubicacionSeleccionada}.html`;

        // Muestra el comentario en el contenedor
        comentarioContenedor.textContent = comentarioSeleccionado;

        // Redirige a la página correspondiente
        window.location.href = url;
    }
}
									