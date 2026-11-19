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

// webMAN MOD
{
    console: "PS3",
    name: "webMAN MOD",
    image: "img/webman.jpg",
    description: "Administrador de juegos para PS3.",

    guide: {

    function:
        "Administrador de juegos para PlayStation 3.",

    compatibility: {
        HEN: "✅ Compatible",
        CFW: "✅ Compatible"
    },

    requirements: [
        "PS3 modificada"
    ],

    installation: [
        "Instalar PKG.",
        "Reiniciar consola."
    ],

    usage:
        "Montar juegos y administrar recursos.",

    notes:
        "Permite controlar ventiladores y temperatura.",

    version: "Latest",

    author: "aldostools"
},

    website: "https://github.com/aldostools/webMAN-MOD",
    downloads: [
        {
            name: "GitHub",
            url: "https://github.com/aldostools/webMAN-MOD/releases"
        },
        {
            name: "MEGA",
            url: "https://mega.nz/"
        }
    ]
},
// multiMAN
{
    console: "PS3",
    name: "multiMAN",
    image: "img/multiman.png",
    description: "Gestor de backups.",

    guide: {

    function:
        "Administrador de backups y archivos para PS3.",

    compatibility: {
        CFW: "✅ Compatible",
        HEN: "✅ Compatible"
    },

    requirements: [
        "PS3 modificada"
    ],

    installation: [
        "Instalar PKG."
    ],

    usage:
        "Escanear y ejecutar juegos instalados.",

    notes:
        "Uno de los gestores clásicos de PS3.",

    version: "Latest",

    author: "deank"
},

    website: "https://store.brewology.com",
    downloads: [
        {
            name: "GitHub",
            url: "https://github.com/deank/multiMAN/releases"
        },
        {
            name: "MEGA",
            url: "https://mega.nz/"
        },
        {
            name: "Brewology",
            url: "https://store.brewology.com"
        },
        {
            name: "Caratulas",
            url: "https://github.com/deank/multiMAN/releases"
        }
    ]
},


];