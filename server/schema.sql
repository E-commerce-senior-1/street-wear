-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema estreetcommerce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema estreetcommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `estreetcommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `estreetcommerce` ;

-- -----------------------------------------------------
-- Table `estreetcommerce`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`brands` (
  `idBrands` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `picture` LONGTEXT NOT NULL,
  PRIMARY KEY (`idBrands`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estreetcommerce`.`artist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`artist` (
  `idartist` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `dateOfBirth` VARCHAR(45) NOT NULL,
  `bio` VARCHAR(255) NULL,
  `profilePic` LONGTEXT NULL,
  `coverPic` LONGTEXT NULL,
  PRIMARY KEY (`idartist`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `estreetcommerce`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`products` (
  `idProducts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `picture` LONGTEXT NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `idbrands` INT NOT NULL,
  `New` TINYINT NULL DEFAULT '1',
  `idartists` INT NOT NULL,
  PRIMARY KEY (`idProducts`),
  INDEX `fk_Products_Brands1_idx` (`idbrands` ASC) VISIBLE,
  INDEX `fk_products_artist1_idx` (`idartists` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Brands1`
    FOREIGN KEY (`idbrands`)
    REFERENCES `estreetcommerce`.`brands` (`idBrands`),
  CONSTRAINT `fk_products_artist1`
    FOREIGN KEY (`idartists`)
    REFERENCES `estreetcommerce`.`artist` (`idartist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estreetcommerce`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `dateOfBirth` VARCHAR(45) NOT NULL,
  `phoneNum` INT NOT NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estreetcommerce`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`cart` (
  `idCart` INT NOT NULL AUTO_INCREMENT,
  `idusers` INT NOT NULL,
  `idproducts` INT NOT NULL,
  PRIMARY KEY (`idCart`),
  INDEX `fk_Cart_Users1_idx` (`idusers` ASC) VISIBLE,
  INDEX `fk_Cart_Products1_idx` (`idproducts` ASC) VISIBLE,
  CONSTRAINT `fk_Cart_Products1`
    FOREIGN KEY (`idproducts`)
    REFERENCES `estreetcommerce`.`products` (`idProducts`),
  CONSTRAINT `fk_Cart_Users1`
    FOREIGN KEY (`idusers`)
    REFERENCES `estreetcommerce`.`users` (`idUsers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estreetcommerce`.`favlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`favlist` (
  `idfavList` INT NOT NULL AUTO_INCREMENT,
  `idusers` INT NOT NULL,
  `idproducts` INT NOT NULL,
  PRIMARY KEY (`idfavList`),
  INDEX `fk_favList_Users1_idx` (`idusers` ASC) VISIBLE,
  INDEX `fk_favList_Products1_idx` (`idproducts` ASC) VISIBLE,
  CONSTRAINT `fk_favList_Products1`
    FOREIGN KEY (`idproducts`)
    REFERENCES `estreetcommerce`.`products` (`idProducts`),
  CONSTRAINT `fk_favList_Users1`
    FOREIGN KEY (`idusers`)
    REFERENCES `estreetcommerce`.`users` (`idUsers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estreetcommerce`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`posts` (
  `idposts` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `picture` LONGTEXT NOT NULL,
  `idartists` INT NOT NULL,
  PRIMARY KEY (`idposts`),
  INDEX `fk_posts_artist1_idx` (`idartists` ASC) VISIBLE,
  CONSTRAINT `fk_posts_artist1`
    FOREIGN KEY (`idartists`)
    REFERENCES `estreetcommerce`.`artist` (`idartist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estreetcommerce`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estreetcommerce`.`question` (
  `idquestion` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `idusers` INT NOT NULL,
  PRIMARY KEY (`idquestion`),
  INDEX `fk_question_Users1_idx` (`idusers` ASC) VISIBLE,
  CONSTRAINT `fk_question_Users1`
    FOREIGN KEY (`idusers`)
    REFERENCES `estreetcommerce`.`users` (`idUsers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
