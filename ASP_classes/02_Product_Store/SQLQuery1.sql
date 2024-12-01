CREATE DATABASE ProductCategoryDB;

USE ProductCategoryDB;


CREATE TABLE ProductCategory (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Category NVARCHAR(50) NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModifyDate DATETIME NULL,
    IsActive BIT DEFAULT 1 
);

EXEC sp_rename 'ProductCategory.IsActive', 'nBit', 'COLUMN';

select * from ProductCategory;