CREATE TABLE `mascotas` (
  `id` bigint(20) UNSIGNED NOT NULL primary key AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `edad` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;