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
        ["hdd0:/", "Disco duro interno; solo PS2 FAT con adaptador de red IDE."],
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
        ["hdd0:/", "Disco duro interno; solo PS2 FAT con adaptador de red IDE."],
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
        "Este procedimiento adapta un tutorial antiguo de FunTuna/FMCB. Antes de reemplazar un ELF o modificar el menú, conserva una copia de seguridad de los archivos y la configuración actuales. Los nombres de archivo y las opciones pueden variar entre versiones.",

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
            "El tutorial original requiere un USB FAT32 para transferir el ELF.",

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

          items: [
            "Memory Card: MC?:/BOOT/SPA.LNG",
            "USB: mass:/LNG/",
          ],
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

          items: [
            "Memory Card: MC?:/BOOT/SPA.LNG",
            "USB: mass:/LNG/",
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

          items: [
            "Memory Card: MC?:/BOOT/SPA.LNG",
            "USB: mass:/LNG/",
          ],
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

    name: "Apollo Save Tool",

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

          description:
            "Instala y abre la aplicación desde el dispositivo USB.",

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

          description:
            "Copia el save seleccionado a la tarjeta física de PS2.",

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
        PS2: "✅ SCPH-500xx y modelos posteriores, según el tutorial",

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
        "El tutorial indica compatibilidad con SCPH-500xx y modelos posteriores. Consulta el hilo de PSX-Place para obtener la aplicación y revisar la información más reciente.",

      version: "Consultar hilo de PSX-Place",

      author: "krat0s",

      details: [
        {
          title: "Ejecutar PS2Temps desde USB",

          description:
            "Pasos del tutorial para iniciar la aplicación desde un dispositivo USB.",

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
        "El tutorial también menciona title.cfg_maker.BAT para OPL v.12.77 o superior, pero indica que ese método no fue probado.",

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
        "El tutorial indica que esta función requiere OPL 1.2 Beta 2179 o superior. Verifica que el Mastercode y los códigos correspondan al ID y región exactos del juego.",

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
        Lanzador: "uLaunchELF, wLaunchELF u otro lanzador para ejecutar el ELF.",
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
        Mandos:
          "PS1 original, Dual Analog, DualShock 1 y DualShock 2.",
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
        Idioma: "Incluye español; L1/R1 cambian el idioma en el menú principal.",
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
            'En OPL, configura "IGR Path" con la ruta indicada en el tutorial: mc0:/APP_SD2CLOUD/IGR.ELF.',
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
        Almacenamiento: "El tutorial utiliza una memoria USB en formato FAT32.",
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
        "El tutorial adjunto menciona POPSLoader 1.3.1; el repositorio ofrece la versión 1.4.4. Las notas del proyecto advierten que algunos cambios recientes, rutas y controladores no están verificados en una PS2 real. Revisa su matriz de compatibilidad antes de depender de ellos.",

      version: "1.4.4",

      author: "NathanNeurotic / POPSLoader",

      details: [
        {
          title: "Convertir juegos y preparar la biblioteca VCD",

          description:
            "El tutorial utiliza POPS-VCD-Manager para convertir juegos desde archivos CUE al formato VCD usado por POPStarter.",

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
        "Carga USB":
          "Beta y solo disponible en consolas DECKARD.",
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

];
