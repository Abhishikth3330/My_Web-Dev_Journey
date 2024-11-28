CREATE DATABASE RegistrationDB;

USE RegistrationDB;

CREATE TABLE RegistrationTable (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    MobileNumber NVARCHAR(15) NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    RegistrationDate DATE NOT NULL
);

select * from RegistrationTable;


ALTER TABLE RegistrationTable
ADD State NVARCHAR(100) NULL;


ALTER TABLE RegistrationTable
ADD City NVARCHAR(100) NULL;


ALTER TABLE RegistrationTable
ADD Address NVARCHAR(255) NULL;


ALTER TABLE RegistrationTable
ADD Pincode NVARCHAR(10) NULL;

select * from RegistrationTable;


