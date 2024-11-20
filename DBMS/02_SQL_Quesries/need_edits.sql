CREATE DATABASE SchoolData;

USE SchoolData;


-- CREATING A STUDENT DETAILS TABLE
CREATE TABLE StudentDetails(
	std_id INT IDENTITY(1, 1) PRIMARY KEY,
	student_name NVARCHAR(100) NOT NULL,
	roll_no INT UNIQUE NOT NULL,
	date_of_birth DATE NOT NULL,
	gender VARCHAR(10) NOT NULL,
	mobile_number NVARCHAR(15) NOT NULL,
	email NVARCHAR(100) NOT NULL,
	class NVARCHAR(4) NOT NULL,
	division NVARCHAR(2) NOT NULL,
	student_address NVARCHAR(200) NOT NULL,
	registration_date DATETIME DEFAULT GETDATE(),
	modification_date DATETIME NULL
);


-- CREATE A TABLE FOR STAFF
CREATE TABLE Staff(
	emp_id INT IDENTITY(1, 1) PRIMARY KEY,
	employee_name NVARCHAR(100) NOT NULL,
	date_of_birth DATE NOT NULL,
	date_of_joining DATE NOT NULL,
	designation NVARCHAR(50) NOT NULL,
	email NVARCHAR(100) NOT NULL,
	mobile_number NVARCHAR(15) NOT NULL,
	staff_address NVARCHAR(200) NOT NULL,
	gender VARCHAR(10) NOT NULL,
	teaching_subject NVARCHAR(50) NULL,
	salary_date DATE NOT NULL,
	salary_amount DECIMAL(10, 2) NOT NULL,
	PAN_number NVARCHAR(10) UNIQUE NOT NULL,
	Aadhar_number NVARCHAR(12) UNIQUE NOT NULL,
	registration_date DATETIME DEFAULT GETDATE(),
	modification_date DATETIME NULL
);

-- BANK DETAILS
CREATE TABLE BankDetails(
	bank_id INT IDENTITY(1, 1) PRIMARY KEY,
	bank_name NVARCHAR(100) NOT NULL,
	branch_name NVARCHAR(100) NOT NULL,
	address NVARCHAR(200) NOT NULL,
	IFSC_code NVARCHAR(11) NOT NULL,
	account_number NVARCHAR(20) UNIQUE NOT NULL,
	account_holder_name NVARCHAR(100) NOT NULL,
	registration_date DATETIME DEFAULT GETDATE(),
	modification_date DATETIME NULL
);


-- NOW THAT WE HAVE OUR TABLES
-- WE'LL ADD FOREIGN KEYS

-- this connects the student table to staff table
ALTER TABLE StudentDetails
ADD class_teacher_id INT;

ALTER TABLE StudentDetails
ADD CONSTRAINT FK_Student_ClassTeacher
FOREIGN KEY (class_teacher_id) REFERENCES Staff(emp_id);

select * from StudentDetails;

-- this will connect the staff table to bank table
ALTER TABLE Staff
ADD bank_id INT;

ALTER TABLE Staff
ADD CONSTRAINT FK_Staff_Bank
FOREIGN KEY (bank_id) REFERENCES BankDetails(bank_id);

select * from Staff;


-- INSERTING DATA INTO BANK DETAILS
INSERT INTO BankDetails (bank_name, branch_name, address, IFSC_code, account_number, account_holder_name)
VALUES 
('State Bank of India', 'Nagpur Main Branch', '123 Bank Street, Nagpur', 'SBIN0001234', '987654321012', 'Anita Verma'),
('HDFC Bank', 'Mumbai Main Branch', '456 Market Road, Mumbai', 'HDFC0005678', '654321987654', 'Ramesh Singh'),
('ICICI Bank', 'Pune Central', '789 Central Ave, Pune', 'ICIC0007890', '112233445566', 'Kavita Sharma'),
('Punjab National Bank', 'Delhi South', '23 South Lane, Delhi', 'PNB0001111', '998877665544', 'Sanjay Kapoor'),
('Axis Bank', 'Bangalore Tech Hub', '44 Tech Park, Bangalore', 'AXIS0001234', '445566778899', 'Neha Joshi'),
('Bank of Baroda', 'Chennai Metro', '55 Metro Road, Chennai', 'BOB0005678', '778899112233', 'Priya Menon'),
('Union Bank', 'Hyderabad City Center', '77 City Square, Hyderabad', 'UBIN0004321', '889977665544', 'Rajeev Kumar'),
('Canara Bank', 'Lucknow East', '99 East Street, Lucknow', 'CNRB0003456', '667788990011', 'Sunita Patel'),
('Kotak Mahindra Bank', 'Kolkata Central', '101 Central Plaza, Kolkata', 'KKBK0002345', '554433221100', 'Vikram Roy'),
('Indian Bank', 'Ahmedabad West', '121 West Avenue, Ahmedabad', 'IDIB0006789', '990088776655', 'Divya Shah');

SELECT * FROM BankDetails;







-- ENTRIES FOR THE STAFF
INSERT INTO Staff (employee_name, date_of_birth, date_of_joining, designation, email, mobile_number, staff_address, gender, teaching_subject, salary_date, salary_amount, PAN_number, Aadhar_number, bank_id)
VALUES
('Anita Verma', '1985-07-12', '2020-06-01', 'Math Teacher', 'anita.verma@example.com', '9876543212', '123 Teacher Lane', 'F', 'Mathematics', '2024-11-01', 55000.00, 'ABCDE1234F', '123456789012', 1),
('Ramesh Singh', '1980-05-22', '2018-09-15', 'Physics Teacher', 'ramesh.singh@example.com', '8765432109', '456 Physics Street', 'M', 'Physics', '2024-11-05', 60000.00, 'PQRS5678G', '987654321098', 2),
('Kavita Sharma', '1990-03-10', '2021-01-20', 'Chemistry Teacher', 'kavita.sharma@example.com', '7654321098', '789 Chemistry Blvd', 'F', 'Chemistry', '2024-11-07', 52000.00, 'LMNO3456H', '876543210987', 3),
('Sanjay Kapoor', '1978-11-30', '2015-07-05', 'English Teacher', 'sanjay.kapoor@example.com', '6543210987', '23 Literature Lane', 'M', 'English', '2024-11-03', 58000.00, 'WXYZ9876I', '765432109876', 4),
('Neha Joshi', '1992-09-08', '2023-03-10', 'Computer Teacher', 'neha.joshi@example.com', '5432109876', '44 Tech Park Road', 'F', 'Computer Science', '2024-11-08', 50000.00, 'JKLM8765J', '654321098765', 5),
('Rajeev Kumar', '1986-01-15', '2019-12-01', 'History Teacher', 'rajeev.kumar@example.com', '4321098765', '77 History Alley', 'M', 'History', '2024-11-02', 53000.00, 'NOPQ5432K', '543210987654', 6),
('Priya Menon', '1983-04-27', '2016-08-15', 'Geography Teacher', 'priya.menon@example.com', '3210987654', '55 Geography Blvd', 'F', 'Geography', '2024-11-04', 56000.00, 'QRST4321L', '432109876543', 7),
('Sunita Patel', '1995-06-18', '2022-05-05', 'Biology Teacher', 'sunita.patel@example.com', '2109876543', '99 Biology Lane', 'F', 'Biology', '2024-11-06', 49000.00, 'UVWX3210M', '321098765432', 8),
('Vikram Roy', '1975-08-02', '2012-11-25', 'Physical Education Teacher', 'vikram.roy@example.com', '1098765432', '101 Fitness Avenue', 'M', NULL, '2024-11-09', 47000.00, 'YZAB2109N', '210987654321', 9),
('Divya Shah', '1989-02-14', '2020-02-14', 'Librarian', 'divya.shah@example.com', '9876543211', '121 Knowledge Road', 'F', NULL, '2024-11-10', 45000.00, 'CDEF1098O', '109876543210', 10);

-- ENTRIES FOR THE STUDENT DETAILS
INSERT INTO StudentDetails (student_name, roll_no, date_of_birth, gender, mobile_number, email, class, division, student_address, class_teacher_id)
VALUES
('John Doe', 101, '2010-05-14', 'M', '9876543210', 'john.doe@example.com', '5', 'A', '123 Main Street', 1),
('Aarav Mehta', 102, '2011-07-22', 'M', '8765432101', 'aarav.mehta@example.com', '6', 'B', '45 City Square', 2),
('Ananya Sharma', 103, '2009-03-19', 'F', '7654321090', 'ananya.sharma@example.com', '7', 'A', '67 South Avenue', 3),
('Ishita Patel', 104, '2010-11-09', 'F', '6543210989', 'ishita.patel@example.com', '5', 'B', '89 East Street', 4),
('Aditya Kumar', 105, '2008-06-15', 'M', '5432109878', 'aditya.kumar@example.com', '8', 'A', '12 North Lane', 5),
('Kavya Singh', 106, '2011-04-12', 'F', '4321098767', 'kavya.singh@example.com', '6', 'B', '34 Tech Park', 6),
('Rohan Kapoor', 107, '2009-08-03', 'M', '3210987656', 'rohan.kapoor@example.com', '7', 'A', '56 Fitness Avenue', 7),
('Meera Joshi', 108, '2012-01-25', 'F', '2109876545', 'meera.joshi@example.com', '4', 'B', '78 Knowledge Road', 8),
('Aryan Verma', 109, '2008-09-30', 'M', '1098765434', 'aryan.verma@example.com', '8', 'A', '90 Biology Lane', 9),
('Sanya Roy', 110, '2011-02-18', 'F', '9876543222', 'sanya.roy@example.com', '6', 'A', '11 History Blvd', 10);
