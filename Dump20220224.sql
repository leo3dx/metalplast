-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: metalplast
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `concecutivos`
--

DROP TABLE IF EXISTS `concecutivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concecutivos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numeroConcecutivo` varchar(45) NOT NULL,
  `idUsuarios` int NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numeroConcecutivo_UNIQUE` (`numeroConcecutivo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concecutivos`
--

LOCK TABLES `concecutivos` WRITE;
/*!40000 ALTER TABLE `concecutivos` DISABLE KEYS */;
/*!40000 ALTER TABLE `concecutivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombreRole` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador'),(2,'Funcionario');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typeidentification`
--

DROP TABLE IF EXISTS `typeidentification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeidentification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombreIdentificacion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeidentification`
--

LOCK TABLES `typeidentification` WRITE;
/*!40000 ALTER TABLE `typeidentification` DISABLE KEYS */;
INSERT INTO `typeidentification` VALUES (1,'Cedula'),(2,'Tarjeta de identidad');
/*!40000 ALTER TABLE `typeidentification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName1` varchar(45) NOT NULL,
  `lastName2` varchar(45) NOT NULL,
  `typeIdentification` int NOT NULL,
  `identification` varchar(45) NOT NULL,
  `role` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `addres` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `identification_UNIQUE` (`identification`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Leonardo','Heredia','Orozco',1,'1143873364',1,'leo3dxlh@gmail.com','3106264461','Cra 12 c # 40-130'),(5,'Daniel','Espinoza','Paz',1,'123456789',2,'daniel@gmail.com','3215645856','Calle las americas'),(7,'Alvaro','Quintero','Trochez',1,'16665465',2,'alvaroqtrochez@gmail.com','3216158395','Cra 12 c # 40 - 130'),(13,'Jhon','Heredia','Orozco',1,'1143827615',2,'alvaroqtrochesasdz@gmail.com','3215648545','Carrera 12 c #40-130');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-24 21:47:14
