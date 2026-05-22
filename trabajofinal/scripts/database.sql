CREATE DATABASE IF NOT EXISTS proyectoFinal;
USE proyectoFinal;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE equipos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    brand VARCHAR(50),
    model VARCHAR(50),
    serial_number VARCHAR(100) UNIQUE,
    status ENUM('Disponible','Asignado','Reparación')
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE user_equipo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    equipo_id INT,
    note TEXT,
    rating INT CHECK (rating BETWEEN 1 AND 5),

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (equipo_id) REFERENCES equipos(id)
);