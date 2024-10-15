-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: mantenimiento_utn
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activo`
CREATE DATABASE mantenimiento_utn;

USE mantenimiento_utn;

DROP TABLE IF EXISTS `activo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activo` (
  `id_activo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `tag_diminutivo` varchar(50) DEFAULT NULL,
  `disponibilidad` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_activo`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activo`
--

LOCK TABLES `activo` WRITE;
/*!40000 ALTER TABLE `activo` DISABLE KEYS */; -- esta de mas el id principal
INSERT INTO `activo` VALUES (1,'Iluminación','ILUM -',1),(2,'Aire Acondicionado','AACO -',1),(3,'Radiador Calefacción','RCAL -',1),(4,'Puerta','PRTA -',1),(5,'Ventanas & Cortinas','VENT -',1),(6,'Luces de Emergencia','LEME -',1),(7,'Matafuego','MTFG -',1),(8,'Barandas y Escaleras','BESC -',1),(9,'Tablero Eléctrico','TABE -',1),(10,'Inodoro & Mochila','INOD -',1),(11,'Mesada','MESA -',1),(12,'Ventilador','VENT -',1),(13,'NA','NA',1),(14,'Puerta Emergencia','PTAE -',1),(15,'Ascensor','ASCN -',1),(16,'Cortina Enrollar Motor','CORT -',1),(17,'NA','NA',1),(18,'Termotanque','TMTQ -',1),(19,'Calefactor','CALE -',1),(20,'Caldera','CALD -',1),(21,'Techos y Canaletas','TCHO -',1),(22,'NA','NA',1),(23,'Balcones','BALCO -',1),(24,'Paneles Solares e Inversor','PSOL -',1),(25,'Portones','PORT -',1),(26,'Generador Eléctrico','GNDR -',1),(27,'Bombas de Agua','BMBA -',1),(28,'Tanques de Agua','TNQE -',1),(29,'Rejillas & Desagues','DESA -',1),(30,'NA','NA',1),(31,'Emergencia Alarma','EMER -',1),(32,'Espacio Físico','ESFI -',1),(33,'Ducha','DCHA -',1),(34,'Cocheras','CHRA -',1),(35,'Escalera','ESLR -',1),(36,'NA','NA',1),(37,'Cámara Desagüe','CDES -',1),(38,'Cámara Septicas','CSEP -',1);
/*!40000 ALTER TABLE `activo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activo_tarea`
--

DROP TABLE IF EXISTS `activo_tarea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activo_tarea` (
  `id_activo_tarea` int NOT NULL AUTO_INCREMENT,
  `id_activo` int DEFAULT NULL,
  `id_tarea` int DEFAULT NULL,
  PRIMARY KEY (`id_activo_tarea`),
  KEY `id_activo` (`id_activo`),
  KEY `id_tarea` (`id_tarea`),
  CONSTRAINT `activo_tarea_ibfk_1` FOREIGN KEY (`id_activo`) REFERENCES `activo` (`id_activo`),
  CONSTRAINT `activo_tarea_ibfk_2` FOREIGN KEY (`id_tarea`) REFERENCES `tareas` (`id_tarea`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activo_tarea`
--



LOCK TABLES `activo_tarea` WRITE;
/*!40000 ALTER TABLE `activo_tarea` DISABLE KEYS */;

/* 
 * Insertando tareas relacionadas con el activo "Iluminación".
 * Asegúrate de que los id_tarea sean correctos y correspondan a las tareas en la tabla `tareas`.
 */
INSERT INTO `activo_tarea` (`id_activo`, `id_tarea`) VALUES

-- Activo 1

(1, 1),  -- 
(1, 7),  -- 
(1, 21),  -- 
(1, 37),  -- 
(1, null),  -- 
(1, null),  -- 
(1, null), -- 
(1, 86), -- 
(1, 87), --
(1, 88), -- 
(1, 115), --
(1, 90), -- 
(1, 91), -- 
(1, 92), -- 
(1, 93), -- 
(1,94),
(1,76),
(1,null),
(1,95),
(1,96),

-- Activo 2

(2, 1),  -- 
(2, 7),  -- 
(2, 21),  -- 
(2, 97),  -- 
(2, null),  -- 
(2, null),  -- 
(2, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(2, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(2, 87), -- Verificar correcto estado de cableado eléctrico, tomacorriente y conexiones eléctricas.
(2, 88), -- Verificar correcta y firme fijación a pared o estructura de ambas unidades.
(2, 115), -- Verificar existencia y correcto montaje de protecciones mecánicas.
(2, 98), -- Verificar carga de gas y NO de fugas.
(2, 99), -- Realice limpieza de filtros.
(2, 60), -- Realice limpieza completa de ambas unidades.
(2, 100), -- Conecte nuevamente a la red eléctrica y realice una prueba de correcto funcionamiento.
(2, 68), -- Complete la documentación de mantenimiento.
(2,77),
(2,78),
(2,95),
(2,96),
-- Activo 3
(3, 1),  -- Relevar Marca
(3, 7),  -- Relevar Modelo
(3, 22),  -- Relevar Potencia
(3, null),  -- Relevar cantidad de lámparas por equipo.
(3, null),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(3, null),  -- Tomar Fotografía
(3, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(3, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(3, 87), -- Control de louver.
(3, 88), -- Verificación de funcionamiento de la totalidad de las lámparas.
(3, 89), -- Verificación de estados de zócalos y/o portalámparas.
(3, 101), -- Limpieza de luminaria y lámpara.
(3, 102), -- Verificar correcto montaje y sujeción.
(3, 69), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(3, 57), -- Complete la documentación de mantenimiento.
(3,null),
(3,null),
(3,null),
(3,95),
(3,96),
-- Activo 4
(4, 2),  -- Relevar Marca
(4, 8),  -- Relevar Modelo
(4, 103),  -- Relevar Potencia
(4, 39),  -- Frío - Calor - Frío/Calor.
(4, 47),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(4, 54),  -- Tomar Fotografía
(4, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(4, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(4, 87), -- Verificar correcto estado de cableado eléctrico, tomacorriente y conexiones eléctricas.
(4, 88), -- Verificar correcta y firme fijación a pared o estructura de ambas unidades.
(4, 89), -- Verificar existencia y correcto montaje de protecciones mecánicas.
(4, 104), -- Verificar carga de gas y NO de fugas.
(4, 105), -- Realice limpieza de filtros.
(4, 61), -- Realice limpieza completa de ambas unidades.
(4, 58), -- Conecte nuevamente a la red eléctrica y realice una prueba de correcto funcionamiento.
(4, 69), -- Complete la documentación de mantenimiento.
(4, 57),
(4, null),
(4, 95),
(4, 96),

-- Activo 5
(5, 2),  -- Relevar Marca
(5, 8),  -- Relevar Modelo
(5, 23),  -- Relevar Potencia
(5, 39),  -- Relevar cantidad de lámparas por equipo.
(5, 47),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(5, null),  -- Tomar Fotografía
(5, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(5, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(5, 87), -- Control de louver.
(5, 88), -- Verificación de funcionamiento de la totalidad de las lámparas.
(5, 89), -- Verificación de estados de zócalos y/o portalámparas.
(5, 104), -- Limpieza de luminaria y lámpara.
(5, 106), -- Verificar correcto montaje y sujeción.
(5, 61), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(5, 58), -- Complete la documentación de mantenimiento.
(5, 69),
(5, 57),
(5, null),
(5, 95),
(5, 96),
-- Activo 6

(6, 1),  -- Relevar Marca
(6, 7),  -- Relevar Modelo
(6, 22),  -- Relevar Potencia
(6, null),  -- Relevar cantidad de lámparas por equipo.
(6, null),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(6, null),  -- Tomar Fotografía
(6, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(6, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(6, 87), -- Control de louver.
(6, 88), -- Verificación de funcionamiento de la totalidad de las lámparas.
(6, 89), -- Verificación de estados de zócalos y/o portalámparas.
(6, 107), -- Limpieza de luminaria y lámpara.
(6, 98), -- Verificar correcto montaje y sujeción.
(6, null), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(6, null), -- Complete la documentación de mantenimiento.
(6, 69),
(6, 57),
(6, null),
(6, 95),
(6, 96),

-- Activo 7
(7, 1),  -- Relevar Marca
(7, 3),  -- Relevar Modelo
(7, 5),  -- Relevar Potencia
(7, null),  -- Relevar cantidad de lámparas por equipo.
(7, null),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(7, null),  -- Tomar Fotografía
(7, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(7, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(7, 87), -- Control de louver.
(7, 88), -- Verificación de funcionamiento de la totalidad de las lámparas.
(7, 89), -- Verificación de estados de zócalos y/o portalámparas.
(7, 107), -- Limpieza de luminaria y lámpara.
(7, 108), -- Verificar correcto montaje y sujeción.
(7, null), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(7, null), -- Complete la documentación de mantenimiento.
(7, 69),
(7, null),
(7, null),
(7, 95),
(7, 96),

-- Activo 8
(8, 2),  -- Relevar Marca
(8, null),  -- Relevar Modelo
(8, null),  -- Relevar Potencia
(8, null),  -- Relevar cantidad de lámparas por equipo.
(8, null),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(8, null),  -- Tomar Fotografía
(8, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(8, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(8, 87), -- Control de louver.
(8, 88), -- Verificación de funcionamiento de la totalidad de las lámparas.
(8, 89), -- Verificación de estados de zócalos y/o portalámparas.
(8, 109), -- Limpieza de luminaria y lámpara.
(8, 110), -- Verificar correcto montaje y sujeción.
(8, null), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(8, null), -- Complete la documentación de mantenimiento.
(8, 69),
(8, null),
(8, null),
(8, 95),
(8, 96),

-- Activo 9
(9, 3),  -- Relevar Marca
(9, 10),  -- Relevar Modelo
(9, 25),  -- Relevar Potencia
(9, null),  -- Relevar cantidad de lámparas por equipo.
(9, null),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(9, null),  -- Tomar Fotografía
(9, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(9, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(9, 87), -- Control de louver.
(9, 88), -- Verificación de funcionamiento de la totalidad de las lámparas.
(9, 115), -- Verificación de estados de zócalos y/o portalámparas.
(9, 107), -- Limpieza de luminaria y lámpara.
(9, 110), -- Verificar correcto montaje y sujeción.
(9, 111), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(9, 112), -- Complete la documentación de mantenimiento.
(9, 70),
(9, 113),
(9, 114),
(9, 95),
(9, 96),

-- Activo 10
(10, 1),  -- Relevar Marca
(10, 11),  -- Relevar Modelo
(10, null),  -- Relevar Potencia
(10, null),  -- Relevar cantidad de lámparas por equipo.
(10, null),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(10, null),  -- Tomar Fotografía
(10, null), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(10, 86), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(10, 87), -- Control de louver.
(10, 88), -- Verificación de funcionamiento de la totalidad de las lámparas.
(10, 89), -- Verificación de estados de zócalos y/o portalámparas.
(10, 107), -- Limpieza de luminaria y lámpara.
(10, 102), -- Verificar correcto montaje y sujeción.
(10, null), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(10, null), -- Complete la documentación de mantenimiento.
(10, 114),
(10, 57),
(10, null),
(10, 95),
(10, 96),

-- Activo 11

(11, 2),  -- Relevar Material
(11, 9),  -- Relevar Tamaño
(11, 3),  -- Relevar cantidas de piletas
(11, 4),  -- Relevar tipo de canilla
(11, 8),  -- Agua Fria/Caliente
(11, 9),  -- Tomar Fotografía
(11, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(11, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(11, 12), -- Control de louver.
(11, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(11, 14), -- Verificación de estados de zócalos y/o portalámparas.
(11, 15), -- Limpieza de luminaria y lámpara.
(11, 16), -- Verificar correcto montaje y sujeción.
(11, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(11, 19), -- Complete la documentación de mantenimiento.

-- Activo 12
(12, 1),  -- Relevar Marca
(12, 2),  -- Relevar Modelo
(12, 3),  -- Relevar Potencia
(12, 4),  -- Relevar cantidad de lámparas por equipo.
(12, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(12, 9),  -- Tomar Fotografía
(12, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(12, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(12, 12), -- Control de louver.
(12, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(12, 14), -- Verificación de estados de zócalos y/o portalámparas.
(12, 15), -- Limpieza de luminaria y lámpara.
(12, 16), -- Verificar correcto montaje y sujeción.
(12, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(12, 19), -- Complete la documentación de mantenimiento.

-- Activo 13
(13, 1),  -- Relevar Marca
(13, 2),  -- Relevar Modelo
(13, 3),  -- Relevar Potencia
(13, 4),  -- Relevar cantidad de lámparas por equipo.
(13, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(13, 9),  -- Tomar Fotografía
(13, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(13, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(13, 12), -- Control de louver.
(13, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(13, 14), -- Verificación de estados de zócalos y/o portalámparas.
(13, 15), -- Limpieza de luminaria y lámpara.
(13, 16), -- Verificar correcto montaje y sujeción.
(13, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(13, 19), -- Complete la documentación de mantenimiento.

-- Activo 14
(14, 1),  -- Relevar Marca
(14, 2),  -- Relevar Modelo
(14, 3),  -- Relevar Potencia
(14, 4),  -- Relevar cantidad de lámparas por equipo.
(14, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(14, 9),  -- Tomar Fotografía
(14, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(14, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(14, 12), -- Control de louver.
(14, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(14, 14), -- Verificación de estados de zócalos y/o portalámparas.
(14, 15), -- Limpieza de luminaria y lámpara.
(14, 16), -- Verificar correcto montaje y sujeción.
(14, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(14, 19), -- Complete la documentación de mantenimiento.

-- Activo 15
(15, 1),  -- Relevar Marca
(15, 2),  -- Relevar Modelo
(15, 3),  -- Relevar Potencia
(15, 4),  -- Relevar cantidad de lámparas por equipo.
(15, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(15, 9),  -- Tomar Fotografía
(15, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(15, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(15, 12), -- Control de louver.
(15, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(15, 14), -- Verificación de estados de zócalos y/o portalámparas.
(15, 15), -- Limpieza de luminaria y lámpara.
(15, 16), -- Verificar correcto montaje y sujeción.
(15, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(15, 19), -- Complete la documentación de mantenimiento.

-- Activo 16
(16, 1),  -- Relevar Marca
(16, 2),  -- Relevar Modelo
(16, 3),  -- Relevar Potencia
(16, 4),  -- Relevar cantidad de lámparas por equipo.
(16, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(16, 9),  -- Tomar Fotografía
(16, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(16, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(16, 12), -- Control de louver.
(16, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(16, 14), -- Verificación de estados de zócalos y/o portalámparas.
(16, 15), -- Limpieza de luminaria y lámpara.
(16, 16), -- Verificar correcto montaje y sujeción.
(16, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(16, 19), -- Complete la documentación de mantenimiento.

-- Activo 17
(17, 1),  -- Relevar Marca
(17, 2),  -- Relevar Modelo
(17, 3),  -- Relevar Potencia
(17, 4),  -- Relevar cantidad de lámparas por equipo.
(17, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(17, 9),  -- Tomar Fotografía
(17, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(17, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(17, 12), -- Control de louver.
(17, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(17, 14), -- Verificación de estados de zócalos y/o portalámparas.
(17, 15), -- Limpieza de luminaria y lámpara.
(17, 16), -- Verificar correcto montaje y sujeción.
(17, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(17, 19), -- Complete la documentación de mantenimiento.

-- Activo 18
(18, 1),  -- Relevar Marca
(18, 2),  -- Relevar Modelo
(18, 3),  -- Relevar Potencia
(18, 4),  -- Relevar cantidad de lámparas por equipo.
(18, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(18, 9),  -- Tomar Fotografía
(18, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(18, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(18, 12), -- Control de louver.
(18, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(18, 14), -- Verificación de estados de zócalos y/o portalámparas.
(18, 15), -- Limpieza de luminaria y lámpara.
(18, 16), -- Verificar correcto montaje y sujeción.
(18, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(18, 19), -- Complete la documentación de mantenimiento.

-- Activo 19
(19, 1),  -- Relevar Marca
(19, 2),  -- Relevar Modelo
(19, 3),  -- Relevar Potencia
(19, 4),  -- Relevar cantidad de lámparas por equipo.
(19, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(19, 9),  -- Tomar Fotografía
(19, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(19, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(19, 12), -- Control de louver.
(19, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(19, 14), -- Verificación de estados de zócalos y/o portalámparas.
(19, 15), -- Limpieza de luminaria y lámpara.
(19, 16), -- Verificar correcto montaje y sujeción.
(19, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(19, 19), -- Complete la documentación de mantenimiento.

-- Activo 20
(20, 1),  -- Relevar Marca
(20, 2),  -- Relevar Modelo
(20, 3),  -- Relevar Potencia
(20, 4),  -- Relevar cantidad de lámparas por equipo.
(20, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(20, 9),  -- Tomar Fotografía
(20, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(20, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(20, 12), -- Control de louver.
(20, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(20, 14), -- Verificación de estados de zócalos y/o portalámparas.
(20, 15), -- Limpieza de luminaria y lámpara.
(20, 16), -- Verificar correcto montaje y sujeción.
(20, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(20, 19), -- Complete la documentación de mantenimiento.

(21, 1),  -- Relevar Marca
(21, 2),  -- Relevar Modelo
(21, 3),  -- Relevar Potencia
(21, 4),  -- Relevar cantidad de lámparas por equipo.
(21, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(21, 9),  -- Tomar Fotografía
(21, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(21, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(21, 12), -- Control de louver.
(21, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(21, 14), -- Verificación de estados de zócalos y/o portalámparas.
(21, 15), -- Limpieza de luminaria y lámpara.
(21, 16), -- Verificar correcto montaje y sujeción.
(21, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(21, 19), -- Complete la documentación de mantenimiento.

-- Activo 22
(22, 1),  -- Relevar Marca
(22, 2),  -- Relevar Modelo
(22, 3),  -- Relevar Potencia
(22, 4),  -- Relevar cantidad de lámparas por equipo.
(22, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(22, 9),  -- Tomar Fotografía
(22, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(22, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(22, 12), -- Control de louver.
(22, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(22, 14), -- Verificación de estados de zócalos y/o portalámparas.
(22, 15), -- Limpieza de luminaria y lámpara.
(22, 16), -- Verificar correcto montaje y sujeción.
(22, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(22, 19), -- Complete la documentación de mantenimiento.

-- Activo 23
(23, 1),  -- Relevar Marca
(23, 2),  -- Relevar Modelo
(23, 3),  -- Relevar Potencia
(23, 4),  -- Relevar cantidad de lámparas por equipo.
(23, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(23, 9),  -- Tomar Fotografía
(23, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(23, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(23, 12), -- Control de louver.
(23, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(23, 14), -- Verificación de estados de zócalos y/o portalámparas.
(23, 15), -- Limpieza de luminaria y lámpara.
(23, 16), -- Verificar correcto montaje y sujeción.
(23, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(23, 19), -- Complete la documentación de mantenimiento.

-- Activo 24
(24, 1),  -- Relevar Marca
(24, 2),  -- Relevar Modelo
(24, 3),  -- Relevar Potencia
(24, 4),  -- Relevar cantidad de lámparas por equipo.
(24, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(24, 9),  -- Tomar Fotografía
(24, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(24, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(24, 12), -- Control de louver.
(24, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(24, 14), -- Verificación de estados de zócalos y/o portalámparas.
(24, 15), -- Limpieza de luminaria y lámpara.
(24, 16), -- Verificar correcto montaje y sujeción.
(24, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(24, 19), -- Complete la documentación de mantenimiento.

-- Activo 25
(25, 1),  -- Relevar Marca
(25, 2),  -- Relevar Modelo
(25, 3),  -- Relevar Potencia
(25, 4),  -- Relevar cantidad de lámparas por equipo.
(25, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(25, 9),  -- Tomar Fotografía
(25, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(25, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(25, 12), -- Control de louver.
(25, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(25, 14), -- Verificación de estados de zócalos y/o portalámparas.
(25, 15), -- Limpieza de luminaria y lámpara.
(25, 16), -- Verificar correcto montaje y sujeción.
(25, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(25, 19), -- Complete la documentación de mantenimiento.

-- Activo 26
(26, 1),  -- Relevar Marca
(26, 2),  -- Relevar Modelo
(26, 3),  -- Relevar Potencia
(26, 4),  -- Relevar cantidad de lámparas por equipo.
(26, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(26, 9),  -- Tomar Fotografía
(26, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(26, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(26, 12), -- Control de louver.
(26, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(26, 14), -- Verificación de estados de zócalos y/o portalámparas.
(26, 15), -- Limpieza de luminaria y lámpara.
(26, 16), -- Verificar correcto montaje y sujeción.
(26, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(26, 19), -- Complete la documentación de mantenimiento.

-- Activo 27
(27, 1),  -- Relevar Marca
(27, 2),  -- Relevar Modelo
(27, 3),  -- Relevar Potencia
(27, 4),  -- Relevar cantidad de lámparas por equipo.
(27, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(27, 9),  -- Tomar Fotografía
(27, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(27, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(27, 12), -- Control de louver.
(27, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(27, 14), -- Verificación de estados de zócalos y/o portalámparas.
(27, 15), -- Limpieza de luminaria y lámpara.
(27, 16), -- Verificar correcto montaje y sujeción.
(27, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(27, 19), -- Complete la documentación de mantenimiento.

-- Activo 28
(28, 1),  -- Relevar Marca
(28, 2),  -- Relevar Modelo
(28, 3),  -- Relevar Potencia
(28, 4),  -- Relevar cantidad de lámparas por equipo.
(28, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(28, 9),  -- Tomar Fotografía
(28, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(28, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(28, 12), -- Control de louver.
(28, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(28, 14), -- Verificación de estados de zócalos y/o portalámparas.
(28, 15), -- Limpieza de luminaria y lámpara.
(28, 16), -- Verificar correcto montaje y sujeción.
(28, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(28, 19), -- Complete la documentación de mantenimiento.

-- Activo 29
(29, 1),  -- Relevar Marca
(29, 2),  -- Relevar Modelo
(29, 3),  -- Relevar Potencia
(29, 4),  -- Relevar cantidad de lámparas por equipo.
(29, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(29, 9),  -- Tomar Fotografía
(29, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(29, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(29, 12), -- Control de louver.
(29, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(29, 14), -- Verificación de estados de zócalos y/o portalámparas.
(29, 15), -- Limpieza de luminaria y lámpara.
(29, 16), -- Verificar correcto montaje y sujeción.
(29, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(29, 19), -- Complete la documentación de mantenimiento.

-- Activo 30
(30, 1),  -- Relevar Marca
(30, 2),  -- Relevar Modelo
(30, 3),  -- Relevar Potencia
(30, 4),  -- Relevar cantidad de lámparas por equipo.
(30, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(30, 9),  -- Tomar Fotografía
(30, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(30, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(30, 12), -- Control de louver.
(30, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(30, 14), -- Verificación de estados de zócalos y/o portalámparas.
(30, 15), -- Limpieza de luminaria y lámpara.
(30, 16), -- Verificar correcto montaje y sujeción.
(30, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(30, 19), -- Complete la documentación de mantenimiento.

(31, 1),  -- Relevar Marca
(31, 2),  -- Relevar Modelo
(31, 3),  -- Relevar Potencia
(31, 4),  -- Relevar cantidad de lámparas por equipo.
(31, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(31, 9),  -- Tomar Fotografía
(31, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(31, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(31, 12), -- Control de louver.
(31, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(31, 14), -- Verificación de estados de zócalos y/o portalámparas.
(31, 15), -- Limpieza de luminaria y lámpara.
(31, 16), -- Verificar correcto montaje y sujeción.
(31, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(31, 19), -- Complete la documentación de mantenimiento.

-- Activo 32
(32, 1),  -- Relevar Marca
(32, 2),  -- Relevar Modelo
(32, 3),  -- Relevar Potencia
(32, 4),  -- Relevar cantidad de lámparas por equipo.
(32, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(32, 9),  -- Tomar Fotografía
(32, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(32, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(32, 12), -- Control de louver.
(32, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(32, 14), -- Verificación de estados de zócalos y/o portalámparas.
(32, 15), -- Limpieza de luminaria y lámpara.
(32, 16), -- Verificar correcto montaje y sujeción.
(32, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(32, 19), -- Complete la documentación de mantenimiento.

-- Activo 33
(33, 1),  -- Relevar Marca
(33, 2),  -- Relevar Modelo
(33, 3),  -- Relevar Potencia
(33, 4),  -- Relevar cantidad de lámparas por equipo.
(33, 8),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(33, 9),  -- Tomar Fotografía
(33, 10), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(33, 11), -- Señalice el área de Trabajo. Desconecte la energía eléctrica - Verificar NO existencia de tensión eléctrica.
(33, 12), -- Control de louver.
(33, 13), -- Verificación de funcionamiento de la totalidad de las lámparas.
(33, 14), -- Verificación de estados de zócalos y/o portalámparas.
(33, 15), -- Limpieza de luminaria y lámpara.
(33, 16), -- Verificar correcto montaje y sujeción.
(33, 17), -- Verifique correcto funcionamiento del equipo luego de finalizada la actividad.
(33, 19); -- Complete la documentación de mantenimiento.

/*!40000 ALTER TABLE `activo_tarea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `edificio`
--

DROP TABLE IF EXISTS `edificio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edificio` (
  `id_edificio` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `labeltag` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_edificio`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edificio`
--

LOCK TABLES `edificio` WRITE;
/*!40000 ALTER TABLE `edificio` DISABLE KEYS */;
INSERT INTO `edificio` VALUES (1,'UTN FRVT','Laprida 651','001',1),(2,'FAGDUT VT','Laprida 648','002',1),(3,'ATEVEN','Laprida 652','003',1),(4,'UTN // UCES','Castelli 501','004',1);
/*!40000 ALTER TABLE `edificio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden_trabajo`
--

DROP TABLE IF EXISTS `orden_trabajo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orden_trabajo` (
  `id_orden_trabajo` int NOT NULL AUTO_INCREMENT,
  `fecha_impresion` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_final` time NOT NULL,
  `realizada` tinyint(1) DEFAULT '0',
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id_orden_trabajo`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `orden_trabajo_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden_trabajo`
--

LOCK TABLES `orden_trabajo` WRITE;
/*!40000 ALTER TABLE `orden_trabajo` DISABLE KEYS */;
/*!40000 ALTER TABLE `orden_trabajo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `piso_nivel`
--

DROP TABLE IF EXISTS `piso_nivel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `piso_nivel` (
  `id_piso` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `labeltag` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_piso`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piso_nivel`
--

LOCK TABLES `piso_nivel` WRITE;
/*!40000 ALTER TABLE `piso_nivel` DISABLE KEYS */;
INSERT INTO `piso_nivel` VALUES (1,'Planta Baja','001',1),(2,'1er. Piso','002',1),(3,'2do. Piso','003',1),(4,'3er. Piso','004',1),(5,'4to. Piso','005',1),(6,'5to. Piso','006',1),(7,'Nivel 0','007',1),(8,'Nivel Bajo 0','008',1),(9,'Techo','009',1),(10,'Entrepiso','010',1);
/*!40000 ALTER TABLE `piso_nivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sector`
--

DROP TABLE IF EXISTS `sector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sector` (
  `id_sector` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `labeltag` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_sector`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sector`
--

LOCK TABLES `sector` WRITE;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` VALUES (1,'Aula 20','001',1),(2,'Aula Video Conferencia','002',1),(3,'Aula 19 - Lab. Informatica','003',1),(4,'Centro de Comunicaciones','004',1),(5,'Pasillo C','005',1),(6,'Pasillo D','006',1),(7,'Lab. Arquitectura','007',1),(8,'Escalera 4','008',1),(9,'Baños Mixtos','009',1),(10,'Baño Lab. Arquitectura','010',1),(11,'Aula 21','011',1),(12,'Aula 22','012',1),(13,'Aula 27','013',1),(14,'Aula 23','014',1),(15,'Aula 26','015',1),(16,'SUM','016',1),(17,'Aula 25','017',1),(18,'Pasillo E','018',1),(19,'Escalera 5','019',1),(20,'Escalera 3','020',1),(21,'Pasillo A','021',1),(22,'Escalera 1','022',1),(23,'Pasillo B','023',1),(24,'Escalera 2','024',1),(25,'Alumnado','025',1),(26,'Administración','026',1),(27,'Gabinete Ps.','027',1),(28,'Sec. Académica','028',1),(29,'Of. de Personal','029',1),(30,'Baño Hombre Pasillo B','030',1),(31,'Baño Dama Pasillo B','031',1),(32,'Baño Discapacitado Pasillo B','032',1),(33,'Cantina','033',1),(34,'Biblioteca','034',1),(35,'Sala de Lectura','035',1),(36,'Sec. Asuntos Estudiantiles','036',1),(37,'Dasuten','037',1),(38,'Aula 1','038',1),(39,'Baño Dama Pasillo E','039',1),(40,'Baño Hombre Pasillo D','040',1),(41,'Laboratorio de Suelos','041',1),(42,'Baño Discapacitado Pasillo C','042',1),(43,'Baño Hombre Pasillo C','043',1),(44,'Laboratorio de Materiales','044',1),(45,'Nave Laboratorios Civil','045',1),(46,'Pasillo A Nave Electromecánica','046',1),(47,'Pasillo B Nave Electromecánica','047',1),(48,'Laboratorio de Mecánica','048',1),(49,'Mantenimiento','049',1),(50,'GDE','050',1),(51,'Laboratorio de Ensayo de Motores','051',1),(52,'Metrología','052',1),(53,'Baño Hombre Nave Electro','053',1),(54,'Baño Dama Nave Electro','054',1),(55,'SUM ll','055',1),(56,'Acceso Calle La Heras','056',1),(57,'Hall Ingreso Calle Laprida','057',1),(58,'Sala de Consejo','058',1),(59,'Unidad Vinculación Tecnológica','059',1),(60,'Secretaría Extensión Universitaria','060',1),(61,'Área de Convenios','061',1),(62,'Secretaría Administrativa','062',1),(63,'Cursos de Capacitación','063',1),(64,'Decanato','064',1),(65,'Vice-Decanato','065',1),(66,'Secretaría de Decanato','066',1),(67,'Cocina Pasillo B','067',1),(68,'Depto. Ing. Electromecánica','068',1),(69,'Depto. Ing. Civil','069',1),(70,'Depto. Básicas','070',1),(71,'Laboratorio Química','071',1),(72,'Aula 11','072',1),(73,'Lab. Información Geográfica','073',1),(74,'Aula 10','074',1),(75,'Aula 14D','075',1),(76,'Aula 14C','076',1),(77,'Aula 14B','077',1),(78,'Aula 14A','078',1),(79,'Aula 15','079',1),(80,'Aula 16','080',1),(81,'Aula 17','081',1),(82,'Aula 13','082',1),(83,'Aula 13Bis','083',1),(84,'Escalera 6','084',1),(85,'Escalera 7','085',1),(86,'Escalera 8','086',1),(87,'Laboratorio Metalografía','087',1),(88,'Laboratorio Energías Renovables','088',1),(89,'Laboratorio Electricidad','089',1),(90,'Área Usos Múltiples','090',1),(91,'Aula 28','091',1),(92,'Aula 29','092',1),(93,'Aula 31','093',1),(94,'Pasillo SUM','094',1),(95,'Escalera 7','095',1),(96,'Calles Las Heras','096',1),(97,'Patio Interno','097',1),(98,'Pasillo Calle Las Heras','098',1),(99,'Estacionamiento','099',1),(100,'Patio Estacionamiento','100',1),(101,'Calle Laprida','101',1),(102,'Patio Cantina','102',1),(103,'Medición CEVT Laprida','103',1),(104,'Sala de Bombas','104',1);
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id_tag` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `tag_diminutivo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tareas`
--

DROP TABLE IF EXISTS `tareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tareas` (
  `id_tarea` int NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`id_tarea`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- Inserción de datos en la tabla tareas
INSERT INTO `tareas` (`descripcion`) VALUES
('Relevar marca.'),
('Relevar material.'),
('Relevar tamaño de gabinete.'),
('Relevar marca de máquina primaria y alternador.'),
('Relevar tipo de piso.'),
('Relevar material de paredes.'),
('Relevar modelo.'),
('Número de hojas.'),
('Relevar tamaño.'),
('Cerradura Si/No.'),
('Mochila empotrada/exterior.'),
('Canaletas Si/No.'),
('Bajadas Si/No.'),
('Acceso desde el interior Si/No.'),
('Relevar tipo (Abril/Corredizo/Levadizo/Otro).'),
('Relevar modelos.'),
('Relevar dimensiones.'),
('Relevar tipo de techo.'),
('Relevar material de piso.'),
('Tipo (Caracol/Marinera/Convencional).'),
('Relevar potencia.'),
('Relevar potencia/tamaño.'),
('Tipo de vidrio.'),
('Relevar tipo.'),
('De columna/Empotrado.'),
('Relevar cantidades de piletas.'),
('Montaje: Pared / Techo / Móvil.'),
('Relevar tipo de accionamiento.'),
('Eléctrico/Gas - Tipo de gas.'),
('Cantidad de bajadas.'),
('Relevar cantidad y potencia.'),
('Relevar potencia y características eléctricas principales.'),
('Relevar tipo/material.'),
('Tipo de tapa. Ciega/Rejilla/Otra.'),
('Abiertas/Cerradas.'),
('Relevar material de techo.'),
('Relevar cantidad de lámparas por equipo.'),
('Frío - Calor - Frío/Calor.'),
('Corrediza/De abrir.'),
('Relevar tipo de canilla.'),
('Relevar cantidad y material de palas.'),
('Tipo de puerta.'),
('Relevar capacidad.'),
('Tiene iluminación sobre estructura.'),
('Bajadas internas/externas.'),
('Baranda Si/No.'),
('Marca/Modelo/Tipo de cerradura.'),
('Agua fría/caliente.'),
('Relevar tipo y marca de controlador.'),
('Puerta manual/automática.'),
('Relevar dimensiones.'),
('Tiro balanceado Si/No.'),
('Material de bajadas.'),
('Marca/Modelo/Tipo de bisagras.'),
('Limpieza de luminaria y lámpara.'),
('Verificar carga de gas y NO de fugas.'),
('Realice verificación de correcto funcionamiento.'),
('Verifique correcta sujección de vidrios.'),
('Verificar y correcto montaje de las protecciones contra choque eléctrico.'),
('Verificar existencia y correcto montaje de protecciones mecánicas.'),
('Verifique y lubrique cerraduras.'),
('Verificar correcto estado de cableado eléctrico, tomacorriente y conexiones eléctricas.'),
('Verifique limpieza de canaletas. Debe encontrarse libre de obstrucciones y apta para la correcta descarga de agua.'),
('Actividad 1 de 4 Mensual. Indique Fecha:'),
('ATENCIÓN: ESTA MISMA OT SERÁ UTILIZADA PARA LAS 4 ACTIVIDADES MENSUALES.'),
('Utilice los Elementos de Protección Personal para trabajos en altura.'),
('Verificar correcto montaje y sujección.'),
('Realice limpieza de filtros.'),
('Realizar limpieza del equipo.'),
('Verificar correcto funcionamiento de puertas y cerraduras.'),
('Verificar NO de pérdidas de líquidos y/o gas.'),
('Realizar limpieza externa del equipo.'),
('Verifique sujección y estanqueidad de bajadas de descarga de canaletas.'),
('Actividad 2 de 4 Mensual. Indique Fecha:'),
('Realice limpieza interna y externa de los equipos.'),
('Verifique correcto funcionamiento del equipo luego de finalizada la actividad.'),
('Realice limpieza completa de ambas unidades.'),
('Conecte nuevamente a la red eléctrica y realice una prueba de correcto funcionamiento.'),
('Verificar correcto ajuste de conexiones eléctricas.'),
('Verificar NO de señales de sobrecalentamiento de los componentes.'),
('No utilice elementos húmedos ni líquidos. Para retirar polvos, utilice un equipo de aspiración.'),
('¡¡¡EN CASO DE DETECTAR ANOMALÍAS, CONTACTAR AL SERVICIO TÉCNICO AUTORIZADO. SI ESTAS ANOMALÍAS SON CRÍTICAS, DETENGA EL USO DEL EQUIPO!!!'),
('Actividad 3 de 4 Mensual. Indique Fecha:'),
('Actividad 4 de 4 Mensual. Indique Fecha:'),
('Completar la documentación de mantenimiento. Al finalizar la actividad, deje el área y equipo limpios, ordenados y seguros.'),
('Relevar cualquier otro dato que considere relevante para el mantenimiento'),
('Tomar fotografia'),
('Al finalizar la actividad deje el area limpia, ordenada y segura'),
('Señalice el área de Trabajo'),
('Control de louver'),
('Verificación de  funcionamiento de la totalidad de las lámparas.'),
('Verificación de estados de zocalos y/o portalámparas.'),
('Limpieza de luminaria y lampara.'),
('Verificar correcto montaje y sujección.'),
('Complete la documentación de mantenimiento'),
('Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.'),
('Frio - Calor - Frio/Calor'),
('Verificar correcto estatdo de cableado electrico, tomacorriente y conexiones electricas'),
('Verificar correcta y firme fijacion a la pared o estructura de ambas unidades'),
('Verificar carga de gas y no de fugas'),
('Verifique correcto funcionamiento de valvulas'),
('Verificar falta de perdidas'),
('Con vidrio/Sin vidrio/ Tipo'),
('Verifique estado general'),
('Verifique y lubrique visagras y/o correderas'),
('Verifique y lubrique visagras y/ o correderas y/ o enrrolladores'),
('Verificar correcta y firme fijacion a pared o estructura'),
('Verificar estado de carga. Lectura de manometro de presion y fecha de vencimiento'),
('verificar correcta y firme fijacion de baranda a pared o estructura'),
('Verifique el buen estado general'),
('Verifique firme montaje de componentes'),
('Verificar correcto montaje de la proteccion contra choque electrico'),
('Verificar correcto ajuste de conexiones electricas. Verificar NO de señales de sobrecalentamiento de los componentes'),
('Realizar limpieza del equipo. NO utilize elementos humedos ni liquidos. Para retirar polvos, utilize un equipo de aspiracion'),
('Señalice el area de trabajo. desconecte la energia electrica - verificar no existencia de tension electrica');

LOCK TABLES `tareas` WRITE;
/*!40000 ALTER TABLE `tareas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tareas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ubicacion`
--

DROP TABLE IF EXISTS `ubicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ubicacion` (
  `id_ubicacion` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `labeltag` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_ubicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubicacion`
--

LOCK TABLES `ubicacion` WRITE;
/*!40000 ALTER TABLE `ubicacion` DISABLE KEYS */;
INSERT INTO `ubicacion` VALUES (1,'Interior','001',1),(2,'Exterior Bajo Techo','002',1),(3,'Exterior Sin Techo','003',1);
/*!40000 ALTER TABLE `ubicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (10,'Juan'),(20,'Pablo'),(30,'Pedro'),(40,'Ana'),(50,'Carlos'),(60,'Ruben');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-26 21:55:50
