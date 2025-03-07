CREATE DATABASE bd_crm;

USE bd_crm;

CREATE TABLE Cliente (
id_clientes INT AUTO_INCREMENT PRIMARY KEY,
Nombre VARCHAR(100) NOT NULL,
Email VARCHAR(100) UNIQUE,
Telefono VARCHAR(100) UNIQUE
);

CREATE TABLE Vehiculo (
Id_vehiculo INT AUTO_INCREMENT PRIMARY KEY,
id_clientes INT,
Placa VARCHAR(100) UNIQUE NOT NULL,
Marca VARCHAR(100) NOT NULL,
Modelo VARCHAR(100) UNIQUE,

FOREIGN KEY(id_clientes) REFERENCES Cliente (id_clientes) ON DELETE CASCADE
);

CREATE TABLE Recordatorio (
Id_recordatorio INT AUTO_INCREMENT PRIMARY KEY,
Id_vehiculo INT,
Tipo_recordatorio ENUM('SOAT','TECNOMECANICO'),
Fecha_vencimiento DATE,
Marca VARCHAR(100) NOT NULL,
Modelo VARCHAR(100) UNIQUE,
Estado ENUM('Pendiente','Enviado','Confirmado') DEFAULT 'Pendiente',

FOREIGN KEY (Id_vehiculo) REFERENCES Vehiculo(Id_vehiculo) ON DELETE CASCADE
);