-- 06/06/2025

use student;

create table employees(
	id int PRIMARY KEY,
    name varchar(100)
);

select * from employees;

INSERT INTO employees (id, name) VALUES
(1, 'Alice Johnson'),
(2, 'Bob Smith'),
(3, 'Charlie Brown'),
(4, 'Diana Prince'),
(5, 'Ethan Hunt');



create table customers(
	id int PRIMARY KEY,
    name varchar(100)
);

insert into customers(id, name) values 
(11, 'Alice Johnson'),
(12, 'ABC'),
(13, 'DEF'),
(14, 'GHI'),
(15, 'JKL');

select * from customers;


-- union
select id, name from employees union select id, name from customers;

insert into customers(id, name) values (1, 'Alice Johnson');

show tables;



-- ----------------------------------------------------------------------------------

-- GROUP BY

-- SALES TABLE
create table sales (
    sale_id INT PRIMARY KEY,
    salesman_name VARCHAR(50),
    region VARCHAR(50),
    product VARCHAR(50),
    amount DECIMAL(10, 2)
);


INSERT INTO sales (sale_id, salesman_name, region, product, amount) VALUES
(1, 'Alice', 'North', 'Laptop', 75000.00),
(2, 'Bob', 'South', 'Mouse', 500.00),
(3, 'Alice', 'North', 'Keyboard', 1500.00),
(4, 'Charlie', 'East', 'Laptop', 77000.00),
(5, 'Bob', 'South', 'Keyboard', 1400.00),
(6, 'Alice', 'North', 'Mouse', 550.00),
(7, 'Charlie', 'East', 'Mouse', 600.00),
(8, 'Bob', 'South', 'Laptop', 73000.00);


select * from sales;

select salesman_name, sum(amount) as total from sales group by salesman_name;
select region, sum(amount) as total from sales group by region;

select product, count(product) as quantity_count from sales group by product order by quantity_count;


select product, avg(amount) as average from sales group by product;


select product, min(amount) as min_price from sales group by product order by min_price;

select product, max(amount) as max_price from sales group by product order by max_price;



-- 7/6/2025
-- HAVING CLAUSE



select sale_id, count(amount), max(amount) as max_price from sales group by amount having max_price > 70000;



select count(amount), max(amount) as max_price from sales group by amount having max_price > 70000 order by max_price;


select amount from sales where amount < 70000 group by amount having amount > 400 order by amount asc;





-- teacher_table - {id, name, subject}

CREATE TABLE teacher_table (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    subject VARCHAR(100)
);

INSERT INTO teacher_table (id, name, subject) VALUES
(1, 'Mr. Sharma', 'Mathematics'),
(2, 'Ms. Verma', 'Science'),
(3, 'Dr. Singh', 'History');


INSERT INTO teacher_table (id, name, subject) VALUES
(4, 'Mrs. Patel', 'English'),
(5, 'Mr. Mehta', 'Physics'),
(6, 'Ms. Iyer', 'Chemistry'),
(7, 'Dr. Khan', 'Biology'),
(8, 'Mr. Das', 'Geography'),
(9, 'Mrs. Roy', 'Economics'),
(10, 'Ms. Joseph', 'Computer Science');


-- student_table - {id, name, techer_id(foreign key)}

CREATE TABLE student_table (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES teacher_table(id)
);

INSERT INTO student_table (id, name, teacher_id) VALUES
(1, 'Alice', 1),
(2, 'Bob', 2),
(3, 'Charlie', 1),
(4, 'Diana', 3),
(5, 'Ethan', 2);


INSERT INTO student_table (id, name, teacher_id) VALUES
(6, 'Fiona', 5),
(7, 'George', 3),
(8, 'Hannah', 2),
(9, 'Ian', 6),
(10, 'Jasmine', 1);



SELECT * FROM teacher_table;
SELECT * FROM student_table;



-- 1. Write a SQL query to display the names of all students along with their teacher's name.
select s.name, t.name from teacher_table t join student_table s on t.id = s.teacher_id;

-- 2. Write a SQL query to display students and their teacher's subject.
select s.name, t.subject from teacher_table t join student_table s on t.id = s.teacher_id;

-- 3. Find all students who are taught by " ".
select s.name, t.name from teacher_table t join student_table s on t.id = s.teacher_id having t.name = 'Mr. Sharma';
select s.name, t.name from teacher_table t join student_table s on t.id = s.teacher_id having t.name = 'Dr. Singh';

-- 4. List all teachers who have more than one student assigned to them.
select t.name from teacher_table t join student_table s on t.id = s.teacher_id group by t.name having count(s.name) > 1;


-- 5. Display a list of teachers and the total number of students they teach.
select t.id, t.name, count(s.id) as total_students from teacher_table t left join student_table s 
on t.id = s.teacher_id group by t.id, t.name order by total_students desc;

-- 6. Write a SQL query to list teachers who don't have any students assigned.
select t.id, t.name, t.subject from teacher_table t left join student_table s 
on t.id = s.teacher_id where s.id is null;

-- 7. Find all students who have been assigned to a teacher with subject = 'Math'.
select s.id, s.name, t.name, t.subject from teacher_table t inner join student_table s 
on t.id = s.teacher_id where t.subject = 'Mathematics';

-- 8. Display the total number of students for each subject, ordered by the highest count.
select t.subject, count(s.id) as total_students from teacher_table t join student_table s on t.id = s.teacher_id
group by t.subject order by total_students desc;


-- 9. Write a SQL query to list all students along with teacher details, even if the student is not assigned a teacher (use LEFT JOIN).
select s.id, s.name, t.id, t.name, t.subject from teacher_table t join student_table s on t.id = s.teacher_id;


-- 10. Show a list of teachers with student names under them. If a teacher has no students, show NULL for the student name.
select t.id, t.name, t.subject, s.name from teacher_table t left join student_table s on t.id = s.teacher_id
order by t.id;







