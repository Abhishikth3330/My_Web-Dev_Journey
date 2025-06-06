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













