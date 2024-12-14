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

        if (isset($input['usuario'], $input['pass'], $input['nombre'], $input['apellido'], $input['pais'], $input['celular'], $input['correo'])) {
            $usuario = $input['usuario'];
            $pass = sha1($input['pass']);
            $nombre = $input['nombre'];
            $apellido = $input['apellido'];
            $pais = $input['pais'];
            $celular = $input['celular'];
            $correo = $input['correo'];

            // Preparar la consulta SQL para insertar el usuario
            $sql = "INSERT INTO `users` (`usuario`, `pass`, `nombre`, `apellido`, `pais`, `celular`, `correo`) VALUES (:usuario, :pass, :nombre, :apellido, :pais, :celular, :correo)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':usuario', $usuario);
            $stmt->bindParam(':pass', $pass);
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':apellido', $apellido);
            $stmt->bindParam(':pais', $pais);
            $stmt->bindParam(':celular', $celular);
            $stmt->bindParam(':correo', $correo);

            // Ejecutar la consulta
            if ($stmt->execute()) {
                echo json_encode(['message' => 'Usuario insertado exitosamente']);
            } else {
                echo json_encode(['error' => 'Error al insertar el usuario']);
            }
        } else {
            echo json_encode(['error' => 'Parámetros insuficientes para insertar']);
        }
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Verificar si se recibieron los parámetros `usuario` y `pass` para seleccionar datos
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
                echo json_encode(['error' => 'Error al ejecutar la consulta']);
            }
        } else {
            echo json_encode(['error' => 'Parámetros insuficientes para seleccionar']);
        }
    } else {
        echo json_encode(['error' => 'Método de solicitud no soportado']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al conectar a la base de datos: ' . $e->getMessage()]);
}
?>