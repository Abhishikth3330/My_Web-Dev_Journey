CREATE DATABASE SchoolData;

USE SchoolData;

-- CREATE OPERATION
-- STAFF TABLE
CREATE TABLE Staff (
    staff_id NVARCHAR(10) PRIMARY KEY,
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

-- STUDENT TABLE
CREATE TABLE StudentDetails (
    std_id NVARCHAR(10) PRIMARY KEY,
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
    modification_date DATETIME NULL,
    staff_id NVARCHAR(10) NOT NULL, -- Foreign key linking to Staff
    CONSTRAINT FK_Student_Staff FOREIGN KEY (staff_id) REFERENCES Staff(staff_id)
);


-- BANK DETAILS TABLE
CREATE TABLE BankDetails (
    bank_id NVARCHAR(10) PRIMARY KEY,
    bank_name NVARCHAR(100) NOT NULL,
    branch_name NVARCHAR(100) NOT NULL,
    bank_address NVARCHAR(200) NOT NULL,
    IFSC_code NVARCHAR(11) NOT NULL,
    account_number NVARCHAR(20) UNIQUE NOT NULL,
    account_holder_name NVARCHAR(100) NOT NULL,
    registration_date DATETIME DEFAULT GETDATE(),
    modification_date DATETIME NULL,
    staff_id NVARCHAR(10) NOT NULL, -- Foreign key linking to Staff
    CONSTRAINT FK_Bank_Staff FOREIGN KEY (staff_id) REFERENCES Staff(staff_id)
);


-- READ OPERATION
SELECT * FROM Staff;
SELECT * FROM StudentDetails;
SELECT * FROM BankDetails;


-- we have teachers for maths, science, english
INSERT INTO Staff (staff_id, employee_name, date_of_birth, date_of_joining, designation, email, mobile_number, staff_address, gender, teaching_subject, salary_date, salary_amount, PAN_number, Aadhar_number)
VALUES
('101', 'Anshul', '1985-05-15', '2010-06-10', 'Math Teacher', 'anshul@school.net', '9876543210', '123-Road, Nagpur', 'Male', 'Math', '2024-11-01', 50000.00, 'PANQW12345', '123456789012'),
('102', 'Gopal', '1988-08-22', '2012-07-15', 'Science Teacher', 'gopal@school.net', '9123456789', '456-Mansion, Pune', 'Male', 'Science', '2024-11-01', 52000.00, 'PANYU09876', '223456789012'),
('103', 'Reena', '1987-03-30', '2013-08-10', 'English Teacher', 'reena@school.net', '9876543212', '321 Street, Chandrapur', 'Female', 'English', '2024-11-01', 48000.00, 'PANGX76543', '323456789012'),
('104', 'Deepak', '1992-12-02', '2018-09-01', 'Hindi Teacher', 'deepak@school.net', '9876543213', '654 Road, Nagpur', 'Male', 'Hindi', '2024-11-01', 53000.00, 'PANMN34567', '523456789012');

SELECT * FROM Staff;


-- STUDENTS
INSERT INTO StudentDetails (std_id, student_name, roll_no, date_of_birth, gender, mobile_number, email, class, division, student_address, staff_id)
VALUES
('01', 'Alice Green', 101, '2010-03-10', 'Female', '9876543210', 'alice.green@school.com', '8', 'A', '12 Park Ave, City', '101'),
('02', 'Bob Brown', 102, '2011-07-25', 'Male', '9876543211', 'bob.brown@school.com', '8', 'B', '34 Oak Ave, City', '101'),
('03', 'Charlie Davis', 103, '2010-11-05', 'Male', '9876543212', 'charlie.davis@school.com', '9', 'A', '56 Maple Ave, City', '102'),
('04', 'Daisy Evans', 104, '2011-01-15', 'Female', '9876543213', 'daisy.evans@school.com', '10', 'B', '78 Pine Ave, City', '102'),
('05', 'Ethan Harris', 105, '2009-08-20', 'Male', '9876543214', 'ethan.harris@school.com', '10', 'A', '90 Birch Ave, City', '103'),
('06', 'Fiona Johnson', 106, '2011-05-12', 'Female', '9876543215', 'fiona.johnson@school.com', '8', 'C', '12 Elm St, City', '103'),
('07', 'George King', 107, '2010-09-30', 'Male', '9876543216', 'george.king@school.com', '9', 'C', '34 Walnut St, City', '104'),
('08', 'Hannah Lewis', 108, '2011-12-18', 'Female', '9876543217', 'hannah.lewis@school.com', '8', 'D', '56 Chestnut St, City', '104'),
('09', 'Isaac Moore', 109, '2010-02-22', 'Male', '9876543218', 'isaac.moore@school.com', '10', 'C', '78 Cedar St, City', '101'),
('10', 'Julia Nelson', 110, '2010-06-05', 'Female', '9876543219', 'julia.nelson@school.com', '9', 'B', '90 Ash St, City', '102');

SELECT * FROM StudentDetails;

-- BANK DETAILS
INSERT INTO BankDetails (bank_id, bank_name, branch_name, bank_address, IFSC_code, account_number, account_holder_name, staff_id)
VALUES
('3881', 'State Bank of India', 'Main Branch', '123 Main St, Nagpur', 'SBIN0001234', '987654321012', 'Anshul', '101'),
('3882', 'HDFC Bank', 'Pune Branch', '456 Mansion Rd, Pune', 'HDFC0005678', '987654321013', 'Gopal', '102'),
('3883', 'Axis Bank', 'Chandrapur Branch', '321 Street Rd, Chandrapur', 'AXIS0012345', '987654321014', 'Reena', '103'),
('3884', 'ICICI Bank', 'Nagpur Branch', '654 Road Ave, Nagpur', 'ICIC0009101', '789456147852', 'Deepak', '104');

SELECT * FROM BankDetails;


-- JOINS ON STAFF AND BANK TABLE
-- GETS THE DATA WHICH HAS ALL THE VALUES MATCHING THE CONDITION
SELECT st.employee_name, st.email, b.bank_name, b.account_number
FROM Staff st
INNER JOIN BankDetails b ON st.staff_id = b.staff_id;

-- RETURNS ALL THE DATA FROM THE LEFT TABLE AND ONLY SUITABLE ROWS FROM THE RIGHT TABLE
SELECT st.employee_name, st.email, b.bank_name, b.account_number
FROM Staff st
LEFT JOIN BankDetails b ON st.staff_id = b.staff_id;

-- RETURN ALL THE ROWS FROM THE RIGHT TABLE AND ONLY SUITABLE ROWS FROM THE LEFT TABLE
SELECT st.employee_name, st.email, b.bank_name, b.account_number
FROM Staff st
RIGHT JOIN BankDetails b ON st.staff_id = b.staff_id;

-- RETURNS ALL ROWS IF THERE IS A MATCH IN THE LEFT OR RIGHT TABLE
SELECT st.employee_name, st.email, b.bank_name, b.account_number
FROM Staff st
FULL OUTER JOIN BankDetails b ON st.staff_id = b.staff_id;


-- JOINS ON STUDENTS AND STAFF TABLE
SELECT StudentDetails.student_name, Staff.employee_name
FROM StudentDetails
RIGHT JOIN Staff ON StudentDetails.staff_id = Staff.staff_id;

SELECT StudentDetails.student_name, Staff.employee_name
FROM StudentDetails
FULL OUTER JOIN Staff ON StudentDetails.staff_id = Staff.staff_id;
