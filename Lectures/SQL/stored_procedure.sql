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