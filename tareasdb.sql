-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2023 a las 19:59:44
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tareasdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idCategory` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idCategory`, `categoryName`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Desarrollo', '2023-08-28 13:11:30', '2023-08-28 13:11:30', NULL),
(2, 'Diseño', '2023-08-28 13:11:30', '2023-08-28 13:11:30', NULL),
(3, 'Markething', '2023-08-28 13:11:30', '2023-08-28 13:11:30', NULL),
(4, 'Seguridad', '2023-08-28 13:11:30', '2023-08-28 13:11:30', NULL),
(5, 'Test', '2023-08-28 13:11:30', '2023-08-28 13:11:30', NULL),
(6, 'Desarrollo', '2023-08-28 13:11:34', '2023-08-28 13:11:34', NULL),
(7, 'Diseño', '2023-08-28 13:11:34', '2023-08-28 13:11:34', NULL),
(8, 'Markething', '2023-08-28 13:11:34', '2023-08-28 13:11:34', NULL),
(9, 'Seguridad', '2023-08-28 13:11:34', '2023-08-28 13:11:34', NULL),
(10, 'Test', '2023-08-28 13:11:34', '2023-08-28 13:11:34', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `idProject` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `state` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`idProject`, `title`, `date`, `description`, `state`, `createdAt`, `updatedAt`, `deletedAt`, `idUser`) VALUES
(1, 'Proyecto2', '2023-09-15 00:00:00', 'Este es un proyecto de ejemplo', 0, '2023-08-28 13:08:24', '2023-08-28 15:40:54', NULL, 1),
(2, 'Proyecto de ejemplo', '2023-09-15 00:00:00', 'Este es un proyecto de ejemplo', 1, '2023-08-28 13:12:10', '2023-08-28 13:12:10', NULL, 1),
(3, 'Proyecto de ejemplo', '2023-09-15 00:00:00', 'Este es un proyecto de ejemplo', 1, '2023-08-28 15:17:24', '2023-08-28 15:17:24', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `idTask` int(11) NOT NULL,
  `nameTask` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `dateInit` datetime NOT NULL,
  `dateFinish` datetime NOT NULL,
  `priority` tinyint(1) NOT NULL,
  `state` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `idProject` int(11) DEFAULT NULL,
  `idCategory` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`idTask`, `nameTask`, `description`, `dateInit`, `dateFinish`, `priority`, `state`, `createdAt`, `updatedAt`, `deletedAt`, `idProject`, `idCategory`) VALUES
(2, 'Tarea de ejemplsso', 'Esta es una tarea de ejemplo', '2023-09-01 10:00:00', '2023-09-10 18:00:00', 1, 0, '2023-08-28 13:11:52', '2023-08-28 16:45:45', NULL, 1, 1),
(3, 'asasdd', 'asd', '2023-09-01 10:00:00', '2023-09-22 18:00:00', 1, 1, '2023-08-28 13:12:04', '2023-08-28 13:12:04', NULL, 1, 1),
(4, 'asasdd', 'asd', '2023-09-01 10:00:00', '2023-09-22 18:00:00', 1, 1, '2023-08-28 13:12:05', '2023-08-28 13:12:05', NULL, 1, 1),
(5, 'asasdd', 'asd', '2023-09-01 10:00:00', '2023-09-22 18:00:00', 1, 1, '2023-08-28 13:12:05', '2023-08-28 13:12:05', NULL, 1, 1),
(6, 'asasdd', 'asd', '2023-09-01 10:00:00', '2023-09-22 18:00:00', 1, 1, '2023-08-28 15:47:49', '2023-08-28 15:47:49', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `state` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `lastname`, `name`, `username`, `pass`, `state`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Acosta', 'Gabriel', 'Gabykap', '$2a$08$g5mJYIAfOVGEJf0tRd3ZceyjFWOFHYTHS2VhFmvofY0fgAs2tZ5Hi', 1, '2023-08-28 13:07:44', '2023-08-28 13:07:44', NULL),
(2, 'Apellido', 'Nombre', 'Usuario1', '$2a$08$aKGLrjOkKRjsdHbiBshJGutsiuOKxSFGg7sLatBgxgjUkcDXZ/BoS', 1, '2023-08-28 14:50:27', '2023-08-28 15:06:30', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`idProject`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`idTask`),
  ADD KEY `idProject` (`idProject`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `idProject` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `idTask` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategory`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
