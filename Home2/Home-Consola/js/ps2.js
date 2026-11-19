const ps2Apps = [

{
    console: "PS2",
    name: "Open PS2 Loader",
    image: "img/opl.jpg",
    description: "Carga juegos desde USB, HDD, SMB y MX4SIO.",

    guide: {

    function:
        "Permite ejecutar juegos de PlayStation 2 desde USB, HDD, SMB y MX4SIO.",

    compatibility: {

        USB: "✅ Compatible",

        HDD: "✅ Compatible",

        MX4SIO: "✅ Compatible"
    },

    requirements: [

        "Free McBoot",

        "Memory Card",

        "Dispositivo con juegos"
    ],

    installation: [

        "Copiar OPL a APPS.",

        "Configurar dispositivos.",

        "Guardar cambios."
    ],

    usage:
        "Seleccionar dispositivo y ejecutar el juego.",

    notes:
        "MX4SIO suele ofrecer mejor rendimiento.",

    version: "1.2.0",

    author: "PS2 Homebrew"
},

    website: "https://github.com/ps2homebrew/Open-PS2-Loader",
    downloads: [
        {
            name: "GitHub",
            url: "https://github.com/ps2homebrew/Open-PS2-Loader/releases"
        },
        {
            name: "MEGA",
            url: "https://mega.nz/"
        }
    ]
},

{
    console: "PS2",
    name: "wLaunchELF",
    image: "img/wlaunchelf.png",
    description: "Administrador de archivos para PlayStation 2.",

    guide: {

    function:
        "Administrador de archivos para PlayStation 2.",

    compatibility: {
        FMCB: "✅ Compatible",
        FunTuna: "✅ Compatible",
        USB: "✅ Compatible",
        MMCE: "✅ Compatible"
    },

    requirements: [
        "PlayStation 2",
        "Método de arranque homebrew"
    ],

    installation: [
        "Copiar el ELF.",
        "Configurar acceso directo."
    ],

    usage:
        "Permite explorar dispositivos y ejecutar aplicaciones ELF.",

    notes:
        "Aplicación fundamental para la mayoría de herramientas PS2.",

    version: "4.43a",

    author: "PS2 Homebrew"
},

    website: "https://github.com/ps2homebrew/wLaunchELF",
    downloads: [
        {
            name: "GitHub",
            url: "https://github.com/ps2homebrew/wLaunchELF/releases"
        },
        {
            name: "MEGA",
            url: "https://mega.nz/"
        }
    ]
},

{
    console: "PS2",
    name: "Free McBoot",
    image: "img/fmcb.png",
    description: "Exploit para iniciar homebrew.",

    guide: {

    function:
        "Exploit para iniciar aplicaciones caseras desde Memory Card.",

    compatibility: {
        PS2: "✅ Compatible",
        USB: "✅ Compatible",
        OPL: "✅ Compatible"
    },

    requirements: [
        "Memory Card",
        "PS2 compatible"
    ],

    installation: [
        "Instalar FMCB.",
        "Insertar la Memory Card."
    ],

    usage:
        "Acceder al menú de aplicaciones al iniciar la consola.",

    notes:
        "Base de muchos proyectos PS2.",

    version: "1.966",

    author: "FMCB Team"
},

    website: "https://www.ps2-home.com",
    downloads: [
        {
            name: "GitHub",
            url: ""
        },
        {
            name: "MEGA",
            url: "https://mega.nz/"
        }
    ]
},

{
    console: "PS2",
    name: "FunTuna",
    image: "img/funtuna.png",
    description: "Exploit alternativo para tarjetas de memoria.",

    guide: {

    function:
        "Alternativa ligera a FMCB para iniciar homebrew.",

    compatibility: {
        PS2: "✅ Compatible",
        Fortuna: "✅ Basado en Fortuna",
        OPL: "✅ Compatible"
    },

    requirements: [
        "Memory Card",
        "Archivos FunTuna"
    ],

    installation: [
        "Copiar archivos.",
        "Insertar la tarjeta."
    ],

    usage:
        "Iniciar la consola y ejecutar el exploit.",

    notes:
        "Ideal para instalaciones rápidas.",

    version: "1.0",

    author: "israpps"
},

    website: "https://github.com/israpps",
    downloads: [
        {
            name: "GitHub",
            url: ""
        },
        {
            name: "MEGA",
            url: "https://mega.nz/"
        }
    ]
},

{
    console: "PS2",

    name: "Apollo Save Tool",

    image: "img/apollo-save-tool.png",

    description:
        "Administrador de partidas guardadas para PlayStation 2.",

    guide: {

        function:
            "Permite gestionar, importar, exportar y respaldar partidas guardadas de PlayStation 2.",

        compatibility: {
            FMCB: "✅ Compatible",
            FunTuna: "✅ Compatible",
            USB: "✅ Compatible",
            MemoryCard: "✅ Compatible"
        },

        requirements: [
            "PlayStation 2",
            "Free McBoot o FunTuna"
        ],

        installation: [
            "Copiar APOLLO.ELF.",
            "Ejecutar desde el menú Homebrew."
        ],

        usage:
            "Gestiona partidas guardadas almacenadas en tarjetas de memoria y dispositivos USB.",

        notes:
            "Permite realizar copias de seguridad antes de modificar cualquier partida.",

        version: "Actual",

        author: "bucanero"
    },

    website:
        "https://github.com/bucanero/apollo-ps2",
    downloads: [
        {
            name: "GitHub",
            url: "https://github.com/bucanero/apollo-ps2/releases"
        },
        {
            name: "MEGA",
            url: "https://mega.nz/"
        }
    ]
}

];