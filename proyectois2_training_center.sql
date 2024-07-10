-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-proyectois2.alwaysdata.net
-- Generation Time: Jul 10, 2024 at 05:33 AM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectois2_training_center`
--

-- --------------------------------------------------------

--
-- Table structure for table `mensaje`
--

CREATE TABLE `mensaje` (
  `id_mensaje` int(11) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `apellido` varchar(70) NOT NULL,
  `numero_celular` varchar(20) DEFAULT NULL,
  `whatsapp` varchar(4) NOT NULL DEFAULT 'si',
  `contenido` varchar(300) NOT NULL DEFAULT '',
  `fecha_hora` datetime NOT NULL DEFAULT current_timestamp(),
  `entrenaba` varchar(50) NOT NULL DEFAULT 'No aun',
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `mensaje`
--

INSERT INTO `mensaje` (`id_mensaje`, `nombre`, `apellido`, `numero_celular`, `whatsapp`, `contenido`, `fecha_hora`, `entrenaba`, `email`) VALUES
(1, '', '', NULL, 'si', '', '2024-07-10 03:45:08', 'No aun', NULL),
(2, 'Mario', 'Bros', '43543334', 'si', 'hola quiero consultar...', '2024-07-10 06:45:08', 'No aun', NULL),
(4, 'a', 'a', NULL, 'si', '', '2024-07-10 03:52:47', 'No aun', NULL),
(5, 'Mario', 'Bros', '43543334', 'si', 'hola quiero consultar...', '0000-00-00 00:00:00', 'No aun', NULL),
(6, 'Mario', 'Bros', '43543334', 'si', 'hola quiero consultar...', '2024-07-10 03:54:50', 'No aun', NULL),
(7, 'Mario', 'Bros', '43543334', 'si', 'hola quiero consultar...', '2024-07-10 03:58:01', 'No aun', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `plan`
--

CREATE TABLE `plan` (
  `id_tipo_plan` int(11) NOT NULL,
  `descripcion` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `plan`
--

INSERT INTO `plan` (`id_tipo_plan`, `descripcion`) VALUES
(1, 'Basico'),
(2, 'Semanal'),
(3, 'Mensual');

-- --------------------------------------------------------

--
-- Table structure for table `rutina`
--

CREATE TABLE `rutina` (
  `id_rutina` int(11) NOT NULL,
  `descripcion` varchar(1500) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `rutina`
--

INSERT INTO `rutina` (`id_rutina`, `descripcion`, `id_usuario`) VALUES
(1, 'blablabla\r\nblabla', 1),
(2, 'blablabla\r\nblabla222', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id_tipo_usuario` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id_tipo_usuario`, `descripcion`) VALUES
(1, 'Cliente'),
(2, 'Entrenador'),
(3, 'Administrador');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `apellido` varchar(70) NOT NULL DEFAULT '',
  `numero_documento` varchar(20) NOT NULL DEFAULT '',
  `direccion` varchar(70) NOT NULL DEFAULT '',
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `id_tipo_plan` int(11) DEFAULT NULL,
  `id_tipo_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellido`, `numero_documento`, `direccion`, `fecha_nacimiento`, `telefono`, `email`, `id_tipo_plan`, `id_tipo_usuario`) VALUES
(1, 'Juan', 'Perez', '4653333', 'Las margaritas 444', '2000-07-02', NULL, NULL, 1, 2),
(2, 'Noelia', 'Barreto', '4345454', 'Don Bosco 445', '2024-07-02', NULL, NULL, 1, 1),
(3, 'Roman', 'Riquelme2', '4456664', 'Catamarca 999', '1998-07-02', NULL, NULL, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`id_mensaje`);

--
-- Indexes for table `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`id_tipo_plan`);

--
-- Indexes for table `rutina`
--
ALTER TABLE `rutina`
  ADD PRIMARY KEY (`id_rutina`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id_tipo_usuario`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `numero_documento` (`numero_documento`),
  ADD KEY `FK_usuario_plan` (`id_tipo_plan`),
  ADD KEY `FK_usuario_tipo_usuario` (`id_tipo_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `id_mensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `plan`
--
ALTER TABLE `plan`
  MODIFY `id_tipo_plan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rutina`
--
ALTER TABLE `rutina`
  MODIFY `id_rutina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id_tipo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rutina`
--
ALTER TABLE `rutina`
  ADD CONSTRAINT `rutina_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK_usuario_plan` FOREIGN KEY (`id_tipo_plan`) REFERENCES `plan` (`id_tipo_plan`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_usuario_tipo_usuario` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_usuario` (`id_tipo_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
