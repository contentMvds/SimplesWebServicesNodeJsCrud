-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09-Dez-2017 às 21:09
-- Versão do servidor: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appfacagend`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda`
--

CREATE TABLE `agenda` (
  `id` int(50) NOT NULL,
  `userResponsible` varchar(254) DEFAULT NULL,
  `title` varchar(254) DEFAULT NULL,
  `dt_activity` date DEFAULT NULL,
  `importance` varchar(254) DEFAULT NULL,
  `Note` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `agenda`
--

INSERT INTO `agenda` (`id`, `userResponsible`, `title`, `dt_activity`, `importance`, `Note`) VALUES
(4, 'admin', 'Titulo de teste de insert', '2017-10-10', 'Urgente', 'Teste de edição'),
(6, 'admin', 'asdsadsdasdsdasd', '2017-12-30', 'Importante', 'asdasdasda'),
(8, 'admin', 'asdsadsa', '2017-12-14', 'Prioridade', 'asdsadsadsadsadsad'),
(9, 'admin', 'adfaadasdsad', '2017-12-27', 'Prioridade', 'asdsadsadsadsasaddsadasdsadsadasd'),
(10, 'admin', 'Finalizar projeto', '2017-12-10', 'Urgente', 'Finalizar delete e edite hoje');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `user` varchar(254) DEFAULT NULL,
  `password` varchar(254) DEFAULT NULL,
  `name` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `user`, `password`, `name`) VALUES
(1, 'admin', 'admin', 'Administrador');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
