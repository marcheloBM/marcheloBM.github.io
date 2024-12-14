<?php

/**
 * Conexión a base de datos de MySQL con PDO
 *
 * @author marcheloBM
 */

class Conexion
{
    private $hostBd = 'sql100.infinityfree.com';
    private $nombreBd = 'if0_37281137_marchelobm';
    private $usuarioBd = 'if0_37281137';
    private $passwordBd = 'ma3627BM';
    private $pdo; // Propiedad para almacenar el objeto PDO

    public function __construct()
    {
        try {
            // Crear una nueva conexión PDO
            $this->pdo = new PDO("mysql:host=$this->hostBd;dbname=$this->nombreBd;charset=utf8", $this->usuarioBd, $this->passwordBd);

            // Establecer el modo de errores de PDO a excepciones
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Error al conectar a la base de datos: " . $e->getMessage();
            exit;
        }
    }

    public function obtenerConexion()
    {
        return $this->pdo;
    }
}
// Crear una instancia de la clase Conexion 
$conexion = new Conexion(); 
// Obtener la conexión PDO 
$pdo = $conexion->obtenerConexion(); 
// Verificar la conexión 
if ($pdo) { 
    //Linia para verificar la conexion
    //echo "Conexión exitosa a la base de datos."; 
    } else { 
        echo "Error al obtener la conexión a la base de datos."; 
        } 

?>