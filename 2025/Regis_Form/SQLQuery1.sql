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




-- test check for login 
-- [1] vulnerable query test
SELECT * FROM  Users where Email='' or 1=1 --' AND Password='1234455'



-- test table
CREATE TABLE Test (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Email NVARCHAR(100) NOT NULL
);

INSERT INTO Test (Email) VALUES
('john@example.com'),
('alice@example.com'),
('bob@example.com'),
('carol@example.com'),
('dave@example.com');

select * from Test;