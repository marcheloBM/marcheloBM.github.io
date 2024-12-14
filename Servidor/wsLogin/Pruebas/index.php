<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Archivos HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .button-container {
            margin-bottom: 10px;
        }
        .button-container button {
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Archivos HTML en la Carpeta</h1>
    <?php
    // Ruta de la carpeta que contiene los archivos HTML
    $dir = '.'; // Cambia esta ruta a la ruta real de tu carpeta

    // Abrir el directorio
    if ($handle = opendir($dir)) {
        // Leer todos los archivos de la carpeta
        while (false !== ($entry = readdir($handle))) {
            // Verificar si el archivo tiene la extensión .html
            if (pathinfo($entry, PATHINFO_EXTENSION) === 'html') {
                echo '<div class="button-container">';
                echo '<button onclick="location.href=\'' . $dir . '/' . $entry . '\'">' . htmlspecialchars($entry) . '</button>';
                echo '</div>';
            }
        }
        // Cerrar el directorio
        closedir($handle);
    } else {
        echo '<p>No se pudo abrir la carpeta.</p>';
    }
    ?>
</body>
</html>
