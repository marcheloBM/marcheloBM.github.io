const ps3Apps = [

// Backup IDPS, ACT.DAT y NOR
{
  console: "PS3",
  name: "Backup PS3 (IDPS, ACT.DAT y NOR)",
  image: "img/PS3/backup-idps-nor.jpg",

  description:
    "Guía para realizar copias de seguridad de IDPS, ACT.DAT y la memoria NOR de PlayStation 3.",

  website: "https://www.ps3xploit.me/",

  downloads: [
    {
      name: "PS3Xploit Oficial",
      url: "https://www.ps3xploit.me/",
    },
  ],

  guide: {
    function:
      "Permite respaldar el identificador único de la consola (IDPS), el archivo ACT.DAT asociado a la activación de PSN y la memoria flash NOR.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32",
      Internet: "✅ Requerido",
    },

    requirements: [
      "PlayStation 3 compatible",
      "HEN instalado",
      "Pendrive FAT32",
      "Conexión a Internet",
    ],

    installation: [
      "Conectar un USB FAT32.",
      "Abrir el navegador de Internet.",
      "Acceder al host de PS3Xploit.",
      "Ejecutar la utilidad deseada.",
      "Guardar los archivos generados en un lugar seguro.",
    ],

    usage:
      "Los respaldos obtenidos permiten conservar información única de la consola para recuperación y mantenimiento.",

    notes:
      "Se recomienda guardar varias copias en diferentes dispositivos y nunca compartir archivos como IDPS o ACT.DAT.",

    version: "Actual",
    author: "PS3Xploit Team",

    details: [
      {
        title: "¿Qué es IDPS?",
        description:
          "Identificador único de cada consola PlayStation 3.",
        items: [
          "Es exclusivo de cada consola.",
          "Se utiliza para identificar el sistema.",
          "Es recomendable realizar un respaldo.",
          "Conservar siempre una copia segura.",
        ],
      },

      {
        title: "¿Qué es ACT.DAT?",
        description:
          "Archivo asociado a la activación de contenido digital.",
        items: [
          "Se genera al activar una cuenta PSN.",
          "Contiene datos de activación.",
          "Es útil para respaldos personales.",
          "Debe guardarse junto al IDPS.",
        ],
      },

      {
        title: "Backup IDPS y ACT.DAT",
        description:
          "Proceso para obtener una copia de seguridad del IDPS y ACT.DAT.",
        items: [
          "Abrir el Navegador de Internet.",
          "Acceder al host de PS3Xploit o Nuestra WEB.",
          "Entrar en Utilidades.",
          "Seleccionar Backup IDPS.",
          "Presionar Initialize ACT/IDPS Dumper.",
          "Esperar la carga completa.",
          "Seleccionar Dump ACT.DAT & IDPS.",
          "Esperar la generación de los archivos.",
        ],
      },

      {
        title: "Verificar archivos generados",
        description:
          "Comprobar que el respaldo se realizó correctamente.",
        items: [
          "Retirar el USB.",
          "Conectarlo al PC.",
          "Comprobar que existen los archivos act.dat.",
          "Comprobar que existe idps.hex.",
          "Guardar varias copias de seguridad.",
        ],
      },

      {
        title: "Backup NOR",
        description:
          "Crear una copia de seguridad completa de la memoria NOR.",
        items: [
          "Abrir el Navegador de Internet.",
          "Acceder al host de PS3Xploit  o Nuestra WEB.",
          "Entrar en Utilidades.",
          "Seleccionar Backup NOR USB.",
          "Presionar Initialize Exploitation.",
          "Esperar la finalización del proceso.",
          "No apagar la consola durante la extracción.",
        ],
      },

      {
        title: "Comprobar Backup NOR",
        description:
          "Verificar la copia de seguridad de la memoria flash.",
        items: [
          "Retirar el USB.",
          "Conectarlo al PC.",
          "Comprobar que el archivo NOR fue generado.",
          "Guardar copias en distintos dispositivos.",
          "Conservar el respaldo original sin modificar.",
        ],
      },

      {
        title: "Recomendaciones",
        description:
          "Buenas prácticas para conservar los respaldos.",
        items: [
          "Guardar una copia en el PC.",
          "Guardar una copia en la nube.",
          "No modificar los archivos originales.",
          "No compartir IDPS ni ACT.DAT.",
          "Mantener los respaldos identificados con el modelo de consola.",
        ],
      },
    ],
  },
},

// Activar HEN
{
  console: "PS3",
  name: "Activar HEN",
  image: "img/PS3/activar-HEN.jpg",
  description:
    "Guía para instalar y activar HEN en consolas PlayStation 3 compatibles con HFW.",

  website: "https://www.ps3xploit.me/",

  downloads: [
    {
      name: "PS3Xploit Oficial",
      url: "https://www.ps3xploit.me/",
    },
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/mRRUySZJ#HZCB43qooux9ibJZdZWEKQ",
    },
  ],

  guide: {
    function:
      "Permite instalar y activar HEN para ejecutar homebrew, emuladores, gestores de archivos y aplicaciones en PlayStation 3.",

    compatibility: {
      HFW: "✅ Requerido",
      FAT32: "✅ Compatible",
      Internet: "✅ Requerido",
    },

    requirements: [
      "Consola PS3 compatible con HEN",
      "Firmware HFW instalado",
      "Conexión a Internet",
      "Pendrive FAT32 (opcional)",
    ],

    installation: [
      "Actualizar la consola a HFW compatible.",
      "Abrir el navegador de Internet de PS3.",
      "Acceder al instalador de HEN.",
      "Instalar HEN.",
      "Reiniciar la consola.",
    ],

    usage:
      "Después de cada reinicio de la consola debes ejecutar 'Enable HEN' para volver a activar las funciones homebrew.",

    notes:
      "Se recomienda iniciar sesión y activar la consola antes de instalar HEN para evitar problemas posteriores con licencias y contenido digital.",

    version: "Última versión disponible",
    author: "PS3Xploit Team",

    details: [
      {
        title: "Activar la consola",
        description:
          "Se recomienda activar la consola antes de instalar HEN.",
        items: [
          "Iniciar sesión en PlayStation Network.",
          "Entrar en Administración de cuentas.",
          "Seleccionar Activación del sistema.",
          "Activar Juegos.",
          "Activar PSP si se desea.",
        ],
      },

      {
        title: "Instalar HFW",
        description:
          "Preparar e instalar Hybrid Firmware.",
        items: [
          "Descargar el archivo HFW.",
          "Crear la ruta PS3/UPDATE/.",
          "Copiar PS3UPDAT.PUP.",
          "Conectar el USB.",
          "Actualizar desde Ajustes > Actualización del sistema.",
        ],
      },

      {
        title: "Instalar HEN desde Nuestra WEB",
        description:
          "Proceso de instalación mediante navegador.",
        items: [
          "Abrir Navegador de Internet.",
          "Poedemos acceder a https://marchelobm.github.io/PS3/index.html.",
          "Ejecutar HEN Auto Installer.",
          "Esperar la instalación.",
          "Reiniciar la consola.",
        ],
      },

      {
        title: "Instalar HEN desde WEB Oficial",
        description:
          "Proceso de instalación mediante navegador.",
        items: [
          "Abrir Navegador de Internet.",
          "Poedemos acceder a https://ps3xploit.me/.",
          "HEN Auto Installer solo tendremos que esperar a cargar y reinicie nuestra consola.",
          "HEN Installer/Enabler descargar y instalara el HEN en nuestra consola.",
          "Esperar la instalación.",
          "Reiniciar la consola.",
        ],
      },

      {
        title: "Método Alternativo (Uso a Distancia)",
        description:
          "Instalación alternativa mediante Remote Play.",
        items: [
          "Abrir HEN Alternate Installer.",
          "Esperar a que cargue.",
          "Salir al XMB.",
          "Entrar en Uso a Distancia.",
          "Seguir las instrucciones en pantalla.",
        ],
      },

      {
        title: "Activar HEN",
        description:
          "Activación diaria después de reiniciar la consola.",
        items: [
          "Buscar el icono Enable HEN.",
          "Ejecutar Enable HEN.",
          "Esperar el mensaje de éxito.",
          "La consola estará lista para usar homebrew.",
        ],
      },

      {
        title: "Solución de problemas",
        description:
          "Errores comunes durante la instalación.",
        items: [
          "Borrar caché del navegador.",
          "Borrar cookies.",
          "Restablecer ajustes del navegador.",
          "Reintentar la instalación.",
          "Usar Modo Seguro para reinstalar HFW si es necesario.",
        ],
      },
    ],
  },
},

// HEN Portable (Android)
{
  console: "PS3",
  name: "HEN Portable (Android)",
  image: "img/PS3/hen-portable.jpg",

  description:
    "Permite instalar HEN utilizando un teléfono Android como servidor web local, sin necesidad de un PC.",

  website: null,

  downloads: [
    {
      name: "APK Servidor Web",
      url: "https://mega.nz/folder/SQgW2RRT#uuEVCwwPgJqJDysQcT28aw",
    },
    {
      name: "WEB Offline (Archivos)",
      url: "https://mega.nz/folder/bIQWBApA#zJkPd28oyZRspAMJrT0Tlg",
    },
  ],

  guide: {
    function:
      "Convierte un dispositivo Android en un host local para instalar HEN desde la red doméstica.",

    compatibility: {
      Android: "✅ Requerido",
      HEN: "✅ Compatible",
      WiFi: "✅ Requerido",
    },

    requirements: [
      "Teléfono Android",
      "Aplicación servidor web",
      "Archivos WEB Offline",
      "PS3 conectada a la misma red",
    ],

    installation: [
      "Descargar la WEB Offline.",
      "Instalar la aplicación servidor web.",
      "Extraer los archivos descargados.",
      "Configurar el directorio web.",
      "Iniciar el servidor.",
    ],

    usage:
      "La dirección IP mostrada por Android deberá abrirse desde el navegador de la PS3 para ejecutar la instalación.",

    notes:
      "Ideal cuando la consola no puede acceder a la web oficial o cuando se desea disponer de una instalación local.",

    version: "Portable",
    author: "MarcheBMPC",

    details: [
      {
        title: "Archivos necesarios",
        description:
          "Descargar los componentes requeridos.",
        items: [
          "WEB Offline.",
          "APK servidor web.",
          "Aplicación para descomprimir ZIP o RAR.",
          "Conexión WiFi local.",
        ],
      },

      {
        title: "Preparar los archivos",
        description:
          "Extraer los archivos descargados.",
        items: [
          "Descargar WEB Offline.",
          "Extraer el contenido del ZIP.",
          "Recordar la ubicación de la carpeta.",
          "Instalar el servidor web Android.",
        ],
      },

      {
        title: "Configurar el servidor web",
        description:
          "Asignar la carpeta que utilizará Android como host.",
        items: [
          "Abrir la aplicación servidor web.",
          "Entrar en Settings.",
          "Seleccionar Home Directory.",
          "Buscar la carpeta extraída.",
          "Configurar la carpeta como raíz del servidor.",
        ],
      },

      {
        title: "Ajustar el puerto",
        description:
          "Configuraciones opcionales del servidor.",
        items: [
          "El puerto por defecto es 8080.",
          "Puede dejarse sin cambios.",
          "También puede modificarse manualmente.",
        ],
      },

      {
        title: "Iniciar servidor",
        description:
          "Publicar la WEB Offline dentro de la red local.",
        items: [
          "Presionar Start Server.",
          "Esperar que el servidor inicie.",
          "Anotar la dirección IP mostrada.",
          "Comprobar que Android y PS3 estén en la misma red.",
        ],
      },

      {
        title: "Instalar HEN",
        description:
          "Utilizar el host local desde la consola.",
        items: [
          "Abrir el navegador de Internet de PS3.",
          "Introducir la dirección IP proporcionada por Android.",
          "Esperar que cargue la página.",
          "Seleccionar Auto HEN.",
          "Esperar a que finalice el proceso.",
        ],
      },

      {
        title: "Finalizar instalación",
        description:
          "Últimos pasos después de cargar el exploit.",
        items: [
          "Esperar el reinicio automático.",
          "Buscar el icono Enable HEN.",
          "Activar HEN.",
          "Verificar que la instalación fue correcta.",
        ],
      },
    ],
  },
},

// Apollo Save Tool PS3
{
  console: "PS3",
  name: "Apollo Save Tool PS3",
  image: "img/PS3/apollo-save-tool.jpg",

  description:
    "Administrador de partidas guardadas, trofeos, licencias y tarjetas virtuales para PlayStation 3.",

  website: "https://github.com/bucanero/apollo-ps3",

  downloads: [
    {
      name: "GitHub Releases",
      url: "https://github.com/bucanero/apollo-ps3/releases",
    },
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CB4jmRxQ#TBO9dsfKrOUzFipKrGVGfw",
    },
  ],

  guide: {
    function:
      "Permite importar, exportar, respaldar y modificar partidas guardadas, trofeos, licencias y datos de PS1, PS2 y PS3.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32",
      PS1: "✅ Compatible",
      PS2: "✅ Compatible",
      PS3: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN activado",
      "Apollo Save Tool instalado",
      "Pendrive FAT32",
    ],

    installation: [
      "Copiar el archivo PKG al USB.",
      "Instalar desde Administrador de archivos PKG.",
      "Finalizar la instalación.",
      "Abrir Apollo Save Tool desde el menú Juegos.",
    ],

    usage:
      "Permite administrar partidas guardadas y licencias almacenadas en el disco duro o dispositivos USB.",

    notes:
      "Antes de reemplazar una partida guardada se recomienda realizar una copia de seguridad.",

    version: "Actual",
    author: "bucanero",

    details: [
      {
        title: "Instalar Apollo Save Tool",
        description: "Instalación básica del homebrew.",
        items: [
          "Copiar el PKG al USB.",
          "Abrir Administrar archivos PKG.",
          "Seleccionar Directorio estándar.",
          "Instalar Apollo Save Tool.",
          "Abrir la aplicación desde Juegos.",
        ],
      },

      {
        title: "Preparar SaveData en USB",
        description: "Ubicación de partidas guardadas para PS3.",
        items: [
          "Crear la carpeta PS3/SAVEDATA.",
          "Copiar los SaveData descargados.",
          "Conectar el USB a la consola.",
          "Abrir USB Saves dentro de Apollo.",
        ],
      },

      {
        title: "Importar partidas",
        description: "Copiar partidas desde USB al disco duro.",
        items: [
          "Abrir USB Saves.",
          "Seleccionar la partida deseada.",
          "Presionar ✕.",
          "Elegir Import Save.",
          "Confirmar la operación.",
        ],
      },

      {
        title: "Exportar partidas",
        description: "Copiar partidas del disco duro al USB.",
        items: [
          "Abrir HDD Saves.",
          "Seleccionar la partida.",
          "Presionar ✕.",
          "Elegir Export Save.",
          "Guardar en el USB.",
        ],
      },

      {
        title: "Gestión de trofeos",
        description: "Administrar trofeos almacenados en la consola.",
        items: [
          "Abrir Trophies.",
          "Visualizar trofeos instalados.",
          "Exportar copias de seguridad.",
          "Aplicar funciones compatibles.",
        ],
      },

      {
        title: "Online DB",
        description: "Base de datos online integrada.",
        items: [
          "Buscar partidas guardadas compatibles.",
          "Descargar SaveData disponibles.",
          "Instalar directamente desde Apollo.",
        ],
      },

      {
        title: "User Backup",
        description: "Realizar copias de seguridad de datos importantes.",
        items: [
          "Respaldar Licenses.",
          "Respaldar Flash2.",
          "Respaldar Memory Cards PS2 .VM2.",
          "Guardar los archivos en el USB.",
        ],
      },

      {
        title: "Soporte PlayStation 2",
        description: "Gestión de partidas y tarjetas de memoria virtuales.",
        items: [
          "Importar archivos .PSU.",
          "Importar archivos .MAX.",
          "Importar archivos .CBS.",
          "Importar archivos .SPS.",
          "Administrar tarjetas VMC.",
          "Administrar tarjetas VME.",
        ],
      },

      {
        title: "Soporte PlayStation 1",
        description: "Gestión de partidas PS1.",
        items: [
          "Importar archivos .MCS.",
          "Importar archivos .PSX.",
          "Administrar Memory Cards virtuales.",
          "Exportar respaldos compatibles.",
        ],
      },

      {
        title: "Controles",
        description: "Accesos rápidos dentro de la aplicación.",
        items: [
          "✕ Abrir o seleccionar.",
          "△ Mostrar detalles.",
          "□ Recargar lista.",
          "L1 / R1 Cambiar de página.",
          "○ Volver.",
        ],
      },

      {
        title: "Menús principales",
        description: "Opciones disponibles en Apollo Save Tool.",
        items: [
          "Trophies.",
          "USB Saves.",
          "HDD Saves.",
          "Online DB.",
          "User Backup.",
          "Settings.",
          "About.",
        ],
      },
    ],
  },
},

// Artemis
{
  console: "PS3",
  name: "Artemis",
  image: "img/PS3/artemis.webp",

  description:
    "Sistema de trucos y códigos para PlayStation 3 que permite activar modificaciones en tiempo real para juegos compatibles.",

  website: "https://github.com/bucanero/ArtemisPS3",

  downloads: [
    {
      name: "GitHub Releases",
      url: "https://github.com/bucanero/ArtemisPS3/releases",
    },
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/nNQXwZaa#vSnCSVMI9Ukw2XKnSYOi4g",
    },
  ],

  guide: {
    function:
      "Permite cargar códigos y trucos para juegos de PlayStation 3 mediante bases de datos locales o actualizadas desde Internet.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32",
      FTP: "✅ Compatible",
      Cheats: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN activado",
      "Artemis instalado",
      "Pendrive FAT32",
      "Base de datos USERLIST",
    ],

    installation: [
      "Instalar el PKG de Artemis.",
      "Descargar la base de datos USERLIST.",
      "Copiar USERLIST a USB o HDD.",
      "Abrir Artemis.",
    ],

    usage:
      "Permite seleccionar un juego, activar los códigos deseados e iniciarlo directamente desde la aplicación.",

    notes:
      "No todos los códigos funcionan correctamente en todos los juegos o versiones.",

    version: "Actual",
    author: "Project Artemis",

    details: [
      {
        title: "Instalar Artemis",
        description: "Instalación básica del homebrew.",
        items: [
          "Copiar el PKG al USB.",
          "Instalar desde Administrador de archivos PKG.",
          "Finalizar la instalación.",
          "Comprobar que aparece en el menú Juegos.",
        ],
      },

      {
        title: "Preparar USERLIST en USB",
        description: "Método recomendado para la base de datos.",
        items: [
          "Extraer el archivo descargado.",
          "Copiar la carpeta USERLIST.",
          "Colocarla en la raíz del USB.",
          "Conectar el USB al puerto derecho de la PS3.",
        ],
      },

      {
        title: "Instalar USERLIST mediante FTP",
        description: "Método alternativo usando red local.",
        items: [
          "Conectar PS3 y PC a la misma red.",
          "Abrir FileZilla u otro cliente FTP.",
          "Conectarse a la IP de la consola.",
          "Usar el puerto 21.",
          "Acceder a /dev_hdd0/game/ARTPS3001/USRDIR/.",
          "Copiar la carpeta USERLIST.",
        ],
      },

      {
        title: "Actualizar bases de datos",
        description: "Primer inicio de Artemis.",
        items: [
          "Abrir Artemis.",
          "Aceptar las actualizaciones disponibles.",
          "Esperar la sincronización.",
          "Reiniciar la aplicación si es necesario.",
        ],
      },

      {
        title: "Seleccionar un juego",
        description: "Buscar códigos para un juego compatible.",
        items: [
          "Entrar en Cheats.",
          "Buscar el ID del juego.",
          "Seleccionar el juego con ✕.",
          "Ver la lista de códigos disponibles.",
        ],
      },

      {
        title: "Activar trucos",
        description: "Marcar los códigos deseados.",
        items: [
          "Seleccionar cada código con ✕.",
          "Activar únicamente los trucos necesarios.",
          "Volver al menú principal.",
          "Guardar la selección.",
        ],
      },

      {
        title: "Iniciar el juego",
        description: "Ejecutar el juego con los códigos activos.",
        items: [
          "Seleccionar Start Game.",
          "Escuchar el pitido de confirmación.",
          "Iniciar el juego.",
          "Presionar PS + START.",
          "Esperar el mensaje Artemis Attached and Wrote.",
        ],
      },

      {
        title: "Controles básicos",
        description: "Navegación dentro de Artemis.",
        items: [
          "✕ Seleccionar.",
          "○ Volver.",
          "START Adjuntar códigos al juego.",
          "PS + START Activar hooks durante el juego.",
        ],
      },

      {
        title: "Solución de problemas",
        description: "Errores comunes.",
        items: [
          "Actualizar USERLIST.",
          "Verificar el ID correcto del juego.",
          "Desactivar códigos incompatibles.",
          "Probar los trucos uno por uno.",
          "Reiniciar Artemis si un código no carga.",
        ],
      },
    ],
  },
},

// BTGA Audio USB/Bluetooth
{
  console: "PS3",
  name: "BTGA Audio USB/Bluetooth",
  image: "img/PS3/audio-usb-bluetooth.jpg",

  description:
    "Permite utilizar audífonos USB o Bluetooth para escuchar el audio de los juegos en PlayStation 3.",

  website: "https://thewizwikii.github.io/BTGA-303-488/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/adhCQByL#eWHY58dLqyPLXL0itFjjEQ",
    },
  ],

  guide: {
    function:
      "Habilita la salida de audio mediante dispositivos USB y Bluetooth compatibles.",

    compatibility: {
      HEN: "✅ Requerido",
      USB: "✅ Compatible",
      Bluetooth: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN",
      "Audífonos USB o Bluetooth",
      "BTGA instalado",
    ],

    installation: [
      "Instalar BTGA mediante Web Host o PKG.",
      "Reiniciar la consola.",
      "Activar HEN.",
      "Emparejar el dispositivo de audio.",
    ],

    usage:
      "Permite enviar el audio de los juegos a auriculares USB o Bluetooth compatibles.",

    notes:
      "No todos los adaptadores o auriculares Bluetooth son compatibles con PS3.",

    version: "BTGA 303",
    author: "TheWizWiki / Comunidad PS3",

    details: [
      {
        title: "¿Qué es BTGA?",
        description:
          "Parche que añade soporte para dispositivos de audio USB y Bluetooth.",
        items: [
          "Permite usar auriculares compatibles.",
          "Funciona junto con HEN.",
          "Puede instalarse mediante host web.",
          "También existe versión PKG.",
        ],
      },

      {
        title: "Instalación mediante Host",
        description:
          "Método más rápido desde el navegador.",
        items: [
          "Abrir el navegador de Internet.",
          "Acceder al host compatible.",
          "La WEB de Nostros WEB es https://marchelobm.github.io/PS3/index.html.",
          "La WEB oficial es https://thewizwikii.github.io/BTGA-303-488/.",
          "Seleccionar BTGA Install.",
          "Esperar la descarga automática.",
          "La consola se reiniciará.",
        ],
      },

      {
        title: "Instalación mediante PKG",
        description:
          "Método alternativo usando un USB.",
        items: [
          "Copiar el PKG al USB.",
          "Instalar desde Administrador de archivos PKG.",
          "Reiniciar la consola.",
          "Activar HEN.",
        ],
      },

      {
        title: "Desinstalar BTGA",
        description:
          "Restaurar la configuración original.",
        items: [
          "Instalar el paquete Restore.",
          "Reiniciar la consola.",
          "Activar HEN nuevamente.",
          "La consola volverá al estado original.",
        ],
      },

      {
        title: "Emparejar dispositivo Bluetooth",
        description:
          "Agregar auriculares o adaptadores Bluetooth.",
        items: [
          "Ir a Ajustes.",
          "Abrir Ajustes de accesorios.",
          "Entrar en Administrar dispositivos Bluetooth.",
          "Seleccionar Registrar nuevo dispositivo.",
          "Realizar la búsqueda.",
          "Emparejar el dispositivo.",
        ],
      },

      {
        title: "Códigos de emparejamiento",
        description:
          "Claves habituales utilizadas por algunos dispositivos.",
        items: [
          "0000",
          "1234",
          "Consultar el manual del dispositivo.",
        ],
      },

      {
        title: "Configurar salida de audio",
        description:
          "Seleccionar el dispositivo conectado.",
        items: [
          "Ir a Ajustes de accesorios.",
          "Abrir Ajustes de dispositivo de audio.",
          "Seleccionar Dispositivo de salida.",
          "Elegir los auriculares USB o Bluetooth.",
        ],
      },

      {
        title: "Activar BTGA",
        description:
          "Paso necesario después de cada reinicio.",
        items: [
          "Iniciar la consola.",
          "Activar HEN.",
          "Esperar la carga completa.",
          "Disfrutar del audio en los auriculares.",
        ],
      },

      {
        title: "Problemas frecuentes",
        description:
          "Soluciones para errores comunes.",
        items: [
          "Verificar compatibilidad del dispositivo.",
          "Volver a emparejar el Bluetooth.",
          "Comprobar la salida de audio seleccionada.",
          "Reactivar HEN.",
          "Reinstalar BTGA si es necesario.",
        ],
      },
    ],
  },
},

// Comprobar Compatibilidad CFW
{
  console: "PS3",
  name: "Comprobar Compatibilidad CFW",
  image: "img/PS3/compatible-cfw.jpg",

  description:
    "Permite verificar si una PlayStation 3 es compatible con la instalación de Custom Firmware (CFW).",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/DAon2bbB#5Smd5RT1-sw_abEVTxaQOg",
    },
  ],

  guide: {
    function:
      "Muestra la versión mínima permitida por la consola para determinar si puede instalar CFW.",

    compatibility: {
      USB: "✅ FAT32",
      CFW: "✅ Comprobación",
    },

    requirements: [
      "Pendrive FAT32",
      "Archivo de comprobación",
      "Consola PS3",
    ],

    installation: [
      "Copiar el archivo al USB.",
      "Conectar el USB a la consola.",
      "Abrir Actualización del sistema.",
      "Comprobar la versión mínima compatible.",
    ],

    usage:
      "Permite saber si la consola puede instalar CFW o si debe utilizar otros métodos.",

    notes:
      "Esta comprobación no actualiza la consola ni modifica ningún archivo del sistema.",

    version: "Actual",
    author: "Comunidad PS3",

    details: [
      {
        title: "¿Para qué sirve?",
        description:
          "Identificar si una consola es candidata para instalar CFW.",
        items: [
          "Comprueba la versión mínima del sistema.",
          "No modifica la consola.",
          "No instala ningún firmware.",
          "Es completamente segura.",
        ],
      },

      {
        title: "Preparar el USB",
        description:
          "Copiar el archivo de comprobación.",
        items: [
          "Formatear en FAT32.",
          "Copiar los archivos necesarios.",
          "Expulsar correctamente el USB.",
          "Conectar a la consola.",
        ],
      },

      {
        title: "Iniciar la comprobación",
        description:
          "Acceder al menú de actualización.",
        items: [
          "Abrir Ajustes.",
          "Entrar en Actualización del sistema.",
          "Seleccionar Actualizar mediante soporte de almacenamiento.",
          "Esperar la lectura del USB.",
        ],
      },

      {
        title: "Interpretar el resultado",
        description:
          "Analizar la versión mostrada por la consola.",
        items: [
          "Anotar la versión indicada.",
          "Comprobar el valor mostrado.",
          "La consola mostrará la versión mínima permitida.",
          "No se realizará ninguna actualización.",
        ],
      },

      {
        title: "Compatible con CFW",
        description:
          "Resultado favorable para instalar CFW.",
        items: [
          "Versión mínima igual a 3.55.",
          "Versión mínima inferior a 3.55.",
          "Puede continuar investigando métodos CFW compatibles.",
        ],
      },

      {
        title: "No compatible con CFW",
        description:
          "Resultado no compatible con instalación CFW.",
        items: [
          "Versión mínima superior a 3.55.",
          "CFW no será una opción disponible.",
          "Puede utilizar métodos compatibles con HEN.",
        ],
      },

      {
        title: "Recomendaciones",
        description:
          "Antes de modificar una consola.",
        items: [
          "Realizar siempre esta comprobación.",
          "Anotar modelo y versión.",
          "Guardar capturas del resultado.",
          "No instalar archivos sin verificar compatibilidad.",
        ],
      },
    ],
  },
},

// File Manager
{
  console: "PS3",
  name: "File Manager",
  image: "img/PS3/file-manager.jpg",

  description:
    "Administrador de archivos para PlayStation 3 que permite copiar, mover, eliminar y gestionar contenido entre dispositivos USB y el disco duro interno.",

  website: "https://github.com/Zarh/ManaGunZ",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/qZBzmK5R#hiySMtMkzIyXOTRAxuKX8g",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/Zarh/ManaGunZ/releases",
    },
  ],

  guide: {
    function:
      "Explorar y administrar archivos del sistema, discos USB y almacenamiento interno.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32 / NTFS",
    },

    requirements: [
      "Consola con HEN",
      "File Manager instalado",
    ],

    details: [
      {
        title: "Instalación",
        description: "Instalar el gestor de archivos.",
        items: [
          "Copiar el PKG al USB.",
          "Abrir Administrar archivos PKG.",
          "Instalar desde Directorio estándar.",
          "Abrir desde el menú Juegos.",
        ],
      },

      {
        title: "Funciones principales",
        description: "Operaciones soportadas.",
        items: [
          "Copiar archivos.",
          "Mover archivos.",
          "Eliminar archivos.",
          "Renombrar archivos.",
          "Crear carpetas.",
          "Explorar dispositivos USB.",
        ],
      },

      {
        title: "Usos comunes",
        description: "Tareas habituales.",
        items: [
          "Copiar SaveData.",
          "Gestionar licencias.",
          "Transferir homebrew.",
          "Mover juegos entre discos.",
        ],
      },
    ],
  },
},

// ManaGunZ
{
  console: "PS3",
  name: "ManaGunZ",
  image: "img/PS3/managunz.jpg",

  description:
    "Launcher avanzado para PlayStation 3 con soporte para PS3ISO, PS2ISO, PSXISO, BDISO y juegos en formato carpeta.",

  website: "https://github.com/Zarh/ManaGunZ",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CdY01Z4Q#SPnzEe6nTwVOhP4YrlaNDg",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/Zarh/ManaGunZ/releases",
    },
  ],

  guide: {
    function:
      "Gestionar y ejecutar juegos en formato ISO o carpeta desde almacenamiento interno y externo.",

    compatibility: {
      HEN: "✅ Compatible",
      PS1: "✅ Compatible",
      PS2: "✅ Compatible",
      PS3: "✅ Compatible",
      ISO: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN activado",
      "ManaGunZ instalado",
    ],

    installation: [
      "Copiar PKG al USB.",
      "Instalar desde Administrador de archivos PKG.",
      "Abrir ManaGunZ.",
      "Activar HEN antes de utilizarlo.",
    ],

    details: [
      {
        title: "¿Qué puede cargar?",
        description: "Formatos soportados.",
        items: [
          "PS3ISO",
          "PS2ISO",
          "PSXISO",
          "BDISO",
          "Juegos en formato carpeta",
        ],
      },

      {
        title: "Configuración recomendada",
        description: "Primer inicio.",
        items: [
          "Abrir Configuración Global.",
          "Descargar carátulas.",
          "Cambiar la interfaz a Flow.",
          "Seleccionar tema Wallshow Grey.",
        ],
      },

      {
        title: "Carátulas",
        description: "Descargar imágenes automáticamente.",
        items: [
          "Abrir Configuración Global.",
          "Seleccionar Descargar carátulas.",
          "Esperar la descarga.",
        ],
      },

      {
        title: "Iniciar juegos",
        description: "Ejecución de títulos.",
        items: [
          "Seleccionar el juego.",
          "Presionar TRIÁNGULO.",
          "Montar el juego.",
          "Volver al XMB.",
          "Iniciar desde el icono del disco.",
        ],
      },

      {
        title: "Opciones PS2",
        description: "Funciones disponibles para PS2.",
        items: [
          "Ajustar resolución.",
          "Modificar configuraciones de compatibilidad.",
          "Cambiar opciones de visualización.",
        ],
      },

      {
        title: "Ventajas",
        description: "Características destacadas.",
        items: [
          "Interfaz moderna.",
          "Soporte para carátulas.",
          "Compatible con varios formatos.",
          "Gestión avanzada de ISOs.",
          "Ideal para bibliotecas grandes.",
        ],
      },
    ],
  },
},

// Hybrid Firmware Tools
{
  console: "PS3",
  name: "Hybrid Firmware Tools",
  image: "img/PS3/hybrid-firmware-tools.jpg",

  description:
    "Herramienta que agrega un menú avanzado en la categoría Red para acceder a funciones adicionales del sistema.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aUgAFS7D#Q-c4M9hbWr9BNH5g8imMZA",
    },
  ],

  guide: {
    function:
      "Permite acceder a opciones ocultas de mantenimiento y configuración relacionadas con Hybrid Firmware y HEN.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32",
    },

    requirements: [
      "Consola compatible con HEN",
      "Pendrive FAT32",
      "Hybrid Firmware Tools",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir Administrar archivos PKG.",
      "Instalar HFT PS3.pkg.",
      "Reiniciar la consola si es necesario.",
    ],

    usage:
      "Una vez instalado aparecerá una nueva entrada dentro de la categoría Red.",

    notes:
      "Las opciones disponibles pueden variar según la versión instalada.",

    version: "Actual",
    author: "Comunidad PS3",

    details: [
      {
        title: "¿Qué es Hybrid Firmware Tools?",
        description:
          "Menú adicional con herramientas de mantenimiento.",
        items: [
          "Se integra en la categoría Red.",
          "Añade accesos rápidos.",
          "Incluye opciones avanzadas.",
          "Facilita la administración de HEN.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Proceso básico de instalación.",
        items: [
          "Copiar el PKG al USB.",
          "Abrir Instalar archivos PKG.",
          "Seleccionar Directorio estándar.",
          "Instalar Hybrid Firmware Tools.",
        ],
      },

      {
        title: "Acceso al menú",
        description:
          "Ubicación de la herramienta.",
        items: [
          "Abrir la categoría Red.",
          "Buscar Hybrid Firmware Tools.",
          "Entrar en el menú principal.",
        ],
      },

      {
        title: "Mantenimiento",
        description:
          "Opciones disponibles dentro del menú.",
        items: [
          "Acceder a Maintenance.",
          "Ver herramientas adicionales.",
          "Administrar configuraciones compatibles.",
        ],
      },

      {
        title: "Actualizaciones automáticas",
        description:
          "Activar o desactivar comprobaciones automáticas.",
        items: [
          "Entrar en Maintenance.",
          "Seleccionar Toggle Automatic Update.",
          "Activar o desactivar la función.",
        ],
      },

      {
        title: "Recomendaciones",
        description:
          "Buenas prácticas de uso.",
        items: [
          "Mantener una copia de seguridad.",
          "Leer cada opción antes de aplicarla.",
          "Usar únicamente funciones conocidas.",
          "Mantener la consola actualizada.",
        ],
      },
    ],
  },
},

// IRISMAN
{
  console: "PS3",
  name: "IRISMAN",
  image: "img/PS3/irisman.jpg",

  description:
    "Gestor de juegos, administrador de archivos y herramienta multifunción para PlayStation 3.",

  website: "https://github.com/aldostools/IRISMAN/releases",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/PBgAUaAA#4nrzqLYGp1kT6P2rgrYTTA",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/aldostools/IRISMAN/releases",
    },
  ],

  guide: {
    function:
      "Permite cargar juegos, gestionar archivos, instalar PKG y transferir archivos grandes desde unidades FAT32 y NTFS.",

    compatibility: {
      HEN: "✅ Compatible",
      FAT32: "✅ Compatible",
      NTFS: "✅ Compatible",
      PS3ISO: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN",
      "IRISMAN instalado",
      "USB FAT32 o NTFS",
    ],

    installation: [
      "Copiar el archivo PKG al USB.",
      "Abrir Administrar archivos PKG.",
      "Seleccionar Directorio estándar.",
      "Instalar IRISMAN.",
      "Ejecutar la aplicación desde Juegos.",
    ],

    usage:
      "IRISMAN puede utilizarse para gestionar juegos, copiar archivos, instalar PKG y acceder al administrador de archivos integrado.",

    notes:
      "Una de sus funciones más útiles es copiar archivos PKG de más de 4 GB desde dispositivos NTFS al disco duro interno de la consola.",

    version: "Actual",
    author: "aldostools",

    details: [
      {
        title: "Configuración inicial",
        description: "Primer inicio de la aplicación.",
        items: [
          "Ajustar el tamaño de pantalla.",
          "Configurar idioma.",
          "Personalizar opciones básicas.",
        ],
      },

      {
        title: "Menú SELECT",
        description: "Herramientas disponibles.",
        items: [
          "Manejador de archivos.",
          "Instalar PKG.",
          "Borrar caché.",
          "Opciones Cobra.",
          "Spoof Console ID.",
          "Configuración general.",
        ],
      },

      {
        title: "Menú TRIÁNGULO",
        description: "Opciones disponibles para juegos.",
        items: [
          "Configurar juego.",
          "Copiar juego.",
          "Eliminar juego.",
          "Corregir permisos.",
          "Crear ISO.",
          "Buscar actualizaciones.",
        ],
      },

      {
        title: "Copiar PKG mayores de 4GB",
        description: "Transferencia desde dispositivos NTFS.",
        items: [
          "Conectar USB NTFS.",
          "Abrir Manejador de archivos.",
          "Ir a /ntfs0:.",
          "Seleccionar el PKG.",
          "Copiar a /dev_hdd0/packages.",
          "Instalar desde almacenamiento interno.",
        ],
      },

      {
        title: "Administrador de archivos",
        description: "Gestión de contenidos.",
        items: [
          "Copiar archivos.",
          "Mover archivos.",
          "Eliminar archivos.",
          "Crear carpetas.",
          "Gestionar almacenamiento interno.",
        ],
      },
    ],
  },
},

// Licencias RAP
{
  console: "PS3",
  name: "Licencias RAP",
  image: "img/PS3/licencias.jpg",

  description:
    "Guía para gestionar archivos RAP y licencias necesarias para determinados contenidos digitales de PlayStation 3.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/2EQ22S4K#yhgCX1VkhHwZVzBf4mNDqA",
    },
  ],

  guide: {
    function:
      "Permite instalar y gestionar licencias RAP asociadas a juegos, DLC y contenido digital.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32",
    },

    requirements: [
      "Consola con HEN",
      "USB FAT32",
      "Archivos RAP",
    ],

    installation: [
      "Copiar el paquete o los archivos RAP al USB.",
      "Conectar el USB a la consola.",
      "Instalar el PKG o copiar manualmente los RAP.",
      "Verificar que las licencias estén en la carpeta correcta.",
    ],

    usage:
      "Permite habilitar contenido digital utilizando archivos RAP compatibles con el Title ID correspondiente.",

    notes:
      "El Title ID de la licencia debe coincidir exactamente con el Title ID del juego o DLC que se desea utilizar.",

    version: "Actual",
    author: "Comunidad PS3",

    details: [
      {
        title: "¿Qué son las licencias RAP?",
        description: "Archivos utilizados por contenido digital.",
        items: [
          "Están asociadas a juegos digitales.",
          "También se utilizan en algunos DLC.",
          "Cada licencia corresponde a un Title ID.",
        ],
      },

      {
        title: "Instalación automática",
        description: "Método mediante PKG.",
        items: [
          "Copiar el PKG al USB.",
          "Abrir Administrar archivos PKG.",
          "Instalar desde Directorio estándar.",
          "Esperar a que finalice el proceso.",
        ],
      },

      {
        title: "Instalación manual",
        description: "Método usando archivos RAP.",
        items: [
          "Buscar el RAP correspondiente.",
          "Comprobar el Title ID.",
          "Copiar los archivos a exdata.",
          "Reiniciar si es necesario.",
        ],
      },

      {
        title: "Carpeta EXDATA",
        description: "Ubicaciones habituales.",
        items: [
          "USB:/exdata/",
          "dev_hdd0/exdata/",
          "Compatible mediante FTP.",
        ],
      },

      {
        title: "Verificación de Title ID",
        description: "Paso fundamental.",
        items: [
          "Comprobar el ID del juego.",
          "Comprobar el ID de la licencia.",
          "Deben coincidir exactamente.",
        ],
      },

      {
        title: "Errores comunes",
        description: "Problemas más habituales.",
        items: [
          "Title ID incorrecto.",
          "Licencia equivocada.",
          "Archivo RAP dañado.",
          "Carpeta exdata incorrecta.",
        ],
      },

      {
        title: "Recomendaciones",
        description: "Buenas prácticas.",
        items: [
          "Guardar copia de seguridad.",
          "Mantener organizadas las licencias.",
          "Verificar Title ID antes de copiar.",
          "No eliminar archivos originales.",
        ],
      },
    ],
  },
},

// MarcheBMPC WEB
{
  console: "PS3",
  name: "MarcheBMPC WEB",
  image: "img/PS3/link-web-red.jpg",

  description:
    "Añade un acceso directo en la categoría Red de la PS3 para abrir páginas web personalizadas sin necesidad de usar el navegador manualmente.",

  website: "https://marchelobm.github.io/PS3/PS3.html",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/PQxEDAQR#9l273gbEfXIQDR7oXKOmQQ",
    },
  ],

  guide: {
    function:
      "Permite agregar accesos rápidos a páginas web directamente desde el menú Red de la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32",
    },

    requirements: [
      "Consola con HEN",
      "Pendrive FAT32",
      "Paquete WEB para PS3",
    ],

    installation: [
      "Copiar los archivos PKG al USB.",
      "Abrir Administrar archivos PKG.",
      "Seleccionar Directorio estándar.",
      "Instalar MarcheBMPC WEB.pkg.",
      "Reiniciar la consola si es necesario.",
    ],

    usage:
      "Una vez instalado aparecerá un nuevo acceso dentro de la categoría Red que abrirá la página web configurada.",

    notes:
      "Si desea eliminar el acceso personalizado puede restaurar la categoría original instalando el paquete de restauración.",

    version: "Actual",
    author: "MarcheBMPC",

    details: [
      {
        title: "Instalación",
        description:
          "Agregar el acceso web al menú Red.",
        items: [
          "Copiar los PKG al USB.",
          "Instalar MarcheBMPC WEB.pkg.",
          "Esperar a que finalice la instalación.",
          "Comprobar que aparece en Red.",
        ],
      },

      {
        title: "Acceso desde Red",
        description:
          "Ubicación del nuevo acceso.",
        items: [
          "Abrir la categoría Red.",
          "Seleccionar el acceso instalado.",
          "Esperar la carga de la página.",
          "Navegar normalmente.",
        ],
      },

      {
        title: "Restaurar categoría original",
        description:
          "Eliminar el acceso personalizado.",
        items: [
          "Copiar RESTAURAR CATEGORY.pkg al USB.",
          "Instalar el paquete.",
          "Reiniciar la consola.",
          "Verificar la restauración.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios del acceso directo.",
        items: [
          "Acceso rápido a herramientas online.",
          "Menos pasos que usar el navegador.",
          "Integración directa en el XMB.",
          "Fácil instalación y eliminación.",
        ],
      },

      {
        title: "Usos recomendados",
        description:
          "Ejemplos de utilización.",
        items: [
          "Hosts para HEN.",
          "Herramientas PS3 online.",
          "Páginas de soporte.",
          "Accesos personalizados.",
        ],
      },
    ],
  },
},
// Movian
{
  console: "PS3",
  name: "Movian",
  image: "img/PS3/movian.jpg",

  description:
    "Centro multimedia para PlayStation 3 que permite reproducir vídeos, música, IPTV, listas M3U y contenido mediante plugins.",

  website: "https://apps.movian.eu/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/rUxDwSoR#uPlx-3EmAOrpJPt3y4bXuA",
    },
    {
      name: "WEB Descargar",
      url: "https://store.brewology.com/ahomebrew.php?brewid=196",
    },
  ],

  guide: {
    function:
      "Permite convertir la PS3 en un centro multimedia para reproducir películas, series, música, IPTV y contenido online.",

    compatibility: {
      HEN: "✅ Compatible",
      USB: "✅ FAT32",
      IPTV: "✅ Compatible",
      M3U: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN",
      "Pendrive FAT32",
      "Movian instalado",
    ],

    installation: [
      "Copiar los archivos PKG al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar Movian.",
      "Instalar los plugins adicionales incluidos.",
      "Abrir la aplicación desde TV/Video.",
    ],

    usage:
      "Movian permite reproducir contenido local, listas IPTV M3U, servidores multimedia y plugins compatibles desde una única interfaz.",

    notes:
      "Muchos complementos requieren conexión a Internet y pueden dejar de funcionar si el desarrollador deja de mantenerlos.",

    version: "Actual",
    author: "Movian Team",

    details: [
      {
        title: "Instalación",
        description: "Primeros pasos.",
        items: [
          "Copiar los PKG al USB.",
          "Instalar desde Directorio estándar.",
          "Instalar todos los paquetes incluidos.",
          "Abrir Movian.",
        ],
      },

      {
        title: "Plugins",
        description: "Complementos disponibles.",
        items: [
          "Instalar plugins compatibles.",
          "Ampliar funciones multimedia.",
          "Agregar nuevos servicios.",
          "Actualizar cuando sea necesario.",
        ],
      },

      {
        title: "PS3Ultimate",
        description: "Plugin incluido en el tutorial.",
        items: [
          "Abrir PS3 HDD.",
          "Entrar en la carpeta Ps3Flix.",
          "Seleccionar PS3Ultimate.com.",
          "Instalar el plugin.",
        ],
      },

      {
        title: "IPTV y listas M3U",
        description: "Reproducción de televisión online.",
        items: [
          "Abrir una lista M3U.",
          "Importar listas personalizadas.",
          "Actualizar listas cuando sea necesario.",
          "Probar distintos servidores IPTV.",
        ],
      },

      {
        title: "Contenido multimedia",
        description: "Tipos de archivos soportados.",
        items: [
          "Películas.",
          "Series.",
          "Música.",
          "Canales IPTV.",
          "Contenido en red local.",
        ],
      },

      {
        title: "Fuentes de contenido",
        description: "Ubicaciones compatibles.",
        items: [
          "Disco duro interno.",
          "Memorias USB.",
          "Recursos de red.",
          "Listas M3U.",
          "Plugins instalados.",
        ],
      },

      {
        title: "Ventajas",
        description: "Características destacadas.",
        items: [
          "Interfaz sencilla.",
          "Soporte IPTV.",
          "Plugins instalables.",
          "Reproducción multimedia.",
          "Compatible con HEN.",
        ],
      },

      {
        title: "Problemas comunes",
        description: "Errores habituales.",
        items: [
          "Plugin desactualizado.",
          "Lista M3U caída.",
          "Problemas de conexión.",
          "Contenido eliminado por el proveedor.",
        ],
      },
    ],
  },
},
// multiMAN
{
  console: "PS3",
  name: "MultiMAN",
  image: "img/PS3/multiman.png",

  description:
    "Administrador de juegos, explorador de archivos y cliente FTP para PlayStation 3.",

  website: "https://github.com/aldostools/Resources",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CI5WHQiJ#G3mMs8kYJhdR3oO7HON6Nw",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/aldostools/Resources/releases/Launchers",
    },
  ],

  guide: {
    function:
      "Permite gestionar juegos, archivos, contenido multimedia y transferencias FTP desde una sola aplicación.",

    compatibility: {
      HEN: "✅ Compatible",
      FAT32: "✅ Compatible",
      FTP: "✅ Compatible",
      PS1: "✅ Compatible",
      PS3: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN",
      "Pendrive FAT32",
      "multiMAN instalado",
      "PC para FTP (opcional)",
    ],

    installation: [
      "Copiar el PKG a un USB FAT32.",
      "Abrir Administrador de archivos PKG.",
      "Seleccionar Directorio estándar.",
      "Instalar multiMAN.",
      "Ejecutar la aplicación desde Juegos.",
    ],

    usage:
      "Permite cargar juegos, copiar archivos, gestionar contenido multimedia y transferir archivos mediante FTP.",

    notes:
      "multiMAN incluye su propio administrador de archivos (mmOS) y servidor FTP integrado.",

    version: "04.xx",
    author: "deank",

    details: [
      {
        title: "Juegos PS3",
        description:
          "Administración de juegos instalados.",
        items: [
          "Cargar juegos.",
          "Copiar juegos.",
          "Eliminar juegos.",
          "Renombrar juegos.",
          "Buscar actualizaciones.",
          "Verificar archivos.",
        ],
      },

      {
        title: "Menú de juego",
        description:
          "Opciones disponibles con CUADRADO.",
        items: [
          "Copy.",
          "Delete.",
          "Rename.",
          "Update.",
          "Test.",
          "Permissions.",
        ],
      },

      {
        title: "Juegos Retro",
        description:
          "Compatibilidad con sistemas clásicos.",
        items: [
          "Carga de juegos PS1.",
          "Acceso desde la sección Retro.",
          "Organización independiente del catálogo PS3.",
        ],
      },

      {
        title: "Favoritos",
        description:
          "Acceso rápido a los juegos más utilizados.",
        items: [
          "Seleccionar un juego.",
          "Presionar CUADRADO.",
          "Elegir Favorite.",
          "Acceder desde la pestaña Favoritos.",
        ],
      },

      {
        title: "Vídeos",
        description:
          "Reproducción multimedia.",
        items: [
          "Vídeos desde USB.",
          "Vídeos desde HDD.",
          "Distintos formatos compatibles.",
        ],
      },

      {
        title: "Música",
        description:
          "Reproducción de audio.",
        items: [
          "Bibliotecas musicales.",
          "Música desde USB.",
          "Música desde HDD.",
        ],
      },

      {
        title: "Fotos",
        description:
          "Visualización de imágenes.",
        items: [
          "Imágenes desde USB.",
          "Imágenes desde HDD.",
          "Galerías fotográficas.",
        ],
      },

      {
        title: "Configuración",
        description:
          "Opciones generales.",
        items: [
          "Cambiar idioma.",
          "Configurar interfaz.",
          "Actualizar la aplicación.",
          "Personalizar ajustes.",
        ],
      },

      {
        title: "Administrador de archivos",
        description:
          "Explorador integrado mmOS.",
        items: [
          "Acceder a PS3 Root.",
          "Gestionar DEV_HDD0.",
          "Gestionar DEV_USB000.",
          "Copiar y mover archivos.",
          "Eliminar archivos.",
        ],
      },

      {
        title: "FTP",
        description:
          "Transferencias desde el ordenador.",
        items: [
          "Obtener la IP de la consola.",
          "Conectar PS3 y PC a la misma red.",
          "Usar FileZilla.",
          "Puerto 21.",
          "Transferir juegos y aplicaciones.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Funciones destacadas.",
        items: [
          "Gestión de juegos.",
          "Administrador de archivos.",
          "Cliente FTP integrado.",
          "Soporte multimedia.",
          "Organización por favoritos.",
        ],
      },
    ],
  },
},
// Plex
{
  console: "PS3",
  name: "Plex",
  image: "img/PS3/plex.jpg",

  description:
    "Cliente multimedia para PlayStation 3 que permite reproducir películas, series, música y fotografías almacenadas en un servidor Plex.",

  website: "https://www.plex.tv/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/DM5GEapI#RqajEOfAixJeBjsXliis1w",
    },
  ],

  guide: {
    function:
      "Permite acceder desde la PS3 al contenido multimedia almacenado en un servidor Plex dentro de la misma red.",

    compatibility: {
      HEN: "✅ Compatible",
      RedLocal: "✅ Compatible",
      Video: "✅ Compatible",
      Música: "✅ Compatible",
      Fotos: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "Conexión de red",
      "Servidor Plex instalado en PC o NAS",
      "Cuenta Plex",
    ],

    installation: [
      "Descargar Plex desde PlayStation Store o instalar el PKG.",
      "Abrir Administrar archivos PKG si utilizas la versión PKG.",
      "Instalar la aplicación.",
      "Ejecutar Plex desde TV/Video.",
      "Vincular la consola con tu cuenta Plex.",
    ],

    usage:
      "Accede desde la PS3 a películas, series, música y fotografías almacenadas en tu servidor Plex sin necesidad de copiar archivos a la consola.",

    notes:
      "Para obtener el mejor rendimiento, la PS3 y el servidor Plex deben estar conectados a la misma red local.",

    version: "Actual",
    author: "Plex Inc.",

    details: [
      {
        title: "¿Qué es Plex?",
        description:
          "Sistema multimedia cliente-servidor.",
        items: [
          "Organiza bibliotecas multimedia.",
          "Transmite contenido por red.",
          "Compatible con múltiples dispositivos.",
          "Acceso centralizado al contenido.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Configurar Plex en la consola.",
        items: [
          "Instalar Plex.",
          "Abrir la aplicación.",
          "Iniciar sesión.",
          "Vincular el dispositivo.",
        ],
      },

      {
        title: "Servidor Plex",
        description:
          "Preparación del equipo principal.",
        items: [
          "Instalar Plex Media Server.",
          "Crear bibliotecas.",
          "Agregar películas.",
          "Agregar series.",
          "Agregar música.",
        ],
      },

      {
        title: "Activación",
        description:
          "Conectar la consola con la cuenta.",
        items: [
          "Abrir Plex en PS3.",
          "Obtener código de vinculación.",
          "Iniciar sesión en Plex.",
          "Registrar el dispositivo.",
        ],
      },

      {
        title: "Bibliotecas",
        description:
          "Contenido accesible desde la PS3.",
        items: [
          "Películas.",
          "Series.",
          "Música.",
          "Fotografías.",
        ],
      },

      {
        title: "Reproducción",
        description:
          "Visualización multimedia.",
        items: [
          "Streaming por red local.",
          "Acceso a bibliotecas Plex.",
          "Navegación por categorías.",
          "Reproducción de contenido multimedia.",
        ],
      },

      {
        title: "Red local",
        description:
          "Configuración recomendada.",
        items: [
          "Servidor y PS3 en la misma red.",
          "Preferir conexión por cable.",
          "Verificar acceso al servidor.",
          "Mantener Plex actualizado.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Funciones principales.",
        items: [
          "No requiere copiar archivos.",
          "Bibliotecas organizadas.",
          "Streaming multimedia.",
          "Acceso desde varios dispositivos.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Problemas comunes",
        description:
          "Errores habituales.",
        items: [
          "Servidor no detectado.",
          "Problemas de red.",
          "Bibliotecas sin actualizar.",
          "Problemas de autenticación.",
        ],
      },
    ],
  },
},
// prepISO
{
  console: "PS3",
  name: "prepISO",
  image: "img/PS3/prepiso.jpg",

  description:
    "Herramienta complementaria para webMAN MOD que permite detectar e instalar contenidos desde dispositivos NTFS y exFAT.",

  website: "https://github.com/aldostools/webMAN-MOD/releases",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/WNAlAIYI#cSluP4ASu3GATjLmdTG4QQ",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/aldostools/webMAN-MOD/releases",
    },
  ],

  guide: {
    function:
      "Escanea unidades NTFS y exFAT para que webMAN MOD pueda detectar juegos e instaladores PKG.",

    compatibility: {
      HEN: "✅ Compatible",
      NTFS: "✅ Compatible",
      exFAT: "✅ Compatible",
      webMAN: "✅ Requerido",
    },

    requirements: [
      "Consola con HEN",
      "webMAN MOD instalado",
      "prepISO instalado",
      "USB NTFS o exFAT",
    ],

    installation: [
      "Copiar prepISO.pkg al USB.",
      "Instalar desde Administrador de archivos PKG.",
      "Verificar que aparezca en el menú Juegos.",
      "Mantener webMAN MOD actualizado.",
    ],

    usage:
      "Ejecutar prepISO para escanear dispositivos NTFS o exFAT conectados a la consola y actualizar la base de datos de webMAN.",

    notes:
      "La aplicación no posee interfaz gráfica. Tras ejecutarla volverá automáticamente al XMB.",

    version: "Actual",
    author: "aldostools",

    details: [
      {
        title: "Preparar el USB",
        description: "Configurar la unidad.",
        items: [
          "Formatear en NTFS o exFAT.",
          "Crear la carpeta PKG.",
          "Copiar archivos PKG grandes.",
        ],
      },

      {
        title: "Escaneo de contenido",
        description: "Actualizar webMAN.",
        items: [
          "Abrir prepISO.",
          "Esperar el escaneo.",
          "Volver al XMB.",
          "Abrir menú webMAN.",
        ],
      },

      {
        title: "Instalar PKG grandes",
        description: "Archivos superiores a 4 GB.",
        items: [
          "Copiar PKG en carpeta PKG.",
          "Ejecutar prepISO.",
          "Abrir webMAN.",
          "Instalar desde Blu-ray y DVD.",
        ],
      },

      {
        title: "Requisitos",
        description: "Dependencias necesarias.",
        items: [
          "webMAN MOD.",
          "HEN activo.",
          "USB NTFS o exFAT.",
        ],
      },

      {
        title: "Ventajas",
        description: "Beneficios principales.",
        items: [
          "Compatible con NTFS.",
          "Compatible con exFAT.",
          "Instalación de PKG grandes.",
          "Integración con webMAN.",
        ],
      },
    ],
  },
},
// USB exFAT y NTFS
{
  console: "PS3",
  name: "USB exFAT y NTFS",
  image: "img/PS3/usb-exfat-ntfs.jpg",

  description:
    "Guía para utilizar discos duros y memorias USB en formato exFAT o NTFS junto con webMAN MOD y prepISO.",

  website: "https://github.com/aldostools/webMAN-MOD/releases",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "TU_LINK_MEGA",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/aldostools/webMAN-MOD/releases",
    },
  ],

  guide: {
    function:
      "Permite utilizar dispositivos NTFS y exFAT para almacenar juegos ISO sin las limitaciones de FAT32.",

    compatibility: {
      HEN: "✅ Compatible",
      NTFS: "✅ Compatible",
      exFAT: "✅ Compatible",
      ISO: "✅ Compatible",
      webMAN: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN",
      "webMAN MOD",
      "prepISO",
      "USB o HDD NTFS/exFAT",
    ],

    installation: [
      "Instalar prepISO.",
      "Instalar webMAN MOD.",
      "Conectar el disco USB.",
      "Ejecutar prepISO.",
    ],

    usage:
      "Permite detectar juegos almacenados en discos NTFS o exFAT y ejecutarlos desde webMAN MOD.",

    notes:
      "Los juegos deben almacenarse en las carpetas correctas para que webMAN pueda encontrarlos.",

    version: "Actual",
    author: "aldostools",

    details: [
      {
        title: "Preparar el disco",
        description: "Configurar el almacenamiento.",
        items: [
          "Formatear en NTFS o exFAT.",
          "Asignar etiqueta si se desea.",
          "Copiar los juegos.",
        ],
      },

      {
        title: "Carpetas recomendadas",
        description: "Organización básica.",
        items: [
          "PS3ISO",
          "PS2ISO",
          "PSXISO",
          "BDISO",
          "DVDISO",
        ],
      },

      {
        title: "Detección de juegos",
        description: "Actualizar biblioteca.",
        items: [
          "Ejecutar prepISO.",
          "Refrescar webMAN.",
          "Esperar el escaneo.",
          "Verificar los juegos detectados.",
        ],
      },

      {
        title: "Ubicaciones NTFS",
        description: "Cómo aparecen las unidades.",
        items: [
          "ntfs0:",
          "ntfs1:",
          "ntfs2:",
          "Dependiendo de las unidades conectadas.",
        ],
      },

      {
        title: "Ventajas frente a FAT32",
        description: "Beneficios principales.",
        items: [
          "Sin límite de 4 GB.",
          "Ideal para ISOs grandes.",
          "Menos divisiones de archivos.",
          "Mayor comodidad de uso.",
        ],
      },

      {
        title: "Problemas comunes",
        description: "Errores habituales.",
        items: [
          "No aparece el juego.",
          "Falta ejecutar prepISO.",
          "Carpetas incorrectas.",
          "Falta refrescar webMAN.",
        ],
      },
    ],
  },
},
// PS3 ezRemote Client
{
  console: "PS3",
  name: "PS3 ezRemote Client",
  image: "img/PS3/ps3-ezremote-client.jpg",

  description:
    "Administrador de archivos avanzado para PlayStation 3 con soporte para almacenamiento local y servicios remotos.",

  website: "https://github.com/cy33hc/ps3-ezremote-client",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aAgWkaQI#E_GcAB3KrblRf_wiqmr9LQ",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/cy33hc/ps3-ezremote-client/releases",
    },
  ],

  guide: {
    function:
      "Permite administrar archivos del sistema, dispositivos USB y ubicaciones remotas desde una única interfaz.",

    compatibility: {
      HEN: "✅ Compatible",
      FAT32: "✅ Compatible",
      Red: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN",
      "USB FAT32",
      "PS3 ezRemote Client",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir Administrar archivos PKG.",
      "Instalar ps3-ezremote-client.pkg.",
      "Ejecutar desde el menú Red.",
    ],

    usage:
      "Permite explorar, copiar, mover y administrar archivos directamente desde la consola.",

    notes:
      "Es una alternativa moderna a otros gestores de archivos clásicos de PS3.",

    version: "Actual",
    author: "cy33hc",

    details: [
      {
        title: "Gestor de archivos",
        description: "Administración avanzada.",
        items: [
          "Explorar disco interno.",
          "Explorar dispositivos USB.",
          "Copiar archivos.",
          "Mover archivos.",
          "Eliminar archivos.",
        ],
      },

      {
        title: "Almacenamiento",
        description: "Dispositivos compatibles.",
        items: [
          "Disco interno.",
          "Pendrive USB.",
          "Discos externos.",
          "Recursos de red compatibles.",
        ],
      },

      {
        title: "Uso básico",
        description: "Primeros pasos.",
        items: [
          "Abrir la aplicación.",
          "Seleccionar ubicación.",
          "Elegir archivo.",
          "Realizar operaciones.",
        ],
      },

      {
        title: "Ventajas",
        description: "Características destacadas.",
        items: [
          "Interfaz moderna.",
          "Gestión rápida.",
          "Compatible con HEN.",
          "Acceso a múltiples ubicaciones.",
        ],
      },
    ],
  },
},
// PSNPatch (Obsoleto)
{
  console: "PS3",
  name: "⚠️ PSNPatch (Obsoleto)",
  image: "img/PS3/psnpatch.jpg",

  description:
    "Herramienta clásica para PlayStation 3 utilizada en sistemas CFW para aplicar funciones relacionadas con PSN. Actualmente está obsoleta y ha sido reemplazada por métodos más modernos.",

  website: "https://store.brewology.com/ahomebrew.php?brewid=244",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/TFIBkL4C#cVaaQAxGWVWTgBlWSfWM5A",
    },
    {
      name: "WEB Descargar",
      url: "https://store.brewology.com/ahomebrew.php?brewid=244",
    },
  ],

  guide: {
    function:
      "Aplicación histórica utilizada principalmente en sistemas CFW para tareas relacionadas con PSN.",

    compatibility: {
      CFW: "✅ Compatible",
      HEN: "⚠️ No recomendado",
      PSN: "⚠️ Obsoleto",
    },

    requirements: [
      "PlayStation 3 con CFW",
      "PSNPatch instalado",
    ],

    installation: [
      "Copiar el archivo PKG al USB.",
      "Abrir Administrar archivos PKG.",
      "Instalar PSNPatch.",
      "Ejecutar la aplicación desde Juegos.",
    ],

    usage:
      "Actualmente se recomienda únicamente para fines históricos o de compatibilidad con configuraciones antiguas.",

    notes:
      "La aplicación se considera obsoleta. En la mayoría de configuraciones modernas ya no es necesaria y existen alternativas más actuales.",

    version: "Legacy",
    author: "KW",

    details: [
      {
        title: "Estado actual",
        description: "Situación de la aplicación.",
        items: [
          "Proyecto antiguo.",
          "Uso cada vez menos frecuente.",
          "Compatibilidad limitada con configuraciones modernas.",
          "Recomendada solo para usuarios avanzados.",
        ],
      },

      {
        title: "¿Para qué se utilizaba?",
        description: "Funciones históricas.",
        items: [
          "Herramienta orientada a CFW.",
          "Opciones relacionadas con PSN.",
          "Gestión de determinadas configuraciones del sistema.",
        ],
      },

      {
        title: "Compatibilidad",
        description: "Sistemas recomendados.",
        items: [
          "Principalmente CFW.",
          "No necesaria en la mayoría de instalaciones HEN.",
          "Puede presentar limitaciones en firmware recientes.",
        ],
      },

      {
        title: "Alternativas actuales",
        description: "Opciones recomendadas actualmente.",
        items: [
          "webMAN MOD.",
          "Herramientas integradas en CFW modernos.",
          "Ajustes nativos del sistema.",
          "Homebrew actualizado.",
        ],
      },

      {
        title: "Advertencia",
        description: "Antes de utilizarla.",
        items: [
          "No es imprescindible hoy en día.",
          "Verificar compatibilidad antes de instalar.",
          "Usar bajo responsabilidad del usuario.",
          "Mantener copias de seguridad importantes.",
        ],
      },

      {
        title: "Información histórica",
        description: "Importancia dentro de la escena PS3.",
        items: [
          "Fue una de las herramientas más populares de su época.",
          "Ampliamente utilizada en sistemas CFW.",
          "Todavía puede encontrarse en tutoriales antiguos.",
        ],
      },
    ],
  },
},
// Simple File Manager
{
  console: "PS3",
  name: "Simple File Manager",
  image: "img/PS3/simple-file-manager.png",

  description:
    "Administrador de archivos ligero para PlayStation 3 compatible con dispositivos FAT32 y exFAT.",

  website: "https://github.com/lmirel/fm_psx",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/jA4jSBgD#E44xoZ9RRxEehyt4WCkhEw",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/lmirel/fm_psx/releases",
    },
  ],

  guide: {
    function:
      "Permite copiar archivos entre dispositivos USB, discos externos y el almacenamiento interno de la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      FAT32: "✅ Compatible",
      exFAT: "✅ Compatible",
    },

    requirements: [
      "Consola con HEN",
      "USB FAT32 o exFAT",
      "Simple File Manager instalado",
    ],

    installation: [
      "Copiar sfm_ps3.pkg al USB.",
      "Instalar desde Administrador de archivos PKG.",
      "Abrir la aplicación desde Juegos.",
    ],

    usage:
      "Permite transferir archivos desde dispositivos externos al almacenamiento interno de la PS3.",

    notes:
      "Es especialmente útil para copiar archivos PKG grandes antes de instalarlos desde el almacenamiento interno.",

    version: "Actual",
    author: "lmirel",

    details: [
      {
        title: "Navegación",
        description: "Explorar dispositivos.",
        items: [
          "R1 para avanzar.",
          "L1 para retroceder.",
          "Cambiar paneles.",
          "Seleccionar ubicaciones.",
        ],
      },

      {
        title: "Origen y destino",
        description: "Transferencia de archivos.",
        items: [
          "fat0:/ para USB.",
          "sys://dev_hdd0/ para PS3.",
          "Carpeta packages.",
          "Transferencia directa.",
        ],
      },

      {
        title: "Copiar PKG",
        description: "Instalación desde HDD.",
        items: [
          "Seleccionar archivo PKG.",
          "Copiar con CUADRADO.",
          "Esperar la transferencia.",
          "Salir de la aplicación.",
        ],
      },

      {
        title: "Instalar PKG copiado",
        description: "Instalación final.",
        items: [
          "Abrir Administrar archivos PKG.",
          "Entrar en Almacenamiento del sistema.",
          "Seleccionar el PKG.",
          "Instalar normalmente.",
        ],
      },

      {
        title: "Ventajas",
        description: "Puntos fuertes.",
        items: [
          "Muy ligero.",
          "Interfaz sencilla.",
          "Compatible con exFAT.",
          "Ideal para transferencias rápidas.",
        ],
      },
    ],
  },
},
// PS3 Unlock HDD Space
{
  console: "PS3",
  name: "PS3 Unlock HDD Space",
  image: "img/PS3/unlock-hdd-space.jpg",

  description:
    "Herramienta que permite desbloquear espacio reservado del disco duro interno de la PlayStation 3 y recuperar hasta un 8% de almacenamiento adicional.",

  website:
    "https://www.psx-place.com/threads/tutorial-unlock-up-to-8-extra-total-space-on-the-ps3-internal-hard-drive.20773/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aM4VUaRL#Nbosp7B622Is2WaB53koAg",
    },
    {
      name: "GitHub",
      url: "https://github.com/einsteinx2/PS3-Reclaim-HDD-Space",
    },
  ],

  guide: {
    function:
      "Permite liberar espacio oculto reservado en el disco duro interno de la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      HDD: "✅ Compatible",
      SSD: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "Pendrive FAT32",
      "PS3 Unlock HDD Space",
    ],

    installation: [
      "Copiar el archivo PKG al USB.",
      "Abrir Administrar archivos PKG.",
      "Instalar el paquete.",
      "Ejecutar la aplicación desde el menú Juegos.",
    ],

    usage:
      "Una vez ejecutada la aplicación, la consola aplicará automáticamente la modificación y regresará al XMB.",

    notes:
      "La primera ejecución activa la liberación de espacio. La segunda ejecución revierte los cambios y restaura la configuración anterior.",

    version: "Actual",
    author: "3141card",

    details: [
      {
        title: "Comprobar espacio disponible",
        description: "Verificar capacidad antes de modificar.",
        items: [
          "Abrir Ajustes.",
          "Entrar en Ajustes del sistema.",
          "Abrir Información del sistema.",
          "Anotar espacio libre disponible.",
        ],
      },

      {
        title: "Instalación",
        description: "Preparar la herramienta.",
        items: [
          "Copiar el PKG al USB.",
          "Instalar desde Directorio estándar.",
          "Abrir la aplicación.",
          "Esperar a que finalice.",
        ],
      },

      {
        title: "Primera ejecución",
        description: "Liberar espacio reservado.",
        items: [
          "Ejecutar PS3 Unlock HDD Space.",
          "La pantalla puede quedar en negro unos segundos.",
          "La consola volverá al XMB.",
          "Comprobar el nuevo espacio libre.",
        ],
      },

      {
        title: "Segunda ejecución",
        description: "Restaurar el estado original.",
        items: [
          "Ejecutar nuevamente la aplicación.",
          "Eliminar la modificación aplicada.",
          "Restaurar la reserva original.",
          "Volver a la configuración anterior.",
        ],
      },

      {
        title: "Verificación",
        description: "Confirmar que funcionó.",
        items: [
          "Abrir Información del sistema.",
          "Comparar espacio disponible.",
          "Verificar aumento de capacidad.",
        ],
      },

      {
        title: "Ventajas",
        description: "Beneficios de la herramienta.",
        items: [
          "Más espacio disponible.",
          "Instalación sencilla.",
          "Proceso reversible.",
          "No requiere configuración adicional.",
        ],
      },

      {
        title: "Advertencias",
        description: "Aspectos importantes.",
        items: [
          "Utilizar bajo responsabilidad propia.",
          "No apagar la consola durante el proceso.",
          "Comprobar espacio antes y después.",
          "Mantener copias de seguridad importantes.",
        ],
      },
    ],
  },
},
// webMAN MOD
{
  console: "PS3",
  name: "webMAN MOD",
  image: "img/PS3/webman-mod.jpg",
  
  description:
    "Plugin imprescindible para PlayStation 3 que permite montar juegos, controlar los ventiladores, monitorizar temperaturas y administrar la consola desde un navegador web.",

  website: "https://github.com/aldostools/webMAN-MOD",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/HBhECI7S#X-QHQFMzuFWQZ4kQXpVdoQ",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/aldostools/webMAN-MOD/releases",
    },
  ],

  guide: {
    function:
      "Permite cargar juegos desde el XMB, gestionar ISOs, controlar la temperatura, utilizar FTP y administrar la consola remotamente.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      FAT32: "✅ Compatible",
      NTFS: "✅ Compatible",
      exFAT: "✅ Compatible",
      FTP: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3 con HEN o CFW",
      "Pendrive FAT32",
      "webMAN MOD",
    ],

    installation: [
      "Copiar el instalador al USB.",
      "Instalar desde Administrar archivos PKG.",
      "Ejecutar el instalador desde Juegos.",
      "Mantener presionado L1 + X para instalación completa.",
      "Esperar el reinicio automático.",
    ],

    usage:
      "Permite montar juegos desde el XMB, acceder a una interfaz web de administración, controlar temperaturas, gestionar el ventilador y utilizar funciones FTP.",

    notes:
      "Es una de las herramientas más importantes de PS3 y muchas aplicaciones modernas dependen de ella para funcionar correctamente.",

    version: "Actual",
    author: "aldostools",

    details: [
      {
        title: "Carga de juegos",
        description: "Función principal.",
        items: [
          "Montar juegos PS3.",
          "Montar juegos PS1.",
          "Montar juegos PS2 compatibles.",
          "Montar archivos ISO.",
          "Compatibilidad con HDD interno y externo.",
        ],
      },

      {
        title: "Actualizar biblioteca",
        description: "Detectar nuevos juegos.",
        items: [
          "Actualizar juegos de webMAN.",
          "Actualizar juegos y XMB.",
          "Actualizar lista web.",
          "Refrescar contenido automáticamente.",
        ],
      },

      {
        title: "Acceso web",
        description:
          "Administrar la consola desde cualquier navegador.",

        items: [
          "Consultar temperaturas.",
          "Montar juegos.",
          "Actualizar contenido.",
          "Gestionar configuraciones.",
          "Acceder mediante la IP de la consola.",
        ],
      },

      {
        title: "Nueva interfaz de juegos",
        description:
          "Explorar la biblioteca desde una interfaz web integrada.",

        items: [
          "Abrir el navegador de Internet de la PS3.",
          "Acceder a la dirección 0/games.ps3.",
          "Visualizar los juegos mediante una interfaz web.",
          "Montar juegos directamente desde la lista.",
          "Acceder rápidamente al catálogo almacenado.",
        ],
      },

      {
        title: "Compatibilidad PS2 (PS2CONFIG)",
        description:
          "Base de configuraciones utilizada para mejorar la ejecución de algunos títulos de PlayStation 2.",

        items: [
          "Instalar PS2CONFIG.pkg.",
          "Aplicar configuraciones automáticas compatibles.",
          "Corregir problemas de compatibilidad.",
          "Reducir congelamientos durante la partida.",
          "Mejorar determinados títulos PS2.",
          "No todos los juegos requieren configuraciones especiales.",
          "Volver a ejecutar el juego después de la instalación.",
        ],
      },
      {
        title: "Control del ventilador",
        description: "Gestión térmica.",
        items: [
          "Modo SYSCON.",
          "Control manual.",
          "50% velocidad recomendada.",
          "60% para temperaturas elevadas.",
          "Protección contra sobrecalentamiento.",
        ],
      },

      {
        title: "Temperatura",
        description: "Monitorización del sistema.",
        items: [
          "Visualizar temperatura CPU.",
          "Visualizar temperatura RSX.",
          "Supervisión desde navegador.",
          "Control en tiempo real.",
        ],
      },

      {
        title: "Servidor Web",
        description: "Administración remota.",
        items: [
          "Acceso desde PC.",
          "Configuración desde navegador.",
          "Gestión de juegos.",
          "Herramientas del sistema.",
        ],
      },

      {
        title: "FTP",
        description: "Transferencia de archivos.",
        items: [
          "Servidor FTP integrado.",
          "Compatible con FileZilla.",
          "Transferencia por red local.",
          "Acceso al almacenamiento interno.",
        ],
      },

      {
        title: "Compatibilidad NTFS y exFAT",
        description: "Discos externos.",
        items: [
          "Compatible con prepISO.",
          "Compatible con HDD externos.",
          "Sin límite de 4 GB.",
          "Carga de ISOs grandes.",
        ],
      },

      {
        title: "Rutas recomendadas",
        description: "Ubicación de juegos.",
        items: [
          "PS3ISO",
          "PS2ISO",
          "PSXISO",
          "BDISO",
          "DVDISO",
        ],
      },

      {
        title: "Funciones avanzadas",
        description: "Herramientas adicionales.",
        items: [
          "Desmontar disco.",
          "Control del sistema.",
          "Acceso web.",
          "Escaneo automático.",
          "Montaje rápido.",
        ],
      },

      {
        title: "Temperaturas recomendadas",
        description: "Referencia general.",
        items: [
          "30°C - 50°C Excelente.",
          "50°C - 70°C Normal.",
          "70°C - 75°C Precaución.",
          "75°C - 80°C Alta temperatura.",
          "80°C o más Riesgo.",
        ],
      },

      {
        title: "Aplicaciones relacionadas",
        description: "Complementos recomendados.",
        items: [
          "prepISO",
          "IRISMAN",
          "multiMAN",
          "Apollo Save Tool",
          "PS3 Unlock HDD Space",
        ],
      },
    ],
  },
},
// Gamepad Test
{
  console: "PS3",
  name: "Gamepad Test",
  image: "img/PS3/gamepad-test.jpg",

  description:
    "Herramienta de diagnóstico para comprobar el funcionamiento de mandos PlayStation 3 y verificar botones, sticks analógicos y sensores.",

  website: "https://www.psx-place.com/resources/gamepad-test.498/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/6IQUEKQT#kuwhJ8hvAotVoXZCAa4CzA",
    },
  ],

  guide: {
    function:
      "Permite verificar el correcto funcionamiento de mandos DualShock 3 y Sixaxis conectados a la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      DualShock3: "✅ Compatible",
      Sixaxis: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "Mando DualShock 3 o Sixaxis",
      "Gamepad Test instalado",
    ],

    installation: [
      "Copiar el archivo PKG al USB.",
      "Abrir Administrar archivos PKG.",
      "Instalar Gamepad Test.",
      "Ejecutar desde el menú Juegos.",
    ],

    usage:
      "Permite visualizar en tiempo real la respuesta de botones, cruceta, sticks analógicos, gatillos y sensores del mando.",

    notes:
      "Ideal para detectar botones defectuosos, sticks con drift o problemas de calibración.",

    version: "Actual",
    author: "PS3 Homebrew Community",

    details: [
      {
        title: "Prueba de botones",
        description:
          "Verifica todas las entradas digitales.",
        items: [
          "△ Triángulo",
          "○ Círculo",
          "✕ Equis",
          "□ Cuadrado",
          "START",
          "SELECT",
        ],
      },

      {
        title: "Prueba de cruceta",
        description:
          "Comprobación de dirección.",
        items: [
          "Arriba",
          "Abajo",
          "Izquierda",
          "Derecha",
        ],
      },

      {
        title: "Prueba de sticks",
        description:
          "Monitoreo de analógicos.",
        items: [
          "Stick izquierdo.",
          "Stick derecho.",
          "Movimiento completo.",
          "Detección de drift.",
        ],
      },

      {
        title: "Prueba de gatillos",
        description:
          "Verificar botones analógicos.",
        items: [
          "L1",
          "L2",
          "R1",
          "R2",
        ],
      },

      {
        title: "Sensor de movimiento",
        description:
          "Comprobación del acelerómetro.",
        items: [
          "Movimiento horizontal.",
          "Movimiento vertical.",
          "Inclinación del mando.",
        ],
      },

      {
        title: "Diagnóstico",
        description:
          "Problemas que permite detectar.",
        items: [
          "Botones dañados.",
          "Sticks con drift.",
          "Gatillos defectuosos.",
          "Problemas de sensores.",
          "Fallas de calibración.",
        ],
      },

      {
        title: "Cuándo utilizarlo",
        description:
          "Casos recomendados.",
        items: [
          "Comprar un mando usado.",
          "Reparar un DualShock 3.",
          "Verificar un mando nuevo.",
          "Comprobar fallos en juegos.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características principales.",
        items: [
          "Pruebas en tiempo real.",
          "Diagnóstico rápido.",
          "Ligero y sencillo.",
          "Compatible con PS3.",
        ],
      },
    ],
  },
},
// Convertir ISO de PS2 sin PC
{
  console: "PS3",
  name: "Convertir ISO de PS2 sin PC",
  image: "img/PS3/convertir-iso-ps2.jpg",

  description:
    "Convierte juegos de PlayStation 2 directamente desde la PS3 sin utilizar ordenador, permitiendo ejecutarlos mediante el emulador PS2 Classics.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/ecZlTRhI#0CfQLINlOFqNL2dfyjTKkA",
    },
    {
      name: "Compatibility",
      url: "https://www.psdevwiki.com/ps3/PS2_Classics_Emulator_Compatibility_List",
    },
  ],

  guide: {
    function:
      "Permite convertir imágenes ISO de PlayStation 2 al formato compatible con PS2 Classics directamente en la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      PS2ISO: "✅ Compatible",
      webMAN: "✅ Recomendado",
      multiMAN: "✅ Requerido",
    },

    requirements: [
      "Consola con HEN",
      "Juego PS2 en formato ISO",
      "multiMAN",
      "webMAN MOD",
      "PS2 Classics Manager",
    ],

    installation: [
      "Instalar PS2 Classics Manager.",
      "Instalar PS2 Classics Launcher.",
      "Instalar licencias exdata necesarias.",
      "Verificar que webMAN MOD esté funcionando.",
    ],

    usage:
      "Permite convertir una ISO de PS2 a BIN.ENC directamente desde la PS3 para su ejecución mediante PS2 Classics.",

    notes:
      "Antes de convertir un juego se recomienda revisar la lista de compatibilidad del emulador PS2 Classics.",

    version: "Actual",
    author: "PS3 Homebrew Community",

    details: [
      {
        title: "Compatibilidad",
        description:
          "Comprobar antes de comenzar.",
        items: [
          "Revisar lista de compatibilidad PS2 Classics.",
          "Algunos juegos funcionan mejor que otros.",
          "No todos los títulos son compatibles.",
        ],
      },

      {
        title: "Copiar ISO al HDD",
        description:
          "Transferir el juego a la consola.",
        items: [
          "Abrir multiMAN.",
          "Entrar en PS3 Root.",
          "Copiar la ISO desde el USB.",
          "Moverla a dev_hdd0/PS2ISO.",
        ],
      },

      {
        title: "Convertir la ISO",
        description:
          "Proceso de cifrado.",
        items: [
          "Abrir PS2 Classics Manager.",
          "Entrar en PS2 GAME LIST.",
          "Seleccionar el juego.",
          "Abrir Extended Menu.",
          "Usar ENCRYPT PS2 ISO/BIN.",
        ],
      },

      {
        title: "Crear Memory Card PS2",
        description:
          "Preparar guardados.",
        items: [
          "Abrir Herramienta Memory Card.",
          "Crear nueva Memory Card interna.",
          "Seleccionar tipo PS2.",
          "Guardar la configuración.",
        ],
      },

      {
        title: "Mover BIN.ENC",
        description:
          "Preparar el juego convertido.",
        items: [
          "Abrir multiMAN.",
          "Entrar en dev_hdd0/PS2ISO.",
          "Localizar ISO.BIN.ENC.",
          "Mover el archivo a la carpeta principal.",
          "Renombrarlo si es necesario.",
        ],
      },

      {
        title: "Actualizar webMAN",
        description:
          "Mostrar el juego convertido.",
        items: [
          "Abrir Configuración de webMAN.",
          "Actualizar juegos y XMB.",
          "Esperar el refresco.",
          "Buscar el juego en PLAYSTATION2.",
        ],
      },

      {
        title: "Ejecutar el juego",
        description:
          "Inicio desde PS3.",
        items: [
          "Montar el juego desde webMAN.",
          "Abrir PS2 Classics Launcher.",
          "Esperar la carga.",
          "Jugar normalmente.",
        ],
      },

      {
        title: "Aplicaciones necesarias",
        description:
          "Herramientas utilizadas.",
        items: [
          "multiMAN",
          "webMAN MOD",
          "PS2 Classics Manager",
          "PS2 Classics Launcher",
        ],
      },

      {
        title: "Consejos",
        description:
          "Buenas prácticas.",
        items: [
          "Usar juegos comprobados.",
          "Crear Memory Card PS2 antes de jugar.",
          "Mantener webMAN actualizado.",
          "Guardar copia de la ISO original.",
        ],
      },
    ],
  },
},
// PSP Launcher
{
  console: "PS3",
  name: "PSP Launcher",
  image: "img/PS3/psp-launcher.jpg",

  description:
    "Permite ejecutar juegos de PSP compatibles en PlayStation 3 utilizando el lanzador PSP Remaster o Cobra PSP Launcher.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/6ZRG2aBa#oVMhGPEKx92fVlLGITqHIA",
    },
  ],

  guide: {
    function:
      "Lanzar juegos de PSP compatibles cargados mediante webMAN MOD.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      PSPISO: "✅ Compatible",
      webMAN: "✅ Requerido",
    },

    requirements: [
      "PlayStation 3 con HEN o CFW",
      "webMAN MOD",
      "Juego PSP compatible",
      "PSP Launcher",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar una de las aplicaciones PSP Launcher.",
      "Verificar que aparezca en el menú Juegos.",
    ],

    usage:
      "Montar el juego PSP desde webMAN MOD y ejecutar PSP Launcher para iniciar el título.",

    notes:
      "La compatibilidad depende del juego. No todos los títulos de PSP funcionan correctamente en PS3.",

    version: "Actual",
    author: "Scene PS3",

    details: [
      {
        title: "Lanzadores compatibles",
        description:
          "Aplicaciones incluidas en el tutorial.",
        items: [
          "Cobra USB PSP Launcher v2.0",
          "PSP Remaster Launcher Fixed",
        ],
      },

      {
        title: "Instalación",
        description:
          "Preparar la consola.",
        items: [
          "Instalar el PKG.",
          "Revisar el menú Juegos.",
          "Activar HEN si corresponde.",
          "Verificar webMAN MOD.",
        ],
      },

      {
        title: "Carga del juego",
        description:
          "Preparar el título PSP.",
        items: [
          "Montar el juego mediante webMAN MOD.",
          "Esperar que finalice el montaje.",
          "Abrir PSP Launcher.",
          "Iniciar el juego.",
        ],
      },

      {
        title: "Ubicación recomendada",
        description: "Organización de juegos PSP.",
        items: [
          "PSPISO",
          "Mantener nombres simples.",
          "Evitar caracteres especiales.",
          "Actualizar webMAN después de agregar juegos.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Aspectos importantes.",
        items: [
          "No todos los juegos funcionan.",
          "Algunos títulos presentan errores.",
          "La compatibilidad varía según el juego.",
          "Se recomienda probar individualmente.",
        ],
      },

      {
        title: "Aplicaciones relacionadas",
        description:
          "Herramientas recomendadas.",
        items: [
          "webMAN MOD",
          "multiMAN",
          "IRISMAN",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Funciones principales.",
        items: [
          "Carga de juegos PSP.",
          "Integración con webMAN MOD.",
          "Instalación sencilla.",
          "Compatible con HEN y CFW.",
        ],
      },
    ],
  },
},
// RetroArch
{
  console: "PS3",
  name: "RetroArch",
  image: "img/PS3/retroarch.jpg",

  description:
    "Frontend de emulación para PlayStation 3 que permite ejecutar juegos clásicos mediante núcleos (cores) de diferentes sistemas retro.",

  website: "https://github.com/crystalct/RetroArch_PSX_CE",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/2cBlyIYQ#h_RD-GCQUUVzBv4tRiKl6w",
    },
    {
      name: "Web Oficial",
      url: "https://retroarch.com/",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/crystalct/RetroArch_PSX_CE/releases",
    },
  ],

  guide: {
    function:
      "Permite cargar juegos retro de múltiples consolas utilizando núcleos de emulación desde una única interfaz.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      USB: "✅ Compatible",
      FAT32: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3 con HEN o CFW",
      "RetroArch instalado",
      "ROMs compatibles",
      "USB o HDD con las ROMs",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Instalar desde Administrar archivos PKG.",
      "Abrir RetroArch desde Juegos.",
      "Configurar idioma y opciones iniciales.",
    ],

    usage:
      "Permite cargar núcleos de emulación y ejecutar ROMs desde dispositivos USB o almacenamiento interno.",

    notes:
      "Para obtener la mejor compatibilidad se recomienda utilizar el núcleo adecuado para cada sistema.",

    version: "Actual",
    author: "Libretro Team",

    details: [
      {
        title: "Primer inicio",
        description:
          "Configuración básica.",
        items: [
          "Abrir RetroArch.",
          "Configurar idioma.",
          "Revisar opciones generales.",
          "Guardar ajustes.",
        ],
      },

      {
        title: "Idioma",
        description:
          "Cambiar idioma de la interfaz.",
        items: [
          "Settings",
          "User",
          "Language",
          "Seleccionar idioma deseado",
        ],
      },

      {
        title: "Núcleos",
        description:
          "Motores de emulación.",
        items: [
          "Descargar núcleos.",
          "Actualizar núcleos.",
          "Instalar núcleos manualmente.",
          "Restaurar núcleos.",
        ],
      },

      {
        title: "Carga de ROMs",
        description:
          "Método más sencillo.",
        items: [
          "Cargar contenido.",
          "Buscar ROM.",
          "Seleccionar núcleo.",
          "Iniciar juego.",
        ],
      },
      
      {
        title: "Carpeta recomendada",
        description: "Organización de ROMs.",
        items: [
          "roms/NES",
          "roms/SNES",
          "roms/GBA",
          "roms/PSX",
          "roms/MEGADRIVE",
        ],
      },

      {
        title: "Organización de ROMs",
        description:
          "Ubicaciones recomendadas.",
        items: [
          "/dev_usb000/roms",
          "USB FAT32",
          "HDD externo",
          "Carpetas por consola",
        ],
      },

      {
        title: "Sistemas compatibles",
        description:
          "Ejemplos de plataformas.",
        items: [
          "NES",
          "SNES",
          "Game Boy",
          "Game Boy Advance",
          "Mega Drive",
          "Master System",
          "Neo Geo",
          "PlayStation",
        ],
      },

      {
        title: "Controles durante el juego",
        description:
          "Acceso al menú rápido.",
        items: [
          "L3 + R3",
          "Menú rápido",
          "Cambiar opciones",
          "Cerrar juego",
        ],
      },

      {
        title: "Versiones disponibles",
        description:
          "Opciones del tutorial.",
        items: [
          "RetroArch Oficial",
          "RetroArch Modificado",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características principales.",
        items: [
          "Multisistema.",
          "Actualización de núcleos.",
          "Interfaz unificada.",
          "Guardado rápido.",
          "Compatible con USB.",
        ],
      },

      {
        title: "Consejos",
        description:
          "Buenas prácticas.",
        items: [
          "Mantener los núcleos actualizados.",
          "Organizar ROMs por carpetas.",
          "Usar núcleos recomendados.",
          "Guardar configuraciones personalizadas.",
        ],
      },
    ],
  },
},
// Flash Player Store PS3
{
  console: "PS3",
  name: "Flash Player Store PS3",
  image: "img/PS3/flash-player-store.jpg",

  description:
    "Pequeña colección de juegos Flash para PlayStation 3 accesibles desde una interfaz integrada.",

  website: "https://github.com/DropSonic0/Flash-Player-PS3-Store",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/DcAHCA4R#tvzwlRR1Y2USOddtNh-Obg",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/DropSonic0/Flash-Player-PS3-Store/releases",
    },
  ],

  guide: {
    function:
      "Permite acceder y ejecutar juegos Flash desde una interfaz preparada para PlayStation 3.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      Internet: "✅ Recomendado",
    },

    requirements: [
      "PlayStation 3",
      "Flash Player Store PS3",
      "Navegador de PS3",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar FGP3.",
      "Ejecutar la aplicación desde Juegos.",
    ],

    usage:
      "Abrir FGP3, acceder a la sección FLASH y seleccionar el juego deseado.",

    notes:
      "Los juegos se ejecutan utilizando el navegador integrado de PlayStation 3.",

    version: "Actual",
    author: "Comunidad PS3",

    details: [
      {
        title: "Instalación",
        description:
          "Preparación inicial.",
        items: [
          "Copiar el PKG al USB.",
          "Instalar desde Directorio estándar.",
          "Abrir FGP3.",
          "Acceder a FLASH.",
        ],
      },

      {
        title: "Catálogo de juegos",
        description:
          "Contenido disponible.",
        items: [
          "Juegos Flash clásicos.",
          "Selección integrada.",
          "Acceso desde una única interfaz.",
        ],
      },

      {
        title: "Carga de juegos",
        description:
          "Inicio de los títulos.",
        items: [
          "Seleccionar juego.",
          "Abrir desde el catálogo.",
          "Cargar en el navegador.",
          "Comenzar a jugar.",
        ],
      },

      {
        title: "Navegador PS3",
        description:
          "Método de ejecución.",
        items: [
          "Uso del navegador integrado.",
          "Sin aplicaciones adicionales.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características principales.",
        items: [
          "Instalación rápida.",
          "Colección de juegos Flash.",
          "Fácil utilización.",
          "Compatible con PS3.",
        ],
      },

      {
        title: "Importante",
        description:
          "Aspectos a considerar.",
        items: [
          "La compatibilidad depende de cada juego.",
          "Algunos títulos pueden cargar más lento.",
          "La experiencia puede variar según el navegador de PS3.",
        ],
      },
    ],
  },
},
// PKGi
{
  console: "PS3",
  name: "PKGi",
  image: "img/PS3/pkgi.jpg",

  description:
    "Gestor de descargas para PlayStation 3 que permite descargar e instalar contenido directamente desde la consola.",

  website: "https://github.com/bucanero/pkgi-ps3",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/rY5UnLoS#NomGm3D8AjZ6gx_NKls8OA",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/bucanero/pkgi-ps3/releases",
    },
  ],

  guide: {
    function:
      "Permite consultar una base de datos de contenido y descargar paquetes directamente desde la PlayStation 3.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      Internet: "✅ Requerido",
    },

    requirements: [
      "PlayStation 3 con HEN o CFW",
      "Conexión a Internet",
      "PKGi",
      "Base de datos configurada",
    ],

    installation: [
      "Copiar PKGi.pkg al USB.",
      "Instalar desde Administrador de archivos PKG.",
      "Instalar Auto_DB_PKGi.pkg.",
      "Ejecutar PKGi desde el menú Red.",
    ],

    usage:
      "Permite navegar por la base de datos, buscar contenido y descargarlo directamente a la consola.",

    notes:
      "Para obtener los mejores resultados conviene mantener la base de datos actualizada mediante Auto_DB_PKGi.",

    version: "Actual",
    author: "bucanero",

    details: [
      {
        title: "Primer inicio",
        description:
          "Configuración básica.",
        items: [
          "Abrir PKGi.",
          "Esperar la carga de la base de datos.",
          "Verificar conexión a Internet.",
        ],
      },

      {
        title: "Biblioteca",
        description:
          "Contenido disponible.",
        items: [
          "Juegos.",
          "DLC.",
          "Temas.",
          "Avatares.",
          "Demos.",
        ],
      },

      {
        title: "Filtros",
        description:
          "Opciones de búsqueda.",
        items: [
          "Filtrar por categoría.",
          "Filtrar por región.",
          "Ordenar por nombre.",
          "Ordenar por tamaño.",
        ],
      },

      {
        title: "Regiones",
        description:
          "Filtrado por origen.",
        items: [
          "Europa.",
          "USA.",
          "Japón.",
          "Asia.",
        ],
      },

      {
        title: "Información rápida",
        description:
          "Datos básicos del contenido.",
        items: [
          "CUADRADO para ver detalles.",
          "Título.",
          "Tamaño.",
          "Información disponible.",
        ],
      },

      {
        title: "Juegos instalados",
        description:
          "Identificación rápida dentro de PKGi.",
        items: [
          "Los títulos con punto blanco ya están instalados en la consola.",
          "Permite evitar descargas duplicadas.",
        ],
      },

      {
        title: "Opciones",
        description:
          "Menú de configuración.",
        items: [
          "TRIÁNGULO para abrir opciones.",
          "Actualizar aplicación.",
          "Cambiar método de descarga.",
          "Configurar interfaz.",
        ],
      },

      {
        title: "Métodos de descarga",
        description:
          "Modos disponibles.",
        items: [
          "Direct DL.",
          "Back. DL.",
          "Gestor de descargas integrado.",
        ],
      },

      {
        title: "Direct DL",
        description:
          "Descarga e instalación directa.",
        items: [
          "Descarga automática.",
          "Instalación automática.",
          "Menos intervención del usuario.",
        ],
      },

      {
        title: "Back. DL",
        description:
          "Descarga mediante cola.",
        items: [
          "Descarga el paquete.",
          "Utiliza Download Manager.",
          "Instalación posterior.",
        ],
      },

      {
        title: "Instalar descargas",
        description:
          "Ubicación del contenido descargado.",
        items: [
          "Administrar archivos PKG.",
          "Contenido de PlayStation Network.",
          "Instalar individualmente.",
          "Eliminar paquetes descargados.",
        ],
      },

      {
        title: "Licencias",
        description:
          "Información mostrada en el catálogo.",
        items: [
          "RAP not Required.",
          "Contenido sin licencia adicional.",
          "Información mostrada antes de descargar.",
        ],
      },

      {
        title: "Actualizar Base de Datos",
        description:
          "Mantener los listados actualizados.",
        items: [
          "Instalar Auto_DB_PKGi.pkg.",
          "Actualizar información.",
          "Mejorar compatibilidad.",
          "Mantener el catálogo actualizado.",
        ],
      },

      {
        title: "Controles",
        description:
          "Accesos rápidos.",
        items: [
          "✕ Descargar.",
          "□ Información.",
          "△ Opciones.",
          "○ Salir.",
        ],
      },
    ],
  },
},
// VIDEOSTORE
{
  console: "PS3",
  name: "VIDEOSTORE",
  image: "img/PS3/videostore.jpg",

  description:
    "Tienda para PlayStation 3 que permite acceder a juegos, aplicaciones, contenido retro y utilidades directamente desde la consola.",

  website: "https://github.com/Videogamesscz/videostore",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/fQYwWQ5S#7J14xtM1HNFcVH_TpsPsZw",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/Videogamesscz/videostore/releases",
    },
  ],

  guide: {
    function:
      "Permite navegar y acceder a diferentes categorías de contenido desde una única aplicación instalada en la PS3.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      Internet: "✅ Requerido",
    },

    requirements: [
      "PlayStation 3",
      "Conexión a Internet",
      "VIDEOSTORE",
      "HEN activo (si corresponde)",
    ],

    installation: [
      "Copiar VIDEOSTORE.pkg al USB.",
      "Instalar desde Administrador de archivos PKG.",
      "Instalar FIX HEN si la versión lo requiere.",
      "Reiniciar la consola.",
    ],

    usage:
      "Abrir VIDEOSTORE desde el menú Juegos y navegar por las distintas categorías disponibles.",

    notes:
      "Es necesario activar HEN antes de utilizar la aplicación en sistemas compatibles.",

    version: "2.x",
    author: "Videogamesscz",

    details: [
      {
        title: "Instalación",
        description:
          "Preparar la aplicación.",
        items: [
          "Instalar VIDEOSTORE.",
          "Instalar FIX HEN.",
          "Reiniciar la consola.",
          "Activar HEN.",
        ],
      },

      {
        title: "Catálogo disponible",
        description:
          "Contenido accesible.",
        items: [
          "PlayStation 1",
          "PlayStation 2",
          "PlayStation 3",
          "PSP",
          "Retro",
          "Homebrew",
        ],
      },

      {
        title: "Aplicaciones",
        description:
          "Herramientas adicionales.",
        items: [
          "Homebrew PS3.",
          "Utilidades.",
          "Herramientas del sistema.",
          "Aplicaciones multimedia.",
        ],
      },

      {
        title: "Contenido retro",
        description:
          "Juegos clásicos.",
        items: [
          "Sistemas retro compatibles.",
          "Selección organizada.",
          "Acceso desde la aplicación.",
        ],
      },

      {
        title: "Uso diario",
        description:
          "Funcionamiento básico.",
        items: [
          "Abrir VIDEOSTORE.",
          "Seleccionar categoría.",
          "Explorar contenido.",
          "Elegir elemento disponible.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Modelos soportados.",
        items: [
          "PS3 FAT",
          "PS3 Slim",
          "PS3 Super Slim",
          "Compatible con HEN",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Puntos fuertes.",
        items: [
          "Interfaz sencilla.",
          "Contenido organizado.",
          "Varias categorías disponibles.",
          "Instalación rápida.",
          "Compatible con HEN.",
        ],
      },

      {
        title: "Aplicaciones relacionadas",
        description:
          "Complementos recomendados.",
        items: [
          "PKGi",
          "webMAN MOD",
          "Apollo Save Tool",
          "RetroArch",
          "Movian",
        ],
      },
    ],
  },
},
// WebStore Comunidad (Obsoleto)
{
  console: "PS3",
  name: "⚠️ WebStore Comunidad (Obsoleto)",
  image: "img/PS3/webstore-comunidad.jpg",

  description:
    "Tienda clásica para PlayStation 3 que permitía acceder a juegos, aplicaciones y contenido retro. Actualmente el proyecto ya no dispone de soporte oficial.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/fJpg3ZSa#AZJ9cB3HFzhRd9Np__rCrQ",
    },
  ],

  guide: {
    function:
      "Permitía acceder a diferentes categorías de contenido directamente desde la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      Internet: "✅ Requerido",
      Estado: "⚠️ Obsoleto",
    },

    requirements: [
      "PlayStation 3",
      "HEN activo",
      "Conexión a Internet",
      "WebStore Comunidad",
    ],

    installation: [
      "Copiar WebStore Comunidad.pkg al USB.",
      "Instalar desde Administrador de archivos PKG.",
      "Instalar el FIX HEN correspondiente.",
      "Reiniciar la consola.",
    ],

    usage:
      "Abrir la aplicación desde el menú Juegos y navegar por las categorías disponibles.",

    notes:
      "El proyecto ya no dispone de soporte activo, por lo que algunas funciones o enlaces pueden dejar de funcionar.",

    version: "Legacy",
    author: "Comunidad PS3",

    details: [
      {
        title: "Estado actual",
        description:
          "Situación del proyecto.",
        items: [
          "Proyecto sin soporte.",
          "Funcionamiento variable.",
          "Algunas funciones pueden no estar disponibles.",
          "Uso principalmente histórico.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Proceso básico.",
        items: [
          "Instalar WebStore Comunidad.",
          "Instalar FIX HEN.",
          "Reiniciar la consola.",
          "Activar HEN.",
        ],
      },

      {
        title: "Contenido disponible",
        description:
          "Categorías incluidas.",
        items: [
          "PlayStation 1",
          "PlayStation 2",
          "PlayStation 3",
          "PSP",
          "Retro",
          "Homebrew",
        ],
      },

      {
        title: "Aplicaciones",
        description:
          "Herramientas y utilidades.",
        items: [
          "Homebrew.",
          "Aplicaciones multimedia.",
          "Herramientas PS3.",
          "Utilidades del sistema.",
        ],
      },

      {
        title: "Uso",
        description:
          "Funcionamiento general.",
        items: [
          "Abrir la aplicación.",
          "Entrar en una categoría.",
          "Explorar contenido.",
          "Seleccionar el elemento deseado.",
        ],
      },

      {
        title: "Alternativas actuales",
        description:
          "Opciones recomendadas actualmente.",
        items: [
          "PKGi",
          "VIDEOSTORE",
          "webMAN MOD",
          "RetroArch",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Consolas compatibles.",
        items: [
          "PS3 FAT",
          "PS3 Slim",
          "PS3 Super Slim",
          "Compatible con HEN.",
        ],
      },

      {
        title: "Advertencia",
        description:
          "Información importante.",
        items: [
          "No tiene mantenimiento activo.",
          "Algunos enlaces pueden estar caídos.",
          "El contenido disponible puede variar.",
          "Se recomienda utilizar alternativas modernas cuando sea posible.",
        ],
      },
    ],
  },
},
// ZukoStore
{
  console: "PS3",
  name: "ZukoStore",
  image: "img/PS3/zukostore.jpg",

  description:
    "Tienda todo en uno para PlayStation 3 que permite acceder a juegos, aplicaciones, utilidades y contenido adicional directamente desde la consola.",

  website: "https://thezukostore.com/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/zQogUaQS#li4NYPdF56k84wXMBOcJiQ",
    },
  ],

  guide: {
    function:
      "Permite navegar por distintas categorías de contenido y acceder a recursos para PlayStation 3 desde una interfaz integrada.",

    compatibility: {
      HEN: "✅ Compatible",
      Internet: "✅ Requerido",
    },

    requirements: [
      "PlayStation 3",
      "Conexión a Internet",
      "ZukoStore instalado",
      "HEN activo",
    ],

    installation: [
      "Copiar ZukoStore.pkg al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar la aplicación.",
      "Reiniciar la consola si es necesario.",
      "Activar HEN.",
    ],

    usage:
      "Abrir ZukoStore desde el menú Juegos y navegar por las categorías disponibles.",

    notes:
      "El contenido disponible puede variar según la versión de la tienda y las actualizaciones recibidas.",

    version: "Actual",
    author: "ZukoStore Team",

    details: [
      {
        title: "Primer inicio",
        description:
          "Configuración básica.",
        items: [
          "Abrir ZukoStore.",
          "Esperar la carga inicial.",
          "Verificar conexión a Internet.",
          "Actualizar si existe una nueva versión.",
        ],
      },

      {
        title: "Juegos",
        description:
          "Contenido principal.",
        items: [
          "PlayStation 1",
          "PlayStation 2",
          "PlayStation 3",
          "PSP",
        ],
      },

      {
        title: "Homebrew",
        description:
          "Aplicaciones disponibles.",
        items: [
          "Herramientas del sistema.",
          "Multimedia.",
          "Gestores de archivos.",
          "Emuladores.",
        ],
      },

      {
        title: "Utilidades",
        description:
          "Funciones adicionales.",
        items: [
          "Aplicaciones para HEN.",
          "Herramientas de mantenimiento.",
          "Personalización del sistema.",
          "Recursos para usuarios avanzados.",
        ],
      },

      {
        title: "Navegación",
        description:
          "Uso de la interfaz.",
        items: [
          "Moverse por categorías.",
          "Abrir detalles del contenido.",
          "Consultar información disponible.",
          "Acceder rápidamente a recursos.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Sistemas compatibles.",
        items: [
          "PS3 FAT",
          "PS3 Slim",
          "PS3 Super Slim",
          "Compatible con HEN",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características destacadas.",
        items: [
          "Interfaz sencilla.",
          "Contenido organizado.",
          "Acceso rápido.",
          "Instalación simple.",
          "Compatible con PlayStation 3.",
        ],
      },

      {
        title: "Aplicaciones relacionadas",
        description:
          "Complementos recomendados.",
        items: [
          "webMAN MOD",
          "PKGi",
          "VIDEOSTORE",
          "WIKISTORE",
          "RetroArch",
        ],
      },

      {
        title: "Recomendaciones",
        description:
          "Buenas prácticas.",
        items: [
          "Mantener espacio libre en el HDD.",
          "Usar una conexión estable.",
          "Mantener HEN actualizado.",
          "Revisar actualizaciones de la tienda.",
        ],
      },
    ],
  },
},
// 9420 Carátulas
{
  console: "PS3",
  name: "9420 Carátulas",
  image: "img/PS3/9420-caratulas.jpg",

  description:
    "Pack de 9420 carátulas para juegos de PlayStation 3, PlayStation 2 y sistemas retro compatible con multiMAN y webMAN MOD.",

  website: "https://github.com/aldostools/webMAN-MOD",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/GUhWlLwZ#jS2azbfM0SgouGR3mDHaJA",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/aldostools/webMAN-MOD/releases",
    },
  ],

  guide: {
    function:
      "Permite añadir miles de carátulas a la biblioteca de juegos utilizada por multiMAN y webMAN MOD.",

    compatibility: {
      HEN: "✅ Compatible",
      multiMAN: "✅ Compatible",
      webMAN: "✅ Compatible",
      PS3: "✅ Compatible",
      PS2: "✅ Compatible",
      Retro: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "USB FAT32",
      "multiMAN o webMAN MOD",
      "Pack de carátulas",
    ],

    installation: [
      "Copiar los PKG al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar los paquetes de carátulas.",
      "Esperar a que finalice la instalación.",
    ],

    usage:
      "Las carátulas se integran automáticamente en multiMAN y webMAN MOD para mostrar imágenes de los juegos.",

    notes:
      "Después de instalar el pack es recomendable actualizar la biblioteca de webMAN MOD para detectar las nuevas carátulas.",

    version: "9420 Covers Pack",
    author: "PS3 Community",

    details: [
      {
        title: "Contenido del Pack",
        description:
          "Elementos incluidos.",
        items: [
          "Carátulas PS3.",
          "Carátulas PS2.",
          "Carátulas Retro.",
          "Miles de juegos compatibles.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Preparación inicial.",
        items: [
          "Instalar el paquete principal.",
          "Instalar el paquete Retro.",
          "Completar la instalación.",
          "Reiniciar la consola.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Aplicaciones soportadas.",
        items: [
          "multiMAN",
          "webMAN MOD",
          "Bibliotecas PS3.",
          "Bibliotecas PS2.",
          "Bibliotecas Retro.",
        ],
      },

      {
        title: "Actualizar multiMAN",
        description:
          "Verificar la instalación.",
        items: [
          "Abrir multiMAN.",
          "Comprobar la biblioteca.",
          "Verificar las nuevas imágenes.",
        ],
      },

      {
        title: "Actualizar webMAN MOD",
        description:
          "Refrescar la lista de juegos.",
        items: [
          "Entrar en Configuración webMAN.",
          "Actualizar juegos de webMAN y XMB.",
          "Actualizar Juegos de webMAN.",
          "Actualizar lista web de juegos.",
        ],
      },

      {
        title: "Reiniciar consola",
        description:
          "Aplicar los cambios.",
        items: [
          "Salir al XMB.",
          "Reiniciar la consola.",
          "Volver a cargar la biblioteca.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",
        items: [
          "Biblioteca más visual.",
          "Mayor organización.",
          "Compatible con miles de juegos.",
          "Integración con webMAN MOD.",
          "Integración con multiMAN.",
        ],
      },

      {
        title: "Aplicaciones relacionadas",
        description:
          "Complementos recomendados.",
        items: [
          "webMAN MOD",
          "multiMAN",
          "IRISMAN",
          "RetroArch",
        ],
      },
    ],
  },
},
// Iconos Personalizados
{
  console: "PS3",
  name: "Iconos Personalizados",
  image: "img/PS3/iconos-personalizados.jpg",

  description:
    "Colección de skins e iconos personalizados para aplicaciones populares de PlayStation 3 como Apollo, Artemis, File Manager, webMAN MOD y sMan.",

  website: "https://www.psx-place.com/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/WQhjEAyC#7VYcdXfrhjoDqafUdHRhEQ",
    },
  ],

  guide: {
    function:
      "Permite reemplazar iconos e imágenes de aplicaciones para dar una apariencia renovada al menú XMB.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      XMB: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "USB FAT32",
      "Aplicaciones compatibles instaladas",
    ],

    installation: [
      "Copiar los PKG al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar los skins deseados.",
      "Volver al XMB para comprobar los cambios.",
    ],

    usage:
      "Instalar el skin correspondiente a cada aplicación para reemplazar automáticamente los iconos originales.",

    notes:
      "Los cambios son únicamente visuales y no modifican el funcionamiento de las aplicaciones.",

    version: "Pack Personalización",
    author: "Comunidad PS3",

    details: [
      {
        title: "Aplicaciones compatibles",
        description:
          "Skins incluidos en el pack.",
        items: [
          "Apollo Save Tool",
          "Artemis",
          "File Manager",
          "webMAN MOD",
          "sMan",
        ],
      },

      {
        title: "Apollo Skin",
        description:
          "Personalización de Apollo Save Tool.",
        items: [
          "Nuevo icono.",
          "Nueva apariencia.",
          "Integración con el XMB.",
        ],
      },

      {
        title: "Artemis Skin",
        description:
          "Nuevo aspecto visual para Artemis.",
        items: [
          "Icono personalizado.",
          "Diseño alternativo.",
          "Acceso desde Juegos.",
        ],
      },

      {
        title: "File Manager Skin",
        description:
          "Aspecto alternativo para File Manager.",
        items: [
          "Nuevo icono.",
          "Mayor personalización.",
          "Diseño renovado.",
        ],
      },

      {
        title: "webMAN MOD Skin",
        description:
          "Personalización para webMAN.",
        items: [
          "Iconos modificados.",
          "Nuevos accesos visuales.",
          "Diseño alternativo.",
        ],
      },

      {
        title: "sMan Skin",
        description:
          "Aspecto personalizado para sMan.",
        items: [
          "Nuevo icono.",
          "Nueva imagen del XMB.",
          "Integración automática.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Proceso básico.",
        items: [
          "Seleccionar el skin deseado.",
          "Instalar el PKG.",
          "Esperar la finalización.",
          "Comprobar los cambios.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características principales.",
        items: [
          "Personalización rápida.",
          "No modifica funciones.",
          "Instalación sencilla.",
          "Compatible con HEN y CFW.",
        ],
      },
    ],
  },
},
// Logos HEN
{
  console: "PS3",
  name: "Logos HEN",
  image: "img/PS3/logos-hen.jpg",

  description:
    "Colección de logos personalizados para HEN que permiten cambiar la apariencia del icono de activación en PlayStation 3.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/TFZTja5B#wOoPNL0EjLS3N3xAJQ2hsg",
    },
  ],

  guide: {
    function:
      "Permite instalar distintos diseños visuales para personalizar el logo de HEN en el XMB.",

    compatibility: {
      HEN: "✅ Compatible",
      XMB: "✅ Compatible",
      Personalización: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3 con HEN",
      "USB FAT32",
      "Pack Logos HEN",
    ],

    installation: [
      "Copiar Logos HEN.pkg al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar el paquete principal.",
      "Abrir Instalar archivos PKG.",
      "Entrar en Almacenamiento del sistema PS3.",
    ],

    usage:
      "Seleccionar uno de los logos incluidos en el pack e instalarlo desde el almacenamiento interno de la PS3.",

    notes:
      "Los cambios realizados son únicamente visuales y pueden reemplazarse instalando otro logo del mismo paquete.",

    version: "Pack Logos HEN",
    author: "Comunidad PS3",

    details: [
      {
        title: "¿Qué incluye?",
        description:
          "Contenido del paquete.",
        items: [
          "Múltiples logos HEN.",
          "Diferentes estilos visuales.",
          "Versiones alternativas.",
          "Instalación individual.",
        ],
      },

      {
        title: "Instalación del Pack",
        description:
          "Preparar los logos.",
        items: [
          "Instalar Logos HEN.pkg.",
          "Esperar la extracción.",
          "Acceder a PKG Manager.",
          "Abrir Almacenamiento del sistema PS3.",
        ],
      },

      {
        title: "Elegir un Logo",
        description:
          "Seleccionar el diseño deseado.",
        items: [
          "Revisar la imagen de referencia.",
          "Buscar el mismo nombre en la consola.",
          "Seleccionar el logo favorito.",
          "Instalar el paquete correspondiente.",
        ],
      },

      {
        title: "Cambiar de Logo",
        description:
          "Modificar la apariencia cuando quieras.",
        items: [
          "Entrar nuevamente al almacenamiento del sistema.",
          "Seleccionar otro logo.",
          "Instalar el nuevo paquete.",
          "Reemplazar el anterior.",
        ],
      },

      {
        title: "Personalización",
        description:
          "Aspectos visuales modificados.",
        items: [
          "Icono HEN.",
          "Diseño del acceso.",
          "Identidad visual.",
          "Apariencia del XMB.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios del pack.",
        items: [
          "Personalización rápida.",
          "Instalación sencilla.",
          "Gran variedad de diseños.",
          "Compatible con HEN.",
        ],
      },

      {
        title: "Aplicaciones relacionadas",
        description:
          "Otras opciones de personalización.",
        items: [
          "Iconos Personalizados",
          "webMAN MOD",
          "Apollo Save Tool",
          "Artemis",
          "sMan",
        ],
      },

      {
        title: "Importante",
        description:
          "Información adicional.",
        items: [
          "Solo modifica la apariencia.",
          "No altera funciones de HEN.",
          "Se puede cambiar en cualquier momento.",
          "Compatible con instalaciones HEN.",
        ],
      },
    ],
  },
},
// Monstruoso T-PACK
{
  console: "PS3",
  name: "Monstruoso T-PACK",
  image: "img/PS3/monstruoso-tpack.jpg",

  description:
    "Mega pack de personalización para PlayStation 3 que incluye logos PSN, imágenes de usuario y una colección de temas para el XMB.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/uNpk0JjR#aSceNXgBZtXKKsWLr050Aw",
    },
  ],

  guide: {
    function:
      "Permite personalizar distintos aspectos visuales de PlayStation 3 mediante logos, avatares e instalación de temas.",

    compatibility: {
      HEN: "✅ Compatible",
      XMB: "✅ Compatible",
      Temas: "✅ Compatible",
      Personalización: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "USB FAT32",
      "Pack Monstruoso T-PACK",
    ],

    installation: [
      "Descargar Monstruoso T-PACK.",
      "Extraer el archivo T-PACK.rar.",
      "Copiar el contenido a la raíz del USB.",
      "Conectar el USB a la consola.",
    ],

    usage:
      "Permite instalar logos PSN, cambiar imágenes de usuario e instalar temas personalizados desde una sola colección.",

    notes:
      "Los cambios realizados son visuales y pueden modificarse posteriormente instalando otros paquetes o temas.",

    version: "T-PACK",
    author: "Comunidad PS3",

    details: [
      {
        title: "Contenido del Pack",
        description:
          "Elementos incluidos.",
        items: [
          "Logos PSN.",
          "Imágenes de usuario.",
          "Temas para PS3.",
          "Pack de personalización.",
        ],
      },

      {
        title: "Cambiar Logo PSN",
        description:
          "Personalizar el icono PSN.",
        items: [
          "Abrir Administrador de archivos PKG.",
          "Instalar archivos PKG.",
          "Seleccionar Directorio estándar.",
          "Elegir el color deseado.",
          "Instalar el paquete.",
        ],
      },

      {
        title: "Aplicar cambios PSN",
        description:
          "Finalizar la personalización.",
        items: [
          "Cerrar sesión PSN.",
          "O reiniciar la consola.",
          "Verificar el nuevo logo.",
        ],
      },

      {
        title: "Cambiar Imagen de Usuario",
        description:
          "Personalizar el perfil.",
        items: [
          "Abrir la categoría Foto.",
          "Acceder al USB.",
          "Copiar la imagen deseada.",
          "Seleccionar el usuario.",
          "Editar información del perfil.",
        ],
      },

      {
        title: "Instalar Temas",
        description:
          "Agregar nuevos temas al sistema.",
        items: [
          "Instalar Megalopack Themes.pkg.",
          "Esperar la instalación.",
          "Abrir Ajustes.",
          "Entrar en Ajustes de tema.",
          "Seleccionar Tema.",
        ],
      },

      {
        title: "Aplicar Tema",
        description:
          "Activar el diseño seleccionado.",
        items: [
          "Elegir un tema instalado.",
          "Aplicar cambios.",
          "Esperar la actualización visual.",
          "Disfrutar el nuevo diseño.",
        ],
      },

      {
        title: "Personalización Completa",
        description:
          "Elementos modificables.",
        items: [
          "Logo PSN.",
          "Imagen de usuario.",
          "Tema XMB.",
          "Aspecto general del sistema.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios del pack.",
        items: [
          "Gran variedad de opciones.",
          "Instalación sencilla.",
          "Todo en un solo paquete.",
          "Compatible con PS3.",
        ],
      },

      {
        title: "Complementos Relacionados",
        description:
          "Más opciones de personalización.",
        items: [
          "Logos HEN",
          "Iconos Personalizados",
          "webMAN MOD",
          "Temas PS3",
        ],
      },
    ],
  },
},
// Pack Avatares PS3
{
  console: "PS3",
  name: "Pack Avatares PS3",
  image: "img/PS3/pack-avatares.jpg",

  description:
    "Colección de 4330 avatares instalables para PlayStation 3 que permite personalizar el perfil de PlayStation Network con una gran variedad de diseños.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/DYY2mZIL#Yzd1jsy8X_r275f97J5v5Q",
    },
  ],

  guide: {
    function:
      "Instala cientos de avatares en la consola para utilizarlos posteriormente en la cuenta de PlayStation Network.",

    compatibility: {
      HEN: "✅ Compatible",
      PSN: "✅ Compatible",
      Personalización: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "USB FAT32",
      "Pack Avatares PS3",
      "Cuenta PlayStation Network",
    ],

    installation: [
      "Descargar PACK AVATARES PS3.rar.",
      "Descomprimir el archivo.",
      "Copiar el contenido a la raíz del USB.",
      "Conectar el USB a la consola.",
      "Instalar los paquetes PKG incluidos.",
    ],

    usage:
      "Una vez instalados los paquetes, los avatares estarán disponibles dentro de la configuración de la cuenta PSN.",

    notes:
      "Para visualizar los avatares instalados es necesario iniciar sesión en una cuenta de PlayStation Network.",

    version: "4330 Avatares",
    author: "Comunidad PS3",

    details: [
      {
        title: "Contenido del Pack",
        description:
          "Material incluido.",
        items: [
          "4330 avatares.",
          "Instalación mediante PKG.",
          "Gran variedad de diseños.",
          "Compatible con PSN.",
        ],
      },

      {
        title: "Preparar el Pack",
        description:
          "Primeros pasos.",
        items: [
          "Descomprimir PACK AVATARES PS3.rar.",
          "Copiar los archivos al USB.",
          "Conectar el USB a la consola.",
        ],
      },

      {
        title: "Instalar Avatares",
        description:
          "Proceso de instalación.",
        items: [
          "Abrir Administrador de archivos PKG.",
          "Seleccionar Directorio estándar.",
          "Instalar los paquetes deseados.",
          "Esperar la finalización.",
        ],
      },

      {
        title: "Iniciar Sesión PSN",
        description:
          "Acceder a la cuenta.",
        items: [
          "Abrir PlayStation Network.",
          "Seleccionar Iniciar sesión.",
          "Ingresar credenciales.",
          "Acceder a la cuenta.",
        ],
      },

      {
        title: "Seleccionar Avatar",
        description:
          "Aplicar una nueva imagen.",
        items: [
          "Administración de cuentas.",
          "Información de cuenta.",
          "Avatar.",
          "Elegir un nuevo avatar.",
        ],
      },

      {
        title: "Personalización",
        description:
          "Opciones disponibles.",
        items: [
          "Cambiar avatar las veces que desees.",
          "Explorar miles de diseños.",
          "Actualizar el perfil PSN.",
          "Combinar con temas personalizados.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",
        items: [
          "Gran colección de avatares.",
          "Instalación simple.",
          "Compatible con PSN.",
          "Personalización del perfil.",
        ],
      },

      {
        title: "Complementos Relacionados",
        description:
          "Otras opciones de personalización.",
        items: [
          "Monstruoso T-PACK",
          "Logos HEN",
          "Iconos Personalizados",
          "Temas PS3",
        ],
      },
    ],
  },
},
// PS3 Extra Mods
{
  console: "PS3",
  name: "PS3 Extra Mods",
  image: "img/PS3/extra-mods.jpg",

  description:
    "Pack de personalización que incluye coldboots, logos PSN, fuentes y modificaciones visuales para PlayStation 3.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/bdhgXJaY#s4sYl0jP7tymVMkE2w8dLQ",
    },
  ],

  guide: {
    function:
      "Permite instalar y aplicar diferentes modificaciones visuales para personalizar la apariencia de la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      webMAN: "✅ Recomendado",
      Coldboot: "✅ Compatible",
      Personalización: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "USB FAT32",
      "webMAN MOD",
      "PS3 Extra Mods",
    ],

    installation: [
      "Copiar PS3 EXTRA MODS.pkg al USB.",
      "Abrir Administrador de archivos PKG.",
      "Instalar el paquete.",
      "Verificar que aparezca en el menú Juegos.",
    ],

    usage:
      "Montar la ISO incluida y seleccionar los elementos visuales que deseas instalar en la consola.",

    notes:
      "Se recomienda reiniciar la consola después de aplicar cualquier modificación para visualizar correctamente los cambios.",

    version: "Extra Mods Pack",
    author: "Comunidad PS3",

    details: [
      {
        title: "Contenido del Pack",
        description:
          "Modificaciones incluidas.",
        items: [
          "Coldboots.",
          "Logos de inicio.",
          "Logos PSN.",
          "Fuentes personalizadas.",
          "Extras visuales.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Preparar el paquete.",
        items: [
          "Instalar PS3 EXTRA MODS.pkg.",
          "Esperar la instalación.",
          "Abrir el menú Juegos.",
          "Localizar la ISO.",
        ],
      },

      {
        title: "Uso con webMAN MOD",
        description:
          "Acceso al contenido.",
        items: [
          "Actualizar webMAN si es necesario.",
          "Montar la ISO.",
          "Explorar las categorías disponibles.",
          "Seleccionar la modificación deseada.",
        ],
      },

      {
        title: "Coldboots",
        description:
          "Animaciones y sonidos de inicio.",
        items: [
          "Múltiples estilos disponibles.",
          "Selección desde la ISO.",
          "Aplicación rápida.",
          "Requiere reinicio para comprobar cambios.",
        ],
      },

      {
        title: "Logos PSN",
        description:
          "Cambios visuales para PSN.",
        items: [
          "Diferentes diseños.",
          "Variantes de colores.",
          "Instalación individual.",
        ],
      },

      {
        title: "Fuentes",
        description:
          "Tipografías personalizadas.",
        items: [
          "Fuentes alternativas.",
          "Personalización del XMB.",
          "Modificación estética.",
        ],
      },

      {
        title: "Aplicar Cambios",
        description:
          "Finalizar la personalización.",
        items: [
          "Instalar la modificación.",
          "Cerrar aplicaciones.",
          "Reiniciar la consola.",
          "Verificar los resultados.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios del pack.",
        items: [
          "Todo en un solo paquete.",
          "Gran variedad visual.",
          "Compatible con webMAN.",
          "Fácil instalación.",
          "Personalización avanzada.",
        ],
      },

      {
        title: "Complementos Relacionados",
        description:
          "Otras herramientas de personalización.",
        items: [
          "Monstruoso T-PACK",
          "Logos HEN",
          "Pack Avatares PS3",
          "Iconos Personalizados",
          "webMAN MOD",
        ],
      },
    ],
  },
},
// PSN Icons Collection
{
  console: "PS3",
  name: "PSN Icons Collection",
  image: "img/PS3/psn-icons.jpg",

  description:
    "Colección de iconos PSN personalizables para PlayStation 3 que permite modificar el aspecto visual de PlayStation Network.",

  website: "https://www.psx-place.com/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/bdhgXJaY#s4sYl0jP7tymVMkE2w8dLQ",
    },
  ],

  guide: {
    function:
      "Permite cambiar el icono visual de PlayStation Network mediante una colección de diseños instalables.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      PSN: "✅ Compatible",
      Personalización: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "USB FAT32",
      "PSN Icons Collection Disc",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir Administrador de archivos PKG.",
      "Entrar en Directorio estándar.",
      "Instalar PSN icons collection disc.pkg.",
      "Verificar que aparezca en el menú Juegos.",
    ],

    usage:
      "Abrir la colección de iconos, seleccionar el diseño deseado y aplicarlo directamente desde la consola.",

    notes:
      "La consola se reiniciará automáticamente después de aplicar algunos iconos para completar los cambios.",

    version: "Collection Disc",
    author: "PS3 Community",

    details: [
      {
        title: "¿Qué incluye?",
        description:
          "Colección de personalización PSN.",
        items: [
          "Múltiples iconos PSN.",
          "Distintos estilos visuales.",
          "Selección desde la consola.",
          "Aplicación automática.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Preparar la colección.",
        items: [
          "Instalar PSN icons collection disc.pkg.",
          "Esperar la instalación.",
          "Abrir desde Juegos.",
          "Explorar los iconos disponibles.",
        ],
      },

      {
        title: "Elegir Icono",
        description:
          "Aplicar un nuevo diseño.",
        items: [
          "Seleccionar el icono deseado.",
          "Presionar ✕.",
          "Confirmar la instalación.",
          "Esperar la aplicación de cambios.",
        ],
      },

      {
        title: "Reinicio Automático",
        description:
          "Finalizar la instalación.",
        items: [
          "Aceptar la confirmación.",
          "Permitir el reinicio.",
          "Esperar la carga del sistema.",
          "Verificar el nuevo icono.",
        ],
      },

      {
        title: "Personalización",
        description:
          "Elementos visuales modificados.",
        items: [
          "Icono PSN.",
          "Aspecto visual del acceso.",
          "Diseño personalizado.",
          "Identidad gráfica.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",
        items: [
          "Instalación sencilla.",
          "Muchos diseños disponibles.",
          "No modifica funciones.",
          "Cambios rápidos.",
        ],
      },

      {
        title: "Complementos Relacionados",
        description:
          "Más opciones de personalización.",
        items: [
          "PS3 Extra Mods",
          "Monstruoso T-PACK",
          "Logos HEN",
          "Pack Avatares PS3",
          "Iconos Personalizados",
        ],
      },

      {
        title: "Importante",
        description:
          "Información a considerar.",
        items: [
          "Solo modifica la apariencia.",
          "No altera PlayStation Network.",
          "Se puede cambiar posteriormente.",
          "Compatible con sistemas HEN.",
        ],
      },
    ],
  },
},
// Temas PS3 desde la WEB
{
  console: "PS3",
  name: "Temas PS3 desde la WEB",
  image: "img/PS3/temas-web.jpg",

  description:
    "Guía para descargar e instalar temas personalizados en PlayStation 3 utilizando páginas especializadas o archivos P3T desde USB.",

  website: null,

  downloads: [
  ],

  guide: {
    function:
      "Permite descargar e instalar temas personalizados para modificar la apariencia del XMB de PlayStation 3.",

    compatibility: {
      OFW: "✅ Compatible",
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      P3T: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "Navegador de Internet",
      "Conexión a Internet o USB FAT32",
    ],

    installation: [
      "Abrir el navegador de Internet de la PS3.",
      "Visitar la página de temas.",
      "Descargar el tema deseado.",
      "Instalar automáticamente o mediante USB.",
    ],

    usage:
      "Permite descargar temas directamente desde Internet o instalarlos manualmente mediante archivos .p3t.",

    notes:
      "Los temas utilizan el formato oficial P3T, compatible con cualquier PlayStation 3.",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Descarga Directa",
        description:
          "Instalar temas desde la consola.",
        items: [
          "Abrir el navegador PS3.",
          "Entrar en ps3-themes.com.",
          "Buscar un tema.",
          "Pulsar Download Here.",
          "Esperar la descarga.",
        ],
      },

      {
        title: "Aplicación Automática",
        description:
          "Temas descargados desde la PS3.",
        items: [
          "Descargar el tema.",
          "Instalación automática.",
          "Abrir Ajustes de tema.",
          "Aplicar el nuevo diseño.",
        ],
      },

      {
        title: "Instalación por USB",
        description:
          "Método alternativo desde ordenador.",
        items: [
          "Descargar archivo .p3t.",
          "Copiar al USB.",
          "Crear la ruta PS3/THEME.",
          "Mover los temas a esa carpeta.",
        ],
      },

      {
        title: "Ruta Correcta",
        description:
          "Ubicación de los temas.",
        items: [
          "PS3/",
          "PS3/THEME/",
          "archivo.p3t",
        ],
      },

      {
        title: "Instalar desde USB",
        description:
          "Detección de temas.",
        items: [
          "Ajustes.",
          "Ajustes de tema.",
          "Tema.",
          "Instalar.",
          "Seleccionar USB.",
        ],
      },

      {
        title: "Aplicar Tema",
        description:
          "Activar un tema instalado.",
        items: [
          "Entrar en Temas.",
          "Seleccionar el tema.",
          "Aplicar.",
          "Esperar la actualización visual.",
        ],
      },

      {
        title: "Formato P3T",
        description:
          "Formato oficial de Sony.",
        items: [
          "Compatible con PS3.",
          "Fácil instalación.",
          "No requiere homebrew.",
          "Compatible con firmware oficial.",
        ],
      },

      {
        title: "Personalización",
        description:
          "Elementos modificados.",
        items: [
          "Fondos.",
          "Iconos.",
          "Colores.",
          "Sonidos de algunos temas.",
        ],
      },

      {
        title: "Complementos Relacionados",
        description:
          "Más opciones de personalización.",
        items: [
          "Monstruoso T-PACK",
          "PS3 Extra Mods",
          "Pack Avatares PS3",
          "Logos HEN",
          "PSN Icons Collection",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",
        items: [
          "Instalación sencilla.",
          "Miles de temas disponibles.",
          "Compatible con cualquier PS3.",
          "Sin modificar el sistema.",
        ],
      },
    ],
  },
},
// PkgView
{
  console: "PS3",
  name: "PkgView",
  image: "img/PS3/pkgview.jpg",

  description:
    "Herramienta para Windows que permite abrir, examinar y extraer el contenido de archivos PKG de PlayStation 3 mediante una interfaz gráfica.",

  website: "https://github.com/ifcaro/PkgView",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/fEoTTChL#4aINzX4fQjif3FOgXDmJpA",
    },
  ],

  guide: {
    function:
      "Permite visualizar, extraer y analizar el contenido de paquetes PKG de PlayStation 3 desde el ordenador.",

    compatibility: {
      Windows: "✅ Compatible",
      PKG: "✅ Compatible",
      PS3: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "Archivo PKG",
      "PkgView",
    ],

    installation: [
      "Descargar PkgView.",
      "Descomprimir el archivo .rar.",
      "Extraer la carpeta del programa.",
      "Ejecutar PkgView.exe.",
    ],

    usage:
      "Abrir cualquier archivo PKG para inspeccionar su estructura interna y extraer archivos individuales o el paquete completo.",

    notes:
      "PkgView es una herramienta independiente y no incluye código propietario de Sony.",

    version: "1.3",
    author: "ifcaro",

    details: [
      {
        title: "¿Qué es PkgView?",
        description:
          "Explorador de paquetes PKG.",
        items: [
          "Interfaz gráfica.",
          "Visualización de archivos PKG.",
          "Extracción de contenido.",
          "Compatible con paquetes PS3.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Preparación del programa.",
        items: [
          "Descargar PkgView.",
          "Descomprimir el archivo.",
          "Extraer la carpeta.",
          "Ejecutar PkgView.exe.",
        ],
      },

      {
        title: "Abrir un PKG",
        description:
          "Examinar un paquete.",
        items: [
          "File.",
          "Open.",
          "Seleccionar archivo PKG.",
          "Visualizar contenido.",
        ],
      },

      {
        title: "Explorar Contenido",
        description:
          "Visualización interna.",
        items: [
          "Archivos incluidos.",
          "Carpetas internas.",
          "Recursos del paquete.",
          "Estructura completa.",
        ],
      },

      {
        title: "Extraer Archivos",
        description:
          "Recuperar contenido del paquete.",
        items: [
          "Extraer archivo individual.",
          "Extraer carpeta específica.",
          "Extraer paquete completo.",
          "Guardar en PC.",
        ],
      },

      {
        title: "Análisis de PKG",
        description:
          "Verificar información.",
        items: [
          "Contenido interno.",
          "Archivos incluidos.",
          "Recursos gráficos.",
          "Información del paquete.",
        ],
      },

      {
        title: "Usos Comunes",
        description:
          "Situaciones habituales.",
        items: [
          "Examinar homebrew.",
          "Inspeccionar temas.",
          "Analizar aplicaciones.",
          "Verificar contenido PKG.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características destacadas.",
        items: [
          "Interfaz sencilla.",
          "Análisis rápido.",
          "Extracción selectiva.",
          "Compatible con PS3.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",
        items: [
          "PS3Tools Collection",
          "TrueAncestor PKG Repacker",
          "PS3 ISO Tools",
          "Apollo Save Tool",
        ],
      },
    ],
  },
},
// Make Package Custom
{
  console: "PS3",
  name: "Make Package Custom",
  image: "img/PS3/make-package-custom.jpg",

  description:
    "Herramienta para Windows que permite crear archivos PKG personalizados para PlayStation 3 utilizando cualquier contenido compatible.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/zApxRCxI#rmixTPW63BzKXksAg_0MzwK_MEGA",
    },
  ],

  guide: {
    function:
      "Permite generar paquetes PKG con temas, licencias, música, aplicaciones o cualquier contenido destinado al sistema de archivos de PS3.",

    compatibility: {
      Windows: "✅ Compatible",
      PKG: "✅ Compatible",
      PS3: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "Make Package Custom",
      "Contenido para empaquetar",
    ],

    installation: [
      "Descargar Make Package Custom.",
      "Descomprimir el archivo .rar.",
      "Extraer la carpeta del programa.",
      "Abrir el directorio principal.",
    ],

    usage:
      "Organizar el contenido dentro de la carpeta custom siguiendo la estructura correcta y ejecutar make.bat para generar el archivo PKG.",

    notes:
      "La estructura de carpetas debe coincidir con la ubicación final donde se instalará el contenido en la PS3.",

    version: "1.2",
    author: "PS3 Development Tools",

    details: [
      {
        title: "¿Qué es?",
        description:
          "Generador de paquetes PKG.",
        items: [
          "Creación de PKG personalizados.",
          "Compatible con múltiples tipos de contenido.",
          "Proceso automático.",
          "Ideal para proyectos PS3.",
        ],
      },

      {
        title: "Preparar la carpeta Custom",
        description:
          "Organizar el contenido.",
        items: [
          "Abrir carpeta custom.",
          "Crear la estructura necesaria.",
          "Copiar archivos a empaquetar.",
          "Verificar las rutas.",
        ],
      },

      {
        title: "Ejemplo Temas PS3",
        description:
          "Instalación de archivos P3T.",
        items: [
          "Crear carpeta dev_hdd0.",
          "Crear carpeta theme.",
          "Ruta: dev_hdd0/theme.",
          "Copiar archivos .p3t.",
        ],
      },

      {
        title: "Contenido Compatible",
        description:
          "Tipos de archivos habituales.",
        items: [
          "Temas.",
          "Licencias.",
          "Aplicaciones.",
          "Música.",
          "Recursos personalizados.",
        ],
      },

      {
        title: "Crear el PKG",
        description:
          "Generar el paquete final.",
        items: [
          "Abrir make.bat.",
          "Esperar el proceso.",
          "Generar PKG automáticamente.",
          "Verificar el resultado.",
        ],
      },

      {
        title: "Instalación en PS3",
        description:
          "Uso del paquete generado.",
        items: [
          "Copiar el PKG al USB.",
          "Conectar el USB a la consola.",
          "Abrir Administrador de archivos PKG.",
          "Instalar normalmente.",
        ],
      },

      {
        title: "Usos Recomendados",
        description:
          "Proyectos habituales.",
        items: [
          "Temas personalizados.",
          "Paquetes de licencias.",
          "Archivos de configuración.",
          "Distribución de contenido.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Puntos fuertes.",
        items: [
          "Proceso sencillo.",
          "Creación rápida.",
          "Compatible con PS3.",
          "No requiere programación.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",
        items: [
          "PkgView",
          "PS3Tools Collection",
          "TrueAncestor PKG Repacker",
          "PS3 ISO Tools",
        ],
      },
    ],
  },
},
// PS3 Game Updates
{
  console: "PS3",
  name: "PS3 Game Updates",
  image: "img/PS3/ps3-game-updates.jpg",

  description:
    "Herramienta para Windows que permite buscar y descargar actualizaciones de juegos de PlayStation 3 directamente al ordenador.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LEpziQKZ#JtQwVBzfjHpXXIDZJpQZtA",
    },
  ],

  guide: {
    function:
      "Permite localizar, descargar y organizar actualizaciones de juegos PS3 utilizando el Game ID.",

    compatibility: {
      Windows: "✅ Compatible",
      PS3: "✅ Compatible",
      PKG: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "PS3 Game Updates",
      "Game ID del juego",
    ],

    installation: [
      "Descargar PS3 Game Updates.",
      "Descomprimir el archivo .rar.",
      "Extraer la carpeta del programa.",
      "Ejecutar PS3GameUpdater.exe.",
    ],

    usage:
      "Buscar el ID de un juego, seleccionar las actualizaciones deseadas y descargarlas al ordenador para instalarlas posteriormente en la consola.",

    notes:
      "Si una consola tiene una versión anterior instalada, solo es necesario descargar las actualizaciones posteriores.",

    version: "Actual",
    author: "PS3 Development Tools",

    details: [
      {
        title: "Buscar Juego",
        description:
          "Localizar actualizaciones mediante Game ID.",
        items: [
          "Abrir PS3GameUpdater.exe.",
          "Entrar en Import From.",
          "Seleccionar Search Game ID.",
          "Introducir el ID del juego.",
        ],
      },

      {
        title: "Seleccionar Actualizaciones",
        description:
          "Elegir versiones necesarias.",
        items: [
          "Ver lista de updates.",
          "Revisar versiones disponibles.",
          "Seleccionar las necesarias.",
          "Preparar descarga.",
        ],
      },

      {
        title: "Actualizaciones Incrementales",
        description:
          "Instalar solo versiones faltantes.",
        items: [
          "Comprobar versión instalada.",
          "Descargar versiones posteriores.",
          "Evitar descargas innecesarias.",
          "Ahorrar tiempo.",
        ],
      },

      {
        title: "Descargar Updates",
        description:
          "Obtener los archivos PKG.",
        items: [
          "Check updates for selected games.",
          "Esperar las descargas.",
          "Verificar completado.",
          "Revisar la carpeta creada.",
        ],
      },

      {
        title: "Carpeta de Descargas",
        description:
          "Ubicación del contenido.",
        items: [
          "PS3 Game Updater Updates",
          "Actualizaciones descargadas.",
          "Archivos PKG listos para usar.",
        ],
      },

      {
        title: "Instalar en PS3",
        description:
          "Transferencia a la consola.",
        items: [
          "Copiar los PKG al USB.",
          "Conectar el USB a la PS3.",
          "Abrir Administrador de archivos PKG.",
          "Instalar las actualizaciones.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",
        items: [
          "Descarga desde PC.",
          "Control de versiones.",
          "Actualizaciones organizadas.",
          "Instalación manual sencilla.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",
        items: [
          "PkgView",
          "Make Package Custom",
          "webMAN MOD",
          "multiMAN",
        ],
      },
    ],
  },
},
// PS3 NET Server
{
  console: "PS3",
  name: "PS3 NET Server",
  image: "img/PS3/ps3-net-server.jpg",

  description:
    "Servidor para PC que permite ejecutar juegos almacenados en un ordenador directamente desde PlayStation 3 mediante la red local.",

  website:
    "https://github.com/aldostools/webMAN-MOD/wiki/~-PS3-NET-Server",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/3JYymYKI#uknjaTuJnPQm-hA53TEmrw",
    },
  ],

  guide: {
    function:
      "Permite compartir juegos desde un ordenador hacia la PS3 utilizando webMAN MOD y la red local.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      webMAN: "✅ Requerido",
      LAN: "✅ Requerido",
    },

    requirements: [
      "PlayStation 3",
      "PC o Notebook",
      "webMAN MOD",
      "Red local",
      "PS3 NET Server",
    ],

    installation: [
      "Descargar PS3 NET Server.",
      "Descomprimir el archivo.",
      "Ejecutar PS3_NET_Server.exe.",
      "Seleccionar la carpeta donde estarán los juegos.",
    ],

    usage:
      "Permite cargar juegos almacenados en el PC sin necesidad de copiarlos al disco duro interno o USB de la PS3.",

    notes:
      "La PS3 y el ordenador deben estar conectados a la misma red local para un funcionamiento correcto.",

    version: "Actual",
    author: "aldostools",

    details: [
      {
        title: "¿Qué es PS3 NET Server?",
        description:
          "Servidor de juegos por red.",
        items: [
          "Streaming local.",
          "Compatible con webMAN MOD.",
          "Acceso desde PC.",
          "No requiere copiar juegos.",
        ],
      },

      {
        title: "Configurar Carpeta",
        description:
          "Ubicación de los juegos.",
        items: [
          "Seleccionar carpeta principal.",
          "Guardar configuración.",
          "Iniciar servidor.",
          "Verificar acceso.",
        ],
      },

      {
        title: "Estructura Recomendada",
        description:
          "Organización de contenidos.",
        items: [
          "GAMES",
          "PS3ISO",
          "PSXISO",
        ],
      },

      {
        title: "Juegos PS3",
        description:
          "Formatos compatibles.",
        items: [
          "GAMES (formato carpeta).",
          "PS3ISO (formato ISO).",
        ],
      },

      {
        title: "Juegos PS1",
        description:
          "Compatibilidad retro.",
        items: [
          "PSXISO.",
          "Imágenes ISO compatibles.",
        ],
      },

      {
        title: "Configurar webMAN MOD",
        description:
          "Conexión con el servidor.",
        items: [
          "Abrir Configuración webMAN.",
          "Buscar contenido Juegos/Vídeos por LAN.",
          "Introducir IP del ordenador.",
          "Guardar cambios.",
        ],
      },

      {
        title: "Obtener IP del PC",
        description:
          "Configuración de red.",
        items: [
          "Abrir CMD.",
          "Ejecutar ipconfig.",
          "Anotar dirección IPv4.",
        ],
      },

      {
        title: "Actualizar Biblioteca",
        description:
          "Detectar nuevos juegos.",
        items: [
          "Actualizar juegos de webMAN y XMB.",
          "Actualizar Juegos de webMAN.",
          "Actualizar lista web de juegos.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",
        items: [
          "No ocupa espacio en la PS3.",
          "Bibliotecas grandes.",
          "Carga desde PC.",
          "Compatible con webMAN MOD.",
          "Gestión centralizada.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Complementos recomendados.",
        items: [
          "webMAN MOD",
          "prepISO",
          "multiMAN",
          "IRISMAN",
        ],
      },
    ],
  },
},
// PARAM SFO Editor
{
  console: "PS3",
  name: "PARAM SFO Editor",
  image: "img/PS3/param-sfo-editor.png",

  description:
    "Herramienta para Windows que permite visualizar y modificar la información contenida en archivos PARAM.SFO de juegos y aplicaciones.",

  website: "https://github.com/xXxTheDarkprogramerxXx/PS3Tools",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/vVZQCCxb#vxyJnPYvjYG2D2ItNX50tA",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/xXxTheDarkprogramerxXx/PS3Tools/releases",
    },
  ],

  guide: {
    function:
      "Permite consultar y editar la información almacenada en archivos PARAM.SFO de PlayStation 3 y otras plataformas compatibles.",

    compatibility: {
      Windows: "✅ Compatible",
      PS3: "✅ Compatible",
      PSVita: "✅ Compatible",
      PS4: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "PARAM SFO Editor",
      "Archivo PARAM.SFO",
    ],

    installation: [
      "Descargar PARAM SFO Editor.",
      "Descomprimir el archivo .rar.",
      "Extraer la carpeta.",
      "Ejecutar PARAM.SFO_Editor.exe.",
    ],

    usage:
      "Abrir un archivo PARAM.SFO, revisar la información disponible, realizar modificaciones y guardar los cambios.",

    notes:
      "Se recomienda realizar una copia de seguridad del archivo original antes de guardar modificaciones.",

    version: "1.2",
    author: "PS3Tools Team",

    details: [
      {
        title: "¿Qué es un PARAM.SFO?",
        description:
          "Archivo de información utilizado por juegos y aplicaciones.",

        items: [
          "Datos del juego.",
          "Identificador del título.",
          "Información de versión.",
          "Configuración de la aplicación.",
        ],
      },

      {
        title: "Abrir un Archivo",
        description:
          "Cargar información para editar.",

        items: [
          "Iniciar PARAM SFO Editor.",
          "Seleccionar Open.",
          "Elegir PARAM.SFO.",
          "Visualizar información.",
        ],
      },

      {
        title: "Información Visible",
        description:
          "Datos que se pueden consultar.",

        items: [
          "TITLE ID.",
          "Nombre del juego.",
          "Versión.",
          "Información interna.",
        ],
      },

      {
        title: "Modificar Datos",
        description:
          "Edición de parámetros.",

        items: [
          "Editar valores.",
          "Modificar campos compatibles.",
          "Actualizar información.",
          "Preparar cambios.",
        ],
      },

      {
        title: "Guardar Cambios",
        description:
          "Finalizar la edición.",

        items: [
          "Presionar Save.",
          "Guardar PARAM.SFO.",
          "Reemplazar el original.",
          "Comprobar resultados.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Archivos soportados.",

        items: [
          "PlayStation 3",
          "PlayStation Vita",
          "PlayStation 4",
          "Aplicaciones compatibles",
        ],
      },

      {
        title: "Usos Comunes",
        description:
          "Situaciones habituales.",

        items: [
          "Analizar juegos.",
          "Ver información interna.",
          "Modificar parámetros.",
          "Preparar contenido personalizado.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características destacadas.",

        items: [
          "Interfaz sencilla.",
          "Edición rápida.",
          "Compatible con múltiples plataformas.",
          "Ligero y fácil de usar.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "PkgView",
          "Make Package Custom",
          "PS3 Game Updates",
          "PS3 NET Server",
        ],
      },
    ],
  },
},
// RetroXMB
{
  console: "PS3",
  name: "RetroXMB",
  image: "img/PS3/retroxmb.jpg",

  description:
    "Herramienta para Windows que permite convertir juegos de PlayStation 2 en formato ISO a PKG instalables para PlayStation 3.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CY4m1ZJD#N8pzVHpiIEF_nzYZDytlbQ",
    },
  ],

  guide: {
    function:
      "Permite crear paquetes PKG de juegos PS2 para ser instalados directamente en PlayStation 3.",

    compatibility: {
      Windows: "✅ Compatible",
      PS2ISO: "✅ Compatible",
      PS3: "✅ Compatible",
      PKG: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "Juego PS2 en formato ISO",
      "RetroXMB",
    ],

    installation: [
      "Descargar RetroXMB.",
      "Extraer RetroXMB Convertidor PKG.rar.",
      "Ejecutar RetroPS3.exe.",
      "Aceptar la configuración inicial.",
    ],

    usage:
      "Seleccionar una ISO de PS2, personalizar las imágenes opcionales y generar un PKG listo para instalar en PS3.",

    notes:
      "Los paquetes creados se guardan automáticamente en la carpeta created_pkgs/PS2.",

    version: "Actual",
    author: "Comunidad PS3",

    details: [
      {
        title: "Seleccionar ISO",
        description:
          "Preparar el juego PS2.",

        items: [
          "Abrir RetroPS3.exe.",
          "Ir a la pestaña PlayStation 2.",
          "Pulsar Browse.",
          "Seleccionar la ISO.",
        ],
      },

      {
        title: "Personalizar Carátulas",
        description:
          "Modificar la apariencia del PKG.",

        items: [
          "Change para el icono.",
          "Add PIC1 para el fondo.",
          "Usar imágenes compatibles.",
          "Personalizar el XMB.",
        ],
      },

      {
        title: "Crear PKG",
        description:
          "Generar el paquete instalable.",

        items: [
          "Seleccionar Build Package.",
          "Esperar la conversión.",
          "Guardar el proyecto.",
          "Generar archivo PKG.",
        ],
      },

      {
        title: "Carpeta de Salida",
        description:
          "Ubicación de los archivos creados.",

        items: [
          "created_pkgs/PS2",
          "PKG generado",
          "Archivos auxiliares",
        ],
      },

      {
        title: "Licencia RAP",
        description:
          "Archivo necesario para algunos procesos.",

        items: [
          "Abrir reactpsn_usb_exdata.",
          "Localizar el archivo RAP incluido.",
          "Copiar a USB/exdata.",
          "Preparar instalación.",
        ],
      },

      {
        title: "Instalación en PS3",
        description:
          "Pasar el contenido a la consola.",

        items: [
          "Copiar el PKG al USB.",
          "Usar FTP si supera 4 GB.",
          "Abrir Administrar archivos PKG.",
          "Instalar desde Directorio estándar.",
        ],
      },

      {
        title: "Compatibilidad PS2",
        description:
          "Aspectos importantes.",

        items: [
          "No todos los juegos funcionan igual.",
          "Depende del emulador PS2 de PS3.",
          "Comprobar compatibilidad antes de convertir.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Proceso sencillo.",
          "Conversión rápida.",
          "Personalización visual.",
          "PKG listo para instalar.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "PS2 Classics Manager",
          "webMAN MOD",
          "Make Package Custom",
          "PARAM SFO Editor",
        ],
      },
    ],
  },
},
// PKG Linker
{
  console: "PS3",
  name: "PKG Linker",
  image: "img/PS3/pkg-linker.jpg",

  description:
    "Herramienta para Windows que permite instalar archivos PKG desde un ordenador hacia PlayStation 3 utilizando la red local.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/eF4wmCAR#tsUN1kgEUfbidDMmQWgcJw",
    },
  ],

  guide: {
    function:
      "Permite servir paquetes PKG desde un PC para descargarlos e instalarlos directamente en la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      HAN: "✅ Compatible",
      Windows: "✅ Compatible",
      LAN: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "PC o Notebook",
      "PKG Linker",
      "Red local",
      "Archivos PKG",
    ],

    installation: [
      "Descargar PKG Linker.",
      "Extraer PKG_Linker_V2.0_Installer.rar.",
      "Ejecutar PKG Linker V2.0.exe.",
      "Ejecutar como administrador si es necesario.",
    ],

    usage:
      "Permite compartir archivos PKG almacenados en el PC para descargarlos directamente desde la consola.",

    notes:
      "Resulta especialmente útil con archivos PKG grandes que superan la limitación de FAT32.",

    version: "2.0",
    author: "PS3 Community",

    details: [
      {
        title: "¿Qué es PKG Linker?",
        description:
          "Servidor de paquetes PKG.",

        items: [
          "Instalación por red local.",
          "Compatible con HEN.",
          "Compatible con HAN.",
          "No requiere copiar archivos al USB.",
        ],
      },

      {
        title: "Preparar PKG",
        description:
          "Archivos utilizados por el servidor.",

        items: [
          "Copiar PKG a la carpeta del programa.",
          "Abrir PKG Linker.",
          "Seleccionar Rescan.",
          "Actualizar la lista de paquetes.",
        ],
      },

      {
        title: "Configurar la Consola",
        description:
          "Verificar la conectividad.",

        items: [
          "Obtener IP de la PS3.",
          "Ajustes.",
          "Información del sistema.",
          "Anotar dirección IP.",
        ],
      },

      {
        title: "Ping Tool",
        description:
          "Comprobación de conexión.",

        items: [
          "Introducir IP.",
          "Pulsar Ping PS3.",
          "Verificar Success.",
          "Corregir configuración si aparece Timeout.",
        ],
      },

      {
        title: "Configuración HEN/HAN",
        description:
          "Preparación del listado.",

        items: [
          "Server Setup.",
          "Create List.pkg for HAN.",
          "Generar Package_List.pkg.",
          "Preparar instalación.",
        ],
      },

      {
        title: "Iniciar Servidor",
        description:
          "Compartir los paquetes.",

        items: [
          "Start Server.",
          "Esperar notificación.",
          "Minimizar aplicación.",
          "Mantenerla activa.",
        ],
      },

      {
        title: "Package_List.pkg",
        description:
          "Archivo generado automáticamente.",

        items: [
          "Instalar en la PS3.",
          "USB o FTP.",
          "Detectar paquetes compartidos.",
          "Acceder a la lista.",
        ],
      },

      {
        title: "Descargar desde PS3",
        description:
          "Instalación remota.",

        items: [
          "Abrir la herramienta de instalación.",
          "Acceder al servidor.",
          "Seleccionar PKG.",
          "Descargar directamente.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Sin límite FAT32.",
          "Instalación por red.",
          "Ideal para PKG grandes.",
          "No requiere copiar varias veces.",
          "Ahorro de tiempo.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "webMAN MOD",
          "PS3 NET Server",
          "PS3 Game Updates",
          "PkgView",
          "Make Package Custom",
        ],
      },
    ],
  },
},
// PS3Merge
{
  console: "PS3",
  name: "PS3Merge",
  image: "img/PS3/ps3merge.jpg",

  description:
    "Herramienta para Windows que permite unir archivos divididos utilizados por gestores de copias de seguridad de PlayStation 3.",

  website: "http://karmian.org/projects/ps3merge",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/bUpDkDhB#vQpNvXO3lkWPjeq9mut5cg",
    },
  ],

  guide: {
    function:
      "Permite reconstruir archivos divididos en múltiples partes para volver a obtener un único archivo PKG o juego completo.",

    compatibility: {
      Windows: "✅ Compatible",
      PKG: "✅ Compatible",
      FAT32: "✅ Compatible",
      PS3: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "PS3Merge",
      "Archivos divididos",
    ],

    installation: [
      "Descargar PS3Merge.",
      "Extraer ps3merge-1-0-1-0.rar.",
      "Ejecutar ps3merge-1-0-1-0.exe.",
      "Completar la instalación.",
    ],

    usage:
      "Permite unir automáticamente archivos divididos en formato .666xx para recuperar el archivo original.",

    notes:
      "Es especialmente útil para archivos grandes que fueron divididos para poder almacenarse en dispositivos FAT32.",

    version: "1.0.1.0",
    author: "karmian",

    details: [
      {
        title: "¿Qué es PS3Merge?",
        description:
          "Herramienta de reconstrucción.",

        items: [
          "Une archivos fragmentados.",
          "Compatible con formato .666xx.",
          "Proceso automático.",
          "Ideal para PKG grandes.",
        ],
      },

      {
        title: "Preparar Archivos",
        description:
          "Organizar las partes.",

        items: [
          "Reunir todos los fragmentos.",
          "Verificar que no falten partes.",
          "Mantenerlos en una misma carpeta.",
          "Preparar la reconstrucción.",
        ],
      },

      {
        title: "Formato Compatible",
        description:
          "Nombres reconocidos por la aplicación.",

        items: [
          "Nombre.66601",
          "Nombre.66602",
          "Nombre.66603",
          "Nombre.66604",
        ],
      },

      {
        title: "Ejemplo",
        description:
          "Estructura correcta.",

        items: [
          "Beyond Two Souls.66601",
          "Beyond Two Souls.66602",
          "Beyond Two Souls.66603",
          "Beyond Two Souls.66604",
        ],
      },

      {
        title: "Reconstrucción",
        description:
          "Proceso principal.",

        items: [
          "Abrir PS3Merge.",
          "Pulsar Execute.",
          "Seleccionar carpeta.",
          "Esperar la finalización.",
        ],
      },

      {
        title: "Resultado",
        description:
          "Archivo reconstruido.",

        items: [
          "Archivo único.",
          "Contenido completo.",
          "Añadir extensión .pkg si corresponde.",
          "Preparar instalación.",
        ],
      },

      {
        title: "Casos de Uso",
        description:
          "Situaciones habituales.",

        items: [
          "PKG divididos.",
          "Backups PS3.",
          "Transferencias FAT32.",
          "Recuperación de archivos grandes.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Muy ligero.",
          "Proceso sencillo.",
          "Reconstrucción rápida.",
          "Compatible con PS3.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "PKG Linker",
          "PkgView",
          "Make Package Custom",
          "PS3 Game Updates",
          "PARAM SFO Editor",
        ],
      },
    ],
  },
},
// PSN Stuff
{
  console: "PS3",
  name: "PSN Stuff",
  image: "img/PS3/psn-stuff.jpg",

  description:
    "Herramienta para Windows que permite cargar bases de datos, buscar contenido de PlayStation y descargar paquetes junto con sus archivos RAP.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aMAzyAhT#6o7NR-V9OPJil0-jqUEqNQ",
    },
  ],

  guide: {
    function:
      "Permite cargar una base de datos externa, localizar contenido y descargar paquetes junto a sus licencias RAP.",

    compatibility: {
      Windows: "✅ Compatible",
      PS3: "✅ Compatible",
      RAP: "✅ Compatible",
      Legacy: "⚠️ Herramienta Antigua",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "PSN Stuff",
      "Base de datos compatible",
    ],

    installation: [
      "Descargar PSN Stuff.",
      "Extraer los archivos .rar o .zip.",
      "Ejecutar psnstuff_x64.exe o psnstuff.exe.",
      "Cargar la base de datos correspondiente.",
    ],

    usage:
      "Permite buscar contenido mediante una base de datos local, descargar paquetes y guardar los archivos RAP asociados.",

    notes:
      "Los archivos descargados se almacenan en las carpetas downloads y exdata para su posterior transferencia a la consola.",

    version: "3.07.9",
    author: "PSN Stuff Team",

    details: [
      {
        title: "Versiones Disponibles",
        description:
          "Ejecutables incluidos.",

        items: [
          "psnstuff_x64.exe",
          "psnstuff.exe",
          "Compatible con 32 bits",
          "Compatible con 64 bits",
        ],
      },

      {
        title: "Base de Datos",
        description:
          "Primer paso obligatorio.",

        items: [
          "Load Database",
          "Seleccionar db_external",
          "Cargar catálogo",
          "Actualizar contenido",
        ],
      },

      {
        title: "Buscar Contenido",
        description:
          "Explorar la base de datos.",

        items: [
          "Juegos",
          "Aplicaciones",
          "Contenido adicional",
          "Entradas compatibles",
        ],
      },

      {
        title: "Descargar Paquetes",
        description:
          "Obtener los archivos.",

        items: [
          "Seleccionar contenido.",
          "Pulsar Download Package.",
          "Esperar la descarga.",
          "Guardar automáticamente.",
        ],
      },

      {
        title: "Guardar RAP",
        description:
          "Licencias compatibles.",

        items: [
          "Save RAP.",
          "Guardar archivos RAP.",
          "Preparar carpeta exdata.",
          "Copiar a USB posteriormente.",
        ],
      },

      {
        title: "Ubicación de Archivos",
        description:
          "Carpetas generadas.",

        items: [
          "downloads",
          "exdata",
          "Paquetes descargados",
          "Licencias RAP",
        ],
      },

      {
        title: "Transferir a PS3",
        description:
          "Instalación final.",

        items: [
          "Copiar PKG al USB.",
          "Copiar RAP a exdata.",
          "Conectar USB a la consola.",
          "Instalar desde PKG Manager.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Puntos fuertes de la aplicación.",

        items: [
          "Gestión de bases de datos.",
          "Descarga de paquetes.",
          "Gestión de RAP.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Alternativas Modernas",
        description:
          "Opciones recomendadas actualmente.",

        items: [
          "PKGi",
          "VIDEOSTORE",
          "WIKISTORE",
          "ZukoStore",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos para PC.",

        items: [
          "PKG Linker",
          "PS3Merge",
          "PS3 Game Updates",
          "PARAM SFO Editor",
        ],
      },
    ],
  },
},
// Remote Play PS3
{
  console: "PS3",
  name: "Remote Play PS3",
  image: "img/PS3/remote-play.png",

  description:
    "Permite controlar y visualizar una PlayStation 3 desde un ordenador mediante la función Uso a Distancia (Remote Play).",

  website: "https://www.sony.com/electronics/support/articles/00012677",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CFoBCK5Z#0lP-XI9dffJj6bgRzhzVGQ",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/PS3-Pro/Remote-Play/releases",
    },
  ],

  guide: {
    function:
      "Conecta la PS3 al ordenador mediante la red local para visualizar y controlar la consola desde Windows.",

    compatibility: {
      Windows: "✅ Compatible",
      PS3: "✅ Compatible",
      LAN: "✅ Compatible",
      HEN: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "PC o Notebook",
      "Remote Play",
      "Red local",
    ],

    installation: [
      "Extraer Remoteplay 1.1 + patch.",
      "Instalar EP0000248680.exe.",
      "Copiar rmp_dll.dll a la carpeta del programa.",
      "Copiar rmp_launcher.exe a la carpeta del programa.",
      "Ejecutar rmp_launcher.exe.",
    ],

    usage:
      "Permite registrar la PS3 en el ordenador y establecer una conexión remota a través de la red doméstica.",

    notes:
      "Se recomienda que la consola y el ordenador estén conectados a la misma red para obtener la mejor estabilidad.",

    version: "1.1",
    author: "Sony / Comunidad PS3",

    details: [
      {
        title: "Instalación",
        description:
          "Preparar la aplicación.",

        items: [
          "Instalar Remote Play.",
          "Copiar archivos del parche.",
          "Ejecutar rmp_launcher.exe.",
          "Crear acceso directo opcional.",
        ],
      },

      {
        title: "Registrar Dispositivo",
        description:
          "Emparejar la consola.",

        items: [
          "Ajustes.",
          "Ajustes de uso a distancia.",
          "Registrar dispositivo.",
          "Obtener código de registro.",
        ],
      },

      {
        title: "Configurar el PC",
        description:
          "Completar el emparejamiento.",

        items: [
          "Seleccionar Conectar por red doméstica.",
          "Introducir el código.",
          "Guardar configuración.",
          "Preparar la conexión.",
        ],
      },

      {
        title: "Conectar",
        description:
          "Acceso remoto a la consola.",

        items: [
          "Pulsar Conectar.",
          "Ir a Red.",
          "Abrir Uso a distancia.",
          "Esperar el emparejamiento.",
        ],
      },

      {
        title: "Visualización",
        description:
          "Uso desde el ordenador.",

        items: [
          "Ver pantalla de PS3.",
          "Navegar por el XMB.",
          "Control remoto básico.",
          "Administración desde PC.",
        ],
      },

      {
        title: "Consolas con HEN",
        description:
          "Recomendaciones adicionales.",

        items: [
          "Activar HEN antes de conectar.",
          "Montar juegos previamente.",
          "Comprobar conexión estable.",
          "Evitar reinicios durante la sesión.",
        ],
      },

      {
        title: "Requisitos de Red",
        description:
          "Configuración recomendada.",

        items: [
          "Misma red local.",
          "Router estable.",
          "Preferible conexión cableada.",
          "Buena cobertura Wi-Fi.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Control remoto.",
          "Configuración sencilla.",
          "Compatible con Windows.",
          "Funciona en red local.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "PS3 NET Server",
          "webMAN MOD",
          "multiMAN",
          "PS3 Game Updates",
        ],
      },
    ],
  },
},
// Desbloqueador de Trofeos
{
  console: "PS3",
  name: "Desbloqueador de Trofeos",
  image: "img/PS3/desbloquear-trofeos.jpg",

  description:
    "Herramienta antigua relacionada con la gestión de trofeos en PlayStation 3. Su uso puede implicar riesgos para cuentas y consolas.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/rM4hzZya#4oLUeacJvi789DACjgkEMw",
    },
  ],

  guide: {
    function:
      "Proyecto histórico utilizado por algunos usuarios para realizar modificaciones relacionadas con trofeos.",

    compatibility: {
      HEN: "⚠️ Uso bajo responsabilidad",
      CFW: "⚠️ Uso bajo responsabilidad",
      Trofeos: "⚠️ Riesgo",
      Estado: "⚠️ Legacy",
    },

    requirements: [
      "PlayStation 3",
      "Conocimientos avanzados",
      "Acceso FTP",
    ],

    usage:
      "Aplicación de carácter histórico utilizada por parte de la escena PS3.",

    notes:
      "El tutorial original advierte sobre posibles sanciones, bloqueos o restricciones asociadas al uso de este tipo de herramientas.",

    version: "Legacy",
    author: "PS3 Scene",

    details: [
      {
        title: "Estado del Proyecto",
        description: "Información general.",
        items: [
          "Herramienta antigua.",
          "Poco utilizada actualmente.",
          "Proyecto histórico de la escena PS3.",
          "No recomendada para usuarios nuevos.",
        ],
      },

      {
        title: "Advertencia",
        description: "Riesgos indicados.",
        items: [
          "Posibles restricciones de cuenta.",
          "Posibles restricciones de consola.",
          "Uso bajo responsabilidad del usuario.",
          "Se recomienda precaución.",
        ],
      },

      {
        title: "Requisitos",
        description: "Elementos mencionados en el tutorial.",
        items: [
          "Acceso FTP.",
          "PC con Windows.",
          "Archivos adicionales.",
          "Conocimientos avanzados.",
        ],
      },

      {
        title: "Alternativas Recomendadas",
        description: "Opciones más útiles actualmente.",
        items: [
          "Apollo Save Tool",
          "webMAN MOD",
          "Artemis",
          "Administrador de trofeos oficial de PS3",
        ],
      },

      {
        title: "Importante",
        description: "Antes de utilizarla.",
        items: [
          "Realizar copias de seguridad.",
          "Revisar compatibilidad.",
          "Leer toda la documentación disponible.",
          "Comprender los riesgos asociados.",
        ],
      },
    ],
  },
},
// PS3 ISO Tools
{
  console: "PS3",
  name: "PS3 ISO Tools",
  image: "img/PS3/ps3-iso-tools.jpg",

  description:
    "Herramienta para Windows que permite crear, extraer, dividir, unir y modificar imágenes ISO de PlayStation 3.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/uFxxnZZB#p-3HQvPscM2Tcd_mWvupKQ",
    },
  ],

  guide: {
    function:
      "Permite gestionar imágenes ISO de PS3 desde el ordenador incluyendo conversión desde formato carpeta, extracción y división de archivos grandes.",

    compatibility: {
      Windows: "✅ Compatible",
      PS3ISO: "✅ Compatible",
      FAT32: "✅ Compatible",
      CFW: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "PS3 ISO Tools",
      "Juego PS3 en formato carpeta o ISO",
    ],

    installation: [
      "Descargar PS3 ISO Tools.",
      "Extraer PS3 ISO TOOLS V2.2.rar.",
      "Ejecutar PS3_ISO_TOOLS V2.2.exe.",
    ],

    usage:
      "Permite convertir juegos en formato carpeta a ISO, extraer ISOs existentes y administrar imágenes para su uso en PS3.",

    notes:
      "Es una de las herramientas más utilizadas para preparar juegos compatibles con webMAN MOD, IRISMAN y PS3 NET Server.",

    version: "2.2",
    author: "PS3 Scene",

    details: [
      {
        title: "Create ISO",
        description:
          "Crear imágenes ISO.",

        items: [
          "Convertir juegos formato carpeta.",
          "Generar ISO compatible.",
          "Seleccionar carpeta origen.",
          "Elegir carpeta destino.",
        ],
      },

      {
        title: "Extract ISO",
        description:
          "Extraer contenido.",

        items: [
          "Abrir ISO existente.",
          "Extraer archivos.",
          "Recuperar estructura original.",
          "Guardar en el PC.",
        ],
      },

      {
        title: "Split ISO",
        description:
          "Dividir archivos grandes.",

        items: [
          "Compatible con FAT32.",
          "División en segmentos.",
          "Ideal para USB.",
          "Archivos superiores a 4 GB.",
        ],
      },

      {
        title: "Join ISO",
        description:
          "Reconstruir imágenes divididas.",

        items: [
          "Unir partes divididas.",
          "Recuperar ISO completa.",
          "Compatible con archivos split.",
          "Proceso automático.",
        ],
      },

      {
        title: "Modify ISO",
        description:
          "Editar una ISO existente.",

        items: [
          "Modificar contenido.",
          "Actualizar estructura.",
          "Preparar nuevas versiones.",
          "Gestión avanzada.",
        ],
      },

      {
        title: "Patch ISO",
        description:
          "Aplicar modificaciones.",

        items: [
          "Parchear ISO.",
          "Compatibilidad adicional.",
          "Configuraciones avanzadas.",
          "Proceso integrado.",
        ],
      },

      {
        title: "Crear una ISO",
        description:
          "Proceso básico.",

        items: [
          "Seleccionar Create ISO.",
          "Elegir carpeta del juego.",
          "Definir carpeta de salida.",
          "Esperar la conversión.",
        ],
      },

      {
        title: "Resultado",
        description:
          "Archivos generados.",

        items: [
          "ISO lista para usar.",
          "Registro del proceso.",
          "Información de conversión.",
          "Archivo compatible con PS3.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Funciones principales.",

        items: [
          "Todo en una sola aplicación.",
          "Compatible con ISOs PS3.",
          "Ideal para webMAN MOD.",
          "Compatible con FAT32.",
          "Conversión sencilla.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "PS3Merge",
          "PS3 NET Server",
          "PKG Linker",
          "Make Package Custom",
          "PARAM SFO Editor",
        ],
      },
    ],
  },
},
// PS2 en PS3 con PC
{
  console: "PS3",
  name: "PS2 en PS3 con PC",
  image: "img/PS3/ps2-ps3-con-pc.jpg",

  description:
    "Guía para preparar juegos de PlayStation 2 desde Windows y utilizarlos en consolas PS3 con HEN mediante PS2 Classics.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "TU_LINK_https://mega.nz/folder/uFxxnZZB#p-3HQvPscM2Tcd_mWvupKQMEGA",
    },
  ],

  guide: {
    function:
      "Permite convertir juegos de PS2, crear archivos compatibles con PS3 y generar paquetes instalables desde un ordenador.",

    compatibility: {
      HEN: "✅ Compatible",
      PS2ISO: "✅ Compatible",
      Windows: "✅ Compatible",
      PS2Classics: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3 con HEN",
      "PC con Windows",
      "Juego PS2 en formato ISO",
      "PS2 Classics GUI",
      "PS2 Classics Launcher",
    ],

    installation: [
      "Descargar el pack del tutorial.",
      "Extraer los archivos.",
      "Instalar PS2 Classics Launcher en la PS3.",
      "Preparar exdata si es necesario.",
    ],

    usage:
      "Permite convertir juegos PS2 a formato compatible con PS3 y ejecutarlos mediante PS2 Classics Launcher.",

    notes:
      "Se recomienda comprobar la compatibilidad del juego antes de comenzar el proceso.",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Contenido del Pack",
        description: "Herramientas incluidas.",
        items: [
          "PS2 Classics GUI",
          "OpenSplit",
          "PS2 Classics Launcher",
          "Archivos exdata",
        ],
      },

      {
        title: "Compatibilidad",
        description: "Antes de convertir.",
        items: [
          "Revisar compatibilidad PS2 Classics.",
          "No todos los juegos funcionan igual.",
          "Algunos requieren configuraciones específicas.",
        ],
      },

      {
        title: "Cifrar ISO",
        description: "Convertir la imagen de PS2.",
        items: [
          "Abrir PS2 Classics GUI.",
          "Seleccionar ISO.",
          "Configurar DVD5/DVD9.",
          "Usar Encrypt.",
          "Generar ISO.BIN.ENC.",
        ],
      },

      {
        title: "Crear PKG",
        description: "Generar instalador para PS3.",
        items: [
          "Abrir pestaña Make PKG.",
          "Seleccionar ISO.BIN.ENC.",
          "Generar paquete.",
          "Guardar PKG resultante.",
        ],
      },

      {
        title: "Personalizar Carátulas",
        description: "Modificar apariencia.",
        items: [
          "ICON0.PNG",
          "PIC0.PNG",
          "Imágenes personalizadas.",
          "Carátulas propias.",
        ],
      },

      {
        title: "Archivos Grandes",
        description: "Compatibilidad FAT32.",
        items: [
          "Usar OpenSplit.",
          "Dividir archivos grandes.",
          "Crear partes .666xx.",
          "Preparar USB FAT32.",
        ],
      },

      {
        title: "Transferencia a PS3",
        description: "Mover archivos a la consola.",
        items: [
          "USB FAT32.",
          "FTP.",
          "webMAN MOD.",
          "Copiar a PS2ISO.",
        ],
      },

      {
        title: "PS2 Classics Launcher",
        description: "Ejecución de juegos.",
        items: [
          "Instalar Launcher.",
          "Instalar exdata.",
          "Montar juego.",
          "Ejecutar desde PS3.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description: "Complementos recomendados.",
        items: [
          "webMAN MOD",
          "PS2CONFIG",
          "RetroXMB",
          "PS3 ISO Tools",
          "OpenSplit",
        ],
      },

      {
        title: "Consejos",
        description: "Buenas prácticas.",
        items: [
          "Comprobar compatibilidad antes de convertir.",
          "Mantener copia de la ISO original.",
          "Configurar ventilación adecuada.",
          "Usar nombres simples para los juegos.",
        ],
      },
    ],
  },
},
// Crear DVD o BD-R Juegos
{
  console: "PS3",
  name: "Crear DVD o BD-R Juegos",
  image: "img/PS3/crear-dvd-bdr.jpg",

  description:
    "Guía para crear copias de seguridad de juegos propios en formato ISO y grabarlas posteriormente en DVD o BD-R.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/7J4HCZTY#NuDJJAx4fnIEvYmzIabN5g",
    },
  ],

  guide: {
    function:
      "Permite crear una imagen ISO de un juego propio y prepararla para grabación en un disco óptico.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      Windows: "✅ Compatible",
      ISO: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "PC con Windows",
      "multiMAN",
      "PS3 ISO Tools",
      "Cobra ODE GenPS3iso",
      "DVD o BD-R",
    ],

    installation: [
      "Instalar multiMAN en la consola.",
      "Instalar las herramientas en el PC.",
      "Preparar una unidad USB FAT32.",
      "Disponer de un grabador compatible.",
    ],

    usage:
      "Permite crear una imagen ISO de un juego y prepararla para grabación utilizando herramientas de PC.",

    notes:
      "Se recomienda utilizar velocidades de grabación bajas para mejorar la compatibilidad del disco.",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Crear Copia del Juego",
        description:
          "Volcar el contenido al USB.",

        items: [
          "Abrir multiMAN.",
          "Seleccionar el disco original.",
          "Usar la opción Copiar.",
          "Guardar en USB externo.",
        ],
      },

      {
        title: "Carpeta Resultante",
        description:
          "Archivos obtenidos.",

        items: [
          "Carpeta GAMES.",
          "Juego en formato carpeta.",
          "Datos preparados para conversión.",
        ],
      },

      {
        title: "Crear ISO",
        description:
          "Conversión en el PC.",

        items: [
          "Abrir Cobra ODE GenPS3iso.",
          "Seleccionar carpeta del juego.",
          "Elegir carpeta de destino.",
          "Generar imagen ISO.",
        ],
      },

      {
        title: "Configuración Recomendada",
        description:
          "Opciones utilizadas en el tutorial.",

        items: [
          "Cancelar IRD.",
          "Cancelar Split.",
          "Esperar la conversión completa.",
        ],
      },

      {
        title: "Grabar Disco",
        description:
          "Preparar DVD o BD-R.",

        items: [
          "Utilizar ImgBurn.",
          "Utilizar Nero.",
          "Seleccionar la ISO.",
          "Grabar a velocidad baja.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Tipos de medios.",

        items: [
          "DVD compatibles.",
          "BD-R compatibles.",
          "ISO PS3.",
          "Copias de seguridad propias.",
        ],
      },

      {
        title: "Primer Inicio",
        description:
          "Comprobaciones básicas.",

        items: [
          "Insertar el disco.",
          "Verificar detección.",
          "Comprobar instalación.",
          "Actualizar datos si es necesario.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "multiMAN",
          "PS3 ISO Tools",
          "PS3 NET Server",
          "webMAN MOD",
          "PS3Merge",
        ],
      },

      {
        title: "Consejos",
        description:
          "Buenas prácticas.",

        items: [
          "Mantener el juego original.",
          "Usar discos de buena calidad.",
          "Grabar a baja velocidad.",
          "Verificar la ISO antes de grabar.",
        ],
      },
    ],
  },
},
// PS3Dec
{
  console: "PS3",
  name: "PS3Dec",
  image: "img/PS3/ps3dec.jpg",

  description:
    "Utilidad histórica para Windows relacionada con el análisis y procesamiento de imágenes ISO de PlayStation 3.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aBoSnIiD#IB8M7YbOF1ruPypEX5Af2w",
    },
  ],

  guide: {
    function:
      "Herramienta utilizada tradicionalmente por usuarios avanzados para trabajar con determinadas imágenes ISO de PS3.",

    compatibility: {
      Windows: "✅ Compatible",
      PS3ISO: "✅ Compatible",
      Estado: "⚠️ Legacy",
    },

    requirements: [
      "PC con Windows",
      "PS3Dec",
      "Conocimientos avanzados",
    ],

    usage:
      "Herramienta orientada al análisis y procesamiento de imágenes ISO.",

    notes:
      "Actualmente suelen utilizarse herramientas más modernas y sencillas para la gestión de juegos y copias de seguridad.",

    version: "Legacy",
    author: "PS3 Scene",

    details: [
      {
        title: "Estado del Proyecto",
        description: "Información general.",
        items: [
          "Herramienta clásica de PC.",
          "Uso avanzado.",
          "Proyecto histórico.",
          "Poco utilizada actualmente.",
        ],
      },

      {
        title: "Entorno de Trabajo",
        description: "Requisitos generales.",
        items: [
          "Windows.",
          "Línea de comandos.",
          "Archivos ISO.",
          "Gestión de imágenes.",
        ],
      },

      {
        title: "Casos de Uso",
        description: "Utilización habitual.",
        items: [
          "Análisis de ISOs.",
          "Verificación de archivos.",
          "Procesamiento de imágenes.",
          "Investigación técnica.",
        ],
      },

      {
        title: "Alternativas Actuales",
        description: "Herramientas más utilizadas.",
        items: [
          "PS3 ISO Tools",
          "webMAN MOD",
          "IRISMAN",
          "multiMAN",
        ],
      },

      {
        title: "Importante",
        description: "Consideraciones.",
        items: [
          "Herramienta para usuarios avanzados.",
          "Realizar copias de seguridad.",
          "Verificar compatibilidad.",
          "Mantener los archivos originales.",
        ],
      },
    ],
  },
},
// PS3 Disc Dumper
{
  console: "PS3",
  name: "PS3 Disc Dumper",
  image: "img/PS3/ps3-disc-dumper.png",

  description:
    "Herramienta para Windows que permite extraer juegos de PS3 a formato carpeta desde imágenes de disco compatibles.",

  website: "https://github.com/13xforever/ps3-disc-dumper",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aEpQCCrJ#8Lv2nlj9BKfR0F8vvmIDVA",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/13xforever/ps3-disc-dumper/releases",
    },
  ],

  guide: {
    function:
      "Permite convertir imágenes compatibles de PS3 a formato carpeta para utilizarlas posteriormente con herramientas como webMAN MOD o PS3 ISO Tools.",

    compatibility: {
      Windows: "✅ Compatible",
      PS3: "✅ Compatible",
      ISO: "✅ Compatible",
      FormatoCarpeta: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "PS3 Disc Dumper",
      "Imagen ISO compatible",
    ],

    installation: [
      "Descargar PS3 Disc Dumper.",
      "Extraer el archivo ZIP.",
      "Ejecutar ps3-disc-dumper.exe.",
    ],

    usage:
      "Permite obtener una carpeta de juego compatible lista para copiar a USB, HDD o convertir nuevamente a ISO.",

    notes:
      "Los juegos extraídos pueden utilizarse posteriormente con PS3 ISO Tools o gestores compatibles.",

    version: "Actual",
    author: "13xforever",

    details: [
      {
        title: "¿Qué es PS3 Disc Dumper?",
        description:
          "Conversión de imágenes a formato carpeta.",

        items: [
          "Lectura automática.",
          "Extracción sencilla.",
          "Salida en formato carpeta.",
          "Compatible con Windows.",
        ],
      },

      {
        title: "Preparar la ISO",
        description:
          "Primer paso del proceso.",

        items: [
          "Montar la imagen ISO.",
          "Verificar acceso al contenido.",
          "Comprobar que la ISO sea reconocida.",
        ],
      },

      {
        title: "Detectar Juego",
        description:
          "Análisis automático.",

        items: [
          "Abrir ps3-disc-dumper.exe.",
          "Detectar disco montado.",
          "Verificar información.",
          "Preparar extracción.",
        ],
      },

      {
        title: "Extraer Juego",
        description:
          "Proceso principal.",

        items: [
          "Pulsar Start.",
          "Esperar extracción.",
          "Crear carpeta del juego.",
          "Generar estructura completa.",
        ],
      },

      {
        title: "Resultado",
        description:
          "Archivos obtenidos.",

        items: [
          "Juego formato carpeta.",
          "Nombre + ID del juego.",
          "Archivos listos para usar.",
          "Compatible con gestores PS3.",
        ],
      },

      {
        title: "Convertir nuevamente a ISO",
        description:
          "Proceso opcional.",

        items: [
          "Usar PS3 ISO Tools.",
          "Crear nueva ISO.",
          "Guardar resultado.",
          "Preparar para webMAN MOD.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Uso recomendado.",

        items: [
          "webMAN MOD",
          "IRISMAN",
          "multiMAN",
          "PS3 ISO Tools",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Fácil utilización.",
          "Conversión rápida.",
          "Compatible con Windows.",
          "Ideal para formato carpeta.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "PS3 ISO Tools",
          "PS3Merge",
          "PKG Linker",
          "PS3 NET Server",
        ],
      },
    ],
  },
},
// Crear Coldboot Personalizado
{
  console: "PS3",
  name: "Crear Coldboot Personalizado",
  image: "img/PS3/coldboot.jpg",

  description:
    "Guía para crear e instalar un Coldboot personalizado en PlayStation 3 utilizando imágenes propias y herramientas de PC.",

  website: "https://github.com/PS3Xploit/coldboot-installer",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/yFRXDKIR#EAkPPdyE48NVFJTjl5pyNA",
    },
  ],

  guide: {
    function:
      "Permite crear una animación de inicio personalizada para modificar el logotipo mostrado durante el arranque de la consola.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      Windows: "✅ Compatible",
      Personalización: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "PC con Windows",
      "Make Package Custom",
      "Easy Static RAF Converter",
      "Imagen personalizada",
    ],

    installation: [
      "Descargar el pack Coldboot.",
      "Extraer los archivos.",
      "Preparar la imagen personalizada.",
      "Generar el archivo Coldboot.raf.",
      "Crear el PKG personalizado.",
    ],

    usage:
      "Permite reemplazar el logotipo de inicio de PlayStation 3 por una imagen personalizada.",

    notes:
      "Se recomienda conservar una copia del Coldboot original para restaurarlo si es necesario.",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Contenido del Pack",
        description:
          "Archivos incluidos.",

        items: [
          "Make Package Custom",
          "COLDBOOT.png",
          "COLDBOOT.psd",
          "Easy Static RAF Converter",
        ],
      },

      {
        title: "Preparar Imagen",
        description:
          "Diseño del nuevo Coldboot.",

        items: [
          "Imagen PNG.",
          "Resolución alta.",
          "Preferiblemente 1920x1080.",
          "Diseño personalizado.",
        ],
      },

      {
        title: "Convertir Imagen",
        description:
          "Generar archivo RAF.",

        items: [
          "Abrir Easy Static RAF Converter.",
          "Seleccionar imagen.",
          "Visualizar Preview.",
          "Usar Convert.",
        ],
      },

      {
        title: "Archivos Generados",
        description:
          "Resultado de la conversión.",

        items: [
          "Coldboot.raf",
          "Preview.png",
          "Vista previa",
          "Archivo final PS3",
        ],
      },

      {
        title: "HEN",
        description:
          "Ruta utilizada en tutorial.",

        items: [
          "custom/dev_rewrite/vsh/resource",
          "Copiar Coldboot.raf",
          "Preparar paquete final",
        ],
      },

      {
        title: "CFW",
        description:
          "Ruta utilizada en tutorial.",

        items: [
          "custom/dev_blind/vsh/resource",
          "Copiar Coldboot.raf",
          "Preparar paquete final",
        ],
      },

      {
        title: "Crear PKG",
        description:
          "Generar instalador.",

        items: [
          "Abrir make.bat",
          "Esperar proceso",
          "Generar custom.pkg",
          "Preparar instalación",
        ],
      },

      {
        title: "Instalar en PS3",
        description:
          "Aplicar modificación.",

        items: [
          "Copiar PKG al USB",
          "Instalar desde PKG Manager",
          "Reiniciar consola",
          "Verificar cambios",
        ],
      },

      {
        title: "Restaurar Original",
        description:
          "Volver al estado inicial.",

        items: [
          "Instalar Coldboot original.pkg",
          "Reiniciar consola",
          "Restaurar el diseño original",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "Make Package Custom",
          "PS3 Extra Mods",
          "Monstruoso T-PACK",
          "Logos HEN",
          "PSN Icons Collection",
        ],
      },
    ],
  },
},
// PS3 Toolset
{
  console: "PS3",
  name: "PS3 Toolset",
  image: "img/PS3/ps3-toolset.jpg",

  description:
    "Herramienta para Windows especializada en la creación de temas, coldboots, waves, avatares y otros elementos de personalización para PlayStation 3.",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/nFwXkS7A#zXI9YDNhirIoD9Vy_WXe8Q",
    },
    {
      name: "Web Oficial",
      url: "TU_WEB_OFICIAL",
    },
  ],

  guide: {
    function:
      "Permite crear y personalizar distintos elementos visuales utilizados por PlayStation 3 desde una única aplicación.",

    compatibility: {
      Windows: "✅ Compatible",
      Temas: "✅ Compatible",
      Coldboot: "✅ Compatible",
      Avatares: "✅ Compatible",
      Personalizacion: "✅ Compatible",
    },

    requirements: [
      "PC o Notebook",
      "Windows 7 o superior",
      "PS3 Toolset",
    ],

    installation: [
      "Descargar PS3 Toolset.",
      "Descomprimir el archivo ZIP.",
      "Extraer la carpeta.",
      "Ejecutar PS3 Toolset.exe.",
    ],

    usage:
      "Permite acceder a distintas herramientas de personalización desde el menú Tools.",

    notes:
      "Es una de las herramientas más completas para personalización avanzada de PlayStation 3.",

    version: "Actual",
    author: "PS3 Toolset Team",

    details: [
      {
        title: "Theme Builder",
        description:
          "Creación de temas personalizados.",

        items: [
          "Crear temas P3T.",
          "Modificar iconos.",
          "Agregar fondos.",
          "Personalizar sonidos.",
        ],
      },

      {
        title: "Coldboot Builder",
        description:
          "Creación de logotipos de inicio.",

        items: [
          "Coldboots personalizados.",
          "Vista previa.",
          "Exportación de archivos.",
          "Instalación mediante PKG.",
        ],
      },

      {
        title: "Wave Builder",
        description:
          "Personalización del fondo dinámico.",

        items: [
          "Modificar Waves.",
          "Cambiar apariencia XMB.",
          "Diseños personalizados.",
        ],
      },

      {
        title: "Avatar Maker",
        description:
          "Creación de avatares.",

        items: [
          "Diseño de avatares.",
          "Imágenes personalizadas.",
          "Exportación compatible.",
        ],
      },

      {
        title: "Theme Tools",
        description:
          "Herramientas para temas.",

        items: [
          "Editar temas existentes.",
          "Crear nuevos diseños.",
          "Modificar recursos visuales.",
          "Compatibilidad P3T.",
        ],
      },

      {
        title: "Personalización",
        description:
          "Elementos compatibles.",

        items: [
          "Themes",
          "Coldboot",
          "Waves",
          "Avatares",
          "Fondos",
          "Iconos",
        ],
      },

      {
        title: "Flujo de Trabajo",
        description:
          "Uso general del programa.",

        items: [
          "Abrir PS3 Toolset.",
          "Entrar en Tools.",
          "Seleccionar herramienta.",
          "Crear recurso.",
          "Exportar resultado.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Características principales.",

        items: [
          "Todo en una sola aplicación.",
          "Interfaz sencilla.",
          "Múltiples herramientas.",
          "Orientado a PS3.",
        ],
      },

      {
        title: "Herramientas Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "Make Package Custom",
          "Crear Coldboot Personalizado",
          "PS3 Extra Mods",
          "Monstruoso T-PACK",
          "Iconos Personalizados",
        ],
      },
    ],
  },
},
// PS3netsrv Android
{
  console: "PS3",
  name: "PS3netsrv Android",
  image: "img/PS3/ps3netsrv-android.jpg",

  description:
    "Aplicación para Android que permite compartir juegos en formato ISO desde un teléfono móvil hacia PlayStation 3 mediante webMAN MOD.",

  website: "https://github.com/jhonathanc/ps3netsrv-android",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/7domkI6C#BK0UpNdVJKYQ1EVWqFciOw",
    },
    {
      name: "GitHub Releases",
      url: "https://github.com/jhonathanc/ps3netsrv-android/releases",
    },
  ],

  guide: {
    function:
      "Permite utilizar un dispositivo Android como servidor de juegos para PlayStation 3 mediante la red local.",

    compatibility: {
      Android: "✅ 4.0.1 o superior",
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      webMAN: "✅ Requerido",
      LAN: "✅ Requerido",
    },

    requirements: [
      "Android 4.0.1 o superior",
      "PS3 con webMAN MOD",
      "Red Wi-Fi local",
      "Juegos en formato ISO",
    ],

    installation: [
      "Instalar app-debug.apk.",
      "Copiar las ISOs al teléfono.",
      "Crear una carpeta GAMES.",
      "Configurar la ruta de los juegos.",
    ],

    usage:
      "Comparte las ISOs almacenadas en Android para que webMAN MOD las detecte y ejecute mediante la red local.",

    notes:
      "La PS3 y el teléfono deben estar conectados a la misma red Wi-Fi.",

    version: "Actual",
    author: "PS3 Scene",

    details: [
      {
        title: "¿Qué es?",
        description:
          "Servidor PS3NETSRV para Android.",

        items: [
          "Streaming de ISOs.",
          "Compatible con webMAN MOD.",
          "No requiere PC.",
          "Servidor desde el móvil.",
        ],
      },

      {
        title: "Preparar Juegos",
        description:
          "Organización recomendada.",

        items: [
          "Crear carpeta GAMES.",
          "Copiar ISOs al teléfono.",
          "Mantener nombres simples.",
          "Verificar almacenamiento suficiente.",
        ],
      },

      {
        title: "Configurar Aplicación",
        description:
          "Seleccionar ubicación.",

        items: [
          "Abrir aplicación.",
          "Entrar en Configuración.",
          "Seleccionar ruta de juegos.",
          "Guardar cambios.",
        ],
      },

      {
        title: "Iniciar Servidor",
        description:
          "Activar PS3NETSRV.",

        items: [
          "Volver a la pantalla principal.",
          "Iniciar servidor.",
          "Verificar IP mostrada.",
          "Mantener aplicación abierta.",
        ],
      },

      {
        title: "Configurar webMAN MOD",
        description:
          "Conectar la PS3.",

        items: [
          "Abrir Configuración webMAN.",
          "Buscar juegos por LAN.",
          "Agregar IP del teléfono.",
          "Guardar configuración.",
        ],
      },

      {
        title: "Actualizar Biblioteca",
        description:
          "Detectar juegos compartidos.",

        items: [
          "Actualizar juegos de webMAN.",
          "Actualizar XMB.",
          "Refrescar lista web.",
          "Verificar detección.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "No requiere ordenador.",
          "Configuración sencilla.",
          "Compatible con Android.",
          "Aprovecha almacenamiento del móvil.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "webMAN MOD",
          "PS3 NET Server",
          "IRISMAN",
          "multiMAN",
        ],
      },
    ],
  },
},
// Desinstalar HEN
{
  console: "PS3",
  name: "Desinstalar HEN",
  image: "img/PS3/desinstalar-hen.jpg",

  description:
    "Guía para eliminar HEN de una PlayStation 3 y restaurar la consola a un estado limpio mediante restauración y actualización del sistema.",

  website: "https://www.playstation.com/es-cl/support/hardware/ps3/system-software/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/mRRUySZJ#HZCB43qooux9ibJZdZWEKQ",
    },
  ],

  guide: {
    function:
      "Permite eliminar la instalación de HEN y restaurar completamente la consola mediante una reinstalación del firmware.",

    compatibility: {
      HEN: "✅ Compatible",
      OFW: "✅ Compatible",
      HFW: "✅ Compatible",
      USB: "✅ FAT32",
    },

    requirements: [
      "PlayStation 3 con HEN",
      "USB FAT32",
      "Archivo PS3UPDAT.PUP",
    ],

    installation: [
      "Descargar el firmware PS3.",
      "Preparar el USB.",
      "Acceder al Modo Seguro.",
      "Restablecer la consola.",
      "Reinstalar el firmware.",
    ],

    usage:
      "Permite eliminar configuraciones, aplicaciones y modificaciones asociadas a HEN.",

    notes:
      "Se recomienda realizar una copia de seguridad antes de comenzar, ya que el proceso elimina juegos, aplicaciones y configuraciones almacenadas en la consola.",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Antes de Empezar",
        description:
          "Preparación recomendada.",

        items: [
          "Respaldar partidas guardadas.",
          "Respaldar juegos PSP.",
          "Respaldar juegos PS1.",
          "Respaldar juegos PS2.",
          "Respaldar juegos PS3.",
        ],
      },

      {
        title: "Descargar Firmware",
        description:
          "Preparar la actualización.",

        items: [
          "Obtener PS3UPDAT.PUP.",
          "Usar versión compatible.",
          "Guardar el archivo original.",
        ],
      },

      {
        title: "Preparar USB",
        description:
          "Estructura correcta.",

        items: [
          "PS3",
          "UPDATE",
          "PS3UPDAT.PUP",
          "USB FAT32",
        ],
      },

      {
        title: "Modo Seguro",
        description:
          "Acceso a Recovery Mode.",

        items: [
          "Apagar la consola.",
          "Entrar al Modo Seguro.",
          "Conectar mando por USB.",
          "Acceder al menú Recovery.",
        ],
      },

      {
        title: "Restablecer Sistema",
        description:
          "Eliminar datos almacenados.",

        items: [
          "Opción 5.",
          "Restablecer sistema PS3.",
          "Eliminar contenido instalado.",
          "Volver al estado inicial.",
        ],
      },

      {
        title: "Actualizar Sistema",
        description:
          "Instalar firmware limpio.",

        items: [
          "Opción 6.",
          "Actualización del sistema.",
          "Detectar USB.",
          "Instalar firmware.",
        ],
      },

      {
        title: "Resultado Final",
        description:
          "Estado esperado.",

        items: [
          "Consola reiniciada.",
          "Sistema actualizado.",
          "Configuración inicial.",
          "Sin aplicaciones instaladas.",
        ],
      },

      {
        title: "Importante",
        description:
          "Información adicional.",

        items: [
          "Realizar copia de seguridad antes de comenzar.",
          "Mantener la consola conectada durante la actualización.",
          "No interrumpir el proceso.",
          "Verificar el firmware utilizado.",
        ],
      },

      {
        title: "Tutoriales Relacionados",
        description:
          "Guías recomendadas.",

        items: [
          "Instalar HEN",
          "Actualizar PS3",
          "Modo Seguro PS3",
          "Recuperar Sistema PS3",
        ],
      },
    ],
  },
},
// Menú Secreto PS2
{
  console: "PS3",
  name: "Menú Secreto PS2",
  image: "img/PS3/menu-secreto-ps2.jpg",

  description:
    "Menú oculto del emulador de PlayStation 2 en PS3 que permite ajustar opciones gráficas, rendimiento y compatibilidad en determinados juegos.",

  guide: {
    function:
      "Permite acceder a configuraciones avanzadas del emulador de PS2 integrado en PlayStation 3.",

    compatibility: {
      HEN: "✅ Compatible",
      CFW: "✅ Compatible",
      PS2Classics: "✅ Compatible",
      PS2ISO: "✅ Compatible",
    },

    requirements: [
      "PlayStation 3",
      "Juego de PlayStation 2 ejecutándose",
    ],

    installation: [
      "No requiere instalación.",
      "No requiere aplicaciones adicionales.",
      "Acceso desde el juego en ejecución.",
    ],

    usage:
      "Permite modificar parámetros internos del emulador PS2 para mejorar compatibilidad o rendimiento en algunos títulos.",

    notes:
      "Los resultados pueden variar según cada juego. Algunos cambios pueden mejorar el rendimiento mientras que otros pueden no producir diferencias visibles.",

    version: "Integrado",
    author: "Sony",

    details: [
      {
        title: "¿Qué es?",
        description:
          "Menú oculto del emulador PS2.",

        items: [
          "Opciones avanzadas.",
          "Configuración interna.",
          "Ajustes de compatibilidad.",
          "Mejoras de rendimiento.",
        ],
      },

      {
        title: "Acceso al Menú",
        description:
          "Activación durante el juego.",

        items: [
          "Abrir menú PS durante un juego PS2.",
          "Activar combinación especial.",
          "Esperar varios segundos.",
          "Acceder al menú avanzado.",
        ],
      },

      {
        title: "Configuración",
        description:
          "Opciones disponibles.",

        items: [
          "Ajustes gráficos.",
          "Parámetros de compatibilidad.",
          "Configuraciones de rendimiento.",
          "Opciones del emulador.",
        ],
      },

      {
        title: "VSYNC DELAY",
        description:
          "Parámetro de sincronización.",

        items: [
          "Permite realizar pruebas.",
          "Puede mejorar algunos juegos.",
          "Configuración opcional.",
        ],
      },

      {
        title: "L2H Improvement",
        description:
          "Ajuste adicional del emulador.",

        items: [
          "Activar o desactivar.",
          "Probar compatibilidad.",
          "Evaluar rendimiento.",
        ],
      },

      {
        title: "Guardar Cambios",
        description:
          "Aplicar la configuración.",

        items: [
          "Guardar ajustes.",
          "Salir del menú.",
          "Reiniciar el juego.",
          "Comprobar resultados.",
        ],
      },

      {
        title: "Casos de Uso",
        description:
          "Situaciones habituales.",

        items: [
          "Problemas gráficos.",
          "Rendimiento irregular.",
          "Compatibilidad PS2.",
          "Pruebas avanzadas.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Sin instalar aplicaciones.",
          "Configuración avanzada.",
          "Integrado en PS3.",
          "Compatible con juegos PS2.",
        ],
      },

      {
        title: "Tutoriales Relacionados",
        description:
          "Herramientas para PS2 en PS3.",

        items: [
          "PS2 en PS3 con PC",
          "Convertir ISO de PS2 sin PC",
          "PS2CONFIG",
          "PS2 Classics Manager",
          "RetroXMB",
        ],
      },
    ],
  },
},

//Falta 
//06- FTP - Retro Online - UMS
//08- SABÍAS QUE EL SERIAL de tu PS3 TE PUEDE SERVIR PARA ALGO
//SaveData Consolas PS1 a PS3
//Compatividad PS1,PS2,PSP Revisar si es necesario
];