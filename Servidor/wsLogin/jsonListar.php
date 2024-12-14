<?php

/**
 * Web Service RESTful en PHP con MySQL (CRUD)
 * 
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

require_once 'Conexion.php'; // Asegúrate de que el nombre del archivo es correcto

// Crear una instancia de la clase Conexion
$conexion = new Conexion();

// Obtener la conexión PDO
try {
    $pdo = $conexion->obtenerConexion();
    //Linia para verificar la conexion
    //echo json_encode(['message' => 'Conexión exitosa']); // Línea de depuración

    // Preparar la consulta SQL
    $sql = "SELECT `id`, `usuario`, `pass`, `nombre`, `apellido`, `pais`, `celular`, `correo`, `fechaRegistro` FROM `users`";
    $stmt = $pdo->prepare($sql);

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
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al conectar a la base de datos: ' . $e->getMessage()]);
}
?>