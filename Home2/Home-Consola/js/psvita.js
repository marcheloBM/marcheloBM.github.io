const psvitaApps = [

// Liberar PS Vita 3.74
{
    console: "PS Vita",

    name: "Liberar PS Vita 3.74 (HENlo y Ensō)",

    image: "img/PSVita/LiberarPSVITA.jpg",

    description:
        "Guía de referencia para iniciar homebrew en firmware 3.74 con HENlo y, si se decide continuar, instalar HENkaku Ensō mediante VitaDeploy.",

    guide: {

        function:
            "HENlo permite habilitar homebrew en PS Vita 3.74. La guía actual continúa con VitaDeploy para instalar firmware 3.65 y HENkaku Ensō, que mantiene el entorno homebrew tras reiniciar.",

        compatibility: {
            "PS Vita / PS Vita Slim / PS TV": "La guía vita.hacks.guide admite consolas retail de todas las regiones hasta firmware 3.74; sigue las advertencias específicas del modelo."
        },

        requirements: [
            "PS Vita retail o PS TV con firmware 3.74; confirma la versión en Ajustes > Sistema > Información del sistema.",
            "Conexión a Internet en la consola para usar HENlo y VitaDeploy.",
            "Batería cargada y adaptador de corriente; evita que la consola entre en reposo durante la instalación.",
            "Respaldo de partidas y datos importantes antes de modificar el sistema.",
            "PS Vita original (PCH-1000) sin tarjeta de memoria oficial: sigue la guía actual para crear almacenamiento interno antes de continuar."
        ],

        installation: [
            "Lee la guía actual de HENlo y confirma que tu Vita está en 3.74; respalda los datos antes de modificarla.",
            "Sigue el flujo HENlo desde el navegador. Si deseas instalar el CFW persistente, usa la opción Quick 3.65 Install de VitaDeploy; el procedimiento detallado y sus advertencias están en Información detallada."
        ],

        usage:
            "Después del reinicio, comprueba el firmware y la configuración HENkaku. Ensō carga el entorno homebrew al iniciar la consola, sin volver a ejecutar HENlo después de cada reinicio.",

        notes:
            "Para firmware 3.74, sigue HENlo. VitaDeploy Quick 3.65 Install cambia realmente el firmware a 3.65; el spoofing de versión no mantiene el sistema en 3.74. Instalar Ensō modifica el arranque y existe riesgo de daño irreversible si algo falla; respalda los datos y sigue la documentación oficial exactamente. El desbloqueo no proporciona juegos comerciales gratis: utiliza homebrew y contenido que tengas derecho a usar.",

        version: "Inicio en 3.74; VitaDeploy instala 3.65 con HENkaku Ensō",

        author: "Vita Hacks Guide",

        details: [
            {
                title: "Pasos de instalación para firmware 3.74",

                description:
                    "La guía actual utiliza HENlo para instalar HENkaku y VitaDeploy, y luego ofrece el cambio a firmware 3.65 con Ensō.",

                items: [
                    "Lee la guía actual de HENlo y sus advertencias. Si la consola es usada o no sabes si tuvo modificaciones previas, sigue primero la sección de restauración indicada allí.",
                    "En el navegador de la Vita, sigue el procedimiento HENlo para habilitar HENkaku e instalar VitaDeploy.",
                    "Abre Ajustes > HENkaku Settings, habilita Unsafe Homebrew y cierra Ajustes.",
                    "Para el CFW persistente, abre VitaDeploy y selecciona Install a different OS > Quick 3.65 Install. Mantén la consola conectada a Internet y despierta, lee cada aviso y confirma solo si aceptas el cambio.",
                    "Espera a que termine la instalación de firmware 3.65 con HENkaku Ensō y deja que la consola se reinicie; no la apagues ni interrumpas el proceso."
                ]
            },
            {
                title: "Flujo de firmware y Ensō",

                description:
                    "En firmware 3.74, el método actual comienza con HENlo. Instalar Ensō con VitaDeploy implica cambiar el firmware a 3.65.",

                items: [
                    "Para 3.74, vita.hacks.guide indica usar HENlo y después instalar VitaDeploy.",
                    "Quick 3.65 Install instala firmware 3.65 y Ensō; no es solo un cambio de versión mostrada.",
                    "No instales enso365, AutoPlugin2, Adrenaline ni otras aplicaciones como parte obligatoria del desbloqueo; son pasos opcionales y tienen sus propias instrucciones."
                ]
            },
            {
                title: "Seguridad y preparación",

                description:
                    "La instalación de Ensō modifica el arranque y exige especial cuidado.",

                items: [
                    "Mantén la batería cargada, el adaptador conectado y evita el modo reposo durante el proceso.",
                    "Haz un respaldo de partidas y datos importantes antes de modificar la consola.",
                    "Si usas una Vita original sin tarjeta oficial, consulta la instrucción para crear almacenamiento interno antes de instalar HENlo."
                ]
            },
            {
                title: "Aplicaciones opcionales",

                description:
                    "Estas aplicaciones no son necesarias para completar el desbloqueo; instala solo las que necesites y consulta sus requisitos.",

                items: [
                    "Ensō Installer: no lo instales por separado; VitaDeploy Quick 3.65 Install ya instala firmware 3.65 con Ensō.",
                    "Adrenaline es opcional y tiene sus propios requisitos; consulta su documentación y utiliza únicamente contenido autorizado.",
                    "PKGj no es necesario para liberar la consola. Respeta los derechos de autor y no descargues contenido comercial sin autorización."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/SQAGUCYC#s0KAts6hhcW9-KLOd1HCsg"
        },
        {
            name: "Guía actualizada: HENlo para 3.74",
            url: "https://vita.hacks.guide/using-henlo"
        },
        {
            name: "Instalar Ensō y firmware 3.65",
            url: "https://vita.hacks.guide/installing-enso"
        }
    ]
},

// Liberar PS Vita sin PC
{
    console: "PS Vita",

    name: "Liberar PS Vita sin PC (HENlo)",

    image: "img/PSVita/LiberarPSVITASinPC.jpg",

    description:
        "Método de navegador para habilitar homebrew en PS Vita sin usar computadora. El desbloqueo persistente con Ensō es un paso opcional y modifica el sistema.",

    guide: {

        function:
            "HENlo permite iniciar HENkaku y preparar VitaDeploy directamente desde la Vita. VitaDeploy puede usarse después para instalar firmware 3.65 y HENkaku Ensō.",

        compatibility: {
            "PS Vita / PS Vita Slim / PS TV": "La guía actual admite consolas retail de todas las regiones hasta firmware 3.74; sigue las instrucciones específicas para tu modelo."
        },

        requirements: [
            "PS Vita retail o PS TV con firmware 3.74.",
            "Conexión a Internet y navegador web en la consola; no se necesita PC para seguir el método HENlo.",
            "Batería cargada, adaptador de corriente y respaldo de partidas y datos importantes.",
            "PS Vita original (PCH-1000) sin tarjeta oficial: crea el almacenamiento interno que exige la guía actual antes de continuar."
        ],

        installation: [
            "Conecta la Vita a Wi-Fi y, desde su navegador, abre una de las páginas listadas en Descargas; no se necesita PC para iniciar HENlo.",
            "Pulsa Liberar mi Vita y después Liberar. Sigue las instrucciones en pantalla para habilitar HENkaku e instalar VitaDeploy; los pasos detallados y la continuación opcional con Ensō están en Información detallada."
        ],

        usage:
            "HENlo inicia el entorno homebrew desde el navegador. Si instalas Ensō mediante la guía actual, el entorno queda disponible al encender la consola sin repetir HENlo en cada reinicio.",

        notes:
            "Las páginas web y sus pasos pueden cambiar. Usa vita.hacks.guide como referencia; no ejecutes instaladores de procedencia dudosa. Ensō cambia el arranque y existe riesgo de daño irreversible; respalda los datos, mantén la consola cargada y sigue la guía exactamente. El desbloqueo no entrega juegos comerciales gratis: utiliza homebrew y contenido autorizado.",

        version: "Firmware 3.74; Ensō opcional mediante firmware 3.65",

        author: "Vita Hacks Guide",

        details: [
            {
                title: "Pasos detallados desde el navegador",

                description:
                    "El procedimiento se realiza desde el navegador de la Vita. Confirma la versión 3.74, respalda los datos y mantén la consola cargada antes de empezar.",

                items: [
                    "En el navegador de la Vita, abre una de las páginas incluidas en Descargas y toca Liberar mi Vita > Liberar.",
                    "Cuando aparezca el menú, instala HENkaku y VitaDeploy siguiendo las indicaciones en pantalla. AutoPlugin2 es opcional; si la pantalla no coincide, sigue el procedimiento vigente y no instales paquetes de una página que no puedas verificar.",
                    "En Ajustes > HENkaku Settings, habilita Unsafe Homebrew. Si necesitas ajustar el modo de espera, elige temporalmente un tiempo suficiente para completar el proceso; durante cualquier instalación mantén la consola despierta y conectada al adaptador."
                ]
            },
            {
                title: "VitaDeploy y firmware 3.65",

                description:
                    "Ensō es opcional y requiere modificar el arranque. La instalación actual de VitaDeploy puede instalarlo junto con el cambio real a firmware 3.65.",

                items: [
                    "En VitaDeploy, selecciona Install a different OS > Quick 3.65 Install. No instales Ensō por separado ni combines procedimientos distintos.",
                    "Mantén Internet activo, lee cada aviso, confirma con el botón indicado y espera el reinicio. No dejes que la consola entre en reposo ni interrumpas la instalación.",
                    "Después del reinicio, comprueba HENkaku Settings. Version Spoofing a 3.74 solo cambia la versión reportada; el firmware instalado continúa siendo 3.65."
                ]
            },
            {
                title: "Aplicaciones opcionales",

                description:
                    "Una vez habilitado HENkaku, puedes instalar estas herramientas si las necesitas. No son requisitos para liberar la consola; revisa sus requisitos y obténlas de fuentes confiables.",

                items: [
                    "VitaShell: administrador de archivos.",
                    "iTLS Installer y Adrenaline son herramientas opcionales con requisitos propios; consulta sus guías antes de instalarlas.",
                    "PKGj no es necesario para liberar la consola; úsalo únicamente para contenido que tengas derecho a descargar. No descargues copias no autorizadas de juegos comerciales."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Español Por Nosotros",
            url: "https://marchelobm.github.io/PSVita/PSVita"
        },
        {
            name: "Español (Alternativo)",
            url: "https://lptutoriales.es/henlo"
        },
        {
            name: "HENlo en inglés (oficial)",
            url: "https://deploy.psp2.dev/"
        }
    ]
},

// SD2Vita
{
    console: "PS Vita",

    name: "SD2Vita: microSD",

    image: "img/PSVita/Sd2vita.jpg",

    description:
        "Configura un adaptador físico SD2Vita para usar una tarjeta microSD como almacenamiento ux0 en una PS Vita con homebrew habilitado.",

    guide: {

        function:
            "SD2Vita permite montar una microSD en la ranura de tarjetas de juego de la Vita. Requiere el adaptador y un plugin de almacenamiento compatible; no funciona por sí sola como una tarjeta oficial.",

        compatibility: {
            "PS Vita / PS Vita Slim": "Requiere HENkaku/CFW compatible y un plugin SD2Vita configurado. La compatibilidad depende del adaptador, plugin y firmware."
        },

        requirements: [
            "PS Vita con HENkaku/CFW y VitaShell.",
            "Adaptador físico SD2Vita y tarjeta microSD.",
            "PC con lector de tarjetas para el método de preparación con zzBlank.img, o la aplicación UX0toSD para el método alternativo.",
            "Copia de seguridad completa del almacenamiento ux0 y de los datos importantes antes de cambiar los puntos de montaje."
        ],

        installation: [
            "Elige el método con PC o la alternativa UX0toSD descritos en Información detallada; ambos requieren preparar la microSD y configurar el almacenamiento.",
            "Antes de cambiar los puntos de montaje, respalda ux0. Después del reinicio, comprueba en VitaShell que SD2Vita aparece como ux0 y muestra la capacidad esperada."
        ],

        usage:
            "Para transferir archivos por USB, abre VitaShell, pulsa Start y selecciona SD2Vita como USB device para acceder a ux0. Elige Memory Card para acceder a la tarjeta oficial montada como uma0, si está disponible.",

        notes:
            "Win32DiskImager escribe una imagen de disco y puede borrar por completo la unidad equivocada; confirma la microSD por letra y capacidad y conserva un respaldo. Los nombres de las opciones y las rutas de montaje pueden variar entre versiones de AutoPlugin2; revisa la configuración antes de reiniciar. No combines el clonado manual con UX0toSD en la misma operación. Utiliza únicamente aplicaciones y contenido que tengas derecho a usar.",

        version: "Depende del adaptador SD2Vita y del plugin de almacenamiento",

        details: [
            {
                title: "Método con PC: preparar e instalar",

                description:
                    "Este método prepara la microSD en Windows, copia el contenido de ux0 y configura el plugin SD2Vita.",

                items: [
                    "Respalda todo el contenido de ux0 en el PC, incluidos los archivos ocultos, y conserva la copia sin modificar.",
                    "Con Win32DiskImager, escribe zzBlank.img en la microSD correcta. La operación borra los datos de la unidad seleccionada; confirma su letra y capacidad antes de escribir.",
                    "Expulsa y vuelve a conectar la microSD, y formatéala en exFAT. Usa el tamaño de asignación predeterminado hasta 128 GB y 64 KB para tarjetas mayores de 128 GB.",
                    "Copia el respaldo completo de ux0 a la raíz de la microSD, incluidos los archivos ocultos; no lo pongas dentro de otra carpeta.",
                    "En AutoPlugin2, abre Plugins para PS Vita y selecciona Instalar/Configurar plugin SD2Vita. Configura SD2Vita como ux0 y, si utilizas una tarjeta oficial, asígnala a uma0; guarda la configuración.",
                    "Inserta el adaptador cuando lo indique el instalador y confirma el reinicio. No retires la tarjeta durante el arranque.",
                    "Después del reinicio, abre VitaShell y comprueba los archivos y la capacidad de almacenamiento."
                ]
            },
            {
                title: "ux0, uma0 y USB",

                description:
                    "La configuración habitual monta SD2Vita como ux0 y deja la tarjeta oficial en uma0.",

                items: [
                    "ux0: almacenamiento principal en SD2Vita.",
                    "uma0: tarjeta oficial, si se utiliza y el plugin la monta allí.",
                    "En VitaShell > Start > USB device selecciona SD2Vita o Memory Card según el almacenamiento que quieras mostrar al PC."
                ]
            },
            {
                title: "Método alternativo UX0toSD",

                description:
                    "UX0toSD CloneTool permite clonar desde la consola; el proceso puede tardar bastante.",

                items: [
                    "Instala la aplicación UX0toSD compatible con tu CFW y sigue sus indicaciones para elegir SD2Vita como destino.",
                    "Mantén la consola cargada y espera a que termine la copia antes de retirar el adaptador o apagarla.",
                    "Usa este procedimiento como alternativa al copiado manual por PC, no como un paso adicional del mismo método."
                ]
            },
            {
                title: "Recomendaciones para la migración",

                description:
                    "Sigue estas precauciones para proteger los datos y comprobar que la migración haya terminado correctamente.",

                items: [
                    "Usa exFAT para la microSD. Conserva un respaldo y copia ux0 completo, incluidos los archivos ocultos.",
                    "La compatibilidad de UX0toSD CloneTool depende de la configuración y el proceso puede tardar bastante. Úsalo solo como alternativa al método con PC.",
                    "Después de la migración, comprueba en VitaShell que ux0 muestra los archivos y la capacidad esperada antes de borrar o reutilizar la tarjeta original."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/mZpRWBLQ#zZFTw-Unbf1AvDUVErNzsA"
        }
    ]
},

// AutoPlugin 2
{
    console: "PS Vita",

    name: "AutoPlugin 2",

    image: "img/PSVita/AutoPlugin2.jpg",

    description:
        "Aplicación homebrew para instalar y quitar plugins disponibles en los catálogos de PS Vita y PSP/Adrenaline.",

    guide: {

        function:
            "AutoPlugin 2 facilita la gestión de plugins desde la consola, pero no garantiza que cada plugin sea compatible con todos los firmwares, modelos o combinaciones.",

        compatibility: {
            "PS Vita / PS TV": "Requiere HENkaku/CFW y una versión de AutoPlugin 2 compatible. Cada plugin tiene requisitos propios."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell para transferir e instalar el archivo VPK.",
            "PC o notebook y conexión USB o FTP para transferir el VPK.",
            "Copia de seguridad del archivo tai/config.txt activo antes de modificar plugins."
        ],

        installation: [
            "Descarga el paquete AutoPlugin 2 desde uno de los enlaces y descomprímelo si viene en RAR o ZIP.",
            "Con VitaShell, transfiere el VPK por USB o FTP, selecciónalo e instálalo; al terminar, sal de VitaShell y busca la burbuja AutoPlugin 2."
        ],

        usage:
            "Abre AutoPlugin 2, elige el catálogo de Vita o PSP/Adrenaline, revisa los requisitos de cada plugin y selecciona instalar o quitar. Reinicia solo si la aplicación o las instrucciones del plugin lo solicitan.",

        notes:
            "Instala solo los plugins que necesites y verifica su procedencia y compatibilidad. Un plugin incompatible o duplicado puede causar pantalla negra o bucles de reinicio. Conserva una copia de tai/config.txt, no mezcles configuraciones ux0:tai y ur0:tai ni actives entradas duplicadas. Evita plugins destinados a eludir DRM o acceder a contenido sin autorización.",

        author: "ONElua",

        details: [
            {
                title: "Abrir la burbuja y gestionar plugins",

                description:
                    "Después de instalar el VPK, la aplicación aparece como una nueva burbuja en el menú de la Vita.",

                items: [
                    "Busca la burbuja AutoPlugin 2 en la pantalla principal y ábrela.",
                    "Selecciona la categoría adecuada y revisa la descripción, los requisitos, el firmware y el dispositivo compatible.",
                    "Marca únicamente los plugins que necesites y sean compatibles; no selecciones toda la lista ni asumas que todos pueden convivir. Pulsa Start para aplicar la selección.",
                    "Antes de cambiar plugins, respalda el tai/config.txt que realmente utiliza tu instalación y conserva sus entradas existentes.",
                    "Reinicia solo si la aplicación lo solicita. Si un plugin causa problemas, usa el método de recuperación de su documentación para quitarlo."
                ]
            },
            {
                title: "Plugins opcionales que puedes considerar",

                description:
                    "Instala solo los plugins que resuelvan una necesidad concreta. Comprueba su disponibilidad y compatibilidad con tu firmware, modelo y otros plugins.",

                items: [
                    "Adrenaline (Fix double touch), de TheOfficialFloW: permite abrir Adrenaline con un solo toque.",
                    "AnalogsEnhancer, de Rinnagatamente/Yoti: permite ajustar la zona muerta y la respuesta de los sticks analógicos.",
                    "Download Enabler, de TheOfficialFlow (VitaTweaks): habilita descargas desde el navegador; úsalo solo para archivos que tengas derecho a descargar.",
                    "ds3vita, de xerpi: permite controlar la consola con un mando de PS3.",
                    "ds4Touch, de MERLev: añade compatibilidad con el panel táctil del DualShock 4 en PS Vita/PS TV; requiere MiniVitaTV.",
                    "ds4vita, de xerpi: permite controlar la consola con un mando de PS4.",
                    "FdFix, de TheOfficialFlow: corrige un problema de descriptores de archivos que puede afectar a algunos homebrews al suspender y reanudar la consola.",
                    "ftpeverywhere, de teakhanirons: habilita transferencias FTP; úsalo solo en una red privada de confianza y desactívalo al terminar.",
                    "Kubridge, de TheOfficialFlow/bythos14: módulo puente kernel-usuario requerido por algunos ports, como Max Payne.",
                    "LCD Colour Space Changer, de cuevavirus: modifica el espacio de color de la pantalla LCD; está destinado a PS Vita 2000.",
                    "Music Premium, de cuevavirus: permite escuchar música de la aplicación oficial mientras se ejecutan juegos o aplicaciones.",
                    "NoAVLS, de Li: desactiva el límite automático de volumen; úsalo con precaución para evitar niveles de sonido perjudiciales.",
                    "PSVshell v1.2 Beta, de Electry, y PSVshellPlus, de GrapheneCt: permiten consultar información y modificar frecuencias. El overclock puede aumentar el calor y el consumo de batería; instala solo una solución de gestión y evita ajustes que no comprendas.",
                    "Quick Menu Plus, de cuevavirus: añade opciones de energía, volumen y personalización al menú rápido.",
                    "Reparch reLoaded, de SonicMastr: permite reubicar ciertas carpetas de homebrew en otras particiones; comprueba la compatibilidad antes de usarlo.",
                    "Shellsecbat, de OperationNT414C: muestra información de batería y tiempo en la barra de estado.",
                    "udcd_uvc, de xerpi: permite transmitir la pantalla de la Vita por USB a una computadora.",
                    "Vitacheat, de FinalCheat: ofrece trucos para juegos; comprueba la compatibilidad de firmware y úsalo únicamente en partidas sin conexión.",
                    "MiniVitaTV, de TheOfficialFloW: añade compatibilidad con varios mandos en juegos compatibles, especialmente en PS TV.",
                    "No se incluyen herramientas para eludir DRM, desbloquear compras de pago o alterar la protección de contenido.",
                    "Comprueba la documentación y compatibilidad de cada plugin. Evita instalaciones innecesarias, incompatibles o duplicadas."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/ONElua/AutoPlugin2"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/vUpgEQ7B#ZqIfEKTVVPebQGWX-Qndkw"
        }
    ]
},

// Apollo Save Tool Vita
{
    console: "PS Vita",

    name: "Apollo Save Tool para PS Vita",

    image: "img/PSVita/ApolloSaveTool.jpg",

    description:
        "Aplicación homebrew para administrar partidas guardadas de PS Vita, PSP, PS1 y Dreamcast desde la consola.",

    guide: {

        function:
            "Apollo permite importar, exportar, respaldar y aplicar parches a partidas guardadas. También administra tarjetas de memoria virtuales de PS1 y archivos VMU de Dreamcast.",

        compatibility: {
            "PS Vita / PS TV": "Requiere un entorno homebrew y poder instalar archivos VPK.",
            "PSP": "Administra partidas de PSP usadas con Adrenaline.",
            "PS1 / Dreamcast": "Administra partidas de PS1 y archivos de tarjetas VMU de Dreamcast en formatos compatibles."
        },

        requirements: [
            "PS Vita o PS TV con homebrew habilitado.",
            "VitaShell para transferir e instalar el archivo VPK.",
            "Conexión a Internet solo si deseas usar la base de datos en línea."
        ],

        installation: [
            "Descarga el archivo apollo-vita.vpk desde la última versión de GitHub Releases.",
            "Transfiérelo e instálalo con VitaShell; luego abre Apollo Save Tool desde la burbuja del menú."
        ],

        usage:
            "Selecciona una partida para ver sus detalles y las opciones disponibles. Los guardados descargados de la base de datos en línea deben resignarse con Apollo antes de usarlos en un juego.",

        notes:
            "Haz una copia de seguridad antes de importar, modificar o aplicar parches a una partida. Usa archivos de guardado que tengas derecho a utilizar y verifica que correspondan al juego correcto. Algunas operaciones con partidas de PSP pueden requerir claves específicas; consulta la documentación oficial antes de usarlas.",

        version: "Consultar GitHub Releases",

        author: "Bucanero",

        details: [
            {
                title: "Instalar y abrir Apollo",

                description:
                    "La aplicación se instala como un VPK y detecta la configuración necesaria en el primer inicio.",

                items: [
                    "Descarga apollo-vita.vpk desde GitHub Releases.",
                    "En VitaShell, selecciona el modo de transferencia configurado (USB o FTP) y copia el VPK a la consola.",
                    "En VitaShell, busca el archivo VPK y selecciona instalar.",
                    "Sal de VitaShell y abre la burbuja Apollo Save Tool. En el primer inicio, la aplicación detecta y configura los ajustes de usuario necesarios."
                ]
            },
            {
                title: "Funciones y controles",

                description:
                    "Apollo administra partidas de PS Vita, PSP, PS1 y Dreamcast en los formatos admitidos por la versión instalada.",

                items: [
                    "Importa, exporta y aplica parches compatibles a partidas; también permite actualizar información de PARAM.SFO.",
                    "Para ver los detalles de una partida, selecciónala y pulsa Triángulo; pulsa Círculo para volver a la lista.",
                    "Pulsa Cuadrado para actualizar la lista de partidas.",
                    "La base de datos en línea permite descargar partidas. Resigna cada guardado con Apollo antes de cargarlo en un juego.",
                    "Los formatos compatibles dependen del sistema y del tipo de archivo; revisa la documentación de la versión instalada."
                ]
            },
            {
                title: "Ubicaciones de partidas de PS Vita y PSP",

                description:
                    "Apollo busca los guardados del usuario en las rutas locales y los archivos externos en las carpetas indicadas.",

                items: [
                    "Partidas externas de PS Vita y PSP: carpeta data/savegames/ de la unidad que uses (uma0:, imc0:, xmc0: o ux0:).",
                    "Partidas de usuario de PS Vita: ux0:user/00/savedata/.",
                    "Partidas de usuario de PSP en Adrenaline: ux0:pspemu/PSP/SAVEDATA/."
                ]
            },
            {
                title: "Ubicaciones de PS1 y Dreamcast",

                description:
                    "Las tarjetas de memoria virtuales y los guardados externos se leen desde estas carpetas.",

                items: [
                    "Partidas externas de PS1: carpeta data/PS1/SAVEDATA/ de la unidad que uses (uma0:, imc0:, xmc0: o ux0:).",
                    "Tarjetas de memoria virtuales de PS1: carpeta data/PS1/VMC/ de la unidad que uses (uma0:, imc0:, xmc0: o ux0:).",
                    "Partidas externas de Dreamcast: carpeta data/DC/SAVEDATA/ de la unidad que uses (uma0:, imc0:, xmc0: o ux0:).",
                    "Imágenes VMU de Dreamcast: carpeta data/DC/VMU/ de la unidad que uses (uma0:, imc0:, xmc0: o ux0:).",
                    "Imágenes VMU de Flycast: ux0:data/flycast/data/ y ux0:data/flycast/."
                ]
            }
        ]
    },

    website: "https://github.com/bucanero/apollo-vita",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/bucanero/apollo-vita/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/TRID2ABS#hTmUHISTtPTbhJxAlBwvKA"
        }
    ]
},

// VitaCheat
{
    console: "PS Vita",

    name: "VitaCheat: trucos (sin conexión)",

    image: "img/PSVita/VitaCheat.jpg",

    description:
        "Plugin para activar códigos en juegos de PS Vita. TempAR-Vita puede ayudar a buscar punteros y preparar códigos personalizados desde un PC.",

    guide: {

        function:
            "VitaCheat carga bases de códigos, permite activar trucos y buscar valores durante una partida. TempAR-Vita es una herramienta complementaria para analizar volcados de memoria y trabajar con códigos compatibles.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y versiones compatibles de VitaCheat y sus plugins.",
            "Códigos": "Cada código debe corresponder al juego, región y versión correctos."
        },

        requirements: [
            "PS Vita con HENkaku/CFW y VitaCheat compatible.",
            "AutoPlugin2 para instalar el plugin y VitaShell para administrar archivos.",
            "PC para usar TempAR-Vita si deseas crear o analizar códigos."
        ],

        installation: [
            "Instala una versión compatible de VitaCheat desde AutoPlugin2 y confirma la ruta de su base de datos.",
            "Copia el archivo de códigos correspondiente al juego en ux0:vitacheat/db/; abre el juego en modo sin conexión para activar el menú."
        ],

        usage:
            "Con el juego abierto y sin conexión, pulsa L + Derecha para abrir VitaCheat. En Cheat List, usa Cuadrado para activar o desactivar un código y Círculo para salir.",

        notes:
            "Usa los trucos solo en partidas individuales sin conexión; no los actives en partidas en línea o competitivas. Haz una copia de seguridad de la base de datos antes de reemplazar archivos. Los códigos dependen del ID, la región, la actualización del juego y la versión del plugin; un código incorrecto puede bloquear el juego o dañar la partida.",

        version: "Consulta las versiones compatibles del plugin en AutoPlugin2",

        details: [
            {
                title: "Instalar VitaCheat y la base de códigos",

                description:
                    "Instala el plugin compatible con tu firmware y conserva los archivos de códigos que ya tengas.",

                items: [
                    "Si VitaCheat no está instalado, usa AutoPlugin2 para PS Vita y selecciona una versión compatible con tu CFW.",
                    "En VitaShell, revisa ux0:vitacheat/db/ y copia allí los archivos de códigos del juego. Respalda la carpeta antes de reemplazar o combinar archivos.",
                    "Comprueba el ID del juego y la región; los códigos de otro lanzamiento pueden no funcionar."
                ]
            },
            {
                title: "Abrir y activar códigos",

                description:
                    "El menú de VitaCheat aparece mientras se ejecuta un juego compatible.",

                items: [
                    "Inicia el juego en modo individual y sin conexión.",
                    "Pulsa L + Derecha para abrir el menú y selecciona Cheat List.",
                    "Usa Cuadrado para alternar cada código y Círculo para salir.",
                    "Desactiva los códigos antes de guardar si notas comportamientos inesperados; algunas modificaciones solo duran mientras el juego permanece abierto."
                ]
            },
            {
                title: "Buscar y crear códigos",

                description:
                    "La búsqueda de valores y TempAR-Vita son herramientas opcionales para crear códigos propios; no se necesitan para usar una base existente.",

                items: [
                    "En VitaCheat, abre GO SEARCH y busca un valor conocido; vuelve al juego, cambia ese valor y repite la búsqueda para reducir resultados.",
                    "Para valores desconocidos, usa Fuzzy Search y compara los resultados después de cambiar el estado del juego.",
                    "Exporta los volcados de memoria necesarios y ábrelos en TempAR-Vita para buscar punteros y generar códigos compatibles con VitaCheat.",
                    "Prueba los códigos únicamente en partidas individuales sin conexión y guárdalos en la base correspondiente al ID del juego."
                ]
            }
        ]
    },

    website: "https://github.com/Yohoki/TempAR-Vita",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Yohoki/TempAR-Vita/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/TVBixCTZ#VTqu9KB5sJVlZyBVVpGyPg"
        },
    ]
},

// PlayStation Mobile
{
    console: "PS Vita",

    name: "PlayStation Mobile (PSM Runtime)",

    image: "img/PSVita/PlaystationMobile.jpg",

    description:
        "Información sobre el runtime legado de PlayStation Mobile en PS Vita. El servicio de distribución y activación oficial fue discontinuado, por lo que la disponibilidad actual no está garantizada.",

    guide: {

        function:
            "PSM Runtime permite ejecutar aplicaciones y juegos desarrollados para PlayStation Mobile; no es un paquete de juegos Android.",

        compatibility: {
            "PS Vita": "Depende de que el runtime esté instalado y de que el contenido tenga una licencia válida.",
            "Activación": "La distribución y validación oficial pueden no estar disponibles actualmente."
        },

        requirements: [
            "Una PS Vita que ya tenga PSM Runtime instalado y contenido PSM adquirido legalmente.",
            "Acceso a Ajustes > Sistema > PlayStation Mobile para comprobar el estado del runtime."
        ],

        installation: [
            "En la Vita, abre Ajustes > Sistema > PlayStation Mobile y comprueba si el runtime está instalado.",
            "Si falta el runtime o solicita una activación que no puedes completar oficialmente, puedes instalarlo manualmente si tienes los archivos necesarios."
        ],

        usage:
            "Inicia desde LiveArea únicamente las aplicaciones PSM que hayas adquirido y puedas usar con una licencia válida.",

        notes:
            "PlayStation Mobile es una plataforma retirada. No se incluyen paquetes de runtime, descargas de juegos ni instrucciones para eludir DRM o activación. La disponibilidad puede variar según la consola, la cuenta y las licencias previamente instaladas.",

        version: "Runtime histórico 2.01; la disponibilidad actual no está garantizada",

        details: [
            {
                title: "Comprobar el runtime instalado",

                description:
                    "La pantalla de sistema permite revisar si la consola conserva componentes de PlayStation Mobile.",

                items: [
                    "Abre Ajustes > Sistema > PlayStation Mobile.",
                    "Comprueba si aparece la información de la versión instalada.",
                    "Si la sección no aparece o solicita una activación en línea, no instales paquetes de procedencia dudosa ni intentes saltarte la validación."
                ]
            },
            {
                title: "Estado del servicio y límites",

                description:
                    "PSM es una plataforma retirada; sus servicios y aplicaciones pueden no funcionar como antes.",

                items: [
                    "No se garantiza que sigan disponibles la descarga, actualización o reactivación del runtime.",
                    "La disponibilidad de una aplicación depende de su licencia y de los servicios que aún responda la consola.",
                    "Usa solo aplicaciones PSM que hayas adquirido legalmente y que estén autorizadas para tu cuenta."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/GYokkJjL#Gsk_rB2r6RIINI1p8UNw2A"
        }
    ]
},

// VitaShell
{
    console: "PS Vita",

    name: "VitaShell: administrador de archivos",

    image: "img/PSVita/VitaShell.jpg",

    description:
        "Administrador de archivos para PS Vita y PS TV que permite explorar el almacenamiento, instalar archivos VPK y transferir archivos mediante USB o FTP.",

    guide: {

        function:
            "VitaShell permite administrar archivos y carpetas, instalar homebrew en formato VPK y conectar la consola a una computadora por USB o FTP.",

        compatibility: {
            "PS Vita / PS TV": "Requiere HENkaku/CFW. Usa una versión compatible con el firmware de la consola."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "Un gestor de archivos o instalador alternativo, como molecularShell u ONEMenu, para instalar o actualizar VitaShell.",
            "Cable USB para transferencia por USB, o una red local de confianza para transferencia FTP."
        ],

        installation: [
            "Descarga VitaShell desde la sección Releases del proyecto y transfiere el VPK a la consola con un gestor de archivos disponible.",
            "Instala el VPK desde molecularShell u ONEMenu; no instales el VPK de VitaShell desde la propia aplicación."
        ],

        usage:
            "Abre la burbuja VitaShell para explorar las particiones, administrar archivos, instalar otros VPK y configurar conexiones USB o FTP.",

        notes:
            "La versión actual del proyecto advierte que no se debe instalar VitaShell desde VitaShell. Usa otro gestor de archivos para instalar o actualizarlo. Evita borrar o modificar archivos del sistema si no conoces su función y desactiva FTP al terminar la transferencia.",

        version: "Consulta la versión más reciente en GitHub Releases",

        author: "TheOfficialFloW / RealYoti",

        details: [
            {
                title: "Instalación y actualización segura",

                description:
                    "VitaShell debe instalarse desde otra aplicación de administración de archivos.",

                items: [
                    "Descarga VitaShell.vpk desde GitHub Releases y cópialo a una ubicación accesible de la consola.",
                    "Abre molecularShell u ONEMenu, localiza el VPK e inicia la instalación desde esa aplicación.",
                    "Para actualizar VitaShell, repite el procedimiento desde el gestor alternativo. No abras VitaShell para instalar su propio VPK."
                ]
            },
            {
                title: "Transferir archivos por USB o FTP",

                description:
                    "El modo de conexión se configura en los ajustes de VitaShell y se activa con el botón Select.",

                items: [
                    "Abre VitaShell y pulsa Start para entrar en Settings.",
                    "En Select button, elige USB o FTP según el método de transferencia que vayas a utilizar.",
                    "Pulsa Select para iniciar la conexión. En FTP, VitaShell muestra la dirección y el puerto que debes introducir en el cliente FTP de la computadora.",
                    "Al terminar, pulsa Select para cerrar la conexión. En FTP, mantén ambos dispositivos en una red privada de confianza."
                ]
            },
            {
                title: "Administrar e instalar archivos",

                description:
                    "VitaShell permite navegar por el almacenamiento y ejecutar acciones sobre los archivos seleccionados.",

                items: [
                    "Explora las particiones necesarias, como ux0: o ur0:, y evita cambiar archivos del sistema sin una instrucción específica y fiable.",
                    "Para instalar otro homebrew, localiza su VPK, selecciónalo y elige la opción de instalación.",
                    "Antes de eliminar o reemplazar archivos, comprueba la ruta y conserva una copia de seguridad cuando sean datos importantes."
                ]
            }
        ]
    },

    website: "https://github.com/RealYoti/VitaShell",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/RealYoti/VitaShell/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/CVwXjBaI#SsndVkWs7mhhuh2EodNyXg"
        }
    ]
},

// VitaDB Downloader
{
    console: "PS Vita",

    name: "VitaDB Downloader",

    image: "img/PSVita/VitaDB.jpg",

    description:
        "Cliente oficial de VitaDB para buscar, descargar e instalar aplicaciones homebrew para PS Vita y PS TV, consultar sus detalles y revisar actualizaciones.",

    guide: {

        function:
            "VitaDB Downloader permite explorar el catálogo de homebrew por nombre, autor o categoría, ver información de las aplicaciones e instalar sus archivos VPK y datos cuando estén disponibles.",

        compatibility: {
            "PS Vita / PS TV": "Requiere HENkaku/CFW y conexión a Internet para consultar y descargar el catálogo."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "Conexión a Internet y espacio libre para la aplicación y sus archivos de datos.",
            "VitaShell u otro instalador compatible para instalar VitaDB Downloader desde su VPK."
        ],

        installation: [
            "Descarga VitaDB Downloader desde GitHub Releases y transfiere el VPK a la consola.",
            "Instálalo con VitaShell u otro instalador compatible y abre la burbuja VitaDB Downloader."
        ],

        usage:
            "Explora las categorías, busca una aplicación y revisa sus datos y requisitos antes de instalarla. VitaDB Downloader también permite consultar el estado de las aplicaciones instaladas y sus actualizaciones.",

        notes:
            "VitaDB es un catálogo de aplicaciones homebrew de terceros; revisa el autor, la descripción, los requisitos y los archivos de datos de cada entrada. Descarga y utiliza únicamente software y contenido que tengas derecho a usar. La instalación de una aplicación no garantiza que funcione en todas las consolas o firmwares.",

        version: "Consulta la versión más reciente en GitHub Releases",

        author: "Rinnegatamante",

        details: [
            {
                title: "Buscar e instalar aplicaciones",

                description:
                    "El cliente permite buscar en el catálogo, revisar los detalles de cada entrada y elegir qué componentes instalar.",

                items: [
                    "Abre VitaDB Downloader y explora la lista o busca por nombre o autor.",
                    "Cambia de categoría con L y de método de ordenación con R; revisa la descripción y los requisitos de la aplicación seleccionada.",
                    "Selecciona la aplicación y pulsa X para iniciar la instalación. Si se ofrecen archivos de datos, elige instalar VPK y datos o solo VPK según las instrucciones de esa aplicación.",
                    "Espera a que termine la descarga e instalación antes de salir del programa."
                ]
            },
            {
                title: "Consultar detalles y gestionar aplicaciones",

                description:
                    "VitaDB Downloader muestra metadatos y permite revisar el estado de las aplicaciones instaladas.",

                items: [
                    "Pulsa Start sobre una aplicación para consultar sus capturas o video, si están disponibles.",
                    "Pulsa Select para abrir opciones adicionales de la aplicación seleccionada.",
                    "Usa la sección de administración para revisar las aplicaciones instaladas y las actualizaciones disponibles.",
                    "Comprueba la compatibilidad antes de actualizar una aplicación modificada o instalada desde otra fuente."
                ]
            }
        ]
    },

    website: "https://www.rinnegatamante.eu/vitadb",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Rinnegatamante/VitaDB-Downloader/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/mVxHCZgJ#QuBvSq3x3yhDZUfV79fCgg"
        }
    ]
},

// NetStream
{
    console: "PS Vita",

    name: "NetStream: reproductor de video en red",

    image: "img/PSVita/NetStream.jpg",

    description:
        "Cliente de video para PS Vita que reproduce videos y transmisiones en vivo de YouTube, contenido desde servidores HTTP o FTP y archivos guardados en la consola.",

    guide: {

        function:
            "NetStream permite reproducir videos en línea o desde el almacenamiento local de la consola y conectarse a servidores HTTP y FTP.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y conexión a Internet para contenido en línea. El acceso a YouTube puede variar si cambian sus servicios."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible para instalar el VPK.",
            "Conexión a Internet para transmisiones en línea, o videos compatibles guardados localmente."
        ],

        installation: [
            "Descarga el VPK de NetStream desde GitHub Releases y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja NetStream en el menú principal."
        ],

        usage:
            "Abre NetStream y selecciona la fuente del video: YouTube, un servidor HTTP o FTP, o el almacenamiento local. Sigue el manual incluido para conocer los controles y opciones de reproducción.",

        notes:
            "NetStream es un reproductor, no un servicio de alojamiento. La disponibilidad de YouTube y de otros servicios externos puede cambiar sin previo aviso. Usa fuentes y contenido que tengas derecho a reproducir; conecta la consola únicamente a servidores de confianza.",

        version: "Consulta la versión más reciente en GitHub Releases",

        author: "GrapheneCt",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el archivo VPK usando VitaShell y una conexión USB o FTP.",

                items: [
                    "Descarga el VPK desde la sección Releases del repositorio oficial.",
                    "En VitaShell, conecta la consola por USB o FTP y copia el VPK a una ubicación accesible.",
                    "Localiza el archivo en VitaShell, selecciónalo e inicia la instalación.",
                    "Sal de VitaShell y abre NetStream desde su nueva burbuja."
                ]
            },
            {
                title: "Fuentes de video",

                description:
                    "NetStream admite distintas fuentes para reproducir contenido en la consola.",

                items: [
                    "YouTube: busca y reproduce videos y transmisiones en vivo desde las funciones disponibles en la aplicación.",
                    "HTTP y FTP: conecta con un servidor de la red que aloje los videos que quieres reproducir.",
                    "Almacenamiento local: reproduce archivos compatibles guardados en la consola.",
                    "La disponibilidad de sitios y servicios depende de su funcionamiento y compatibilidad actuales."
                ]
            },
            {
                title: "Manual y controles",

                description:
                    "El repositorio del proyecto incluye un manual visual con información de uso y controles.",

                items: [
                    "Consulta el manual incluido en el repositorio oficial para revisar los controles y las opciones de la interfaz.",
                    "Asegúrate de tener una conexión estable al reproducir contenido por Internet o desde otro dispositivo.",
                    "Si una fuente deja de funcionar, comprueba primero si el servicio o servidor sigue disponible y si la aplicación tiene una versión más reciente."
                ]
            }
        ]
    },

    website: "https://github.com/GrapheneCt/NetStream",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/GrapheneCt/NetStream/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/SQhkBbjA#cF10RAnuppYufMt5PMw51w"
        }
    ]
},

// Adrenaline
{
    console: "PS Vita",

    name: "Adrenaline: entorno PSP y PS1",

    image: "img/PSVita/Adrenaline.jpg",

    description:
        "Adrenaline adapta el emulador oficial de PSP integrado en PS Vita para ejecutar el entorno de firmware personalizado 6.61, software de PSP y contenido compatible de PS1.",

    guide: {

        function:
            "Adrenaline habilita un entorno PSP dentro de PS Vita para ejecutar homebrew de PSP y software compatible. También permite usar contenido de PS1 compatible con el emulador.",

        compatibility: {
            "PS Vita / PS TV": "Requiere HENkaku/CFW y espacio disponible en el almacenamiento. Consulta el repositorio oficial para detalles de compatibilidad."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell para transferir e instalar el VPK.",
            "Conexión a Internet durante la primera instalación para obtener el firmware 6.61 desde la aplicación.",
            "Espacio disponible para los componentes de Adrenaline y el contenido que decidas instalar."
        ],

        installation: [
            "Descarga Adrenaline.vpk desde GitHub Releases y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja Adrenaline.",
            "En una instalación nueva, sigue las indicaciones en pantalla para descargar e instalar el firmware 6.61."
        ],

        usage:
            "Después de completar la configuración inicial, abre Adrenaline y utiliza su interfaz PSP para iniciar homebrew o contenido compatible que tengas derecho a usar.",

        notes:
            "En una instalación existente, sigue el procedimiento de actualización publicado por el proyecto; no repitas el flujo de instalación inicial sin revisar sus instrucciones. No descargues firmware ni juegos desde mirrors no oficiales. Usa homebrew y copias personales de contenido que poseas legalmente.",

        version: "6.61 Adrenaline-7",

        author: "TheOfficialFloW",

        details: [
            {
                title: "Instalación inicial",

                description:
                    "La instalación nueva requiere habilitar primero el entorno de Adrenaline y completar la configuración que aparece en pantalla.",

                items: [
                    "Descarga Adrenaline.vpk desde GitHub Releases y cópialo a la Vita mediante USB o FTP en VitaShell.",
                    "En VitaShell, localiza el VPK e instálalo. Al finalizar, sal de VitaShell y abre la burbuja Adrenaline.",
                    "En el primer inicio, pulsa X cuando la aplicación lo solicite para descargar el firmware 6.61. Adrenaline se cerrará al terminar esta descarga.",
                    "Abre Adrenaline nuevamente y sigue las indicaciones en pantalla para completar la instalación y configuración del entorno PSP."
                ]
            },
            {
                title: "Actualizar una instalación existente",

                description:
                    "El proyecto publica un procedimiento de actualización distinto del flujo de instalación inicial.",

                items: [
                    "Antes de actualizar, consulta las instrucciones de la versión más reciente en el repositorio oficial.",
                    "Haz un respaldo de los datos importantes y sigue exactamente el procedimiento indicado para actualizar los módulos.",
                    "No elimines ni edites entradas de tai/config.txt o archivos de Adrenaline basándote en instrucciones de otra versión."
                ]
            },
            {
                title: "Iniciar homebrew y contenido compatible",

                description:
                    "Adrenaline abre la interfaz PSP para ejecutar software compatible con el emulador integrado.",

                items: [
                    "Abre Adrenaline desde su burbuja y utiliza la interfaz PSP para acceder al contenido disponible.",
                    "Instala únicamente homebrew de fuentes confiables y utiliza copias personales de juegos que poseas legalmente.",
                    "La compatibilidad puede variar según la aplicación, el juego o los plugins instalados."
                ]
            }
        ]
    },

    website: "https://github.com/TheOfficialFloW/Adrenaline",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/TheOfficialFloW/Adrenaline/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/uVpB1Q5T#6WZ9ZbZZPS3igB-Qv_M-mg"
        }
    ]
},

// Adrenaline Bubble Manager
{
    console: "PS Vita",

    name: "Adrenaline Bubble Manager: accesos directos PSP y PS1",

    image: "img/PSVita/AdrenalineBubbleManager.jpg",

    description:
        "Crea y organiza burbujas directas en LiveArea para iniciar contenido compatible de PSP y PS1 mediante Adrenaline, sin tener que buscarlo cada vez dentro de la interfaz PSP.",

    guide: {

        function:
            "Adrenaline Bubble Manager (ABM) crea burbujas personalizadas con icono, título y LiveArea para contenido de PSP y PS1 gestionado por Adrenaline.",

        compatibility: {
            "PS Vita / PS TV": "Requiere HENkaku/CFW y Adrenaline v7 de TheOfficialFloW o Adrenaline 8.0.2 de isage. Abre Adrenaline al menos una vez antes de usar ABM."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "Adrenaline v7 o Adrenaline 8.0.2 instalado y abierto al menos una vez.",
            "VitaShell para transferir e instalar el VPK de ABM.",
            "Contenido compatible de PSP o PS1 que tengas derecho a usar y espacio disponible para crear burbujas."
        ],

        installation: [
            "Descarga el VPK de Adrenaline Bubble Manager desde GitHub Releases y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK con VitaShell, abre ABM y selecciona el contenido de PSP o PS1 para crear sus burbujas."
        ],

        usage:
            "En la lista de contenido, pulsa X para crear burbujas; usa O para editar o administrar las existentes. Al finalizar, vuelve a LiveArea para abrirlas directamente.",

        notes:
            "ABM necesita una instalación funcional de Adrenaline y solo debe usarse con contenido propio o autorizado. Revisa las opciones antes de editar una burbuja y no cambies módulos del emulador si no tienes claro el procedimiento de recuperación.",

        version: "6.24",

        author: "ONElua",

        details: [
            {
                title: "Preparar Adrenaline y ABM",

                description:
                    "Configura primero Adrenaline; ABM lo utiliza para iniciar directamente los títulos desde LiveArea.",

                items: [
                    "Instala Adrenaline v7 de TheOfficialFloW o Adrenaline 8.0.2 de isage y ábrelo al menos una vez para completar su configuración inicial.",
                    "Descarga el VPK de Adrenaline Bubble Manager desde GitHub Releases.",
                    "Transfiere el VPK por USB o FTP con VitaShell, selecciónalo e instálalo.",
                    "Abre la burbuja Adrenaline Bubble Manager desde LiveArea."
                ]
            },
            {
                title: "Crear burbujas para PSP o PS1",

                description:
                    "ABM explora el contenido compatible y crea accesos directos personalizados en LiveArea.",

                items: [
                    "Selecciona un título compatible de la lista y pulsa X para crear su burbuja.",
                    "Si quieres personalizar sus datos, sigue las opciones que muestra ABM para el título seleccionado.",
                    "Espera a que termine el proceso; luego vuelve a LiveArea y localiza la nueva burbuja.",
                    "Abre la burbuja para iniciar el título directamente mediante Adrenaline."
                ]
            },
            {
                title: "Controles básicos",

                description:
                    "Los controles principales de ABM permiten crear, editar y organizar accesos directos.",

                items: [
                    "X: crear burbuja(s) para el contenido seleccionado.",
                    "O: editar o administrar burbujas existentes.",
                    "Cuadrado: activar selección múltiple.",
                    "Triángulo: instalar en lote el contenido que aún no tiene burbuja.",
                    "Consulta Extra Settings y el manual del proyecto antes de modificar opciones avanzadas."
                ]
            }
        ]
    },

    website: "https://github.com/ONElua/AdrenalineBubbleManager",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/ONElua/AdrenalineBubbleManager/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/vVB1ybja#GKdtScq4jLNT63Ru9QE5ug"
        }
    ]
},

// VitaTester
{
    console: "PS Vita",

    name: "VitaTester: prueba de botones y pantalla táctil",

    image: "img/PSVita/VitaTester.jpg",

    description:
        "Aplicación de diagnóstico sencilla para comprobar la respuesta de los botones y la pantalla táctil de PS Vita.",

    guide: {

        function:
            "VitaTester muestra la entrada que recibe de los controles y la pantalla táctil, ayudando a identificar si responden al presionarlos o tocarlos.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW para instalar y ejecutar el VPK."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell para transferir e instalar VitaTester.vpk.",
            "Un espacio seguro donde probar los botones y la pantalla sin presionar con fuerza."
        ],

        installation: [
            "Descarga VitaTester.vpk y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja VitaTester."
        ],

        usage:
            "Pulsa los botones uno por uno y toca distintas zonas de la pantalla; observa la respuesta en la interfaz para comprobar cuáles registran la entrada.",

        notes:
            "La prueba confirma que la consola detecta entradas, pero no determina por sí sola la causa de una falla física ni reemplaza una reparación. No presiones con fuerza la pantalla o los controles.",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala VitaTester como cualquier otro VPK compatible con PS Vita.",

                items: [
                    "Descarga VitaTester.vpk desde VitaDB o desde el mirror disponible.",
                    "Abre VitaShell y conecta la consola a una computadora por USB o FTP.",
                    "Copia el VPK a la consola, selecciónalo en VitaShell y confirma la instalación.",
                    "Sal de VitaShell y abre VitaTester desde su burbuja en LiveArea."
                ]
            },
            {
                title: "Probar controles y pantalla táctil",

                description:
                    "Comprueba cada entrada por separado y observa la indicación correspondiente en pantalla.",

                items: [
                    "Pulsa cada botón una vez y verifica que la interfaz indique la entrada correcta.",
                    "Prueba el panel táctil delantero en varios puntos, sin ejercer presión excesiva.",
                    "Si una entrada no responde, repite la prueba y comprueba que no haya una funda, suciedad u otro obstáculo interfiriendo.",
                    "Si el problema persiste, VitaTester no puede reparar el componente; puede ser necesaria una evaluación física de la consola."
                ]
            }
        ]
    },

    website: "https://www.rinnegatamante.eu/vitadb/#/info/1079",

    downloads: [
        {
            name: "VitaDB",
            url: "https://www.rinnegatamante.eu/vitadb/#/info/1079"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/vchFyChJ#lyEuCqsZ7J2DtKYiP_1MPg"
        }
    ]
},

// PSVident
{
    console: "PS Vita",

    name: "PSVident: información e identificación de PS Vita",

    image: "img/PSVita/PSVident.jpg",

    description:
        "Utilidad que muestra información técnica de la consola PS Vita, como modelo, región y número de serie.",

    guide: {

        function:
            "PSVident muestra información de identificación y estado de la consola en varias páginas; también puede guardar un informe de texto.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW para instalar y ejecutar el VPK."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell para transferir e instalar PSVident.vpk."
        ],

        installation: [
            "Descarga PSVident.vpk desde VitaDB o desde el Mirror MEGA y transfiérelo a la consola con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja PSVident."
        ],

        usage:
            "Navega por las páginas de información con izquierda/derecha o L/R. Usa el modo censurado antes de mostrar o capturar información identificadora.",

        notes:
            "La información mostrada y los informes guardados pueden incluir identificadores únicos, como el número de serie. No publiques capturas ni compartas informes sin ocultar esos datos; usa el modo censurado cuando muestres la aplicación a otras personas.",

        author: "Freakler",

        details: [
            {
                title: "Consultar información de la consola",

                description:
                    "PSVident presenta distintos datos de identificación y estado en páginas navegables.",

                items: [
                    "Abre PSVident desde LiveArea y revisa la información que aparece en cada página.",
                    "Pulsa derecha o R para avanzar y izquierda o L para volver a la página anterior.",
                    "Pulsa X para actualizar la página actual si necesitas volver a consultar los datos."
                ]
            },
            {
                title: "Proteger datos identificadores",

                description:
                    "Algunas pantallas e informes pueden contener información única de la consola.",

                items: [
                    "Pulsa cuadrado para activar o desactivar el modo censurado antes de compartir la pantalla.",
                    "No publiques el número de serie ni otros identificadores; revisa y oculta los datos personales en cualquier captura.",
                    "Si mantienes abajo durante dos segundos, PSVident puede guardar un informe de texto en ux0:data. Revisa el archivo y elimina u oculta identificadores antes de compartirlo.",
                    "Pulsa círculo para restablecer la vista si lo necesitas."
                ]
            }
        ]
    },

    website: "https://github.com/Freakler/vita-PSVident",

    downloads: [
        {
            name: "VitaDB",
            url: "https://www.rinnegatamante.eu/vitadb/#/info/108"
        },
        {
            name: "GitHub Releases",
            url: "https://github.com/Freakler/vita-PSVident/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/bVQTmT4R#Xmtg0OeXwhzxERQ-DsK9UQ"
        }
    ]
},

// AnimeDownloader
{
    console: "PS Vita",

    name: "AnimeDownloader",

    image: "img/PSVita/AnimeDownloader.jpg",

    description:
        "Aplicación homebrew para PS Vita que organiza y reproduce video desde proveedores en línea compatibles; algunas funciones dependen de servicios externos.",

    guide: {

        function:
            "AnimeDownloader ofrece una interfaz para explorar, reproducir y descargar video desde los proveedores integrados. La disponibilidad depende de los servicios externos y de la legalidad del contenido ofrecido.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW. La reproducción y las descargas dependen del proveedor, la conexión y el formato compatible con la consola."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell para transferir e instalar AnimeDownloader.vpk.",
            "Conexión a Internet para las funciones que dependen de proveedores en línea."
        ],

        installation: [
            "Descarga AnimeDownloader.vpk desde GitHub o desde el Mirror MEGA y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja AnimeDownloader."
        ],

        usage:
            "Usa la aplicación únicamente con video de fuentes autorizadas y contenido que tengas derecho a reproducir o descargar. La compatibilidad de cada proveedor puede cambiar.",

        notes:
            "Los servicios externos pueden dejar de funcionar y el formato del video debe ser compatible con PS Vita. Respeta los derechos de autor: no descargues ni compartas episodios sin autorización. No se incluyen instrucciones para localizar fuentes no autorizadas.",

        version: "Consulta el repositorio oficial para información de la versión",

        author: "ONElua",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK con VitaShell mediante una transferencia USB o FTP.",

                items: [
                    "Descarga AnimeDownloader.vpk desde el repositorio oficial o el Mirror MEGA.",
                    "En VitaShell, conecta la consola por USB o FTP y copia el archivo VPK a una ubicación accesible.",
                    "Selecciona el VPK en VitaShell y confirma la instalación.",
                    "Sal de VitaShell y abre AnimeDownloader desde LiveArea."
                ]
            },
            {
                title: "Uso y disponibilidad",

                description:
                    "El funcionamiento depende de que los proveedores externos y sus formatos sigan siendo compatibles.",

                items: [
                    "Consulta la información que muestra la aplicación sobre los proveedores disponibles.",
                    "Limita la reproducción y las descargas a fuentes autorizadas y a contenido que tengas derecho a usar.",
                    "Si una función deja de estar disponible, revisa el repositorio oficial; el proveedor externo puede haber cambiado o dejado de funcionar.",
                    "No redistribuyas el video descargado sin permiso de los titulares de derechos."
                ]
            }
        ]
    },

    website: "https://github.com/ONElua/AnimeDownloader",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/ONElua/AnimeDownloader/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/aVphTChD#ynl045YmcqbDdG1iJNCgqg"
        }
    ]
},

// Noboru
{
    console: "PS Vita",

    name: "Noboru: lector de manga y cómics",

    image: "img/PSVita/Noboru.jpg",

    description:
        "Lector homebrew para PS Vita que permite organizar y leer manga o cómics, incluidos archivos CBZ/ZIP y carpetas de imágenes propias.",

    guide: {

        function:
            "Noboru ofrece una biblioteca y un lector para manga y cómics, con modos de lectura ajustables e importación local de archivos CBZ/ZIP o carpetas de imágenes.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW. Para lectura sin conexión, deja memoria disponible; el proyecto recomienda más de 100 MB."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell para transferir e instalar Noboru.vpk.",
            "Archivos de manga o cómics que tengas derecho a leer, en CBZ/ZIP compatible o como carpetas de imágenes."
        ],

        installation: [
            "Descarga Noboru.vpk desde GitHub o desde el Mirror MEGA y transfiérelo por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja Noboru."
        ],

        usage:
            "Para leer archivos locales, cópialos a ux0:data/noboru/import/ y usa la sección de importación de la aplicación para añadirlos a la biblioteca.",

        notes:
            "Utiliza archivos propios o distribuidos con autorización. No descargues ni compartas obras protegidas sin permiso. Para archivos ZIP/CBZ, Noboru admite imágenes JPG, JPEG, PNG, BMP y GIF; WebP y CBR no están soportados según el README del proyecto.",

        author: "Creckeryop",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala Noboru como un VPK mediante VitaShell.",

                items: [
                    "Descarga Noboru.vpk desde el repositorio oficial o el Mirror MEGA.",
                    "En VitaShell, conecta la consola por USB o FTP y copia el VPK a una ubicación accesible.",
                    "Selecciona el archivo en VitaShell y confirma la instalación.",
                    "Sal de VitaShell y abre Noboru desde su burbuja en LiveArea."
                ]
            },
            {
                title: "Importar archivos locales",

                description:
                    "Puedes agregar obras propias o autorizadas a la biblioteca sin usar catálogos externos.",

                items: [
                    "Copia los archivos CBZ/ZIP o las carpetas de imágenes a ux0:data/noboru/import/.",
                    "En Noboru, abre la sección de importación y selecciona el archivo o carpeta para añadirlo a la biblioteca.",
                    "Los archivos comprimidos deben contener imágenes JPG, JPEG, PNG, BMP o GIF; WebP no es compatible.",
                    "También puedes importar carpetas con imágenes o carpetas anidadas que contengan imágenes. No incluyas archivos ajenos a la lectura dentro de esas carpetas.",
                    "Deja espacio libre suficiente: el proyecto recomienda más de 100 MB para lectura sin conexión."
                ]
            },
            {
                title: "Lectura y biblioteca",

                description:
                    "La aplicación permite ajustar la lectura y conservar una biblioteca local.",

                items: [
                    "Abre un título desde la biblioteca para leerlo.",
                    "Ajusta orientación, dirección de lectura y zoom desde las opciones disponibles para el título.",
                    "Noboru guarda la biblioteca y el historial localmente. Haz una copia de seguridad antes de reinstalar la aplicación o borrar sus datos."
                ]
            }
        ]
    },

    website: "https://github.com/Creckeryop/NOBORU",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Creckeryop/NOBORU/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/bZoFXbbT#is0MEwWXsJcliR9ydIrKyw"
        }
    ]
},

// Better Homebrew Browser
{
    console: "PS Vita",

    name: "Better Homebrew Browser",

    image: "img/PSVita/BetterHomebrewBrowser.jpg",

    description:
        "Navegador de homebrew para PS Vita que consulta varias bases de datos y permite descargar aplicaciones en segundo plano.",

    guide: {

        function:
            "Better Homebrew Browser reúne catálogos de aplicaciones para PS Vita y ofrece descargas en segundo plano con notificaciones de instalación.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW, conexión a Internet y una configuración TLS compatible para acceder a algunos servicios."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell para transferir e instalar BetterHomebrewBrowser.vpk.",
            "Conexión a Internet.",
            "Comprueba los requisitos de TLS indicados en la versión que descargues; el proyecto menciona iTLS-Enso y vita_tls_fixer."
        ],

        installation: [
            "Descarga el VPK desde GitHub Releases o desde el Mirror MEGA y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre Better Homebrew Browser desde LiveArea."
        ],

        usage:
            "Explora los catálogos para encontrar homebrew, revisa la información y procedencia de cada aplicación e inicia la descarga. Las descargas pueden continuar en segundo plano y avisar cuando estén listas.",

        notes:
            "Descarga únicamente homebrew y software que tengas autorización para usar; verifica el autor, la licencia y los requisitos antes de instalar. No uses la aplicación para obtener juegos comerciales u otro contenido protegido sin autorización. El release V1.46 aparece marcado como pre-release y el autor lo describe como completamente sin probar; revisa las notas antes de elegir una versión.",

        version: "Consulta las notas de cada versión en GitHub Releases",

        author: "Ibrahim778",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK desde VitaShell después de transferirlo a la consola.",

                items: [
                    "Descarga BetterHomebrewBrowser.vpk desde GitHub Releases o el Mirror MEGA.",
                    "En VitaShell, conecta la consola por USB o FTP y copia el VPK a una ubicación accesible.",
                    "Selecciona el archivo en VitaShell y confirma la instalación.",
                    "Sal de VitaShell y abre Better Homebrew Browser desde su burbuja."
                ]
            },
            {
                title: "Explorar y descargar homebrew",

                description:
                    "La aplicación consulta bases de datos de homebrew y puede gestionar descargas en segundo plano.",

                items: [
                    "Abre el catálogo disponible y revisa la descripción, el autor, la licencia y los requisitos del homebrew antes de instalarlo.",
                    "Selecciona una aplicación autorizada e inicia la descarga desde la interfaz.",
                    "Las descargas pueden continuar en segundo plano; espera la notificación y sigue las indicaciones que aparezcan para completar la instalación.",
                    "Si una descarga o conexión falla, comprueba la conexión de red y consulta las notas oficiales de la versión y los requisitos TLS."
                ]
            },
            {
                title: "Elegir una versión con cuidado",

                description:
                    "No todos los releases tienen el mismo estado de estabilidad.",

                items: [
                    "Revisa las notas y el estado de cada release antes de instalarlo.",
                    "V1.46 está marcado como pre-release y su publicación advierte que no ha sido probado; considera esa advertencia antes de usarlo.",
                    "Si la aplicación no conecta, consulta la información oficial sobre iTLS-Enso y vita_tls_fixer; no instales componentes adicionales sin comprobar compatibilidad."
                ]
            }
        ]
    },

    website: "https://github.com/Ibrahim778/BetterHomebrewBrowser",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Ibrahim778/BetterHomebrewBrowser/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/KZRT1I7J#Oly8-CXb3kyAVxzwv4XHmA"
        }
    ]
},

// MediaF Downloader
{
    console: "PS Vita",

    name: "MediaF Downloader",

    image: "img/PSVita/MediaFDown.jpg",

    description:
        "Aplicación homebrew para descargar en PS Vita archivos disponibles mediante un enlace de MediaFire.",

    guide: {

        function:
            "MediaF Downloader solicita la URL de un archivo y permite descargarlo desde MediaFire a la consola.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y conexión a Internet. La descarga depende de que MediaFire y el enlace sigan funcionando."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell para transferir e instalar MFDownloader.vpk.",
            "Conexión a Internet y una URL válida de MediaFire para un archivo autorizado."
        ],

        installation: [
            "Descarga MFDownloader.vpk desde el Mirror MEGA y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja MediaF Downloader."
        ],

        usage:
            "Introduce la URL de MediaFire del archivo que tienes derecho a descargar y sigue las indicaciones que muestra la aplicación.",

        notes:
            "No descargues ni compartas software, juegos, videos u otros archivos protegidos por derechos de autor sin autorización. El enlace de descarga es un mirror incluido en el tutorial y no se encontró un repositorio o sitio oficial del proyecto.",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK transferido a la consola con VitaShell.",

                items: [
                    "Descarga MFDownloader.vpk desde el Mirror MEGA.",
                    "Abre VitaShell y conecta la consola a la computadora por USB o FTP.",
                    "Copia el VPK a la consola, selecciónalo en VitaShell y confirma la instalación.",
                    "Sal de VitaShell y abre MediaF Downloader desde LiveArea."
                ]
            },
            {
                title: "Descargar un archivo autorizado",

                description:
                    "La aplicación solicita un enlace de MediaFire para iniciar la descarga.",

                items: [
                    "Abre MediaF Downloader y proporciona la URL del archivo de MediaFire.",
                    "Comprueba que el enlace corresponda al archivo esperado y que tengas permiso para descargarlo.",
                    "Sigue el estado y las indicaciones que muestre la aplicación.",
                    "Si el enlace no funciona, puede haber expirado o el servicio puede haber cambiado; no uses mirrors desconocidos como sustituto."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/2Bw1wRAS#L2Isomry6495ZzRPNAoyjg"
        }
    ]
},

// PKGj
{
    console: "PS Vita",

    name: "PKGj Para PS Vita",

    image: "img/PSVita/PKGJ.jpg",

    description:
        "Este homebrew permite descargar y descomprimir archivos pkg directamente en Vita junto con su licencia falsa NoNpDrm o NoPsmDrm.",

    guide: {

        function:
            "PKGj es una aplicación homebrew que consulta catálogos de paquetes y puede instalarlos directamente en PS Vita. Esta tarjeta ofrece información general, no instrucciones para obtener contenido.",

        compatibility: {
            "PS Vita / PS TV": "Aplicación homebrew para consolas con un entorno modificado. No se incluyen pasos de instalación ni configuración."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible para instalar el VPK.",
            "Conexión a Internet para transmisiones en línea, o videos compatibles guardados localmente."
        ],

        installation: [
            "Descarga el VPK de pkgj desde GitHub Releases y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala el VPK desde VitaShell y abre la burbuja pkgj en el menú principal."
        ],

        usage:
            "nos permite descargar e instalar paquetes que incluyen juegos,DLC y otros contenidos comerciales.",

        notes:
            "PKGj puede utilizarse para descargar e instalar paquetes que incluyen juegos y otros contenidos comerciales. No descargues ni instales contenido protegido sin autorización ni uses licencias falsas para eludir controles de acceso. Obtén contenido únicamente de fuentes autorizadas y con una licencia válida. Esta ficha no contiene enlaces de descarga.",

        version: "v0.57",

        author: "blastrock",

        details: [
            {
                title: "Instalación inicial",

                description:
                    "Abrimos pkgj para ver sus funciones y cómo usarla.",

                items: [
                    "Tendremos la lista de todos los juegos disponible y podremos filtrar con triangulo para seleccionar algunos de la lista.",
                    "Si seleccionamos alguno de la lista nos muestra la información y una caratula del juego.",
                    "Si nos sale la imagen del juego seleccionado tendemos que instalar un paquete.",
                    "Para esto descargamos el archivo pkgj.rar de la última versión",
                    "Y lo pasamos a la consola en ux0: dentro tiene que estar pkgj una vez listo nos mostrar las imágenes de cada juego de la lista",
                    "Solo nos queda dar en descargar con la equiz No Disponible para empezar",
                    "Y nos descargara el juego en el aria de notificación de la consola"
                ]
            },
        ]
    },

    website: "https://github.com/blastrock/pkgj",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/blastrock/pkgj/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/fNJxWDgY#XC8RxIMysruTlHQ4u_gzAw"
        }
    ]
},

// CTManager
{
    console: "PS Vita",

    name: "CTManager",

    image: "img/PSVita/CTManager.jpg",

    description:
        "Administrador de temas personalizados para PS Vita que permite descargar y aplicar temas directamente desde la consola.",

    guide: {

        function:
            "CTManager permite descargar temas personalizados, administrarlos desde la consola y aplicar un tema instalado al sistema.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y una versión de CTManager compatible con el firmware de la consola."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible para transferir e instalar CTManager.vpk.",
            "Conexión a Internet para descargar temas desde la aplicación.",
            "Espacio disponible para los archivos de los temas."
        ],

        installation: [
            "Descarga CTManager desde el Mirror MEGA y transfiérelo a la consola por USB o FTP con VitaShell.",
            "Instala CTManager.vpk desde VitaShell y abre su nueva burbuja en LiveArea."
        ],

        usage:
            "Abre CTManager, selecciona Download and install a new theme para descargar uno disponible y usa Apply an installed theme para activarlo.",

        notes:
            "Usa temas de fuentes confiables y verifica que sean compatibles con tu firmware y modelo. Conserva una copia de seguridad de los datos importantes antes de aplicar cambios visuales al sistema.",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK de CTManager con VitaShell.",

                items: [
                    "Descarga CTManager y transfiere el archivo VPK a la consola mediante USB o FTP.",
                    "En VitaShell, localiza el VPK, selecciónalo y confirma la instalación.",
                    "Sal de VitaShell y busca la nueva burbuja CTManager en LiveArea."
                ]
            },
            {
                title: "Descargar y aplicar temas",

                description:
                    "CTManager permite descargar temas desde la aplicación y activarlos después.",

                items: [
                    "Abre CTManager y selecciona Download and install a new...",
                    "Elige el tema que quieras descargar y confirma la selección.",
                    "Espera a que termine la descarga e instalación del tema.",
                    "Pulsa Start cuando la aplicación lo solicite para terminar el proceso.",
                    "Después, entra en Apply an installed theme.",
                    "Selecciona el tema recién instalado y confírmalo para aplicarlo."
                ]
            },
            {
                title: "Recomendaciones",

                description:
                    "Comprueba la procedencia y compatibilidad de los temas antes de instalarlos.",

                items: [
                    "Usa temas creados para PS Vita y evita archivos procedentes de fuentes desconocidas.",
                    "No borres ni reemplaces archivos del sistema manualmente; utiliza las funciones de CTManager.",
                    "Si una apariencia personalizada causa problemas, vuelve a la opción de CTManager para restaurar o cambiar el tema."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/fURnERqQ#WsKj1UMBei4tGab-U9FRnw"
        }
    ]
},

// VitaShell Fork
{
    console: "PS Vita",

    name: "VitaShell Fork: PSP y PSM en LiveArea",

    image: "img/PSVita/VitaShellfork.jpg",

    description:
        "Fork de VitaShell que amplía Refresh LiveArea para mostrar aplicaciones compatibles de PSP y PSM sin abrir Adrenaline.",

    guide: {

        function:
            "Este fork conserva las funciones de VitaShell y añade soporte para refrescar la pantalla LiveArea con aplicaciones PSP y PSM disponibles en la consola.",

        compatibility: {
            "PS Vita / PS TV": "Requiere un entorno HENkaku/CFW compatible. El soporte de PSP y PSM depende de los archivos instalados y de la compatibilidad de cada aplicación."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell Fork compatible con el firmware de la consola.",
            "VitaShell u otro instalador de VPK.",
            "Contenido de PSP o PSM que tengas derecho a usar."
        ],

        installation: [
            "Descarga la versión de VitaShell Fork de GitHub Releases o el Mirror MEGA y transfiérela a la consola.",
            "Instala el VPK con VitaShell u otro gestor compatible y abre la nueva burbuja VitaShell.",
            "Para mostrar PSP o PSM en LiveArea, pulsa Triángulo y selecciona Refresh LiveArea."
        ],

        usage:
            "Abre VitaShell Fork y pulsa Triángulo para usar Refresh LiveArea. Las aplicaciones compatibles PSP o PSM instaladas aparecerán como burbujas en LiveArea.",

        notes:
            "El fork no convierte automáticamente juegos comerciales ni elimina DRM. No instales plugins destinados a eludir protecciones o usar contenido sin licencia. Utiliza respaldos personales, homebrew autorizado y aplicaciones adquiridas legalmente.",

        version: "v2.02.1",

        author: "LiEnby",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el fork como un VPK de VitaShell.",

                items: [
                    "Descarga una versión compatible desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere el VPK a la consola por USB o FTP.",
                    "Instálalo con VitaShell u otro gestor compatible.",
                    "Abre la burbuja VitaShell Fork en LiveArea."
                ]
            },
            {
                title: "Crear entradas de LiveArea",

                description:
                    "Refresh LiveArea permite volver a detectar aplicaciones PSP y PSM instaladas.",

                items: [
                    "Abre VitaShell Fork.",
                    "Pulsa Triángulo para abrir el menú de acciones.",
                    "Selecciona Refresh LiveArea.",
                    "Espera a que termine el escaneo y vuelve a LiveArea.",
                    "Las aplicaciones detectadas pueden aparecer como burbujas individuales."
                ]
            },
            {
                title: "Contenido y compatibilidad",

                description:
                    "Cada aplicación necesita estar instalada correctamente y ser compatible con el modelo y el entorno de la consola.",

                items: [
                    "Usa solo homebrew, backups personales o juegos adquiridos legalmente.",
                    "No eludas DRM ni utilices licencias falsas.",
                    "Después de aplicar cambios o plugins, reinicia solo si las instrucciones oficiales lo indican.",
                    "Si una aplicación no aparece, comprueba sus archivos, permisos y compatibilidad antes de repetir el refresco."
                ]
            }
        ]
    },

    website: "https://github.com/LiEnby/VitaShell",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/LiEnby/VitaShell/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/bNgwiBiK#u2EqA4ydDL5vwCMT6_kU6w"
        }
    ]
},

// HexFlow Launcher
{
    console: "PS Vita",

    name: "HexFlow Launcher",

    image: "img/PSVita/HexFlowLauncher.jpg",

    description:
        "Lanzador visual 3D para PS Vita que organiza y ejecuta juegos y homebrew con portadas, fondos y vistas personalizables.",

    guide: {

        function:
            "HexFlow Launcher muestra la biblioteca instalada con una interfaz tipo cover flow 3D y permite iniciar aplicaciones, juegos y homebrew compatibles.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y aplicaciones instaladas. Puede mostrar PSP y PS1 a través de burbujas compatibles.",
            "PS TV": "El proyecto está orientado a PS Vita, pero puede mostrar aplicaciones compatibles disponibles en PS TV."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell u otro instalador compatible para transferir e instalar el VPK.",
            "Contenido instalado que quieras organizar y derecho a usar."
        ],

        installation: [
            "Descarga la última versión desde GitHub Releases o el Mirror MEGA y transfiérela a la consola.",
            "Instala el VPK con VitaShell y abre la nueva burbuja HexFlow Launcher."
        ],

        usage:
            "Navega con el D-pad, el stick izquierdo o la pantalla táctil y pulsa X para iniciar el juego o la aplicación seleccionada.",

        notes:
            "Al iniciar una aplicación desde HexFlow Launcher, el lanzador se cerrará automáticamente. Para PSP o PS1 creadas desde Adrenaline Bubbles Manager, configura BubbleID como TitleID según las instrucciones oficiales. Las subcarpetas y ciertos plugins de categorías PSP no son compatibles.",

        version: "0.5",

        author: "VitaHEX-Games",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK con VitaShell y abre el lanzador desde LiveArea.",

                items: [
                    "Descarga el archivo VPK de la última versión desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere el VPK por USB o FTP con VitaShell.",
                    "Instala el archivo en la consola y regresa a LiveArea.",
                    "Abre HexFlow Launcher desde su burbuja."
                ]
            },
            {
                title: "Controles principales",

                description:
                    "HexFlow ofrece navegación táctil y por botones.",

                items: [
                    "D-pad o stick izquierdo: navegar por la biblioteca.",
                    "Pantalla táctil: seleccionar y navegar.",
                    "L/R: avanzar o retroceder cinco elementos.",
                    "X: iniciar el juego o la aplicación seleccionada.",
                    "Cuadrado: cambiar de categoría.",
                    "Triángulo: abrir los detalles del juego.",
                    "Círculo: cambiar la vista o cancelar.",
                    "Start: abrir el menú de ajustes."
                ]
            },
            {
                title: "Portadas y fondos personalizados",

                description:
                    "El lanzador permite personalizar portadas, fondos y música.",

                items: [
                    "Coloca portadas PNG personalizadas en ux0:data/HexFlow/COVERS/PSVITA/.",
                    "El nombre del archivo debe coincidir con el App ID o el nombre de la aplicación; se recomienda una resolución de 256x256 px.",
                    "Coloca una imagen personalizada como ux0:data/HexFlow/Background.png o ux0:data/HexFlow/Background.jpg.",
                    "Coloca una canción como ux0:data/HexFlow/Music.mp3 y activa Sounds en los ajustes.",
                    "Desde el menú Start también puedes descargar covers o revisar opciones de categorías y vistas."
                ]
            },
            {
                title: "Compatibilidad con PSP y PS1",

                description:
                    "Los elementos PSP y PS1 requieren burbujas o instalaciones compatibles.",

                items: [
                    "Para burbujas PSP o PS1 creadas con Adrenaline Bubbles Manager, configura BubbleID como TitleID en ABM.",
                    "Para PSX2PSP, el nombre de la carpeta debe coincidir con el GameID.",
                    "HexFlow no admite subcarpetas ni plugins de categorías PSP.",
                    "Comprueba la instalación y compatibilidad de cada contenido antes de crear una entrada."
                ]
            }
        ]
    },

    website: "https://github.com/VitaHEX-Games/HexFlow-Launcher",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/VitaHEX-Games/HexFlow-Launcher/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/uVR0Vb4R#PurcflUB7AJs_0Mt3SqEqQ"
        }
    ]
},

// RetroFlow Launcher
{
    console: "PS Vita",

    name: "RetroFlow Launcher",

    image: "img/PSVita/RetroFlowLauncher.jpg",

    description:
        "Lanzador coverflow 3D ampliado para organizar juegos de PS Vita, PSP, PS1 y numerosos sistemas retro sin crear una burbuja para cada ROM.",

    guide: {

        function:
            "RetroFlow reúne juegos y aplicaciones retro en categorías dentro de una interfaz 3D. Permite usar colecciones, favoritos, historial, búsqueda y portadas personalizadas.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y los emuladores o aplicaciones necesarias para cada sistema.",
            "PS Vita / PS TV": "El proyecto admite consolas compatibles según el emulador utilizado."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell u otro instalador compatible para el VPK.",
            "Adrenaline v7 o v8.0.2 para PSP/PS1, según la configuración soportada.",
            "RetroArch, DaedalusX64, Flycast u otros emuladores según los sistemas que quieras usar.",
            "ROMs o respaldos que tengas derecho a utilizar."
        ],

        installation: [
            "Descarga la última versión de RetroFlow desde GitHub Releases o el Mirror MEGA e instálala con VitaShell.",
            "Instala los emuladores necesarios para cada sistema, copia las ROMs autorizadas y abre RetroFlow.",
            "Selecciona Rescan desde Scan Settings para detectar los juegos y descargar sus portadas."
        ],

        usage:
            "Navega con el D-pad, el stick izquierdo o el táctil, cambia de categoría con Cuadrado y pulsa X para iniciar el juego seleccionado.",

        notes:
            "RetroFlow no proporciona ROMs ni juegos comerciales. Usa respaldos propios o contenido distribuido legalmente. Comprueba los requisitos específicos de cada emulador y evita versiones no soportadas; la documentación oficial recomienda aplicar el procedimiento de configuración completo.",

        version: "8.5.0",

        author: "jimbob4000",

        details: [
            {
                title: "Instalación rápida",

                description:
                    "Instala RetroFlow y los emuladores necesarios antes de escanear la biblioteca.",

                items: [
                    "Descarga RetroFlow desde GitHub Releases o el Mirror MEGA y transfiere el VPK a la consola.",
                    "Instálalo con VitaShell y abre la burbuja RetroFlow.",
                    "Instala Adrenaline, RetroArch o el emulador requerido por el sistema que quieras ejecutar.",
                    "Añade las ROMs o juegos compatibles a las carpetas predeterminadas o configura directorios propios.",
                    "Abre RetroFlow, pulsa Start y entra en Scan Settings para elegir la ubicación y ejecutar Rescan."
                ]
            },
            {
                title: "Sistemas compatibles",

                description:
                    "RetroFlow puede organizar varias categorías nativas y emuladas.",

                items: [
                    "Sony: PS Vita, PSP, PlayStation y PlayStation Mobile.",
                    "Nintendo: N64, 3DS, DS, SNES, NES, Game Boy, Game Boy Color y Game Boy Advance.",
                    "Sega: Dreamcast, Mega Drive/Genesis, Sega CD, 32X, Master System y Game Gear.",
                    "Otras categorías: PC Engine, Neo Geo, Atari, Amiga, WonderSwan, MS-DOS, arcade, MSX, ZX Spectrum, ColecoVision, Vectrex, ScummVM y PICO-8.",
                    "La disponibilidad real depende de tener el emulador compatible instalado y de que el juego funcione en él."
                ]
            },
            {
                title: "Controles principales",

                description:
                    "Los controles permiten navegar, buscar y personalizar la biblioteca.",

                items: [
                    "D-pad o stick izquierdo: navegar por juegos y menús.",
                    "Pantalla táctil: navegación alternativa.",
                    "L/R: avanzar o retroceder cinco elementos.",
                    "X: seleccionar e iniciar.",
                    "Cuadrado: cambiar de categoría.",
                    "Triángulo: detalles, opciones o información.",
                    "Círculo: cambiar vista o cancelar.",
                    "Start: ajustes.",
                    "Select: buscar.",
                    "D-pad abajo + Cuadrado: volver una categoría.",
                    "D-pad abajo + L/R: avanzar por juegos alfabéticamente."
                ]
            },
            {
                title: "Agregar ROMs y escanear",

                description:
                    "RetroFlow ofrece carpetas predeterminadas y directorios personalizados.",

                items: [
                    "Copia tus juegos autorizados a ux0:data/RetroFlow/ROMS/.",
                    "Para directorios propios, usa Scan Settings > Edit game directories.",
                    "Los juegos PSP ISO/CSO deben estar en ux0:pspemu/ISO/ y los PSP/PS1 con EBOOT en ux0:pspemu/PSP/GAME/.",
                    "Selecciona Rescan después de añadir o mover juegos.",
                    "Usa nombres compatibles y reconoce formatos específicos de cada sistema.",
                    "No se recomienda usar respaldos protegidos o descargados sin permiso."
                ]
            },
            {
                title: "Personalización",

                description:
                    "Puedes añadir portadas, fondos y música propios.",

                items: [
                    "Las portadas PNG personalizadas se pueden guardar en ux0:data/RetroFlow/COVERS/.",
                    "Los fondos PNG personalizados se pueden guardar en ux0:data/RetroFlow/BACKGROUNDS/.",
                    "La música debe estar en formato OGG dentro de ux0:data/RetroFlow/MUSIC/.",
                    "Los wallpapers JPG/PNG pueden guardarse en ux0:data/RetroFlow/WALLPAPER/.",
                    "Después de añadir portadas o fondos personalizados, ejecuta Rescan."
                ]
            }
        ]
    },

    website: "https://github.com/jimbob4000/RetroFlow-Launcher",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/jimbob4000/RetroFlow-Launcher/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/PAwWGSaK#FtnpPz-xmYmw0KAu2gmwzA"
        }
    ]
},

// Moonlight
{
    console: "PS Vita",

    name: "Moonlight",

    image: "img/PSVita/Moonlight.jpg",

    description:
        "Cliente de transmisión de escritorio y juegos desde una PC compatible hacia PS Vita mediante el protocolo Moonlight.",

    guide: {

        function:
            "Moonlight recibe el escritorio o las aplicaciones disponibles en una PC emisora y las muestra en PS Vita por una red local.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y una versión compatible del VPK.",
            "PC": "El PC necesita Sunshine u otro host compatible con Moonlight y una conexión estable por LAN."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Un PC con Sunshine instalado y configurado.",
            "Ambos dispositivos en la misma red local o una ruta de red que permita el emparejamiento.",
            "Batería cargada y una conexión por Wi-Fi o Ethernet estable."
        ],

        installation: [
            "Instala moonlight.vpk en la PS Vita mediante VitaShell.",
            "Instala Sunshine en el PC y abre su interfaz web local.",
            "Registra la PS Vita desde Moonlight mediante el PIN mostrado durante el emparejamiento."
        ],

        usage:
            "Abre Moonlight, selecciona el PC configurado y elige una aplicación disponible, como Desktop o Steam Big Picture.",

        notes:
            "Moonlight transmite la pantalla y las entradas; no incluye juegos ni servidores del host. Usa una red privada de confianza y abre únicamente aplicaciones que tengas derecho a ejecutar.",

        version: "1.0.0",

        author: "xyzz / Moonlight",

        details: [
            {
                title: "Instalación en PS Vita",

                description:
                    "Instala el cliente Moonlight desde su VPK.",

                items: [
                    "Descarga moonlight.vpk desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere el archivo a la consola por USB o FTP con VitaShell.",
                    "Instala el VPK y abre Moonlight desde LiveArea."
                ]
            },
            {
                title: "Configurar Sunshine en el PC",

                description:
                    "Sunshine actúa como servidor de transmisión en el computador.",

                items: [
                    "Descarga e instala Sunshine desde su repositorio oficial.",
                    "Abre su interfaz web local y crea una contraseña si es la primera configuración.",
                    "Configura el nombre mostrado por el servidor y guarda los ajustes.",
                    "Mantén el PC encendido y en la misma red que la PS Vita."
                ]
            },
            {
                title: "Agregar y emparejar el PC",

                description:
                    "El cliente obtiene un PIN que debe aprobarse en Sunshine.",

                items: [
                    "En Moonlight, usa Add manually...",
                    "Introduce el nombre de host y la dirección IPv4 del PC.",
                    "Confirma el PIN mostrado en la PS Vita desde la interfaz de Sunshine.",
                    "Después vuelve a Moonlight y abre el equipo registrado."
                ]
            },
            {
                title: "Transmitir aplicaciones",

                description:
                    "Una vez emparejado, Moonlight puede mostrar el escritorio o iniciar aplicaciones configuradas.",

                items: [
                    "Selecciona Desktop para controlar el escritorio del PC.",
                    "Prueba primero el panel táctil y los controles para confirmar su funcionamiento.",
                    "Desde el host puedes iniciar Steam Big Picture u otras aplicaciones compatibles.",
                    "Para mejorar la estabilidad, usa una red local estable y una resolución adecuada para PS Vita."
                ]
            }
        ]
    },

    website: "https://github.com/xyzz/vita-moonlight",

    downloads: [
        {
            name: "GitHub Releases - Moonlight",
            url: "https://github.com/xyzz/vita-moonlight/releases"
        },
        {
            name: "GitHub Releases - Sunshine",
            url: "https://github.com/SunshineStream/Sunshine/releases"
        },
        {
            name: "Mirror MEGA - Moonlight",
            url: "https://mega.nz/folder/2QpkRD5L#AyXBoA6jmRWwcZO3vpIEMg"
        },
        {
            name: "Mirror MEGA - Sunshine",
            url: "https://mega.nz/folder/XdIAmKrR#ZUNdPTFNCpZnSvB8P98-Jg"
        }
    ]
},

// Moonlight AMD
{
    console: "PS Vita",

    name: "Moonlight AMD",

    image: "img/PSVita/MoonlightAMD.jpg",

    description:
        "Variante de transmisión para PS Vita mediante Openstream, orientada a PCs antiguos o AMD que pueden usar codificación H.264 por CPU.",

    guide: {

        function:
            "Moonlight AMD usa moonlight.vpk en PS Vita y Openstream en el PC para transmitir el escritorio mediante el codificador H.264 disponible en CPU.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y moonlight.vpk.",
            "PC": "La instalación está orientada a equipos antiguos o sin la aceleración compatible con el método habitual. Openstream debe estar instalado en el host."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Un PC con Openstream y el método H.264 CPU Encoder disponible.",
            "Ambos dispositivos conectados a una red local estable."
        ],

        installation: [
            "Instala moonlight.vpk en la PS Vita.",
            "Instala Openstream en el PC y selecciona h.264 CPU Encoder.",
            "Obtén el nombre de host y la dirección IPv4 del PC.",
            "Empareja el PC con Moonlight desde Add manually..."
        ],

        usage:
            "Abre Moonlight, selecciona el PC configurado y elige Desktop para controlar el sistema del host.",

        notes:
            "Openstream es un método antiguo específico del tutorial y no se encontró un repositorio oficial verificable. El codificador por CPU puede tener más carga y menor calidad que una GPU dedicada. Usa el enlace oficial del proyecto solo si sigue disponible.",

        details: [
            {
                title: "Preparar el PC",

                description:
                    "Configura Openstream antes de emparejarlo con Moonlight.",

                items: [
                    "Instala la versión disponible de Openstream en el PC.",
                    "Abre Configure y selecciona h.264 CPU Encoder.",
                    "Pulsa Go Back y devuelve el servidor a su estado inicial.",
                    "Obtén el nombre de host y la IPv4 mediante ipconfig/all.",
                    "Inicia Openstream y mantenlo activo mientras se transmite."
                ]
            },
            {
                title: "Agregar el PC en Moonlight",

                description:
                    "Usa el nombre de host y la IPv4 para configurar el servidor manualmente.",

                items: [
                    "Abre Moonlight y selecciona Add manually...",
                    "Introduce el nombre de host del PC.",
                    "Introduce su dirección IPv4.",
                    "Usa el PIN que muestre Moonlight si Openstream lo solicita.",
                    "Selecciona el PC recién agregado y elige Desktop."
                ]
            },
            {
                title: "Rendimiento y límites",

                description:
                    "La codificación por CPU puede variar mucho según el equipo y la red.",

                items: [
                    "La transmisión puede requerir ajustes de resolución y tasa de bits para evitar interrupciones.",
                    "Los equipos antiguos pueden funcionar mejor con una red por cable o una Wi-Fi estable.",
                    "No garantices compatibilidad con todos los juegos o aplicaciones del PC.",
                    "No descargues reemplazos de Openstream de sitios desconocidos."
                ]
            }
        ]
    },

    website: "https://www.reddit.com/r/vitahacks/comments/lclpbq/amdmoonshellopenstream_stream_pc_games_to_psvita/",

    downloads: [
        {
            name: "Openstream - Mirror MEGA",
            url: "https://mega.nz/folder/WRARhLzA#43JevSMaCgvb1cL9xmABrA"
        }
    ]
},

// SimpleVPK
{
    console: "PS Vita",

    name: "SimpleVPK",

    image: "img/PSVita/simpleVPK.jpg",

    description:
        "Aplicación homebrew basada en easyVPK para buscar, descargar e instalar VPK y archivos de datos disponibles en VitaDB.",

    guide: {

        function:
            "SimpleVPK permite consultar VitaDB desde la consola y descargar e instalar VPK o archivos de datos sin depender de una computadora.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y conexión a Internet.",
            "PS TV": "Puede funcionar si la versión y los datos son compatibles con el modelo."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Conexión a Internet.",
            "Espacio libre suficiente para los VPK y archivos de datos."
        ],

        installation: [
            "Descarga la versión 1.5 desde GitHub Releases o el Mirror MEGA y transfiérela por USB o FTP.",
            "Instala simpleVPK.vpk desde VitaShell y abre la nueva burbuja."
        ],

        usage:
            "Abre SimpleVPK, busca o selecciona una entrada de VitaDB y elige descargar el VPK o los archivos de datos disponibles.",

        notes:
            "SimpleVPK descarga contenido publicado en VitaDB; verifica el autor, la licencia y los requisitos antes de instalar. La versión 1.5 señala que algunos archivos RAR o 7Z pueden no extraerse por incompatibilidad.",

        version: "1.5",

        author: "NFSHubster",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala SimpleVPK como una aplicación homebrew normal.",

                items: [
                    "Descarga el VPK de la versión 1.5 desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere el archivo a la consola por USB o FTP.",
                    "Instálalo desde VitaShell y abre SimpleVPK desde LiveArea."
                ]
            },
            {
                title: "Descargar VPK y archivos de datos",

                description:
                    "SimpleVPK conecta con VitaDB para ofrecer entradas disponibles.",

                items: [
                    "Abre SimpleVPK y navega por la lista o usa la búsqueda disponible.",
                    "Selecciona una aplicación y revisa su descripción y requisitos.",
                    "Descarga únicamente VPK o archivos de datos que tengas derecho a usar.",
                    "Espera a que termine la descarga antes de salir de la aplicación.",
                    "Instala los VPK y usa los archivos de datos según las instrucciones de la aplicación correspondiente."
                ]
            },
            {
                title: "Compatibilidad de archivos",

                description:
                    "Algunos formatos comprimidos pueden no extraerse correctamente.",

                items: [
                    "La versión 1.5 añade navegación con joystick y compatibilidad con capturas.",
                    "Algunos archivos RAR o 7Z pueden no extraerse después de descargar.",
                    "Si un archivo no aparece o no se extrae, verifica su formato y consulta una actualización o alternativa compatible.",
                    "No extraigas ni copies archivos procedentes de fuentes desconocidas."
                ]
            }
        ]
    },

    website: "https://github.com/NFSHubster/SimpleVPK",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/NFSHubster/SimpleVPK/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/ichhmbrb#uMZoBsp0A_KjyHw_7e7fxA"
        }
    ]
},

// Capcom Play System 3
{
    console: "PS Vita",

    name: "Capcom Play System 3 (CPS3)",

    image: "img/PSVita/CapcomPlaySystem3.jpg",

    description:
        "Emulador especial de FinalBurn Neo preparado para ejecutar juegos CPS3 a velocidad completa en PS Vita.",

    guide: {

        function:
            "Este frontend ejecuta juegos de la placa arcade Capcom CPS3 desde archivos compatibles de ROM, con optimizaciones para el procesador SH-2 y pantalla panorámica.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y el paquete CPS3 de FinalBurn Neo para Vita.",
            "Formato": "El proyecto actual usa una compilación basada en RetroArch y puede requerir que los archivos de ROM y BIOS estén organizados según el paquete."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Espacio libre para el emulador y los archivos de ROM.",
            "ROMs y BIOS que tengas derecho a usar."
        ],

        installation: [
            "Descarga la compilación de CPS3 desde GitHub Releases o el Mirror MEGA y transfiérela a la consola.",
            "Extrae el paquete como indique su README y copia la carpeta app a la raíz ux0:",
            "Abre el emulador desde LiveArea, coloca las ROMs autorizadas en la carpeta indicada y inicia el juego compatible."
        ],

        usage:
            "Busca el juego CPS3 compatible en el menú del emulador y selecciónalo. El build actual puede usar una versión incluida de RetroArch y ajustes de pantalla compatibles.",

        notes:
            "El release oficial listado actualmente es v1.22.2-cps3.1-rc1 y está marcado como release candidate. Haz una copia de seguridad antes de modificar archivos y usa únicamente ROMs, BIOS y datos obtenidos legalmente.",

        version: "v1.22.2-cps3.1-rc1",

        author: "frangarcj / FBNeo",

        details: [
            {
                title: "Instalación actual",

                description:
                    "La compilación actual está basada en RetroArch y distribuye una carpeta app.",

                items: [
                    "Descarga el paquete desde GitHub Releases o el Mirror MEGA.",
                    "Lee el README.txt incluido antes de copiar archivos.",
                    "Extrae el paquete y copia la carpeta app a la raíz ux0:, sin mezclar archivos de otra versión.",
                    "Abre la aplicación CPS3 desde LiveArea."
                ]
            },
            {
                title: "Agregar ROMs compatibles",

                description:
                    "Las ROMs deben coincidir con los archivos reconocidos por FBNeo CPS3.",

                items: [
                    "Coloca las ROMs autorizadas en la ubicación indicada por el README del paquete.",
                    "No renombres ni modifiques los datos sin saber qué archivos exige el juego.",
                    "Comprueba que el juego corresponde a una placa CPS3 compatible.",
                    "Usa únicamente BIOS y ROMs que poseas o que estén disponibles legalmente."
                ]
            },
            {
                title: "Estado de la compilación",

                description:
                    "El build CPS3 actual incorpora optimizaciones SH-2 y pantalla panorámica.",

                items: [
                    "El proyecto indica ejecución a velocidad completa de CPS3 en PS Vita.",
                    "La versión publicada está marcada como release candidate.",
                    "Si un juego no aparece o no inicia, confirma el nombre de los archivos, la ruta y la compatibilidad.",
                    "Consulta una versión estable o actualizada antes de reemplazar una instalación que ya funciona."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/WVZHmAJa#_9k9sLKxlUpOHj57xtyH5A"
        }
    ]
},

// Flycast - Dreamcast
{
    console: "PS Vita",

    name: "Flycast (Dreamcast)",

    image: "img/PSVita/DREAMCAST.jpg",

    description:
        "Emulador de Sega Dreamcast y sistemas arcade compatibles para PS Vita y PS TV.",

    guide: {

        function:
            "Flycast permite ejecutar juegos de Sega Dreamcast, Naomi, Naomi 2 y Atomiswave desde archivos compatibles almacenados en la consola.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW, kubridge y una versión compatible de Flycast.",
            "PS TV": "Puede funcionar según el modelo, la configuración de almacenamiento y la compatibilidad del juego."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "kubridge en la versión compatible indicada por Flycast.",
            "BIOS y juegos obtenidos legalmente.",
            "Espacio libre suficiente para el emulador y las imágenes de juego."
        ],

        installation: [
            "Descarga Flycast desde GitHub Releases o el Mirror MEGA y transfiérelo a la consola.",
            "Instala flycast.vpk con VitaShell y asegúrate de instalar una versión compatible de kubridge.",
            "Coloca los datos y juegos compatibles en las rutas indicadas por el proyecto y abre Flycast."
        ],

        usage:
            "Abre Flycast, selecciona la opción de carga de juegos y elige una imagen compatible; configura los ajustes solo si son necesarios.",

        notes:
            "Flycast necesita kubridge y puede requerir archivos de sistema. No descargues BIOS o juegos comerciales sin autorización. La versión 1.1 desactiva las portadas por defecto; habilítalas solo si tienes pocas ROMs, ya que con muchas puede causar inestabilidad por memoria.",

        version: "1.1",

        author: "Rinnegatamante / flyinghead",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK y verifica que kubridge sea compatible con tu instalación.",

                items: [
                    "Descarga el paquete Flycast desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere flycast.vpk a la consola por USB o FTP.",
                    "Instala el VPK desde VitaShell.",
                    "Instala una versión compatible de kubridge y reinicia la consola si las instrucciones oficiales lo solicitan.",
                    "Abre Flycast desde LiveArea."
                ]
            },
            {
                title: "Datos y rutas",

                description:
                    "El proyecto organiza archivos de datos y juegos dentro de ux0:data/flycast.",

                items: [
                    "Coloca los datos del sistema obtenidos legalmente en ux0:data/flycast/data/.",
                    "Puedes guardar juegos compatibles en ux0:data/flycast/.",
                    "Consulta el README de la versión instalada si cambia una ruta o se requieren directorios adicionales.",
                    "No descargues BIOS ni ROMs protegidas sin autorización."
                ]
            },
            {
                title: "Cargar y configurar juegos",

                description:
                    "Flycast puede mostrar los juegos desde las rutas configuradas.",

                items: [
                    "Abre Flycast y espera a que cargue el navegador de archivos.",
                    "Busca una imagen compatible con el sistema y selecciónala.",
                    "Ajusta opciones de entrada o video solo si el juego no funciona correctamente.",
                    "La compatibilidad puede variar según el juego, la memoria disponible y la versión de Flycast.",
                    "Si el emulador se vuelve inestable, prueba con Fast GDRom Load desactivado o con menos contenido cargado."
                ]
            },
            {
                title: "Recomendaciones",

                description:
                    "La versión actual incluye mejoras y advertencias de rendimiento específicas.",

                items: [
                    "La versión 1.1 incorpora Fast GDRom Load, que puede acelerar la carga pero causar problemas en algunos juegos.",
                    "Las portadas están desactivadas por defecto; habilitarlas con una biblioteca grande puede causar inestabilidad por las limitaciones de memoria.",
                    "Haz una copia de seguridad de los datos importantes antes de actualizar Flycast o kubridge.",
                    "Usa solamente juegos y BIOS que tengas derecho a utilizar."
                ]
            }
        ]
    },

    website: "https://github.com/Rinnegatamante/flycast-vita",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Rinnegatamante/flycast-vita/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/zVQTUBqZ#OOrArgFkMoQ26s7-TTGOqA"
        }
    ]
},

// Emu4Vita++
{
    console: "PS Vita",

    name: "Emu4Vita++",

    image: "img/PSVita/Emu4Vita.jpg",

    description:
        "Frontend de PS Vita basado en núcleos Libretro que reúne emuladores de consolas, arcade y sistemas clásicos.",

    guide: {

        function:
            "Emu4Vita++ ofrece un navegador de ROMs y permite elegir entre varios núcleos Libretro para ejecutar sistemas compatibles.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y una versión compatible del VPK.",
            "PS TV": "La compatibilidad depende del núcleo, los controles y los datos disponibles."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs, BIOS y datos obtenidos legalmente.",
            "Espacio disponible para guardados, BIOS y portadas."
        ],

        installation: [
            "Descarga Emu4Vita++ v0.81 desde GitHub Releases o el Mirror MEGA.",
            "Transfiérelo por USB o FTP e instálalo con VitaShell.",
            "Abre Emu4Vita++, elige el núcleo y navega hasta tus ROMs autorizadas."
        ],

        usage:
            "Selecciona un núcleo desde el menú principal, navega por los archivos y inicia una ROM. Los núcleos pueden incluir ajustes propios dentro de sus opciones.",

        notes:
            "Algunos sistemas requieren BIOS en ux0:data/EMU4VITAPLUS/system/. Usa ROMs, BIOS y datos obtenidos legalmente. La compatibilidad y el rendimiento varían según el núcleo y el juego.",

        version: "0.81",

        author: "noword",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK desde VitaShell y abre el frontend desde LiveArea.",

                items: [
                    "Descarga el VPK de la versión 0.81 desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere el archivo por USB o FTP.",
                    "Instálalo desde VitaShell y abre Emu4Vita++.",
                    "Selecciona el núcleo que corresponda al sistema que quieras ejecutar."
                ]
            },
            {
                title: "Núcleos disponibles",

                description:
                    "El proyecto incluye varios núcleos Libretro organizados por sistema.",

                items: [
                    "Arcade: FinalBurn Lite, FBAlpha, FBNeo y núcleos MAME.",
                    "NES: FCEUmm y Nestopia.",
                    "SNES: Snes9x 2005, Snes9x, Supafaust y ChimeraSNES.",
                    "Mega Drive/Genesis: Genesis Plus GX, Genesis Plus GX Wide y PicoDrive.",
                    "Game Boy / GBA: Gambatte, gpSP, VBA Next y mGBA.",
                    "PS1: PCSX ReARMed.",
                    "PC Engine, Neo Geo Pocket, Wonderswan y otros núcleos Mednafen.",
                    "Atari, Amiga, ZX Spectrum, MSX, Commodore 64 y otros sistemas también están disponibles según la versión."
                ]
            },
            {
                title: "Rutas y archivos",

                description:
                    "Emu4Vita++ usa directorios separados para BIOS, guardados y otros datos.",

                items: [
                    "BIOS: ux0:data/EMU4VITAPLUS/system/.",
                    "Guardados: ux0:data/EMU4VITAPLUS/[núcleo]/savefiles/[ROM].",
                    "Cheats: archivos .cht junto a la ROM, en el directorio .cheats o dentro del directorio del núcleo.",
                    "Portadas: coloca una imagen JPG o PNG junto a la ROM dentro de un directorio .previews.",
                    "Puede leer listas LPL compatibles de RetroArch y mostrar sus nombres y miniaturas."
                ]
            },
            {
                title: "Controles básicos",

                description:
                    "El frontend permite navegar por archivos y regresar al menú.",

                items: [
                    "Círculo o X: entrar en una carpeta o iniciar una ROM.",
                    "Triángulo: buscar.",
                    "Cuadrado: pasar al siguiente archivo coincidente.",
                    "Select: abrir el menú de administración de archivos.",
                    "Start: agregar o quitar favoritos.",
                    "En el juego, el botón PS permite volver al menú principal o usar funciones rápidas según la configuración."
                ]
            }
        ]
    },

    website: "https://github.com/noword/Emu4VitaPlus",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/noword/Emu4VitaPlus/releases"
        },
        {
            name: "VitaDB",
            url: "https://www.rinnegatamante.eu/vitadb/#/info/1260"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/KZIGDJKK#f_3BsLAI8lxOl2ckqOEADg"
        }
    ]
},

// mGBA GBA y GBC
{
    console: "PS Vita",

    name: "mGBA: GBA, GBC y GB",

    image: "img/PSVita/GBAGBC.jpg",

    description:
        "Emulador de Game Boy, Game Boy Color y Game Boy Advance para PS Vita.",

    guide: {

        function:
            "mGBA permite navegar por la tarjeta de memoria, cargar ROMs compatibles y usar funciones como guardado rápido, reproducción y ajuste de video.",

        compatibility: {
            "Game Boy / GBC / GBA": "Soporta ROMs oficiales y homebrew compatibles.",
            "PS Vita": "Requiere una build de mGBA para PS Vita y un entorno HENkaku/CFW."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Una build de mGBA para PS Vita.",
            "ROMs que tengas derecho a usar.",
            "Espacio disponible para ROMs y guardados."
        ],

        installation: [
            "Descarga la build oficial de mGBA para PS Vita desde la página de descargas o el Mirror MEGA.",
            "Transfiere el VPK a la consola por USB o FTP.",
            "Instálalo desde VitaShell y abre la nueva burbuja mGBA."
        ],

        usage:
            "Abre mGBA, navega hasta la carpeta que contiene tus ROMs y selecciona el juego. Usa el menú de la aplicación para estados, ajustes y opciones compatibles.",

        notes:
            "La versión estable oficial publicada actualmente es mGBA 0.10.5. Organiza tus ROMs legalmente en carpetas separadas si quieres distinguir GB, GBC y GBA.",

        version: "0.10.5",

        author: "mGBA team",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala la build para PS Vita desde una fuente oficial o el mirror incluido en el tutorial.",

                items: [
                    "Descarga el paquete Vita desde https://mgba.io/downloads.html.",
                    "Transfiere el VPK a la PS Vita mediante VitaShell.",
                    "Instálalo y vuelve a LiveArea.",
                    "Abre mGBA desde su nueva burbuja."
                ]
            },
            {
                title: "Organizar ROMs",

                description:
                    "Las ROMs pueden guardarse en cualquier partición accesible y organizarse en carpetas.",

                items: [
                    "Crea carpetas separadas para GB, GBC y GBA si lo prefieres.",
                    "Copia tus ROMs personales o autorizadas a la carpeta elegida.",
                    "Abre mGBA y navega hasta esa carpeta.",
                    "Selecciona el archivo compatible para iniciar el juego.",
                    "Usa solo ROMs obtenidas legalmente."
                ]
            },
            {
                title: "Guardados y ajustes",

                description:
                    "mGBA ofrece guardados de juego y estados rápidos en el menú de la consola.",

                items: [
                    "Usa el menú de mGBA para ajustar video, entradas y guardados.",
                    "Realiza una copia de seguridad de las partidas antes de actualizar o reinstalar.",
                    "Si una ROM no inicia, verifica el formato y confirma que corresponde al sistema seleccionado.",
                    "No uses archivos procedentes de fuentes desconocidas."
                ]
            }
        ]
    },

    website: "https://mgba.io/",

    downloads: [
        {
            name: "Descargas oficiales",
            url: "https://mgba.io/downloads.html"
        },
        {
            name: "GitHub",
            url: "https://github.com/mgba-emu/mgba"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/mMQ1UAqB#3uJpXkeT0Ez-wzlQLi_cgA"
        }
    ]
},

// Genesis Plus GX
{
    console: "PS Vita",

    name: "Genesis Plus GX",

    image: "img/PSVita/MegaSegaMasterGear.jpg",

    description:
        "Emulador standalone de Sega Mega Drive/Genesis, Master System y Game Gear para PS Vita.",

    guide: {

        function:
            "Genesis Plus GX emula sistemas Sega de 8 y 16 bits y permite cargar ROMs compatibles desde la tarjeta de almacenamiento.",

        compatibility: {
            "Sega Mega Drive / Genesis": "Compatible con juegos en archivos ZIP o BIN según la versión.",
            "Master System / Game Gear": "Puede ejecutar software compatible reconocido por el emulador.",
            "Limitaciones": "La versión histórica de Henkaku no admite guardados rápidos ni Mega CD."
        },

        requirements: [
            "PS Vita con Henkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs personales o distribuidas legalmente.",
            "Espacio disponible para ROMs y guardados."
        ],

        installation: [
            "Descarga Genesis Plus GX desde GitHub Releases o el Mirror MEGA.",
            "Transfiere GenesisPlusGXVITA.vpk a la consola y instálalo con VitaShell.",
            "Abre la nueva burbuja y selecciona la ROM compatible desde el navegador."
        ],

        usage:
            "Navega hasta una ROM de Mega Drive/Genesis, Master System o Game Gear y selecciónala para iniciar el emulador.",

        notes:
            "La versión publicada para Vita está basada en 1.7.5 RC y la release histórica indica que Mega CD y los save states no funcionan. Usa únicamente ROMs que tengas derecho a utilizar.",

        version: "1.7.5-RC-Henkaku",

        author: "frangarcj / ekeeke",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK standalone desde VitaShell.",

                items: [
                    "Descarga una versión compatible desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere GenesisPlusGXVITA.vpk por USB o FTP.",
                    "Instálalo desde VitaShell y vuelve a LiveArea.",
                    "Abre Genesis Plus GX desde su burbuja."
                ]
            },
            {
                title: "Cargar ROMs",

                description:
                    "Los archivos se pueden organizar en carpetas dentro de la partición accesible.",

                items: [
                    "Copia ROMs autorizadas a ux0: o a otra partición que el emulador pueda explorar.",
                    "Selecciona la carpeta desde el navegador del emulador.",
                    "Abre una ROM compatible de Mega Drive/Genesis, Master System o Game Gear.",
                    "Usa solo archivos obtenidos legalmente."
                ]
            },
            {
                title: "Compatibilidad",

                description:
                    "La compilación de Vita tiene límites que conviene conocer.",

                items: [
                    "La release histórica indica compatibilidad con juegos Mega Drive/Genesis en ZIP y BIN.",
                    "Mega CD no está soportado en esa compilación.",
                    "Los save states no están disponibles.",
                    "Comprueba el formato y compatibilidad antes de reportar un problema."
                ]
            }
        ]
    },

    website: "https://github.com/frangarcj/Genesis-Plus-GX",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/frangarcj/Genesis-Plus-GX/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/aFogCILK#uNxnEaUiGVHOq54I7RDmqQ"
        }
    ]
},

// DaedalusX64
{
    console: "PS Vita",

    name: "DaedalusX64",

    image: "img/PSVita/N64.jpg",

    description:
        "Emulador de Nintendo 64 para PS Vita y PS TV desarrollado sobre Daedalus X64 y vitaGL.",

    guide: {

        function:
            "DaedalusX64 permite cargar ROMs de Nintendo 64, ajustar opciones de video y probar la compatibilidad de cada juego.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y una build compatible.",
            "Nintendo 64": "No todos los juegos funcionan igual; consulta la lista de compatibilidad oficial."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs personales o autorizadas.",
            "Espacio disponible para ROMs, guardados y texturas."
        ],

        installation: [
            "Descarga el VPK Nightly o una release desde GitHub.",
            "Transfiere DaedalusX64.vpk a la consola e instálalo con VitaShell.",
            "Abre DaedalusX64 y añade las ROMs autorizadas a su carpeta."
        ],

        usage:
            "Navega por la carpeta de ROMs, selecciona un juego y prueba su compatibilidad. Los ajustes pueden variar según el título.",

        notes:
            "DaedalusX64 no garantiza velocidad completa en todos los juegos de N64. Usa la lista oficial de compatibilidad y una ROM válida obtenida legalmente.",

        version: "Nightly",

        author: "Rinnegatamante",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el port de DaedalusX64 como VPK.",

                items: [
                    "Descarga la última Nightly o una versión disponible desde GitHub Releases.",
                    "Transfiere DaedalusX64.vpk por USB o FTP.",
                    "Instálalo desde VitaShell y abre la burbuja DaedalusX64.",
                    "Consulta la lista de compatibilidad antes de probar un juego específico."
                ]
            },
            {
                title: "Agregar ROMs",

                description:
                    "Las ROMs deben colocarse en el directorio esperado por DaedalusX64.",

                items: [
                    "Organiza los archivos autorizados dentro de ux0:data/DaedalusX64/ROMs/.",
                    "Abre el emulador y navega hasta esa carpeta.",
                    "Selecciona el juego compatible.",
                    "No uses ROMs protegidas o obtenidas sin permiso."
                ]
            },
            {
                title: "Compatibilidad y ajustes",

                description:
                    "El rendimiento de Nintendo 64 depende mucho del juego y de la configuración.",

                items: [
                    "Consulta la lista oficial de compatibilidad antes de ajustar el emulador.",
                    "Prueba primero las opciones predeterminadas.",
                    "Los filtros de video y las mejoras gráficas pueden aumentar la carga.",
                    "Los juegos más exigentes pueden presentar errores o no alcanzar velocidad completa.",
                    "Conserva una copia de los guardados antes de cambiar ajustes."
                ]
            }
        ]
    },

    website: "https://github.com/Rinnegatamante/DaedalusX64-vitaGL",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Rinnegatamante/DaedalusX64-vitaGL/releases"
        },
        {
            name: "Lista de compatibilidad",
            url: "https://www.rinnegatamante.eu/daedalusx64"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/uYRlAYRa#aknREOLtO38CIHhWQCah8A"
        }
    ]
},

// OpenBOR
{
    console: "PS Vita",

    name: "OpenBOR",

    image: "img/PSVita/OpenBOR.jpg",

    description:
        "Motor para beat'em ups, shooters y juegos 2D creados con OpenBOR, disponible para PS Vita.",

    guide: {

        function:
            "OpenBOR ejecuta módulos de juego en formato PAK y permite configurarlos con controles, video y opciones de pantalla.",

        compatibility: {
            "PS Vita / PS TV": "Requiere HENkaku/CFW y un VPK de la versión de Vita.",
            "Contenido": "Los archivos PAK deben ser compatibles con la versión 4704 del motor publicada para Vita."
        },

        requirements: [
            "PS Vita o PS TV con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Archivos PAK de módulos OpenBOR autorizados.",
            "Espacio disponible en ux0:data."
        ],

        installation: [
            "Descarga el VPK OpenBOR Vita v1.2 desde GitHub Releases.",
            "Instala el VPK con VitaShell y copia los módulos PAK autorizados a ux0:data/openbor/paks.",
            "Abre OpenBOR desde LiveArea y selecciona un módulo disponible."
        ],

        usage:
            "Inicia un PAK desde el navegador de OpenBOR. Pulsa Start durante el juego para abrir el menú y ajustar video.",

        notes:
            "Usa únicamente módulos PAK creados o distribuidos con permiso. El port de Vita usa el nombre de archivo PAK y la ruta ux0:data/openbor/paks; no mezcles módulos destinados a otra versión o plataforma.",

        version: "1.2",

        author: "rsn8887 / OpenBOR Team",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK Vita y prepara la carpeta de módulos.",

                items: [
                    "Descarga el VPK Vita v1.2 desde el proyecto oficial de rsn8887.",
                    "Transfiere el VPK por USB o FTP e instálalo con VitaShell.",
                    "Crea o verifica la carpeta ux0:data/openbor/paks.",
                    "Copia dentro los archivos PAK autorizados.",
                    "Abre OpenBOR desde LiveArea."
                ]
            },
            {
                title: "Iniciar módulos",

                description:
                    "OpenBOR muestra los módulos PAK disponibles en su carpeta.",

                items: [
                    "Abre OpenBOR y selecciona un módulo PAK de la lista.",
                    "El módulo puede tardar al iniciar si necesita cargar muchos recursos.",
                    "Mantén una copia del PAK original antes de modificar opciones.",
                    "Usa solo módulos gratuitos, oficiales o distribuidos con permiso."
                ]
            },
            {
                title: "Calidad de imagen",

                description:
                    "Durante el juego puedes ajustar el filtrado y el tipo de pantalla.",

                items: [
                    "Pulsa Start para abrir el menú.",
                    "Entra en Video Options.",
                    "Selecciona Filtering: linear para mejorar la calidad visual.",
                    "Selecciona Shader: sharp si quieres una imagen más definida.",
                    "Para cambiar el encuadre usa Fullscreen Type y elige Preserve Aspect Ratio para 4:3 o Stretch To Screen para 16:9.",
                    "En PS TV, las opciones de mando para jugadores adicionales pueden aparecer en el menú de controles."
                ]
            }
        ]
    },

    website: "https://github.com/rsn8887/openbor",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/rsn8887/openbor/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/LF5x2CpB#Prn74NRexibOfqAvBHqJPg"
        }
    ]
},

// Pico-8 / FAKE-08
{
    console: "PS Vita",

    name: "PICO-8 / FAKE-08",

    image: "img/PSVita/Pico8.jpg",

    description:
        "Reproductor compatible con cartuchos PICO-8 para PS Vita, basado en FAKE-08.",

    guide: {

        function:
            "FAKE-08 carga cartuchos PICO-8 en formato .p8 y .p8.png y los ejecuta sin reemplazar el programa oficial PICO-8.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y una versión compatible de FAKE-08.",
            "Cartuchos": "Los cartuchos simples en formato .p8 o .p8.png tienen mejor compatibilidad; juegos con funciones avanzadas pueden requerir ajustes o no funcionar."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Cartuchos PICO-8 obtenidos legalmente.",
            "Espacio disponible en ux0:p8carts/."
        ],

        installation: [
            "Descarga fake_08.vpk desde GitHub Releases o el Mirror MEGA.",
            "Transfiere el VPK por USB o FTP e instálalo desde VitaShell.",
            "Copia los cartuchos autorizados a ux0:p8carts/ y abre FAKE-08."
        ],

        usage:
            "Navega por los cartuchos con izquierda/derecha y pulsa X para iniciar uno. Usa Start para abrir el menú y L/R para cambiar el tamaño de renderizado.",

        notes:
            "FAKE-08 no está relacionado ni respaldado por Lexaloffle Software. PICO-8 oficial es un producto comercial; esta ficha no proporciona activación ni distribución no autorizada de cartuchos. Algunos juegos pueden tener problemas de sonido, texto, flip() o rendimiento.",

        author: "jtothebell",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala el VPK de FAKE-08 como una aplicación homebrew.",

                items: [
                    "Descarga fake_08.vpk desde GitHub Releases o el Mirror MEGA.",
                    "Transfiere el archivo por USB o FTP.",
                    "Instálalo desde VitaShell.",
                    "Abre FAKE-08 desde LiveArea."
                ]
            },
            {
                title: "Agregar cartuchos",

                description:
                    "Los cartuchos compatibles se colocan en la carpeta p8carts.",

                items: [
                    "Copia cartuchos propios o distribuidos con permiso a ux0:p8carts/.",
                    "Los formatos soportados son .p8 y .p8.png.",
                    "Inicia FAKE-08 y utiliza izquierda/derecha para recorrer la lista.",
                    "Pulsa X para cargar el cartucho seleccionado."
                ]
            },
            {
                title: "Controles básicos",

                description:
                    "FAKE-08 ofrece navegación y opciones dentro de los cartuchos.",

                items: [
                    "Izquierda/derecha: cambiar de cartucho.",
                    "X: iniciar el cartucho seleccionado.",
                    "Start o +: abrir el menú de pausa.",
                    "R: cambiar el tamaño de renderizado.",
                    "L+R: salir de la aplicación.",
                    "El botón PS o los controles del sistema pueden cerrar o cambiar la aplicación según el firmware."
                ]
            },
            {
                title: "Compatibilidad",

                description:
                    "FAKE-08 intenta reproducir PICO-8, pero no garantiza compatibilidad exacta.",

                items: [
                    "PICO-8 oficial no está incluido en FAKE-08.",
                    "Los cartuchos multicomponente pueden requerir todos sus archivos disponibles.",
                    "El audio, texto personalizado y algunas funciones nuevas pueden no estar implementadas o variar.",
                    "Las llamadas a flip(), especialmente en tweetcarts, pueden causar problemas al volver al menú.",
                    "No instales cartuchos comerciales o protegidos sin autorización."
                ]
            }
        ]
    },

    website: "https://github.com/jtothebell/fake-08",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/jtothebell/fake-08/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/CQRBACzY#qESX4R4toFrICudKdqZQFw"
        }
    ]
},

// PFBNEO
{
    console: "PS Vita",

    name: "PFBNEO",

    image: "img/PSVita/PFBNEO.jpg",

    description:
        "Emulador de arcade y sistemas clásicos basado en FBNeo dentro del paquete pEMU para PS Vita.",

    guide: {

        function:
            "PFBNEO organiza ROMs de arcade y permite cambiar categorías, ajustar opciones y ejecutar juegos compatibles.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y el VPK PFBNEO de pEMU.",
            "Sistemas": "Arcade FBNeo, Neo Geo, CPS1, CPS2 y conjuntos compatibles según la lista del core."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs completas y compatibles con la versión de FBNeo.",
            "Archivos obtenidos legalmente."
        ],

        installation: [
            "Descarga pfbneo.vpk desde pEMU v7.2 o el Mirror MEGA.",
            "Transfiere el VPK por USB o FTP e instálalo desde VitaShell.",
            "Abre PFBNEO y usa el navegador para seleccionar ROMs compatibles."
        ],

        usage:
            "Cambia categorías con L/R, pulsa X para iniciar un juego y usa Start para abrir las opciones del emulador.",

        notes:
            "Las ROMs deben corresponder al conjunto reconocido por FBNeo. No uses sets incompletos ni archivos obtenidos sin autorización.",

        version: "7.2",

        author: "Cpasjuste",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala PFBNEO como un VPK independiente dentro de pEMU.",

                items: [
                    "Descarga pfbneo.vpk desde GitHub Releases v7.2 o el Mirror MEGA.",
                    "Transfiere el archivo a la PS Vita.",
                    "Instálalo desde VitaShell.",
                    "Abre PFBNEO desde LiveArea."
                ]
            },
            {
                title: "Navegación y controles",

                description:
                    "PFBNEO organiza los juegos en categorías y ofrece menús de opciones.",

                items: [
                    "Usa L/R para cambiar de categoría.",
                    "Pulsa X para iniciar el juego seleccionado.",
                    "Pulsa Select para las opciones del juego.",
                    "Pulsa Start para abrir las opciones del emulador.",
                    "Para salir, usa Select+Start y elige QUIT."
                ]
            },
            {
                title: "ROMs compatibles",

                description:
                    "La compatibilidad depende de que el conjunto corresponda a FBNeo.",

                items: [
                    "Usa ROMs completas y compatibles con la versión instalada.",
                    "No renombres ni reemplaces archivos clave del conjunto sin conocer su formato.",
                    "Comprueba el rendimiento de cada juego porque pueden existir diferencias de velocidad.",
                    "Utiliza únicamente archivos obtenidos legalmente."
                ]
            }
        ]
    },

    website: "https://github.com/Cpasjuste/pemu",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Cpasjuste/pemu/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/aBxixZ5Z#xuUdGJZ_w_65uAk6qUFG2g"
        }
    ]
},

// PGEN
{
    console: "PS Vita",

    name: "PGEN",

    image: "img/PSVita/PGEN.jpg",

    description:
        "Emulador de Sega Mega Drive/Genesis dentro de la colección pEMU para PS Vita.",

    guide: {

        function:
            "PGEN carga ROMs Mega Drive/Genesis y permite configurar entradas, video y opciones del emulador.",

        compatibility: {
            "Sega Mega Drive / Genesis": "Compatible con ROMs y formatos reconocidos por la build instalada.",
            "PS Vita": "Requiere HENkaku/CFW y el VPK PGEN de pEMU."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs Mega Drive/Genesis obtenidas legalmente.",
            "Espacio disponible para juegos y guardados."
        ],

        installation: [
            "Descarga pgen.vpk desde pEMU v7.2 o el Mirror MEGA.",
            "Transfiere e instala el VPK desde VitaShell.",
            "Abre PGEN y navega hasta la carpeta de ROMs."
        ],

        usage:
            "Cambia categorías con L/R, pulsa X para iniciar y usa Start para abrir el menú principal del emulador.",

        notes:
            "La versión 7.2 corrige soporte de .cue, .chd e .iso en PGEN según el changelog oficial.",

        version: "7.2",

        author: "Cpasjuste",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala PGEN como una aplicación independiente dentro de pEMU.",

                items: [
                    "Descarga pgen.vpk desde GitHub Releases v7.2.",
                    "Transfiere el VPK por USB o FTP.",
                    "Instálalo desde VitaShell y abre PGEN.",
                    "Accede a la carpeta que contiene tus ROMs."
                ]
            },
            {
                title: "Controles y opciones",

                description:
                    "PGEN permite navegar entre juegos y ajustar la configuración.",

                items: [
                    "Usa L/R para cambiar categorías.",
                    "Pulsa X para cargar el juego seleccionado.",
                    "Pulsa Select para las opciones del juego.",
                    "Pulsa Start para abrir las opciones del emulador.",
                    "Para salir, usa Select+Start y elige QUIT."
                ]
            },
            {
                title: "ROMs",

                description:
                    "PGEN admite varios formatos según la build y el medio.",

                items: [
                    "Usa ROMs BIN/ZIP u otros formatos compatibles con la versión instalada.",
                    "La versión 7.2 mejora el soporte de .cue, .chd e .iso.",
                    "Organiza los juegos por carpetas para facilitar el navegador.",
                    "No copies juegos protegidos sin autorización."
                ]
            }
        ]
    },

    website: "https://github.com/Cpasjuste/pemu",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Cpasjuste/pemu/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/vRZAhKRS#BYkrVgbYilXIz7zBmmSXGg"
        }
    ]
},

// PNES
{
    console: "PS Vita",

    name: "PNES",

    image: "img/PSVita/PNES.jpg",

    description:
        "Emulador de Nintendo Entertainment System dentro del paquete pEMU para PS Vita.",

    guide: {

        function:
            "PNES ejecuta ROMs NES compatibles y ofrece opciones de juego y navegación por categorías.",

        compatibility: {
            "Nintendo Entertainment System": "Soporta ROMs reconocidas por PNES.",
            "PS Vita": "Requiere HENkaku/CFW y el VPK correspondiente."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs NES obtenidas legalmente.",
            "Espacio disponible para juegos y datos."
        ],

        installation: [
            "Descarga pnes.vpk desde pEMU v7.2 o el Mirror MEGA.",
            "Transfiere e instala el VPK desde VitaShell.",
            "Abre PNES y navega por tus ROMs autorizadas."
        ],

        usage:
            "Selecciona una ROM y pulsa X para abrirla. Usa R o Start para consultar opciones según el menú.",

        notes:
            "La compatibilidad puede variar según el juego y el mapper. Usa ROMs completas obtenidas legalmente.",

        version: "7.2",

        author: "Cpasjuste",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala PNES como una aplicación independiente.",

                items: [
                    "Descarga pnes.vpk desde GitHub Releases v7.2 o el Mirror MEGA.",
                    "Transfiere el VPK por USB o FTP.",
                    "Instálalo desde VitaShell.",
                    "Abre PNES desde LiveArea."
                ]
            },
            {
                title: "Cargar ROMs",

                description:
                    "El navegador permite seleccionar ROMs NES compatibles.",

                items: [
                    "Organiza tus ROMs legales en una carpeta accesible.",
                    "Abre el navegador de PNES y selecciona una ROM.",
                    "Pulsa X para iniciar.",
                    "Usa R para revisar opciones del juego seleccionado.",
                    "Si una ROM no inicia, prueba verificar su formato y el mapper."
                ]
            }
        ]
    },

    website: "https://github.com/Cpasjuste/pemu",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Cpasjuste/pemu/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/6YYHmIia#JIdSR9ws9xPO6NXHpJSEBQ"
        }
    ]
},

// PSNES
{
    console: "PS Vita",

    name: "PSNES",

    image: "img/PSVita/PSNES.jpg",

    description:
        "Emulador de Super Nintendo dentro del paquete pEMU para PS Vita.",

    guide: {

        function:
            "PSNES ejecuta ROMs de SNES compatibles y permite navegar por juegos y ajustes.",

        compatibility: {
            "Super Nintendo / SNES": "Compatible con ROMs reconocidas por PSNES.",
            "PS Vita": "Requiere HENkaku/CFW y el VPK correspondiente."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs SNES obtenidas legalmente.",
            "Espacio disponible para juegos y datos."
        ],

        installation: [
            "Descarga psnes.vpk desde pEMU v7.2 o el Mirror MEGA.",
            "Transfiere e instala el VPK desde VitaShell.",
            "Abre PSNES y navega por tus ROMs autorizadas."
        ],

        usage:
            "Selecciona una ROM y pulsa X para abrirla. Usa R para ver opciones del juego seleccionado.",

        notes:
            "Usa ROMs obtenidas legalmente. El rendimiento puede variar según el juego y la configuración.",

        version: "7.2",

        author: "Cpasjuste",

        details: [
            {
                title: "Instalación",

                description:
                    "Instala PSNES como una aplicación independiente.",

                items: [
                    "Descarga psnes.vpk desde GitHub Releases v7.2 o el Mirror MEGA.",
                    "Transfiere el VPK por USB o FTP.",
                    "Instálalo desde VitaShell.",
                    "Abre PSNES desde LiveArea."
                ]
            },
            {
                title: "Cargar ROMs",

                description:
                    "El navegador permite seleccionar ROMs SNES compatibles.",

                items: [
                    "Organiza tus ROMs legales en una carpeta accesible.",
                    "Abre el navegador de PSNES.",
                    "Pulsa X para iniciar una ROM.",
                    "Usa R para consultar opciones del juego.",
                    "Si el rendimiento no es estable, prueba ajustes de video o rendimiento compatibles."
                ]
            }
        ]
    },

    website: "https://github.com/Cpasjuste/pemu",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Cpasjuste/pemu/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/rVgk1RhS#GReYA2NpcMv_gLkfmTIADw"
        }
    ]
},

// RetroArch
{
    console: "PS Vita",

    name: "RetroArch",

    image: "img/PSVita/RETROARCH.jpg",

    description:
        "Frontend multiplataforma que ejecuta núcleos Libretro para emular varios sistemas desde una interfaz unificada.",

    guide: {

        function:
            "RetroArch permite cargar núcleos compatibles, explorar ROMs, guardar estados y configurar filtros, entradas y opciones.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y una build PS Vita compatible.",
            "Núcleos": "La disponibilidad y el rendimiento dependen de cada core."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Núcleos Libretro compatibles.",
            "ROMs obtenidas legalmente.",
            "Espacio libre para datos, núcleos y estados."
        ],

        installation: [
            "Descarga RetroArch para PS Vita desde el buildbot oficial o el Mirror MEGA.",
            "Instala el VPK y coloca las ROMs autorizadas en ux0:.",
            "Abre RetroArch, carga un core compatible y selecciona la ROM."
        ],

        usage:
            "Importa o busca una ROM, carga el núcleo correspondiente y selecciona el archivo. Usa el menú rápido para ajustar opciones durante el juego.",

        notes:
            "RetroArch es solo el frontend: necesita núcleos específicos para cada sistema. No descargues packs de ROMs protegidas sin autorización.",

        version: "Consulta stable o nightly en el buildbot",

        author: "Libretro",

        details: [
            {
                title: "Instalación",
                description: "Instala la build Vita y extrae los datos adicionales si el paquete lo indica.",
                items: [
                    "Descarga RetroArch.vpk y RetroArch_data.7z desde el buildbot de Libretro.",
                    "Transfiere e instala el VPK con VitaShell.",
                    "Instala los núcleos compatibles disponibles en la build.",
                    "Abre RetroArch desde LiveArea."
                ]
            },
            {
                title: "Cargar ROMs y núcleos",
                description: "Cada sistema debe ejecutarse con un núcleo adecuado.",
                items: [
                    "Organiza las ROMs en carpetas dentro de ux0:.",
                    "Busca el archivo desde Load Content.",
                    "Selecciona el core compatible si no se detecta automáticamente.",
                    "Usa el menú rápido para guardar estados, cambiar controles o ajustar video.",
                    "Comprueba la compatibilidad de cada núcleo y su rendimiento."
                ]
            }
        ]
    },

    website: "https://www.retroarch.com/",

    downloads: [
        {
            name: "RetroArch PS Vita",
            url: "https://buildbot.libretro.com/nightly/playstation/vita/"
        },
        {
            name: "GitHub Releases",
            url: "https://github.com/libretro/RetroArch/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/3YRizLDa#P7PxtzrdsAr7yu_MWZ6DaA"
        }
    ]
},

// ScummVM
{
    console: "PS Vita",

    name: "ScummVM",

    image: "img/PSVita/ScummVM.jpg",

    description:
        "Intérprete de aventuras gráficas clásicas con soporte para muchos motores y juegos compatibles.",

    guide: {

        function:
            "ScummVM permite ejecutar aventuras compatibles desde los archivos originales del juego y administrarlas desde una interfaz unificada.",

        compatibility: {
            "PS Vita": "Requiere HENkaku/CFW y un puerto PS Vita compatible.",
            "Juegos": "La compatibilidad depende del motor y de la versión de ScummVM."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "Archivos originales de juegos compatibles.",
            "Espacio disponible para juegos y datos."
        ],

        installation: [
            "Descarga el VPK Vita de ScummVM desde la página oficial, VitaDB o el Mirror MEGA.",
            "Instala el VPK con VitaShell.",
            "Copia tus juegos autorizados a ux0:roms/ y usa Add Game."
        ],

        usage:
            "Abre ScummVM, añade la carpeta del juego compatible y ejecútalo desde la lista principal.",

        notes:
            "ScummVM necesita los archivos originales de los juegos compatibles. No proporciona juegos ni reemplaza archivos protegidos.",

        version: "Consulta releases oficiales",

        author: "ScummVM Team",

        details: [
            {
                title: "Instalación",
                description: "Instala el puerto Vita y organiza los juegos compatibles.",
                items: [
                    "Descarga scummvm-vita-vpk desde la página oficial o el Mirror MEGA.",
                    "Transfiere e instala el VPK con VitaShell.",
                    "Copia los archivos originales de los juegos a una carpeta dentro de ux0:roms/.",
                    "Abre ScummVM."
                ]
            },
            {
                title: "Agregar un juego",
                description: "ScummVM detecta juegos según sus archivos y el motor correspondiente.",
                items: [
                    "Pulsa Add Game y busca la carpeta del juego.",
                    "Selecciona el motor si el juego no se detecta automáticamente.",
                    "Guarda el título en la lista principal.",
                    "Usa archivos legales y completos."
                ]
            }
        ]
    },

    website: "https://www.scummvm.org/",

    downloads: [
        {
            name: "Descargas oficiales",
            url: "https://www.scummvm.org/downloads/"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/XAIiHDLB#iGp3Cx5b8Q6jzumQDhSlkg"
        }
    ]
},

// SMS Plus Vita
{
    console: "PS Vita",

    name: "SMS Plus Vita",

    image: "img/PSVita/SMSPlusVita.jpg",

    description:
        "Emulador para Sega Master System y Game Gear en PS Vita.",

    guide: {

        function:
            "SMS Plus Vita carga ROMs de Master System y Game Gear y ofrece navegación por categorías.",

        compatibility: {
            "Sega Master System / Game Gear": "ROMs compatibles con el emulador.",
            "PS Vita": "Requiere HENkaku/CFW."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs obtenidas legalmente.",
            "Espacio disponible para ROMs y datos."
        ],

        installation: [
            "Descarga smsplusvita.vpk desde GitHub o el Mirror MEGA.",
            "Instala el VPK desde VitaShell.",
            "Coloca las ROMs en ux0:data/SMSPlusVITA/."
        ],

        usage:
            "Abre SMS Plus Vita, navega con L/R y pulsa X para iniciar un juego.",

        notes:
            "Es un emulador antiguo sin una serie reciente de versiones. Usa formatos reconocidos y conserva una copia de tus ROMs.",

        author: "frangarcj",

        details: [
            {
                title: "Instalación",
                description: "Instala la build Vita y organiza las ROMs.",
                items: [
                    "Descarga smsplusvita.vpk desde GitHub o el Mirror MEGA.",
                    "Transfiere e instala el VPK con VitaShell.",
                    "Copia las ROMs autorizadas a ux0:data/SMSPlusVITA/.",
                    "Abre SMS Plus Vita."
                ]
            },
            {
                title: "Navegar y ejecutar",
                description: "El navegador permite recorrer las ROMs y abrirlas.",
                items: [
                    "Usa L/R para moverte por el menú.",
                    "Pulsa X sobre una ROM para iniciarla.",
                    "Usa el menú del emulador para ajustar opciones compatibles.",
                    "No incluyas BIOS o ROMs protegidas sin autorización."
                ]
            }
        ]
    },

    website: "https://github.com/frangarcj/SMSplusVITA",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/frangarcj/SMSplusVITA"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/PZ5GyRrD#IeLlq5_XYD_JTeVmE_rGoQ"
        }
    ]
},

// Snes9xVITA
{
    console: "PS Vita",

    name: "Snes9xVITA",

    image: "img/PSVita/SNES.jpg",

    description:
        "Emulador nativo de Super Nintendo para PS Vita basado en Snes9x.",

    guide: {

        function:
            "Snes9xVITA carga ROMs SNES compatibles y permite ajustar opciones desde el emulador.",

        compatibility: {
            "Super Nintendo": "ROMs compatibles con Snes9x 1.52.",
            "PS Vita": "Requiere HENkaku/CFW."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "VitaShell u otro instalador compatible.",
            "ROMs SNES obtenidas legalmente.",
            "Espacio disponible en ux0:data/Snes9xVITA/."
        ],

        installation: [
            "Descarga Snes9xVITA desde su release Henkaku o el Mirror MEGA.",
            "Instala Snes9xVITA.vpk con VitaShell.",
            "Coloca las ROMs en ux0:data/Snes9xVITA/."
        ],

        usage:
            "Abre Snes9xVITA, selecciona una ROM y pulsa el botón de inicio que indique la interfaz.",

        notes:
            "El proyecto mantiene una edición antigua basada en Snes9x 1.52. Usa alternativas modernas como PSNES o pEMU si necesitas compatibilidad actualizada.",

        version: "1.1-Henkaku",

        author: "skogaby / frangarcj",

        details: [
            {
                title: "Instalación",
                description: "Instala el VPK Henkaku y organiza las ROMs.",
                items: [
                    "Descarga Snes9xVITA desde GitHub Releases.",
                    "Transfiere e instala Snes9xVITA.vpk.",
                    "Copia ROMs legales a ux0:data/Snes9xVITA/.",
                    "Abre la aplicación."
                ]
            },
            {
                title: "Ejecutar juegos",
                description: "Selecciona una ROM desde el navegador de la aplicación.",
                items: [
                    "Abre Snes9xVITA y espera a que muestre la lista.",
                    "Selecciona un juego compatible.",
                    "Confirma el inicio y ajusta opciones solo si son necesarias.",
                    "Recuerda que algunos juegos antiguos pueden tener incompatibilidades."
                ]
            }
        ]
    },

    website: "https://github.com/frangarcj/Snes9xVITA",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/frangarcj/Snes9xVITA/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/PZ5GyRrD#IeLlq5_XYD_JTeVmE_rGoQ"
        }
    ]
},

// YoYo Loader Vita
{
    console: "PS Vita",

    name: "YoYo Loader",

    image: "img/PSVita/YoYoLoader.jpg",

    description:
        "Cargador para ejecutables Android de juegos creados con GameMaker Studio en PS Vita.",

    guide: {

        function:
            "YoYo Loader carga libyoyo.so desde APK de Android y ejecuta juegos compatibles de forma nativa en PS Vita.",

        compatibility: {
            "Android Bytecode": "Nativo para juegos Android compatibles.",
            "Android YYC": "Puede funcionar según el proyecto y sus dependencias.",
            "PC/Console": "No se admite el formato YYC; algunos proyectos bytecode requieren asset swap."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "kubridge y, salvo rePatch, FdFix configurados.",
            "libshacccg.suprx disponible.",
            "Un APK autorizado del juego compatible.",
            "ux0:data/gms/GAMENAME/game.apk."
        ],

        installation: [
            "Instala kubridge, FdFix si corresponde y libshacccg.suprx.",
            "Instala YoYo Loader desde GitHub Releases o el Mirror MEGA.",
            "Copia el APK autorizado renombrado como game.apk dentro de ux0:data/gms/GAMENAME/."
        ],

        usage:
            "Abre YoYo Loader, selecciona el juego de la lista y utiliza las opciones de optimización si están disponibles.",

        notes:
            "Consulta la lista oficial de compatibilidad. No extraigas juegos comerciales sin autorización ni uses APK de cuentas o fuentes no permitidas.",

        version: "Nightly",

        author: "Rinnegatamante",

        details: [
            {
                title: "Instalación",
                description: "Instala los plugins y el loader antes de copiar juegos.",
                items: [
                    "Descarga YoYo Loader desde GitHub Releases.",
                    "Instala kubridge y FdFix cuando corresponda.",
                    "Instala libshacccg.suprx si no está disponible.",
                    "Instala el VPK y abre YoYo Loader.",
                    "No instales FdFix si tu instalación usa rePatch."
                ]
            },
            {
                title: "Agregar juegos",
                description: "Cada juego necesita su propio directorio y APK.",
                items: [
                    "Crea ux0:data/gms/GAMENAME/.",
                    "Copia el APK autorizado y renómbralo como game.apk.",
                    "Abre el selector de juegos dentro de YoYo Loader.",
                    "Selecciona el título y prueba la compatibilidad.",
                    "Usa Optimizar APK si necesitas reducir tamaño o problemas de carga."
                ]
            },
            {
                title: "Compatibilidad",
                description: "No todos los juegos exportados por GameMaker funcionan de inmediato.",
                items: [
                    "Los APK Android bytecode y YYC tienen mejor probabilidad de funcionar.",
                    "Los exports PC/Console pueden requerir un asset swap.",
                    "Los PC/Console YYC no se consideran compatibles.",
                    "Consulta la lista oficial antes de instalar o modificar assets.",
                    "Solo usa APK y juegos adquiridos legalmente."
                ]
            }
        ]
    },

    website: "https://github.com/Rinnegatamante/yoyoloader_vita",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/Rinnegatamante/yoyoloader_vita/releases"
        },
        {
            name: "Compatibilidad",
            url: "https://www.rinnegatamante.eu/yoyo/"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/jNAhyZ4L#ZvXOIEfM5rDNhtA4O_cLBw"
        }
    ]
},

// Memorias
{
    console: "PS Vita",

    name: "Memorias y almacenamiento",

    image: "img/PSVita/Memorias.jpg",

    description:
        "Guía general para administrar las particiones ux0 y uma0, mover juegos PSP y transferir archivos por USB o FTP.",

    guide: {

        function:
            "Permite identificar las memorias principales y secundarias de PS Vita y administrar archivos con VitaShell.",

        compatibility: {
            "PS Vita": "ux0 es la partición principal. uma0 puede aparecer en consolas y configuraciones compatibles.",
            "SD2VITA": "La disponibilidad de ux0 y uma0 depende de cómo esté montada la tarjeta."
        },

        requirements: [
            "VitaShell instalado.",
            "Copia de seguridad de los datos importantes.",
            "Cable USB o una red local para transferencias."
        ],

        installation: [
            "No requiere instalar archivos. Abre VitaShell y entra en la vista Home.",
            "Comprueba las particiones disponibles antes de mover, borrar o copiar archivos."
        ],

        usage:
            "Usa VitaShell para explorar ux0, uma0 y otras particiones. Copia datos solo a rutas conocidas y conserva los respaldos.",

        notes:
            "Mover carpetas del sistema puede dejar aplicaciones inutilizables. Respaldar los datos antes de migrar memorias, no borres contenido que no identifiques.",

        details: [
            {
                title: "Particiones principales",
                description:
                    "El nombre de cada partición indica dónde se encuentran los datos.",
                items: [
                    "ux0: suele ser la memoria principal, como una tarjeta SD2VITA montada como almacenamiento.",
                    "uma0: suele ser la memoria secundaria o original según el modelo y la configuración.",
                    "La carpeta app contiene aplicaciones y burbujas.",
                    "La carpeta data contiene datos de aplicaciones.",
                    "La carpeta pspemu contiene datos relacionados con PSP/Adrenaline."
                ]
            },
            {
                title: "Usar la memoria original con Adrenaline",
                description:
                    "Puedes mover los juegos PSP a otra partición si tu configuración de Adrenaline lo permite.",
                items: [
                    "Abre Adrenaline y entra en su menú.",
                    "Busca Memory Stick Location en Settings.",
                    "Elige la partición disponible que quieras usar.",
                    "Reinicia solo si Adrenaline lo solicita.",
                    "Mantén una copia de los datos PSP antes de cambiar la ubicación."
                ]
            },
            {
                title: "Transferencias USB y FTP",
                description:
                    "VitaShell permite conectar la consola a una computadora.",
                items: [
                    "Conecta la Vita por USB y abre la unidad correspondiente.",
                    "Para ver archivos ocultos, habilita esta opción en el explorador del PC.",
                    "Para FTP, abre VitaShell, pulsa Start y selecciona FTP en SELECT button.",
                    "Pulsa Select para iniciar el servidor y usa FileZilla o otro cliente FTP.",
                    "Mantén ambos equipos en una red privada y desactiva FTP al terminar."
                ]
            }
        ]
    },

    website: null,

    downloads: []
},

// Juego NoNpDrm
{
    console: "PS Vita",

    name: "Juegos NoNpDrm (información)",

    image: "img/PSVita/JuegoNoNpDrm.jpg",

    description:
        "Tarjeta informativa sobre NoNpDrm y la protección de contenido de PS Vita.",

    guide: {

        function:
            "Instala Juegos en formato NoNpDrm Fácil y Rápido.",

        compatibility: {
            "PS Vita" : "Requiere HENkaku/CFW y el paquete CPS3 de FinalBurn Neo para Vita."
        },

        requirements: [
            "VitaShell instalado.",
            "Copia de seguridad de los datos importantes.",
            "Cable USB o una red local para transferencias."
        ],

        installation: [
            "Debemos tener instalado el plugin NoNpDrm by TheOfficialFloW.",
            "Si no lo tenemos abrimos AutoPlugin 2 y lo buscamos para instalarlo y reiniciamos la consola."
            
        ],

        usage:
            "Descargamos el juego en formato NoNpDrm y lo copiamos a la carpeta ux0:app/ del sistema.",

        notes:
            "NoNpDrm by TheOfficialFloW permite cargar juegos sinNpDrm.",

        version: "No especificada",

        author: "TheOfficialFloW",

        details: [
            {
                title: "Descargamos nuestro juego",
                description:
                    "cargamos nuestro juego en formato carpeta.",
                items: [
                    "Al revisar nuestro juego descargado vemos la siguiente carpeta.",
                    "Cómo podemos apreciar tenemos la una carpeta llamada app.",
                    "La cual la pasamos a la consola por medio de USB o FTP a la misma carpeta con el nombre app."
                ]
            },
            {
                title: "Una vez pasado la carpeta app a la consola",
                description:
                    "Para mostrar el juego en la lista.",
                items: [
                    "Abrimos VitaShell en la ventana de Home donde salen todas las memorias le damos al triangulo y le damos a Refresh LiveArea.",
                    "Una vez completado no aparecerá un mensaje de Refreshed 1 items.",
                    "Y ya tenemos el juego listo en el área de la PSVita."
                ]
            }
        ]
    },

    website: null,

    downloads: []
},

// Mandos PS Vita
{
    console: "PS Vita",

    name: "Mandos PS3 y PS4 en PS Vita",

    image: "img/PSVita/MandosPSVita.jpg",

    description:
        "Plugins y herramientas para emparejar mandos DualShock 3 y DualShock 4 con PS Vita.",

    guide: {

        function:
            "Permite usar mandos compatibles como controles externos de PS Vita y configurar juegos o aplicaciones que admitan entrada externa.",

        compatibility: {
            "DS3 / Sixaxis": "Requiere emparejamiento con ds3vita o una herramienta compatible.",
            "DS4": "Requiere ds4vita y emparejamiento desde Ajustes > Dispositivos.",
            "MiniVitaTV": "Puede ayudar con varios mandos, pero puede afectar el Bluetooth si se deja instalado."
        },

        requirements: [
            "PS Vita con entorno homebrew compatible.",
            "AutoPlugin2 o gestión manual de plugins.",
            "Cable USB para emparejar DS3.",
            "Bluetooth habilitado en la consola."
        ],

        installation: [
            "Instala ds3vita, ds4vita o ds4Touch solo si necesitas cada función.",
            "Para DS3, empareja la MAC de la Vita más 1 con un programa de emparejamiento.",
            "Conecta el mando desde Ajustes > Dispositivos > Dispositivos Bluetooth."
        ],

        usage:
            "Pulsa el botón PS del mando para conectarlo después de emparejarlo. Comprueba el soporte en cada juego.",

        notes:
            "Cambia únicamente la MAC asociada del mando y evita mezclar plugins duplicados. Respaldar config.txt antes de modificarlo.",

        details: [
            {
                title: "Emparejar un DualShock 3",
                description:
                    "El DS3 debe registrar la dirección Bluetooth de la Vita.",
                items: [
                    "Consulta Ajustes > Sistema > Información del sistema.",
                    "Conecta el control por USB.",
                    "Usa una herramienta de emparejamiento y introduce la MAC de la Vita incrementando el último byte.",
                    "Después usa el botón PS para conectar desde Bluetooth.",
                    "No compartas la MAC en imágenes públicas."
                ]
            },
            {
                title: "DualShock 4",
                description:
                    "Un DS4 puede emparejarse desde SHARE+PS.",
                items: [
                    "Mantén SHARE+PS unos segundos hasta que el indicador parpadee rápidamente.",
                    "Abre Ajustes > Dispositivos > Dispositivos Bluetooth.",
                    "Espera a que aparezca el mando y confirma la conexión.",
                    "Pulsa el botón PS para reconectarlo después."
                ]
            },
            {
                title: "Dos mandos",
                description:
                    "Solo funciona con aplicaciones y juegos que admitan varios controles.",
                items: [
                    "Instala MiniVitaTV únicamente si la aplicación lo requiere.",
                    "Empareja ambos mandos por separado.",
                    "Prueba primero con un juego compatible.",
                    "Desinstala o desactiva plugins que causen conflictos.",
                    "Adrenaline puede requerir activar el uso de DS3/DS4 en sus ajustes."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "GitHub Releases - ds3vita",
            url: "https://github.com/xerpi/ds3vita/releases"
        },
        {
            name: "GitHub Releases - ds4vita",
            url: "https://github.com/xerpi/ds4vita/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/ydZVwTBB#rkW6jcYCwPQjZ51Lh6O7jw"
        }
    ]
},

// Update Software
{
    console: "PS Vita",

    name: "Actualizar software",

    image: "img/PSVita/Update.jpg",

    description:
        "Actualización oficial del software de sistema de PS Vita y PS TV hasta la versión disponible.",

    guide: {

        function:
            "Muestra los métodos oficiales para descargar e instalar actualizaciones del sistema.",

        compatibility: {
            "PS Vita / PS TV": "Usa la actualización oficial publicada por PlayStation.",
            "Versión actual": "La última actualización publicada es 3.74."
        },

        requirements: [
            "Conexión a Internet para una actualización por Wi-Fi.",
            "Batería cargada.",
            "Copia de seguridad de los datos importantes.",
            "Para USB, una unidad compatible con PSVITA/UPDATE/PSVUPDAT.PUP."
        ],

        installation: [
            "Usa Ajustes > Inicio > Actualización del sistema y selecciona el método disponible.",
            "Para PS Vita, la actualización puede hacerse por Wi-Fi o desde una PS3/PC.",
            "Para USB, descarga el PUP oficial y coloca el archivo en PSVITA/UPDATE/PSVUPDAT.PUP."
        ],

        usage:
            "Comprueba la versión en Ajustes > Sistema > Información del sistema y actualiza solo desde fuentes oficiales.",

        notes:
            "Actualizar cambia el firmware y puede quitar la compatibilidad con el entorno homebrew actual. Respaldar datos y comprobar primero la guía de recuperación.",

        details: [
            {
                title: "Actualizar por Wi-Fi",
                description:
                    "Es el método más directo en PS Vita.",
                items: [
                    "Conecta la Vita a una red inalámbrica.",
                    "Abre Ajustes > Inicio > Actualización del sistema.",
                    "Selecciona Actualizar mediante Wi-Fi.",
                    "Confirma la descarga y espera a que termine.",
                    "No apagues ni interrumpas la consola."
                ]
            },
            {
                title: "Actualizar desde USB",
                description:
                    "Sirve para PS Vita y PS TV si se prepara el archivo PUP oficial.",
                items: [
                    "Crea PSVITA/UPDATE/ en la unidad.",
                    "Guarda el archivo como PSVUPDAT.PUP.",
                    "En modo seguro, elige Actualizar software del sistema.",
                    "Selecciona Actualizar desde dispositivo de almacenamiento USB.",
                    "Sigue las instrucciones oficiales."
                ]
            }
        ]
    },

    website: "https://www.playstation.com/es-cl/support/hardware/psvita/system-software/",

    downloads: [
        {
            name: "PSVUPDAT.PUP",
            url: "http://dmx01.psv.update.playstation.net/update/psv/image/2022_0209/rel_f2c7b12fe85496ec88a0391b514d6e3b/PSVUPDAT.PUP"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/LRJk2T5B#VEjlufBchPp9oUjYyqI12Q"
        }
    ]
},

// Restaura PS Vita
{
    console: "PS Vita",

    name: "Restaurar PS Vita",

    image: "img/PSVita/RestauraPSVita.jpg",

    description:
        "Guía para revertir modificaciones del entorno HENkaku/Ensō antes de actualizar o restaurar la consola.",

    guide: {

        function:
            "Describe las comprobaciones previas para desactivar spoofing y desinstalar Ensō antes de una restauración o actualización.",

        compatibility: {
            "PS Vita / PS TV": "Los pasos dependen de haber instalado Ensō y del firmware actual."
        },

        requirements: [
            "Copia de seguridad completa.",
            "Acceso a Ajustes y a las aplicaciones Ensō/HENkaku.",
            "Conexión a Internet si se realizará una actualización oficial."
        ],

        installation: [
            "Esta guía no instala software. Primero desactiva los ajustes de spoofing.",
            "Desinstala Ensō desde su aplicación si está presente.",
            "Después usa la restauración o actualización oficial del sistema."
        ],

        usage:
            "Se usa como preparación antes de reiniciar la consola a un estado más cercano al original.",

        notes:
            "Restaurar elimina datos y puede desconectar la tarjeta de memoria. Haz una copia de seguridad y confirma que tienes acceso a tus cuentas y archivos.",

        details: [
            {
                title: "Preparación",
                description:
                    "Desactiva la configuración temporal antes de quitar Ensō.",
                items: [
                    "Haz una copia de seguridad de partidas y datos importantes.",
                    "Abre Ajustes > Ajustes de HENkaku.",
                    "Desactiva el spoofing de PSN y el spoofing de versión.",
                    "Abre Ensō solo si está instalado."
                ]
            },
            {
                title: "Desinstalar Ensō",
                description:
                    "Ensō debe desinstalarse antes de iniciar una restauración oficial.",
                items: [
                    "Abre la aplicación Ensō.",
                    "Sigue las opciones de desinstalación indicadas por la versión instalada.",
                    "Esperar el reinicio sin apagar la consola.",
                    "No interrumpas la restauración."
                ]
            },
            {
                title: "Restaurar o actualizar",
                description:
                    "El sistema puede solicitar una actualización oficial.",
                items: [
                    "Abre Ajustes > Actualización del sistema.",
                    "Sigue las opciones oficiales disponibles.",
                    "Confirma que la tarjeta de memoria no tenga datos necesarios antes de formatearla.",
                    "Una restauración completa puede eliminar aplicaciones, ajustes y datos."
                ]
            }
        ]
    },

    website: "https://www.playstation.com/es-cl/support/hardware/psvita/system-software/",

    downloads: []
},

// OBS PS Vita
{
    console: "PS Vita",

    name: "OBS Studio en PS Vita",

    image: "img/PSVita/OBSPSVita.jpg",

    description:
        "Captura la pantalla de PS Vita por USB mediante el plugin UVC y OBS Studio.",

    guide: {

        function:
            "El plugin UDCD UVC convierte la salida de PS Vita en un dispositivo de video USB que OBS puede capturar.",

        compatibility: {
            "PS Vita": "Requiere una Vita modificada compatible con taiHEN.",
            "PS TV": "La compatibilidad depende del modelo y del puerto USB.",
            "PC": "OBS Studio debe seleccionar el dispositivo UVC de la consola."
        },

        requirements: [
            "PS Vita con HENkaku/CFW.",
            "taiHEN y udcd_uvc.skprx.",
            "OBS Studio instalado en Windows.",
            "Cable USB y puerto compatible.",
            "Reinicio de la consola después de instalar el plugin."
        ],

        installation: [
            "Instala OBS Studio desde la descarga oficial.",
            "Instala udcd_uvc.skprx y reinicia la Vita.",
            "Conecta la Vita por USB y selecciona el dispositivo en OBS."
        ],

        usage:
            "En OBS, crea una escena y agrega Dispositivo de captura de video. Selecciona PS Vita como dispositivo.",

        notes:
            "No todos los cables o puertos USB funcionan igual. Respaldar tai/config.txt antes de editarlo y desinstalar el plugin si causa problemas.",

        version: "OBS 33.0.1",

        author: "xerpi",

        details: [
            {
                title: "Instalar el plugin UVC",
                description:
                    "udcd_uvc usa el controlador USB de la Vita para presentar una fuente UVC.",
                items: [
                    "Descarga udcd_uvc.skprx desde el repositorio oficial.",
                    "Copia el archivo a ux0:tai o ur0:tai según tu configuración.",
                    "Añade udcd_uvc.skprx en la sección KERNEL de config.txt.",
                    "Reinicia la Vita.",
                    "Conecta la consola al PC por USB."
                ]
            },
            {
                title: "Configurar OBS Studio",
                description:
                    "OBS reconoce la Vita como una cámara UVC.",
                items: [
                    "Instala OBS desde obsproject.com.",
                    "Crea una escena nueva.",
                    "Agrega Fuente > Dispositivo de captura de video.",
                    "Crea la fuente y selecciona PS Vita.",
                    "Ajusta resolución, recorte y filtros según convenga."
                ]
            },
            {
                title: "Problemas comunes",
                description:
                    "La captura puede fallar por USB, firmware o configuración.",
                items: [
                    "Prueba otro cable o puerto USB.",
                    "Cierra programas que estén usando otros dispositivos de cámara.",
                    "Reinicia OBS y la Vita si el dispositivo no aparece.",
                    "Si el video está dañado, prueba una resolución o modo compatible.",
                    "Desactiva o desinstala el plugin si impide usar el dispositivo USB."
                ]
            }
        ]
    },

    website: "https://github.com/xerpi/vita-udcd-uvc",

    downloads: [
        {
            name: "Plugin UVC",
            url: "https://github.com/xerpi/vita-udcd-uvc/releases"
        },
        {
            name: "OBS Studio",
            url: "https://obsproject.com/download"
        }
    ]
},

];