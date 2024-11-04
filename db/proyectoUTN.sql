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
-- Table structure for table `activo`usuario
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
INSERT INTO `activo` VALUES 
(1,'Iluminación','ILUM - ',1),
(2,'Aire Acondicionado','AACO - ',1),
(3,'Radiador Calefacción','RCAL - ',1),
(4,'Puerta','PRTA - ',1),
(5,'Ventanas & Cortinas','VENT - ',1),
(6,'Luces de Emergencia','LEME - ',1),
(7,'Matafuego','MTFG - ',1),
(8,'Barandas y Escaleras','BESC - ',1),
(9,'Tablero Eléctrico','TABE - ',1),
(10,'Inodoro & Mochila','INOD - ',1),
(11,'Mesada','MESA - ',1),
(12,'Ventilador','VENT - ',1),
(13,'NA','NA',1),
(14,'Puerta Emergencia','PTAE - ',1),
(15,'Ascensor','ASCN - ',1),
(16,'Cortina Enrollar Motor','CORT - ',1),
(17,'NA','NA',1),
(18,'Termotanque','TMTQ - ',1),
(19,'Calefactor','CALE - ',1),
(20,'Caldera','CALD - ',1),
(21,'Techos y Canaletas','TCHO - ',1),
(22,'NA','NA',1),
(23,'Balcones','BALCO - ',1),
(24,'Paneles Solares e Inversor','PSOL - ',1),
(25,'Portones','PORT - ',1),
(26,'Generador Eléctrico','GNDR - ',1),
(27,'Bombas de Agua','BMBA - ',1),
(28,'Tanques de Agua','TNQE - ',1),
(29,'Rejillas & Desagues','DESA - ',1),
(30,'NA','NA',1),
(31,'Emergencia Alarma','EMER - ',1),
(32,'Espacio Físico','ESFI - ',1),
(33,'Ducha','DCHA - ',1),
(34,'Cocheras','CHRA - ',1),
(35,'Escalera','ESLR - ',1),
(36,'NA','NA',1),
(37,'Cámara Desagüe','CDES - ',1),
(38,'Cámara Septicas','CSEP - ',1);
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

(1, 1), -- Relevar marca.
(1, 7), -- Relevar modelo.
(1, 21), -- Relevar potencia.
(1, 37), -- Relevar cantidad de lámparas por equipo.
(1, null), --
(1, null), --
(1, null), --
(1, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(1, 87), -- Tomar fotografía.
(1, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(1, 115), -- Señalice el área de trabajo. Desconecte la energía eléctrica - verificar no existencia de tensión eléctrica.
(1, 90), -- Control de louver.
(1, 91), -- Verificación de funcionamiento de la totalidad de las lámparas.
(1, 92), -- Verificación de estados de zócalos y/o portalámparas.
(1, 93), -- Limpieza de luminaria y lámpara.
(1, 94), -- Verificar correcto montaje y sujeción.
(1, 76), -- Verificar correcto funcionamiento del equipo luego de finalizada la actividad.
(1, null), --
(1, 95), -- Complete la documentación de mantenimiento.
(1, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.


-- Activo 2

(2, 1), -- Relevar marca.
(2, 7), -- Relevar modelo.
(2, 21), -- Relevar potencia.
(2, 97), -- Frío - Calor - Frío/Calor.
(2, null), --
(2, null), --
(2, null), --
(2, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(2, 87), -- Tomar fotografía.
(2, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(2, 115), -- Señalice el área de trabajo. Desconecte la energía eléctrica - verificar no existencia de tensión eléctrica.
(2, 98), -- Verificar correcto estado de cableado eléctrico, tomacorriente y conexiones eléctricas.
(2, 99), -- Verificar correcta y firme fijación a la pared o estructura de ambas unidades.
(2, 60), -- Verificar existencia y correcto montaje de protecciones mecánicas.
(2, 100), -- Verificar carga de gas y no de fugas.
(2, 68), -- Realizar limpieza de filtros.
(2, 77), -- Realizar limpieza completa de ambas unidades.
(2, 78), -- Conectar nuevamente a la red eléctrica y realizar una prueba de correcto funcionamiento.
(2, 95), -- Complete la documentación de mantenimiento.
(2, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 3
(3, 1), -- Relevar marca.
(3, 7), -- Relevar modelo.
(3, 22), -- Relevar potencia/tamaño.
(3, null), --
(3, null), --
(3, null), --
(3, null), --
(3, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(3, 87), -- Tomar fotografía.
(3, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(3, 89), -- Señalice el área de trabajo.
(3, 101), -- Verificar correcto funcionamiento de válvulas. 
(3, 102), -- Verificar falta de pérdidas.
(3, 69), -- Realizar limpieza del equipo.
(3, 57), -- Realizar verificación de correcto funcionamiento.
(3, null), --
(3, null), --
(3, null), --
(3, 95), -- Complete la documentación de mantenimiento.
(3, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 4
(4, 2), -- Relevar material.
(4, 8), -- Número de hojas.
(4, 103), -- Con vidrio/Sin vidrio/ Tipo.
(4, 39), -- Corrediza/De abrir.
(4, 47), -- Marca/Modelo/Tipo de cerradura.
(4, 54), -- Marca/Modelo/Tipo de bisagras.
(4, null), --
(4, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(4, 87), -- Tomar fotografía.
(4, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(4, 89), -- Señalice el área de trabajo.
(4, 104), -- Verificar estado general.
(4, 105), -- Verificar y lubricar bisagras y/o correderas.
(4, 61), -- Verificar y lubricar cerraduras.
(4, 58), -- Verificar correcta sujeción de vidrios.
(4, 69), -- Realizar limpieza del equipo.
(4, 57), -- Realizar verificación de correcto funcionamiento.
(4, null), --
(4, 95), -- Complete la documentación de mantenimiento.
(4, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.


-- Activo 5
(5, 2), -- Relevar material.
(5, 8), -- Número de hojas.
(5, 23), -- Tipo de vidrio.
(5, 39), -- Corrediza/De abrir.
(5, 47), -- Marca/Modelo/Tipo de cerradura.
(5, null), --
(5, null), --
(5, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento. 
(5, 87), -- Tomar fotografía.
(5, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(5, 89), -- Señalice el área de trabajo.
(5, 104), -- Verificar estado general.
(5, 106), -- Verificar y lubricar bisagras y/o correderas y/o enrolladores.
(5, 61), -- Verificar y lubricar cerraduras.
(5, 58), -- Verificar correcta sujeción de vidrios.
(5, 69), -- Realizar limpieza del equipo.
(5, 57), -- Realizar verificación de correcto funcionamiento.
(5, null), --
(5, 95), -- Complete la documentación de mantenimiento.
(5, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 6

(6, 1), -- Relevar marca.
(6, 7), -- Relevar modelo.
(6, 22), -- Relevar potencia/tamaño.
(6, null), --
(6, null), --
(6, null), --
(6, null), --
(6, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(6, 87), -- Tomar fotografía.
(6, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(6, 89), -- Señalice el área de trabajo.
(6, 107), -- Verificar correcta y firme fijación a pared o estructura.
(6, 98), -- Verificar correcto estado de cableado eléctrico, tomacorriente y conexiones eléctricas.
(6, null), --
(6, null), --
(6, 69), -- Realizar limpieza del equipo.
(6, 57), -- Realizar verificación de correcto funcionamiento.
(6, null), --
(6, 95), -- Complete la documentación de mantenimiento.
(6, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 7
(7, 1), -- Relevar marca.
(7, 9), -- Relevar tamaño.
(7, 24), -- Relevar tipo.
(7, null), --
(7, null), --
(7, null), --
(7, null), --
(7, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(7, 87), -- Tomar fotografía.
(7, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(7, 89), -- Señalice el área de trabajo.
(7, 107), -- Verificar correcta y firme fijación a pared o estructura.
(7, 108), -- Verificar estado de carga. Lectura de manómetro de presión y fecha de vencimiento.
(7, null), --
(7, null), --
(7, 69), -- Realizar limpieza del equipo.
(7, null), --
(7, null), --
(7, 95), -- Complete la documentación de mantenimiento.
(7, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.


-- Activo 8
(8, 2), -- Relevar material.
(8, null), --
(8, null), --
(8, null), --
(8, null), --
(8, null), --
(8, null), --
(8, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(8, 87), -- Tomar fotografía.
(8, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(8, 89), -- Señalice el área de trabajo.
(8, 109), -- Verificar correcta y firme fijación de baranda a pared o estructura.
(8, 110), -- Verificar el buen estado general.
(8, null), --
(8, null), --
(8, 69), -- Realizar limpieza del equipo.
(8, null), --
(8, null), --
(8, 95), -- Complete la documentación de mantenimiento.
(8, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 9
(9, 3), -- Relevar tamaño de gabinete.
(9, 10), -- Cerradura Sí/No.
(9, 25), -- De columna/Empotrado.
(9, null), --
(9, null), --
(9, null), --
(9, null), --
(9, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(9, 87), -- Tomar fotografía.
(9, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(9, 115), -- Señalice el área de trabajo. Desconecte la energía eléctrica - verificar no existencia de tensión eléctrica.
(9, 107), -- Verificar correcta y firme fijación a pared o estructura.
(9, 110), -- Verificar el buen estado general.
(9, 111), -- Verificar firme montaje de componentes.
(9, 112), -- Verificar correcto montaje de la protección contra choque eléctrico.
(9, 70), -- Verificar correcto funcionamiento de puertas y cerraduras.
(9, 113), -- Verificar correcto ajuste de conexiones eléctricas. Verificar NO de señales de sobrecalentamiento de los componentes.
(9, 114), -- Realizar limpieza del equipo. NO utilice elementos húmedos ni líquidos. Para retirar polvos, utilice un equipo de aspiración.
(9, 95), -- Complete la documentación de mantenimiento.
(9, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 10
(10, 1),  -- Relevar marca.
(10, 11),  -- Mochila empotrada/exterior.
(10, null),  -- 
(10, null),  -- 
(10, null),  -- 
(10, null),  -- 
(10, null), -- 
(10, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(10, 87), -- Tomar fotografía.
(10, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(10, 89), -- Señalice el área de trabajo.
(10, 107), -- Verificar correcta y firme fijación a pared o estructura.
(10, 102), -- Verificar falta de pérdidas.
(10, null), --
(10, null), -- 
(10, 114), -- Realizar limpieza del equipo. NO utilice elementos húmedos ni líquidos. Para retirar polvos, utilice un equipo de aspiración.
(10, 57), -- Realizar verificación de correcto funcionamiento.
(10, null),
(10, 95), -- Complete la documentación de mantenimiento.
(10, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 11

(11, 2),  -- Relevar Material
(11, 9),  -- Relevar Tamaño
(11, 26),  -- Relevar cantidad de piletas
(11, 40),  -- Relevar tipo de canilla
(11, 48),  -- Agua fria/Caliente
(11, null),  --
(11, null), -- 
(11, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento
(11, 87), -- Tomar fotografía
(11, 88), -- Al finalizar la actividad deje el area limpia ordenada y segura
(11, 89), -- Señalice el area de trabajo
(11, 99), -- Verificar correcta y firme fijacion a pared o estructura
(11, 102), -- Verificar falta de perdidas
(11, null),  -- 
(11, null),  -- 
(11, 69),  -- Realizar limpieza del equipo
(11, 57),  -- Realice verificacion de correcto funcionamiento
(11, null),  -- 
(11, 95),  -- Complete la documentacion de mantenimiento
(11, 96),  -- Al finalizar la actividad deje el area y equipo limpios, ordenados y seguros

-- Activo 12
(12, 1),  -- Relevar Marca
(12, 7),  -- Relevar Modelo
(12, 27),  -- Montaje: Pared/Techo/Móvil
(12, 41),  -- Relevar cantidad y material de palas
(12, 49),  -- Relevar tipo y marca de controlador
(12, null),  -- 
(12, null), -- 
(12, 86), -- Relevar cualquier otro que considere relevante para el mantenimiento
(12, 87), -- Tomar fotografía
(12, 88), -- Al finalizar la actividad deje el area limpia, ordenada y segura
(12, 89), -- Señalice el area de trabajo
(12, 99), -- Verificar correcta y firme fijacion a pared o estructura
(12, 116), -- Verificar estado general
(12, 62), -- Verificar correcto estado de cableado electrico, toma corriente y conexiones electricas
(12, 60), -- Verificar existencia y correcto montaje de protecciones mecanicas.
(12, 69), -- Realizar limpieza del equipo
(12, 57), -- Realice verificacion de correcto mantenimiento
(12, null), -- 
(12, 95), -- Complete la documentacion de mantenimiento
(12, 96), -- Al finalizar la actividad deje el area y equipo limpios, ordenados y seguros

-- Activo 13
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 
(13, null),  -- 

-- Activo 14
(14, 1),  -- Relevar Marca
(14, 8),  -- Numero de hojas
(14, 103),  -- Con vidrio/Sin vidrio/Tipo
(14, 39),  -- Corrediza/De abrir
(14, 47),  -- Marca/Modelo/Tipo de cerradura.
(14, 54),  -- Marca/ Modelo/ Tipo de visagra
(14, null), -- 
(14, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento
(14, 87), -- Tomar fotografia
(14, 88), -- Al finalizar la actividad deje el area limpia, ordenada y segura
(14, 89), -- Señalice el area de trabajo
(14, 107), -- Verificar correcta y firme fijacion a pared o estructura
(14, 116), -- Verificar estado general
(14, 117), -- Verificar correcto montaje de protecciones mecanicas
(14, 61), -- Verifique y lubrique cerraduras.
(14, 58), -- Verifique correcta sujeccion de vidrios
(14, 57), -- Realice verificacion de correcto funcionamiento
(14, 69), -- Realizar limpieza del equipo
(14, 95), -- Complete la documentacion de mantenimiento
(14, 96), -- Al finalizar la actividad deje el area y equipo limpio, ordenados y seguros

-- Activo 15
(15, 1),  -- Relevar Marca
(15, 7),  -- Relevar Modelo
(15, 28),  -- Relevar tipo de accionamiento
(15, 42),  -- Tipo de puerta
(15, 50),  -- Puerta manual/Automatica
(15, null),  -- 
(15, null), -- 
(15, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento
(15, 87), -- Tomar fotografias
(15, 88), -- Al finalizar la actividad deje el area limpia, ordenada y segura
(15, 89), -- Señalice el area de trabajo
(15, null), -- 
(15, 116), -- Verificar estado general
(15, 60), -- Verifique existencia y correcto montaje de protecciones mecanicas.
(15, null), -- 
(15, 69), -- Realizar limpieza del equipo
(15, 57), -- Realice verificacion de correcto funcionamiento
(15, 82), -- En caso de detectar anomalias contactar al servicio tecnico autorizado
(15, 95), -- Complete la documentacion de mantenimiento
(15, 96), -- Al finalizar la actividad deje el area y equipo limpio, ordenados y seguros

-- Activo 16
(16, 1),  -- Relevar Marca
(16, 7),  -- Relevar Modelo
(16, 2),  -- Relevar Material
(16, 28),  -- Relevar tipo de accionamiento.
(16, 51),  -- Relevar dimensiones
(16, null),  -- 
(16, null), -- 
(16, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento
(16, 87), -- Tomar fotografias
(16, 88), -- Al finalizar la actividad deje el area limpia, ordenada y segura
(16, 89), -- Señalice el area de trabajo
(16, 99), -- Verificar correcta y firme fijacion a pared o estructura
(16, 116), -- Verificar estado general
(16, 117), -- Verifique correcto montaje de protecciones mecanicas
(16, 62), -- Verificar correcto estado de cableado electrico, toma corriente y conexiones electricas
(16, 69), -- Realizar limpieza del equipo
(16, 57), -- Realice verificacion de correcto funcionamiento
(16, null), -- 
(16, 95), -- Complete la documentacion de mantenimiento
(16, 96), --  Al finalizar la actividad deje el area y equipo limpio, ordenados y seguros

-- Activo 17
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 
(17, null),  -- 

-- Activo 18
(18, 1), -- Relevar marca.
(18, 7), -- Relevar modelo.
(18, 29), -- Eléctrico/Gas (Tipo de gas).
(18, 21), -- Relevar potencia.
(18, null), -- (Sin tarea).
(18, null), -- (Sin tarea).
(18, null), -- (Sin tarea).
(18, 86), -- Relevar cualquier otro dato relevante para el mantenimiento.
(18, 87), -- Tomar fotografía.
(18, 88), -- Al finalizar, dejar el área limpia, ordenada y segura.
(18, 89), -- Señalizar el área de trabajo.
(18, 107), -- Verificar estado de carga, lectura de manómetro de presión y fecha de vencimiento.
(18, 104), -- Lubricar bisagras y/o correderas.
(18, 60), -- Verificar montaje de protecciones contra choque eléctrico.
(18, 62), -- Verificar estado de cableado eléctrico, tomacorrientes y conexiones eléctricas.
(18, 102), -- Con vidrio/Sin vidrio/Tipo.
(18, 69), -- Realizar limpieza del equipo.
(18, null), -- (Sin tarea).
(18, 95), -- Completar documentación de mantenimiento.
(18, 96), -- Frío/Calor/Frío-Calor.

-- Activo 19
(19, 1), -- Relevar marca
(19, 7), -- Relevar modelo
(19, 29), -- Eléctrico/Gas - Tipo de gas
(19, 21), -- Relevar potencia
(19, 52), -- Tiro balanceado Si/No
(19, null),
(19, null),
(19, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento
(19, 87), -- Tomar fotografía
(19, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura
(19, 89), -- Señalice el área de trabajo
(19, 99), -- Verificar correcta y firme fijación a la pared o estructura de ambas unidades
(19, 116), -- Verificar estado general
(19, 117), -- Verificar correcto montaje de protecciones mecánicas
(19, 62), -- Verifique limpieza de canaletas. Debe encontrarse libre de obstrucciones y apta para la correcta descarga de agua
(19, 102), -- Verificar falta de pérdidas
(19, 69), -- Realice limpieza de filtros
(19, null),
(19, 95), -- Complete la documentación de mantenimiento
(19, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros


-- Activo 20
(20, 1),  -- Relevar marca.
(20, 7),  -- Relevar modelo.
(20, 29),  -- Eléctrico/Gas - Tipo de gas.
(20, 21),  -- Relevar potencia.
(20, null),  --
(20, null),  -- 
(20, null), -- 
(20, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(20, 87), -- Tomar fotografía.
(20, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(20, 89), -- Señalice el área de trabajo.
(20, null), -- 
(20, 116), -- Verificar estado general.
(20, 117), -- Verificar correcto montaje de protecciones mecánicas.
(20, null), -- 
(20, 72), -- Realizar limpieza externa del equipo.
(20, 57), -- Realizar verificación de correcto funcionamiento.
(20, 82), -- ¡¡¡EN CASO DE DETECTAR ANOMALÍAS, CONTACTAR AL SERVICIO TÉCNICO AUTORIZADO. SI ESTAS ANOMALÍAS SON CRÍTICAS, DETENGA EL USO DEL EQUIPO!!!
(20, 95), -- Complete la documentación de mantenimiento.
(20, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 21
(21, 2),  -- 
(21, 12),  -- 
(21, null),  -- 
(21, null),  -- 
(21, null),  -- 
(21, null),  -- 
(21, null), -- 
(21, 86), -- 
(21, 87), -- 
(21, 88), -- 
(21, 89), -- 
(21, 66), -- 
(21, 104), -- 
(21, 118), -- Verificar correcta sujeccion de coberturas, canaletas, cumbreras, cenefas y otros
(21, 63), -- 
(21, 73), -- 
(21, 119), -- Verifique que las descargas de canaletas permitan un flujo libre y se encuentren conectadas correctamente en extremos y uniones
(21, null), -- 
(21, 95), -- 
(21, 96), --  

-- Activo 22
(22, 30),  -- Cantidad de bajadas.
(22, 45),  -- Bajadas internas/externas.
(22, 53),  -- Material de bajadas.
(22, null),  -- 
(22, null),  -- 
(22, 86), -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(22, 87), -- Tomar fotografía.
(22, 88), -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(22, null), -- 
(22, null), -- 
(22, null), -- 
(22, null), -- 
(22, null), -- 
(22, null), -- 
(22, 95), -- Complete la documentación de mantenimiento.
(22, 96), -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 23
(23, 2),  -- Relevar material.
(23, 14),  -- Acceso desde el interior Sí/No.
(23, null),  -- 
(23, 46),  -- Baranda Sí/No.
(23, null),  -- 
(23, null),  -- 
(23, null),  -- 
(23, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(23, 87),  -- Tomar fotografía.
(23, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(23, 89),  -- Señalice el área de trabajo.
(23, 66),  -- Utilice los Elementos de Protección Personal para trabajos en altura.
(23, 116),  -- Verificar estado general.
(23, 107),  -- Verificar correcta y firme fijación a pared o estructura.
(23, 117),  -- Verificar correcto montaje de protecciones mecánicas.
(23, null),  -- 
(23, null),  -- 
(23, 69),  -- Realizar limpieza del equipo.
(23, 95),  -- Complete la documentación de mantenimiento.
(23, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 24
(24, 1),  -- Relevar marca.
(24, 7),  -- Relevar modelo.
(24, 31),  -- Relevar cantidad y potencia.
(24, null),  -- 
(24, null),  -- 
(24, null),  -- 
(24, null),  -- 
(24, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(24, 87),  -- Tomar fotografía.
(24, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(24, 115),  -- Señalice el área de trabajo. Desconecte la energía eléctrica - verificar no existencia de tensión eléctrica.
(24, 66),  -- Utilice los Elementos de Protección Personal para trabajos en altura.
(24, 116),  -- Verificar estado general.
(24, 107),  -- Verificar correcta y firme fijación a pared o estructura.
(24, 117),  -- Verificar correcto montaje de protecciones mecánicas.
(24, 69),  -- Realizar limpieza del equipo.
(24, 57),  -- Realizar verificación de correcto funcionamiento.
(24, 82),  -- ¡¡¡EN CASO DE DETECTAR ANOMALÍAS, CONTACTAR AL SERVICIO TÉCNICO AUTORIZADO. SI ESTAS ANOMALÍAS SON CRÍTICAS, DETENGA EL USO DEL EQUIPO!!!
(24, 95),  -- Complete la documentación de mantenimiento.
(24, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 25
(25, 2),  -- Relevar material.
(25, 15),  -- Relevar tipo (Abrir/Corredizo/Levadizo/Otro).
(25, null),  -- 
(25, null),  -- 
(25, null),  -- 
(25, null),  -- 
(25, null),  -- 
(25, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(25, 87),  -- Tomar fotografía.
(25, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(25, 115),  -- Señalice el área de trabajo. Desconecte la energía eléctrica - verificar no existencia de tensión eléctrica.
(25, null),  -- 
(25, 116),  -- Verificar estado general.
(25, 107),  -- Verificar correcta y firme fijación a pared o estructura.
(25, 117),  -- Verificar correcto montaje de protecciones mecánicas.
(25, 69),  -- Realizar limpieza del equipo.
(25, 57),  -- Realizar verificación de correcto funcionamiento.
(25, null),  -- 
(25, 95),  -- Complete la documentación de mantenimiento.
(25, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 26
(26, 4),  -- Relevar marca de máquina primaria y alternador.
(26, 16),  -- Relevar modelos.
(26, 32),  -- Relevar potencia y características eléctricas principales.
(26, null),  -- 
(26, null),  -- 
(26, null),  -- 
(26, null),  -- 
(26, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(26, 87),  -- Tomar fotografía.
(26, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(26, 115),  -- Señalice el área de trabajo. Desconecte la energía eléctrica - verificar no existencia de tensión eléctrica.
(26, null),  -- 
(26, 116),  -- Verificar estado general.
(26, null),  -- 
(26, 117),  -- Verificar correcto montaje de protecciones mecánicas.
(26, 69),  -- Realizar limpieza del equipo.
(26, 57),  -- Realizar verificación de correcto funcionamiento.
(26, 82),  -- ¡¡¡EN CASO DE DETECTAR ANOMALÍAS, CONTACTAR AL SERVICIO TÉCNICO AUTORIZADO. SI ESTAS ANOMALÍAS SON CRÍTICAS, DETENGA EL USO DEL EQUIPO!!!
(26, 95),  -- Complete la documentación de mantenimiento.
(26, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.


-- Activo 27
(27, 1),  -- Relevar marca.
(27, 7),  -- Relevar modelo.
(27, 24),  -- Relevar tipo.
(27, null),  -- 
(27, null),  -- 
(27, null),  -- 
(27, null),  -- 
(27, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(27, 87),  -- Tomar fotografía.
(27, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(27, 115),  -- Señalice el área de trabajo. Desconecte la energía eléctrica - verificar no existencia de tensión eléctrica.
(27, null),  -- 
(27, 104),  -- Verificar estado general.
(27, null),  -- 
(27, 60),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(27, 114),  -- Realizar limpieza de los equipos.
(27, 57),  -- Realizar verificación de correcto funcionamiento.
(27, 82),  -- ¡¡¡EN CASO DE DETECTAR ANOMALÍAS, CONTACTAR AL SERVICIO TÉCNICO AUTORIZADO. SI ESTAS ANOMALÍAS SON CRÍTICAS, DETENGA EL USO DEL EQUIPO!!!
(27, 95),  -- Complete la documentación de mantenimiento.
(27, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.


-- Activo 28
(28, 1),  -- Relevar Marca.
(28, 7),  -- Relevar Modelo.
(28, 24),  -- Relevar Tipo/Material.
(28, 43),  -- Relevar Capacidad.
(28, null),  -- 
(28, null),  -- 
(28, null),  -- 
(28, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(28, 87),  -- Tomar Fotografía.
(28, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(28, 89),  -- Señalice el área de Trabajo.
(28, 66),  -- Utilice los Elementos de Protección Personal para trabajos en altura.
(28, 116),  -- Verificar estado general.
(28, 71),  -- Verificar NO existencia de perdidas.
(28, 117),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(28, 75),  -- Realice limpieza interna y externa de los equipos.
(28, 57),  -- Realice verificación de correcto funcionamiento.
(28, null),  -- 
(28, 95),  -- Complete la documentación de mantenimiento.
(28, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.


-- Activo 29
(29, 2),  -- Relevar Material.
(29, 17),  -- Relevar Dimensiones.
(29, 34),  -- Tipo de Tapa. Ciega/Rejilla/Otra.
(29, null),  -- 
(29, null),  -- 
(29, null),  -- 
(29, null),  -- 
(29, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(29, 87),  -- Tomar Fotografía.
(29, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(29, 89),  -- Señalice el área de Trabajo.
(29, null),  -- 
(29, 116),  -- Verificar estado general.
(29, 71),  -- Verificar NO existencia de perdidas.
(29, 117),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(29, 75),  -- Realice limpieza interna y externa de los equipos.
(29, 57),  -- Realice verificación de correcto funcionamiento.
(29, null),  -- 
(29, 95),  -- Complete la documentación de mantenimiento.
(29, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 30
(30, 5),  -- Relevar Tipo de Piso.
(30, 18),  -- Relevar Tipo de Techo.
(30, 35),  -- Abiertas/Cerradas.
(30, 44),  -- Tiene Iluminación sobre Estructura.
(30, null),  -- 
(30, null),  -- 
(30, null),  -- 
(30, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(30, 87),  -- Tomar Fotografía.
(30, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(30, 89),  -- Señalice el área de Trabajo.
(30, 66),  -- Utilice los Elementos de Protección Personal para trabajos en altura.
(30, 116),  -- Verificar estado general.
(30, null),  -- 
(30, 117),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(30, 69),  -- Realice limpieza de los equipos.
(30, null),  --
(30, null),  -- 
(30, 95),  -- Complete la documentación de mantenimiento.
(30, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 31
(31, 1),  -- Relevar Marca.
(31, 2),  -- Relevar Modelo.
(31, null),  -- 
(31, null),  -- 
(31, null),  -- 
(31, null),  -- 
(31, null),  -- 
(31, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(31, 87),  -- Tomar Fotografía.
(31, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(31, 89),  -- Señalice el área de Trabajo.
(31, null),  -- 
(31, 116),  -- Verificar estado general.
(31, null),  -- 
(31, 117),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(31, 69),  -- Realice limpieza de los equipos.
(31, 57),  -- Realice verificación de correcto funcionamiento.
(31, null),  -- 
(31, 95),  -- Complete la documentación de mantenimiento.
(31, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 32
(32, 1),  -- Relevar Material de Paredes.
(32, 2),  -- Relevar Material de Piso.
(32, 3),  -- Relevar Material de Techo.
(32, null),  -- 
(32, null),  -- 
(32, null),  -- 
(32, null),  -- 
(32, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(32, 87),  -- Tomar Fotografía.
(32, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(32, 89),  -- Señalice el área de Trabajo.
(32, 116),  -- Verificar estado general.
(32, 82),  -- ATENCIÓN: ESTA MISMA OT SERÁ UTILIZADA PARA LAS 4 ACTIVIDADES MENSUALES.
(32, 7),  -- Realice limpieza, ordenamiento y/o emprolijamiento del área.
(32, 74),  -- Actividad 1 de 4 Mensual. Indique Fecha.
(32, 74),  -- Actividad 2 de 4 Mensual. Indique Fecha.
(32, 74),  -- Actividad 3 de 4 Mensual. Indique Fecha.
(32, 74),  -- Actividad 4 de 4 Mensual. Indique Fecha.
(32, 95),  -- Complete la documentación de mantenimiento.
(32, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 33
(33, 1),  -- Relevar Marca.
(33, 2),  -- Relevar Modelo.
(33, 3),  -- Relevar Material.
(33, null),  -- 
(33, null),  -- 
(33, null),  --
(33, null),  -- 
(33, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(33, 87),  -- Tomar Fotografía.
(33, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(33, 89),  -- Señalice el área de Trabajo.
(33, null),  -- 
(33, 116),  -- Verificar estado general.
(33, 71),  -- Verificar NO existencia de pérdidas.
(33, null),  -- 
(33, 69),  -- Realice limpieza de los equipos.
(33, 57),  -- Realice verificación de correcto funcionamiento.
(33, null),  -- 
(33, 95),  -- Complete la documentación de mantenimiento.
(33, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 34
(34, 1),  -- Relevar Material.
(34, 2),  -- Tipo. Caracol/Marinera/Convencional.
(34, null),  -- 
(34, null),  -- 
(34, null),  -- 
(34, null),  -- 
(34, null),  -- 
(34, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(34, 87),  -- Tomar fotografía.
(34, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(34, 89),  -- Señalice el área de trabajo.
(34, null),  -- 
(34, 116),  -- Verificar estado general.
(34, null),  -- 
(34, 60),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(34, 69),  -- Realice limpieza de los equipos.
(34, null),  -- 
(34, null),  -- 
(34, 95),  -- Complete la documentación de mantenimiento.
(34, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 35
(35, 1),  -- Relevar Marca.
(35, 2),  -- Relevar Modelo.
(35, 3),  -- Relevar Potencia.
(35, null),  -- 
(35, null),  -- 
(35, null),  -- 
(35, null),  -- 
(35, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(35, 87),  -- Tomar fotografía.
(35, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(35, null),  -- 
(35, null),  -- 
(35, null),  -- 
(35, null),  -- 
(35, null),  -- 
(35, null),  -- 
(35, null),  --
(35, null),  --
(35, 95),  -- Complete la documentación de mantenimiento.
(35, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 36
(36, 1),  -- Relevar Material.
(36, 2),  -- Relevar Dimensiones.
(36, 3),  -- Tipo de Tapa. Ciega/Rejilla/Otra.
(36, null),  -- 
(36, null),  -- 
(36, null),  -- 
(36, null),  -- 
(36, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(36, 87),  -- Tomar fotografía.
(36, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(36, 89),  -- Señalice el área de trabajo.
(36, null),  -- 
(36, 116),  -- Verificar estado general.
(36, 71),  -- Verificar NO existencia de pérdidas.
(36, 60),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(36, 75),  -- Realice limpieza interna y externa de los equipos.
(36, 57),  -- Realice verificación de correcto funcionamiento.
(36, null),  -- 
(36, 95),  -- Complete la documentación de mantenimiento.
(36, 96),  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.

-- Activo 37
(37, 1),  -- Relevar Material.
(37, 2),  -- Relevar Dimensiones.
(37, 3),  -- Tipo de Tapa. Ciega/Rejilla/Otra.
(37, null),  -- 
(37, null),  -- 
(37, null),  -- 
(37, null),  -- 
(37, 86),  -- Relevar cualquier otro dato que considere relevante para el mantenimiento.
(37, 87),  -- Tomar fotografía.
(37, 88),  -- Al finalizar la actividad deje el área limpia, ordenada y segura.
(37, 89),  -- Señalice el área de trabajo.
(37, null),  -- 
(37, 116),  -- Verificar estado general.
(37, 71),  -- Verificar NO existencia de pérdidas.
(37, 60),  -- Verificar existencia y correcto montaje de protecciones mecánicas.
(37, 75),  -- Realice limpieza interna y externa de los equipos.
(37, 57),  -- Realice verificación de correcto funcionamiento.
(37, null),  -- 
(37, 95),  -- Complete la documentación de mantenimiento.
(37, 96);  -- Al finalizar la actividad deje el área y equipo limpios, ordenados y seguros.





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

DROP TABLE IF EXISTS orden_trabajo;

CREATE TABLE orden_trabajo (
  id_orden_trabajo int NOT NULL AUTO_INCREMENT,
  fecha_impresion date NOT NULL,
  hora_impresion time NOT NULL,
  hora_inicio time DEFAULT NULL,
  hora_final time DEFAULT NULL,
  realizada tinyint(1) DEFAULT '0',
  id_usuario int DEFAULT NULL,
  id_sector int DEFAULT NULL,
  id_piso int DEFAULT NULL,
  id_edificio int DEFAULT NULL,
  id_tag int DEFAULT NULL,
  id_activo int DEFAULT NULL,  -- Nueva columna para id_activo
  observacion TEXT DEFAULT NULL,
  codigo VARCHAR(255) DEFAULT NULL, -- Columna para almacenar el código generado
  PRIMARY KEY (id_orden_trabajo),
  KEY id_usuario (id_usuario),
  KEY id_sector (id_sector),
  KEY id_piso (id_piso),
  KEY id_edificio (id_edificio),
  KEY id_tag (id_tag),
  KEY id_activo (id_activo),  -- Crear un índice para id_activo
  CONSTRAINT orden_trabajo_ibfk_1 FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
  CONSTRAINT orden_trabajo_ibfk_3 FOREIGN KEY (id_sector) REFERENCES sector (id_sector),
  CONSTRAINT orden_trabajo_ibfk_4 FOREIGN KEY (id_piso) REFERENCES piso_nivel (id_piso),
  CONSTRAINT orden_trabajo_ibfk_5 FOREIGN KEY (id_edificio) REFERENCES edificio (id_edificio),
  CONSTRAINT orden_trabajo_ibfk_6 FOREIGN KEY (id_tag) REFERENCES tag (id_tag),
  CONSTRAINT orden_trabajo_ibfk_7 FOREIGN KEY (id_activo) REFERENCES activo (id_activo) -- Relación con la tabla activo
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




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

INSERT INTO tag (id_tag, nombre, tag_diminutivo) VALUES
(1, 'Iluminación', 'ILUM'),
(2, 'Aire Acondicionado', 'AACO'),
(3, 'Radiador Calefacción', 'RCAL'),
(4, 'Puerta', 'PRTA'),
(5, 'Ventanas & Cortinas', 'VENT'),
(6, 'Luces de Emergencia', 'LEME'),
(7, 'Matafuego', 'MTFG'),
(8, 'Barandas y Escaleras', 'BESC'),
(9, 'Tablero Eléctrico', 'TABE'),
(10, 'Inodoro & Mochila', 'INOD'),
(11, 'Mesada', 'MESA'),
(12, 'Ventilador', 'VENT'),
(13, 'NA', 'NA'),  -- Se mantiene como NA
(14, 'Puerta Emergencia', 'PTAE'),
(15, 'Ascensor', 'ASCN'),
(16, 'Cortina Enrollar Motor', 'CORT'),
(17, 'NA', 'NA'),  -- Se mantiene como NA
(18, 'Termotanque', 'TMTQ'),
(19, 'Calefactor', 'CALE'),
(20, 'Caldera', 'CALD'),
(21, 'Techos y Canaletas', 'TCHO'),
(22, 'NA', 'NA'),  -- Se mantiene como NA
(23, 'Balcones', 'BALCO'),
(24, 'Paneles Solares e Inversor', 'PSOL'),
(25, 'Portones', 'PORT'),
(26, 'Generador Eléctrico', 'GNDR'),
(27, 'Bombas de Agua', 'BMBA'),
(28, 'Tanques de Agua', 'TNQE'),
(29, 'Rejillas & Desagues', 'DESA'),
(30, 'NA', 'NA'),      -- Se mantiene como NA
(31, 'Emergencia Alarma', 'EMER'),
(32, 'Espacio Físico', 'ESFI'),
(33, 'Ducha', 'DCHA'),
(34, 'Cocheras', 'CHRA'),
(35, 'Escalera', 'ESLR'),
(36, 'NA', 'NA'),  -- Se mantiene como NA
(37, 'Cámara Desagüe', 'CDES'),
(38, 'Cámara Septicas', 'CSEP');




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
('Señalice el area de trabajo. desconecte la energia electrica - verificar no existencia de tension electrica'),
('Verificar estado general'),
('Verificar correcto montaje de protecciones mecanicas'),
('Verificar correcta sujeccion de coberturas, canaletas, cumbreras, cenefas y otros'),
('Verifique que las descargas de canaletas permitan un flujo libre y se encuentren conectadas correctamente en extremos y uniones');

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
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;

INSERT INTO `usuario` (`nombre`, `email`, `password`) VALUES
('Juan', 'juan@gmail.com', 'juan123'),
('Pablo', 'pablo@example.com', 'password456'),
('Pedro', 'pedro@example.com', 'password789'),
('Ana', 'ana@example.com', 'password321'),
('Carlos', 'carlos@example.com', 'password654'),
('Ruben', 'ruben@example.com', 'password987');

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
