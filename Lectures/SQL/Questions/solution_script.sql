-- 1. Create a database named SchoolDB
CREATE DATABASE SchoolDB;

-- 2. Use the SchoolDB database
USE SchoolDB;


-- 3. Create a table students with the following columns (id, Name, age, grade)
CREATE TABLE students (
    id INT PRIMARY KEY,
    Name VARCHAR(100),
    age INT,
    grade VARCHAR(10)
);



-- 4. Insert 5 records into the students table
INSERT INTO students (id, Name, age, grade) VALUES
(1, 'John Doe', 15, '10th'),
(2, 'Jane Smith', 14, '9th'),
(3, 'Mike Johnson', 16, '10th'),
(4, 'Emily Davis', 13, '8th'),
(5, 'onestudent', 15, '9th');

-- 5. Select all records from the students table
SELECT * FROM students;


-- 6. Show students who are older than 14 years
SELECT * FROM students WHERE age > 14;


-- 7. Show students in grade '10th'
SELECT * FROM students WHERE grade = '10th';

-- 8. Update the age of onestudent to 17
UPDATE students SET age = 17 WHERE Name = 'onestudent';


SELECT * FROM students;


-- 9. Delete the record of the student named onestudent
DELETE FROM students WHERE Name = 'onestudent';


-- 10. Count the number of students in each grade
SELECT grade, COUNT(*) AS student_count FROM students
GROUP BY grade;

SELECT * FROM students;


-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

-- 1. Create a database named CompanyDB
CREATE DATABASE CompanyDB;

-- 2. Use the CompanyDB database
USE CompanyDB;

-- 2. Create a table employees with the following fields (emp_id, emp_name, department, salary, hire_date)
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    salary INT,
    hire_date DATE
);

-- 3. Add a column email to the employees table
ALTER TABLE employees ADD email VARCHAR(100);

-- 4. change datatype of salary to FLOAT
alter table employees modify salary FLOAT;

-- 5. Insert 5 records into the employees table
INSERT INTO employees (emp_id, emp_name, department, salary, hire_date, email) VALUES
(1, 'EMP_ONE', 'IT', 45000, '2020-06-15', 'empone@example.com'),
(2, 'EMP_TWO', 'HR', 38000, '2021-03-10', 'emptwo@example.com'),
(3, 'EMP_THREE', 'Finance', 52000, '2019-11-20', 'empthree@example.com'),
(4, 'EMP_FOUR', 'IT', 47000, '2022-01-05', 'empfour@example.com'),
(5, '', 'Marketing', 36000, '2023-05-18', 'anonymous@example.com');

select * from employees;

-- 6. update salary of EMP_ONE to 47000
update employees set salary = 47000 where emp_name = 'EMP_ONE';


-- 7. Delete record where emp_name = ' '
delete from employees where emp_name = '';


-- 8. Display all employees from the IT department
SELECT * FROM employees WHERE department = 'IT';


-- 9. Find employees hired after 2021-01-01
select * from employees where hire_date > '2021-01-01';


-- 10. Show employees with salary between 35000 and 50000
select * from employees where salary between 35000 and 50000;

-- 11. Sort employees by salary in descending order
select * from employees order by salary DESC;

-- 12. Find average salary of all employees
select AVG(salary) as average_salary from employees;

-- 13. Count total employees in each department
select department, count(*) as total_employees
from employees
group by department;


-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

-- 1. Create a table STUDENTS (id, name, age, gender, class, marks)
create table students (
	id int primary key,
    name varchar(100),
    age int,
    gender varchar(10),
    class varchar(10),
    marks int
);

-- 2. Insert 10 records
INSERT INTO STUDENTS (id, name, age, gender, class, marks) VALUES
(1, 'Alice', 15, 'Female', '10th', 85),
(2, 'Bob', 14, 'Male', '9th', 78),
(3, 'Anita', 16, 'Female', '10th', 92),
(4, 'David', 15, 'Male', '9th', 88),
(5, 'Sara', 13, 'Female', '8th', 74),
(6, 'Amit', 14, 'Male', '9th', 81),
(7, 'Rita', 15, 'Female', '10th', 90),
(8, 'John', 14, 'Male', '8th', 67),
(9, 'Priya', 16, 'Female', '10th', NULL),
(10, 'Aryan', 15, 'Male', '10th', 76);


-- 3. Select all records from the students table
SELECT * FROM STUDENTS;


-- 4. Display names and marks of all students
select name, marks from STUDENTS;

-- 5. Show students who are in the 10th class
select * from STUDENTS where class = '10th';

-- 6. List all female students
select * from STUDENTS where gender = 'Female';

-- 7. Select students who scored more than 80 marks
select * from STUDENTS where marks > 80;

-- 8. show students whose age is between 14 and 16
select * from STUDENTS where age between 14 and 16;

-- 9. display student names starting with 'A'
select * from STUDENTS where name like 'A%';

-- 10. Show students whose name ends with 'a'
select * from students where name like '%a';

-- 11. Find students who have NULL in the marks column (if any)
select * from students where marks is null;

-- 12. display students in descending order of marks
select * from students order by marks desc;

-- 13. find the total number of students
select count(*) as total_students from students;

-- 14. find the average marks of all students
select avg(marks) as average_marks from students;

-- 15. display the highest and lowest marks
select max(marks) as highest_marks, min(marks) as lowest_marks from students;

-- 16. count the number of students in each class
select class, count(*) as student_count from
students group by class;

-- 17. find the sum of marks of students in the 9th class
select sum(marks) as total_marks_9th from students
where class = '9th';

-- 18. show the average marks by gender
select gender, avg(marks) as average_marks
from students group by gender;

-- 19. list classes in ascending order
select distinct class from students
order by class ASC;

-- 20. show total number of male and female students
select gender, count(*) as count
from students group by gender;

-- 21. find the number of students per class where average marks are greater than 80
select class, count(*) as student_count
from students group by class
having avg(marks) > 80;

-- 22. list students grouped by class and sorted by name
select *  from students
order by class, name;

 













