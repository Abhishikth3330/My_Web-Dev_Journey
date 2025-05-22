CREATE DATABASE MvcRegistrationDB;

USE MvcRegistrationDB;


CREATE TABLE Users (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    MobileNumber NVARCHAR(20) NOT NULL,
    Password NVARCHAR(100) NOT NULL
);


select * from Users;