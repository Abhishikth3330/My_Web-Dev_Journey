CREATE DATABASE CompanyDetails;

USE CompanyDetails;

-- CREATED A DEPARTMENTS TABLE
CREATE TABLE Departments(
	Dept_ID INT PRIMARY KEY,
	Dept_Name NVARCHAR(100) NOT NULL,
	Dept_Location NVARCHAR(100) NOT NULL,
	Manager NVARCHAR(50) NOT NULL,
	Number_Of_Employees INT NOT NULL,
	Dpt_Status VARCHAR(20) NOT NULL,
	Regis_Date DATETIME DEFAULT GETDATE(),
	Modify_Date DATETIME DEFAULT GETDATE()
);
-- INSERTED 2 ROWS IN THE DEPARTMENTS TABLE
INSERT INTO Departments(Dept_ID, Dept_Name, Dept_Location, Manager, Number_Of_Employees, Dpt_Status)
VALUES
(701, 'Database', 'Nagpur', 'Mr. Sameer Sontakke', 6, 'Active'),
(746, 'WebDev', 'Pune', 'Ms. Radhika', 6, 'Inactive');

-- VISUALIZING THE DEPARTMENTS TABLE
SELECT * FROM Departments;


-- CREATED A EMPLOYEE TABLE
CREATE TABLE EmployeeData(
	Emp_ID INT PRIMARY KEY,
	Dept_ID INT,
	Emp_Name NVARCHAR(100) NOT NULL,
	Gender VARCHAR(10) NOT NULL,
	Date_Of_Birth DATE NOT NULL,
	Email NVARCHAR(100) NOT NULL,
	Aadhar_Number VARCHAR(12) UNIQUE NOT NULL,
	PAN_Number VARCHAR(10) UNIQUE NOT NULL,
	Mobile_Number NVARCHAR(15) UNIQUE NOT NULL,
	Registration_Date DATETIME DEFAULT GETDATE(),
	Modification_Date DATETIME DEFAULT GETDATE(),
	--Modification_Date DATETIME DEFAULT GETDATE(),
	CONSTRAINT FK_Emp_Dept FOREIGN KEY (Dept_ID) REFERENCES Departments(Dept_ID)
);


-- INSERTED A VALUE
INSERT INTO EmployeeData(Emp_ID, Dept_ID, Emp_Name, Gender, Date_Of_Birth, Email, Aadhar_Number, PAN_Number, Mobile_Number)
VALUES
(17, 701, 'Abhishikth Thul', 'Male', '2001-10-25', 'abhishikththul9@gmail.com', '987676543245', 'RYTUG76543', '+91-4756498765')


-- VISUALIZING THE VALUES
SELECT * FROM EmployeeData;