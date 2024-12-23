-- Create the Ecommerce database
CREATE DATABASE Ecommerce;
GO

-- Use the Ecommerce database
USE Ecommerce;
GO

-- Create the UserTable
CREATE TABLE UserTable (
    UserID INT IDENTITY(1,1) PRIMARY KEY, -- Auto-incrementing primary key
    ProductID INT NULL, -- Foreign key referencing ProductTable
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    MobileNumber NVARCHAR(15) NOT NULL,
    State NVARCHAR(100) NOT NULL,
    City NVARCHAR(100) NOT NULL,
    Pincode NVARCHAR(10) NOT NULL,
    Country NVARCHAR(100) NOT NULL,
    Address NVARCHAR(255) NOT NULL,
    RegistrationDate DATE NOT NULL,
    ModificationDate DATE NULL,
    FOREIGN KEY (ProductID) REFERENCES ProductTable(ProductID) -- Foreign key constraint
);
GO

-- Create the CategoryTable
CREATE TABLE CategoryTable (
    CategoryID INT IDENTITY(1,1) PRIMARY KEY, -- Auto-incrementing primary key
    CategoryName NVARCHAR(100) NOT NULL,
    RegistrationDate DATE NOT NULL,
    ModificationDate DATE NULL
);
GO

-- Create the ProductTable
CREATE TABLE ProductTable (
    ProductID INT IDENTITY(1,1) PRIMARY KEY, -- Auto-incrementing primary key
    CategoryID INT NOT NULL, -- Foreign key to CategoryTable
    ProductName NVARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    RegistrationDate DATE NOT NULL,
    ModificationDate DATE NULL,
    FOREIGN KEY (CategoryID) REFERENCES CategoryTable(CategoryID) -- Foreign key constraint
);
GO
