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



















