//Crear o remplaza un procedimiento 
DELIMITER $$

CREATE OR REPLACE PROCEDURE BuscarUser (
    IN p_usuario VARCHAR(255),
    IN p_pass VARCHAR(255)
)
BEGIN
    -- Declarar la variable para almacenar el ID del usuario
    DECLARE v_iduser INT;

    -- Inicializar la variable a NULL
    SET v_iduser = NULL;

    -- Buscar al usuario y almacenar el ID en la variable
    SELECT id INTO v_iduser
    FROM users
    WHERE usuario = p_usuario AND pass = p_pass;

    -- Si el ID del usuario no es NULL, registrar la sesión
    IF v_iduser IS NOT NULL THEN
        -- Registrar la sesión en la tabla sessions
        INSERT INTO sessions (iduser, fechaIngreso)
        VALUES (v_iduser, NOW());
        
        -- Retornar los datos del usuario
        SELECT id, usuario, pass, nombre, apellido, pais, celular, correo, fechaRegistro
        FROM users
        WHERE id = v_iduser;
    ELSE
        -- Retornar un mensaje si el usuario no se encuentra
        SELECT 'Usuario no encontrado' AS mensaje;
    END IF;
END$$

DELIMITER ;


DELIMITER $$

CREATE OR REPLACE PROCEDURE InsertarUser (
    IN p_usuario VARCHAR(255),
    IN p_pass VARCHAR(255),
    IN p_nombre VARCHAR(255),
    IN p_apellido VARCHAR(255),
    IN p_pais VARCHAR(255),
    IN p_celular VARCHAR(255),
    IN p_correo VARCHAR(255),
	IN p_fechaR datetime
)
BEGIN
    INSERT INTO users (usuario, pass, nombre, apellido, pais, celular, correo, fechaRegistro)
    VALUES (p_usuario, p_pass, p_nombre, p_apellido, p_pais, p_celular, p_correo, p_fechaR);
END$$

DELIMITER ;

DELIMITER $$

CREATE OR REPLACE PROCEDURE ModificarUser (
    IN p_id INT,
    IN p_usuario VARCHAR(255),
    IN p_pass VARCHAR(255),
    IN p_nombre VARCHAR(255),
    IN p_apellido VARCHAR(255),
    IN p_pais VARCHAR(255),
    IN p_celular VARCHAR(255),
    IN p_correo VARCHAR(255)
)
BEGIN
    UPDATE users
    SET 
        usuario = p_usuario,
        pass = p_pass,
        nombre = p_nombre,
        apellido = p_apellido,
        pais = p_pais,
        celular = p_celular,
        correo = p_correo
    WHERE id = p_id;
END$$

DELIMITER ;

DELIMITER $$

CREATE OR REPLACE PROCEDURE EliminarUser (
    IN p_id INT
)
BEGIN
    DELETE FROM users
    WHERE id = p_id;
END$$

DELIMITER ;

DELIMITER $$

CREATE OR REPLACE PROCEDURE ListarUsers()
BEGIN
    SELECT id, usuario, nombre, apellido, pais, celular, correo, fechaRegistro
    FROM users;
END$$

DELIMITER ;
