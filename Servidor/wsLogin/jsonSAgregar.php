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

    // Verificar el método de la solicitud
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Manejar la inserción de datos
        $input = json_decode(file_get_contents('php://input'), true);

        if (isset($input['iduser'], $input['fechaIngreso'])) {
            $iduser = $input['iduser'];
            $fechaIngreso = $input['fechaIngreso'];

            // Preparar la consulta SQL para insertar el usuario
            $sql = "INSERT INTO `sessions`(`iduser`, `fechaIngreso`) VALUES (:iduser, :fechaIngreso)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':iduser', $iduser);
            $stmt->bindParam(':fechaIngreso', $fechaIngreso);
			

            // Ejecutar la consulta
            if ($stmt->execute()) {
                echo json_encode(['message' => 'Usuario insertado exitosamente']);
            } else {
                echo json_encode(['error' => 'Error al insertar el usuario']);
            }
        } else {
            echo json_encode(['error' => 'Parámetros insuficientes para insertar']);
        }
    } else {
        echo json_encode(['error' => 'Método de solicitud no soportado']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al conectar a la base de datos: ' . $e->getMessage()]);
}
?>