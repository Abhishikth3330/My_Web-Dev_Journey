select * from Departments;

-- previously we did not have a NULL property here
-- so added a NULL
ALTER TABLE Departments ALTER COLUMN Modify_Date DATETIME NULL;
-- Tried to check if the value is set to null
INSERT INTO Departments (Dept_ID, Dept_Name, Dept_Location, Manager, Number_Of_Employees, Dpt_Status)
VALUES
(732, 'Data Science', 'Nagpur', 'Dr. Priya', 8, 'Active');

select * from Departments;
-- Failed, did not set the Modify_Date to Null.
-- WE NEED A TRIGGER HERE !!!


-- CRUD OPERATIONS

-- Create Operation (adding data/ rows to the Departments table)
INSERT INTO Departments (Dept_ID, Dept_Name, Dept_Location, Manager, Number_Of_Employees, Dpt_Status)
VALUES
(733, 'Networking', 'Delhi', 'Mr. Arjun', 5, 'Active'),
(734, 'Cyber Security', 'Bangalore', 'Ms. Pranali', 7, 'Inactive'),
(735, 'Cloud Computing', 'Hyd', 'Mr. Karan Singh', 10, 'Active'),
(767, 'AI & ML', 'Chennai', 'Dr. Sunita Sharma', 1, 'Active'),
(768, 'DevOps', 'Nagpur', 'Ms. Neha', 4, 'Inactive'),
(799, 'UI/UX Design', 'Pune', 'Mr. Gopal', 5, 'Active'),
(791, 'QA Testing', 'Nagpur', 'Dr. Praful',  3, 'Inactive');

-- READ OPERATION
-- this will display the complete table
select * from Departments;
-- this will display the rows that have an Active Status
select * from Departments where Dpt_Status = 'Active';
-- this will display the rows where the number of employees is greater than 5
select * from Departments where Number_Of_Employees > 5;

-- UPDATE OPERATION
-- let's say you want to change the Number_Of_Employees to 13 where Dept_ID is 767
UPDATE Departments SET Number_Of_Employees = 13, Modify_Date = GETDATE() WHERE Dept_ID = 767;
select * from Departments;

-- now you want the Dpt_Status of the DevOps course to be Active
UPDATE Departments SET Dpt_Status = 'Active', Modify_Date = GETDATE() WHERE Dept_ID = 768;
select * from Departments;

-- The location of Cloud Computing Department is set to Hyd ??? We need the Full correct Name of the city
UPDATE Departments SET Dept_Location = 'Hyderabad', Modify_Date = GETDATE() WHERE Dept_ID = 735;
select * from Departments;

 -- DELETE OPEATION
 -- let's say someone introduced a new department in the table
INSERT INTO Departments (Dept_ID, Dept_Name, Dept_Location, Manager, Number_Of_Employees, Dpt_Status)
VALUES
(600, 'TIMEPASS', 'Online', 'Prof. Doctor', 100, 'Active');
INSERT INTO Departments (Dept_ID, Dept_Name, Dept_Location, Manager, Number_Of_Employees, Dpt_Status)
VALUES
(601, 'Demo', 'Online', 'Prof. Engineer', 150, 'Active');

select * from Departments;

-- delete the Department named TIMEPASS
-- NOT EXECUTED (YOU CAN EXECUTE IF YOU WANT TO DELETE THE ROWS)
DELETE FROM Departments
WHERE Dept_ID = 600;

-- DELETE THE DEPARTMENT NAMES WHICH HAVE A DEPARTMENT LOCATION AS 'ONLINE'
select * from Departments where Dept_Location = 'Online' and Number_Of_Employees >= 100;

DELETE FROM Departments
WHERE Dept_Location = 'Online';