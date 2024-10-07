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
--

CREATE DATABASE mantenimiento_utn;

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
/*!40000 ALTER TABLE `activo` DISABLE KEYS */;
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

--
-- Dumping data for table `tareas`
--

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
