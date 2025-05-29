show databases;



use tasks;


show tables;

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