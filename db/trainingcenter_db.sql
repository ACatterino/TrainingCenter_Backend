CREATE DATABASE trainingcenter;
USE trainingcenter;

CREATE TABLE alumnos (
    id_alumno INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    dni INT,
    email VARCHAR(255),
    telefono VARCHAR(255),
    direccion VARCHAR(255)
);

CREATE TABLE planes (
    id_plan INT AUTO_INCREMENT PRIMARY KEY,
    nombre_plan VARCHAR(255),
    descripcion TEXT
);

CREATE TABLE inscripciones (
    id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
    id_alumno INT,
    id_plan INT,
    fecha DATE,
    FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_plan) REFERENCES planes(id_plan) ON DELETE CASCADE ON UPDATE CASCADE
);
