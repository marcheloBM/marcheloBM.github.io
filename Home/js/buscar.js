// Datos de ejemplo para cada categoría
const contenidoPorCategoria = {
    PS2: [
        { nombre: "Seleccionar", ubicacion: "PS2Tutorial", comentario: "Elija una opción" },
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
		{ nombre: "PS2 Temas OPL", ubicacion: "PS2Temas", comentario: "Los mejores temas para nuestra app OPL podemos dar un nuevo estilo gracias al pack de temas que emos recopilados para nuestra consola de PS2" },{ nombre: "PS2 Apollo Save Tool", ubicacion: "PS2ApolloSaveTool", comentario: "Apollo Save Tool es una aplicación para administrar archivos de partidas guardadas, trofeos y licencias en PlayStation 2." },
		{ nombre: "PS2Temps", ubicacion: "PS2Temps", comentario: "Aquí hay un ELF (aplicación de krat0s) para mostrar las temperaturas de tu PS2." },
		{ nombre: "PSXiSO Compression Tool", ubicacion: "PSXiSOCompressionTool", comentario: "Una interfaz rápida que escribí para compresión CHD y ZSO." }, { nombre: "wLaunchELF_ISR", ubicacion: "wLaunchELFISR", comentario: "Podemos abrir unidades en formato EXFAT des nuestra consola " }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
	PSP: [
        { nombre: "Seleccionar", ubicacion: "PSPTutorial", comentario: "Elija una opción" },
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
        { nombre: "Seleccionar", ubicacion: "PS3Tutorial", comentario: "Elija una opción" },
        { nombre: "PS3 Backup IDPS-NOR", ubicacion: "PS3BackupIDPSNOR", comentario: "Copias de seguridad del act-id y memoria flash de nuestra consola" },
        { nombre: "PS3 Activar HEN", ubicacion: "PS3ActivarHEN", comentario: "Activando el HEN en nuestra consola PS3 (4.88-4.89 HFW)" },
		{ nombre: "HEN Portable", ubicacion: "PS3HENPortable", comentario: "Podemos instalar nuestro HEN desde sus celulares Android sin la necesidad de un PC o de conexión directa a WEB Oficial." },
		{ nombre: "PS3 Apollo Save Tool", ubicacion: "PS3ApolloSaveTool", comentario: "Apollo Save Tool es una aplicación para administrar archivos de partidas guardadas, trofeos y licencias en PlayStation 3." },
		{ nombre: "PS3 Artemis", ubicacion: "PS3Artemis", comentario: "Artemis, un sistema de trampas para videojuegos de Playstation 3 de código abierto creado bajo la iniciativa Project Artemis. Podemos colocar muchos trucos para nuestros juegos de PS3." },
		{ nombre: "PS3 Audio por USB o Bluetooth", ubicacion: "PS3AudioUSBoBluetooth", comentario: "Podemos usar audífonos por USB o por Bluetooth con esta sencilla aplicación en nuestra consola PS3 ya que por defecto no podemos realizar este procedimiento con muestro audífonos." },
		{ nombre: "PS3 FileManager", ubicacion: "PS3FileManagerManaGunZ", comentario: "Este gestor de ficheros nos da la posibilidad de navegar por todos los directorios de la PS3, así como de cualquier memoria externa que tengamos conectada. Podremos copiar y eliminar de la forma más simple imaginable." },
		{ nombre: "PS3 IRISMAN", ubicacion: "PS3IRISMAN", comentario: "Gestor de juegos, administrador de archivos y muchas herramientas más componen este manager que lleva muchos años dando soporte en Playstation 3." },
		{ nombre: "PS3 Licencias", ubicacion: "PS3Licencias", comentario: "Existe el típico pkg de las 15.280 licencias que las instalas y ya deberías de poder licenciar y activar casi todo el contenido sin que salga la bolsita típica de que hay que renovar (comprar)" },
		{ nombre: "PS3 Movian", ubicacion: "PS3MOVIAN", comentario: "Es una app de ps3 que se instala en CFW/HEN para ver peliculas, series, listas de reproducción y escuchar música, todo Online. Es tan útil que si combinas Movian con las apps de Spotify, Netflix y Crunchyroll te queda todo un centro multimedia completo." },
		{ nombre: "PS3 MultiMAN", ubicacion: "PS3MultiMAN", comentario: "Es una aplicación homebrew que funciona como gestor de archivos y cargador de backups (copia de seguridad de juegos de PS3)." },
		{ nombre: "PS3 Plex", ubicacion: "PS3Plex", comentario: "Una aplicación con la que puedes convertir tu ordenador en un centro multimedia utilizando el contenido digital que tengas en él. Reconoce todos los archivos multimedia que tengas alojados en la carpeta de origen." },
		{ nombre: "PS3 Liberar 8% HDD", ubicacion: "PS3Libera8HDD", comentario: "Desbloquea hasta un 8% de espacio en el HDD. Es sorprendente, pero real, gracias a 3141card ahora puedes liberar espacio en el HDD con solo instalar un simple pkg." },
		{ nombre: "PS3 webMAN MOD", ubicacion: "PS3WebMANMOD", comentario: "Es un manager plugin sprx compatible con CEX/DEX y HEN, es el mejor compañero para todos los Custom Firmware COBRA así como con HEN. Si quieres lanzar cómodamente tus juegos desde el XMB." },
		{ nombre: "PS3 Simple File Manager", ubicacion: "PS3SimpFileMan", comentario: "Administrador de archivos simple para PS3 compatible con sistemas de archivos exFAT y FAT32. Podemos copiar desde nuestro USB o HDD hacia nuestra consola PS3." },
		{ nombre: "PS3 Convertir ISO de PS2 sin PC", ubicacion: "PS3ConvertirISOPS2", comentario: "Con este método podemos Convertir ISO de PS2 para HEN sin PC en nuestra consola de PS3, Convierte tus juegos de playstation 2 a formato de imagen ISO, donde se te facilitara la manipulación de tu juego, sin la necesidad de programas." },
		{ nombre: "PS3 PSP en PS3", ubicacion: "PS3PSP", comentario: "Con estas aplicaciones podemos jugar nuestros juegos de PSP en nuestra consola PS3 más fácil imposible" },
		{ nombre: "PS3 RetroArch", ubicacion: "PS3Retroarch", comentario: "RetroArch es una interfaz para emuladores, motores de juegos y reproductores multimedia. Le permite ejecutar juegos clásicos en una amplia gama de computadoras y consolas a través de su elegante interfaz gráfica." },
		{ nombre: "PS3 PKGI", ubicacion: "PS3PKGI", comentario: "PKGi PS3 es un port para Playstation 3. Esta aplicación nos permite descargar e instalar archivos .pkg directamente en nuestra Playstation 3. Descargas automáticas." },
		{ nombre: "PS3 VIDEOSTORE", ubicacion: "PS3VIDEOSTORE", comentario: "Store gratuito para PlayStation 3 con juegos PSX, PS2, PS3, PSP y DLC. También programas (Homebrew), utilidades y personalización para PS3. Compatible con cualquier consola PS3 ya sea FAT, SLIM o SUPER SLIM con HEN. Para CFW se requiere de un fix exclusivo." },
		{ nombre: "PS3 WebStore Comunidad", ubicacion: "PS3WebStoreComunidad", comentario: "Store para descargar juegos de PSX, PS2, PS3, PSP y DLC. También contiene programa (Homebrew), utilidades y personalización para PS3. Esta aplicación ya no tiene soporte solo queda probarla." },
		{ nombre: "PS3 WIKISTORE", ubicacion: "PS3WIKISTORE", comentario: "Store donde podrás descargar juegos de PSX, PS2, PSP, PS3 PSN y Exclusivos directamente desde tu consola PS3. Tendrás acceso a descargas de Hombrew, emuladores retro y un montón de modificaciones para tu consola." },
		{ nombre: "9420 caratulas para los Juegos PS3", ubicacion: "PS39420caratulas", comentario: "Store donde podrás descargar juegos de PSX, PS2, PSP, PS3 PSN y Exclusivos directamente desde tu consola PS3. Tendrás acceso a descargas de Hombrew, emuladores retro y un montón de modificaciones para tu consola." },
		{ nombre: "Pack Avatares PS3", ubicacion: "PS3PackAvatares", comentario: "Avatares instalables en pkg son 4330 archivos para escoger e instalar. El pack bien comprimido en rar lo único que hay que hacer es descomprimirlo y escoger cuales quiere instalar en su consola PS3" },
		{ nombre: "Hybrid Firmware Tools", ubicacion: "PS3HybrindFirmwareTools", comentario: "Menú oculto para nuestra consola PS3 con este menú podemos tener acceso a muchas funciona para nuestra consola." },
		{ nombre: "Contendido de un .pkg", ubicacion: "PS3ContendidoPKG", comentario: "PkgView es una herramienta para extracción de archivos pkg de PS3." },
		{ nombre: "Make Package Custom", ubicacion: "PS3MakePackageCustom", comentario: "Podemos crear archivos pkg de lo que queramos como por ejemplo temas, juegos, licencias, etc." },
		{ nombre: "PS3 Game Updates", ubicacion: "PS3GameUpdater", comentario: "PS3 Game Updates podemos descargar las actualizaciones de nuestros juegos a si no tendremos que esperar a que la consola descargue e instale las actualizaciones." },
		{ nombre: "PS3 NET Server", ubicacion: "PS3NETServer", comentario: "ps3netsrv es una aplicación de servidor que se utiliza para transmitir contenido desde un servidor remoto a la PS3. Desde un pc hacia nuestra consola PS3 todos los juegos que queramos." },
		{ nombre: "PARAM SFO Editor", ubicacion: "PS3PARAMSFOeditor", comentario: "PARAM SFO Editor podemos saber más información de nuestros juegos con param.sfo y podemos modificar más información." },
		{ nombre: "RetroXMB", ubicacion: "PS3RetroXMB", comentario: "Convertir Juegos ISO de PS2 a PKG en nuestra computadora (PC, Notebook), de forma fácil y sencilla sin más dificultades." },
		{ nombre: "PKG Linker", ubicacion: "PS3PKGLinker", comentario: "PKG Linker es una herramienta de Windows para cargar imágenes de juegos y otras aplicaciones en una PS3 habilitada para CFW/HAN. Este método permite a los usuarios sortear la limitación de tamaño de archivo de 4 Gb." },
		{ nombre: "PS3Merge", ubicacion: "PS3Merge", comentario: "PS3Merge es una herramienta que permite a los usuarios fusionar archivos divididos por varios administradores de copia de seguridad de PS3." },
		{ nombre: "PSNstuff", ubicacion: "PS3PSNStuff", comentario: "PSNstuff Es una herramienta para pc que permite descargar juegos de cada consola playstation (del ps1 a la ps4) actualizar su base de datos y también añadir más juegos en el catalogo." },
		{ nombre: "Remoteplay", ubicacion: "PS3Remoteplay", comentario: "Con Remoteplay podemos conectar de forma remota nuestra consola PS3 con nuestro ordenador y esta excelente aplicación." },
		{ nombre: "Desbloquear Trofeos", ubicacion: "PS3DesbloquearTrofeos", comentario: "Desbloquear los trofeos de nuestros juegos en PS3 para poder sacar ese platino difícil de desbloquear. Mucho cuidado podemos estar expuestos a un baneo por parte de Sony(Expulsión y bloqueo de un usuario para nuestra consola)." },
		{ nombre: "PS3 ISO TOOLS", ubicacion: "PS3ISOTOOLS", comentario: "PS3 ISO TOOLS podemos crear y convertir juegos a iso de PS3." },
		{ nombre: "PS2 en PS3 con PC", ubicacion: "PS2PS3HENConPC", comentario: "Podemos Convertir ISO de PS2 para HEN con un PC para nuestra consola de PS3, Convierte tus juegos de playstation 2 a formato de imagen ISO, donde se te facilitara la manipulación de tu juego." },
		{ nombre: "Desinstalar HEN en PS3", ubicacion: "PS3DesinstalarHEN", comentario: "Desinstalar HEN completamente de nuestra consola para eliminar todo rastro de nuestra consola PS3." },
		{ nombre: "Menú Secreto PS2 dentro PS3", ubicacion: "MenuSecretoPS2", comentario: "Menú secreto dentro del emulador de PS2 de nuestra consola PS3, para nuevos ajustes de gráficos, FPS, calidad o jugabilidad de nuestros juegos de PS2." },
		{ nombre: "Crear DVD o BD-R Juegos", ubicacion: "CrearDVDBDR", comentario: "Podemos crear copias de nuestros juegos en DVD o BD-R para nuestra consola con HEN." },
		{ nombre: "Desencriptar ISO PS3", ubicacion: "DesISOPS3", comentario: "Podemos desencriptar las ISO descargadas para poder hacerlo correr en nuestra consola PS3." },
		{ nombre: "USB con exFAT - NTFS", ubicacion: "PS3USBexFATNTFS", comentario: "Con esta app podemos usar nuestros USB o HDD con el formato exfat o NTFS para nuestros juegos en formato ISO." },
		{ nombre: "Coldboot (Logotipo de Inicio)", ubicacion: "Coldboot", comentario: "Crear Coldboot (Logotipo de Inicio) personalizados con las imágenes que más te gusten." },
		{ nombre: "PS3 Desencriptar ISOS", ubicacion: "PS3DesencriptarISOS", comentario: "Con este programa podemos desencriptar las ISOS que descarguemos desde internet" },
		{ nombre: "Flash Player Store PS3", ubicacion: "FlashPlayerStorePS3", comentario: "Una pequeña tienda interna de juegos en Flash Player para nuestra consola PS3" },
		{ nombre: "Link de WEB desde Red", ubicacion: "LinkWEBRED", comentario: "Podemos tener accesos rápido desde el menú de red de nuestra consola a nuestra WEB más rápido" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
	PSVita: [
		{ nombre: "Seleccionar", ubicacion: "PSVitaTutorial", comentario: "Elija una opción" },
        { nombre: "nombre", ubicacion: "URLPSVita", comentario: "ComentarioPSVita" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
    PS4: [
		{ nombre: "Seleccionar", ubicacion: "PS4Tutorial", comentario: "Elija una opción" },
        { nombre: "nombre", ubicacion: "URLPS4", comentario: "ComentarioPS4" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
    PC: [
        { nombre: "Seleccionar", ubicacion: "PCTutorial", comentario: "Elija una opción" },
        { nombre: "CMD Defender", ubicacion: "CmdDefender", comentario: "Cómo abrir Windows defender desde comando cmd en Windows 10." },
        { nombre: "DS4Windows", ubicacion: "DS4Windows", comentario: "DS4 Windows le permite usar sus controladores de PlayStation y Nintendo en una PC con Windows 10 al emular un controlador virtual de Xbox/DS4." },
		{ nombre: "Emuladores para Windows", ubicacion: "EmuladoresPC", comentario: "Les traemos una variedad de emuladores para muestro pc desde consolas antiguas esta Android." },
		{ nombre: "Estado de la Bateria", ubicacion: "EstadoBateria", comentario: "saber el estado de la batería de tu portátil Windows y lo puedes hacer en menos de un minuto." },
		{ nombre: "Informacion del Sistema o Pruebas", ubicacion: "InfoPruePC", comentario: "TESTEAR y ANALIZAR el RENDIMIENTO de los COMPONENTES de un PC con estos Programas." },
		{ nombre: "Repara USB", ubicacion: "ReparaUSB", comentario: "Todos los métodos para reparar nuestro USB de forma fácil y rápido." },
		{ nombre: "Reparar Windows", ubicacion: "ReparaWindows", comentario: "Como analizar y reparar los archivos de sistema de Windows 10 con los comandos: SFC y DISM." },
		{ nombre: "Virus Total", ubicacion: "VirusTotal", comentario: "VirusTotal es un sitio web que proporciona de forma gratuita el análisis de archivos y páginas web a través de antivirus." },
		{ nombre: "Cifrar un disco duro", ubicacion: "CifrarHDD", comentario: "Podemos cifrar uno de tus discos duros con Windows 10. Para ello usaremos la solución integrada BitLocker, disponible en la versión de Windows 10 profesional." },
		{ nombre: "Autoruns", ubicacion: "Autoruns", comentario: "Elimina Programas fantasmas del Sistema programas que después de haber sido eliminados siguen apareciendo y consumiendo recursos del sistema y revisar y tiene virus con virus total." },
		{ nombre: "Hyper-V", ubicacion: "Hyper-V", comentario: "Hyper-V es el hipervisor de Microsoft que viene incluido en las ediciones Pro, Enterprise y Education de Windows 10 y Windows 11. Este es el encargado de virtualizar hardware, usando funciones de la propia CPU del sistema." },
		{ nombre: "Obtener las Claves de Windows", ubicacion: "ObtenerClaveWindows", comentario: "Con este método podemos recuperar nuestra clave de Windows de nuestros equipos." },
		{ nombre: "Respaldo de Drivers de Windows", ubicacion: "BackupDriversWindows", comentario: "Con este sencillo paso podemos obtener todos nuestros drivers de nuestro equipo para respaldo y en caso de formateo." },
		{ nombre: "Actualización de programas por CMD", ubicacion: "UpdateProgramasCMD", comentario: "Podemos actualizar una gran variedad de programas a través de nuestro CMD de Windows y gratis todos los programas compatibles" },
		{ nombre: "Advanced IP Scanner", ubicacion: "AdvancedIPScanner", comentario: "Escáner de red fiable y gratuito para analizar LAN. El programa escanea todos los dispositivos de red" },
        { nombre: "FreeFileSync", ubicacion: "FreeFileSync", comentario: "FreeFileSync es un software de comparación y sincronización de carpetas que crea y administra copias de seguridad de todos sus archivos importantes" },
		{ nombre: "Historial de Errores de Windows 10", ubicacion: "HistorialErroresWindows", comentario: "Es una herramienta que nos permite saber que programa falló en un determinado momento en Windows 10" },
		{ nombre: "Ingresa a BIOS o UEFI", ubicacion: "IngresaBIOSoUEFI", comentario: "Para acceder a la BIOS, al arrancar el equipo tenemos unos segundos para pulsar la tecla que indique el fabricante para entrar a la BIOS" },
		{ nombre: "Mouse without Borders", ubicacion: "MousewithoutBorders", comentario: "Mouse without Borders es un producto que lo convierte en el capitán de su flota de computadoras al permitirle controlar hasta cuatro computadoras desde un solo mouse y teclado" },
		{ nombre: "PC Health Check", ubicacion: "PCHealthCheck", comentario: "La aplicación PC Health Check le brinda información actualizada sobre el estado de su dispositivo Windows" },{ nombre: "Process Explorer", ubicacion: "ProcessExplorer", comentario: "Elimina Programas fantasmas del Sistema programas que después de haber sido eliminados siguen apareciendo y consumiendo recursos del sistema" },{ nombre: "Update de Windows XP a Windows 8.1,2012", ubicacion: "08-UpdateWinXPa8.1,2012", comentario: "Windows Update proporciona muchas actualizaciones opcionales y recomendadas, además de controladores para su sistema, pero Windows XP y 2000 sólo pueden instalar actualizaciones de seguridad críticas a través de la función Actualizaciones automáticas incorporada" },{ nombre: "WinDirStat ", ubicacion: "WINDIRSTAT", comentario: "WinDirStat es un visor de estadísticas de uso del disco y una herramienta de limpieza para varias versiones de Microsoft Windows." }
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

	// Limpiar valor seleccionado del select "contenido"
    contenidoSelect.selectedIndex = -1;
	
    // Agregar las opciones correspondientes a la categoría seleccionada
    contenidoPorCategoria[categoriaSeleccionada].forEach((opcion, index) => {
        const option = document.createElement("option");
        option.value = index; // Asignar un valor numérico para cada opción
        option.text = opcion.nombre;
        option.title = opcion.comentario; // Agregar el comentario
        contenidoSelect.add(option);
    });
}

function mostrarComentario() {
    const categoriaSeleccionada = document.getElementById("categorias").value;
    const contenidoSelect = document.getElementById("contenido");
    const contenidoSeleccionadoIndex = contenidoSelect.value;

    if (categoriaSeleccionada && contenidoSeleccionadoIndex !== "") {
        const contenidoSeleccionado = contenidoPorCategoria[categoriaSeleccionada][contenidoSeleccionadoIndex].nombre;
        const comentarioSeleccionado = contenidoPorCategoria[categoriaSeleccionada][contenidoSeleccionadoIndex].comentario;

        // Muestra el comentario en el contenedor
        const comentarioContenedor = document.getElementById("comentarioContenedor");
        comentarioContenedor.textContent = `Comentario: ${contenidoSeleccionado}: ${comentarioSeleccionado}`;
    }
}

function irAPagina() {
    const categoriaSelect = document.getElementById("categorias");
    const contenidoSelect = document.getElementById("contenido");
    const categoriaSeleccionada = categoriaSelect.value;
    const contenidoSeleccionadoIndex = contenidoSelect.value;

    if (categoriaSeleccionada) {
        if (contenidoSeleccionadoIndex === "0") {
            // Redirige a la página de categoría sin nombre de contenido
            const ubicacionSeleccionada = contenidoPorCategoria[categoriaSeleccionada][0].ubicacion;
            const url = `Tutoriales/${ubicacionSeleccionada}.html`;
            window.location.href = url;
        } else if (contenidoSeleccionadoIndex !== "") {
            const contenidoSeleccionado = contenidoPorCategoria[categoriaSeleccionada][contenidoSeleccionadoIndex - 0];
            const ubicacionSeleccionada = contenidoSeleccionado.ubicacion;
            const comentarioSeleccionado = contenidoSeleccionado.comentario;

            // Redirige a la página correspondiente con el nombre del contenido
            const url = `Tutoriales/${categoriaSeleccionada}/${ubicacionSeleccionada}.html`;
            window.location.href = url;

            // Muestra el comentario en el contenedor
            const comentarioContenedor = document.getElementById("comentarioContenedor");
            comentarioContenedor.textContent = comentarioSeleccionado;
        }
    }
}
									