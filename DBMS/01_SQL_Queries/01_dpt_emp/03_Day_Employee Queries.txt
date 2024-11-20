select * from EmployeeData;
--select * from Departments;

-- CRUD OPERATIONS
-- CREATE ==>
INSERT INTO EmployeeData (Emp_ID, Dept_ID, Emp_Name, Gender, Date_Of_Birth, Email, Aadhar_Number, PAN_Number, Mobile_Number)
VALUES
(18, 732, 'Deep', 'Male', '2001-08-15', 'deep123@gmail.com', '162746390624', 'PLQTH64021', '7894561230'),
(19, 733, 'Ashutosh', 'Male', '2002-01-28', 'ashutosh@gmail.in', '765908712345', 'GJTUR78945', '4567891230'),
(20, 734, 'Prateek', 'Male', '2001-02-01', 'prateek@example.com', '123456789012', 'ABCDE1234F', '9876543210'),
(21, 735, 'Palak', 'Female', '2002-12-21', 'palak@gmail.com', '987654321098', 'FGHIJ5678K', '8765432109'),
(22, 746, 'Arjun', 'Male', '1998-03-08', 'arjun.mehta@example.com', '112233445566', 'KLMNO9012P', '7654321098'),
(23, 767, 'Riya', 'Female', '1999-10-25', 'riya@example.com', '223344556677', 'QRSTU3456X', '6543210987'),
(24, 768, 'Ravi', 'Male', '2003-09-06', 'ravi@gmail.in', '334455667788', 'VWXYZ7890M', '5432109876'),
(25, 791, 'Anita', 'Female', '2002-10-12', 'anita@example.com', '445566778899', 'ABCDE5678X', '4321987654'),
(26, 799, 'Meera', 'Female', '1999-11-02', 'meera.sharma@example.com', '889900112233', 'VWXYZ1234Q', '1098765432');


-- READ ==>
select * from EmployeeData;

select * from EmployeeData where Dept_ID = 768;

-- UPDATE ==>
-- let's say the employee having Emp_ID changed the mobile number to 9998887777
UPDATE EmployeeData
SET Mobile_Number = '9998887777', Modification_Date = GETDATE()
WHERE Emp_ID = 26;
select * from EmployeeData;

-- NOW WE WANT TO ADD '+91-' AS A COUNTRY CODE IN ALL THE MOBILE_NUMBERS
-- we have added '+91-' to all the columns of mobile numbers except Dept_ID = 767
UPDATE EmployeeData
SET Mobile_Number = '+91-' + Mobile_Number, Modification_Date = GETDATE()
WHERE Mobile_Number NOT LIKE '+91-%' AND Dept_ID != 767;

select * from EmployeeData;


-- DELETE ==>
INSERT INTO EmployeeData (Emp_ID, Dept_ID, Emp_Name, Gender, Date_Of_Birth, Email, Aadhar_Number, PAN_Number, Mobile_Number)
VALUES
(27, 799, 'Bruce Wayne', 'Male', '1985-03-15', 'batman@gotham.com', '999999999999', 'BRUCE1234A', '1234567890'),
(28, 799, 'Peter Parker', 'Male', '1988-07-17', 'Spiderman@swing.com', '888888888888', 'SPIDER6789', '9876543210');

select * from EmployeeData;

UPDATE EmployeeData
SET Dept_ID = 600, Modification_Date = GETDATE()
WHERE Emp_ID = 27;
select * from EmployeeData;

UPDATE EmployeeData
SET Dept_ID = 601, Modification_Date = GETDATE()
WHERE Emp_ID = 28;
select * from EmployeeData;

-- if you want to delete the Emp_ID 27, 28 you can perform the query below
DELETE FROM EmployeeData
WHERE Emp_ID = 27;

-- YOU CAN DELETE BOTH THE ROWS 27 AND 28 ALTOGETHER
SELECT * FROM EmployeeData WHERE Dept_ID < 700;

DELETE FROM EmployeeData
WHERE Dept_ID < 700;

SELECT * FROM EmployeeData;