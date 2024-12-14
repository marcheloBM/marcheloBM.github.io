<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

require_once 'Conexion.php'; // Asegúrate de que el nombre del archivo es correcto

// Crear una instancia de la clase Conexion
$conexion = new Conexion();

try {
    // Obtener la conexión PDO
    $pdo = $conexion->obtenerConexion();

    // Verificar si se recibieron los parámetros `usuario` y `pass`
    if (isset($_GET['usuario']) && isset($_GET['pass'])) {
        $usuario = $_GET['usuario'];
        $pass = $_GET['pass'];

        // Preparar la consulta SQL para buscar el usuario
        $sql = "SELECT `id`, `usuario`, `pass`, `nombre`, `apellido`, `pais`, `celular`, `correo`, `fechaRegistro` FROM `users` WHERE `usuario` = :usuario AND `pass` = :pass";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':usuario', $usuario);
        $stmt->bindParam(':pass', $pass);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            // Obtener los resultados
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Enviar los datos como JSON
            echo json_encode($result);
        } else {
            // Manejar errores de ejecución
            echo json_encode(['error' => 'Error al ejecutar la consulta.']);
        }
    } else {
        echo json_encode(['error' => 'Parámetros insuficientes.']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al conectar a la base de datos: ' . $e->getMessage()]);
}
?>

