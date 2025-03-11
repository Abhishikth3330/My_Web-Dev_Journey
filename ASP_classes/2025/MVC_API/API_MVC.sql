-- database named EmployeeDB
CREATE DATABASE EmployeeDB;


USE EmployeeDB;

-- Table name called Employee
CREATE TABLE Employee (
    e_ID INT PRIMARY KEY IDENTITY(1,1),
    e_Name NVARCHAR(10),
    e_Age INT,
    e_Active INT
);


-- Stored Procedure - DELETED
CREATE PROCEDURE InsertEmployee
    @e_Name NVARCHAR(10),
    @e_Age INT,
    @e_Active INT
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Employee (e_Name, e_Age, e_Active)
    VALUES (@e_Name, @e_Age, @e_Active);
END;

-- drop the stored procedure
--DROP PROCEDURE IF EXISTS InsertEmployee;


CREATE PROCEDURE InsertEmployee
    @e_Name NVARCHAR(10),
    @e_Age INT,
    @e_Active INT
AS
BEGIN
    INSERT INTO Employee (e_Name, e_Age, e_Active)
    VALUES (@e_Name, @e_Age, @e_Active);
END;



-- clear the table and reset the e_Id to start from 0
TRUNCATE TABLE Employee;


CREATE PROCEDURE SP_BrowseRegister
AS
BEGIN
    SELECT e_ID, e_Name, e_Age, e_Active 
    FROM Employee;
END;



-- print data of the table
select * from Employee;


