show databases;

use tasks;

show tables;

-- 29/05/2025

CREATE TABLE InterviewAppointment (
    id INT,
    name VARCHAR(100),
    gender VARCHAR(10),
    email VARCHAR(100),
    city VARCHAR(50),
    mobile VARCHAR(15),
    current_time_col TIME,
    current_date_col DATE,
    current_date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    schedule_date DATE,
    schedule_time TIME,
    schedule_date_time DATETIME
);


INSERT INTO InterviewAppointment (
    id, name, gender, email, city, mobile, current_time_col, current_date_col, current_date_time, schedule_date, schedule_time, schedule_date_time) 
VALUES
(1, 'ABC', 'Female', 'abc@gmail.com', 'Nagpur', '+91 98765 43210', TIME(NOW()), DATE(NOW()), NOW(), '2025-06-10', '10:30:00', '2025-06-10 10:30:00'),
(2, 'XYZ', 'Male', 'xyz@gmail.com', 'Nagpur', '+91 91234 56780', TIME(NOW()), DATE(NOW()), NOW(), '2025-06-15', '14:00:00', '2025-06-15 14:00:00');


select * from InterviewAppointment;








-- 30/05/2025

-- employee_operator
select * from employee_operator;

-- where clause to check for matching strings from a column
select * from employee_operator where city='Nagpur';


-- where clause to check if the salary is greater than, less than, greater than or equal to, less than or equal to
select * from employee_operator where salary > 10000;

select * from employee_operator where salary < 10000;

select * from employee_operator where salary >= 13000.45;

select * from employee_operator where salary <= 13000.45;


-- not equal to != OR <> Symbol
select * from employee_operator where salary != 13000.45;

select * from employee_operator where salary <> 13000.45;


-- to check if the value lies in BETWEEN some range
select * from employee_operator where salary BETWEEN 10000 AND 13000;

select * from employee_operator where salary BETWEEN 10000 AND 13100;


-- to check string which are LIKE (starts with first letter N...)
select * from employee_operator where city LIKE 'N%';

-- cities that are like R... 
select * from employee_operator where city LIKE 'R%';


-- checking column having this list, that are IN our column
select * from employee_operator where city IN ('Nagpur', 'Raipur');



-- AND
select * from employee_operator where name='ABC' AND city='Nagpur';

-- OR
select * from employee_operator where name='JKL' OR city='Nagpur';

-- NOT
select * from employee_operator where NOT name='JKL';






-- 31/05/2025

-- ORDER BY

select * from employee_operator ORDER BY salary;

select * from employee_operator ORDER BY salary asc;

select * from employee_operator ORDER BY salary DESC;



select * from employee_operator ORDER BY name, salary ASC;

select * from employee_operator ORDER BY name ASC, salary DESC;



SELECT * FROM EMPLOYEE_OPERATOR where city = 'Nagpur' AND name like 'D%';


SELECT * FROM EMPLOYEE_OPERATOR where city = 'Nagpur' OR name like 'D%';


SELECT * FROM EMPLOYEE_OPERATOR where NOT city = 'Nagpur';





select * from employee_operator where salary IS NULL;

select * from employee_operator where salary IS NOT NULL;



UPDATE EMPLOYEE_OPERATOR SET SALARY = 17500.21 where id = 7;



update employee_operator set name = 'MNO' where id = 7;


update employee_operator SET CITY = 'MUMBAI';


-- DELETE ALL VALUES OR GIVEN RECORDS OF THE TABLE
DELETE FROM EMPLOYEE_OPERATOR WHERE ID = 7;


-- DELETE ENTIRE TABLE WITH SCHEMA
DROP TABLE EMPLOYEE_OPERATOR;




-- AGGREGATE FUNCTION
-- MIN, MAX, SUM, COUNT, AVG


SELECT MIN(SALARY) FROM EMPLOYEE_OPERATOR;

SELECT MAX(SALARY) FROM EMPLOYEE_OPERATOR;


SELECT COUNT(SALARY) FROM EMPLOYEE_OPERATOR;


SELECT COUNT(SALARY) FROM EMPLOYEE_OPERATOR WHERE SALARY > 20000;


SELECT COUNT(NAME) FROM EMPLOYEE_OPERATOR;


SELECT COUNT(DISTINCT NAME) FROM EMPLOYEE_OPERATOR;


SELECT SUM(SALARY) FROM EMPLOYEE_OPERATOR;


SELECT SUM(SALARY) FROM EMPLOYEE_OPERATOR WHERE SALARY > 10000;


SELECT AVG(SALARY) FROM EMPLOYEE_OPERATOR;


SELECT * FROM EMPLOYEE_OPERATOR WHERE CITY IN ('Nagpur', 'Raipur');


select * from employee_operator where city NOT IN ('Nagpur');







-- 03/06/2025

create table development (
	d_id INT PRIMARY KEY,
    t_id INT FOREIGN KEY (t_id) references trainner(t_id),
    name varchar(100),
    gender VARCHAR(10),
    Date_Of_Birth DATE,
    email VARCHAR(100),
    city VARCHAR(50),
    mobile VARCHAR(15),
    Date_Of_Joining DATE
);

create table trainner(
	t_id INT PRIMARY KEY,
    name varchar(100),
    mobile varchar(15)
);



select * from trainner;


insert into trainner(t_id, name, mobile) values
(1, 'ABC', '+91 78945 64564'), 
(2, 'DEF', '+91 78475 32564'),
(3, 'GHI', '+91 97945 12564'),
(4, 'JKL', '+91 66945 33564');


insert into trainner(t_id, name, mobile) values
(1, 'XYZ', '+91 99945 11564');







create table Books(
	b_id int primary key,
    title varchar(150),
    author varchar(100)
);


INSERT INTO Books (b_id, title, author) VALUES
(1, 'The Great Gatsby', 'F. Scott Fitzgerald'),
(2, 'To Kill a Mockingbird', 'Harper Lee'),
(3, '1984', 'George Orwell'),
(4, 'Pride and Prejudice', 'Jane Austen'),
(5, 'The Catcher in the Rye', 'J.D. Salinger');


select * from Books;



create table Department (
	d_id int primary key,
    dept_name varchar(150),
    dept_mail varchar(200)
);

insert into Department(d_id, dept_name, dept_mail) values 
(1, 'Sales', 'sales@gmail.com'),
(2, 'Developer', 'developer@gmail.com'),
(3, 'Accounts', 'accounts@gmail.com');

select * from Department;

create table Employee (
	e_id int primary key,
    e_name varchar(150),
    e_mail varchar(200),
    e_gender varchar(10),
    e_mobile varchar(15),
    d_id int,
    foreign key (d_id) references Department(d_id)
);


insert into Employee(e_id, e_name, e_mail, e_gender, e_mobile, d_id) values 
(1, 'ABC', 'abc@gmail.com', 'Female', '+91 78945 62131', 2),
(2, 'DEF', 'def@gmail.com', 'Male', '+91 12345 62131', 1),
(3, 'GHI', 'ghi@gmail.com', 'Female', '+91 74152 62852', 1),
(4, 'JKL', 'jkl@gmail.com', 'Female', '+91 96325 62789', 3),
(5, 'MNO', 'mno@gmail.com', 'Male', '+91 85241 65412', 2);


insert into Employee(e_id, e_name, e_mail, e_gender, e_mobile, d_id) values 
(6, 'XYZ', 'xyz@gmail.com', 'Male', '+91 96324 75412', 4);


select * from Employee;



-- JOINS
select e_id, e_name, dept_name, dept_mail from Employee e join Department d on e.d_id = d.d_id order by e_id; 




-- Example - 2
create table order_table(
	o_id int primary key,
    p_id int,
    o_name varchar(150),
    o_quantity int,
    o_date date,
    foreign key (p_id) references product_table(p_id)
);

create table product_table(
	p_id int primary key,
    p_name varchar(150),
    p_price int
);


INSERT INTO product_table (p_id, p_name, p_price) VALUES
(1, 'Laptop', 55000),
(2, 'Smartphone', 25000),
(3, 'Headphones', 2000),
(4, 'Keyboard', 1200),
(5, 'Monitor', 15000);


INSERT INTO product_table (p_id, p_name, p_price) VALUES
(6, 'Microphone', 5000),
(7, 'Earphone', 3000),
(8, 'PS', 20000);



INSERT INTO order_table (o_id, p_id, o_name, o_quantity, o_date) VALUES
(1, 1, 'Order for Laptop', 2, '2025-06-01'),
(2, 2, 'Order for Smartphone', 1, '2025-06-02'),
(3, 3, 'Order for Headphones', 5, '2025-06-02'),
(4, 4, 'Order for Keyboard', 3, '2025-06-03'),
(5, 5, 'Order for Monitor', 2, '2025-06-03');









select p.p_id, p.p_name, o.o_id, o.o_name, p.p_price, o.o_quantity, o.o_date from order_table o join product_table p on o.p_id = p.p_id;


select * from order_table o right join product_table p on o.p_id = p.p_id;

select * from product_table p left join order_table o on o.p_id = p.p_id;

select s.id, s.name, sm.subject, sm.marks from student s inner join student_marks sm on s.id = sm.id;

select s.id, s.name, sm.subject, sm.marks from student s inner join student_marks sm on s.id = sm.id;


use tasks;
select * from student;



select * from student_marks;

select * from student_marks t1 join student_marks t2 on t1.id = t2.id;























-- Example - 4
CREATE DATABASE EmployeeDB2;
USE EmployeeDB2;

-- 1. Create the employees table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary FLOAT,
    city VARCHAR(100),
    join_date DATE,
    email VARCHAR(100),
    commission FLOAT
);

-- 2. Insert 5 records into the employees table with some NULL values in commission
INSERT INTO employees (emp_id, name, department, salary, city, join_date, email, commission) VALUES
(1, 'Amit', 'HR', 32000, 'Mumbai', '2023-03-01', 'amit@example.com', NULL),
(2, 'Neha', 'IT', 48000, 'Delhi', '2022-11-15', 'neha@example.com', 3000),
(3, 'Raj', 'Finance', 29000, 'Mumbai', '2024-02-10', 'raj@example.com', NULL),
(4, 'Anjali', 'Sales', 51000, 'Bangalore', '2021-07-01', 'anjali@example.com', 5000),
(5, 'Karan', 'IT', 41000, 'Mumbai', '2023-12-01', NULL, NULL);

-- 3. Select all data from the employees table
SELECT * FROM employees;

-- 4. Display only the name and salary of all employees
select name, salary from employees;

-- 5. show employes who belong to the 'HR' department
select * from employees where department = 'HR';

-- 6. show employees with salary > 30000 and city = 'Mumbai'
select * from employees where salary > 30000 and city = 'Mumbai';

-- 7. show employees from 'IT' or 'Finance' departments
select * from employees where department in ('IT', 'Finance');

-- 8. list employees who are not from the 'Sales' department
select * from employees where department <> 'Sales';

-- 9. display employees ordered by salary (ascending)
select * from employees order by salary asc;

-- 10. display employees ordered by name in descending order
select * from employees order by name desc;

-- 11. Select all employees who do not have a commission (i.e., commission is NULL)
SELECT * FROM employees WHERE commission IS NULL;

-- 12. select all employees who have comission (NOT NULL)
select * from employees where commission is not null;


-- 13. update the salary of the employee with emp_id = 3 to 45000
update employees set salary = 45000 where emp_id = 3;


-- 14. delete the employee whose name is 'Amit'
delete from employees where name = 'Amit';


-- 15. display only te top 3 highest paid employees;
select * from employees order by salary desc limit 3;

-- 16. show the first 2 employees joined (based on join_date)
select * from employees order by join_date asc limit 2;

-- 17. find the minimum and maximum salary
select min(salary) as min_salary, max(salary) as max_salary from employees;

-- 18. count the total number of employees
select count(*) as total_employees from employees;

-- 19. find the average salary of all employees

-- 20.  calculate the sum of all commissions
select sum(commission) as total_commission from employees;

-- 21. show employees whose name starts with 'A'
select * from employees where name like 'A%';

-- 22. show employees whose name ends with 'a'
select * from employees where name like '%a';

-- 23. show employees whose name contains 'an'
select * from employees where name like '%an%';

-- 24. Show employees who work in 'HR', 'IT', or 'Finance' using IN operator
SELECT * FROM employees WHERE department IN ('HR', 'IT', 'Finance');

-- 25. show employees whose salary is between 30000 and 50000
select * from employees where salary between 30000 and 50000;

-- 26. Show employees who joined between '2023-01-01' and '2024-01-01'
SELECT * FROM employees WHERE join_date BETWEEN '2023-01-01' AND '2024-01-01';

 -- 27. show the highest salary per department
 select department, max(salary) as highest_salary from employees group by department;
 
 -- 28. count number of employees per city
 select city, count(*) as employee_count from employees group by city;
 
 -- 29. show total commission per department
 select department, sum(commission) as total_commission from employees group by department;
 
 -- 30. list employees without an email id
 select * from employees where email is null;
 
-- 31. Display employees who joined in the last 6 months
SELECT * FROM employees WHERE join_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH);












































