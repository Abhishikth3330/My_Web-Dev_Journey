CREATE DATABASE ProductTestDB;

USE ProductTestDB;


-- items table
CREATE TABLE Items (
    ID INT IDENTITY(1,1) PRIMARY KEY, -- Primary Key
    Category NVARCHAR(50) NOT NULL,
    ItemName NVARCHAR(100) NOT NULL,
    RateOfItem DECIMAL(10, 2) NOT NULL,
    BalanceQuantity INT NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModificationDate DATETIME NULL
);


-- vendors table
CREATE TABLE Vendors (
    Vendor_ID INT IDENTITY(1,1) PRIMARY KEY, -- Primary Key
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    MobileNumber NVARCHAR(15) NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModificationDate DATETIME NULL,
    ItemID INT,
    CONSTRAINT FK_Vendors_Items FOREIGN KEY (ItemID) REFERENCES Items(ID)
);


-- departments table
CREATE TABLE Departments (
    DepartmentID INT IDENTITY(1,1) PRIMARY KEY, -- Primary Key
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    MobileNumber NVARCHAR(15) NOT NULL,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    ModificationDate DATETIME NULL,
    ItemID INT,
    CONSTRAINT FK_Departments_Items FOREIGN KEY (ItemID) REFERENCES Items(ID)
);




CREATE TABLE Transactions (
    TransactionID INT IDENTITY(1,1) PRIMARY KEY,
    TransactionType NVARCHAR(10) NOT NULL CHECK (TransactionType IN ('Purchase', 'Issue')),
    ItemID INT NOT NULL,
    Quantity INT NOT NULL,
    VendorID INT NULL,
    DepartmentID INT NULL,
    TransactionDate DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Transactions_Items FOREIGN KEY (ItemID) REFERENCES Items(ID),
    CONSTRAINT FK_Transactions_Vendors FOREIGN KEY (VendorID) REFERENCES Vendors(Vendor_ID),
    CONSTRAINT FK_Transactions_Departments FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);


select * from Items;
select * from Vendors;
select * from Departments;
select * from Transactions;