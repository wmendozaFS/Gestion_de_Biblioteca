DROP DATABASE IF EXISTS  gestion_biblioteca;

CREATE DATABASE gestion_biblioteca;

use gestion_biblioteca;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE editoriales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100)
);

CREATE TABLE autores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100)
);


CREATE TABLE libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150),
  editorial_id INT,
  autor_id INT,
  FOREIGN KEY (editorial_id) REFERENCES editoriales(id),
  FOREIGN KEY (autor_id) REFERENCES autores(id)
);

CREATE TABLE prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  libro_id INT,
  fecha_prestamo DATE,
  fecha_devolucion DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (libro_id) REFERENCES libros(id)
);