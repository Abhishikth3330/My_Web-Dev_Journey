CREATE DATABASE Ecommerce;

USE Ecommerce;


-- Create the CategoryTable
CREATE TABLE CategoryTable (
    CategoryID INT IDENTITY(1,1) PRIMARY KEY, -- Auto-incrementing primary key
    CategoryName NVARCHAR(100) NOT NULL,
    RegistrationDate DATE NOT NULL,
    ModificationDate DATE NULL
);


-- Create the ProductTable
CREATE TABLE ProductTable (
    ProductID INT IDENTITY(1,1) PRIMARY KEY, -- Auto-incrementing primary key
    CategoryID INT NOT NULL, -- Foreign key to CategoryTable
    ProductName NVARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
	Quantity INT NOT NULL DEFAULT 0,
    RegistrationDate DATE NOT NULL,
    ModificationDate DATE NULL,
    FOREIGN KEY (CategoryID) REFERENCES CategoryTable(CategoryID) -- Foreign key constraint
);

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

select * from UserTable;

-- Create the CartTable
CREATE TABLE CartTable (
    CartID INT IDENTITY(1,1) PRIMARY KEY, -- Auto-incrementing primary key
    UserID INT NOT NULL, -- Foreign key referencing UserTable
    ProductID INT NOT NULL, -- Foreign key referencing ProductTable
    CategoryID INT NOT NULL, -- Foreign key referencing CategoryTable
    Quantity INT NOT NULL, -- Quantity of the product in the cart
    AddedDate DATETIME NOT NULL DEFAULT GETDATE(), -- When the item was added
    FOREIGN KEY (UserID) REFERENCES UserTable(UserID), -- Foreign key constraint
    FOREIGN KEY (ProductID) REFERENCES ProductTable(ProductID), -- Foreign key constraint
    FOREIGN KEY (CategoryID) REFERENCES CategoryTable(CategoryID) -- Foreign key constraint
);

select * from CategoryTable;
select * from ProductTable;
select * from UserTable;
select * from CartTable;