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
            "El tutorial local usa Nano-Hencore, QCMA y paquetes antiguos; para 3.74 la guía actual indica HENlo. VitaDeploy Quick 3.65 Install realiza un cambio real de firmware: el spoofing de versión no mantiene el sistema en 3.74. Instalar Ensō modifica el arranque y existe riesgo de daño irreversible si algo falla; respalda los datos y sigue la documentación actual exactamente. El desbloqueo no proporciona juegos comerciales gratis: utiliza homebrew y contenido que tengas derecho a usar.",

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
                title: "Diferencia con el tutorial antiguo",

                description:
                    "El procedimiento para firmware 3.74 ha cambiado y la guía de referencia actual ya no empieza con Nano-Hencore y QCMA.",

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
            "El tutorial local enlaza páginas de terceros y sus pasos pueden cambiar. Usa vita.hacks.guide como referencia vigente; no instales paquetes antiguos ni ejecutes instaladores de procedencia dudosa. Ensō cambia el arranque y existe riesgo de daño irreversible; respalda los datos, mantén la consola cargada y sigue la guía exactamente. El desbloqueo no entrega juegos comerciales gratis: utiliza homebrew y contenido autorizado.",

        version: "Firmware 3.74; Ensō opcional mediante firmware 3.65",

        author: "Vita Hacks Guide",

        details: [
            {
                title: "Pasos detallados desde el navegador",

                description:
                    "El procedimiento se realiza desde el navegador de la Vita. Confirma la versión 3.74, respalda los datos y mantén la consola cargada antes de empezar.",

                items: [
                    "En el navegador de la Vita, abre una de las páginas incluidas en Descargas y toca Liberar mi Vita > Liberar.",
                    "Cuando aparezca el menú, el tutorial indica seleccionar Instalar VitaDeploy + AutoPlugin2, después Instalar HENkaku y Salir. AutoPlugin2 es opcional; si la pantalla no coincide, sigue el procedimiento oficial actual y no instales paquetes de una página que no puedas verificar.",
                    "En Ajustes > HENkaku Settings, habilita Unsafe Homebrew. El tutorial recomienda temporalmente 30 minutos para el modo de espera; durante cualquier instalación mantén la consola despierta y conectada al adaptador."
                ]
            },
            {
                title: "VitaDeploy y firmware 3.65",

                description:
                    "Ensō es opcional y requiere modificar el arranque. La instalación actual de VitaDeploy puede instalarlo junto con el cambio real a firmware 3.65.",

                items: [
                    "En VitaDeploy, la ruta actual es Install a different OS > Quick 3.65 Install. El tutorial antiguo propone instalar Ensō por separado desde PlayStation Update Package; no mezcles ambos procedimientos.",
                    "Mantén Internet activo, lee cada aviso, confirma con el botón indicado y espera el reinicio. No dejes que la consola entre en reposo ni interrumpas la instalación.",
                    "Después del reinicio, comprueba HENkaku Settings. Version Spoofing a 3.74 solo cambia la versión reportada; el firmware instalado continúa siendo 3.65."
                ]
            },
            {
                title: "Aplicaciones opcionales",

                description:
                    "Una vez habilitado HENkaku, el tutorial recomienda instalar aplicaciones adicionales desde el descargador de apps de VitaDeploy ESP MOD.",

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
            name: "Ingles Original",
            url: "https://deploy.psp2.dev/"
        }
    ]
},

// SD2Vita
{
    console: "PS Vita",

    name: "SD2Vita: microSD para PS Vita",

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
            "Win32DiskImager escribe una imagen de disco y puede borrar por completo la unidad equivocada; confirma la microSD por letra y capacidad y conserva un respaldo. El tutorial usa AutoPlugin2 y rutas de montaje que pueden variar entre versiones del plugin; revisa la configuración antes de reiniciar. No combines el clonado manual con UX0toSD en la misma operación. Utiliza únicamente aplicaciones y contenido que tengas derecho a usar.",

        version: "Depende del adaptador SD2Vita y del plugin de almacenamiento",

        details: [
            {
                title: "Método con PC: preparar e instalar",

                description:
                    "Este método prepara la microSD en Windows, copia el contenido de ux0 y configura el plugin SD2Vita.",

                items: [
                    "Respalda todo el contenido de ux0 en el PC, incluidos los archivos ocultos, y conserva la copia sin modificar.",
                    "Con Win32DiskImager, escribe zzBlank.img en la microSD correcta. La operación borra los datos de la unidad seleccionada; confirma su letra y capacidad antes de escribir.",
                    "Expulsa y vuelve a conectar la microSD, y formatéala en exFAT. El tutorial indica tamaño de asignación predeterminado hasta 128 GB y 64 KB para tarjetas mayores de 128 GB.",
                    "Copia el respaldo completo de ux0 a la raíz de la microSD, incluidos los archivos ocultos; no lo pongas dentro de otra carpeta.",
                    "En AutoPlugin2, abre Plugins para PS Vita y selecciona Instalar/Configurar plugin SD2Vita. Configura SD2Vita como ux0 y, si utilizas una tarjeta oficial, asígnala a uma0; guarda la configuración.",
                    "Inserta el adaptador cuando lo indique el instalador y confirma el reinicio. No retires la tarjeta durante el arranque.",
                    "Después del reinicio, abre VitaShell y comprueba los archivos y la capacidad de almacenamiento."
                ]
            },
            {
                title: "ux0, uma0 y USB",

                description:
                    "La configuración habitual del tutorial monta SD2Vita como ux0 y deja la tarjeta oficial en uma0.",

                items: [
                    "ux0: almacenamiento principal en SD2Vita.",
                    "uma0: tarjeta oficial, si se utiliza y el plugin la monta allí.",
                    "En VitaShell > Start > USB device selecciona SD2Vita o Memory Card según el almacenamiento que quieras mostrar al PC."
                ]
            },
            {
                title: "Método alternativo UX0toSD",

                description:
                    "El tutorial también describe UX0toSD CloneTool para clonar desde la consola; advierte que puede tardar bastante.",

                items: [
                    "Instala la aplicación UX0toSD compatible con tu CFW y sigue sus indicaciones para elegir SD2Vita como destino.",
                    "Mantén la consola cargada y espera a que termine la copia antes de retirar el adaptador o apagarla.",
                    "Usa este procedimiento como alternativa al copiado manual por PC, no como un paso adicional del mismo método."
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

    name: "AutoPlugin 2 para PS Vita",

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
                    "Marca únicamente los plugins que necesites y sean compatibles; no selecciones toda la lista ni asumas que todos pueden convivir. El tutorial indica pulsar Start para aplicar la selección.",
                    "Antes de cambiar plugins, respalda el tai/config.txt que realmente utiliza tu instalación y conserva sus entradas existentes.",
                    "Reinicia solo si la aplicación lo solicita. Si un plugin causa problemas, usa el método de recuperación de su documentación para quitarlo."
                ]
            },
            {
                title: "Recomendaciones del tutorial original",

                description:
                    "Estas son algunas recomendaciones que aparecían en el tutorial antiguo. Son referencias, no una lista obligatoria: comprueba que cada plugin siga disponible y sea compatible con tu firmware, modelo y otros plugins.",

                items: [
                    "Adrenaline (Fix double touch): el tutorial lo recomienda para abrir Adrenaline con un solo toque.",
                    "AnalogsEnhancer: permite ajustar la zona muerta y la respuesta de los sticks analógicos.",
                    "ds3vita y ds4vita: añaden compatibilidad con mandos de PS3 y PS4, respectivamente.",
                    "FdFix: corrige un problema de descriptores de archivos que puede afectar a algunos homebrews al suspender y reanudar la consola.",
                    "Music Premium y Quick Menu Plus: agregan opciones para escuchar música en segundo plano y personalizar funciones del menú rápido.",
                    "Shellsecbat: muestra información de batería en la barra de estado.",
                    "udcd_uvc: permite transmitir la pantalla de la Vita por USB a una computadora.",
                    "MiniVitaTV: añade compatibilidad con varios mandos en juegos compatibles, especialmente en PS TV.",
                    "El tutorial también nombra plugins antiguos o con funciones que se omitieron aquí; revisa siempre la documentación oficial del autor y no instales plugins innecesarios, incompatibles o duplicados."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Repositorio de ONElua",
            url: "https://github.com/ONElua/AutoPlugin2"
        },
        {
            name: "Mirror MEGA del tutorial",
            url: "https://mega.nz/folder/vUpgEQ7B#ZqIfEKTVVPebQGWX-Qndkw"
        }
    ]
},

];