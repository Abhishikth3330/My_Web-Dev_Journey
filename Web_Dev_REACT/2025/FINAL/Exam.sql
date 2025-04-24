-- Step 1: Create Database
CREATE DATABASE ExamDB;
GO

-- Use the newly created database
USE ExamDB;
GO

-- Step 2: Create Admins Table
CREATE TABLE Admins (
    AdminID INT IDENTITY(1,1) PRIMARY KEY,
    Organization NVARCHAR(255) NOT NULL,
    City NVARCHAR(100) NOT NULL,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) UNIQUE NOT NULL,
    Phone NVARCHAR(20) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    DOB DATE NOT NULL,
    Gender NVARCHAR(10) NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModificationDate DATETIME NULL,
    nBit BIT DEFAULT 1
);
GO

-- Step 3: Create Stored Procedure for Inserting Data
CREATE PROCEDURE sp_RegisterAdmin
    @Organization NVARCHAR(255),
    @City NVARCHAR(100),
    @FirstName NVARCHAR(100),
    @LastName NVARCHAR(100),
    @Email NVARCHAR(255),
    @Phone NVARCHAR(20),
    @Password NVARCHAR(255),  -- Hash the password in ASP.NET before storing
    @DOB DATE,
    @Gender NVARCHAR(10)
AS
BEGIN
    -- Insert the data with default RegistrationDate and nBit=1
    INSERT INTO Admins (Organization, City, FirstName, LastName, Email, Phone, PasswordHash, DOB, Gender, RegistrationDate, ModificationDate, nBit)
    VALUES (@Organization, @City, @FirstName, @LastName, @Email, @Phone, @Password, @DOB, @Gender, GETDATE(), NULL, 1);
END;
GO
