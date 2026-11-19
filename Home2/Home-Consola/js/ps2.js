const r3zDeviceModeDetails = [
  {
    title: "Unidades disponibles: solo exFAT (USB)",

    description:
      "Rutas disponibles en la compilación configurada para USB exFAT.",

    table: {
      headers: ["Ruta", "Descripción"],

      rows: [
        ["MC0:/", "Memory Card física 1."],
        ["MC1:/", "Memory Card física 2."],
        [
          "hdd0:/",
          "Disco duro interno; solo PS2 FAT con adaptador de red IDE.",
        ],
        ["cdfs:/", "Unidad lectora de DVD/CD."],
        ["MASS:", "Unidad USB en formato exFAT o FAT32."],
        ["host:/", "Directorio compartido mediante PC/host bridge."],
        ["MISC/", "Carpeta miscelánea del sistema."],
      ],
    },
  },
  {
    title: "Unidades disponibles: PSX MemCard Gen2 (MMCE)",

    description:
      "Rutas disponibles en la compilación para PSX MemCard Gen2 y sus slots virtuales.",

    table: {
      headers: ["Ruta", "Descripción"],

      rows: [
        ["MC0:/", "Memory Card física 1."],
        ["MC1:/", "Memory Card física 2."],
        ["MMCE0:/", "PSX MemCard Gen2: primer slot virtual."],
        ["MMCE1:/", "PSX MemCard Gen2: segundo slot virtual."],
        ["hdd0:/", "Disco duro interno; solo PS2 FAT con adaptador IDE."],
        ["cdfs:/", "Unidad lectora de DVD/CD."],
        ["MASS:", "Unidad USB en formato exFAT o FAT32."],
        ["host:/", "Directorio compartido mediante PC/host bridge."],
        ["MISC/", "Carpeta miscelánea del sistema."],
      ],
    },
  },
  {
    title: "Unidades disponibles: MX4SIO",

    description:
      "Rutas disponibles en la compilación configurada para el adaptador MX4SIO.",

    table: {
      headers: ["Ruta", "Descripción"],

      rows: [
        ["MC0:/", "Memory Card física 1."],
        [
          "hdd0:/",
          "Disco duro interno; solo PS2 FAT con adaptador de red IDE.",
        ],
        ["cdfs:/", "Unidad lectora de DVD/CD."],
        ["MASS:", "Unidad USB en formato exFAT o FAT32."],
        ["MX4SIO:/", "Tarjeta SD en el adaptador MX4SIO."],
        ["host:/", "Directorio compartido mediante PC/host bridge."],
        ["MISC/", "Carpeta miscelánea del sistema."],
      ],
    },
  },
];

const ps2Apps = [
  //PS2 Chip Matrix
  {
    console: "PS2",

    name: "PS2 Chip Matrix v1.93",

    image: "img/PS2/chip-matrix.jpg",

    description:
      "Manual completo de configuración del chip Matrix Infinity v1.93 para PlayStation 2.",

    website: null,

    downloads: [],

    guide: {
      function:
        "Permite configurar las funciones internas del chip Matrix Infinity, opciones de video, compatibilidad con HDD, Memory Card y modos de arranque.",

      compatibility: {
        PS2FAT: "✅ Compatible",

        PS2SLIM: "✅ Compatible",

        MatrixInfinity: "✅ Compatible",
      },

      requirements: [
        "PlayStation 2 con Matrix Infinity",
        "Control PS2",
        "Acceso al menú Infinity Configuration",
      ],

      installation: [
        "No requiere instalación.",
        "El chip debe estar previamente instalado en la consola.",
      ],

      usage:
        "Encender la consola presionando TRIÁNGULO + CÍRCULO para acceder al menú de configuración.",

      notes:
        "Algunas configuraciones afectan el comportamiento de video de juegos PAL y NTSC.",

      version: "1.93",

      author: "Matrix Team",

      details: [
        {
          title: "Activar Matrix",

          description:
            "Restaurar el funcionamiento normal del chip Matrix Infinity.",

          items: [
            "Apagar completamente la consola.",
            "Encender la consola normalmente.",
            "No mantener ningún botón presionado durante el arranque.",
            "El chip Matrix volverá a funcionar de forma automática.",
          ],
        },

        {
          title: "Desactivar Matrix",

          description: "Método para iniciar la consola sin funciones del chip.",

          items: [
            "Mantener presionado START durante el encendido.",
            "La consola iniciará normalmente.",
          ],
        },

        {
          title: "PS2 SCREEN FIX",

          description: "Configuración de salida de video.",

          items: [
            "OFF: No parchea ningún juego.",
            "COLOR: Corrige juegos PAL en blanco y negro.",
            "PAL: Fuerza juegos NTSC a PAL.",
            "NTSC: Fuerza juegos PAL a NTSC.",
            "PAL60: Convierte 576i a 480i.",
            "VGA: Salida de video 640x480.",
          ],
        },

        {
          title: "Y SCREEN FIX",

          description: "Permite mover verticalmente la imagen.",

          items: [
            "OFF: Sin corrección.",
            "AUTO: Centrado automático.",
            "+5, -5, +10, -10, +15, -15, +20, -20.",
          ],
        },

        {
          title: "PSX SCREEN FIX",

          description: "Centra automáticamente juegos de PlayStation 1.",

          items: ["ON: Activado.", "OFF: Desactivado."],
        },

        {
          title: "PSX MULTI DISK",

          description: "Compatibilidad con compilaciones multidisco de PSX.",

          items: ["ON: Activado.", "OFF: Desactivado."],
        },

        {
          title: "MC16 PATCH",

          description: "Compatibilidad con Memory Card de gran capacidad.",

          items: [
            "Permite utilizar tarjetas de 64MB o superiores.",
            "ON: Activado.",
            "OFF: Desactivado.",
          ],
        },

        {
          title: "ATAD AUTO PATCH",

          description: "Compatibilidad con discos duros no oficiales.",

          items: [
            "Permite utilizar HDD alternativos.",
            "ON: Activado.",
            "OFF: Desactivado.",
          ],
        },

        {
          title: "MACROVISION FIX",

          description: "Elimina restricciones asociadas a reproducción DVD.",

          items: ["ON: Activado.", "OFF: Desactivado."],
        },

        {
          title: "GREEN FIX",

          description: "Corrige la pantalla verde en reproducción de video.",

          items: ["ON: Activado.", "OFF: Desactivado."],
        },

        {
          title: "DVD VIDEO REGION",

          description: "Configuración de región para reproducción DVD.",

          items: [
            "Región 1: EEUU y Canadá.",
            "Región 2: Europa y Japón.",
            "Región 3: Asia.",
            "Región 4: América Latina y Oceanía.",
            "Región 5: Rusia y África.",
            "Región 6: China.",
            "Región 7: Uso especial.",
            "Región 8: Transporte aéreo y marítimo.",
          ],
        },

        {
          title: "DVD9 DL SUPPORT",

          description: "Compatibilidad con discos de doble capa.",

          items: ["ON: Activado.", "OFF: Desactivado."],
        },

        {
          title: "BOOT MODE",

          description: "Métodos de arranque disponibles.",

          items: ["AUTO.", "FAST.", "INFMAN.", "DEV1.", "DEV2.", "DVDV."],
        },

        {
          title: "PAD DETECT TIME",

          description: "Tiempo de detección del mando.",

          items: [
            "2 segundos.",
            "4 segundos.",
            "6 segundos.",
            "8 segundos.",
            "10 segundos.",
          ],
        },

        {
          title: "BOOT LOGO",

          description: "Muestra u oculta el logo Matrix.",

          items: ["ON: Mostrar logo.", "OFF: Ocultar logo."],
        },
      ],
    },
  },
  //PS2 FreeDVDBoot
  {
    console: "PS2",

    name: "FreeDVDBoot",

    image: "img/PS2/freedvdboot.png",

    description:
      "Exploit para PlayStation 2 que permite ejecutar uLaunchELF y aplicaciones homebrew desde un DVD grabado sin modificar la consola.",

    website: "https://github.com/CTurt/FreeDVDBoot",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/CTurt/FreeDVDBoot/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/OJQ3wJwT#NVGgoTWrqUyf_ILKqDQ5zw",
      },
    ],

    guide: {
      function:
        "Aprovecha una vulnerabilidad del reproductor DVD de PlayStation 2 para iniciar uLaunchELF y otras aplicaciones homebrew.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "✅ Compatible",

        FAT32: "✅ Compatible",

        exFAT: "⚠️ Solo para aplicaciones compatibles",
      },

      requirements: [
        "DVD grabable",
        "Pendrive FAT32(Preferencia) o exFAT",
        "Consola compatible",
      ],

      installation: [
        "Verificar compatibilidad de la consola.",
        "Descargar la ISO correcta.",
        "Grabar la ISO en un DVD.",
        "Insertar el DVD en la consola.",
        "Ejecutar uLaunchELF.",
      ],

      usage:
        "Permite ejecutar aplicaciones homebrew temporalmente sin instalar ningún exploit permanente.",

      notes:
        "Se recomienda grabar el DVD a la velocidad más baja posible para obtener mejor compatibilidad.",

      version: "Actual",

      author: "CTurt",

      details: [
        {
          title: "Comprobar compatibilidad",

          description:
            "Verificar que la consola sea compatible con FreeDVDBoot.",

          items: [
            "Abrir el navegador de PS2.",
            "Presionar TRIÁNGULO.",
            "Anotar la versión del reproductor DVD.",
            "Comparar con la lista de compatibilidad oficial.",
          ],
        },

        {
          title: "Preparar el DVD",

          description: "Grabar correctamente la imagen.",

          items: [
            "Abrir UltraISO o software similar.",
            "Seleccionar la ISO correspondiente.",
            "Grabar a velocidad baja.",
            "Finalizar el disco.",
          ],
        },

        {
          title: "Preparar USB",

          description: "Configuración recomendada.",

          items: [
            "Formatear a FAT32.",
            "Copiar aplicaciones homebrew.",
            "Conectar USB a PS2.",
          ],
        },

        {
          title: "Iniciar FreeDVDBoot",

          description: "Arranque del exploit.",

          items: [
            "Insertar el DVD grabado.",
            "Abrir desde el navegador si es necesario.",
            "Esperar carga de uLaunchELF.",
          ],
        },
      ],
    },
  },
  //PS2 Free McBoot
  {
    console: "PS2",

    name: "Free McBoot",

    image: "img/PS2/fmcb.png",

    description:
      "Exploit permanente para Memory Card que permite iniciar aplicaciones homebrew automáticamente al encender la consola.",

    website: "https://github.com/israpps/FreeMcBoot-Installer",

    downloads: [
      {
        name: "GitHub",
        url: "https://github.com/israpps/FreeMcBoot-Installer/releases",
      },
      {
        name: "MEGA",
        url: "https://mega.nz/folder/SVAWTTLb#dOt2fvuBsnqGFpqW7jZSYw",
      },
    ],

    guide: {
      function:
        "Instala un entorno de arranque en una Memory Card para ejecutar aplicaciones homebrew sin necesidad de DVD ni chip.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "✅ Compatible",

        FAT32: "✅ Compatible",

        exFAT: "⚠️ Dependiendo de la aplicación utilizada",
      },

      requirements: [
        "Memory Card PS2",
        "Pendrive FAT32 o exFAT",
        "Acceso a uLaunchELF",
      ],

      installation: [
        "Ejecutar FMCBInstaller.elf desde uLaunchELF.",
        "Seleccionar Install.",
        "Elegir Memory Card Slot 1.",
        "Esperar la instalación.",
        "Reiniciar la consola.",
      ],

      usage:
        "Al iniciar la consola con la Memory Card instalada se cargará automáticamente Free McBoot.",

      notes:
        "Una vez instalado FMCB puede utilizar dispositivos USB, MX4SIO, MMCE, discos duros y otras soluciones homebrew compatibles.",

      version: "Actual",

      author: "Neme",

      details: [
        {
          title: "Preparar instalación",

          description: "Antes de instalar FMCB.",

          items: [
            "Insertar Memory Card en Slot 1.",
            "Verificar espacio disponible.",
            "Ejecutar FMCBInstaller.elf.",
          ],
        },

        {
          title: "Opciones del instalador",

          description: "Funciones disponibles.",

          items: [
            "Install.",
            "Multi Install.",
            "Uninstall FMCB.",
            "Uninstall MI.",
            "Exit.",
          ],
        },

        {
          title: "Instalación recomendada",

          description: "Método más utilizado.",

          items: [
            "Seleccionar Install.",
            "Confirmar Slot 1.",
            "Elegir instalación Normal.",
            "Esperar finalización.",
            "Aceptar con OK.",
          ],
        },

        {
          title: "Archivos de FMCB",

          description: "Archivos que no deben eliminarse.",

          items: [
            "BOOT.",
            "SYS-CONF.",
            "FREE_MCBOOT.",
            "ARCHIVOS DE CONFIGURACIÓN.",
          ],
        },

        {
          title: "Comprobar instalación",

          description: "Verificar que FMCB funciona correctamente.",

          items: [
            "Retirar DVD de instalación.",
            "Reiniciar consola.",
            "Esperar aparición del menú FMCB.",
            "Comprobar acceso a aplicaciones.",
          ],
        },
      ],
    },
  },
  //FunTuna
  {
    console: "PS2",

    name: "FunTuna",

    image: "img/PS2/funtuna.png",

    description:
      "Exploit para PlayStation 2 que permite cargar Fortuna, uLaunchELF y homebrew desde una Memory Card sin necesidad de Free McBoot.",

    website: "https://github.com/israpps/Funtuna-Fork",

    downloads: [
      {
        name: "GitHub",
        url: "https://github.com/israpps/Funtuna-Fork/releases",
      },
      {
        name: "Mega",
        url: "https://mega.nz/folder/LYITyTjJ#V-WgMLYoAtrs0BY4V6p1Ow",
      },
    ],

    guide: {
      function:
        "Instala un exploit basado en Fortuna que permite ejecutar homebrew utilizando una Memory Card.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "✅ Compatible",

        FAT32: "✅ Compatible",

        exFAT: "⚠️ Según aplicación",
      },

      requirements: [
        "Memory Card PS2",
        "Pendrive FAT32 o exFAT",
        "Acceso a uLaunchELF",
      ],

      installation: [
        "Preparar USB con FunTuna.",
        "Iniciar uLaunchELF.",
        "Copiar los archivos a la Memory Card.",
        "Reiniciar la consola.",
        "Iniciar Fortuna desde el navegador.",
      ],

      usage:
        "Permite cargar aplicaciones homebrew desde una Memory Card mediante el exploit Fortuna.",

      notes:
        "FunTuna puede utilizarse junto a aplicaciones configuradas para ejecutarse desde USB, MX4SIO y MMCE.",

      version: "Actual",

      author: "israpps",

      details: [
        {
          title: "¿Cuándo usar FunTuna?",

          description:
            "Alternativa para consolas donde Free McBoot no es la mejor opción.",

          items: [
            "Compatible con modelos más recientes.",
            "Permite ejecutar homebrew.",
            "Puede convivir con OPL.",
            "Compatible con MX4SIO.",
            "Compatible con MMCE.",
          ],
        },

        {
          title: "Preparar USB",

          description: "Configurar archivos de instalación.",

          items: [
            "Formatear USB en FAT32.",
            "Extraer el paquete FunTuna.",
            "Copiar los archivos al USB.",
          ],
        },

        {
          title: "Arrancar uLaunchELF",

          description: "Se requiere acceso previo a uLaunchELF.",

          items: [
            "Utilizar FreeDVDBoot.",
            "Iniciar uLaunchELF.",
            "Acceder a FileBrowser.",
          ],
        },

        {
          title: "Instalación mediante archivo PSU",

          description: "Método utilizado por la mayoría de versiones.",

          items: [
            "Entrar en MASS:/",
            "Seleccionar archivo .PSU.",
            "Presionar R1.",
            "Seleccionar Copy.",
            "Entrar en MC0:/",
            "Presionar R1.",
            "Seleccionar Paste.",
            "Esperar la extracción.",
          ],
        },

        {
          title: "Instalación mediante ELF",

          description: "Método utilizado por algunas versiones.",

          items: [
            "Entrar en MASS:/",
            "Ejecutar el archivo ELF.",
            "Seleccionar Memory Card destino.",
            "Instalar automáticamente.",
          ],
        },

        {
          title: "Seleccionar ranura",

          description: "Elegir dónde instalar FunTuna.",

          items: ["L1: MC0", "R1: MC1"],
        },

        {
          title: "Tipo de instalación",

          description: "Seleccionar modo de instalación.",

          items: ["L2: Modo manual.", "R2: Modo automático."],
        },

        {
          title: "Finalizar instalación",

          description: "Pasos finales.",

          items: [
            "Presionar START para salir.",
            "Reiniciar la consola.",
            "Abrir Navegador.",
            "Entrar a Memory Card.",
            "Salir nuevamente.",
            "Fortuna se iniciará automáticamente.",
          ],
        },
      ],
    },
  },
  //OpenTuna
  {
    console: "PS2",

    name: "OpenTuna",

    image: "img/PS2/OpenTuna.jpg",

    description:
      "Exploit para PlayStation 2 basado en Fortuna que permite iniciar aplicaciones homebrew desde una Memory Card sin necesidad de Free McBoot.",

    website: "https://github.com/ps2homebrew/opentuna-installer",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/ps2homebrew/opentuna-installer/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/nEZVSIhb#HDBreWUms5DT6bedy8bIgg",
      },
    ],

    guide: {
      function:
        "Permite ejecutar homebrew desde una Memory Card utilizando un exploit compatible con una amplia variedad de modelos PlayStation 2.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "✅ Compatible",

        FAT32: "✅ Compatible",

        exFAT: "✅ Compatible",
      },

      requirements: [
        "Memory Card PS2",
        "Pendrive FAT32 o exFAT",
        "Acceso a uLaunchELF",
        "Archivos OpenTuna",
      ],

      installation: [
        "Copiar OpenTuna al pendrive.",
        "Arrancar uLaunchELF.",
        "Transferir OpenTuna a la Memory Card.",
        "Reiniciar la consola.",
        "Abrir Browser para ejecutar OpenTuna.",
      ],

      usage:
        "Permite iniciar automáticamente aplicaciones homebrew configuradas en la Memory Card.",

      notes:
        "OpenTuna es una evolución de Fortuna diseñada para mejorar compatibilidad y facilitar la instalación en consolas donde otras alternativas pueden presentar limitaciones.",

      version: "Actual",

      author: "israpps",

      details: [
        {
          title: "¿Qué es OpenTuna?",

          description: "Exploit moderno para PlayStation 2.",

          items: [
            "Basado en Fortuna.",
            "Permite ejecutar homebrew.",
            "No requiere chip Matrix.",
            "No requiere Free McBoot.",
          ],
        },

        {
          title: "Preparar USB",

          description: "Configurar los archivos de instalación.",

          items: [
            "Formatear en FAT32 o exFAT.",
            "Extraer OpenTuna.",
            "Copiar archivos al USB.",
          ],
        },

        {
          title: "Instalar OpenTuna",

          description: "Proceso general de instalación.",

          items: [
            "Iniciar uLaunchELF.",
            "Abrir MASS:/",
            "Localizar archivos OpenTuna.",
            "Copiar contenido a Memory Card.",
            "Esperar finalización.",
          ],
        },

        {
          title: "Primer arranque",

          description: "Ejecución inicial del exploit.",

          items: [
            "Reiniciar consola.",
            "Entrar al Browser.",
            "Abrir Memory Card.",
            "Salir del Browser.",
            "OpenTuna iniciará automáticamente.",
          ],
        },

        {
          title: "Compatibilidad con aplicaciones",

          description: "Aplicaciones normalmente utilizadas con OpenTuna.",

          items: [
            "uLaunchELF",
            "OPL",
            "Apollo Save Tool",
            "RetroArch",
            "Simple Media System",
            "Memory Card Annihilator",
          ],
        },

        {
          title: "Almacenamiento recomendado",

          description: "Métodos actuales recomendados para PS2.",

          items: ["USB FAT32", "USB exFAT", "MX4SIO", "MMCE", "Memory Card"],
        },
      ],
    },
  },
  //PS2BBL
  {
    console: "PS2",

    name: "PS2BBL",

    image: "img/PS2/PS2BBL.jpg",

    description:
      "Bootloader moderno para PlayStation 2 que permite cargar automáticamente aplicaciones desde Memory Card, USB, MX4SIO y MMCE.",

    website: "https://israpps.github.io/PlayStation2-Basic-BootLoader/",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://israpps.github.io/PlayStation2-Basic-BootLoader/Downloads/",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/SN51lKLa#Zs0uLqlzU0-ZY_FEeqw8jQ",
      },
    ],

    guide: {
      function:
        "Permite iniciar aplicaciones de forma automática sin depender de menús tradicionales, funcionando como lanzador y gestor de arranque.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "✅ Compatible",

        FAT32: "✅ Compatible",

        exFAT: "✅ Compatible",
      },

      requirements: [
        "Memory Card PS2",
        "PS2BBL",
        "uLaunchELF o exploit compatible",
        "USB, MX4SIO o MMCE",
      ],

      installation: [
        "Copiar archivos PS2BBL a la Memory Card.",
        "Configurar rutas de arranque.",
        "Reiniciar la consola.",
        "Verificar carga automática.",
      ],

      usage:
        "Permite iniciar automáticamente aplicaciones como OPL, Apollo Save Tool, RetroArch o uLaunchELF durante el arranque de la consola.",

      notes:
        "PS2BBL está diseñado para integrarse con métodos modernos de almacenamiento como MX4SIO y MMCE.",

      version: "Actual",

      author: "israpps",

      details: [
        {
          title: "¿Qué es PS2BBL?",

          description: "Sistema de arranque moderno para PlayStation 2.",

          items: [
            "Bootloader ligero.",
            "Carga aplicaciones automáticamente.",
            "Reduce pasos de arranque.",
            "Compatible con múltiples dispositivos.",
          ],
        },

        {
          title: "Dispositivos compatibles",

          description: "Fuentes de carga soportadas.",

          items: ["USB FAT32", "USB exFAT", "MX4SIO", "MMCE", "Memory Card"],
        },

        {
          title: "Aplicaciones compatibles",

          description: "Programas comúnmente utilizados.",

          items: [
            "OPL",
            "Apollo Save Tool",
            "RetroArch",
            "uLaunchELF",
            "wLaunchELF",
            "Simple Media System",
          ],
        },

        {
          title: "Ventajas",

          description: "Principales beneficios de PS2BBL.",

          items: [
            "Arranque más rápido.",
            "Menos dependencia de FMCB.",
            "Mejor integración con MX4SIO.",
            "Mejor integración con MMCE.",
            "Configuración flexible.",
          ],
        },

        {
          title: "Configuración recomendada",

          description: "Entorno moderno recomendado para PS2.",

          items: [
            "OpenTuna o FMCB.",
            "PS2BBL.",
            "OPL reciente.",
            "MX4SIO o MMCE.",
            "USB para aplicaciones adicionales.",
          ],
        },
      ],
    },
  },
  //Free McTuna
  {
    console: "PS2",

    name: "Free McTuna",

    image: "img/PS2/Free-McTuna.png",

    description:
      "Instalador simplificado basado en OpenTuna y FunTuna que permite preparar Memory Cards para ejecutar homebrew en PlayStation 2.",

    website: "https://github.com/saildot4k/OpenTuna_2_PS2BBL_2_OSDMenu",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/saildot4k/OpenTuna_2_PS2BBL_2_OSDMenu/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/7VZB2LpJ#FLgdCJwZSTHdEWkz87-DmQ",
      },
    ],

    guide: {
      function:
        "Facilita la instalación de OpenTuna y aplicaciones homebrew en una Memory Card de PlayStation 2.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "✅ Compatible",

        FAT32: "✅ Compatible",

        exFAT: "✅ Compatible",
      },

      requirements: [
        "Memory Card PS2",
        "Pendrive FAT32 o exFAT",
        "uLaunchELF",
        "Archivos Free McTuna",
      ],

      installation: [
        "Copiar Free McTuna al dispositivo USB.",
        "Ejecutar desde uLaunchELF.",
        "Seleccionar la ranura de Memory Card.",
        "Instalar automáticamente.",
        "Reiniciar la consola.",
      ],

      usage:
        "Permite crear una Memory Card preparada para ejecutar aplicaciones homebrew sin depender de FMCB.",

      notes:
        "Es uno de los métodos más sencillos para preparar una Memory Card junto con OpenTuna.",

      version: "Actual",

      author: "israpps",

      details: [
        {
          title: "¿Qué es Free McTuna?",

          description:
            "Herramienta diseñada para simplificar la instalación de OpenTuna.",

          items: [
            "Instalación rápida.",
            "Compatible con la mayoría de PS2.",
            "Basado en OpenTuna.",
            "Preparación automática de Memory Card.",
          ],
        },

        {
          title: "Preparar USB",

          description: "Configuración recomendada.",

          items: [
            "Formatear FAT32 o exFAT.",
            "Extraer archivos Free McTuna.",
            "Copiar al dispositivo USB.",
          ],
        },

        {
          title: "Instalación",

          description: "Proceso básico.",

          items: [
            "Abrir uLaunchELF.",
            "Entrar en MASS:/",
            "Ejecutar FreeMcTuna.",
            "Seleccionar Memory Card.",
            "Confirmar instalación.",
          ],
        },

        {
          title: "Primer arranque",

          description: "Comprobación del funcionamiento.",

          items: [
            "Apagar la consola.",
            "Retirar el medio de instalación.",
            "Encender nuevamente.",
            "Abrir Browser.",
            "Verificar carga del exploit.",
          ],
        },

        {
          title: "Compatibilidad moderna",

          description: "Métodos de almacenamiento recomendados.",

          items: [
            "USB",
            "MX4SIO",
            "MMCE",
            "Memory Card",
            "Pendrive FAT32",
            "Pendrive exFAT",
          ],
        },

        {
          title: "Aplicaciones compatibles",

          description: "Homebrew utilizado frecuentemente.",

          items: [
            "OPL",
            "PS2BBL",
            "Apollo Save Tool",
            "RetroArch",
            "uLaunchELF",
            "wLaunchELF",
          ],
        },
      ],
    },
  },
  //PSxMemCard Gen2 (MMCE)
  {
    console: "PS2",

    name: "PSxMemCard Gen2 (MMCE)",

    image: "img/PS2/psxmemcard-gen2.jpg",

    description:
      "Dispositivo basado en tarjeta microSD que permite almacenar juegos, aplicaciones y archivos para PlayStation 2 mediante la interfaz Memory Card.",

    website: "https://github.com/sd2psXtd/firmware",

    downloads: [
      {
        name: "Firmware Oficial",
        url: "https://github.com/sd2psXtd/firmware/releases",
      },
      {
        name: "Splash Generator",
        url: "https://sd2psxtd.github.io/splashgen/splashgen.html",
      },
      {
        name: "Memory Cards Virtuales",
        url: "https://sd2psx.net/ps2-exploit.html#step-2-place-exploit-memory-card-image-onto-the-microsd-card",
      },
      {
        name: "Memory Card Browser",
        url: "https://sd2psxtd.github.io/memcard_browser/index.html",
      },
      {
        name: "Mega Mirror",
        url: "https://mega.nz/folder/vZwTFbRI#FAp0MFxAycNylvG5y_PUpg",
      },
    ],

    guide: {
      function:
        "Permite utilizar una tarjeta microSD como sistema de almacenamiento para aplicaciones, OPL y otros usos compatibles con PlayStation 2.",

      compatibility: {
        MMCE: "✅ Compatible",
      },

      requirements: [
        "PSxMemCard Gen2 (MMCE)",
        "Cable USB",
        "PC",
        "Tarjeta microSD",
      ],

      installation: [
        "Conectar PSxMemCard Gen2 al PC.",
        "Comprobar la versión de firmware instalada.",
        "Descargar el firmware más reciente.",
        "Copiar el archivo UF2 al dispositivo.",
        "Verificar la actualización.",
      ],

      usage:
        "Permite utilizar almacenamiento moderno mediante microSD directamente desde la Memory Card.",

      notes:
        "Se recomienda mantener siempre actualizado el firmware para obtener mejoras de compatibilidad y rendimiento.",

      version: "Consultar firmware instalado",

      author: "sd2psXtd Team",

      details: [
        {
          title: "Consultar versión instalada",

          description: "Comprobar la versión actual de firmware.",

          items: [
            "Conectar PSxMemCard Gen2 mediante USB.",
            "Encender la consola.",
            "Presionar BT1 + BT2.",
            "Entrar al menú Info.",
            "Mantener pulsado BT2.",
            "Anotar la versión instalada.",
          ],
        },

        {
          title: "Descargar actualización",

          description: "Obtener el firmware más reciente.",

          items: [
            "Abrir la página oficial del proyecto.",
            "Entrar en Releases.",
            "Localizar la versión más reciente.",
            "Descargar el archivo sd2psx.uf2.",
          ],
        },

        {
          title: "Modo actualización",

          description: "Acceder al almacenamiento interno del dispositivo.",

          items: [
            "Desconectar PSxMemCard Gen2.",
            "Mantener presionado BT1.",
            "Conectar el cable USB al PC.",
            "Esperar a que aparezca como unidad USB.",
          ],
        },

        {
          title: "Instalar firmware",

          description: "Copiar el nuevo firmware al dispositivo.",

          items: [
            "Abrir la unidad detectada.",
            "Copiar sd2psx.uf2.",
            "Esperar la transferencia.",
            "El dispositivo se reiniciará automáticamente.",
          ],
        },

        {
          title: "Verificar actualización",

          description: "Comprobar que el proceso finalizó correctamente.",

          items: [
            "Conectar nuevamente el dispositivo.",
            "Abrir el menú Info.",
            "Revisar la versión instalada.",
            "Confirmar que coincide con la descargada.",
          ],
        },
        {
          title: "Personalizar pantalla de inicio",

          description:
            "Crear una imagen Splash personalizada para PSxMemCard Gen2.",

          items: [
            "Abrir Splash Generator.",
            "Seleccionar una imagen compatible.",
            "Configurar la vista previa.",
            "Generar el archivo sd2psXtd descargar en binario (Binary).",
            "Copiar el archivo a la microSD.",
            "Agregar a MemoryCards y dejarlo del mismo nombre que la memory card.",
            "Reiniciar el dispositivo para aplicar los cambios.",
          ],
        },
        {
          title: "Descargar Memory Cards Virtuales",

          description:
            "Instalar imágenes de Memory Card virtuales preconfiguradas desde la web oficial de PSxMemCard Gen2.",

          items: [
            "Abrir la guía oficial de PS2 Exploit.",
            "Descargar la imagen de Memory Card adecuada para la consola.",
            "Extraer los archivos descargados si es necesario.",
            "Conectar la microSD de PSxMemCard Gen2 al PC.",
            "Acceder a la carpeta MemoryCards de la microSD.",
            "Copiar la imagen de Memory Card descargada a dicha carpeta.",
            "Expulsar la microSD de forma segura.",
            "Insertar nuevamente la PSxMemCard Gen2 en la consola.",
            "Verificar que la Memory Card Virtual aparezca correctamente.",
          ],
        },
        {
          title: "Editor de Memory Cards",

          description:
            "Permite administrar, visualizar y modificar Memory Cards virtuales desde el navegador web.",

          items: [
            "Abrir Memory Card Browser.",
            "Cargar una Memory Card virtual existente.",
            "Visualizar el contenido de la tarjeta.",
            "Importar partidas guardadas.",
            "Exportar partidas guardadas.",
            "Eliminar partidas no deseadas.",
            "Renombrar partidas compatibles.",
            "Guardar los cambios realizados.",
            "Copiar la Memory Card actualizada a la microSD.",
          ],
        },

        {
          title: "Ventajas de MMCE",

          description: "Motivos para utilizar este sistema en PS2.",

          items: [
            "Compatible con OPL.",
            "Compatible con PS2BBL.",
            "Compatible con OpenTuna.",
            "Compatible con Free McBoot.",
            "Permite utilizar microSD modernas.",
            "Fácil actualización mediante USB.",
          ],
        },
      ],
    },
  },
  //Open PS2 Loader (OPL) Oficial
  {
    console: "PS2",

    name: "Open PS2 Loader (OPL) Oficial",

    image: "img/PS2/opl.jpg",

    description:
      "Cargador de aplicaciones y juegos para PlayStation 2 compatible con USB, recursos compartidos SMB y disco duro interno.",

    website: "https://github.com/ps2homebrew/Open-PS2-Loader",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/ps2homebrew/Open-PS2-Loader/releases",
      },
      {
        name: "Mega Mirror",
        url: "https://mega.nz/folder/PUIBlL7Y#-Wzn9nj8uVeSIWlNCJ9mJQ",
      },
    ],

    guide: {
      function:
        "Permite ejecutar aplicaciones y cargar juegos desde dispositivos USB, recursos compartidos SMB y el disco duro interno de PS2.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "❌ No compatible",

        FAT32: "✅ Compatible",

        exFAT: "⚠️ Según la versión de OPL y el dispositivo utilizado",
      },

      requirements: [
        "PlayStation 2 con FMCB o FunTuna, o acceso a uLaunchELF",
        "USB en formato FAT32",
        "Archivo ELF de Open PS2 Loader",
        "Memory Card con espacio disponible, si se instalará allí",
      ],

      installation: [
        "Descargar y descomprimir la versión de OPL que se desea utilizar.",
        "Copiar el archivo ELF al USB.",
        "Iniciar uLaunchELF y abrir MASS:/ para localizar el ELF.",
        "Ejecutar el ELF desde el USB o copiarlo a la Memory Card.",
      ],

      usage:
        "OPL puede ejecutarse desde USB y configurarse como una opción del menú de FMCB o FunTuna.",

      notes:
        "Antes de reemplazar un ELF o modificar el menú de FunTuna/FMCB, conserva una copia de seguridad de los archivos y la configuración actuales. Los nombres de archivo y las opciones pueden variar entre versiones.",

      version: "Consultar GitHub Releases",

      author: "ps2homebrew",

      details: [
        {
          title: "Actualizar OPL en la Memory Card",

          description:
            "Instala el ELF actualizado en la carpeta APPS de la Memory Card.",

          items: [
            "Descargar la versión de OPL y descomprimir el paquete.",
            "Copiar al USB el archivo OPNPS2LD.ELF incluido; MASS:/APPS/ sirve como ubicación de referencia en el USB.",
            "Conectar el USB a la consola e iniciar FMCB o FunTuna.",
            "Abrir uLaunchELF y entrar a MASS:/APPS/ para localizar el ELF.",
            "En la Memory Card elegida (MC0: o MC1:), crear APPS si no existe.",
            "Copiar OPNPS2LD.ELF a mc?:/APPS/; si ya existe una versión, respaldarla antes de reemplazarla.",
            "Configurar o actualizar el acceso directo de FMCB/FunTuna para que apunte al nuevo archivo.",
            "Reiniciar la consola y comprobar que OPL inicia correctamente.",
          ],
        },

        {
          title: "Agregar OPL al menú de FunTuna",

          description:
            "Configura una opción de menú que apunte al archivo ELF de OPL.",

          items: [
            "Iniciar Configure FunTuna y abrir Configure OSDSYS options.",
            "Elegir un ítem de menú disponible y asignarle un nombre, por ejemplo OPL.",
            "En Path1, seleccionar la ubicación del ELF de OPL. Path2 y Path3 son opcionales.",
            "Guardar la configuración en la Memory Card correcta (MC0 o MC1).",
            "Volver al menú de FunTuna y reiniciar para comprobar el nuevo acceso directo.",
          ],
        },

        {
          title: "Uso desde USB",

          description:
            "Usa un USB FAT32 para transferir el ELF.",

          items: [
            "Formatear el USB como FAT32.",
            "Copiar el archivo ELF de OPL al USB.",
            "En uLaunchELF, abrir MASS:/ y ejecutar el archivo para probarlo.",
            "Si se configuró un acceso directo, verificar que Path1 apunte a la ubicación correcta.",
          ],
        },

        {
          title: "Ubicación de archivos de idioma",

          description:
            "Coloca la carpeta de idiomas LNG en la ruta correspondiente al dispositivo desde el que OPL la utilizará.",

          items: [
            "Memory Card: mc?:/OPL",
            "USB: mass:/LNG",
            "Ethernet (SMB): Carpeta compartida/OPL/LNG",
            "Para SMB, el idioma y sus archivos deben estar dentro de LNG en la carpeta compartida.",
          ],
        },

        {
          title: "IGR: reiniciar o apagar la consola",

          description:
            "Configura IGR Path para que OPL pueda volver a abrirse al reiniciar desde un juego.",

          items: [
            "Comprueba dónde está guardado el ELF de OPL y cuál es su nombre.",
            "En OPL, abre Settings (Configuración principal) y selecciona IGR Path (Ruta del IGR).",
            "Indica la ruta completa del ELF, por ejemplo mc0:/OPL/OPLPS2LD.ELF o mass:/APPS/OPNPS2LD.ELF, según dónde esté instalado.",
            "Guarda el cambio.",
            "Durante un juego, presiona R1 + R2 + L1 + L2 + Select + Start para reiniciar y volver a OPL.",
            "Para apagar la consola desde el juego, presiona R1 + R2 + R3 + L1 + L2 + L3.",
          ],
        },
      ],
    },
  },
  //Open PS2 Loader con soporte MMCE y MX4SIO
  {
    console: "PS2",

    name: "Open PS2 Loader (OPL) MMCE/MX4SIO",

    image: "img/PS2/opl.jpg",

    description:
      "Variante de Open PS2 Loader con soporte para dispositivos MMCE y MX4SIO.",

    website: "https://github.com/NathanNeurotic/Open-PS2-Loader",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/NathanNeurotic/Open-PS2-Loader/releases",
      },
      {
        name: "Mega Mirror",
        url: "https://mega.nz/folder/fIgFmCoY#DWfdVdtwyr6j_JQ12rmiqQ",
      },
    ],

    guide: {
      function:
        "Permite utilizar Open PS2 Loader con soporte para almacenamiento MMCE y MX4SIO.",

      compatibility: {
        USB: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        MMCE: "✅ Compatible",

        FAT32: "✅ Compatible",

        exFAT: "✅ Compatible",
      },

      requirements: [
        "PlayStation 2 con FMCB o FunTuna, o acceso a uLaunchELF",
        "Versión de OPL descargada desde los releases de NathanNeurotic",
        "Dispositivo MMCE o MX4SIO para utilizar esas opciones",
      ],

      installation: [
        "Descargar y descomprimir la versión deseada desde GitHub Releases.",
        "Copiar el archivo ELF a la ubicación desde la que se ejecutará OPL.",
        "Mantener junto al ELF los archivos de configuración .cfg correspondientes.",
        "Ejecutar OPL desde FMCB, FunTuna o uLaunchELF.",
      ],

      usage:
        "Utiliza esta variante cuando necesites las funciones de OPL para MMCE o MX4SIO.",

      notes:
        "Es una variante separada de OPL Oficial. Sus configuraciones .cfg deben permanecer en la misma carpeta que el archivo ejecutable de OPL.",

      version: "Consultar GitHub Releases",

      author: "NathanNeurotic",

      details: [
        {
          title: "Ubicación de las configuraciones",

          description:
            "Los archivos de configuración de OPL deben estar junto al ELF que se ejecuta.",

          items: [
            "Ubicar el archivo ELF de OPL.",
            "Copiar los archivos de configuración con extensión .cfg a esa misma carpeta.",
            "Mantener los nombres de archivo .cfg proporcionados por el paquete.",
          ],
        },

        {
          title: "IGR: reiniciar o apagar la consola",

          description:
            "Configura IGR Path para que OPL pueda volver a abrirse al reiniciar desde un juego.",

          items: [
            "Comprueba dónde está guardado el ELF de esta variante y cuál es su nombre.",
            "En OPL, abre Settings (Configuración principal) y selecciona IGR Path (Ruta del IGR).",
            "Indica la ruta completa del ELF, por ejemplo mc0:/OPL/OPLPS2LD.ELF o mass:/APPS/OPNPS2LD.ELF, según dónde esté instalado.",
            "Guarda el cambio.",
            "Durante un juego, presiona R1 + R2 + L1 + L2 + Select + Start para reiniciar y volver a OPL.",
            "Para apagar la consola desde el juego, presiona R1 + R2 + R3 + L1 + L2 + L3.",
          ],
        },
      ],
    },
  },
  //wLaunchELF_ISR Oficial
  {
    console: "PS2",

    name: "wLaunchELF_ISR (exFAT)",

    image: "img/PS2/wlaunchelf.png",

    description:
      "Explorador de archivos para PlayStation 2 con versiones separadas para exFAT, DS34, MMCE y MX4SIO.",

    website: "https://israpps.github.io/projects/wlaunchelf-isr",

    downloads: [
      {
        name: "Descargas Guiadas",
        url: "https://israpps.github.io/projects/wlaunchelf-isr",
      },
      {
        name: "GitHub Releases",
        url: "https://github.com/israpps/wLaunchELF_ISR/releases",
      },
      {
        name: "Mega Mirror",
        url: "https://mega.nz/folder/WZYilaYS#qvjXU0VMeX40-irVVCXqHw",
      },
    ],

    guide: {
      function:
        "Permite explorar archivos en PlayStation 2 y, al ejecutar la versión con soporte exFAT, abrir unidades en ese formato.",

      compatibility: {
        USB: "✅ Compatible (con BOOT-EXFAT-DS34.ELF)",

        FAT32: "✅ Compatible (USB para ejecutar la aplicación)",

        exFAT: "✅ Compatible",

        MMCE: "✅ Compatible (con BOOT-EXFAT-DS34-MMCE.ELF)",

        MX4SIO: "✅ Compatible (con BOOT-EXFAT-DS34-MX4SIO.ELF)",
      },

      requirements: [
        "PlayStation 2 con acceso a una aplicación ELF, como wLaunchELF o uLaunchELF",
        "USB FAT32 para copiar y ejecutar el archivo ELF elegido",
        "Versión oficial de wLaunchELF_ISR con las funciones que se necesitan",
      ],

      installation: [
        "Descargar y descomprimir wLaunchELF_ISR.",
        "Copiar los archivos extraídos a un USB FAT32.",
        "En la consola, abrir wLaunchELF o uLaunchELF y ejecutar desde MASS:/ el ELF que corresponda a las funciones que se necesitan.",
      ],

      usage:
        "Ejecuta la variante elegida para explorar unidades exFAT y, si corresponde, utilizar MMCE o MX4SIO.",

      notes:
        "El USB FAT32 se utiliza para cargar el ELF. Las variantes para MMCE y MX4SIO son aplicaciones separadas; selecciona la que corresponda al dispositivo que utilizarás.",

      version: "4.43x_isr",

      author: "israpps",

      details: [
        {
          title: "Abrir unidades exFAT",

          description:
            "El paquete incluye aplicaciones ELF diferentes. Elige cuál ejecutar según el sistema de archivos y dispositivo que vayas a utilizar.",

          items: [
            "BOOT-EXFAT.ELF: versión con soporte exFAT.",
            "BOOT-EXFAT-DS34-MMCE.ELF: versión exFAT con soporte DS34 y MMCE.",
            "BOOT-EXFAT-DS34-MX4SIO.ELF: versión exFAT con soporte DS34 y MX4SIO.",
            "Copiar los archivos del paquete a un USB formateado en FAT32.",
            "Conectar el USB a la PS2 e iniciar wLaunchELF o uLaunchELF.",
            "Abrir MASS:/, localizar y ejecutar el ELF correspondiente a la función que necesitas.",
            "Usar la aplicación iniciada para acceder a las unidades exFAT y al dispositivo compatible elegido.",
          ],
        },

        {
          title: "Instalar o actualizar desde la Memory Card",

          description:
            "Para usar esta versión desde la Memory Card, coloca ULE.ELF y el archivo de configuración LAUNCHELF.CNF en mc0:/BOOT/.",

          items: [
            "En el USB, selecciona el ELF correspondiente a las funciones que necesitas.",
            "Renombra ese archivo a ULE.ELF.",
            "En uLaunchELF, abre MC0:/BOOT/.",
            "Haz una copia de seguridad del ULE.ELF anterior antes de reemplazarlo.",
            "Copia el nuevo archivo a mc0:/BOOT/ULE.ELF.",
            "Coloca o conserva LAUNCHELF.CNF en la misma carpeta: mc0:/BOOT/LAUNCHELF.CNF.",
          ],
        },

        {
          title: "Ubicación de archivos de idioma",

          description:
            "Guarda el archivo de idioma SPA.LNG en una de las ubicaciones recomendadas.",

          items: ["Memory Card: MC?:/BOOT/SPA.LNG", "USB: mass:/LNG/"],
        },
      ],
    },
  },
  //wLaunchELF_R3Z no oficial de NathanNeurotic
  {
    console: "PS2",

    name: "wLaunchELF_R3Z (No Oficial) NathanNeurotic",

    image: "img/PS2/wlaunchelf.png",

    description:
      "Versión no oficial de wLaunchELF mantenida por NathanNeurotic, con soporte para múltiples dispositivos y sistemas de archivos.",

    website: "https://github.com/NathanNeurotic/wLaunchELF_R3Z",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/NathanNeurotic/wLaunchELF_R3Z/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/3U513TxB#0xhjxa-U2Sy47zTWKQNkIg",
      },
    ],

    guide: {
      function:
        "Explorador de archivos y lanzador de aplicaciones ELF para PlayStation 2, con soporte ampliado para dispositivos de almacenamiento.",

      compatibility: {
        MemoryCard: "✅ Compatible",

        USB: "✅ FAT y exFAT",

        MMCE: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        HDD: "✅ Compatible en modelos soportados",

        ATA: "✅ BDM/exFAT",

        Red: "✅ UDPFS con servidor compatible",
      },

      requirements: [
        "PlayStation 2",
        "Acceso a un método para ejecutar archivos ELF",
        "Descargar la compilación adecuada para el dispositivo que se utilizará",
      ],

      installation: [
        "Descargar la compilación desde GitHub Releases.",
        "Copiar el archivo ELF al dispositivo desde el que se desea ejecutarlo.",
        "Iniciar el ELF desde el menú homebrew o un explorador de archivos ya instalado.",
      ],

      usage:
        "Permite explorar unidades y ejecutar aplicaciones ELF desde los dispositivos compatibles con la compilación.",

      notes:
        "Es una versión no oficial y separada de wLaunchELF_ISR. La disponibilidad de algunas unidades depende de la compilación y del modelo de consola; consulta el repositorio antes de elegir una versión.",

      version: "Consultar GitHub Releases",

      author: "NathanNeurotic",

      details: [
        ...r3zDeviceModeDetails,

        {
          title: "Dispositivos y unidades compatibles",

          description:
            "El repositorio documenta estas unidades y sus condiciones de acceso.",

          items: [
            "mc:/ para Memory Cards.",
            "usb:/ para unidades USB FAT o exFAT mediante BDM.",
            "mmce:/ para emuladores de Memory Card compatibles, como PSxMemCard Gen2 o MemCard Pro 2.",
            "mx4sio:/ para tarjetas SD mediante el puerto de Memory Card.",
            "hdd:/ para discos internos con formato APA; puede ocultarse en algunos modelos.",
            "ata:/ para unidades BDM; el soporte exFAT se indica como limitado/en desarrollo en el repositorio.",
            "udpfs:/ para acceso de red mediante un servidor UDPFSD compatible.",
          ],
        },

        {
          title: "Ubicación de archivos de idioma",

          description:
            "Guarda el archivo de idioma SPA.LNG en una de las ubicaciones recomendadas.",

          items: ["Memory Card: MC?:/BOOT/SPA.LNG", "USB: mass:/LNG/"],
        },

        {
          title: "Tabla de dispositivos compatibles",

          description:
            "Descripción de cada unidad y cuándo aparece en el explorador, según el repositorio de R3Z.",

          table: {
            headers: ["Dispositivo", "Descripción", "Visibilidad"],

            rows: [
              ["mc:/", "Tarjetas de memoria.", "Siempre"],
              ["usb:/", "USB FAT/exFAT mediante BDM.", "Siempre"],
              [
                "mmce:/",
                "Emulador de Memory Card multipropósito, como SD2PSX, PSxMemCard Gen2 o MemCard Pro 2.",
                "Siempre",
              ],
              [
                "mx4sio:/",
                "Interfaz para tarjeta SD mediante el puerto de Memory Card.",
                "Siempre",
              ],
              [
                "hdd:/",
                "Disco duro interno con formato APA.",
                "Oculto en consolas Deckard",
              ],
              [
                "ata:/",
                "Disco duro BDM; exFAT está disponible por ahora mientras se amplía la compatibilidad.",
                "Oculto en consolas Deckard",
              ],
              [
                "xfrom:/",
                "Almacenamiento flash de consolas PSX DESR-XXXX.",
                "Oculto en consolas que no son PSX",
              ],
              [
                "dvr_hdd0:/",
                "Partición o volumen del disco duro del grabador de video PSX DESR-XXXX.",
                "Oculto en consolas que no son PSX",
              ],
              ["cdfs:/", "Sistema de archivos de CD/DVD.", "Siempre"],
              [
                "udpfs:/",
                "Acceso de red mediante el servidor UDPFSD de PCM720.",
                "Siempre",
              ],
            ],
          },
        },
      ],
    },
  },
  //wLaunchELF_R3Z no oficial de saildot4k
  {
    console: "PS2",

    name: "wLaunchELF_R3Z (No Oficial) saildot4k",

    image: "img/PS2/wlaunchelf.png",

    description:
      "Versión no oficial de wLaunchELF mantenida por saildot4k, con soporte para múltiples dispositivos y sistemas de archivos.",

    website: "https://github.com/saildot4k/wLaunchELF_R3Z",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/saildot4k/wLaunchELF_R3Z/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/zAYQ3DhT#k0Vc3jU2Piv4UP2nfsR9Wg",
      },
    ],

    guide: {
      function:
        "Explorador de archivos y lanzador de aplicaciones ELF para PlayStation 2, con soporte ampliado para dispositivos de almacenamiento.",

      compatibility: {
        MemoryCard: "✅ Compatible",

        USB: "✅ FAT y exFAT",

        MMCE: "✅ Compatible",

        MX4SIO: "✅ Compatible",

        HDD: "✅ Compatible en modelos soportados",

        ATA: "✅ BDM/exFAT",

        Red: "✅ UDPFS con servidor compatible",
      },

      requirements: [
        "PlayStation 2",
        "Acceso a un método para ejecutar archivos ELF",
        "Descargar la compilación adecuada para el dispositivo que se utilizará",
      ],

      installation: [
        "Descargar la compilación desde GitHub Releases.",
        "Copiar el archivo ELF al dispositivo desde el que se desea ejecutarlo.",
        "Iniciar el ELF desde el menú homebrew o un explorador de archivos ya instalado.",
      ],

      usage:
        "Permite explorar unidades y ejecutar aplicaciones ELF desde los dispositivos compatibles con la compilación.",

      notes:
        "Es una versión no oficial de wLaunchELF_ISR mantenida por saildot4k. La disponibilidad de algunas unidades depende de la compilación y del modelo de consola; consulta el repositorio antes de elegir una versión.",

      version: "4.80",

      author: "saildot4k",

      details: [
        ...r3zDeviceModeDetails,

        {
          title: "Ubicación de archivos de idioma",

          description:
            "Guarda el archivo de idioma SPA.LNG en una de las ubicaciones recomendadas.",

          items: ["Memory Card: MC?:/BOOT/SPA.LNG", "USB: mass:/LNG/"],
        },

        {
          title: "Dispositivos y unidades compatibles",

          description:
            "El repositorio documenta estas unidades y sus condiciones de acceso.",

          items: [
            "mc:/ para Memory Cards.",
            "usb:/ para unidades USB FAT o exFAT mediante BDM.",
            "mmce:/ para emuladores de Memory Card compatibles, como SD2PSX, PSxMemCard Gen2 o MemCard Pro 2.",
            "mx4sio:/ para tarjetas SD mediante el puerto de Memory Card.",
            "hdd:/ para discos internos con formato APA; puede ocultarse en algunos modelos.",
            "ata:/ para unidades BDM; el soporte exFAT se indica como limitado en el repositorio.",
            "udpfs:/ para acceso de red mediante un servidor UDPFSD compatible.",
          ],
        },

        {
          title: "Tabla de dispositivos compatibles",

          description:
            "Descripción de cada unidad y cuándo aparece en el explorador, según el repositorio de R3Z.",

          table: {
            headers: ["Dispositivo", "Descripción", "Visibilidad"],

            rows: [
              ["mc:/", "Tarjetas de memoria.", "Siempre"],
              ["usb:/", "USB FAT/exFAT mediante BDM.", "Siempre"],
              [
                "mmce:/",
                "Emulador de Memory Card multipropósito, como SD2PSX, PSxMemCard Gen2 o MemCard Pro 2.",
                "Siempre",
              ],
              [
                "mx4sio:/",
                "Interfaz para tarjeta SD mediante el puerto de Memory Card.",
                "Siempre",
              ],
              [
                "hdd:/",
                "Disco duro interno con formato APA.",
                "Oculto en consolas Deckard",
              ],
              [
                "ata:/",
                "Disco duro BDM; exFAT está disponible por ahora mientras se amplía la compatibilidad.",
                "Oculto en consolas Deckard",
              ],
              [
                "xfrom:/",
                "Almacenamiento flash de consolas PSX DESR-XXXX.",
                "Oculto en consolas que no son PSX",
              ],
              [
                "dvr_hdd0:/",
                "Partición o volumen del disco duro del grabador de video PSX DESR-XXXX.",
                "Oculto en consolas que no son PSX",
              ],
              ["cdfs:/", "Sistema de archivos de CD/DVD.", "Siempre"],
              [
                "udpfs:/",
                "Acceso de red mediante el servidor UDPFSD de PCM720.",
                "Siempre",
              ],
            ],
          },
        },
      ],
    },
  },
  //Apollo Save Tool
  {
    console: "PS2",

    name: "Apollo Save Tool PS2",

    image: "img/PS2/apollo-save-tool.png",

    description:
      "Administra, importa, exporta y aplica parches a partidas guardadas de PS2 y PS1.",

    website: "https://github.com/bucanero/apollo-ps2",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/bucanero/apollo-ps2/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/CY5UyCwR#Me7K6UpAD3u2-QWpQnmDZA",
      },
    ],

    guide: {
      function:
        "Permite administrar partidas de Memory Card y dispositivos externos, gestionar Memory Cards virtuales e importar, exportar o aplicar parches a saves.",

      compatibility: {
        USB: "✅ FAT32",

        MemoryCard: "✅ Compatible",

        PS2Saves: "✅ Compatible",

        PS1Saves: "✅ Compatible",

        VMC: "✅ Compatible",
      },

      requirements: [
        "PlayStation 2 con acceso a homebrew",
        "USB en formato FAT32",
        "Memory Card para importar partidas",
      ],

      installation: [
        "Descargar y descomprimir el paquete de Apollo Save Tool.",
        "Copiar la carpeta APOLLO-99PS2 al USB.",
        "En la consola, abrir wLaunchELF o uLaunchELF.",
        "Ejecutar MASS:/APOLLO-99PS2/APOLLO.ELF.",
      ],

      usage:
        "Configura la fuente de partidas externas en mass:/ para administrar saves desde el USB e importarlos a una Memory Card.",

      notes:
        "Guarda las partidas externas de PS2 en PS2/SAVEDATA dentro del USB y conserva el ID de juego correspondiente. Antes de importar una partida, es recomendable respaldar el save existente en la Memory Card.",

      version: "1.0.2",

      author: "bucanero",

      details: [
        {
          title: "Preparar el USB y ejecutar Apollo",

          description: "Instala y abre la aplicación desde el dispositivo USB.",

          items: [
            "Formatear el USB como FAT32.",
            "Descargar la última versión de Apollo Save Tool y descomprimirla.",
            "Copiar la carpeta APOLLO-99PS2 al USB.",
            "Abrir wLaunchELF o uLaunchELF en la PS2.",
            "Buscar y ejecutar MASS:/APOLLO-99PS2/APOLLO.ELF.",
          ],
        },

        {
          title: "Configurar y localizar partidas externas",

          description:
            "Indica a Apollo que busque los saves externos en el USB.",

          items: [
            "Copiar las partidas de PS2 a la carpeta PS2/SAVEDATA del USB.",
            "En Apollo, abrir Settings.",
            "Cambiar External Saves Source a mass:/.",
            "Abrir Ext Saves para ver las partidas externas.",
            "Buscar el save correspondiente al ID del juego.",
          ],
        },

        {
          title: "Importar una partida a la Memory Card",

          description: "Copia el save seleccionado a la tarjeta física de PS2.",

          items: [
            "En Ext Saves, seleccionar y abrir la partida deseada.",
            "Elegir Import to Memory Card.",
            "Seleccionar MC0 (ranura izquierda) o MC1 (ranura derecha).",
            "Confirmar la operación y esperar a que finalice.",
            "Probar la partida desde el juego.",
          ],
        },

        {
          title: "Formatos y Memory Cards virtuales",

          description:
            "Apollo también permite gestionar otros formatos de partidas y VMC.",

          items: [
            "PS2: importa PSU, PSV, CBS, MAX, XPS y SPS; exporta PSU, PSV y CBS.",
            "PS2 VMC: administra partidas dentro de imágenes de Memory Card virtual.",
            "PS1: administra partidas y Memory Cards virtuales en formatos compatibles.",
            "Consulta los formatos aceptados por la versión instalada antes de importar.",
          ],
        },
      ],
    },
  },
  //PS2Temps
  {
    console: "PS2",

    name: "PS2Temps",

    image: "img/PS2/PS2Temps.png",

    description:
      "Aplicación homebrew de krat0s que muestra las lecturas de temperatura de la PlayStation 2.",

    website: "https://www.psx-place.com/threads/ps2temps-by-krat0s.27864/",

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/CRgV2KhT#X0NuceLpLABiPDczTNCqmQ",
      },
    ],

    guide: {
      function:
        "Muestra en pantalla las lecturas de temperatura disponibles de la consola.",

      compatibility: {
        PS2: "✅ SCPH-500xx y modelos posteriores; confirma el modelo exacto en la documentación del proyecto",

        USB: "✅ FAT32 para ejecutar la aplicación",
      },

      requirements: [
        "PlayStation 2 SCPH-500xx o posterior",
        "USB en formato FAT32",
        "Acceso a uLaunchELF o wLaunchELF",
      ],

      installation: [
        "Descargar y descomprimir PS2Temps.",
        "Copiar los archivos al USB FAT32.",
        "En la consola, abrir uLaunchELF o wLaunchELF.",
        "Ejecutar MASS:/PS2Temps.elf.",
      ],

      usage:
        "Al iniciar PS2Temps, la aplicación muestra las lecturas de temperatura en pantalla.",

      notes:
        "La compatibilidad indicada incluye SCPH-500xx y modelos posteriores. Consulta el hilo de PSX-Place para obtener la aplicación y revisar la información más reciente.",

      version: "Consultar hilo de PSX-Place",

      author: "krat0s",

      details: [
        {
          title: "Ejecutar PS2Temps desde USB",

          description:
            "Inicia la aplicación desde un dispositivo USB.",

          items: [
            "Formatear el USB como FAT32.",
            "Descargar y descomprimir PS2Temps.",
            "Copiar los archivos al USB.",
            "Abrir uLaunchELF o wLaunchELF en la PS2.",
            "Entrar a MASS:/ y ejecutar PS2Temps.elf.",
            "Revisar las temperaturas que aparecen en pantalla.",
          ],
        },
      ],
    },
  },
  //PS2 APPS USB
  {
    console: "PS2",

    name: "PS2 APPS en USB",

    image: "img/PS2/MEGAPACKdeAPPS.jpg",

    description:
      "Guía para organizar aplicaciones ELF en un USB y configurarlas en el menú APPS de Open PS2 Loader.",

    website: null,

    downloads: [
      {
        name: "MEGAPACK de Apps PS2 (MEGA)",
        url: "https://mega.nz/folder/ydZTGC5C#EbOIIxnM8bqb0fucG-yFCg",
      },
    ],

    guide: {
      function:
        "Organiza y muestra aplicaciones ELF en el menú APPS de OPL, cargándolas desde un USB o un servidor OPL.",

      compatibility: {
        OPL: "✅ Compatible con el menú APPS",

        USB: "✅ FAT32",

        OPLServer: "✅ Compatible",
      },

      requirements: [
        "PlayStation 2 con Open PS2 Loader y menú APPS",
        "USB en formato FAT32 o un servidor OPL configurado",
        "Aplicaciones de PS2 en formato ELF",
        "Windows 7 o posterior para utilizar el método automatizado con BAT",
      ],

      installation: [
        "Crear una carpeta llamada APPS en la raíz del USB o del servidor OPL.",
        "Copiar dentro las aplicaciones ELF y sus archivos necesarios.",
        "Crear o generar la configuración conf_apps.cfg.",
        "Colocar la configuración en la raíz del USB/servidor o en mc0:/OPL/.",
        "En OPL, navegar hasta el menú APPS para abrir las aplicaciones.",
      ],

      usage:
        "La configuración relaciona el nombre mostrado en OPL con la ruta del archivo ELF que se desea ejecutar.",

      notes:
        "El método automatizado con title.cfg_maker.BAT para OPL v.12.77 o superior no está probado.",

      version: "Depende de la versión de OPL",

      author: "MarcheBMPC",

      details: [
        {
          title: "Preparar la carpeta APPS",

          description:
            "Organiza las aplicaciones en el USB o en el servidor que leerá OPL.",

          items: [
            "Conectar el USB al equipo o abrir la ubicación del servidor OPL.",
            "Crear APPS en la raíz si todavía no existe.",
            "Copiar allí las aplicaciones ELF y sus carpetas de datos.",
          ],
        },
      ],
    },
  },
  //CheatDevicePS2 - base de datos para OPL
  {
    console: "PS2",

    name: "CheatDevicePS2 - Base de trucos para OPL",

    image: "img/PS2/CheatDevicePS2.png",

    description:
      "Base de datos con Mastercodes y trucos por región para consultar y crear archivos .cht compatibles con OPL.",

    website: "https://github.com/israpps/CheatDevicePS2",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/israpps/CheatDevicePS2/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/ORZzCbzb#x0TGV1xKIWSuVw6usGkOtg",
      },
    ],

    guide: {
      function:
        "Ayuda a localizar Mastercodes y códigos de juegos para crear archivos de trucos .cht que OPL pueda cargar.",

      compatibility: {
        OPL: "✅ Versión 1.2 Beta 2179 o superior",

        PAL: "✅ Códigos regionales disponibles en la base",

        NTSC: "✅ Códigos regionales disponibles en la base",
      },

      requirements: [
        "Open PS2 Loader 1.2 Beta 2179 o superior",
        "Base de datos CheatDevicePS2 descargada y descomprimida",
        "OPL Manager o un editor de texto para crear el archivo .cht",
        "ID y región del juego",
      ],

      installation: [
        "Descargar un paquete desde GitHub Releases y descomprimirlo.",
        "Localizar la carpeta extra_cheats dentro de los archivos descargados.",
        "Identificar el ID y la región del juego para buscar los códigos correspondientes.",
      ],

      usage:
        "Crea un archivo .cht cuyo nombre corresponda al ID del juego, agrega el Mastercode y luego los trucos de la región correcta.",

      notes:
        "Esta función requiere OPL 1.2 Beta 2179 o superior. Verifica que el Mastercode y los códigos correspondan al ID y región exactos del juego.",

      version: "Consultar GitHub Releases",

      author: "israpps",

      details: [
        {
          title: "Crear el archivo .cht",

          description:
            "Puedes generarlo con OPL Manager o crear un archivo de texto manualmente.",

          items: [
            "Usar OPL Manager para crear o administrar los trucos del juego, o crear manualmente un archivo de texto.",
            "Nombrar el archivo con el ID del juego y la extensión .cht; ejemplo: SCES_531.33.cht.",
            "Mantener el formato de códigos que espera OPL y guardar el archivo con extensión .cht.",
          ],
        },

        {
          title: "Buscar y agregar el Mastercode",

          description:
            "El Mastercode se encuentra en la carpeta correspondiente dentro de extra_cheats.",

          items: [
            "Abrir extra_cheats/MASTERCODES.",
            "Buscar el archivo que corresponda al ID del juego.",
            "Abrirlo y copiar el Mastercode al archivo .cht.",
          ],
        },

        {
          title: "Agregar trucos según la región",

          description:
            "Selecciona los códigos PAL o NTSC según la edición del juego.",

          items: [
            "En extra_cheats, abrir PAL_CHEATS para juegos PAL o NTSC_CHEATS para juegos NTSC.",
            "Buscar el archivo o la sección del juego correspondiente a su ID.",
            "Copiar los trucos deseados al archivo .cht, después del Mastercode.",
            "Guardar el archivo .cht.",
          ],
        },

        {
          title: "Cargar los trucos en OPL",

          description:
            "Añade el archivo al juego con OPL Manager y cárgalo desde una versión compatible de OPL.",

          items: [
            "En OPL Manager, asociar el archivo .cht con el juego correspondiente.",
            "Verificar que el archivo use el mismo ID que el juego.",
            "Iniciar el juego desde OPL y cargar los trucos disponibles.",
          ],
        },

        {
          title: "Mejoras para juegos de PS1 con OPL Manager",

          description:
            "OPL Manager también permite ajustar opciones de algunos juegos de PS1; estos ajustes son independientes de la base de trucos y de los archivos .cht.",

          items: [
            "En OPL Manager, seleccionar el juego de PS1 que se desea configurar.",
            "Abrir las opciones de configuración disponibles para ese título.",
            "Ajustar la resolución, el formato de video (por ejemplo, PAL) u otras opciones que aparezcan.",
            "Guardar los cambios y actualizar la configuración del juego usada por OPL.",
            "Probar el juego en la consola; si presenta problemas de imagen o compatibilidad, restaurar la configuración anterior.",
            "Las opciones disponibles y sus resultados pueden variar según el juego y la versión de OPL Manager.",
          ],
        },
      ],
    },
  },
  //Simple Media System (SMS)
  {
    console: "PS2",

    name: "Simple Media System (SMS)",

    image: "img/PS2/SMS.jpg",

    description:
      "Reproductor multimedia homebrew para PlayStation 2. Esta guía incluye cómo instalar y seleccionar un archivo de idioma.",

    website: "https://github.com/ps2homebrew/SMS",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/ps2homebrew/SMS/releases/latest",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/GRJkxR4D#q687-AbQsTY_IW_jv13d2g",
      },
    ],

    guide: {
      function:
        "Permite reproducir contenido multimedia en PlayStation 2 y seleccionar el idioma de la interfaz mediante un archivo SMS.lng.",

      compatibility: {
        Consola: "PlayStation 2 con posibilidad de ejecutar homebrew.",
        Lanzador:
          "uLaunchELF, wLaunchELF u otro lanzador para ejecutar el ELF.",
        Idioma: "SMS.lng distingue entre mayúsculas y minúsculas.",
      },

      version: "2.9 Rev.4",

      details: [
        {
          title: "Instalar y ejecutar SMS",

          description:
            "Descarga una versión desde GitHub Releases y ejecuta el archivo ELF incluido con un lanzador homebrew.",

          items: [
            "Descargar y descomprimir Simple Media System.",
            "Iniciar uLaunchELF, wLaunchELF u otro lanzador.",
            "Localizar y ejecutar el archivo ELF de SMS.",
          ],
        },

        {
          title: "Instalar y seleccionar un idioma",

          description:
            "Sigue estos pasos para instalar el archivo de idioma en la primera Memory Card.",

          items: [
            "Elegir el archivo del idioma que prefieras.",
            "Cambiar su nombre exactamente a SMS.lng; respeta las mayúsculas y minúsculas.",
            "Copiarlo a mc0:/SMS/ (Memory Card del primer puerto).",
            "Abrir SMS y seleccionar el idioma desde su menú.",
          ],
        },

        {
          title: "Perfiles de video sugeridos para SMS 3.0",

          description:
            "La siguiente tabla transcribe los perfiles de la imagen compartida para SMS 3.0 (v1). La versión enlazada arriba es 2.9 Rev.4, así que toma estos valores como referencia y prueba la reproducción en tu versión.",

          table: {
            headers: [
              "Perfil",
              "Contenedor",
              "Video",
              "Audio",
              "Bitrate de audio",
            ],
            rows: [
              [
                "1",
                "MP4",
                "MPEG-4 Visual; 640 x 480; 30 fps; 1.5 Mbps (1500 kbps)",
                "AAC; 48 kHz; estéreo",
                "128 kbps",
              ],
              [
                "2",
                "MP4",
                "MPEG-4 Visual; 320 x 240; 30 fps; 600 kbps",
                "AAC; 48 kHz; estéreo",
                "128 kbps",
              ],
              [
                "3",
                "AVI",
                "Xvid; 640 x 480; 30 fps; 1.5 Mbps (1500 kbps)",
                "MP3; 44.1 o 48 kHz (recomendado 44.1); estéreo",
                "128 kbps",
              ],
              [
                "4",
                "MPEG-2 PS",
                "MPEG-2; 640 x 480; 30 fps; 2.5 Mbps (2500 kbps)",
                "MP2; recomendado 48 kHz; estéreo",
                "192 kbps",
              ],
              [
                "5",
                "MPEG-1 PS",
                "MPEG-1; 640 x 480; 30 fps; 1.15 Mbps (1150 kbps)",
                "MP2; recomendado 48 kHz; estéreo",
                "192 kbps",
              ],
            ],
          },
        },

        {
          title: "Formatos de audio indicados",

          description:
            "La imagen compartida también enumera estos formatos de audio para SMS 3.0 (solo audio).",

          items: [
            "MP3 (MPEG Layer III).",
            "OGG (Vorbis).",
            "WMA (Windows Media Audio 2).",
            "FLAC (Free Lossless Audio Codec).",
            "AC3 (Dolby Digital).",
            "M4A (AAC) y ADTS (AAC).",
            "MP2 (MPEG Layer II).",
          ],
        },

        {
          title: "Convertir videos con XMedia Recode",

          description:
            'XMedia Recode es una opción gratuita para Windows que permite elegir contenedor, códec, resolución, cuadros por segundo y bitrate. Consulta el <a href="https://www.xmedia-recode.de/en/download.php" target="_blank" rel="noopener noreferrer">sitio oficial de XMedia Recode</a>.',

          items: [
            "Carga el video original y selecciona un perfil de la tabla como punto de partida.",
            "Configura manualmente el contenedor y el códec de video indicados; por ejemplo, Xvid en AVI o MPEG-4 Visual en MP4.",
            "Configura el códec de audio, la frecuencia, estéreo y bitrate según el perfil.",
            "Convierte primero un fragmento corto y pruébalo en SMS antes de convertir toda la película.",
            "La compatibilidad puede variar según la versión de SMS y el archivo; si falla, prueba otro perfil de la tabla.",
          ],
        },
      ],
    },
  },
  //PS2 Controller Tester (jbit)
  {
    console: "PS2",

    name: "PS2 Controller Tester (jbit)",

    image: "img/PS2/PS2ControllerTester.png",

    description:
      "Aplicación homebrew para probar las funciones digitales, analógicas y de vibración de mandos de PlayStation.",

    website:
      "https://www.psx-place.com/resources/ps2-controller-tester-by-jbit.670/",

    downloads: [
      {
        name: "Descarga PSX-Place",
        url: "https://www.psx-place.com/resources/ps2-controller-tester-by-jbit.670/history",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/WdxEzIwK#P8Fh7zN0m0jb30TdRPxhFA",
      },
    ],

    guide: {
      function:
        "Permite comprobar botones, entradas analógicas y motores de vibración de mandos PlayStation compatibles.",

      compatibility: {
        Consola: "PlayStation 2 con posibilidad de ejecutar homebrew.",
        Mandos: "PS1 original, Dual Analog, DualShock 1 y DualShock 2.",
        Lecturas: "Pruebas digitales y analógicas con escala de 0 a 255.",
      },

      requirements: [
        "Consola PlayStation 2 con uLaunchELF, wLaunchELF u otro lanzador homebrew.",
        "Mando que se desea comprobar.",
        "Archivo ELF de PS2 Controller Tester descargado desde PSX-Place.",
      ],

      installation: [
        "Descargar el archivo desde la página del recurso en PSX-Place.",
        "Descomprimir el paquete y localizar el archivo ELF.",
        "Ejecutar el ELF desde un lanzador homebrew; no requiere instalación adicional.",
      ],

      usage:
        "Inicia el ELF con el mando conectado y comprueba la respuesta de los botones y controles analógicos en la pantalla de la aplicación.",

      notes:
        "La descripción del recurso indica que la prueba de vibración se activa manteniendo TRIÁNGULO. El enlace de MEGA es un marcador pendiente de reemplazar por un mirror real.",

      version: "Consultar PSX-Place",

      author: "jbit",

      details: [
        {
          title: "Mandos y funciones comprobadas",

          description:
            "El recurso está pensado para verificar mandos originales de PS1 y PS2.",

          items: [
            "Compatible con PS1 Original, Dual Analog, DualShock 1 y DualShock 2.",
            "Prueba entradas digitales y analógicas con valores en una escala de 0 a 255.",
            "Permite comprobar los motores de vibración del mando.",
          ],
        },

        {
          title: "Probar la vibración",

          description:
            "Según las instrucciones del recurso, mantén TRIÁNGULO mientras pruebas cada motor.",

          items: [
            "Para probar el motor fuerte, mantén TRIÁNGULO y mueve el stick izquierdo hacia abajo; la descripción indica aproximadamente 96 niveles.",
            "Para probar el motor débil, mantén TRIÁNGULO y presiona arriba y abajo en la cruceta; la descripción indica 2 estados.",
            "Comprueba que ambos motores respondan al patrón indicado.",
          ],
        },
      ],
    },
  },
  //R3CONFIGURATOR
  {
    console: "PS2",

    name: "R3CONFIGURATOR",

    image: "img/PS2/R3CONFIGURATOR.jpg",

    description:
      "Aplicación gráfica para editar configuraciones de FMCB, FHDB, OSDMenu, HOSDMenu y PS2BBL/PSXBBL Extended desde PlayStation 2.",

    website: "https://github.com/saildot4k/R3CONFIGURATOR",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/saildot4k/R3CONFIGURATOR/releases/latest",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/HQwRTKoK#FICPvoq0d1hhid2K2wynsQ",
      },
    ],

    guide: {
      function:
        "Permite buscar, cargar y modificar archivos de configuración de varios menús y cargadores de arranque de PS2.",

      compatibility: {
        FMCB: "Compatible con 1.966 y versiones anteriores en su mayoría.",
        OSDMenu: "Compatible con 1.3.0.",
        PS2BBL: "Compatible con PS2BBL Extended 2.0.0-beta.",
        Idioma:
          "Incluye español; L1/R1 cambian el idioma en el menú principal.",
      },

      requirements: [
        "PlayStation 2 con posibilidad de ejecutar aplicaciones homebrew.",
        "Configuración existente de FMCB, FHDB, OSDMenu, HOSDMenu, PS2BBL Extended o PSXBBL Extended.",
        "Lanzador homebrew para iniciar el ELF de R3CONFIGURATOR.",
      ],

      installation: [
        "Descargar y descomprimir el paquete desde GitHub Releases.",
        "Ejecutar el ELF desde uLaunchELF, wLaunchELF u otro lanzador.",
        "Elegir el tipo de configuración que se desea editar y el dispositivo donde se encuentra.",
      ],

      usage:
        "Selecciona el configurador correspondiente desde el menú principal, carga el archivo de configuración, realiza los cambios y guárdalo.",

      notes:
        "El archivo se guarda en la misma ubicación desde la que se cargó. Haz una copia de seguridad antes de editar configuraciones de arranque.",

      version: "v1.3.2",

      author: "saildot4k",

      details: [
        {
          title: "Configuraciones que puede editar",

          description:
            "R3CONFIGURATOR centraliza configuradores para varios menús y cargadores de arranque.",

          items: [
            "Free McBoot (FREEMCB.CNF) y Free HDBoot (FREEHDB.CNF).",
            "OSDMenu, HOSDMenu y OSDMenu MBR.",
            "PS2BBL Extended y PSXBBL Extended.",
            "Los archivos disponibles dependen del sistema instalado y del dispositivo conectado.",
          ],
        },

        {
          title: "Cambiar el idioma de la interfaz",

          description:
            "El repositorio incluye la traducción al español y permite cambiar entre los idiomas disponibles.",

          items: [
            "En el menú principal, presiona L1 o R1 para recorrer los idiomas disponibles.",
            "Para añadir una traducción, crea scripts/lang/strings_<código>.lua a partir de strings_en.lua y traduce sus valores sin cambiar las claves.",
            "Si hay un archivo strings.lua en la carpeta desde la que se ejecuta el ELF, este reemplaza las traducciones normales y desactiva el cambio de idioma con L1/R1.",
          ],
        },

        {
          title: "Mostrar todos los dispositivos y opciones",

          description:
            "Usa esta opción durante el arranque de R3CONFIGURATOR cuando necesites que aparezcan todas las ubicaciones disponibles.",

          items: [
            "Mantén presionado SELECT mientras inicia la aplicación.",
            "La configuración todavía se aplica a las opciones de mostrar u ocultar aplicaciones.",
          ],
        },
      ],
    },
  },
  //SD2Cloud
  {
    console: "PS2",

    name: "SD2Cloud para PSXMemCard Gen 2 (MMCE)",

    image: "img/PS2/SD2Cloud.png",

    description:
      "Administra tarjetas de memoria y partidas guardadas desde la PS2, y permite respaldarlas en Google Drive. Compatible con PSXMemCard Gen 2 usando firmware sd2psXtd (MMCE).",

    website: "https://github.com/oMrRexD/sd2cloud",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/oMrRexD/sd2cloud/releases/latest",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/uF41EKRI#F6hlvZWPxuVF4YjX5VRNOA",
      },
    ],

    guide: {
      function:
        "Gestiona tarjetas y partidas guardadas en MMCE, Memory Cards físicas y VMC de OPL; permite sincronizar respaldos con Google Drive desde la consola.",

      compatibility: {
        MMCE: "PSXMemCard Gen 2 con firmware sd2psXtd.",
        OPL: "Se necesita compatibilidad con MMCE e IGR para la sincronización automática tras un juego.",
        "Google Drive":
          "Para funciones en la nube se requiere una cuenta de Google y conexión a Internet en la PS2.",
      },

      requirements: [
        "PSXMemCard Gen 2 con firmware sd2psXtd para usarlo como MMCE.",
        "Un método para iniciar archivos ELF, como la pestaña Apps de OPL o wLaunchELF.",
        "Para usar Google Drive: cuenta de Google y conexión de red en la PS2.",
      ],

      installation: [
        "Descargar y extraer el ZIP de la versión estable en la raíz de la microSD del MMCE.",
        "Abrir SD2Cloud desde la pestaña Apps de OPL o ejecutar APPS/SD2Cloud/SD2CLOUD.ELF con un lanzador ELF.",
        "Vincular la cuenta de Google cuando la aplicación lo solicite, o hacerlo después desde Ajustes > Google Drive.",
      ],

      usage:
        "Desde la consola puedes revisar tarjetas y partidas, copiar o mover partidas entre tarjetas, y sincronizar o restaurar respaldos de Google Drive.",

      notes:
        "SD2Cloud escribe datos al copiar, mover, eliminar, importar o restaurar partidas y tarjetas. Haz primero una copia de seguridad de la microSD o sincroniza las tarjetas.",

      version: "2.1",

      author: "oMrRexD",

      details: [
        {
          title: "Sincronización automática después de jugar",

          description:
            "SD2Cloud puede sincronizar las tarjetas modificadas al salir de un juego mediante IGR de OPL. Al activar la función, la aplicación instala el paquete SAS necesario en la Memory Card.",

          items: [
            "Activa la sincronización automática en los ajustes de SD2Cloud.",
            'En OPL, configura "IGR Path" con la ruta mc0:/APP_SD2CLOUD/IGR.ELF.',
            "Usa un OPL compatible con MMCE e IGR; de lo contrario, la sincronización automática puede no iniciarse al salir del juego.",
          ],
        },

        {
          title: "Respaldos en Google Drive",

          description:
            "Vincula la cuenta de Google una sola vez con el código o QR que muestra la consola.",

          items: [
            "Puedes iniciar una sincronización manual o activar la automática al salir de un juego.",
            "Por defecto, las tarjetas se respaldan como archivos .mcd; en los ajustes también se puede elegir el formato .ps2.",
            "La aplicación conserva hasta 10 respaldos por tarjeta de forma predeterminada y permite restaurar una versión anterior.",
          ],
        },

        {
          title: "Instalación sin PSXMemCard Gen 2",

          description:
            "SD2Cloud también puede ejecutarse desde otros dispositivos para administrar tarjetas físicas y VMC de OPL.",

          items: [
            "Extrae el paquete en una memoria USB, MX4SIO o disco duro interno compatible.",
            "Desde ese dispositivo puedes administrar las Memory Cards físicas, VMC y archivos de tarjeta.",
            "Las funciones de respaldo en Drive siguen requiriendo cuenta de Google y conexión de red.",
          ],
        },

        {
          title: "Precaución antes de modificar tarjetas",

          description:
            "Las operaciones de escritura pueden modificar o borrar datos de partidas.",

          items: [
            "Antes de empezar, sincroniza tus tarjetas o copia la carpeta MemoryCards de la microSD a un PC.",
            "La aplicación pide confirmación antes de operaciones que escriben, suben o eliminan datos; revisa cada aviso antes de continuar.",
          ],
        },
      ],
    },
  },
  //Memory Card Annihilator (MCA)
  {
    console: "PS2",

    name: "Memory Card Annihilator (MCA)",

    image: "img/PS2/MemoryCardAnihilator.jpg",

    description:
      "Herramienta homebrew para formatear y desformatear Memory Cards de PS2, y crear o restaurar imágenes de tarjetas.",

    website: "https://github.com/ffgriever-pl/Memory-Card-Annihilator",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/ffgriever-pl/Memory-Card-Annihilator/releases/latest",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/eMhyDQ6L#JPVIkgoMhnNUhlrNso5WhQ",
      },
    ],

    guide: {
      function:
        "Permite administrar tarjetas de memoria físicas de PS2, incluyendo formateo, desformateo y creación o restauración de imágenes.",

      compatibility: {
        Consola: "PlayStation 2 con posibilidad de ejecutar homebrew.",
        Tarjetas:
          "Tarjetas PS2 estándar; hay compilaciones específicas para tarjetas Arcade, Developer y Prototype.",
        USB: "La compilación mca_new agrega soporte exFAT para USB.",
      },

      requirements: [
        "Consola PlayStation 2 y un método para iniciar aplicaciones ELF.",
        "Memory Card que se desea administrar.",
        "Dispositivo USB si se guardarán o cargarán imágenes de tarjeta.",
      ],

      installation: [
        "Descargar y descomprimir el paquete desde GitHub Releases.",
        "Elegir la carpeta de compilación adecuada para la tarjeta y el sistema.",
        "Ejecutar el ELF correspondiente desde uLaunchELF, wLaunchELF u otro lanzador homebrew.",
      ],

      usage:
        "Selecciona la función deseada para la tarjeta conectada. Para preservar datos, crea una imagen de respaldo antes de formatear, desformatear o restaurar.",

      notes:
        "Formatear, desformatear o restaurar una imagen puede borrar o sobrescribir datos. Confirma la tarjeta y la operación, y crea una copia de seguridad antes de continuar.",

      version: "v2.2.0",

      author: "ffgriever; revisión del proyecto por El_isra",

      details: [
        {
          title: "Variantes incluidas en el paquete",

          description:
            "Elige la compilación según el tipo de Memory Card y las necesidades de USB.",

          items: [
            "mca_legacy: módulos originales, similar a las versiones antiguas.",
            "mca_new: controladores USB actualizados con soporte exFAT y módulos homebrew para Memory Cards; también es la variante indicada para consolas ProtoKernel.",
            "mca_Arcade: para tarjetas Arcade.",
            "mca_Developer: para tarjetas Developer y TDB StartUp Cards.",
            "mca_Prototype: para tarjetas Prototype.",
          ],
        },

        {
          title: "Idioma de la aplicación",

          description:
            "MCA detecta automáticamente el idioma configurado en la consola. El repositorio incluye traducción al español.",

          items: [
            "Si quieres seleccionar otro idioma manualmente, renombra el archivo correspondiente (por ejemplo, lang_es.lng) a lang.lng.",
            "Coloca lang.lng en la misma carpeta que el ejecutable de MCA; este archivo tiene prioridad sobre el idioma detectado de la consola.",
          ],
        },

        {
          title: "Respaldo y precauciones",

          description:
            "Una imagen de la tarjeta permite conservar una copia antes de realizar cambios.",

          items: [
            "Crea y guarda una imagen de respaldo en un dispositivo con espacio suficiente antes de formatear o desformatear.",
            "Al restaurar una imagen, verifica cuidadosamente cuál tarjeta está conectada: el contenido existente puede ser sobrescrito.",
            "Usa las compilaciones Arcade, Developer o Prototype solo con el tipo de tarjeta correspondiente.",
          ],
        },
      ],
    },
  },
  //RetroArch PS2
  {
    console: "PS2",

    name: "RetroArch para PS2",

    image: "img/PS2/RetroArchPS2.jpg",

    description:
      "Interfaz de emulación basada en cores Libretro para ejecutar sistemas clásicos en PlayStation 2.",

    website: "https://www.retroarch.com/platforms.html",

    downloads: [
      {
        name: "Nightly RetroArch PS2",
        url: "https://buildbot.libretro.com/nightly/playstation/ps2/",
      },
      {
        name: "Últimos cores PS2",
        url: "https://buildbot.libretro.com/nightly/playstation/ps2/latest/",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/uUIUkRYT#AyJT9Mz5BAEt7PsCqEDOtA",
      },
    ],

    guide: {
      function:
        "Carga contenido mediante cores compatibles con Libretro. El core debe corresponder al sistema del juego que quieres ejecutar.",

      compatibility: {
        Consola: "Compilación de RetroArch específica para PlayStation 2.",
        Almacenamiento: "Usa una memoria USB en formato FAT32.",
        Descargas:
          "El Buildbot ofrece compilaciones nightly y cores PS2 por separado; la compatibilidad puede variar entre cores.",
      },

      requirements: [
        "PlayStation 2 con FMCB, FunTuna u otro método para ejecutar homebrew.",
        "Memoria USB FAT32.",
        "RetroArch para PS2, un core compatible con el sistema del juego y contenido propio.",
      ],

      installation: [
        "Descargar y extraer el paquete RetroArch_elf desde el Buildbot de PS2.",
        "Copiar los archivos extraídos a la memoria USB.",
        "Crear una carpeta ROMS y, si se desea, subcarpetas para organizar los juegos por sistema.",
        "Descargar y extraer el core PS2 correspondiente al sistema que se quiere emular.",
      ],

      usage:
        "Ejecuta el ELF de RetroArch, abre Load Content, busca el juego en el USB y selecciona un core compatible con ese sistema.",

      notes:
        "El Buildbot distribuye compilaciones nightly que pueden cambiar o presentar errores. El nombre del ELF puede variar entre paquetes; consulta los archivos incluidos antes de configurar su ruta en OPL.",

      version: "Nightly PS2 (Buildbot)",

      author: "Libretro",

      details: [
        {
          title: "Iniciar desde uLaunchELF u OPL",

          description:
            "Puedes probar el programa directamente desde uLaunchELF o dejarlo disponible en la pestaña Apps de OPL.",

          items: [
            "Para probarlo, abre MASS:/ en uLaunchELF y ejecuta el ELF de RetroArch.",
            "Para OPL, crea conf_apps.cfg en la raíz del USB y agrega una línea como RETROARCH=mass:/APPS/retroarch/raboot.elf.",
            "Ajusta la ruta y el nombre del ELF según dónde hayas copiado los archivos y el nombre que tenga en tu paquete.",
          ],
        },

        {
          title: "Cargar juegos y elegir un core",

          description:
            "RetroArch necesita un core compatible con el sistema al que pertenece cada juego.",

          items: [
            "En RetroArch, selecciona Load Content y busca el juego en el USB.",
            "Cuando lo solicite, selecciona el core adecuado para su sistema (por ejemplo, NES, Atari o Sega).",
            "El Buildbot publica cores PS2 como archivos separados; elige uno compatible y extráelo según su paquete.",
            "Para cerrar el juego y volver al menú, usa SELECT + START y elige Close Content.",
          ],
        },

        {
          title: "Nightly y contenido",

          description:
            "La carpeta principal del Buildbot contiene compilaciones del programa y la carpeta latest ofrece paquetes recientes de cores para PS2.",

          items: [
            "Las compilaciones nightly se actualizan con frecuencia y no equivalen necesariamente a una versión estable.",
            "Comprueba la fecha del paquete y conserva una copia de la configuración que te funcione.",
            "Usa ROMs y contenido que tengas derecho a utilizar.",
          ],
        },
      ],
    },
  },
  //POPSLoader PS1
  {
    console: "PS2",

    name: "POPSLoader para PS1 en PS2",

    image: "img/PS2/POPSLoader.jpg",

    description:
      "Explorador y lanzador de juegos de PS1 para PS2. Usa POPStarter con imágenes VCD; la versión 1.4.x también incluye Ember Beta-2 como opción experimental independiente.",

    website: "https://github.com/NathanNeurotic/POPSLoader",

    downloads: [
      {
        name: "POPSLoader 1.4.4",
        url: "https://github.com/NathanNeurotic/POPSLoader/releases/tag/1.4.4",
      },
      {
        name: "POPSLoader 1.2.3 (POPStarter)",
        url: "https://github.com/NathanNeurotic/POPSLoader/releases/tag/1.2.3",
      },
      {
        name: "Controlador POPStarter para MMCE (test)",
        url: "https://github.com/ps2-mmce/mmceman/releases/tag/popstarter",
      },
      {
        name: "Controlador USB exFAT (BDMAssault)",
        url: "https://github.com/israpps/BDMAssault/releases/latest",
      },
      {
        name: "Controlador MX4SIO (beta)",
        url: "https://github.com/israpps/BDMAssault/releases/tag/mx4sio",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/DIA31SBD#67YqteIk0aMuJVGq4nq97Q",
      },
    ],

    guide: {
      function:
        "Organiza y ejecuta juegos de PS1 desde POPStarter usando archivos VCD. POPSLoader 1.4.x también incluye Ember Beta-2, un emulador separado que sigue siendo experimental.",

      compatibility: {
        POPStarter:
          "VCD desde USB, MMCE o MX4SIO con el controlador correspondiente.",
        MMCE: "Controlador de prueba; lee el MMCE del puerto 0.",
        MX4SIO: "Controlador Open Beta; usa el adaptador en el puerto 2.",
        "USB exFAT":
          "Requiere los módulos BDMAssault en la carpeta POPSTARTER de la Memory Card.",
        Ember:
          "Componente experimental independiente; su ejecución y guardado no están verificados en una PS2 real.",
      },

      requirements: [
        "PlayStation 2 con un método para ejecutar homebrew, como FMCB, FunTuna u OPL.",
        "Dispositivo de juegos: USB, MMCE o MX4SIO, y sus controladores si corresponden.",
        "Imágenes VCD propias y los componentes POPS de Sony necesarios para POPStarter; no están incluidos.",
      ],

      installation: [
        "Descargar el paquete completo desde la release 1.4.4 y conservar su estructura de carpetas.",
        "Copiar APPS/PS1_POPSLOADER/ al dispositivo utilizado por el lanzador y colocar POPS/ en la raíz del dispositivo de juegos.",
        "Como alternativa para instalar solo la aplicación en una Memory Card, importar PS1_POPSLOADER.psu con un gestor compatible con archivos PSU.",
        "Agregar por separado los componentes POPS de Sony que requiere POPStarter; el paquete no los incluye.",
      ],

      usage:
        "Inicia POPSLOADER.ELF, selecciona un juego de la biblioteca y ejecútalo. Los juegos convertidos para POPStarter se ubican en la carpeta POPS del dispositivo.",

      notes:
        "El repositorio ofrece POPSLoader 1.4.4. Algunos cambios recientes, rutas y controladores no están verificados en una PS2 real; revisa la matriz de compatibilidad antes de depender de ellos.",

      version: "1.4.4",

      author: "NathanNeurotic / POPSLoader",

      details: [
        {
          title: "Convertir juegos y preparar la biblioteca VCD",

          description:
            "POPS-VCD-Manager convierte juegos desde archivos CUE al formato VCD usado por POPStarter.",

          items: [
            "En POPS-VCD-Manager, selecciona Archivo > Convertir juego a VCD y carga el archivo .cue correspondiente.",
            "Crea la carpeta POPS en la raíz del USB, MMCE o MX4SIO y copia allí los archivos .VCD.",
            "Desde el administrador puedes crear VMC para ambos slots e integrar los juegos en la pestaña Apps de OPL.",
            "Si descargas carátulas, copia la carpeta ART o las imágenes generadas al dispositivo donde está la biblioteca.",
            "El administrador también permite crear CHEATS.TXT con opciones como $SAFEMODE, $HDTVFIX y $WIDESCREEN.",
          ],
        },

        {
          title: "Controlador USB exFAT con BDMAssault",

          description:
            "Usa los módulos de BDMAssault para permitir que POPStarter acceda a un USB exFAT.",

          items: [
            "Descarga BDMAssault desde su release y abre READY_TO_USE.",
            "Copia bdm_assault.irx como mc?:/POPSTARTER/usbd.irx.",
            "Copia usbd_bd_assault.irx como mc?:/POPSTARTER/usbhdfsd.irx.",
            "Sustituye ? por la ranura de Memory Card que usa la consola y evita mezclar estos módulos con los de otro dispositivo.",
          ],
        },

        {
          title: "Controlador POPStarter para MMCE",

          description:
            "POPS4MMCE_OPEN_TEST_BUILD001 es un controlador de prueba para acceder a la microSD de un MMCE.",

          items: [
            "Descarga y extrae el paquete desde la release de MMCEMAN.",
            "Copia los dos archivos IRX incluidos en mc?:/POPSTARTER/ de la Memory Card, conservando sus nombres.",
            "Esta configuración permite que POPStarter lea los juegos del MMCE conectado al puerto 0.",
            "Es una compilación de prueba; confirma la compatibilidad con tu configuración antes de usarla como única forma de acceso a los juegos.",
          ],
        },

        {
          title: "Controlador POPStarter para MX4SIO",

          description:
            "BDMAssault publica un paquete Open Beta específico para POPStarter y MX4SIO.",

          items: [
            "Descarga BDMASSAULT_MX4SIO.zip desde la release MX4SIO Open Beta.",
            "Copia los archivos IRX incluidos en mc0:/POPSTARTER/.",
            "Conecta el MX4SIO al puerto 2 de Memory Card (el derecho).",
            "Al ser una beta, puede no funcionar en todas las consolas o adaptadores.",
          ],
        },

        {
          title: "Ember Beta-2: opción experimental",

          description:
            "La versión 1.4.x incorpora Ember aparte de POPStarter. No es necesario usar Ember para ejecutar juegos VCD de POPStarter.",

          items: [
            "Ember necesita un BIOS propio de PlayStation de 512 KiB en EMBER/bios.bin.",
            "El BIOS y las imágenes de juegos no vienen incluidos.",
            "La documentación del proyecto indica que el inicio de juegos, los mandos y la persistencia de VMC no están verificados en hardware real.",
          ],
        },
      ],
    },
  },
  //RETROLauncher
  {
    console: "PS2",

    name: "RETROLauncher",

    image: "img/PS2/RETROLauncher.png",

    description:
      "Launcher gráfico para organizar bibliotecas de juegos retro en PS2 y abrir herramientas como RetroArch, POPStarter, Neutrino, wLaunchELF ISR y OPL.",

    website: "https://github.com/Spaghetticode-Boon-Tobias/RETROLauncher",

    downloads: [
      {
        name: "Código y archivos (ZIP)",
        url: "https://github.com/Spaghetticode-Boon-Tobias/RETROLauncher/archive/refs/heads/main.zip",
      },
      {
        name: "Manual en español (PDF)",
        url: "https://github.com/Spaghetticode-Boon-Tobias/RETROLauncher/blob/main/RETROLauncher%20ESP.pdf",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/nYIGyBLB#__3vdOUaO83fhVsZ4g92uA",
      },
    ],

    guide: {
      function:
        "Ofrece una interfaz gráfica personalizable para reunir bibliotecas de juegos y acceder a emuladores y aplicaciones de PS2. RETROLauncher organiza y lanza el contenido; no reemplaza los emuladores asociados.",

      compatibility: {
        "Modelo probado":
          "SCPH-77xxx NTSC-J con Matrix Infinity 1.93 y FreeMCBoot 1.8.",
        Dependencias:
          "RetroArch, POPStarter, Neutrino, wLaunchELF ISR y OPL para las funciones correspondientes.",
        Estado:
          "El autor indica pruebas en un solo modelo; el funcionamiento en otras consolas no está confirmado.",
      },

      requirements: [
        "PlayStation 2 con un método para ejecutar homebrew.",
        "RETROLauncher y sus carpetas de datos, conservando la estructura incluida en el ZIP.",
        "Los emuladores o aplicaciones que se quieran iniciar desde el launcher.",
      ],

      installation: [
        "Descargar el ZIP de la rama main; el repositorio no publica releases etiquetadas.",
        "Extraer el archivo y conservar la estructura de la carpeta RETROLauncher.",
        "Iniciar RETROLauncher.elf desde un lanzador homebrew.",
        "Configurar o instalar los emuladores y aplicaciones que se utilizarán desde la interfaz.",
      ],

      usage:
        "Usa la interfaz de RETROLauncher para navegar por las bibliotecas y abrir el programa correspondiente a cada plataforma o aplicación.",

      notes:
        "El README informa que solo se probó en una PS2 SCPH-77xxx NTSC-J con Matrix Infinity 1.93 y FreeMCBoot 1.8. La compatibilidad con otros modelos y configuraciones puede variar.",

      version: "Rama main (sin releases publicadas)",

      author: "Spaghetticode / Boon Tobias",

      details: [
        {
          title: "Qué integra",

          description:
            "RETROLauncher funciona como interfaz y punto de acceso a programas externos para PS2.",

          items: [
            "RetroArch para bibliotecas que usan cores Libretro.",
            "POPStarter para juegos de PS1.",
            "Neutrino para juegos de PS2.",
            "wLaunchELF ISR y OPL para iniciar otras aplicaciones y juegos.",
            "Las configuraciones asociadas siguen dependiendo de cada programa.",
          ],
        },

        {
          title: "Descarga y documentación",

          description:
            "El proyecto ofrece su código y archivos desde la rama principal, además de manuales en varios idiomas.",

          items: [
            "No hay paquetes en la sección GitHub Releases; usa Código y archivos (ZIP) para obtener el contenido del repositorio.",
            "Consulta el manual en español enlazado arriba para revisar las opciones y configuración del launcher.",
            "El enlace de MEGA es un marcador pendiente de reemplazar por un mirror real.",
          ],
        },
      ],
    },
  },
  //DKWDRV
  {
    console: "PS2",

    name: "DKWDRV",

    image: "img/PS2/DKWDRV.png",

    description:
      "Reemplazo unificado del controlador PS1DRV de PS2 para ejecutar juegos de PlayStation 1. Incluye carga desde USB en fase beta, limitada a consolas DECKARD.",

    website: "https://github.com/DKWDRV/DKWDRV",

    downloads: [
      {
        name: "DKWDRV.ELF v1.7.6w",
        url: "https://github.com/DKWDRV/DKWDRV/releases/download/1.7.6w/DKWDRV.ELF",
      },
      {
        name: "Releases y cambios",
        url: "https://github.com/DKWDRV/DKWDRV/releases/latest",
      },
      {
        name: "Mirror MEGA (pendiente)",
        url: "https://mega.nz/folder/SR5VnSJJ#0KRs8HvvD3G4-izAcfEzHA",
      },
    ],

    guide: {
      function:
        "Sustituye el controlador PS1DRV original de PlayStation 2 y ofrece opciones de vídeo, imagen y compatibilidad por juego. También puede cargar juegos PS1 desde USB en consolas DECKARD, función que el proyecto considera beta.",

      compatibility: {
        "Controlador PS1":
          "El mismo ELF está diseñado para consolas PS2 PGIF y DECKARD; la compatibilidad puede variar según el hardware, el juego y los modchips.",
        "Carga USB": "Beta y solo disponible en consolas DECKARD.",
        Estado:
          "El proyecto advierte que DKWDRV sigue en desarrollo y puede presentar errores.",
      },

      requirements: [
        "PlayStation 2 capaz de ejecutar archivos ELF homebrew.",
        "Para iniciar un juego desde disco, tener insertado un disco PS1 válido antes de ejecutar DKWDRV.",
        "Para la carga USB: consola DECKARD y dispositivo USB con juegos preparados en formato BIN/CUE.",
      ],

      installation: [
        "Descargar DKWDRV.ELF desde la release oficial más reciente.",
        "Ejecutar el ELF desde un lanzador homebrew. Para iniciar un juego desde disco, insertar primero un disco PS1 válido.",
        "Para cargar desde USB, crear la estructura DKWDRV/BIN en la raíz y colocar cada juego en su propia carpeta.",
        "Fusionar las pistas BIN de cada juego en un único archivo, conservar el CUE correspondiente y comprobar que ambos nombres coincidan.",
        "Elegir Select USB Game en el menú de DKWDRV para seleccionar un juego.",
      ],

      usage:
        "Ajusta las opciones deseadas y selecciona Run para iniciar el juego. En carga USB, selecciona el juego desde Select USB Game; al resaltar un título puedes usar el botón cuadrado para abrir sus opciones y guardar una configuración por juego.",

      notes:
        "La carga USB está en beta y solo funciona en consolas DECKARD. El README advierte que puede faltar audio XA/CDDA y que los juegos deben estar desfragmentados. Los modchips pueden interferir con el arranque y causar pantalla negra.",

      version: "1.7.6w",

      author: "Proyecto DKWDRV",

      details: [
        {
          title: "Estructura de juegos USB",

          description:
            "Crea una carpeta por juego dentro de DKWDRV/BIN en la raíz de la unidad USB.",

          table: {
            headers: ["Ruta o archivo", "Contenido"],
            rows: [
              ["DKWDRV/BIN/Crash Bandicoot/", "Carpeta individual del juego."],
              [
                "Crash Bandicoot.bin y Crash Bandicoot.cue",
                "Pistas BIN fusionadas; el CUE debe apuntar al BIN con el mismo nombre.",
              ],
              ["CHEATS.TXT", "Archivo opcional de trucos para ese juego."],
            ],
          },
        },

        {
          title: "Formato y limitaciones de USB",

          description:
            "Consulta las limitaciones de la release antes de preparar la biblioteca; la función de carga USB sigue en desarrollo.",

          items: [
            "El README indica unidades FAT32 o exFAT; recomienda FAT32 porque algunos dispositivos pueden no ser reconocidos con exFAT.",
            "Las pistas BIN deben estar fusionadas y usar sectores de 2352 bytes; el archivo CUE es obligatorio.",
            "El proyecto advierte que los juegos deben estar desfragmentados para reducir fallos o bloqueos.",
            "El audio XA/CDDA todavía puede faltar y el cambio de disco no está implementado.",
            "La versión 1.7.6w añade la opción USB Init Delay; si el juego no inicia, revisa el ajuste de demora descrito en la release.",
          ],
        },

        {
          title: "Opciones incluidas",

          description:
            "DKWDRV permite ajustar correcciones y parámetros de imagen y guardarlos para cada juego.",

          items: [
            "Cambio automático de modo de vídeo y opción para forzar uno.",
            "Ajustes de dithering, desplazamiento de pantalla, filtrado y bandas de color.",
            "Opciones de compatibilidad para GPU, HDMI y juegos protegidos.",
            "La disponibilidad de algunas opciones depende de que la consola sea PGIF o DECKARD.",
          ],
        },
      ],
    },
  },
  //OPL Manager
  {
    console: "PS2",

    name: "OPL Manager",

    image: "img/PS2/OPLManager.jpg",

    description:
      "Herramienta para Windows que detecta juegos de PS2 en un dispositivo y ayuda a descargar carátulas, discos, logotipos y editar la información CFG usada por OPL.",

    website: "https://oplmanager.com/site/index.php",

    downloads: [
      {
        name: "WEB Oficial",
        url: "https://static2.oplmanager.com/releases/OPL_Manager_V24.zip",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/7IYE3JQT#viGBs1qKb6Wzey-hG6l85A",
      },
    ],

    guide: {
      function:
        "Administra información y material gráfico de juegos para Open PS2 Loader. Puede escanear la ubicación de los juegos, descargar carátulas, imágenes de disco o logotipos y editar los archivos CFG.",

      compatibility: {
        Sistema: "Windows 7 SP1 o superior.",
        Runtime:
          ".NET 6 Runtime; el sitio oficial ofrece instaladores x86 y x64.",
        OPL: "Administra archivos y recursos para juegos usados con OPL.",
      },

      requirements: [
        "PC con Windows 7 SP1 o superior.",
        ".NET 6 Runtime instalado (x86 o x64, según el sistema).",
        "Dispositivo o carpeta con los juegos que se desean gestionar.",
        "Conexión a Internet para descargar recursos gráficos desde los servidores de OPL Manager.",
      ],

      installation: [
        "Descargar OPL Manager v24 desde el sitio oficial y extraer el archivo ZIP.",
        "Instalar .NET 6 Runtime si todavía no está instalado.",
        "Abrir OPL Manager y seleccionar el idioma preferido si se solicita.",
        "Indicar la ruta del dispositivo o carpeta que contiene los juegos; la aplicación puede crear las carpetas necesarias.",
      ],

      usage:
        "Una vez seleccionada la ruta, deja que OPL Manager detecte los juegos. Elige los recursos gráficos que quieres descargar y pulsa comenzar. Para añadir o corregir información, usa Edit CFG y guarda los cambios.",

      notes:
        "El mirror MEGA podría no ser la versión más reciente; se recomienda la descarga oficial v24. Según el sitio oficial, las versiones anteriores a V23 ya no son compatibles con la descarga y subida de ART.",

      version: "V24",

      author: "OPL Manager",

      details: [
        {
          title: "Añadir carátulas e información",

          description: "Este flujo resume los pasos de OPL Manager.",

          items: [
            "Abrir la aplicación y seleccionar el idioma si es el primer inicio.",
            "Indicar la ruta del USB u otra carpeta donde están los juegos.",
            "Esperar a que OPL Manager detecte la biblioteca.",
            "Seleccionar los recursos que se desean obtener, como carátulas, discos o logotipos, y comenzar la descarga.",
            "Usar Edit CFG para corregir o completar los datos del juego.",
          ],
        },
        {
          title: "Tipos de recursos gráficos",

          description:
            "La documentación oficial lista recursos ART y sus tamaños recomendados para OPL.",

          table: {
            headers: ["Recurso", "Nombre", "Tamaño", "Formato"],
            rows: [
              ["Carátula frontal PS2", "COV", "140 × 200", "PNG"],
              ["Lomo PS2", "LAB", "18 × 240", "PNG"],
              ["Carátula trasera PS2", "COV2", "242 × 344", "PNG"],
              ["Disco", "ICO", "64 × 64", "PNG"],
              ["Logotipo", "LGO", "300 × 125", "PNG"],
              ["Fondo", "BG", "640 × 480", "PNG"],
            ],
          },
        },
      ],
    },
  },
  //OPL Server
  {
    console: "PS2",

    name: "OPL Server",

    image: "img/PS2/OPLServer.jpg",

    description:
      "Servidor SMBv1 para conectar Open PS2 Loader a una carpeta compartida del PC y acceder a juegos por la red local.",

    website: "https://github.com/elmariolo/OPL-Server",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/elmariolo/OPL-Server/releases/latest",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/iAhAhbpD#s_n6rtINweFYGjc-H_5OdA",
      },
    ],

    guide: {
      function:
        "Proporciona un servidor SMBv1 dedicado para que OPL acceda a juegos alojados en una carpeta compartida del PC, sin tener que copiarlos a un USB.",

      compatibility: {
        "Sistema operativo":
          "La guía existente indica Windows 7 o superior; el README del proyecto no especifica requisitos detallados.",
        Protocolo: "SMBv1/Samba, según la descripción del proyecto.",
        Red: "La PS2 y el PC deben estar conectados a la misma red local.",
      },

      requirements: [
        "PC Windows que pueda ejecutar OPL Server.",
        "PlayStation 2 con Open PS2 Loader y conexión a la misma red local que el PC.",
        "Carpeta de juegos preparada para OPL, por ejemplo PS2/DVD para juegos en formato ISO.",
        "Configurar el servidor y OPL con el mismo puerto, nombre de recurso compartido e IP del PC.",
      ],

      installation: [
        "Descargar OPL Server desde GitHub Releases y extraerlo.",
        "Elegir la carpeta de juegos para compartir; la versión 2.0 permite seleccionar la ruta y el puerto del servidor.",
        "Iniciar OPLServer.exe y permitir el acceso solo en la red privada de confianza, si el Firewall de Windows solicita autorización.",
        "En OPL, configurar los ajustes de red con la IP del PC, el puerto del servidor y el nombre del recurso compartido.",
        "Guardar los cambios y abrir la sección SMB en OPL para comprobar que aparecen los juegos.",
      ],

      usage:
        "Inicia el servidor en el PC y mantenlo ejecutándose mientras OPL accede a la carpeta compartida. En OPL usa la IP local actual del PC, el puerto configurado en el servidor y el nombre del recurso compartido.",

      notes:
        "SMBv1 es un protocolo antiguo con riesgos de seguridad. Úsalo solo en una red local privada y de confianza; evita exponer el puerto a Internet, habilitar SMB1 globalmente o conceder permisos de escritura/control total a Everyone. La guía usa el puerto 1024 como ejemplo, pero v2.0 permite elegir otro. El mirror MEGA podría no corresponder a la última versión.",

      version: "v2.0 (24 de agosto de 2022)",

      author: "elmariolo",

      details: [
        {
          title: "Preparar la carpeta de juegos",

          description:
            "La configuración de ejemplo usa una carpeta PS2 compartida y coloca las imágenes en subcarpetas según el tipo de juego.",

          items: [
            "Crear o seleccionar la carpeta PS2 que se compartirá con OPL.",
            "Para juegos en ISO, usar la ruta PS2/DVD.",
            "Configurar OPL Manager para trabajar directamente sobre la carpeta PS2 si se van a administrar nombres o carátulas.",
            "La carpeta y los archivos deben tener permisos de lectura para el usuario con el que se ejecuta OPL Server.",
          ],
        },
        {
          title: "Configurar OPL",

          description:
            "Los valores de conexión en OPL deben coincidir con los valores configurados en OPL Server.",

          items: [
            "En Network Settings, habilitar Advanced Options y seleccionar IP como tipo de dirección.",
            "Introducir la IP local del PC y el puerto que usa OPL Server; la configuración de ejemplo usa 1024.",
            "Escribir PS2 como nombre del recurso compartido si esa es la carpeta configurada en el servidor.",
            "Guardar los ajustes y revisar la sección SMB. Si el router cambia la IP del PC, actualizar la dirección en OPL.",
          ],
        },
        {
          title: "Precauciones de red",

          description:
            "Las instrucciones antiguas incluyen ajustes de seguridad que conviene adaptar a la configuración actual de Windows.",

          items: [
            "No expongas SMBv1 ni el puerto del servidor a Internet; limita el uso a una red local confiable.",
            "Si el Firewall solicita una regla, permite el acceso solo en el perfil de red privada y restringe los equipos de origen cuando sea posible.",
            "Evita compartir con Everyone con control total; concede únicamente los permisos mínimos necesarios.",
            "No habilites globalmente el componente de Windows SMB 1.0/CIFS sin confirmar que esta aplicación lo requiere; SMBv1 es un protocolo obsoleto.",
          ],
        },
      ],
    },
  },
  //PSXiSO Compression Tool
  {
    console: "PS2",

    name: "PSXiSO Compression Tool",

    image: "img/PS2/PSXiSOCompressionTool.jpg",

    description:
      "Interfaz para convertir y comprimir imágenes de juegos de PS2 con herramientas como ZISO, CHDMan y MaxCSO. ZSO es la opción recomendada para probar con OPL.",

    website:
      "https://www.psx-place.com/threads/psxiso-compression-tool-chd-zso-cso.37543/",

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/qA4ABR5Q#EndB6bpNyeAeZBNP6gTP5g",
      },
      {
        name: "Tema de PSX-Place",
        url: "https://www.psx-place.com/threads/psxiso-compression-tool-chd-zso-cso.37543/",
      },
    ],

    guide: {
      function:
        "Facilita la conversión de imágenes de juegos mediante distintas utilidades incluidas o integradas, como chdman, ziso, maxcso y bin2iso. La opción ZSO permite preparar juegos para probarlos con OPL.",

      compatibility: {
        Sistema: "Aplicación de escritorio para Windows (PSXiSO.exe).",
        Entrada: "Admite imágenes ISO y BIN/CUE, según la guía disponible.",
        Salida:
          "La herramienta ofrece opciones relacionadas con ZSO, CHD y CSO; comprueba por separado qué formatos acepta tu versión de OPL.",
      },

      requirements: [
        "PC con Windows para ejecutar PSXiSO.exe.",
        "Imagen propia de un juego compatible, en ISO o BIN/CUE.",
        "Espacio libre suficiente para conservar la imagen original y crear la imagen convertida.",
        "USB FAT32 o una ubicación de red compartida si se copiará el resultado para OPL.",
      ],

      installation: [
        "Descargar y extraer PSXiSO Compression Tool.",
        "Ejecutar PSXiSO.exe desde la carpeta extraída. Si presenta problemas al iniciarse desde una ubicación protegida, probar una carpeta local con permisos adecuados.",
        "Copiar o seleccionar la imagen del juego y elegir el formato de salida que se quiera probar.",
        "Para preparar un juego para OPL, seleccionar ZSO y Output as Filename para conservar el nombre del archivo.",
        "Esperar a que termine la conversión y comprobar que el archivo resultante esté completo antes de copiarlo a la biblioteca.",
      ],

      usage:
        "Selecciona la imagen, elige ZSO y Output as Filename, y pulsa ziso para iniciar la conversión. Luego copia el archivo resultante a la carpeta DVD del USB o del servidor SMB utilizado por OPL.",

      notes:
        "ZSO es la opción recomendada para probar con OPL, pero no se garantiza que todas las salidas (CHD o CSO) sean compatibles con cada versión o dispositivo. Verifica la compatibilidad antes de convertir toda la biblioteca. Conserva una copia de la imagen original: la compresión no garantiza que el resultado quede por debajo del límite de 4 GB por archivo de FAT32.",

      version: "Consultar el tema de PSX-Place",

      author: "PSXiSO / autor del tema en PSX-Place",

      details: [
        {
          title: "Conversión recomendada",

          description:
            "Este procedimiento prepara una imagen ZSO para probarla desde OPL.",

          items: [
            "Abrir PSXiSO.exe y seleccionar la imagen ISO.",
            "Elegir ZSO como formato de salida y activar Output as Filename para conservar el nombre.",
            "Pulsar ziso y esperar a que finalice el proceso.",
            "Copiar el archivo convertido a DVD dentro del USB o de la carpeta compartida por SMB.",
          ],
        },
        {
          title: "Formatos y precauciones",

          description:
            "PSXiSO reúne varias utilidades de conversión; el formato de salida debe elegirse según el loader y el dispositivo de destino.",

          items: [
            "La interfaz permite trabajar con imágenes BIN/CUE e ISO.",
            "Entre las utilidades incluidas se nombran ziso para ZSO, chdman para CHD, maxcso para CSO y bin2iso.",
            "Que una opción aparezca en PSXiSO no significa que OPL pueda cargarla: consulta la documentación de tu versión de OPL.",
            "Mantén las imágenes originales y prueba primero un juego; revisa también el tamaño final si el destino es FAT32.",
          ],
        },
      ],
    },
  },
  //JLojch
  {
    console: "PS2",

    name: "JLojch",

    image: "img/PS2/JLojch.png",

    description:
      "Aplicación para consultar y mantener información de compatibilidad de juegos de PS2 con distintos métodos de carga y emulación.",

    website: "https://github.com/nokiajavi/JLojch",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://github.com/nokiajavi/JLojch/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/3UwUxTiQ#cuW5mvjLtWg80hLsEjOqag",
      },
    ],

    guide: {
      function:
        "Permite consultar, añadir, modificar y borrar registros de compatibilidad de juegos de PlayStation 2 para diferentes métodos de carga o emulación.",

      compatibility: {
        HDLoader: "Incluido en la base de compatibilidad.",
        "Open PS2 Loader": "Incluido en la base de compatibilidad.",
        "USBExtreme / USBAdvance": "Incluidos en la base de compatibilidad.",
        ESR: "Incluido en la base de compatibilidad.",
        PCSX2: "Incluido en la base de compatibilidad.",
      },

      requirements: [
        "PC compatible con el instalador Windows o con Java para ejecutar el archivo JAR.",
        "JLojch v4.72 o la versión más reciente disponible en GitHub Releases.",
      ],

      installation: [
        "Descargar el instalador Windows, el archivo JAR o el paquete portable desde GitHub Releases.",
        "En Windows, ejecutar JLojchSetup_v4.72.exe; para la versión JAR, tener Java instalado y abrir JLojch.jar.",
        "Si se usa la versión portable, extraer el archivo RAR y ejecutar la aplicación desde la carpeta extraída.",
      ],

      usage:
        "Busca el juego en JLojch y revisa los datos de compatibilidad asociados a HDLoader, OPL, USBExtreme/USBAdvance, ESR o PCSX2. La aplicación también permite añadir, modificar y eliminar entradas de sus listados.",

      notes:
        "La base de compatibilidad es una referencia para comparar métodos de carga; el resultado puede variar según la revisión de OPL, la consola, el juego y la configuración. Verifica los datos antes de cambiar una instalación funcional.",

      version: "4.72",

      author: "nokiajavi",

      details: [
        {
          title: "Métodos incluidos",

          description:
            "JLojch reúne listados de compatibilidad de varios métodos de carga y emulación de PS2.",

          items: [
            "HDLoader y HDAdvance.",
            "Open PS2 Loader.",
            "USBExtreme y USBAdvance.",
            "ESR.",
            "PCSX2.",
          ],
        },
        {
          title: "Consulta y edición de datos",

          description:
            "La aplicación está diseñada para consultar y contribuir a los listados de compatibilidad.",

          items: [
            "Localizar un juego en los listados para consultar la información disponible.",
            "Comparar el resultado correspondiente al método de carga o emulación que se planea usar.",
            "JLojch permite añadir, modificar o eliminar registros; comprueba cuidadosamente los datos antes de guardarlos.",
            "La release 4.72 ofrece instalador Windows, JAR y paquete portable.",
          ],
        },
      ],
    },
  },
  //USBUtil
  {
    console: "PS2",

    name: "USBUtil",

    image: "img/PS2/USBUtil.jpg",

    description:
      "Herramienta para preparar juegos de PS2 desde imágenes ISO y gestionarlos en una unidad USB FAT32 mediante el formato de juegos USB de OPL.",

    website:
      "https://www.psx-place.com/resources/usbutil-by-iseko-translated-by-jbliz7665.679/",

    downloads: [
      {
        name: "Recurso de PSX-Place",
        url: "https://www.psx-place.com/resources/usbutil-by-iseko-translated-by-jbliz7665.679/",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/jBx3QSRZ#Hsn4XZsSHdvyi-sZfNXREQ",
      },
    ],

    guide: {
      function:
        "Crea entradas de juegos para USB desde imágenes ISO, administra la lista guardada en ul.cfg y permite añadir, renombrar o eliminar juegos.",

      compatibility: {
        Almacenamiento: "Unidad USB formateada en FAT32.",
        "Open PS2 Loader":
          "Usa el formato de juegos USB gestionado por USBUtil; configura OPL para detectar juegos USB.",
      },

      requirements: [
        "PC con Windows para ejecutar USBUtil v2.2 rev1.0.exe.",
        "Unidad USB en formato FAT32.",
        "Imagen ISO de un juego de PS2.",
        "Espacio libre en la unidad USB para los archivos generados.",
      ],

      installation: [
        "Descargar y extraer USBUtil.rar.",
        "Abrir USBUtil v2.2 rev1.0.exe desde la carpeta extraída.",
        "Conectar la unidad USB FAT32 al PC y preparar la imagen ISO de origen.",
      ],

      usage:
        "En USBUtil, selecciona Archivo > Crear juego desde ISO, elige una o varias imágenes, selecciona la unidad USB de destino y pulsa Crear. Deja Medio en AUTO y usa un nombre de juego de hasta 32 caracteres. Para continuar una biblioteca existente, abre su archivo ul.cfg.",

      notes:
        "Copia ISOs pequeñas directamente a DVD o usa USBUtil para preparar juegos en el formato USB gestionado por ul.cfg. FAT32 no admite archivos individuales de 4 GB o más; conserva una copia de las ISOs originales y verifica el resultado en OPL.",

      version: "v2.2 rev1.0",

      author: "ISEKO; traducción de JBLiz7665",

      details: [
        {
          title: "Crear juegos desde ISO",

          description:
            "Prepara uno o más juegos en la unidad USB y crea o actualiza su lista ul.cfg.",

          items: [
            "Abrir Archivo > Crear juego desde ISO.",
            "Elegir la carpeta de origen que contiene las ISOs; se puede seleccionar una o varias.",
            "Seleccionar como destino la unidad USB correspondiente.",
            "Opcionalmente, editar el nombre del juego; la guía recomienda no superar 32 caracteres.",
            "Dejar Medio en AUTO, pulsar Crear y esperar a que finalice el proceso.",
            "Cerrar la ventana y comprobar que el juego aparezca en la lista de USBUtil.",
          ],
        },
        {
          title: "Continuar o modificar una lista",

          description:
            "Para añadir juegos a una biblioteca ya preparada, abre el ul.cfg existente desde la unidad de destino.",

          items: [
            "Seleccionar Abrir juegos ul.cfg.",
            "Buscar la carpeta de la unidad USB y abrir el ul.cfg existente.",
            "Añadir más juegos con Archivo > Crear juego desde ISO.",
            "Usar los controles de USBUtil para renombrar o eliminar entradas según sea necesario.",
          ],
        },
      ],
    },
  },
  //PSUManager
  {
    console: "PS2",

    name: "PSUManager",

    image: "img/PS2/PSUManager.png",

    description:
      "Administrador multiplataforma de archivos PSU para partidas guardadas de PlayStation 2. Permite crear y extraer archivos de respaldo de Memory Card.",

    website: "https://git.techwritescode.dev/techwritescode/PSUManager",

    downloads: [
      {
        name: "GitHub Releases",
        url: "https://git.techwritescode.dev/techwritescode/PSUManager/releases",
      },
      {
        name: "Mirror MEGA (pendiente)",
        url: "https://mega.nz/folder/WQQTGJiY#FI9oE-UY4dHyF2WAFclzpA",
      },
    ],

    guide: {
      function:
        "Crea archivos de respaldo .psu a partir de partidas de PS2 y extrae el contenido de archivos .psu existentes. El proyecto incluye una interfaz gráfica y asociación de archivos/contexto en el sistema.",

      compatibility: {
        Windows: "Instalador MSI x64 disponible en la release v1.0.1.",
        Linux:
          "El repositorio incluye instrucciones para compilar e instalar desde el código fuente; el paquete Linux no figura como publicado en la release.",
        Formato: "Archivos de respaldo de partidas de PS2 con extensión .psu.",
      },

      requirements: [
        "PC con Windows x64 para instalar el MSI publicado.",
        "Para compilar en Linux: CMake 3.21 o superior, compilador C++17 y wxWidgets 3.2.",
        "Archivo .psu o carpeta de partida de PS2 que se desea respaldar o extraer.",
      ],

      installation: [
        "Descargar psumanager-v1.0.1-windows-amd64.msi desde la release oficial e instalarlo.",
        "En Linux, seguir las instrucciones de compilación del README; la release indica que el empaquetado Linux no fue publicado.",
        "Abrir PSUManager desde el sistema o asociar los archivos .psu con la aplicación si se desea.",
      ],

      usage:
        "Usa PSUManager para crear un archivo .psu desde una partida de PS2 o para extraer una partida desde un archivo .psu. El menú contextual del sistema también permite acceder a las acciones disponibles para esos archivos.",

      notes:
        "La opción Open extrae la partida a un archivo temporal y la abre con la aplicación predeterminada, pero no detecta cambios ni los escribe de vuelta en el archivo .psu. Guarda y verifica tus respaldos antes de modificar o reemplazar archivos.",

      version: "v1.0.1",

      author: "techwritescode",

      details: [
        {
          title: "Crear y extraer respaldos",

          description:
            "PSUManager está enfocado en el formato de archivo .psu de partidas guardadas de PlayStation 2.",

          items: [
            "Crear archivos .psu para respaldar partidas.",
            "Extraer el contenido de un archivo .psu.",
            "Usar la interfaz gráfica o las acciones del sistema operativo disponibles tras la instalación.",
            "Conservar una copia independiente de los archivos originales antes de realizar cambios.",
          ],
        },
        {
          title: "Integración con el sistema",

          description:
            "El programa ofrece asociación de archivos y acciones desde el menú contextual del sistema.",

          items: [
            "En Windows 11, el menú contextual clásico aparece dentro de Show more options (Mostrar más opciones).",
            "La opción Open abre una extracción temporal con la aplicación predeterminada.",
            "Los cambios realizados sobre esa extracción temporal no se guardan automáticamente dentro del archivo .psu.",
            "El mirror MEGA queda pendiente; usa la release oficial para descargar la versión publicada.",
          ],
        },
      ],
    },
  },
  //conf_apps.BAT y title.cfg_maker.BAT
  {
    console: "PS2",

    name: "conf_apps.BAT y title.cfg_maker.BAT",

    image: "img/PS2/.bat.jpg",

    description:
      "Scripts de Windows para automatizar la configuración del menú APPS de OPL: generar conf_apps.cfg o crear carpetas de configuración por aplicación.",

    website: null,

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/jc5SBQhA#8m1jvxaTsEpjj9p59uwO3Q",
      },
    ],

    guide: {
      function:
        "Automatiza dos tareas distintas para el menú APPS de OPL. El generador de conf_apps.cfg crea la lista de nombres y rutas de los ELF; title.cfg_maker.BAT intenta generar una carpeta por aplicación.",

      compatibility: {
        "conf_apps.cfg":
          "El archivo generado puede ubicarse en la raíz del USB/servidor OPL o en mc0:/OPL/.",
        "title.cfg_maker.BAT":
          "La guía lo indica para OPL v12.77 o superior; ese método no está probado.",
        "Origen de aplicaciones": "USB FAT32 o servidor OPL configurado.",
      },

      requirements: [
        "PC con Windows para ejecutar los archivos BAT.",
        "PlayStation 2 con OPL y menú APPS.",
        "Aplicaciones de PS2 en formato ELF organizadas en APPS.",
        "Unidad USB FAT32 o carpeta de servidor OPL accesible desde el PC.",
      ],

      installation: [
        "Descargar y extraer el paquete APPS USB.",
        "Copiar los ELF y sus carpetas de datos dentro de APPS en el USB o servidor.",
        "Para generar conf_apps.cfg, preparar el archivo de entrada que relacione cada nombre visible con la ruta del ELF y copiarlo a APPS.",
        "Ejecutar el BAT generador de conf_apps.cfg, seleccionar USB o OPL Server y esperar a que cree cfg/conf_apps.cfg.",
        "Copiar el archivo generado a la raíz del USB/servidor OPL o a mc0:/OPL/.",
      ],

      usage:
        "Usa el generador de conf_apps.cfg para crear una lista de aplicaciones basada en sus rutas. Usa title.cfg_maker.BAT como método alternativo para crear carpetas por ELF solo si tu versión de OPL es compatible y puedes comprobar el resultado.",

      notes:
        "Son dos scripts con propósitos diferentes: uno genera conf_apps.cfg y el otro crea carpetas por aplicación. La guía señala que title.cfg_maker.BAT para OPL v12.77 o superior no fue probado; haz una copia de seguridad y verifica cada resultado en OPL antes de reemplazar una configuración funcional.",

      version: "Depende del paquete APPS USB y de la versión de OPL",

      author: "No especificado",

      details: [
        {
          title: "Generador de conf_apps.cfg",

          description:
            "Este método produce un archivo con las entradas que OPL muestra en su menú APPS.",

          items: [
            "Preparar conf_apps.cfg con las aplicaciones y rutas de sus ELF.",
            "Copiar conf_apps.cfg a la carpeta APPS y ejecutar el BAT generador desde Windows.",
            "Seleccionar 1 para USB o 2 para OPL Server y confirmar con Enter.",
            "Al finalizar, buscar el resultado en cfg/conf_apps.cfg.",
            "Copiar el resultado a la raíz del dispositivo o servidor, o a mc0:/OPL/.",
          ],
        },
        {
          title: "title.cfg_maker.BAT",

          description:
            "La alternativa por carpetas intenta generar una carpeta de configuración para cada aplicación ELF.",

          items: [
            "Copiar title.cfg_maker.BAT a la carpeta APPS y ejecutarlo.",
            "La guía indica OPL v12.77 o superior para este método.",
            "El procedimiento no está probado; comprueba las carpetas generadas y la detección en OPL.",
            "Conserva una copia de APPS antes de probarlo.",
          ],
        },
        {
          title: "Videos de referencia",

          description:
            "Los videos enlazados presentan diferentes métodos para configurar el menú APPS.",

          items: [
            "Método #1 para distintos OPL.",
            "Método #2 para OPL actualizado.",
            "Explicación ampliada de tres formas de configurar APPS.",
          ],
        },
      ],
    },
  },
  //Temas para OPL
  {
    console: "PS2",

    name: "Temas para OPL",

    image: "img/PS2/TemasOPL.jpg",

    description:
      "Guía para instalar temas en Open PS2 Loader desde USB, Memory Card o el disco duro interno de una PS2 FAT.",

    website: null,

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/fVozRBTB#bKaEZdxyi7rbXdPhvwg9Hw",
      },
    ],

    guide: {
      function:
        "Instala temas para personalizar la interfaz de Open PS2 Loader y permite seleccionar el tema desde las opciones de pantalla de OPL.",

      compatibility: {
        OPL: "Admite selección de tema desde Display Settings.",
        USB: "La guía utiliza una unidad FAT32 con la carpeta THM en la raíz.",
        MemoryCard:
          "Ruta indicada: mc0:/THM/; el espacio limita la cantidad de temas.",
        "Disco duro interno":
          "En PS2 FAT, la guía indica la ruta hdd0:/+OPL/THM/.",
      },

      requirements: [
        "PlayStation 2 con Open PS2 Loader.",
        "Pack de temas OPL extraído.",
        "USB FAT32, Memory Card o disco duro interno compatible para almacenar los temas.",
        "uLaunchELF si se copiarán los temas a una Memory Card o al disco duro interno desde la consola.",
      ],

      installation: [
        "Descargar y extraer el pack; dentro se encuentra la carpeta THM con los temas.",
        "Para USB, copiar la carpeta THM a la raíz del dispositivo.",
        "Para una Memory Card, usar uLaunchELF para copiar las carpetas de temas a mc0:/THM/.",
        "En PS2 FAT con disco duro interno, copiar los temas a hdd0:/+OPL/THM/.",
        "Iniciar OPL, abrir el menú con Start y entrar a Display Settings.",
        "Elegir el tema, confirmar con OK y seleccionar Save Changes.",
      ],

      usage:
        "Después de copiar los temas a la ubicación correspondiente, abre OPL y selecciónalo en Start > Display Settings > Theme. Guarda los cambios para conservar la selección.",

      notes:
        "La guía advierte que en Memory Card normalmente caben solo uno o dos temas. Mantén la estructura de carpetas del pack y comprueba la ruta disponible en tu versión de OPL; las opciones pueden variar entre dispositivos y versiones.",

      version: "Depende de la versión de OPL y del pack",

      author: "MarcheBMPC",

      details: [
        {
          title: "Ubicaciones de instalación",

          description:
            "Copia la carpeta THM en la ubicación correspondiente al dispositivo donde OPL buscará los temas.",

          table: {
            headers: ["Dispositivo", "Ruta"],
            rows: [
              ["USB", "Raíz del dispositivo: THM/"],
              ["Memory Card", "mc0:/THM/"],
              ["Disco duro interno de PS2 FAT", "hdd0:/+OPL/THM/"],
            ],
          },
        },
        {
          title: "Copiar con uLaunchELF",

          description:
            "Para transferir temas desde USB a una Memory Card o al disco duro interno, usa el explorador de archivos de la consola.",

          items: [
            "Abrir el dispositivo de origen en uLaunchELF y localizar la carpeta del tema.",
            "Presionar R1 y elegir Copy.",
            "Abrir la carpeta de destino y presionar R1 > Paste.",
            "En una Memory Card, instala solo los temas que quepan y deja espacio disponible para otros archivos.",
          ],
        },
        {
          title: "Seleccionar el tema en OPL",

          description:
            "Los temas instalados se seleccionan desde las opciones de pantalla de OPL.",

          items: [
            "Presionar Start para abrir el menú de OPL.",
            "Entrar a Display Settings y elegir Theme.",
            "Seleccionar el tema deseado, confirmar con OK y guardar con Save Changes.",
          ],
        },
      ],
    },
  },
  //XtremeEliteBoot (XEBPlus)
  {
    console: "PS2",

    name: "XtremeEliteBoot (XEBPlus)",

    image: "img/PS2/XtremeEliteBoot.jpg",

    description:
      "Dashboard y lanzador homebrew para PlayStation 2, con interfaz personalizable y acceso a aplicaciones ELF desde USB.",

    website:
      "https://www.psx-place.com/threads/xtremeeliteboot-s-dashboard-special-xmas-showcase.38959/",

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/vF5DlDgQ#XaER7fdgIrl7ApnsaTDgLA",
      },
    ],

    guide: {
      function:
        "Inicia XEBPlus como dashboard para navegar y abrir aplicaciones homebrew de PS2. Permite cambiar el tema y puede añadirse como acceso desde FMCB/FunTuna u OPL.",

      compatibility: {
        Sistema: "PlayStation 2 capaz de ejecutar archivos ELF homebrew.",
        Almacenamiento: "La guía usa una unidad USB FAT32.",
        "Archivo de inicio": "XEBPLUS/XEBPLUS_XMAS.ELF en el paquete descrito.",
        Integración:
          "Puede configurarse como acceso de FMCB/FunTuna o como ruta de inicio desde OPL.",
      },

      requirements: [
        "PlayStation 2 con un método para ejecutar homebrew, como FMCB o FunTuna.",
        "USB en formato FAT32.",
        "Paquete de XtremeEliteBoot extraído, conservando la carpeta XEBPLUS.",
      ],

      installation: [
        "Extraer XtremeEliteBoot y copiar la carpeta XEBPLUS a la raíz del USB.",
        "Conectar el USB a la PS2 y abrir XEBPLUS/XEBPLUS_XMAS.ELF desde un lanzador ELF.",
        "Opcionalmente, crear un acceso en FMCB/FunTuna o configurar en OPL la ruta MASS:/XEBPLUS/XEBPLUS_XMAS.ELF.",
        "Si se modifica el menú de FMCB/FunTuna, guardar la configuración en la Memory Card correspondiente y probar el acceso.",
      ],

      usage:
        "Ejecuta XEBPLUS_XMAS.ELF y navega por el dashboard para iniciar las aplicaciones disponibles. Para cambiar el tema, selecciona una carpeta dentro de XEBPLUS/THM y configura su nombre en XEBPLUS/CFG/xebplus.cfg.",

      notes:
        "Conserva la estructura de carpetas del paquete. Verifica las rutas antes de asignar XEBPlus como inicio automático; si la unidad o carpeta cambia, el acceso configurado puede dejar de funcionar.",

      version: "XEBPlus XMAS (según el paquete enlazado)",

      author: "Proyecto XtremeEliteBoot",

      details: [
        {
          title: "Agregar XEBPlus al menú de FMCB/FunTuna",

          description:
            "Puedes registrar un acceso directo en un espacio disponible del menú OSDSYS.",

          items: [
            "Abrir Configure OSDSYS options en la herramienta de configuración de FMCB/FunTuna.",
            "Seleccionar un ítem vacío y asignarle un nombre, por ejemplo XtremeEliteBoot.",
            "Configurar Path1 como MASS:/XEBPLUS/XEBPLUS_XMAS.ELF.",
            "Guardar la configuración en la Memory Card que utiliza la consola y reiniciar para probar el acceso.",
          ],
        },
        {
          title: "Configurar el inicio automático desde OPL",

          description:
            "Como alternativa, configura una tecla de inicio de OPL para ejecutar el ELF de XEBPlus.",

          items: [
            "En los ajustes de OPL, abrir Configure E1 Launch Keys.",
            "Seleccionar Auto y establecer la ruta MASS:/XEBPLUS/XEBPLUS_XMAS.ELF.",
            "Guardar los cambios y confirmar que el archivo siga en esa ubicación del USB.",
          ],
        },
        {
          title: "Cambiar el tema de XEBPlus",

          description:
            "XEBPlus guarda sus temas en XEBPLUS/THM y selecciona el tema por nombre desde su archivo de configuración.",

          items: [
            "Abrir XEBPLUS/THM y elegir la carpeta del tema que se desea usar.",
            "Abrir XEBPLUS/CFG/xebplus.cfg.",
            'Editar el valor XEBPlusTheme="nombre_de_carpeta" con el nombre exacto de la carpeta elegida.',
            "Guardar el archivo y reiniciar XEBPlus para comprobar el cambio.",
          ],
        },
      ],
    },
  },
  //Project Titan Magenta Edition
  {
    console: "PS2",

    name: "Project Titan Magenta Edition",

    image: "img/PS2/ProjectTitan.jpg",

    description:
      "Sistema operativo experimental y plataforma de aplicaciones nativas para PS2, con su propia cadena de arranque, kernel, servicios de runtime e integración para ejecutar juegos.",

    website:
      "https://github.com/sobecapaklebs-dev/project-titan-magenta-edition",

    downloads: [
      {
        name: "GitHub Release",
        url: "https://github.com/sobecapaklebs-dev/project-titan-magenta-edition/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/SExTxAbB#id2Cx6wdTkbl5YdnPiJSzg",
      },
    ],

    guide: {
      function:
        "Project Titan instala un entorno de sistema para PS2 con bootloader, kernel, shell, servicios, runtime de aplicaciones y paquetes TPKG. También integra backends Titan Neutrino y Titan UL para ejecutar juegos; no es solo un lanzador ni una interfaz visual para OPL.",

      compatibility: {
        Plataforma:
          "Proyecto diseñado para PlayStation 2; consulta las notas de cada release para los requisitos y dispositivos compatibles.",
        Estado:
          "Sistema en desarrollo activo y experimental; la documentación exige validar el funcionamiento en hardware real.",
        Instalación:
          "Incluye un paquete de instalación y otro installerless con una cadena de arranque basada en Memory Card y USB.",
      },

      requirements: [
        "PlayStation 2 compatible con el flujo de instalación descrito en la release.",
        "Memory Card y unidad USB preparadas según las instrucciones oficiales.",
        "Copia de seguridad de los datos y archivos de arranque actuales antes de probar otro entorno de sistema.",
        "Revisar las notas de release y la documentación de arquitectura antes de elegir el método de instalación.",
      ],

      installation: [
        "Descargar los paquetes desde la página oficial de Releases y leer las instrucciones de la versión elegida.",
        "Preferir TITAN_INSTALL.zip para los flujos de instalación o actualización admitidos por el proyecto.",
        "Usar el paquete Installerless solo si se va a seguir su procedimiento manual específico; su cadena documentada es Memory Card BOOT.ELF → Titan Bootloader → USB kernel.elf → Project Titan.",
        "No mezclar archivos de versiones distintas ni reemplazar el arranque existente sin preparar un método de recuperación.",
        "Verificar el resultado y la compatibilidad en la consola real; las pruebas de PC no garantizan el comportamiento en hardware PS2.",
      ],

      usage:
        "Una vez iniciado Titan, explora su shell y servicios del sistema, administra aplicaciones instalables TPKG y utiliza los backends incluidos para juegos. Las funciones disponibles dependen de la versión instalada.",

      notes:
        "Project Titan es un sistema operativo/plataforma de PS2, no un frontend de OPL. El proyecto está en desarrollo y requiere pruebas en hardware real. La release publicada se titula RC4.5 Big Update, sus archivos llevan nombres R4.4 y el README de la rama principal menciona 0.3.91-rc15; confirma en Releases cuál paquete corresponde a la versión que vas a instalar.",

      version: "RC4.5 Big Update (paquetes publicados como R4.4)",

      author: "sobecapaklebs-dev",

      details: [
        {
          title: "Componentes de Project Titan",

          description:
            "El proyecto reúne varios componentes del sistema y servicios compartidos para aplicaciones y juegos.",

          items: [
            "Titan Bootloader, shell y runtime de sistema.",
            "Servicios de almacenamiento, entrada, audio, red, gráficos, perfiles y notificaciones.",
            "Formato TPKG para instalar aplicaciones compatibles con Titan.",
            "Titan Neutrino y Titan UL como backends integrados de ejecución de juegos.",
            "SDK y APIs para desarrollar aplicaciones nativas para la plataforma Titan.",
          ],
        },
        {
          title: "Paquetes de la release",

          description:
            "La release consultada distribuye un paquete instalable y una alternativa de instalación manual.",

          items: [
            "TITAN_INSTALL.zip está destinado a los flujos de instalación o actualización admitidos.",
            "El paquete Installerless requiere seguir la disposición de archivos y la cadena de arranque documentadas.",
            "Los videos enlazados son referencias adicionales de instalación y presentación; para los pasos vigentes, prevalecen las instrucciones de la release.",
          ],
        },
        {
          title: "Estado y comprobación",

          description:
            "Titan es una plataforma compleja y experimental; una interfaz que arranca no implica que todos sus servicios o juegos sean compatibles.",

          items: [
            "Comprueba la versión de la release, nombres de archivo y changelog antes de copiar paquetes.",
            "Respalda la Memory Card y el contenido del USB antes de cambiar el bootloader o kernel.",
            "Confirma las funciones en hardware PS2 y revisa avisos de compatibilidad específicos.",
          ],
        },
      ],
    },
  },
  //BlueRetro
  {
    console: "PS2",

    name: "Wireless Controller Adapter BlueRetro",

    image: "img/PS2/BlueRetro.jpg",

    description:
      "Firmware y plataforma Bluetooth para adaptadores físicos BlueRetro compatibles con PS2, que permiten conectar mandos inalámbricos a la consola.",

    website: "https://github.com/darthcloud/BlueRetro",

    downloads: [
      {
        name: "GitHub Release",
        url: "https://github.com/darthcloud/BlueRetro/releases",
      },
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/uQRlBSZD#Bl1MOXK-UdYvC0waNsxcKw",
      },
    ],

    guide: {
      function:
        "BlueRetro es un adaptador Bluetooth para consolas retro. En PS2, un receptor físico compatible conecta mandos inalámbricos y ofrece configuración de botones, perfiles y actualización de firmware OTA.",

      compatibility: {
        Hardware:
          "Se necesita un receptor/adaptador BlueRetro físico compatible con PS2; el firmware por sí solo no convierte la consola ni el mando.",
        "Revisión de placa":
          "El firmware se distribuye en paquetes distintos para HW1 y HW2; confirma la revisión de tu adaptador antes de descargar o actualizar.",
        Mandos:
          "El proyecto lista mandos Wii, Switch, PS3, PS4/PS5, Xbox One/Series y dispositivos HID; revisa la guía de emparejamiento para el modelo exacto.",
        Configuración:
          "La Web Bluetooth de BlueRetro se admite en Chrome de escritorio o Android.",
      },

      requirements: [
        "PlayStation 2 y adaptador/receptor BlueRetro compatible con su puerto de mando.",
        "Mando Bluetooth compatible y cargado.",
        "Para configurar o actualizar: dispositivo con Chrome de escritorio o Android y Bluetooth LE.",
        "Archivo de firmware correspondiente exactamente a la revisión HW1 o HW2 del adaptador.",
      ],

      installation: [
        "Conectar el adaptador BlueRetro compatible al puerto de mando de la PS2 y encender la consola.",
        "Para emparejar, activar el modo de búsqueda del adaptador y poner el mando Bluetooth en modo de sincronización.",
        "Si se actualiza el firmware, desconectar todos los mandos del adaptador antes de iniciar la conexión OTA.",
        "Abrir la página oficial de OTA en Chrome y conectar con BlueRetro mediante Web Bluetooth.",
        "Extraer el ZIP del firmware y elegir el archivo BlueRetro_*.bin que corresponda a la revisión de hardware del adaptador.",
        "Pulsar Update Firmware y esperar hasta que el proceso llegue al 100 % y el dispositivo se desconecte de la página.",
      ],

      usage:
        "Una vez emparejado, usa el mando inalámbrico como controlador de la PS2. La página Advance Config permite ajustar tipo de salida, botones, ejes y perfiles; desconecta los mandos antes de entrar al modo de configuración Bluetooth.",

      notes:
        "El repositorio de BlueRetro fue archivado el 14 de diciembre de 2025 y ya no recibe mantenimiento. No instales un firmware HW1 en una placa HW2 ni al revés. La guía oficial advierte que OTA puede tardar unos 10 minutos en una laptop y más desde un teléfono; no desconectes el adaptador durante la actualización.",

      version: "v25.04 (repositorio archivado)",

      author: "BlueRetro / darthcloud",

      details: [
        {
          title: "Emparejar un mando Bluetooth",

          description:
            "El comportamiento predeterminado pone al adaptador en modo de búsqueda cuando no hay mandos conectados.",

          items: [
            "Encender la PS2 con el adaptador conectado; el LED pulsante indica modo de búsqueda.",
            "Poner el mando compatible en modo de sincronización y completar el emparejamiento.",
            "En conexiones posteriores, normalmente basta con encender el mando o pulsar un botón.",
            "Si el adaptador está en modo manual, activa el emparejamiento con el botón BOOT según la guía del modelo.",
          ],
        },
        {
          title: "Actualizar firmware por OTA",

          description:
            "La actualización se realiza desde el sitio de BlueRetro usando Web Bluetooth.",

          items: [
            "Desconectar todos los mandos del adaptador.",
            "En Chrome de escritorio o Android, abrir blueretro.io/ota.html y conectar el dispositivo.",
            "Descomprimir el ZIP de firmware correspondiente a HW1 o HW2.",
            "Seleccionar el archivo BlueRetro_*.bin adecuado para ese adaptador y pulsar Update Firmware.",
            "Esperar a que llegue al 100 % y a que BlueRetro se desconecte de la página; esa desconexión indica que terminó.",
            "No apagar ni desconectar el adaptador durante el proceso.",
          ],
        },
        {
          title: "Configuración adicional",

          description:
            "La configuración avanzada también permite personalizar controles y guardar perfiles.",

          items: [
            "Usar Advance Config para elegir el tipo de salida y ajustar botones o ejes.",
            "Usar Presets para cargar mapeos predefinidos y guardar los cambios para cada mando.",
            "Consultar la guía de emparejamiento para confirmar pasos específicos del controlador Bluetooth.",
          ],
        },
      ],
    },
  },
];
