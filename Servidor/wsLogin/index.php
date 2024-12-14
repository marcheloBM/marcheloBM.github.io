<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Verificar Disponibilidad del Web Service</title>
</head>
<body>
    <h1>Verificar Disponibilidad del Web Service</h1>
    <?php
    // URL del servicio web que quieres verificar
    $url = 'http://marchelobm.kesug.com/wsLogin/jsonListar.php';

    // Intenta acceder al servicio web
    $response = @file_get_contents($url);

    // Verifica si se obtuvo una respuesta
    if ($response !== false) {
        echo '<p>El servicio web Listar está disponible.</p>';
    } else {
        echo '<p>El servicio web no está disponible en este momento.</p>';
    }
    ?>
</body>
</html>