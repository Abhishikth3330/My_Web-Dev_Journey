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

select * from ProductDetails;