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