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




