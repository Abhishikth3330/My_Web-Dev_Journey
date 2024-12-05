-- DESKTOP-EF5D6IS\SQLEXPRESS

CREATE DATABASE ProductManagement;

USE ProductManagement;

CREATE TABLE ProductDetails (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Category NVARCHAR(100) NOT NULL,
    Product NVARCHAR(100) NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModificationDate DATETIME NULL
);

-- Alter ProductDetails table
ALTER TABLE ProductDetails
ADD 
    BalanceQuantity INT NOT NULL DEFAULT 0,
    Rate DECIMAL(10, 2) NOT NULL DEFAULT 0.00;

select * from ProductDetails;


-- Create Department table
CREATE TABLE Department (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    MobileNo NVARCHAR(15) NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModificationDate DATETIME NULL
);

-- Create Vendor table
CREATE TABLE Vendor (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    MobileNo NVARCHAR(15) NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModificationDate DATETIME NULL
);
