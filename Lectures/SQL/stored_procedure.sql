create database junedb;

use junedb;

create table sales2(ProductID int, Quantity int, SalesData Date);


delimiter $$
create PROCEDURE mysale2(IN p_ProductID int, IN p_Quantity int, IN p_SalesData Date)
BEGIN
insert into sales2(ProductID, Quantity, SalesData)
values(p_ProductID, p_Quantity, p_SalesData);
END $$
delimiter ;

call mysale2(1, 05, '2025-05-07');
call mysale2(2, 10, '2025-06-10');
call mysale2(1, 100, '2025-06-20');

select * from sales2;




create table student(id int, name varchar(100), subject varchar(20), age int(100));

select * from student;

delimiter $$
create procedure student_info(IN std_id int, IN std_name varchar(100), IN std_subject varchar(20), IN std_age int(100))
begin
insert into student(id, name, subject, age)
values (std_id, std_name, std_subject, std_age);
END $$
delimiter ;

call student_info(1, 'ABC', 'DSA', 21);
call student_info(2, 'DEF', 'AI', 22);
call student_info(3, 'GHI', 'ML', 23);
call student_info(4, 'JKL', 'Maths', 21);
call student_info(5, 'MNO', 'Chemistry', 20);

select * from student;



-- 10/06/2025

create table studentnew(rollno int, name varchar(25), marks int, status varchar(30));

insert into studentnew(rollno, name, marks, status)
values
(1, 'ABC', 80, 'Pass'),
(2, 'Ram', 40, 'Fail'),
(3, 'Sita', 60, 'Pass'),
(4, 'Gita', 50, 'Fali');

select * from studentnew;


delimiter $$
create procedure updatestatus1(in marks1 int)
begin
declare mymark int;
set mymark=marks1;
if mymark>45 then
update studentnew set status='Pass' where marks=mymark;
else
update studentnew set status='Fail' where marks=mymark;
end if;
END $$
delimiter ;


call updatestatus1(50);

select * from studentnew;


create table student_data(rollno int, name varchar(25), class varchar(10));

alter table student_data add column std_status varchar(100);

select * from student_data;

insert into student_data (rollno, name, class) values
(1, 'ABC', '10th'),
(2, 'PQR', '12th'),
(3, 'TUV', '12th'),
(4, 'XYZ', '10th');


delimiter $$
create procedure upadte_stdstatus4(in stat1 varchar(100))
begin
declare stat varchar(100);
set stat=stat1;
if stat='10th' then
update student_data set std_status='Junior' where class=stat;
else
update student_data set std_status='Senior' where class=stat;
end if;
END $$
delimiter ;


call upadte_stdstatus4('10th');
call upadte_stdstatus4('12th');




create table employees(id int primary key, name varchar(100), department varchar(100), salary int);

ALTER TABLE employees
MODIFY salary DECIMAL(10, 2);


INSERT INTO employees (id, name, department, salary) VALUES
(1, 'ABC', 'HR', 50000.00),
(2, 'DEF', 'Finance', 60000.50),
(3, 'GHI', 'IT', 75000.75),
(4, 'JKL', 'Marketing', 55000.25),
(5, 'MNO', 'Sales', 62000.00),
(6, 'PQR', 'IT', 71000.40),
(7, 'STU', 'Finance', 58000.60),
(8, 'VWX', 'HR', 53000.10),
(9, 'YZA', 'Marketing', 49500.95),
(10, 'BCD', 'Sales', 60500.80);


select * from employees;



delimiter $$
create procedure getemployee(out empcount int)
begin
	select count(*) into empcount from employees;
end $$
delimiter ;


call getemployee(@total);

select @total as total_employees;



-- example - 1
-- we can find the department name and then 
-- find the employee count of that department


delimiter $$
create procedure get_emp_count_dept(
	IN dept_name varchar(100),
    OUT emp_count int
)
BEGIN
	SELECT count(*) into emp_count
    from employees
    where department = dept_name;
END $$
delimiter ;

call get_emp_count_dept('IT', @count);
select @count;





-- EXAMPLE - 3

-- DELIMITER $$

-- CREATE PROCEDURE UpdateSalaryWithBonus(
--     IN empId INT,
--     INOUT bonusPercent DECIMAL(5,2)
-- )
-- BEGIN
--     DECLARE currentSalary DECIMAL(10,2);
--     DECLARE newSalary DECIMAL(10,2);

--     -- Get current salary
--     SELECT salary INTO currentSalary FROM employee1 WHERE id = empId;

--     -- Calculate new salary with bonus
--     SET newSalary = currentSalary + (currentSalary * bonusPercent / 100);

--     -- Update the salary in the table
--     UPDATE employee1 SET salary = newSalary WHERE id = e
-- SET @bonus = 10.00; -- starting bonus
-- CALL UpdateSalaryWithBonus(2, @bonus);
-- SELECT @bonus AS Updated_Bonus_Percent;
-- SELECT * FROM employee1 WHERE id = 2;







DELIMITER $$

CREATE PROCEDURE UpdateSalaryWithBonus(
    IN empId INT,
    INOUT bonusPercent DECIMAL(5,2)
)
BEGIN
    DECLARE currentSalary DECIMAL(10,2);
    DECLARE newSalary DECIMAL(10,2);

    -- Get current salary
    SELECT salary INTO currentSalary FROM employees WHERE id = empId;

    -- Calculate new salary with bonus
    SET newSalary = currentSalary + (currentSalary * bonusPercent / 100);

    -- Update the salary in the table
    UPDATE employees SET salary = newSalary WHERE id = empId;
END $$

DELIMITER ;



SET @bonus = 10.00;
CALL UpdateSalaryWithBonus(2, @bonus);


SELECT @bonus AS Updated_Bonus_Percent;


SELECT * FROM employees WHERE id = 2;


-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


-- 27_06_2025

create database newjunedb;

use newjunedb;

create table EMPLOYEE (
	ID INT PRIMARY KEY auto_increment,
    Name VARCHAR(255) NOT NULL,
	Salary DECIMAL(10, 2) NOT NULL
);


CREATE TABLE audit_log(
	log_id INT PRIMARY KEY auto_increment,
    employee_id INT NOT NULL,
    old_salary decimal(10, 2),
    new_salary decimal(10, 2),
    change_date datetime not null,
    foreign key(employee_id) references EMPLOYEE(ID)
);

DELIMITER $$
CREATE TRIGGER log_salary_changes
AFTER UPDATE ON EMPLOYEE
FOR EACH ROW
BEGIN
INSERT INTO audit_log(employee_id, old_salary, new_salary, change_date)
VALUES(old.id, old.salary, new.salary, now());
END $$

delimiter ;

show triggers;


select * from EMPLOYEE;


INSERT INTO EMPLOYEE (Name, Salary) VALUES 
('Amit Sharma', 50000.00),
('Neha Singh', 60000.00),
('Rahul Mehta', 55000.00),
('Priya Das', 65000.00),
('Karan Patel', 52000.00),
('Simran Kaur', 58000.00),
('Ankit Joshi', 62000.00),
('Riya Roy', 54000.00),
('Varun Jain', 70000.00),
('Sneha Iyer', 75000.00);


select * from audit_log;


INSERT INTO audit_log (employee_id, old_salary, new_salary, change_date) VALUES
(1, 47000.00, 50000.00, NOW()),
(2, 57000.00, 60000.00, NOW());




use newjunedb;


show tables;

select * from employee;

alter table employee change Name employee_name varchar(100);

alter table employee change employee_name Employee_name varchar(100);





