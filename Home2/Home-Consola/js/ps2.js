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
  //Open PS2 Loader











  
  //wLaunchELF
  {
    console: "PS2",
    name: "wLaunchELF",
    image: "img/wlaunchelf.png",
    description: "Administrador de archivos para PlayStation 2.",

    guide: {
      function: "Administrador de archivos para PlayStation 2.",

      compatibility: {
        FMCB: "✅ Compatible",
        FunTuna: "✅ Compatible",
        USB: "✅ Compatible",
        MMCE: "✅ Compatible",
      },

      requirements: ["PlayStation 2", "Método de arranque homebrew"],

      installation: ["Copiar el ELF.", "Configurar acceso directo."],

      usage: "Permite explorar dispositivos y ejecutar aplicaciones ELF.",

      notes: "Aplicación fundamental para la mayoría de herramientas PS2.",

      version: "4.43a",

      author: "PS2 Homebrew",
    },

    website: "https://github.com/ps2homebrew/wLaunchELF",
    downloads: [
      {
        name: "GitHub",
        url: "https://github.com/ps2homebrew/wLaunchELF/releases",
      },
      {
        name: "MEGA",
        url: "https://mega.nz/",
      },
    ],
  },
  //Apollo Save Tool
  {
    console: "PS2",

    name: "Apollo Save Tool",

    image: "img/apollo-save-tool.png",

    description: "Gestor de partidas guardadas para PlayStation 2.",

    guide: {
      function:
        "Permite importar, exportar y administrar partidas guardadas desde Memory Card y dispositivos USB.",

      compatibility: {
        FMCB: "✅ Compatible",

        FunTuna: "✅ Compatible",

        USB: "✅ Compatible",

        MemoryCard: "✅ Compatible",
      },

      requirements: [
        "USB en formato FAT32",

        "Apollo Save Tool",

        "Memory Card PS2",
      ],

      installation: [
        "Descargar Apollo Save Tool.",

        "Copiar <strong>APOLLO-99PS2</strong> al dispositivo USB.",

        "Ejecutar APOLLO.ELF desde wLaunchELF.",
      ],

      usage:
        "Permite importar y exportar partidas guardadas entre USB y Memory Card.",

      notes:
        "Los saves externos deben almacenarse en la carpeta <code>PS2/SAVEDATA</code> del dispositivo USB.",

      version: "Actual",

      author: "bucanero",

      details: [
        {
          title: "Instalación",

          description: "Pasos para ejecutar Apollo Save Tool.",

          items: [
            "Descargar la última versión disponible.",

            "Descomprimir el paquete.",

            "Copiar la carpeta APOLLO-99PS2 al USB.",

            "Abrir wLaunchELF.",

            "Ejecutar MASS:/APOLLO-99PS2/APOLLO.ELF.",
          ],
        },

        {
          title: "Ubicación de Save Data",

          description: "Ruta utilizada para detectar partidas externas.",

          items: ["PS2/SAVEDATA", "Cada partida debe mantener su ID original."],
        },

        {
          title: "Configurar fuente USB",

          description: "Configuración recomendada dentro de Apollo.",

          items: [
            "Abrir Settings.",

            "Cambiar External Saves Source.",

            "Seleccionar mass:/",
          ],
        },

        {
          title: "Importar una partida",

          description: "Proceso para copiar una partida desde USB.",

          items: [
            "Abrir Ext Saves.",

            "Seleccionar la partida.",

            "Elegir Import to Memory Card.",

            "Seleccionar MC0 o MC1.",

            "Confirmar la importación.",
          ],
        },
      ],
    },

    website: "https://github.com/bucanero/apollo-ps2",

    downloads: [
      {
        name: "GitHub Releases",

        url: "https://github.com/bucanero/apollo-ps2/releases",
      },

      {
        name: "Mirror MEGA",

        url: "https://mega.nz/TU-LINK",
      },
    ],
  },
];
