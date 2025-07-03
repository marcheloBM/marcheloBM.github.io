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
		{ nombre: "PSP con OBS", ubicacion: "PSPConOSB", comentario: "Plugin (p.o.c) de video UVC de PS Vita portado a PSP por @Xerpi. Este es un complemento que te permite transmitir la pantalla de tu PSP a tu computadora a través de USB.." },
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
		{ nombre: "Link de WEB desde Red", ubicacion: "LinkWEBRED", comentario: "Podemos tener accesos rápido desde el menú de red de nuestra consola a nuestra WEB más rápido" },
		{ nombre: "Logos HEN", ubicacion: "PS3LogosHen", comentario: "Todos los logos de Hen en nuestra consola PS3para colocar el que mas guste a nuestro gusto" },
		{ nombre: "Temas WEB", ubicacion: "PS3TemasWEB", comentario: "Podemos descargar los temas directamente desde una WEB y instalarlo en nuestra consola " },
		{ nombre: "Monstruoso T-PACK", ubicacion: "PS3MonstruosoTPACK", comentario: "Este Pack contiene logos para PSN, Logos para la cuenta del usuario y temas para instalar" },
		{ nombre: "PS3 EXTRA MODS", ubicacion: "PS3ExtraMods", comentario: "Contiene logos de inicio y PSN, fuentes, colboot y apply ware para nuestra consola todo en una ISO para montar " },
		{ nombre: "prepISO PS3", ubicacion: "PS3prepISO", comentario: "una mejor forma de instalar juegos de mas de 4GB en unidades NTFS o exFAT " },
		{ nombre: "PS3 Ezremote Client", ubicacion: "PS3ezremoteClient", comentario: "Esta aplicación es un administrador de archivos para nuestra consola, pero super potente" },
		{ nombre: "PS3 Toolset", ubicacion: "PS3Toolset", comentario: "PS3 Toolset - Theme Builder es el único software que te permite agregar sonidos personalizados a tus temas, con soporte completo para todos los íconos, fondos, punteros y más." },
		{ nombre: "PSN Icons", ubicacion: "PSNicons", comentario: "Podemos personalizar nuestros iconos de PSN desde un disco en nuestra consola" },
		{ nombre: "PS3netsrv Android", ubicacion: "PS3netsrvAndroid", comentario: "Con esta APP para Android nos permite transmitir las imágenes ISO desde nuestro celular hacia la consola" },
		{ nombre: "webMAN PS2CONFIG", ubicacion: "webMANPS2CONFIG", comentario: "configuración para nuestros juegos de PS2 si algunos se bloquean o tienes algunos problemas" },
		{ nombre: "Iconos Diferentes", ubicacion: "IconosDirefentes", comentario: "Para darle un nuevo estilo a nuestras aplicaciones un pequeño cambio para Apollo, Artemis, Filemanager, WebMan y SmAn" },
		{ nombre: "Compatible con CFW", ubicacion: "PS3CompatibleCFW", comentario: "PS3 es Compatible con el NUEVO CFW Evilnat 4.91" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
	PSVita: [
		{ nombre: "Seleccionar", ubicacion: "PSVitaTutorial", comentario: "Elija una opción" },
        { nombre: "Liberar PSVITA Versión 3.74", ubicacion: "LiberarPSVITA", comentario: "Liberar PSVita para poder instalar todos lo programas y juegos gratis" },
		{ nombre: "Liberar PSVITA Sin PC", ubicacion: "LiberarPSVITASinPC", comentario: "Ahora podemos liberar nuestra consola PSVita sin la necesidad de un computador solo con internet" },
		{ nombre: "Sd2vita", ubicacion: "Sd2vita", comentario: "Para poder configurar una tarjeta microSD en nuestra consola PSVita" },
		{ nombre: "AutoPlugin 2", ubicacion: "AutoPlugin2", comentario: "Autoplugin para PSVITA es una herramienta hombrew que te permite instalar o desinstalar los siguientes complementos y plugins con un solo clic (en ux0 o ur0 o ur0 para SD2VITA)." },
		{ nombre: "Trucos para PSVita", ubicacion: "TrucosPSVita", comentario: "Activar Trucos en Juegos para PSVITA con un solo plugin en nuestra consola." },
		{ nombre: "Apollo Save Tool Vita", ubicacion: "ApolloSaveToolVita", comentario: "Apollo Save Tool es una aplicación para administrar archivos de partidas guardadas, trofeos y licencias en PlayStation Vita." },
		{ nombre: "Playstation Mobile", ubicacion: "PlaystationMobile", comentario: "Paquete de datos para los juegos de Android en nuestra consola" },
		{ nombre: "VitaShell", ubicacion: "VitaShell", comentario: "Ofrece un administrador de archivos, un instalador de paquetes, FTP integrado y mucho más." },
		{ nombre: "VitaDB", ubicacion: "VitaDB", comentario: "VitaDB Downloader es el cliente oficial de PS Vita/PS TV para VitaDB, la primera base de datos creada para PS Vita/PSTV homebrew." },
		{ nombre: "Net-Stream", ubicacion: "NETStream", comentario: "Cliente de transmisión de vídeo universal para PS Vita para ver videos desde la red, soporta Vídeos y transmisiones en vivo de YouTube, Servidor HTTP y FTP y Almacenamiento local" },
		{ nombre: "Adrenaline", ubicacion: "Adrenaline", comentario: "Podemos tener todo el contenido de una PSP dentro de nuestra PSVita " },
		{ nombre: "Adrenaline Bubble Manager", ubicacion: "AdrenalineBubbleManager", comentario: "Esta útil aplicación te permite realizar burbujas personalizadas con 'icono' y 'título' de tu contenido de PSP (HBS/PSX/ISO/CSO) de forma rápida y sencilla" },
		{ nombre: "Vita Tester", ubicacion: "VitaTester", comentario: "Podemos testear los botones de nuestra consola para revisar el funcionamiento de cada botón y táctil " },
		{ nombre: "PSVident", ubicacion: "PSVident", comentario: "Podemos sacar información de nuestra consola como modelo, región, serial y mas" },
		{ nombre: "AnimeDownloader", ubicacion: "AnimeDownloader", comentario: "Descarga y Visualiza Anime en tu PS Vita" },
		{ nombre: "Noboru", ubicacion: "Noboru", comentario: "Aplicación para descargar y ver manga o comic en nuestra PSVita" },
		{ nombre: "Better Homebrew Browser", ubicacion: "BetterHomebrewBrowser", comentario: "Un navegador homebrew que admite múltiples bases de datos con soporte para descarga en segundo plano" },
		{ nombre: "MediaF Downloader", ubicacion: "MediaFDown", comentario: "MediaF Downloader es una aplicación muy sencilla para la psvita que permite descargar contenido del servidor mediafire." },
		{ nombre: "PKGJ", ubicacion: "PKGJ", comentario: "Este homebrew permite descargar y descomprimir archivos pkg directamente en Vita junto con su licencia falsa NoNpDrm o NoPsmDrm." },
		{ nombre: "CTManager", ubicacion: "CTManager", comentario: "Administrar completamente tus temas personalizados directamente desde la consola" },
		{ nombre: "Capcom Play System 3", ubicacion: "CapcomPlaySystem3", comentario: "Emulador de Capcom Play System 3 es una placa arcade que fue creada e introducida por Capcom" },
		{ nombre: "DREAMCAST", ubicacion: "DREAMCAST", comentario: "Es la quinta y última consola de videojuegos hasta ahora producida por Sega." },
		{ nombre: "GBA y GBC", ubicacion: "GBAGBC", comentario: "mGBA es reconocido por muchos como el mejor emulador de Game Boy Advance y Game Boy " },
		{ nombre: "GenesisPlusGXVITA", ubicacion: "GenesisPlusGXVITA", comentario: "Este emulador de Sega Mega Drive/Sega Genesis, Maser System y Game Gear." },
		{ nombre: "Nintendo64", ubicacion: "Nintendo64", comentario: "Aquí consigues el mejor emulador de Nintendo 64 para PS Vita" },
		{ nombre: "Pico 8", ubicacion: "Pico8", comentario: "PICO-8 es una consola de fantasía para crear, compartir y jugar pequeños juegos y otros programas informáticos" },
		{ nombre: "PFBNEO", ubicacion: "PFBNEO", comentario: "pFBA puede ejecutar neogeo, cps1, cps2, cps3… arcade roms, megadrive, master system, game gear, pc engine…. roms de consola." },
		{ nombre: "PGEN", ubicacion: "PGEN", comentario: "PGen es un emulador de Sega Mega Drive de código abierto escrito en lenguaje de programación C++ para PlayStation PSVita" },
		{ nombre: "PNES", ubicacion: "PNES", comentario: "pNES (Nintendo) para dar soporte a la mismísima PlayStation Vita." },
		{ nombre: "PSNES", ubicacion: "PSNES", comentario: "PSNES (Super Nintendo) para dar soporte a la mismísima PlayStation Vita" },
		{ nombre: "RetroArch", ubicacion: "RETROARCH", comentario: "RetroArch es una interfaz para emuladores, motores de juegos y reproductores multimedia " },
		{ nombre: "ScummVM", ubicacion: "ScummVM", comentario: "ScummVM es un programa que te permite ejecutar juegos de aventuras gráficos clásicos de apuntar y hacer clic" },
		{ nombre: "SNES", ubicacion: "SNES", comentario: "Este es uno de los emuladores de Super Nintendo para PS Vita, aunque no se actualiza desde el 2016." },
		{ nombre: "YoYo Loader", ubicacion: "YoYoLoader", comentario: "YoYo Loader es un cargador para libyoyo.so, la aplicación oficial de GameMaker Studio Runner para Android, para PS Vita" },
		{ nombre: "Memorias", ubicacion: "Memorias", comentario: "Tips y trucos para aprovechar el almacenamiento de tu PSVita al máximo!" },
		{ nombre: "Juegos NoNpDrm", ubicacion: "JuegoNoNpDrm", comentario: "Instala Juegos en formato NoNpDrm Fácil y Rápido" },
		{ nombre: "Mandos en Nuestra PSVita", ubicacion: "MandosPSVita", comentario: "Podemos colocarle mandos de PS3 y PS4a nuestra consola para poder jugar con ellos de forma separada o juntas" },
		{ nombre: "Update Software", ubicacion: "Update", comentario: "La actualización para dejar nuestra consola en la última versión del software disponible " },
		{ nombre: "Restaura PSVita", ubicacion: "RestauraPSVita", comentario: "Con esto podemos dejar nuestra consola de fabrica " },
		{ nombre: "SMS Plus Vita", ubicacion: "SMSPlusVita", comentario: "Un Emulador de Sega Master System para nuestra consola PSVita" },
		{ nombre: "OBS en PSVITA", ubicacion: "OBSPSVita", comentario: "Plugin (p.o.c) de video UVC de PS Vita. Permite transmitir la pantalla de tu PSVita." },
		{ nombre: "VitaShell Fork", ubicacion: "VitaShellfork", comentario: "VitaShell fork para PSP en PSVITA sin necesidad de Adrenaline con solo una burbuja" },
		{ nombre: "HexFlow Launcher", ubicacion: "HexFlowLauncher", comentario: "Muestra y ejecuta tus juegos y creaciones caseras con estilo." },
		{ nombre: "RetroFlow Launcher", ubicacion: "RetroFlowLauncher", comentario: "Esta es una versión modificada de HexFlow Launcher; un lanzador tipo coverflow 3D para PS Vita" },
		{ nombre: "Moonlight", ubicacion: "Moonlight", comentario: "Podemos juegos nuestros juegos de PC en nuestra PSVita" },
		{ nombre: "Moonlight en AMD", ubicacion: "MoonlightAMD", comentario: "Podemos juegos nuestros juegos de PC en nuestra PSVita con computadores antiguas" }
		//{ nombre: "nombre", ubicacion: "#", comentario: "comentario" }
    ],
    PS4: [
		{ nombre: "Seleccionar", ubicacion: "PS4Tutorial", comentario: "Elija una opción" },
        { nombre: "PS4 Update o Reinstalación", ubicacion: "Updates", comentario: "Guía para actualizar o reinstalación del software del sistema de PS4" },
		{ nombre: "Liberar PS4", ubicacion: "LiberarPS4", comentario: "El Exploit compatibles para sus consolas con firewall 5.05, 6.72, 7.00, 7.02, 7.50, 7.51, 7.55, 9.00 y 11.00." },
		{ nombre: "Payloads", ubicacion: "Payloads", comentario: "Estos payloads son cargas útiles que se inyectan a la consola y nos permiten hacer diferentes tareas según el payload que se utiliza." },
		{ nombre: "LogMein Hamachi", ubicacion: "LogMeinHamachi", comentario: "LogMeIn Hamachi es una aplicación que configura redes privadas virtuales capaz de establecer vínculos directos" },
		{ nombre: "ICON MASK", ubicacion: "ICONMASK", comentario: "Icon Mask es una sencilla aplicación Homebrew de PS4 que te permite modificar la apariencia de tus iconos aplicando una máscara PNG sencilla sobre ellos." },
		{ nombre: "PS4 Temperature", ubicacion: "PS4Temperature", comentario: "Herramienta creada por @Lapy que nos permite manipular la velocidad del ventilador de la consola a través del syscon." },
		{ nombre: "Patch Installer", ubicacion: "PatchInstaller", comentario: "Update a los juegos desde PS4 Jailbreak" },
		{ nombre: "Apollo Save Tool", ubicacion: "ApolloSaveTool", comentario: "Apollo Save Tool es una aplicación para administrar archivos de partidas guardadas, trofeos y licencias en PlayStation 4." },
		{ nombre: "PS4 Toolset", ubicacion: "PS4Toolset", comentario: "Herramienta para crear backup sobre nuestra consola, entre ellas podemos crear una copia de seguridad de nuestra consola o recuperar nuestros juegos" },
		{ nombre: "Homebrew Store", ubicacion: "HomebrewStore", comentario: "Esta aplicación hombrew permite descargar directamente desde tu consola todo el contenido que está publicado en pkg-zone." },
		{ nombre: "Remote PKG installer", ubicacion: "RemotePKGinstaller", comentario: "¡El instalador remoto de PS4 PKG está aquí para ayudar! Desde nuestro PC hacia nuestra consola." },
		{ nombre: "PS4 XPLORER", ubicacion: "PS4XPLORER", comentario: "Homebrew FPKG desarrollado por @Lapy en Unity para PS4, Permite las operaciones básicas de un explorador de archivos (cortar, copiar, pegar, renombrar y borrar archivos y carpetas completas)" },
		{ nombre: "GoldHEN CHEATS Manager", ubicacion: "GoldHENCHEATSManager", comentario: "GoldHEN 2.2 viene con un menú incorporado que le permite cargar códigos de trucos para muchos juegos de PS4." },
		{ nombre: "Orbis Toolbox", ubicacion: "OrbisToolbox", comentario: "Una modificación de la interfaz de usuario de PlayStation para facilitar el lanzamiento y desarrollo de homebrew." },
		{ nombre: "Itemzflow Game Manager", ubicacion: "ItemzflowGameManager", comentario: "Itemzflow es una alternativa de menú de inicio de PS4 gratuita y de código abierto." },
		{ nombre: "Consolepedia 3D", ubicacion: "Consolepedia3D", comentario: "Desde Atari hasta Nintendo y PlayStation, todos con modelos 3D detallados de cada sistema con información sobre la historia, especificaciones y sus juegos más vendidos." },
		{ nombre: "WebDAV Client", ubicacion: "WebDAVClient", comentario: "ezRemote Client es una aplicación que permite conectar la PS4 a servidores remotos FTP/SFTP, SMB (Windows Share), NFS, WebDAV, HTTP y Google Drive para transferir archivos." },
		{ nombre: "Linux en PS4", ubicacion: "LinuxPS4", comentario: "Podemos cargar Linux en nuestra consola PS4 para poder jugar juegos de PC, emuladores y mas" },
		{ nombre: "Batocera", ubicacion: "Batocera", comentario: "está diseñado para emular consolas de videojuegos clásicas y modernas." },
		{ nombre: "Plataformas", ubicacion: "Plataformas", comentario: "Ver películas y series desde la comodidad de casa. entre las favoritas de los usuarios se encuentran Amazon Prime, NETFLIX, Crunchyroll, Plex, Youtube y Hulu" },
		{ nombre: "pPlay", ubicacion: "pPlay", comentario: "pPlay es un reproductor de vídeo para PS4. La aplicación soporta la mayoría de formatos de vídeo populares, tiene soporte para subtítulos (incrustados) y streaming vía http." },
		{ nombre: "Media Playes", ubicacion: "MediaPlayes", comentario: "Sony ha lanzado un nuevo reproductor multimedia para PlayStation 4 inmediatamente después de la conferencia de prensa de PlayStation. Para aquellos que no lo sepan." },
		{ nombre: "PS4 Player", ubicacion: "PS4Player", comentario: "S4 Player és un Reproductor de video para Playstation 4 desarrollado por @Lapy." },
		{ nombre: "PNES", ubicacion: "PNES", comentario: "pNES (Nintendo) para dar soporte a la mismísima PlayStation 4." },
		{ nombre: "PSNES", ubicacion: "PSNES", comentario: "PSNES (Super Nintendo) para dar soporte a la mismísima PlayStation 4" },
		{ nombre: "PFBNEO", ubicacion: "PFBNEO", comentario: "pFBA puede ejecutar neogeo, cps1, cps2, cps3… arcade roms, megadrive, master system, game gear, pc engine…. roms de consola." },
		{ nombre: "PGEN", ubicacion: "PGEN", comentario: "PGen es un emulador de Sega Mega Drive de código abierto escrito en lenguaje de programación C++ para PlayStation PS4" },
		{ nombre: "P8", ubicacion: "P8", comentario: "PICO-8 es una consola de fantasía para crear, compartir y jugar pequeños juegos y otros programas informáticos." },
		{ nombre: "SNESTicles PS2 (emulador SNES)", ubicacion: "SNESTicles", comentario: "NESticle es un emulador de Nintendo Entertainment System, que fue escrito por Icer Addis de Bloodlust Software" },
		{ nombre: "RetroArch", ubicacion: "RetroArch", comentario: "RetroArch es una interfaz para emuladores, motores de juegos y reproductores multimedia." },
		{ nombre: "Crear Avatar", ubicacion: "CrearAvatares", comentario: "En este tutorial les muestro como cambiar el Avatar o imagen de perfil sin PSN de forma Offline" },
		{ nombre: "Sega Saturn", ubicacion: "SegaSaturn", comentario: "Convierte ahora tus juegos de SEGA SATURN para PS4 con SATURN-FPKG" },
		{ nombre: "Crear Tus Propios Trucos", ubicacion: "CrearTrucos", comentario: "Como CREAR tus Propios TRUCOS para PS4 con un computador y nuestra ps4 podemos buscar y crear trucos para nuestros juegos favoritos." },
		{ nombre: "Envía archivos PKG", ubicacion: "EnvíaPKGaPS4", comentario: "Envía archivos PKG a tu PS4 con Remote PKG Sender v2 podemos enviar cualquier archivo PKG desde nuestro pc sin la necesidad de una unidad USB con el siguiente programa." },
		{ nombre: "Duxas PS4 Patch Repackager", ubicacion: "DuxasPS4PatchRepackager", comentario: "La aplicación Duxas PS4 patch repackager nos permite solucionar el error CE-36434-0" },
		{ nombre: "PARAM.SFO Editor", ubicacion: "PARAM.SFOEditor", comentario: "PARAM SFO Editor podemos saber más información de nuestros juegos con param.sfo y podemos modificar más información." },
		{ nombre: "Dumps juegos", ubicacion: "DumpsJuegos", comentario: "Podemos Dumpiar nuestros juegos de PS4 por Medio de FTP a nuestro PC para tener la copia de seguridad de nuestros juegos" },
		{ nombre: "Crea Acces,os Directo", ubicacion: "CreaAccesos", comentario: "Crea tus propios accesos directo en nuestra consola PS4 desde el menú de notificaciones con estos programas." },
		{ nombre: "Crear PS1 y PSP en PS4", ubicacion: "PS1yPSP", comentario: "Crea tus propios JUEGOS - Ps4 Jailbreak Emuladores PS1 y PSP para nuestra consola PS4 con los siguientes programas" },
		{ nombre: "Remote con Store", ubicacion: "RemoteStore", comentario: "Cómo servir sus paquetes de PS4 desde su computadora a su PS4 con Homebrew Store." },
		{ nombre: "Trofeos encriptados para PKG", ubicacion: "TrofeosEncriptados", comentario: "Verificar los Trofeos correctamente si decides construir pkg por error en los Trofeos en nuestros juegos de PS4." },
		{ nombre: "pkg merge", ubicacion: "pkgMerge", comentario: "Una herramienta para fusionar partes de un paquete de PS4 en un archivo PKG completo. Útil para instalar un juego completo en tu sistema" },
		{ nombre: "PS4 PKG Viewer", ubicacion: "PS4PKGViewer", comentario: "PS4 PKG Viewer és una pequeña herramienta para ver la información del paquete de PS4 creada por LeecherMan." },
		{ nombre: "Chiaki", ubicacion: "Chiaki", comentario: "PlayStation 4 de forma remota y sin abandonar la comodidad de los dispositivos Android." },
		{ nombre: "PS2 FPKG", ubicacion: "PS2FPKG", comentario: "Una herramienta que convierte juegos de PS2 en fPKG de PS4" },
		{ nombre: "PSP FPKG", ubicacion: "PSPFPKG", comentario: "Esta aplicación te permite convertir tus juegos de PSP en fPKG de PS4 utilizando el emulador PSPHD recientemente lanzado de PS-Plus." },
		{ nombre: "Sega Saturn a Ps4", ubicacion: "SaturnPs4", comentario: "Podemos convertir juegos de sega saturn para nuestra PS4" },
		{ nombre: "MODS de PC en PS4", ubicacion: "MODSPCPS4", comentario: "Podemos pasar Mods de PC para nuestros juegos de PS4" },
		{ nombre: "DNS + Cancelar Update", ubicacion: "DNSNotUpdate", comentario: "Para poder impedir la actualización de la consola o poder usar aplicaciones en PS4 debemos bloquear el acceso." },
		{ nombre: "Distancia PSVita", ubicacion: "DistanciaPSVita", comentario: "Uso a distancia de PSVita con PS4" },
		{ nombre: "Recuperar Juegos de PS4", ubicacion: "RestaurarJuegos", comentario: "Podemos recuperar juegos que se hayan eliminado de la vista, pero sigan en la consola " },
		{ nombre: "Activar Cuenta de PSN", ubicacion: "ActivarCuentaPSN", comentario: "Podemos activar una cuenta para uso de partidas y mas" },
		{ nombre: "Cambiar el HDD", ubicacion: "CambiarHDD", comentario: "Si quieres cambiar el Disco Duro por uno de mayor capacidad" },
		{ nombre: "Backup fpkg", ubicacion: "Backupfpkg", comentario: "Podemos hacer Copias de seguridad de nuestros juegos físicos o digitales" },
		{ nombre: "Eliminar DLC en PS4", ubicacion: "EliminarDLC", comentario: "Como Eliminar DLCS de tu PS4" },
		{ nombre: "Cambiar los Iconos PS4", ubicacion: "CambiarIconos", comentario: "Podemos cambiar todos los iconos de nuestra consola para darle un nuevo estilo " },
		{ nombre: "PSX FPKG", ubicacion: "PSXFPKG", comentario: "Una herramienta que convierte juegos de PS1 en fPKG de PS4" },
		{ nombre: "FPKGi", ubicacion: "FPKGi", comentario: "FPKGi (Fake PKG Installer) es una aplicación homebrew de código abierto para instalar archivos .pkg modificados en PS4" },
		{ nombre: "GameBato", ubicacion: "GameBato", comentario: "Accede a la tienda de juegos en línea con más de 2000 juegos, actualizaciones de juegos y DLC directamente en PS4 e instálalo con un solo clic" },
		{ nombre: "PS2 CodeBreaker Cheats", ubicacion: "PS2CodeBreaker", comentario: "CodeBreaker es una herramienta de trucos inicialmente desarrollada para consolas como PlayStation 2 y Sega Dreamcast" },
		{ nombre: "PS4 Controller Homebrew", ubicacion: "PS4Controller", comentario: "Utilidad para probar mandos de PS4, ADVERTENCIA: presionar la barra táctil lo bloqueará." },
		{ nombre: "Retroarch PS2 en PS4", ubicacion: "RetroarchPS2enPS4", comentario: "Podemos crear emuladores con retroarch de PS2 para nuestra consola PS4" },
		{ nombre: "PS4 PKG Tool", ubicacion: "PS4PKGTool", comentario: "Esta herramienta nos permite visualizar la biblioteca de paquetes de PS4, administrarla y realizar diversas operaciones en ella" },
		{ nombre: "Online-Lan", ubicacion: "OnlineLan", comentario: "Nos permite jugar los juegos online de nuestra consola desbloqueada con unos simples pasos " },
		{ nombre: "PlutoTV", ubicacion: "PlutoTV", comentario: "comentarioVer Televisión GRATIS en tu PS4 Hackeada" },
		{ nombre: "Flash0 NOR Dump", ubicacion: "Flash0NORDump", comentario: "cómo volcar el NOR de la PS4 Fat, Slim y Pro" },
		{ nombre: "Activar Multimedia", ubicacion: "Multimedia", comentario: "Activar todos los códex para nuestros DVD y Blu-ray" },
		{ nombre: "Todo desde Notificaciones", ubicacion: "AllNotificaciones", comentario: "Todos los accesos desde notificaciones de nuestra consola" },
		{ nombre: "Avatar Changer", ubicacion: "AvatarChanger", comentario: "Avatar para nuestra consola PS4" }
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

function buscarSimilitudes(texto) {
	const resultados = [];
	for (const categoria in contenidoPorCategoria) {
		contenidoPorCategoria[categoria].forEach(item => {
			const palabras = texto.toLowerCase().trim().split(/\s+/);
			if (palabras.some(palabra => item.nombre.toLowerCase().includes(palabra) || 
			item.comentario.toLowerCase().includes(palabra))) {
				resultados.push({ ...item, categoria }); // Añadir la categoría al resultado
			}
		});
	}
	return resultados;
}

function mostrarResultados(resultados) {
	const contenedor = document.getElementById('resultados');
	contenedor.innerHTML = ''; // Limpiar resultados anteriores
	resultados.forEach(item => {
		const div = document.createElement('div');
		div.className = 'resultado';
		div.innerHTML = `
			<strong>${item.nombre}</strong><br>
			<em>Categoria: ${item.categoria}</em><br>
			${item.comentario}<br>
			<button class="boton" onclick="redirigir('${item.categoria}', '${item.ubicacion}')">Ir a ${item.ubicacion}</button>
		`;
		contenedor.appendChild(div);
	});
}

function redirigir(categoria, ubicacion) {
	// Cambia la URL según tu necesidad. Por ejemplo:
	const urlBase = "Tutoriales/"; // Cambia esto a tu URL base
	window.location.href = `${urlBase}${categoria}/${ubicacion}.html`; // Construir la URL con categoría
}

const input = document.getElementById('demo-buscar');
input.addEventListener('input', () => {
	const textoBuscado = input.value;
	const resultados = textoBuscado ? buscarSimilitudes(textoBuscado) : [];
	mostrarResultados(resultados);
});