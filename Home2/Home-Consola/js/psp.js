const pspApps = [

// Firmware Oficial PSP (OFW)
{
    console: "PSP",

    name: "Firmware Oficial PSP (OFW)",

    image: "img/PSP/FirmwareOficial.jpg",

    description:
        "Guía para instalar el firmware oficial de PSP, versión 6.61, desde una Memory Stick o el almacenamiento de PSP Go.",

    guide: {

        function:
            "Instala o reinstala el sistema oficial de PSP. La versión 6.61 es la última actualización publicada para la familia PSP.",

        compatibility: {
            "PSP-1000/2000/3000": "Compatible; usa un archivo de actualización íntegro y para PSP.",
            "PSP Go": "Compatible; usa la Memory Stick Micro o el almacenamiento interno.",
            "PSP Street": "Compatible con el procedimiento de actualización oficial."
        },

        requirements: [
            "PSP con batería cargada y adaptador de corriente conectado.",
            "PC y cable USB, o lector de tarjetas para copiar el archivo.",
            "Memory Stick con espacio libre; PSP Go también puede usar su almacenamiento interno.",
            "Archivo oficial de actualización PSP 6.61 (EBOOT.PBP)."
        ],

        installation: [
            "Descarga y extrae el archivo de actualización; comprueba que el nombre sea EBOOT.PBP.",
            "En la unidad de la PSP, crea la carpeta PSP/GAME/UPDATE si todavía no existe.",
            "Copia EBOOT.PBP dentro de PSP/GAME/UPDATE/.",
            "Desconecta la PSP de forma segura y ve a Juego > Memory Stick (o Almacenamiento del sistema en PSP Go).",
            "Inicia Actualización de PSP ver. 6.61 y sigue las instrucciones en pantalla; no apagues ni desconectes la consola."
        ],

        usage:
            "Al finalizar la instalación, revisa Ajustes > Ajustes del sistema > Información del sistema para confirmar la versión instalada.",

        notes:
            "La página específica de firmware PSP de Sony ya no está disponible; el enlace oficial lleva al centro general de soporte de PlayStation. El archivo MEGA es un espejo de esta web, no una descarga oficial de Sony. Si la consola tiene CFW, verifica primero la compatibilidad con ese CFW y el modelo; Chronoswitch es una herramienta de downgrade, no un requisito para una actualización normal a 6.61.",

        version: "6.61 (última versión oficial)",

        author: "Sony Interactive Entertainment",

        details: [
            {
                title: "Descargas y procedencia",

                description:
                    "Sony ya no publica el archivo PSP en una página de soporte específica accesible. Usa los enlaces distinguiendo el soporte oficial del espejo de terceros.",

                items: [
                    "El centro de soporte enlazado como Web Oficial es la página general de PlayStation, no aloja el firmware PSP.",
                    "El espejo MEGA corresponde al enlace que ya utiliza el tutorial del sitio; verifica que el archivo descargado sea EBOOT.PBP de PSP 6.61.",
                    "Chronoswitch se enlaza por separado para los casos de downgrade; consulta sus instrucciones y compatibilidad antes de usarlo."
                ]
            },
            {
                title: "Actualizar una PSP con CFW",

                description:
                    "Una actualización oficial puede quitar o dejar inutilizable el CFW. No la ejecutes sin comprobar antes el método adecuado para tu modelo y versión.",

                items: [
                    "Haz una copia de seguridad de las partidas y archivos importantes.",
                    "No uses Chronoswitch para una actualización normal: está destinado a cambiar a una versión anterior del firmware.",
                    "Si tu objetivo es volver a firmware oficial desde un CFW, sigue una guía específica para tu modelo y estado de la consola."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/OAp01LyB#2iME8GWTOBWEYPK69_OawQ"
        }
    ]
},
// Hack Permanente PSP
{
    console: "PSP",

    name: "Hack Permanente PSP (PRO-C2 + Infinity)",

    image: "img/PSP/HackPermanente.jpg",

    description:
        "Instala PRO-C2 e Infinity 2.0.3 para iniciar el Custom Firmware automáticamente, incluso después de apagar completamente la PSP.",

    guide: {

        function:
            "Infinity hace persistente un Custom Firmware compatible. Esta tarjeta sigue el método del tutorial con PRO-C2 e Infinity 2.0.3.",

        compatibility: {
            "PSP-1000/2000/3000/Street": "Infinity 2.0.3 admite estos modelos con firmware 6.60 o 6.61.",
            "PSP Go": "Compatible; utiliza los archivos de la carpeta pspgo del paquete Infinity.",
            "Firmware": "El método documentado requiere firmware oficial 6.60 o 6.61."
        },

        requirements: [
            "PSP con firmware oficial 6.60 o 6.61.",
            "PC y cable USB, o lector de tarjetas para copiar los archivos.",
            "Batería cargada y adaptador de corriente conectado durante la instalación.",
            "Paquete PRO-C2 e Infinity 2.0.3; selecciona los archivos estándar o PSP Go según el modelo."
        ],

        installation: [
            "Respalda partidas y archivos importantes. Si tienes un hack o una versión antigua de Infinity, confirma cómo retirarla antes de continuar.",
            "Extrae el paquete PRO-C2 y copia PROUPDATE a PSP/GAME/ de la Memory Stick.",
            "Ejecuta PROUPDATE desde Juego > Memory Stick para instalar PRO-C2.",
            "Copia el EBOOT.PBP de Infinity 2.0.3 al directorio PSP/GAME/UPDATE/. Para PSP Go, usa los archivos de la carpeta pspgo; para los demás modelos, usa standard.",
            "Ejecuta Infinity desde Juego > Memory Stick para instalarlo.",
            "Abre Infinity otra vez y selecciona PRO CFW by Coldbird como el Custom Firmware que debe cargar al iniciar.",
            "Reinicia completamente la PSP y revisa el menú VSH para confirmar que el CFW se activa automáticamente."
        ],

        usage:
            "Después de configurarlo, Infinity carga PRO-C2 al encender la consola, sin ejecutar FastRecovery tras cada apagado completo.",

        notes:
            "La guía del autor de Infinity indica instalar el CFW compatible primero, instalar Infinity después y volver a abrir Infinity para seleccionar el CFW. El tutorial antiguo repite PROUPDATE; no repitas ese paso salvo que las instrucciones incluidas en tu paquete lo indiquen. Una instalación incorrecta o archivos de otro modelo/firmware pueden dejar la consola inutilizable. Infinity se puede retirar reflasheando el firmware; no es una modificación irreversible.",

        version: "PRO-C2 + Infinity 2.0.3",

        author: "PRO Team / DaveeFTW",

        details: [
            {
                title: "Archivos por modelo",

                description:
                    "Infinity distribuye contenido separado para modelos PSP estándar y PSP Go.",

                items: [
                    "PSP-1000, PSP-2000, PSP-3000 y PSP Street: usa la carpeta standard.",
                    "PSP Go: usa la carpeta pspgo.",
                    "No mezcles archivos de ambas carpetas; sigue el README de la versión descargada."
                ]
            },
            {
                title: "Descargas y documentación",

                description:
                    "El repositorio de Infinity es la fuente del desarrollador. El paquete PRO-C2 se enlaza desde el mirror usado por el tutorial.",

                items: [
                    "Antes de instalar, lee el README de Infinity y confirma que la consola esté en firmware 6.60 o 6.61.",
                    "El enlace MEGA de PRO-C2 es un espejo, no una descarga alojada por el desarrollador.",
                    "Si ya tienes Infinity anterior a 2.0, el README del autor indica desinstalarla primero con Chronoswitch 7 o posterior."
                ]
            }
        ]
    },

    website: "https://github.com/DaveeFTW/Infinity",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/7c5FwKLR#tdEqfRuInhfUYxXUro6Czg"
        },
        {
            name: "GitHub Releases",
            url: "https://github.com/DaveeFTW/Infinity"
        }
    ]
},
// ARK-4
{
    console: "PSP",

    name: "ARK-4",

    image: "img/PSP/ARK-4.jpg",

    description:
        "Custom Firmware para PSP con soporte de homebrew, plugins y juegos en formatos ISO, CSO y ZSO. Puede ejecutarse como Live CFW o instalarse de forma permanente con cIPL.",

    guide: {

        function:
            "ARK-4 es un Custom Firmware para PSP y ePSP. Esta guía describe la instalación en una PSP; la instalación en PS Vita requiere pasos diferentes.",

        compatibility: {
            "Modelos PSP": "Compatible con PSP-1000, 2000, 3000, Go y Street; el proyecto excluye el modelo Strider2.",
            Firmware: "La documentación de ARK-4 contempla firmware oficial 6.60 y 6.61.",
            Permanencia: "El instalador cIPL ofrece CFW permanente y selecciona la variante adecuada para el modelo."
        },

        requirements: [
            "PSP compatible con ARK-4 y firmware 6.60 o 6.61.",
            "PC y cable USB, o lector de tarjetas para transferir los archivos.",
            "Memory Stick con espacio libre.",
            "Batería cargada y adaptador de corriente conectado durante la instalación.",
            "Copia de seguridad de partidas y archivos importantes."
        ],

        installation: [
            "Descarga y extrae la release v4.20.69 r206 desde GitHub; lee el README incluido antes de instalar.",
            "En una PSP con firmware oficial, copia la carpeta ARK_01234 a PSP/SAVEDATA/ y ARK_Loader a PSP/GAME/.",
            "Abre ARK Loader desde Juego > Memory Stick para iniciar ARK como Live CFW.",
            "Para una instalación permanente, copia ARK_cIPL a PSP/GAME/ y ejecuta el instalador desde el XMB.",
            "Confirma la opción de instalación indicada para tu modelo y espera a que el proceso termine sin apagar ni desconectar la consola.",
            "Reinicia la PSP y comprueba que ARK se cargue sin ejecutar ARK Loader manualmente."
        ],

        usage:
            "Desde ARK puedes ejecutar homebrew, gestionar plugins y usar el lanzador y las funciones incluidas. La disponibilidad de algunas funciones depende del tipo de instalación.",

        notes:
            "El repositorio de ARK-4 fue archivado el 2 de agosto de 2026 y ya no recibe mantenimiento. La release v4.20.69 r206 es la última oficial; su autor enlaza ARK-5 como sucesor. cIPL modifica el arranque de la consola: verifica el modelo, sigue el README de la release y no interrumpas el proceso. Para PSP Vita/ePSP no uses esta guía de instalación para PSP.",

        version: "v4.20.69 r206 (última release oficial)",

        author: "PSP-Archive / JoseAaronLopezGarcia",

        details: [
            {
                title: "Live CFW y CFW permanente",

                description:
                    "La instalación con ARK Loader desde firmware oficial funciona como Live CFW. Para iniciarlo después de cada apagado completo hay que volver a ejecutar el loader.",

                items: [
                    "Para convertirlo en permanente, la documentación del proyecto indica instalar cIPL con ARK_cIPL.",
                    "El instalador cIPL identifica el modelo y ofrece la variante compatible; no fuerces una variante distinta.",
                    "Si ya tienes PRO/ME u otro CFW, sigue la sección de actualización desde CFW del README en lugar de mezclar los pasos de instalación desde OFW."
                ]
            },
            {
                title: "Estado del proyecto",

                description:
                    "El repositorio enlazado corresponde al archivo de ARK-4 y conserva su última release oficial.",

                items: [
                    "Lee el changelog y confirma que el archivo descargado corresponda a v4.20.69 r206.",
                    "El proyecto sucesor anunciado por el autor es <a href=\"https://github.com/PSP-Arkfive/ARK-5\" target=\"_blank\" rel=\"noopener noreferrer\">ARK-5</a>."
                ]
            }
        ]
    },

    website: "https://github.com/PSP-Archive/ARK-4",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/mIgDHRQa#biyYe0i1UU9GjVkCBhtHYQ"
        },
        {
            name: "GitHub Releases",
            url: "https://github.com/PSP-Archive/ARK-4/releases"
        }
    ]
},
// PSP-PDA
{
    console: "PSP",

    name: "PSP-PDA Agenda Digital",

    image: "img/PSP/PSP-PDA.jpg",

    description:
        "Paquete de aplicaciones de agenda digital para PSP: calendario, libreta de direcciones, notas, calculadora, reloj, música e imágenes.",

    guide: {

        function:
            "PSP-PDA reúne varias herramientas tipo PDA en una sola aplicación para la consola.",

        compatibility: {
            "PSP FAT": "El autor menciona soporte para firmware 3.x y una corrección para firmware 3.80 o superior.",
            "PSP Slim": "El autor indica que debería funcionar con PSP Slim y firmware 3.x.",
            "PSP Go/Street": "No se confirma compatibilidad en la publicación original."
        },

        requirements: [
            "PSP con acceso a homebrew compatible con la aplicación.",
            "PC y cable USB, o lector de tarjetas para transferir los archivos.",
            "Memory Stick con espacio libre."
        ],

        installation: [
            "Descarga PSP-PDA v1.3.2-fw3x y extrae el archivo ZIP.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "Comprueba que la aplicación esté en PSP/GAME/psppda/.",
            "En la consola, ve a Juego > Memory Stick y abre PSP-PDA v1.3.2-fw3x."
        ],

        usage:
            "Desde la aplicación puedes abrir la agenda, calendario, calculadora, reloj/alarma, reproductor de música, visor de imágenes, administrador de archivos y bloc de notas.",

        notes:
            "Es una aplicación homebrew antigua, no un programa oficial de Sony. La descarga fw3x del autor indica compatibilidad con firmware 3.x; para firmware 1.50 existe un paquete distinto. La PSP debe poder ejecutar homebrew.",

        version: "v1.3.2",

        author: "Rob_psp (publicado por Zx-81)",

        details: [
            {
                title: "Funciones incluidas",

                description:
                    "El paquete agrupa utilidades básicas para usar la PSP como agenda digital.",

                items: [
                    "Bloc de notas y libreta de direcciones.",
                    "Calendario, calculadora y reloj/alarma.",
                    "Reproductor de música, visor de imágenes y administrador de archivos."
                ]
            },
            {
                title: "Descargas y compatibilidad",

                description:
                    "La publicación del autor ofrece paquetes distintos según el firmware.",

                items: [
                    "Para el tutorial, descarga la versión fw3x.",
                    "El autor ofrece además una compilación fw15, destinada a firmware 1.50.",
                    "La publicación original describe el soporte para PSP Slim como esperado; verifica el funcionamiento en tu modelo."
                ]
            }
        ]
    },

    website:
        "http://zx81.zx81.free.fr/serendipity/index.php?/archives/313-PSP-PDA-A-set-of-PDA-applications-for-PSP-v1.3.2.html",

    downloads: [
        {
            name: "PSP-PDA v1.3.2 fw3x",
            url: "http://zx81.zx81.free.fr/public/psp/psppda/psppda-v1.3.2-fw3x.zip"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/uMxHxDbZ#8P0Qu2sV9zH5052KZzurgA"
        }
    ]
},
// AirCrack-PSP
{
    console: "PSP",

    name: "AirCrack-PSP (referencia histórica)",

    image: "img/PSP/AirCrack-PSP.jpg",

    description:
        "Referencia informativa sobre una antigua herramienta de análisis Wi-Fi para PSP. No se incluyen descargas ni instrucciones para capturar tráfico o recuperar claves.",

    guide: {

        function:
            "El tutorial la presenta como una herramienta relacionada con el análisis de contraseñas Wi-Fi. Esta ficha se limita a contexto histórico y recomendaciones de seguridad.",

        compatibility: {
            PSP: "La compatibilidad concreta depende del modelo, firmware y accesorios; no se verifica aquí.",
            RedesActuales: "No se debe asumir compatibilidad ni eficacia con estándares o equipos modernos.",
        },

        requirements: [
            "Utiliza cualquier prueba de seguridad únicamente en redes propias o con autorización explícita."
        ],

        installation: [
            "Esta ficha no proporciona descargas ni pasos operativos de instalación o auditoría."
        ],

        usage:
            "Para proteger tu red, utiliza el panel de administración del router y sus herramientas de diagnóstico oficiales.",

        notes:
            "El contenido fuente describe funciones de descifrado de contraseñas. Por seguridad, esta tarjeta no enlaza la descarga ni reproduce instrucciones que faciliten el acceso a redes Wi-Fi.",

        version: "test 0.52 (según el tutorial)",

        author: "No confirmado",

        details: [
            {
                title: "Recomendaciones para proteger tu Wi-Fi",

                description:
                    "Medidas defensivas generales para la red propia, sin usar herramientas de captura o recuperación de claves.",

                items: [
                    "Activa WPA3-Personal o WPA2-AES si WPA3 no está disponible.",
                    "Usa una contraseña larga, única y distinta de la clave de administración del router.",
                    "Desactiva WPS si no lo necesitas y mantén actualizado el firmware del router.",
                    "Crea una red de invitados para dispositivos que no sean de confianza."
                ]
            }
        ]
    },

    website:
        "https://www.gamebrew.org/wiki/AirCrack-PSP",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/DUQHiCBZ#33v9jkSi4O_cacm8un3JHA"
        }
    ]
},

// PSP Hardware Alarm Suite II
{
    console: "PSP",

    name: "PSP Hardware Alarm Suite II",

    image: "img/PSP/Alarma.jpg",

    description:
        "Aplicación de alarma para PSP, con alertas en modo de suspensión y, mediante un plugin incluido, en modo de apagado en espera.",

    guide: {

        function:
            "PSP Hardware Alarm Suite II usa las capacidades de la consola para programar alarmas y puede sincronizar la hora por Internet.",

        compatibility: {
            Modelos: "GameBrew indica compatibilidad con todos los modelos PSP, incluidos Slim y Light.",
            Kernel: "Aplicación homebrew para kernel 3.xx/4.xx.",
            "Alarma en espera": "Requiere el plugin HAPoweroffSupport incluido en el paquete."
        },

        requirements: [
            "PSP con Custom Firmware que pueda ejecutar aplicaciones homebrew de kernel 3.xx/4.xx.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos.",
            "Para la alarma en modo de apagado en espera: instalar y activar HAPoweroffSupport."
        ],

        installation: [
            "Descarga y extrae PSP Hardware Alarm Suite II 2.7 bld 1730.",
            "Copia la carpeta HaSuite2 a PSP/GAME/ en la Memory Stick; el kernel debe estar configurado como 3.xx/4.xx.",
            "Para activar la alarma en modo de apagado en espera, copia el plugin HAPoweroffSupport incluido y configúralo según las instrucciones del paquete.",
            "Si el paquete incluye una entrada para seplugins/vsh.txt y ya tienes ese archivo, conserva su contenido y agrega la entrada en una línea nueva; no sobrescribas la configuración existente.",
            "Abre HaSuite2 desde Juego > Memory Stick."
        ],

        usage:
            "Programa la hora de la alarma desde la aplicación. En suspensión puede reproducir un MP3 personalizado llamado Alarm.mp3 dentro de la carpeta de HaSuite2.",

        notes:
            "El modo de apagado necesita HAPoweroffSupport; sin ese plugin la alarma no sonará al despertar desde ese estado. En el tutorial local aparece por error la carpeta «AirCrack-PSP by Devasth» y el nombre AirCrack-PSP: el paquete y la aplicación de alarma corresponden a HaSuite2. No es lo mismo que apagar completamente la consola desconectando la batería.",

        version: "2.7 bld 1730",

        author: "Mr305",

        details: [
            {
                title: "Modos de alarma",

                description:
                    "La aplicación distingue entre suspensión y apagado en espera.",

                items: [
                    "En suspensión, la alarma puede usar un MP3 personalizado llamado Alarm.mp3.",
                    "En modo de apagado en espera, HAPoweroffSupport es necesario para que la PSP despierte y reproduzca la alarma.",
                    "La alarma se puede programar hasta 23 horas y 59 minutos por adelantado."
                ]
            },
            {
                title: "Sincronización y solución de problemas",

                description:
                    "La sincronización horaria utiliza servidores NIST y la configuración regional del archivo Config_Hasuite.ini.",

                items: [
                    "Configura la región horaria en Config_Hasuite.ini si vas a sincronizar la hora por Internet.",
                    "Si la sincronización queda bloqueada sin mostrar un diálogo, la ficha de GameBrew indica que Triángulo + Cuadrado fuerza el cierre."
                ]
            }
        ]
    },

    website: "https://www.gamebrew.org/wiki/PSP_Hardware_Alarm_Suite_II",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/7QZVxYhT#XU3VEQZ-r8MQGe-Ps7XkBw"
        }
    ]
},

// PSP UVC para OBS
{
    console: "PSP",

    name: "PSP con OBS (USB Video Class)",

    image: "img/PSP/PSPOBS.jpg",

    description:
        "Plugin UVC de prueba de concepto que transmite la pantalla de la PSP al PC por USB para capturarla en OBS.",

    guide: {

        function:
            "El plugin hace que la PSP aparezca en el PC como una fuente de video USB compatible con UVC.",

        compatibility: {
            "PSP": "Requiere Custom Firmware con soporte para plugins PRX.",
            "Video":             "Formato YUY2 a 480x272; 30 FPS y 60 FPS en desarrollo.",
            "PC": "UVC funciona en distintos sistemas operativos; la guía del tutorial usa OBS en Windows."
        },

        requirements: [
            "PSP con Custom Firmware y soporte para plugins.",
            "Cable USB de datos compatible con la PSP.",
            "PC con OBS Studio y soporte UVC.",
            "Para incluir audio, un método de captura de audio separado: el plugin no transmite sonido por USB."
        ],

        installation: [
            "Descarga uvc.prx desde las releases del repositorio y cópialo a ms0:/seplugins/.",
            "Si ya existe ms0:/seplugins/VSH.TXT o GAME.TXT, conserva su contenido y agrega ms0:/seplugins/uvc.prx en una línea nueva; habilita VSH, GAME o ambos según lo que quieras capturar.",
            "Reinicia la PSP y, desde Recovery > Plugins del CFW, habilita uvc.prx [VSH] y/o [GAME] según lo que quieras capturar.",
            "Conecta la PSP al PC por USB y abre OBS Studio.",
            "En OBS, agrega una fuente Dispositivo de captura de video y selecciona USB Video Device."
        ],

        usage:
            "Selecciona la fuente UVC en OBS para ver, grabar o transmitir la pantalla de la PSP. Prueba los ajustes de video disponibles en OBS; el rendimiento puede variar.",

        notes:
            "El proyecto se identifica como prueba de concepto y su release 0.2 es de calidad alpha. La conversión de video puede causar baja tasa de cuadros o latencia; 60 FPS figura como trabajo en curso. El audio no viaja por USB. En Windows, habilita el acceso a la cámara para las aplicaciones de escritorio si OBS no detecta el dispositivo.",

        version: "0.2 (Proof of concept)",

        author: "xerpi",

        details: [
            {
                title: "Plugin y archivos de configuración",

                description:
                    "El README del proyecto permite habilitar el plugin en VSH.TXT y/o GAME.TXT.",

                items: [
                    "Usa VSH.TXT para capturar el XMB y GAME.TXT para capturar durante los juegos.",
                    "No reemplaces los archivos de configuración que ya tengas: agrega la ruta del plugin en una línea aparte.",
                    "Si la PSP no inicia correctamente, el tutorial recomienda arrancar manteniendo R para entrar al modo de recuperación."
                ]
            },
            {
                title: "Límites de captura",

                description:
                    "El plugin transmite video UVC, no audio.",

                items: [
                    "Resolución publicada: 480x272 en YUY2.",
                    "La referencia de 60 FPS está marcada como WIP; el rendimiento real puede ser inferior.",
                    "Captura el audio por separado desde la salida analógica de la PSP si necesitas grabar imagen y sonido."
                ]
            }
        ]
    },

    website: "https://github.com/xerpi/psp-uvc-usb-video-class",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/xerpi/psp-uvc-usb-video-class/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/nYhTSD5Z#Qi5DIhd_ukk6_ie6O0z9eA"
        }
    ]
},

// Chronoswitch
{
    console: "PSP",

    name: "Chronoswitch Downgrader",

    image: "img/PSP/Chronoswitch.jpg",

    description:
        "Utilidad homebrew para reinstalar o bajar el firmware oficial de PSP cuando el modelo y la placa admiten la versión de destino.",

    guide: {

        function:
            "Chronoswitch inicia el instalador oficial del firmware seleccionado. La compatibilidad del downgrade depende del modelo y la placa base de la PSP.",

        compatibility: {
            PSP: "Compatible con varios modelos y firmwares; el instalador comprueba el modelo y el archivo de firmware.",
            "PSP Go": "Usa exclusivamente el firmware oficial de PSP Go; puede colocarse en almacenamiento interno o Memory Stick.",
            "Placas 09g": "No se admite bajar de firmware 6.30.",
            "Placas 07g": "El soporte para firmware 6.6x se marca como experimental."
        },

        requirements: [
            "PSP con modelo y placa compatibles con la versión de firmware de destino.",
            "Archivo Chronoswitch extraído en la Memory Stick.",
            "EBOOT.PBP oficial y correspondiente exactamente al modelo y firmware que se instalará.",
            "Batería cargada y adaptador de corriente conectado durante el proceso.",
            "Copia de seguridad de partidas y datos importantes."
        ],

        installation: [
            "Lee las limitaciones de tu modelo y placa antes de elegir una versión de destino; no todas las PSP pueden instalar cualquier firmware.",
            "Descarga la versión más reciente de Chronoswitch y extrae el contenido.",
            "Copia la carpeta PSP del paquete a la raíz de la Memory Stick.",
            "Copia el EBOOT.PBP oficial del firmware de destino a PSP/GAME/UPDATE/EBOOT.PBP. En PSP Go, utiliza el archivo específico para ese modelo.",
            "Desde Juego > Memory Stick, abre Chronoswitch Downgrader y sigue las indicaciones que aparecen en la consola.",
            "No apagues ni desconectes la PSP durante la instalación; al terminar, confirma la versión en Información del sistema."
        ],

        usage:
            "Se usa para volver a una versión oficial compatible o reinstalar el firmware en los casos admitidos. No es una herramienta para instalar un Custom Firmware.",

        notes:
            "Un downgrade a un firmware no compatible puede bloquear la consola. El tutorial local menciona Chronoswitch 7.0; el repositorio krazynez fue archivado y redirige al proyecto PSP-Archive, cuya versión más reciente consultada es 7.6.5. No uses firmware de PSP Go en otros modelos ni al revés.",

        version: "7.6.5",

        author: "krazynez / PSP-Archive",

        details: [
            {
                title: "Límites por placa",

                description:
                    "La placa base determina qué firmware puede instalarse. Chronoswitch detecta el modelo y valida el archivo, pero esto no hace seguros todos los downgrades.",

                items: [
                    "La documentación indica que las placas 09g no pueden bajar de 6.30.",
                    "El soporte experimental de placas 07g en firmware 6.6x requiere especial cautela.",
                    "Comprueba el modelo y la versión de destino en la documentación antes de iniciar."
                ]
            },
            {
                title: "Repositorios y versión",

                description:
                    "El enlace krazynez/Chronoswitch proporcionado en el tutorial está archivado y el README apunta al repositorio de PSP-Archive.",

                items: [
                    "El tutorial utiliza Chronoswitch 7.0; para nuevas instalaciones, consulta la release actual de PSP-Archive.",
                    "Chronoswitch necesita el EBOOT.PBP oficial de destino, que no viene incluido en la descarga del programa.",
                    "La utilidad también se cita como método para retirar versiones de Infinity anteriores a 2.0 cuando la guía de Infinity así lo requiera."
                ]
            }
        ]
    },

    website: "https://github.com/PSP-Archive/Chronoswitch",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/PSP-Archive/Chronoswitch/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/PM5yGaKI#PjSjDPghquA03tNoUBlrgg"
        }
    ]
},

// CIPL Flasher para PRO-C
{
    console: "PSP",

    name: "CIPL Flasher para PRO-C",

    image: "img/PSP/CIPLFlasher.jpg",

    description:
        "Utilidad del Custom Firmware PRO-C para hacer permanente el arranque del CFW en determinadas PSP con placa compatible.",

    guide: {

        function:
            "CIPL Flasher instala el cargador de PRO-C en el IPL de la PSP para que el Custom Firmware se active al encender la consola.",

        compatibility: {
            "PSP-1000": "Compatible según el tutorial con las placas compatibles.",
            "PSP-2000": "Solo placas antiguas compatibles; TA-088v3 no es compatible.",
            "PSP-3000/Go/Street": "No compatibles con este CIPL Flasher de PRO-C.",
            "CFW requerido": "Requiere PRO-C/PRO-C2 ya instalado y funcionando."
        },

        requirements: [
            "PSP-1000 o PSP-2000 con placa base confirmada como compatible.",
            "Custom Firmware PRO-C/PRO-C2 compatible ya instalado.",
            "Memory Stick con el CIPL Flasher.",
            "Batería cargada, cargador conectado y copia de seguridad de datos importantes."
        ],

        installation: [
            "Confirma el modelo y la placa base antes de ejecutar el flasher; no te bases solo en la apariencia exterior de la consola.",
            "Descarga y extrae CIPL_Flasher.rar.",
            "Copia la carpeta PSP del archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre CIPL Flasher For PRO-C únicamente si la placa está en la lista compatible.",
            "Sigue las indicaciones del programa sin apagar ni desconectar la PSP y reinicia al terminar para comprobar que PRO-C inicia automáticamente."
        ],

        usage:
            "Una vez instalado correctamente, PRO-C se activa al iniciar la PSP sin tener que ejecutar PROUPDATE o FastRecovery después de cada apagado completo.",

        notes:
            "Este CIPL Flasher pertenece a PRO-C y no es el instalador cIPL de ARK-4. No lo ejecutes en PSP-2000 TA-088v3, PSP-3000, PSP Go ni PSP Street/E1000: instalar un IPL incompatible puede dejar la consola inutilizable. Usa solo el método de permanencia admitido por el CFW y la placa de tu consola.",

        version: "Paquete CIPL_Flasher del tutorial",

        author: "PRO Team",

        details: [
            {
                title: "Placas indicadas como compatibles",

                description:
                    "El tutorial enumera estas placas para PRO-C2 y excluye las revisiones posteriores incompatibles.",

                items: [
                    "TA-079 v1/v2, TA-081, TA-082, TA-085 v1/v2 y TA-086.",
                    "TA-088 v1/v2: compatibles según el tutorial.",
                    "TA-088v3: no compatible con este flasher."
                ]
            },
            {
                title: "Diferencia con otros métodos",

                description:
                    "El nombre CIPL también aparece en otros Custom Firmware, pero no todos los instaladores comparten compatibilidad.",

                items: [
                    "No uses las instrucciones de ARK_cIPL con CIPL Flasher para PRO-C ni al revés.",
                    "Para PSP-3000, PSP Go, PSP Street o placas incompatibles, consulta un método específicamente compatible en vez de forzar este flasher.",
                    "El tutorial local recomienda no usar este método salvo que hayas confirmado la compatibilidad de hardware."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/3c4lTQ5T#GibE2UnEiwQ44zEgWbVgRA"
        }
    ]
},

// CWCheat
{
    console: "PSP",

    name: "CWCheat Trucos y Base de Datos",

    image: "img/PSP/CWCheat.jpg",

    description:
        "Plugin homebrew para activar códigos de trucos en juegos de PSP y una base de datos comunitaria para CWCheat y PPSSPP.",

    guide: {

        function:
            "CWCheat muestra un menú de códigos durante el juego. La base de datos incluye trucos asociados al identificador de cada título.",

        compatibility: {
            "CWCheat": "Plugin 0.2.3 mod; GameBrew indica soporte para firmware 6.20 a 6.60.",
            "PSP": "Requiere Custom Firmware con soporte para plugins.",
            "PSP Go": "Usa la ruta ef0:/seplugins en el almacenamiento interno, o ms0:/ en Memory Stick.",
            "PPSSPP": "La base de datos CWCheat puede utilizarse también con PPSSPP."
        },

        requirements: [
            "PSP con Custom Firmware compatible con CWCheat.",
            "PC y cable USB, o lector de tarjetas para transferir los archivos.",
            "Espacio disponible en la Memory Stick o almacenamiento interno de PSP Go."
        ],

        installation: [
            "Descarga y extrae el paquete CWCheat 0.2.3 mod.",
            "Copia la carpeta cwcheat del paquete a ms0:/seplugins/cwcheat/; en PSP Go puedes usar ef0:/seplugins/cwcheat/.",
            "Agrega ms0:/seplugins/cwcheat/cwcheat.prx 1 a vsh.txt y game.txt. En PSP Go reemplaza ms0:/ por ef0:/.",
            "Para juegos PS1/POPS, agrega la ruta cwcheatpops.prx a pops.txt solo si vas a usar esa función.",
            "Si ya existen archivos de configuración de plugins, conserva su contenido y agrega las nuevas líneas sin sobrescribirlos.",
            "Reinicia la PSP y habilita cwcheat.prx desde Recovery > Plugins del Custom Firmware."
        ],

        usage:
            "Inicia el juego, espera a que cargue y mantén Select unos 3 segundos para abrir el menú. Elige los códigos disponibles para ese título y actívalos o desactívalos desde CWCheat.",

        notes:
            "Los códigos deben coincidir con el ID exacto del juego; códigos incorrectos pueden congelar o cerrar el juego. La base de datos de GitHub contiene cheat.db; la base de códigos POPS para juegos PS1 es independiente. CWCheat 0.2.3 es antiguo y sus parches dependen del firmware y CFW.",

        version: "CWCheat 0.2.3 mod + CWCheat Database Plus",

        author: "Weltall / Takka; base de datos por Saramagrean",

        details: [
            {
                title: "Archivos de plugins",

                description:
                    "CWCheat utiliza distintos módulos para juegos de PSP y para POPS (juegos PS1).",

                items: [
                    "cwcheat.prx se habilita en game.txt; vsh.txt es opcional para mostrar el plugin en el XMB.",
                    "cwcheatpops.prx se habilita en pops.txt para juegos PS1.",
                    "El tutorial también menciona game150.txt para entornos antiguos; usa solo las entradas necesarias para tu Custom Firmware."
                ]
            },
            {
                title: "Base de datos y códigos",

                description:
                    "El repositorio CWCheat Database Plus publica un archivo cheat.db para PSP y PPSSPP.",

                items: [
                    "Copia cheat.db a la carpeta cwcheat que utiliza el plugin y conserva una copia anterior por si necesitas restaurarla.",
                    "El ID del juego debe coincidir con el de la entrada de la base de datos.",
                    "Para añadir códigos personalizados, usa un editor de texto y respalda la base de datos antes de modificarla."
                ]
            }
        ]
    },

    website: "https://github.com/Saramagrean/CWCheat-Database-Plus-",

    downloads: [
        {
            name: "GitHub Archive",
            url: "https://github.com/Saramagrean/CWCheat-Database-Plus-/archive/master.zip"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/aNw1hDKD#14cKh-EHmSsNC89wtGV3Yg"
        }
    ]
},

// FuSa GAMEPAD
{
    console: "PSP",

    name: "FuSa GAMEPAD",

    image: "img/PSP/FuSaGAMEPAD.jpg",

    description:
        "Convierte la PSP en un mando USB HID para juegos de PC y PS3, sin instalar controladores adicionales.",

    guide: {

        function:
            "FuSa GAMEPAD envía los controles de la PSP al PC o a PS3 como un gamepad USB estándar.",

        compatibility: {
            PSP: "La release v0.3 indica compatibilidad con PSP que ejecuten kernel 5.00 o superior.",
            "PSP FAT": "En modelos FAT, usa la carpeta GAME5XX correspondiente al kernel.",
            "PSP Slim/3000": "Compatible según el README del proyecto.",
            PC: "Funciona como dispositivo HID; el proyecto indica soporte para Windows, macOS y Linux.",
            PS3: "El README indica compatibilidad mediante USB."
        },

        requirements: [
            "PSP con Custom Firmware capaz de ejecutar homebrew en kernel 5.00 o superior.",
            "Cable USB de datos compatible con la PSP.",
            "PC o consola PS3 con puerto USB disponible."
        ],

        installation: [
            "Descarga y extrae FuSa GAMEPAD v0.3.",
            "En la PSP, copia FusaGamePad a PSP/GAME/; en una PSP FAT, sigue el README y usa PSP/GAME5XX/ para el kernel correspondiente.",
            "Abre FuSa GAMEPAD desde Juego > Memory Stick.",
            "Conecta la PSP al PC o PS3 con un cable USB; el sistema debería detectarla como mando HID sin instalar drivers.",
            "Si el mando no aparece, comprueba que el cable transmita datos y que el homebrew siga ejecutándose."
        ],

        usage:
            "Usa los botones y el stick de la PSP como controles del mando conectado. Al conectar USB, la pantalla de la PSP se apaga automáticamente después de unos 7 segundos.",

        notes:
            "Es un homebrew antiguo. El README recomienda kernel 5.00 o superior para v0.3; el tutorial incluye también el archivo v0.2, por lo que conviene usar v0.3. La carpeta de instalación de PSP FAT puede diferir de la de los otros modelos.",

        version: "v0.3",

        author: "Andy_maN / FuSa Team",

        details: [
            {
                title: "Controles y ejes",

                description:
                    "El dispositivo expone cuatro ejes, un POV digital de ocho direcciones y doce botones.",

                items: [
                    "Incluye los cuatro botones frontales, L/R, Start, Select, Home, volumen y Display.",
                    "AxiSwitcher alterna el uso de los ejes analógicos X/Y y Z/Rz.",
                    "DigitalSwitcher cambia entre modos analógico y digital.",
                    "La zona muerta del stick se ajusta en CONFIG.INI con valores de 0 a 127."
                ]
            },
            {
                title: "Menú de FuSa GAMEPAD",

                description:
                    "Para abrir el menú de configuración, desconecta el USB y pulsa HOME.",

                items: [
                    "Pulsa HOME o Círculo para salir del menú.",
                    "Pulsa X para cerrar la aplicación.",
                    "En v0.3, CONFIG.INI permite cambiar la asignación de botones."
                ]
            }
        ]
    },

    website: "https://github.com/andy-man/psp-fusa-gamepad",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/andy-man/psp-fusa-gamepad/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/CJIx2bpK#9Ns6v8ovWUwbboutvCEyjA"
        }
    ]
},

// PSPLight
{
    console: "PSP",

    name: "PSPLight Linterna",

    image: "img/PSP/PSPLinterna.jpg",

    description:
        "Aplicación homebrew que convierte la pantalla de la PSP en una linterna y ofrece efectos de luz y una función de pixel fixer.",

    guide: {

        function:
            "PSPLight 3.0 muestra patrones luminosos en la pantalla y añade efectos de emergencia y policía, además de una animación para intentar reactivar píxeles.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; GameBrew no especifica modelos o firmware mínimos.",
            Idiomas: "Inglés y francés."
        },

        requirements: [
            "PSP con capacidad para ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Descarga y extrae PSPLight 3.0.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, inicia PSPLight o el lanzador incluido por el paquete.",
            "El tutorial local menciona LuaPlayer Plus; si el archivo descargado solo incluye un script Lua, ábrelo con una versión compatible del reproductor."
        ],

        usage:
            "Usa la cruceta para cambiar el color y los botones para activar o salir de los distintos efectos.",

        notes:
            "La linterna usa la pantalla de la PSP, no un flash dedicado. Pixel fixer reproduce una animación y no garantiza reparar píxeles defectuosos. La aplicación puede aumentar el consumo de batería mientras la pantalla permanece encendida.",

        version: "3.0",

        author: "Virus / Saliom",

        details: [
            {
                title: "Controles",

                description:
                    "Los controles publicados por GameBrew son:",

                items: [
                    "X: encender o apagar la linterna.",
                    "Cruceta: cambiar el color.",
                    "Círculo: luces de emergencia; Cuadrado: luces policiales.",
                    "R: abrir Pixel fixer; Start: ayuda; Select: cambiar idioma; Triángulo: salir."
                ]
            },
            {
                title: "Referencia y paquete",

                description:
                    "GameBrew cataloga PSPLight como homebrew versión 3.0 y enlaza su archivo comprimido.",

                items: [
                    "El tutorial local indica iniciar LuaPlayer Plus, mientras que la ficha de GameBrew presenta PSPLight como la aplicación; comprueba el contenido del paquete descargado."
                ]
            }
        ]
    },

    website: "https://www.gamebrew.org/wiki/PSPLight",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/LMY3ybbZ#MvGjMHfX4HFOgkLftRgSEw"
        }
    ]
},

// LIVE TV
{
    console: "PSP",

    name: "PSP LIVE TV",

    image: "img/PSP/LIVETV.jpg",

    description:
        "Aplicación homebrew antigua que permite reproducir televisión por streaming en la PSP mediante una conexión Wi-Fi.",

    guide: {

        function:
            "PSP LIVE TV está pensada para ver contenido de televisión en streaming desde la consola. La disponibilidad depende de que la PSP pueda conectarse a Internet y de que los flujos sigan activos y sean compatibles.",

        compatibility: {
            PSP: "Homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos.",
            Red: "Requiere conexión Wi-Fi con acceso a Internet."
        },

        requirements: [
            "PSP con Wi-Fi y acceso a Internet.",
            "PC o lector de tarjetas para transferir los archivos.",
            "Memory Stick con espacio libre."
        ],

        installation: [
            "Descarga y extrae PSP LIVE TV.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre PSP Live TV."
        ],

        usage:
            "Conecta la PSP a una red Wi-Fi con Internet y abre PSP Live TV. El tutorial no documenta controles ni configuración adicional.",

        notes:
            "Es una aplicación antigua. El tutorial no identifica el origen de los canales ni garantiza que los enlaces de streaming sigan activos; la reproducción también depende de los formatos y servicios que aún sean compatibles con la aplicación.",

        version: "No especificada en el tutorial",

        details: [
            {
                title: "Sobre la transmisión",

                description:
                    "La tarjeta refleja únicamente lo indicado en el tutorial local: ver televisión por streaming usando Wi-Fi.",

                items: [
                    "No se incluyen listas de canales ni servicios de terceros.",
                    "La conexión Wi-Fi por sí sola no garantiza que se reproduzca contenido; se necesita una fuente de streaming activa y compatible."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/uFRxABrB#ZJXbQ8U8gChSC2vuBcgWqg"
        }
    ]
},

// MapViewer
{
    console: "PSP",

    name: "MapViewer Mapa de Santiago",

    image: "img/PSP/MapViewer.jpg",

    description:
        "MapThis! GPS Edition con un mapa de Santiago de Chile para consultar desde la PSP. El mapa incluido no está actualizado.",

    guide: {

        function:
            "Permite abrir en la PSP el mapa de Santiago incluido en el paquete. El tutorial no documenta funciones de navegación ni el uso de GPS.",

        compatibility: {
            PSP: "Homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Descarga y extrae Mapa de Santiago.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "Comprueba que los archivos queden en PSP/GAME/mapViewer.",
            "En Juego > Memory Stick, abre Map this! GPS Edition."
        ],

        usage:
            "Inicia Map this! GPS Edition desde el menú Juego de la PSP para consultar el mapa incluido.",

        notes:
            "El tutorial advierte que el mapa no está actualizado al día de hoy. No se indican fecha de los datos, cobertura detallada ni requisitos de GPS; no debe usarse como fuente de navegación actual.",

        version: "No especificada en el tutorial",

        details: [
            {
                title: "Mapa incluido",

                description:
                    "El paquete se presenta como un mapa de Santiago de Chile y la carpeta de la aplicación se llama mapViewer.",

                items: [
                    "El nombre que indica el tutorial en el menú de la PSP es Map this! GPS Edition.",
                    "No se incluyen datos sobre actualización, rutas ni puntos de interés."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/bd4nUKba#_RPvh83gFplMlhKqeBSnWA"
        }
    ]
},

// Navegador HTML
{
    console: "PSP",

    name: "Navegador HTML — NetFront p86 Mod",

    image: "img/PSP/NavegadorHTML.jpg",

    description:
        "Paquete de navegador para PSP basado en NetFront Internet Browser p86 Mod, distribuido en la carpeta HtmlMax_Eng.",

    guide: {

        function:
            "Permite abrir páginas web desde la PSP mediante su conexión Wi-Fi. Aunque el tutorial lo promociona como Chrome, la aplicación que se muestra en el menú es NetFront Internet Browser p86 Mod; no es Google Chrome.",

        compatibility: {
            PSP: "El tutorial afirma que funciona con PSP con o sin Custom Firmware; no especifica modelos ni versiones de firmware."
        },

        requirements: [
            "PSP con Wi-Fi y acceso a Internet.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Descarga y extrae el paquete Navegador HTML (carpeta HtmlMax_Eng).",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre netFront internet Browser – p86 Mod."
        ],

        usage:
            "Conecta la PSP a una red Wi-Fi con Internet y abre el navegador desde Juego > Memory Stick.",

        notes:
            "Es un navegador antiguo y puede no abrir sitios modernos por limitaciones de seguridad, certificados, memoria o compatibilidad web. El tutorial no especifica versión ni controles detallados.",

        version: "No especificada en el tutorial",

        details: [
            {
                title: "Identificación",

                description:
                    "El archivo se llama HtmlMax_Eng y el tutorial indica que la aplicación aparece como NetFront Internet Browser – p86 Mod.",

                items: [
                    "La referencia a Chrome en el tutorial es promocional; el navegador instalado no es Google Chrome.",
                    "El acceso a Internet y la compatibilidad con cada sitio dependen de la red Wi-Fi y de las tecnologías web admitidas por este navegador antiguo."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/Scoi1BwQ#PIEe_NMzpJbrT23brrD4OA"
        }
    ]
},

// NitePR
{
    console: "PSP",

    name: "NitePR Trucos",

    image: "img/PSP/NitePrTrucos.jpg",

    description:
        "Plugin de trucos para PSP con menú en el juego, editor de códigos y herramientas para buscar y modificar valores de memoria.",

    guide: {

        function:
            "NitePR RevK Stable permite cargar trucos asociados al ID de cada juego y ofrece herramientas como búsqueda de valores, editor de memoria y códigos normales, pointer y freeze.",

        compatibility: {
            PSP: "Plugin antiguo para Custom Firmware; GameBrew indica pruebas en 3.90 M33 y 5.00 M33. No confirma compatibilidad con CFW actuales."
        },

        requirements: [
            "PSP con Custom Firmware compatible con plugins de juego.",
            "ID exacto del juego para crear o instalar el archivo de trucos.",
            "PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Extrae el archivo NitePR RevK Stable.",
            "Copia nitePR.prx en ms0:/seplugins/ y los archivos de trucos en ms0:/seplugins/nitePR/.",
            "Añade ms0:/seplugins/nitePR.prx 1 en una línea nueva de ms0:/seplugins/game.txt; conserva las entradas que ya existan.",
            "Activa el plugin para GAME desde el menú Recovery de tu Custom Firmware y reinicia el VSH si es necesario."
        ],

        usage:
            "Abre un juego y pulsa Volumen + y Volumen - al mismo tiempo para mostrar el menú de NitePR. Selecciona los trucos que correspondan a ese juego.",

        notes:
            "Es un plugin de 2007 y su compatibilidad con sistemas actuales no está confirmada. Úsalo solo en partidas sin conexión; los trucos pueden causar fallos o corrupción de partidas. Cierra el menú de NitePR antes de pulsar HOME.",

        version: "RevK Stable",

        author: "SANiK",

        details: [
            {
                title: "Archivos de trucos",

                description:
                    "Cada archivo debe corresponder al ID del juego y guardarse en ms0:/seplugins/nitePR/.",

                items: [
                    "El tutorial usa UCUS-98645.txt como ejemplo; reemplaza el nombre por el ID exacto del juego.",
                    "No uses códigos de otro juego o de otra región, ya que pueden provocar errores."
                ]
            },
            {
                title: "Controles del menú",

                description:
                    "Los controles publicados para RevK Stable distinguen entre trucos temporales y persistentes.",

                items: [
                    "Volumen + y Volumen - a la vez: abrir el menú.",
                    "X: seleccionar trucos que se alternan con el botón Nota musical.",
                    "Cuadrado: activar trucos persistentes hasta deseleccionarlos en el menú.",
                    "Círculo: cerrar el menú; cierra el menú antes de salir del juego con HOME."
                ]
            }
        ]
    },

    website: "https://www.gamebrew.org/wiki/NitePR_PSP",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/SNpUlZiJ#cB-ovP4fUYI8_JrWSHn4Mg"
        }
    ]
},

// PSP Radio
{
    console: "PSP",

    name: "PSPRadio",

    image: "img/PSP/PSPRadio.jpg",

    description:
        "Reproductor homebrew para escuchar emisoras de radio por Internet en la PSP mediante Wi-Fi.",

    guide: {

        function:
            "PSPRadio 1.18.1400 reproduce audio en streaming y permite navegar por la lista de emisoras incluida en la aplicación.",

        compatibility: {
            PSP: "Homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP con Wi-Fi y acceso a Internet.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Descarga y extrae PSPRadio By brianeldelagb.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre PSPRADIO."
        ],

        usage:
            "Conecta la PSP a Internet por Wi-Fi y selecciona una emisora dentro de PSPRadio.",

        notes:
            "PSPRadio es una aplicación antigua. Las emisoras o direcciones de streaming incluidas pueden haber dejado de funcionar y la reproducción depende de la compatibilidad del servidor y del flujo de audio.",

        version: "1.18.1400",

        author: "Raf, Sandberg y jpfouch48",

        details: [
            {
                title: "Controles",

                description:
                    "Controles indicados en la ficha de GameBrew:",

                items: [
                    "X: conectar con la primera emisora de la lista y alternar reproducción/pausa.",
                    "L/R: cambiar a la emisora anterior o siguiente.",
                    "Triángulo: reconectar la red si se pierde la conexión.",
                    "Cuadrado: reproducción; HOME: salir al menú de la PSP."
                ]
            },
            {
                title: "Emisoras",

                description:
                    "La aplicación depende de su lista de emisoras y de los servicios de streaming disponibles.",

                items: [
                    "Que una emisora aparezca en la lista no garantiza que su transmisión continúe activa.",
                    "La ficha oficial de referencia es GameBrew; no es una página del desarrollador."
                ]
            }
        ]
    },

    website: "https://www.gamebrew.org/wiki/PSPRadio",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/zZAhTYqS#MDQmk2Kj7VFZG609ZvuhMw"
        }
    ]
},

// PSP Reader
{
    console: "PSP",

    name: "PSP Reader Textos",

    image: "img/PSP/PSPTexto.jpg",

    description:
        "Lector de archivos para PSP que admite textos, HTML sin formato y archivos de código C.",

    guide: {

        function:
            "PSPReader v1.1.1 permite abrir archivos, marcar páginas, buscar texto y cargar o guardar archivos.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el archivo Info.txt no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Descarga y extrae PSP textos.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "Copia los documentos que quieras leer a la raíz de la Memory Stick, como indica el tutorial.",
            "En Juego > Memory Stick, abre la aplicación identificada como Lector."
        ],

        usage:
            "Abre un documento desde el lector. Usa L y R para avanzar o retroceder páginas y pulsa Select para abrir el menú.",

        notes:
            "Los archivos HTML se muestran sin formato. La documentación menciona soporte de fuentes suaves para inglés y chino, pero no especifica la codificación de texto admitida.",

        version: "v1.1.1",

        author: "Dr. Yu-Ju Lin",

        details: [
            {
                title: "Formatos y funciones",

                description:
                    "Según el archivo Info.txt incluido, PSPReader admite los siguientes tipos y herramientas:",

                items: [
                    "Archivos .txt, .html sin formato y .c.",
                    "El menú permite marcar, buscar, cargar y guardar archivos.",
                    "Pulsa Cuadrado cuando necesites ingresar texto para abrir el teclado virtual."
                ]
            },
            {
                title: "Controles",

                description:
                    "La documentación incluida describe los controles principales del lector.",

                items: [
                    "Select: abrir el menú.",
                    "L/R: avanzar o retroceder una página.",
                    "Cuadrado: abrir el teclado virtual para ingresar texto."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/XUJ2RYxJ#48n3DPad_hed4BobVYxc5w"
        }
    ]
},

// Ubuntu PSP
{
    console: "PSP",

    name: "Ubuntu para PSP 7.10 / 12",

    image: "img/PSP/Ubuntu7.10.jpg",

    description:
        "Entorno homebrew con apariencia de Ubuntu para PSP. El paquete del tutorial incluye ediciones basadas en Ubuntu 7.10 y Ubuntu 12; no es una instalación de Ubuntu de escritorio para PC.",

    guide: {

        function:
            "Ejecuta un entorno tipo shell en la PSP con interfaz inspirada en Ubuntu y opciones de inicio manual o automático mediante un plugin.",

        compatibility: {
            PSP: "El tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Descarga y extrae el paquete Ubuntu 7.10 PSP Edition v1.0 o Ubuntu 12.",
            "Copia la carpeta PSP correspondiente a la raíz de la Memory Stick.",
            "Opcional: copia en PICTURE las carpetas de fondos incluidas para Ubuntu 7.10.",
            "El tutorial menciona un plugin opcional de inicio automático. Para iniciar la aplicación manualmente, no añadas esa entrada a vsh.txt; si eliges el autoarranque, conserva las líneas existentes y sigue la instrucción incluida en el paquete.",
            "En Juego > Memory Stick, inicia Ubuntu 7.10, Ubuntu 12 o Ubuntu RAZ, según la versión instalada."
        ],

        usage:
            "En Ubuntu 7.10, usa admin como usuario y contraseña según el tutorial. En Ubuntu 12, selecciona Guest Session.",

        notes:
            "Es un homebrew antiguo cuyo funcionamiento puede variar según la PSP y el firmware. El nombre Ubuntu describe el entorno simulado; no debe confundirse con una instalación completa de Ubuntu para PC.",

        version: "Ubuntu 7.10 PSP Edition v1.0 / Ubuntu 12",

        author: "jack118218 (Ubuntu 7.10 PSP Edition)",

        details: [
            {
                title: "Ediciones disponibles",

                description:
                    "El paquete enlazado incluye dos ediciones descritas por el tutorial.",

                items: [
                    "Ubuntu 7.10 PSP Edition v1.0 en español y Ubuntu RAZ.",
                    "Ubuntu 12 y Ubuntu RAZ.",
                    "Las carpetas de fondos de pantalla indicadas en el tutorial son opcionales."
                ]
            },
            {
                title: "Inicio automático",

                description:
                    "La entrada de plugin en vsh.txt sirve para iniciar el entorno automáticamente, no es necesaria para abrirlo desde el menú Juego.",

                items: [
                    "No sobrescribas vsh.txt ni elimines entradas de otros plugins.",
                    "Si no necesitas el autoarranque, deja intacta la configuración de SEPLUGINS."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/qc5wnDiB#ZqKPDc-O0eMZlNk0rkeGjw"
        }
    ]
},

// Windows 7 PSP
{
    console: "PSP",

    name: "Windows 7 PSP",

    image: "img/PSP/Windows7PSP.jpg",

    description:
        "Aplicación homebrew para PSP con una interfaz inspirada en Windows 7 y herramientas que el tutorial presenta como navegador, mensajería y Paint. No ejecuta Windows 7 de escritorio.",

    guide: {

        function:
            "Win7 PSP reúne una interfaz tipo Windows 7 y varias aplicaciones sencillas en una versión beta para PSP.",

        compatibility: {
            PSP: "El tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir los archivos."
        ],

        installation: [
            "Descarga y extrae Windows 7.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre Win7 PSP."
        ],

        usage:
            "Inicia Win7 PSP y selecciona la herramienta que quieras usar desde la interfaz.",

        notes:
            "El tutorial identifica el paquete como una primera versión beta, sin indicar número de versión. El navegador puede no acceder a sitios web actuales y Windows Live Messenger fue descontinuado; no se garantiza que esas funciones conectadas sigan operativas.",

        version: "Beta (versión no especificada)",

        details: [
            {
                title: "Herramientas mencionadas",

                description:
                    "El tutorial anuncia las siguientes aplicaciones dentro de Win7 PSP:",

                items: [
                    "Navegador de Internet identificado como Firefox.",
                    "Cliente de mensajería identificado como Live Messenger.",
                    "Una aplicación sencilla de dibujo llamada Paint."
                ]
            },
            {
                title: "Qué esperar",

                description:
                    "Windows 7 PSP es una aplicación homebrew con una interfaz temática, no una instalación ni emulación completa de Microsoft Windows 7.",

                items: [
                    "La disponibilidad y el funcionamiento de cada herramienta pueden variar en esta versión beta."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/eEoWTRTK#z1nRWn95WvrnLX-q3cguYQ"
        }
    ]
},

// PKGi PSP
{
    console: "PSP",

    name: "PKGi PSP",

    image: "img/PSP/PKGi.jpg",

    description:
        "Gestor homebrew para descargar e instalar paquetes en la PSP desde una base de datos configurada por el usuario.",

    guide: {

        function:
            "PKGi PSP muestra, filtra y descarga elementos descritos en sus archivos de base de datos. La versión 1.1.0 también permite instalar paquetes locales desde la Memory Stick.",

        compatibility: {
            PSP: "El release v1.1.0 incluye una compilación compatible con OFW. Consulta los assets oficiales para elegir el paquete adecuado."
        },

        requirements: [
            "PSP compatible con la compilación elegida.",
            "Memory Stick; conexión Wi-Fi para descargar paquetes en línea.",
            "Una base de datos pkgi.txt con contenido que tengas derecho a descargar y usar."
        ],

        installation: [
            "Descarga PKGi PSP desde la sección Releases oficial y extrae el paquete.",
            "Copia la carpeta PKGI a ms0:/PSP/GAME/.",
            "Crea ms0:/PSP/GAME/PKGI/pkgi.txt siguiendo el formato documentado en el README y usa únicamente enlaces de contenido legalmente distribuido o autorizado.",
            "Abre PKGi PSP desde Juego > Memory Stick."
        ],

        usage:
            "Selecciona un elemento de la base de datos y pulsa X para iniciar la descarga. El contenido descargado se guarda en ms0:/PKG/.",

        notes:
            "PKGi es un gestor, no una fuente de licencias. El contenido protegido requiere una licencia válida; utiliza solo homebrew, contenido de dominio público o paquetes que tengas derecho a descargar. No uses bases de datos o enlaces que distribuyan contenido sin autorización.",

        version: "v1.1.0",

        author: "Bucanero",

        details: [
            {
                title: "Controles",

                description:
                    "Controles publicados en el README del proyecto:",

                items: [
                    "Arriba/Abajo: seleccionar un elemento; X: iniciar su descarga.",
                    "Cuadrado: ver detalles del elemento.",
                    "Triángulo: abrir opciones de búsqueda, filtros y orden.",
                    "L1/R1: cambiar de página; Izquierda/Derecha: cambiar de categoría."
                ]
            },
            {
                title: "Bases de datos y paquetes locales",

                description:
                    "El proyecto usa archivos de texto de base de datos en la carpeta de PKGI.",

                items: [
                    "El archivo principal es pkgi.txt; el README describe el formato y los archivos adicionales admitidos.",
                    "La versión 1.1.0 permite instalar archivos .pkg locales desde ms0:/PKG/.",
                    "Las descargas interrumpidas se pueden reanudar desde la aplicación."
                ]
            }
        ]
    },

    website: "https://github.com/bucanero/pkgi-psp",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/bucanero/pkgi-psp/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/rVgwiToJ#fHsdhPHSiyi59HtHL1oaAA"
        }
    ]
},

// PSP-FTPD
{
    console: "PSP",

    name: "PSP-FTPD",

    image: "img/PSP/PSP-FTPD.jpg",

    description:
        "Servidor FTP homebrew para transferir archivos entre la PSP y un equipo por Wi-Fi, sin conectar un cable USB.",

    guide: {

        function:
            "PSP-FTPD permite enviar y recibir archivos o carpetas entre la Memory Stick y un cliente FTP de la computadora.",

        compatibility: {
            PSP: "El README documenta firmware 1.5 mediante eLoader y 2.x; la versión 0.5.0 también se probó en PSP Slim con 4.x M33. No confirma compatibilidad con CFW actuales."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew y conectarse por Wi-Fi.",
            "PC o dispositivo con cliente FTP, por ejemplo FileZilla.",
            "PSP y PC conectados a la misma red local."
        ],

        installation: [
            "Descarga y extrae el paquete PSP-FTPD.",
            "Copia la carpeta psp-ftpd a ms0:/PSP/GAME/.",
            "Antes de iniciar el servidor, configura psp-ftpd.cfg con autenticación y limita la raíz compartida a una carpeta específica de la Memory Stick.",
            "En Juego > Memory Stick, abre PSP-FTPD y selecciona el punto de acceso Wi-Fi."
        ],

        usage:
            "Cuando PSP-FTPD muestre la dirección IP local, conéctate desde un cliente FTP del mismo equipo de red usando las credenciales configuradas. Cierra la conexión desde la PSP al terminar.",

        notes:
            "Este servidor FTP antiguo transmite credenciales y archivos sin cifrado. Evita el acceso anónimo, usa una red local confiable, limita la carpeta compartida y no expongas el servidor a Internet ni configures reenvío de puertos.",

        version: "0.5.0",

        author: "Zx-81; versión original de PSPKrazy y Raf",

        details: [
            {
                title: "Configuración segura",

                description:
                    "El README permite definir usuario y contraseña, además de restringir qué carpeta ve el cliente FTP.",

                items: [
                    "En psp-ftpd.cfg, auth=usuario:contraseña configura autenticación; usa una contraseña única, ya que el protocolo no cifra credenciales.",
                    "La opción root puede limitar el acceso a una carpeta, por ejemplo ms0:/PSP/FTP; crea esa carpeta antes de iniciar el servidor.",
                    "El README indica que, si no se configura autenticación, puede habilitarse acceso anónimo."
                ]
            },
            {
                title: "Transferencias",

                description:
                    "El programa admite enviar y recibir archivos y directorios, además de operaciones como renombrar o eliminar archivos.",

                items: [
                    "Usa un cliente FTP compatible en la computadora y la dirección IP local que muestra la PSP.",
                    "Cierra el servidor al finalizar para dejar de compartir la Memory Stick."
                ]
            }
        ]
    },

    website: "https://github.com/PSP-Archive/PSP-FTPD",

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/fUYW1AjJ#FqFBsu0bmx5L40hFw-aNjQ"
        }
    ]
},

// Apollo Save Tool
{
    console: "PSP",

    name: "Apollo Save Tool PSP",

    image: "img/PSP/ApolloSaveTool.jpg",

    description:
        "Aplicación homebrew para administrar partidas guardadas de PSP y PS1 desde la consola.",

    guide: {

        function:
            "Apollo permite explorar, exportar, importar, descargar y aplicar parches a partidas guardadas, además de gestionar partidas de PS1 en tarjetas de memoria virtuales.",

        compatibility: {
            PSP: "Compatible con partidas guardadas de PSP y PS1; el README no especifica un firmware mínimo."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick; Wi-Fi solo para usar la base de datos en línea."
        ],

        installation: [
            "Descarga y extrae apollo-psp.zip desde la release oficial.",
            "Copia la carpeta APOLLO a ms0:/PSP/GAME/.",
            "Abre Apollo Save Tool desde Juego > Memory Stick; en el primer inicio detecta y configura los ajustes necesarios."
        ],

        usage:
            "Selecciona una partida para ver sus detalles y usa las opciones de la aplicación para administrarla. Para partidas de PS1, la herramienta también puede importar o exportar datos de tarjetas de memoria virtuales.",

        notes:
            "Haz una copia de seguridad antes de modificar, parchear o importar una partida. La desencriptación de algunos guardados requiere claves específicas del juego. Usa únicamente partidas y contenidos que tengas derecho a utilizar; no compartas claves ni guardados protegidos.",

        version: "v2.3.2",

        author: "Bucanero",

        details: [
            {
                title: "Rutas de datos",

                description:
                    "El README documenta estas ubicaciones principales:",

                items: [
                    "Guardados PSP en la Memory Stick: ms0:/PSP/SAVEDATA/.",
                    "Guardados PSP externos: ms0:/APOLLO/SAVEDATA/.",
                    "Tarjetas virtuales PS1: ms0:/PS1/VMC/."
                ]
            },
            {
                title: "Funciones",

                description:
                    "La aplicación administra formatos de guardado de PSP y PS1, y permite trabajar directamente desde la consola.",

                items: [
                    "Actualizar información PARAM.SFO, reparar checksums y corregir propiedad de guardados.",
                    "Importar y exportar partidas, aplicar parches compatibles y acceder a una base de datos en línea.",
                    "La release v2.3.2 añade carga FTP por lotes de partidas PSP."
                ]
            }
        ]
    },

    website: "https://github.com/bucanero/apollo-psp",

    downloads: [
        {
            name: "GitHub Releases",
            url: "https://github.com/bucanero/apollo-psp/releases"
        },
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/OchkRK4K#no36eVUlATzrTR6iApVMOg"
        }
    ]
},

// Atari 2600
{
    console: "PSP",

    name: "Emulador Atari 2600",

    image: "img/PSP/Atari2600.jpg",

    description:
        "Emulador homebrew para jugar títulos de Atari 2600 en PSP con ROMs compatibles.",

    guide: {

        function:
            "Ejecuta juegos de Atari 2600 desde la PSP. El tutorial identifica la aplicación en el menú como ATARI2600.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y las ROMs."
        ],

        installation: [
            "Descarga y extrae Emulador Atari 2600.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, inicia ATARI2600."
        ],

        usage:
            "Añade las ROMs compatibles a la carpeta roms del emulador y vuelve a iniciar la aplicación para cargarlas.",

        notes:
            "Usa únicamente ROMs de juegos que hayas creado a partir de tus propios cartuchos o que tengas autorización para usar. El tutorial no identifica la versión ni el nombre técnico del emulador y no especifica las teclas de control.",

        details: [
            {
                title: "ROMs y ubicación",

                description:
                    "El tutorial indica que los juegos se colocan dentro de la carpeta roms del emulador.",

                items: [
                    "Ruta orientativa: PSP/GAME/Emulador Atari 2600/roms.",
                    "Formatos mencionados: .a26, .bin y archivos .zip que contengan una ROM .a26."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/aQ5AQZBa#lXg_feiMilYYrH73wd_wLw"
        }
    ]
},

// ColecoVision
{
    console: "PSP",

    name: "Emulador ColecoVision (ColEm PSP)",

    image: "img/PSP/ColecoVision.jpg",

    description:
        "ColEm PSP 2.6.1 es un emulador homebrew de la consola ColecoVision para PSP.",

    guide: {

        function:
            "Ejecuta juegos de ColecoVision en la PSP mediante ROMs compatibles.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y las ROMs."
        ],

        installation: [
            "Descarga y extrae ColecoVision 2.6.1.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre ColEm PSP 2.6.1."
        ],

        usage:
            "Coloca las ROMs compatibles en la carpeta roms del emulador y vuelve a iniciar la aplicación para cargarlas.",

        notes:
            "Usa solo ROMs que hayas creado a partir de tus propios cartuchos o que tengas autorización para usar. El tutorial no indica controles ni opciones de configuración.",

        version: "2.6.1",

        details: [
            {
                title: "ROMs y ubicación",

                description:
                    "El tutorial indica que se añaden los juegos a la carpeta roms de ColEm PSP.",

                items: [
                    "Ruta orientativa: PSP/GAME/ColecoVision 2.6.1/roms.",
                    "Formatos mencionados: .col y .rom."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/qBJVHZBT#_wtYCVdFtzvnI2L6nzzaTg"
        }
    ]
},

// DOSBox PSP
{
    console: "PSP",

    name: "DOSBox para PSP",

    image: "img/PSP/DosBox.jpg",

    description:
        "Port de DOSBox para PSP que emula un entorno MS-DOS para ejecutar software compatible.",

    guide: {

        function:
            "DOSBox recrea un entorno tipo MS-DOS en la PSP. El paquete del tutorial incluye la carpeta de la aplicación y una carpeta Games para colocar programas o juegos compatibles.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y los archivos de DOS."
        ],

        installation: [
            "Descarga y extrae Emulador DosBox.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre DOSBOX."
        ],

        usage:
            "Coloca cada programa o juego compatible en su propia carpeta dentro de PSP/GAME/Dosbox/Games, siguiendo la estructura del paquete. Inicia DOSBox y usa los archivos de configuración o instrucciones que incluya el programa.",

        notes:
            "La PSP tiene recursos limitados y no todo el software de DOS funcionará a velocidad o compatibilidad aceptables. Usa solo programas y juegos que tengas derecho a utilizar. El tutorial no identifica la versión de DOSBox ni detalla los controles.",

        details: [
            {
                title: "Carpeta Games",

                description:
                    "El tutorial indica PSP/GAME/Dosbox/Games como ubicación para añadir contenido.",

                items: [
                    "Coloca carpetas de programas o juegos, no ROMs de consola.",
                    "El tutorial no especifica extensiones concretas; conserva los archivos y subcarpetas requeridos por cada programa de DOS."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/GE5lyRRb#DwOIXlbQXPk_AUVSjwotpQ"
        }
    ]
},

// Game Boy / Game Boy Color
{
    console: "PSP",

    name: "Game Boy / Game Boy Color (MasterBoy)",

    image: "img/PSP/GameBoyColor.jpg",

    description:
        "MasterBoy es un emulador homebrew para PSP compatible con juegos de Game Boy, Super Game Boy y Game Boy Color.",

    guide: {

        function:
            "MasterBoy permite cargar ROMs compatibles desde la Memory Stick. También emula Sega Master System y Game Gear, aunque esta tarjeta se centra en Game Boy y Game Boy Color.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y las ROMs."
        ],

        installation: [
            "Extrae MasterBoy del paquete indicado por el tutorial.",
            "Copia la carpeta MasterBoy a ms0:/PSP/GAME/.",
            "Coloca tus ROMs en la carpeta Roms GBC incluida o elige su ubicación desde Load ROM.",
            "En Juego > Memory Stick, inicia MasterBoy."
        ],

        usage:
            "Selecciona Load ROM, navega hasta la carpeta que contiene tus juegos y pulsa X para cargar una ROM.",

        notes:
            "El tutorial etiqueta el paquete como MasterBoy v2.10, pero GameBrew advierte que esa etiqueta corresponde a una copia reempaquetada y que la última versión oficial es la 2.02. No se recomienda presentar ese paquete como una actualización oficial. Usa solo ROMs que tengas derecho a utilizar. GameBrew también informa de un problema conocido con algunos estados guardados; guarda normalmente en el juego y conserva respaldos.",

        version: "2.02 (última versión oficial indicada por GameBrew)",

        author: "Brunni",

        details: [
            {
                title: "Sistemas y formatos",

                description:
                    "MasterBoy admite Game Boy, Super Game Boy y Game Boy Color; el mismo emulador incluye soporte adicional para Master System y Game Gear.",

                items: [
                    "Formatos de ROM listados por GameBrew: .GB, .GBC, .SGB, .CGB y .ZIP.",
                    "El tutorial incluye carpetas Roms GBC y Roms SMS; esta tarjeta documenta solo el uso de Game Boy y Game Boy Color."
                ]
            },
            {
                title: "Controles básicos",

                description:
                    "Controles descritos en la documentación de MasterBoy:",

                items: [
                    "Cruceta o stick: navegar por los menús.",
                    "X: seleccionar; Círculo: cancelar.",
                    "L: abrir el menú durante el uso de la aplicación."
                ]
            },
            {
                title: "Referencia de versión",

                description:
                    "La ficha de GameBrew distingue la versión oficial del paquete renombrado como v2.10 que menciona el tutorial.",

                items: [
                    "GameBrew indica que la última release oficial es MasterBoy 2.02.",
                    "Consulta la ficha antes de elegir una versión y revisa el contenido del archivo descargado."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/3Ig3yAjS#Z44jWd0lDRj5a1KO0HxYmg"
        }
    ]
},

// MAME FBA
{
    console: "PSP",

    name: "MAME FBA (Arcade)",

    image: "img/PSP/MAMEFBA.jpg",

    description:
        "Emulador homebrew de arcade para PSP distribuido en el tutorial como MAME FBA; carga archivos ROM en formato ZIP.",

    guide: {

        function:
            "El paquete instala el emulador FBA en la PSP y permite explorar juegos arcade compatibles desde su carpeta ROMS.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y los archivos ROM."
        ],

        installation: [
            "Descarga y extrae Emulador de MAME FBA.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, inicia PSP PaLL, como lo identifica el tutorial."
        ],

        usage:
            "Coloca las ROMs compatibles en PSP/GAME/FBA/ROMS y abre de nuevo el emulador para seleccionarlas.",

        notes:
            "El tutorial no especifica la versión exacta de FBA ni el set de ROM compatible. Las ROMs arcade suelen depender de la versión del emulador; un ZIP válido puede no ser compatible. Usa únicamente ROMs que tengas derecho a utilizar.",

        details: [
            {
                title: "ROMs",

                description:
                    "La guía indica usar archivos .zip dentro de PSP/GAME/FBA/ROMS.",

                items: [
                    "No extraigas el ZIP salvo que el emulador o la documentación del juego lo requieran.",
                    "El formato ZIP por sí solo no garantiza compatibilidad: debe coincidir con el arcade y el set que admite esta versión."
                ]
            },
            {
                title: "Nombres en el tutorial",

                description:
                    "La página se titula MAME FBA, llama FBA a la carpeta del emulador y muestra PSP PaLL en el menú.",

                items: [
                    "Se conserva PSP PaLL como etiqueta de menú indicada por el tutorial; no se atribuye como nombre oficial del emulador."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/eEYiUQwS#E-o--6N8_Lw_AZIN8YwBww"
        }
    ]
},

// Mega Drive
{
    console: "PSP",

    name: "Mega Drive / Genesis (PicoDrive)",

    image: "img/PSP/MegaDrive.jpg",

    description:
        "PicoDrive 1.92.3 es un emulador homebrew para jugar títulos de Sega Mega Drive (Genesis) en PSP.",

    guide: {

        function:
            "PicoDrive ejecuta ROMs compatibles de Mega Drive desde la Memory Stick.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y las ROMs."
        ],

        installation: [
            "Descarga y extrae Picodrive1.92.3.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, inicia Picodrive 1.92."
        ],

        usage:
            "Coloca las ROMs compatibles en PSP/GAME/Picodrive1.92.3/ROMS y abre de nuevo PicoDrive para seleccionarlas.",

        notes:
            "El tutorial no detalla los controles ni las extensiones admitidas, solo indica ROMs comprimidas en ZIP o carpetas. Usa únicamente ROMs de juegos que tengas derecho a utilizar.",

        version: "1.92.3",

        details: [
            {
                title: "Juegos y ubicación",

                description:
                    "La guía indica la carpeta ROMS incluida en el directorio del emulador.",

                items: [
                    "Ruta: PSP/GAME/Picodrive1.92.3/ROMS.",
                    "El tutorial indica archivos ZIP y carpetas; no especifica más extensiones."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/2BxVGArQ#7VPP-kyuJhmpal5c889LvQ"
        }
    ]
},

// RetroArch PSP
{
    console: "PSP",

    name: "RetroArch para PSP",

    image: "img/PSP/RETROARCH.jpg",

    description:
        "Frontend multi-emulador para PSP que reúne distintos cores de libretro en una sola aplicación.",

    guide: {

        function:
            "RetroArch permite seleccionar un core compatible y cargar contenido de varios sistemas clásicos desde la Memory Stick.",

        compatibility: {
            PSP: "La documentación incluida corresponde a RetroArch PSP 1.9.13. La disponibilidad, velocidad y compatibilidad varían según el core y el juego."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir RetroArch y los archivos de contenido."
        ],

        installation: [
            "Descarga y extrae RETROARCH.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "Copia el contenido compatible a la carpeta PSP/roms indicada por el tutorial.",
            "En Juego > Memory Stick, inicia retroarch."
        ],

        usage:
            "En RetroArch selecciona un core adecuado para el sistema y luego carga un archivo compatible. El tutorial enumera formatos por sistema, pero algunos son específicos del core y no todos funcionan en todos los cores.",

        notes:
            "La documentación corresponde a una versión antigua (1.9.13), no a la versión más reciente de RetroArch. La PSP tiene limitaciones de rendimiento y ciertos cores o juegos pueden funcionar lentamente o no ser compatibles. Usa únicamente ROMs y archivos de contenido que tengas derecho a utilizar. En la tabla del tutorial aparece .gb para GBA; es una errata: los juegos de Game Boy Advance suelen usar .gba.",

        version: "PSP 1.9.13",

        details: [
            {
                title: "Cores y sistemas destacados",

                description:
                    "La lista local incluye estos cores y sistemas compatibles:",

                items: [
                    "Gambatte y TGBDual: Game Boy y Game Boy Color; gpSP, mGBA y TempGBA: Game Boy Advance.",
                    "FCEUmm y QuickNES: NES/Famicom; SNES9x 2005 y SNES9x 2005 Plus: SNES.",
                    "PicoDrive: Master System, Mega Drive/Genesis, Sega CD y 32X.",
                    "También se listan Atari 5200, MSX/MSX2, ColecoVision, SG-1000, Intellivision, ZX Spectrum, Atari Lynx, PC Engine/TurboGrafx, Neo Geo Pocket, Doom y otros sistemas."
                ]
            },
            {
                title: "Formatos y carpetas",

                description:
                    "El tutorial sugiere la carpeta PSP/roms y menciona extensiones como .nes, .sms, .md, .smc, .gb y ZIP.",

                items: [
                    "El formato debe ser admitido por el core seleccionado; un archivo ZIP no garantiza compatibilidad universal.",
                    "Para GBA, utiliza archivos de juego .gba compatibles con el core, no la extensión .gb indicada por error en el tutorial."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/vdACVDpI#0M1Va6ZFWVQYgeRM3avxZg"
        }
    ]
},

// Sega Master System y Game Gear
{
    console: "PSP",

    name: "Sega Master System y Game Gear (SMS Plus)",

    image: "img/PSP/SegaMasterSystemGameGear.jpg",

    description:
        "SMS Plus PSP 1.5 es un emulador homebrew para jugar títulos de Sega Master System y Game Gear en PSP.",

    guide: {

        function:
            "Carga ROMs compatibles de Master System y Game Gear desde la Memory Stick.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y las ROMs."
        ],

        installation: [
            "Descarga y extrae SMSplus.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, abre SMS Plus PSP 1.5."
        ],

        usage:
            "Coloca las ROMs compatibles en PSP/GAME/SMSplus/roms y vuelve a iniciar la aplicación para seleccionarlas.",

        notes:
            "El tutorial no detalla los controles ni las extensiones admitidas dentro de los ZIP. La compatibilidad puede depender del formato y de la ROM. Usa únicamente juegos que tengas derecho a utilizar.",

        version: "1.5",

        details: [
            {
                title: "ROMs",

                description:
                    "La guía indica usar archivos .zip dentro de la carpeta roms.",

                items: [
                    "Ruta: PSP/GAME/SMSplus/roms.",
                    "El tutorial no especifica si los ZIP deben contener un único archivo o qué extensiones de ROM acepta."
                ]
            },
            {
                title: "Sistemas",

                description:
                    "Esta tarjeta se limita a los dos sistemas que nombra el tutorial.",

                items: [
                    "Sega Master System.",
                    "Sega Game Gear."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/GRoFTB7Z#B0CxwXHPE4fJKDqlFB8aLA"
        }
    ]
},

// Super Nintendo
{
    console: "PSP",

    name: "Super Nintendo (Snes9xTYLcm Mod)",

    image: "img/PSP/SuperNintendo.jpg",

    description:
        "Snes9xTYLcm Mod es un emulador homebrew para jugar títulos de Super Nintendo (SNES) en PSP.",

    guide: {

        function:
            "El emulador carga juegos compatibles de SNES desde la Memory Stick, admite ROMs comprimidas en ZIP y ofrece opciones de rendimiento y visualización.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos para esta variante."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y las ROMs."
        ],

        installation: [
            "Descarga y extrae s9xTYLcm_mod.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "Comprueba que la carpeta quede en ms0:/PSP/GAME/s9xTYLcm_mod/.",
            "En Juego > Memory Stick, inicia Snes9xTYLcm Mod 171023."
        ],

        usage:
            "Coloca ROMs de SNES compatibles en ms0:/PSP/GAME/s9xTYLcm_mod/ROMS/ o navega hasta ellas desde el explorador del emulador. En juego, L + R abre el menú; la cruceta y los botones frontales emulan el mando SNES.",

        notes:
            "Usa solo ROMs que tengas derecho a utilizar. El rendimiento depende del juego y de los ajustes: algunos títulos pueden requerir frameskip u otras opciones. La guía incluye además un paquete llamado Emulador Super Nintendo que inicia NesterJ NES Emulator 1.11; ese es un emulador de NES, no de Super Nintendo.",

        version: "Mod 171023",

        details: [
            {
                title: "ROMs",

                description:
                    "El tutorial indica ZIP y .nes, pero .nes corresponde a juegos de NES y es una errata para esta tarjeta SNES.",

                items: [
                    "Snes9xTYL admite ROMs SNES sin comprimir y comprimidas en ZIP; formatos comunes incluyen .smc y .sfc.",
                    "Coloca el contenido en la carpeta ROMS o selecciónalo desde el explorador del emulador.",
                    "El soporte de ZIP no garantiza que cualquier archivo comprimido sea compatible."
                ]
            },
            {
                title: "Controles",

                description:
                    "Controles del emulador Snes9xTYL:",

                items: [
                    "Cruceta o stick: direcciones; X: A; Círculo: B; Cuadrado: X; Triángulo: Y.",
                    "Start y Select: botones correspondientes del mando SNES.",
                    "L y R: gatillos del mando; L + R: abrir la interfaz del emulador."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/bVp0QIwS#OFTG06ajaW_sAmhIktJz7w"
        }
    ]
},

// Nintendo 64
{
    console: "PSP",

    name: "Nintendo 64 (Daedalus x64)",

    image: "img/PSP/Nintendo64.jpg",

    description:
        "Daedalus x64 es un emulador homebrew de Nintendo 64 para PSP.",

    guide: {

        function:
            "Carga ROMs compatibles de Nintendo 64 desde la Memory Stick para ejecutarlas en la PSP.",

        compatibility: {
            PSP: "Aplicación homebrew para PSP; el tutorial no especifica modelos ni firmware mínimos."
        },

        requirements: [
            "PSP capaz de ejecutar homebrew.",
            "Memory Stick y PC o lector de tarjetas para transferir el emulador y las ROMs."
        ],

        installation: [
            "Descarga y extrae Nintendo 64.rar.",
            "Copia la carpeta PSP incluida en el archivo a la raíz de la Memory Stick.",
            "En Juego > Memory Stick, inicia Daedalus x64."
        ],

        usage:
            "Coloca las ROMs compatibles en PSP/GAME/Nintendo 64/Roms y selecciónalas desde el emulador.",

        notes:
            "La emulación de Nintendo 64 en PSP tiene limitaciones importantes: la velocidad y compatibilidad varían según el juego, y no todos funcionan correctamente. El tutorial solo menciona ROMs .v64; usa únicamente juegos que tengas derecho a utilizar. Aunque la página se titula “Super Nintendo 64”, el sistema y emulador descritos son Nintendo 64 y Daedalus x64.",

        details: [
            {
                title: "ROMs y ubicación",

                description:
                    "La guía indica usar la carpeta Roms de la aplicación.",

                items: [
                    "Ruta: PSP/GAME/Nintendo 64/Roms.",
                    "El único formato que menciona el tutorial es .v64; revisa la compatibilidad de cada archivo con la versión incluida."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/WQhG0Bib#laTWLKmvae3j4C7sDFgqjg"
        }
    ]
},

// PICTURE
{
    console: "PSP",

    name: "Fondos e imágenes PICTURE para PSP",

    image: "img/PSP/Picture.jpg",

    description:
        "Colección de imágenes para ver en la PSP y, cuando el archivo lo permite, usar como fondo de pantalla.",

    guide: {

        function:
            "La carpeta PICTURE organiza imágenes para abrir desde Foto > Memory Stick.",

        compatibility: {
            PSP: "Función integrada del menú Foto de PSP; no requiere instalar homebrew."
        },

        requirements: [
            "PSP y Memory Stick.",
            "PC o lector de tarjetas para copiar las imágenes."
        ],

        installation: [
            "Descarga y extrae PICTURE.rar.",
            "Copia la carpeta PICTURE a la raíz de la Memory Stick, no dentro de PSP/GAME/.",
            "En la PSP, abre Foto > Memory Stick y selecciona una de las carpetas o imágenes."
        ],

        usage:
            "Abre la imagen que quieras y, desde el menú de opciones, elige Establecer como fondo de pantalla si aparece disponible para esa imagen.",

        notes:
            "La colección incluye categorías como arte visual, capturas y juegos. La resolución o el formato de algunas imágenes puede afectar cómo se muestran o si pueden establecerse como fondo.",

        details: [
            {
                title: "Contenido del paquete",

                description:
                    "El tutorial menciona varias carpetas de imágenes incluidas en PICTURE.",

                items: [
                    "Arte visual by Kenas.",
                    "Capturas de pantalla.",
                    "Imágenes relacionadas con juegos."
                ]
            },
            {
                title: "Ubicación correcta",

                description:
                    "PICTURE es una carpeta de medios situada en la raíz de la Memory Stick.",

                items: [
                    "Ejemplo: ms0:/PICTURE/.",
                    "La ruta de ROMs de ColecoVision que aparece más adelante en el tutorial no corresponde a esta colección y debe ignorarse."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/iBACjIAS#7YhL2Rqk3TmUHKGzRRy9Dw"
        }
    ]
},

// Temas PSP
{
    console: "PSP",

    name: "Temas PSP (PTF y CTF)",

    image: "img/PSP/Temas.jpg",

    description:
        "Colección de temas visuales para personalizar el menú XMB de PSP, incluidos temas PTF y temas CTF para CXMB.",

    guide: {

        function:
            "Los temas PTF se aplican desde los ajustes de tema de la PSP. Los temas CTF requieren CXMB y un Custom Firmware compatible.",

        compatibility: {
            PSP: "PTF: compatibilidad según el firmware. CTF: requiere CFW compatible con la versión de CXMB y con el tema."
        },

        requirements: [
            "PSP y Memory Stick.",
            "PC o lector de tarjetas para copiar los temas.",
            "Para temas CTF: Custom Firmware compatible con CXMB."
        ],

        installation: [
            "Descarga y extrae Temas.rar.",
            "Copia los archivos de tema a ms0:/PSP/THEME/; crea la carpeta si no existe.",
            "Para temas PTF, omite la instalación del plugin y selecciónalos desde Ajustes > Ajustes de tema > Tema.",
            "Para temas CTF, instala una versión de CXMB compatible con tu CFW en ms0:/seplugins/cxmb/ y añade ms0:/seplugins/cxmb/cxmb.prx 1 a una línea nueva de ms0:/seplugins/vsh.txt.",
            "Conserva las entradas existentes de vsh.txt. Activa cxmb.prx para VSH desde Recovery y reinicia el VSH; después selecciona el tema desde Ajustes de tema."
        ],

        usage:
            "Abre Ajustes > Ajustes de tema > Tema, selecciona el tema disponible y aplícalo.",

        notes:
            "Haz una copia de seguridad de la Memory Stick y de vsh.txt antes de añadir plugins. No sobrescribas seplugins ni habilites uvc.prx para instalar temas: UVC no es necesario para CXMB. Evita temas que modifiquen directamente flash0; la colección/tutorial no permite confirmar la compatibilidad de cada tema con todos los CFW.",

        details: [
            {
                title: "Diferencia entre PTF y CTF",

                description:
                    "El tutorial menciona temas CTF y la instalación de CXMB; los dos formatos no se instalan de la misma manera.",

                items: [
                    "PTF: normalmente se copia a ms0:/PSP/THEME/ y se aplica desde los ajustes de tema, sin CXMB.",
                    "CTF: requiere CXMB activo y compatible con el CFW instalado.",
                    "Comprueba la extensión del archivo y las instrucciones incluidas con cada tema."
                ]
            },
            {
                title: "Plugin CXMB",

                description:
                    "CXMB se carga como plugin VSH para mostrar los temas CTF.",

                items: [
                    "La línea de vsh.txt debe ser ms0:/seplugins/cxmb/cxmb.prx 1.",
                    "El tutorial también menciona uvc.prx, pero no es requisito de CXMB ni de los temas.",
                    "No reemplaces vsh.txt ni actives plugins que no necesites."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/HAgQzRKR#ZeQTDuSy_coRFMtFpUMXeg"
        }
    ]
},

// Todo para PSP
{
    console: "PSP",

    name: "Todo para PSP",

    image: "img/PSP/TodoPSP.jpg",

    description:
        "Catálogo web de recursos para PSP: homebrew, aplicaciones, emuladores, demos y otros contenidos archivados.",

    guide: {

        function:
            "Permite explorar una colección de recursos PSP alojada en Internet Archive; no es una aplicación que se instale en la consola.",

        compatibility: {
            PSP: "Se consulta desde un navegador web en PC, teléfono o PSP; la descarga y compatibilidad de cada recurso dependen de su contenido."
        },

        requirements: [
            "Conexión a Internet y navegador web.",
            "Para transferir archivos a la PSP: PC o notebook y cable USB, o lector de Memory Stick."
        ],

        installation: [
            "Abre el enlace de Internet Archive desde un navegador.",
            "Explora las categorías y revisa la descripción y los archivos disponibles para cada elemento.",
            "Si descargas homebrew compatible, sigue las instrucciones incluidas y copia sus archivos a la Memory Stick."
        ],

        usage:
            "Utiliza la página como índice para consultar recursos PSP. No todos los elementos son compatibles con todos los modelos o firmwares, y algunos requieren Custom Firmware.",

        notes:
            "El tutorial presenta esta colección como una selección de recursos disponible hasta 2023; es un archivo de terceros, no un catálogo oficial ni necesariamente actualizado. Descarga únicamente homebrew y contenido que tengas derecho a utilizar; evita copias no autorizadas de juegos comerciales.",

        details: [
            {
                title: "Categorías mencionadas en el tutorial",

                description:
                    "La página reúne distintos tipos de recursos para PSP.",

                items: [
                    "Homebrew y aplicaciones.",
                    "Emuladores y demos.",
                    "Otros contenidos archivados; la disponibilidad puede cambiar."
                ]
            },
            {
                title: "Compatibilidad",

                description:
                    "Los archivos del catálogo no comparten necesariamente los mismos requisitos.",

                items: [
                    "Comprueba el modelo de PSP, firmware y requisitos de cada elemento antes de instalarlo.",
                    "No ejecutes archivos desconocidos ni reemplaces archivos del sistema sin una guía específica."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Catálogo en Internet Archive",
            url: "https://archive.org/details/psp-homebrew-library"
        }
    ]
},

// Juegos de PS1 en PSP
{
    console: "PSP",

    name: "Juegos de PS1 en PSP (PSX2PSP)",

    image: "img/PSP/PSX2PSP.jpg",

    description:
        "Convierte una imagen de un juego propio de PlayStation 1 a EBOOT.PBP para ejecutarla en una PSP compatible.",

    guide: {

        function:
            "PSX2PSP convierte imágenes de juegos de PS1 en el formato EBOOT.PBP que utiliza la PSP para los juegos de PS1.",

        compatibility: {
            PSP: "Para ejecutar EBOOT.PBP creados con PSX2PSP normalmente se necesita un Custom Firmware compatible; el funcionamiento depende del modelo, firmware y juego."
        },

        requirements: [
            "PC con Windows para ejecutar PSX2PSP; el tutorial menciona Windows 7, 8, 8.1 y 10.",
            "Imagen de un disco de PS1 que tengas derecho a utilizar; el tutorial menciona ISO, BIN e IMG.",
            "PSP, Memory Stick y cable USB o lector de tarjetas.",
            "Custom Firmware compatible para ejecutar el EBOOT.PBP convertido."
        ],

        installation: [
            "Descarga y extrae PSX2PSP; ejecuta PSX2PSP.exe.",
            "En Options, configura y guarda la carpeta de salida para los EBOOT.PBP.",
            "En Convert menu, selecciona la imagen de tu propio juego de PS1. Si quieres, configura ICON0.PNG y PIC1.PNG antes de convertir.",
            "Pulsa Convert y espera a que se cree el EBOOT.PBP y la carpeta del juego.",
            "Copia la carpeta generada a PSP/GAME/ en la Memory Stick.",
            "Desconecta la PSP de forma segura y busca el juego en Juego > Memory Stick."
        ],

        usage:
            "Inicia el título desde Juego > Memory Stick. La compatibilidad y el rendimiento dependen del juego, el modelo y la configuración de POPS/CFW.",

        notes:
            "Usa solo copias de juegos que tengas derecho a utilizar; la tarjeta no proporciona juegos ni imágenes de disco. PSX2PSP es una herramienta antigua: el tutorial menciona hasta Windows 10 y no confirma compatibilidad con versiones actuales de Windows. Respalda tus archivos y verifica compatibilidad antes de convertir o instalar.",

        version: "PSX2PSP 1.4.2 (versión indicada en el tutorial)",

        details: [
            {
                title: "Archivos de entrada y salida",

                description:
                    "El tutorial describe la conversión de una imagen de disco a un EBOOT.PBP ejecutable desde el menú de PSP.",

                items: [
                    "Formatos de entrada mencionados: ISO, BIN e IMG.",
                    "El resultado se organiza en una carpeta de juego bajo PSP/GAME/ y contiene EBOOT.PBP.",
                    "La opción Customize PBP permite asignar imágenes como ICON0.PNG y PIC1.PNG."
                ]
            },
            {
                title: "Compatibilidad y uso autorizado",

                description:
                    "La creación del archivo no garantiza que todos los juegos funcionen en cada PSP.",

                items: [
                    "Comprueba los requisitos de firmware y CFW de tu consola.",
                    "El tutorial no detalla los casos multidisco; consulta una guía específica para esos títulos.",
                    "No descargues ni compartas imágenes de juegos comerciales sin autorización."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/jJ5CzLZY#bXyWpLoLCmgppMu6uxQkqg"
        }
    ]
},

// Partidas de PS1 entre PSP y PC
{
    console: "PSP",

    name: "Partidas de PS1 entre PSP y PC (CWCheat)",

    image: "img/PSP/SaveDataPS1PSP.png",

    description:
        "Importa y exporta tarjetas virtuales de juegos de PS1 entre PSP y PC usando archivos .MCR y CWCheat.",

    guide: {

        function:
            "La guía convierte formatos de tarjeta de memoria usados en PC a .MCR para cargarlos en POPS, y exporta desde PSP tarjetas .MCR para usarlas en PC.",

        compatibility: {
            PSP: "Requiere un Custom Firmware compatible y CWCheat con su módulo POPS habilitado; la compatibilidad depende del firmware y del juego."
        },

        requirements: [
            "PSP con Custom Firmware compatible y CWCheat configurado para juegos PS1/POPS.",
            "PC con PSXMemTool para convertir entre .MCR y los formatos de tarjeta admitidos por cada emulador.",
            "Cable USB o lector de tarjetas para transferir los archivos.",
            "Una copia de seguridad de las tarjetas virtuales y partidas originales."
        ],

        installation: [
            "Respalda primero las tarjetas virtuales y partidas que ya utilizas.",
            "Para pasar una partida de PC a PSP, convierte el archivo de tarjeta al formato .MCR con PSXMemTool.",
            "Renombra el archivo con el ID del juego y el sufijo del slot, por ejemplo <ID_DEL_JUEGO>-0.MCR; confirma el ID exacto del título.",
            "Copia el archivo .MCR a ms0:/seplugins/cwcheat/mc/; crea la carpeta mc si no existe.",
            "Inicia el juego de PS1 y abre CWCheat en POPS. En Manage memory cards, carga la tarjeta 1 o 2 desde Memory Stick.",
            "Para exportar de PSP a PC, usa Save memorycard 1 o 2 to Memory Stick en CWCheat y convierte el .MCR exportado si el emulador de PC requiere otro formato."
        ],

        usage:
            "En CWCheat, elige la operación de carga o exportación correspondiente a la tarjeta virtual 1 o 2. La guía antigua indica abrir el menú durante el arranque de POPS, después de desaparecer el logo rojo de PlayStation; el momento puede variar según la versión.",

        notes:
            "La guía es antigua y no confirma compatibilidad con todas las versiones de CFW, CWCheat o POPS. Un ID de juego o sufijo incorrecto puede impedir que se detecte la tarjeta. No sobrescribas archivos originales: conserva copias de seguridad y confirma que la tarjeta cargada corresponde al juego correcto.",

        details: [
            {
                title: "De PC a PSP",

                description:
                    "Los emuladores de PC pueden guardar tarjetas en formatos distintos; CWCheat carga desde la Memory Stick archivos .MCR nombrados para el juego y slot correspondientes.",

                items: [
                    "Convierte el formato de origen a .MCR con PSXMemTool antes de copiarlo.",
                    "Ruta indicada: ms0:/seplugins/cwcheat/mc/.",
                    "En Manage memory cards, selecciona Load memorycard 1 from Memory Stick o Load memorycard 2 from Memory Stick."
                ]
            },
            {
                title: "De PSP a PC",

                description:
                    "CWCheat permite guardar una tarjeta virtual de POPS como archivo en la Memory Stick.",

                items: [
                    "Selecciona Save memorycard 1 to Memory Stick o Save memorycard 2 to Memory Stick.",
                    "Convierte el .MCR exportado a un formato compatible con el emulador de PC, si hace falta.",
                    "El documento también menciona .VMP y una herramienta de conversión VMP a MCR; revisa su compatibilidad antes de usarla."
                ]
            }
        ]
    },

    website: null,

    downloads: [
        {
            name: "Mirror MEGA",
            url: "https://mega.nz/folder/KBAiERrA#mnx4TEm-aDJnT_Qi-09rOw"
        }
    ]
},

];