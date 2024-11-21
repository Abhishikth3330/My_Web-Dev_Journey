CREATE DATABASE SHOPPING;

USE SHOPPING;

-- FIRST WE'LL CREATE A PRODUCTS TABLE
CREATE TABLE Products(
	product_id INT PRIMARY KEY,
	product_category NVARCHAR(50) NOT NULL,
	product_name NVARCHAR(100) NOT NULL,
	price DECIMAL(10, 2) NOT NULL,
	registration_date DATETIME DEFAULT GETDATE(),
	modification_date DATETIME DEFAULT NULL
);

SELECT * FROM Products;

-- NOW WE HAVE CUSTOMERS AT OUR WEBSITE
CREATE TABLE Customers(
	customer_id INT PRIMARY KEY,
	customer_name NVARCHAR(100) NOT NULL,
	customer_username NVARCHAR(20) UNIQUE,
	email NVARCHAR(100) NOT NULL,
	phone_number NVARCHAR(15),
	registration_date DATETIME DEFAULT GETDATE(),
	modification_date DATETIME DEFAULT NULL
);

select * from Customers;

-- NOW CUSTOMER PLACES AND ORDER
CREATE TABLE Orders(
	order_id INT PRIMARY KEY,
	customer_id INT NOT NULL,
	order_date DATETIME DEFAULT GETDATE(),
	total_amount DECIMAL(10, 2),
	order_status NVARCHAR(20) DEFAULT 'Pending' NOT NULL, -- can be Pending, Shipped, Delivered, Cancelled
	registration_date DATETIME DEFAULT GETDATE(),
	modification_date DATETIME DEFAULT NULL
);

select * from Orders;

-- NOW WE HAVE THE TOTAL ORDERS DETAILS
CREATE TABLE OrderDetail(
	order_detail_id INT PRIMARY KEY,
	order_id INT NOT NULL,
	product_id INT NOT NULL,
	quantity INT NOT NULL,
	unit_price DECIMAL(10, 2)NOT NULL,
	total_amount AS (quantity * unit_price) PERSISTED,
	registration_date DATETIME DEFAULT GETDATE(),
	modification_date DATETIME DEFAULT NULL
);

select * from OrderDetail;

-- this foreign key references customer id from orders to customer id
ALTER TABLE Orders
ADD CONSTRAINT FK_Orders_Customers
FOREIGN KEY (customer_id) REFERENCES Customers(customer_id);

-- foreign key references to order id of orderdetails to order table
ALTER TABLE OrderDetail
ADD CONSTRAINT FK_OrderDetail_Orders
FOREIGN KEY (order_id) REFERENCES Orders(order_id);

-- foreign key references to product id from orderdetails to product table
ALTER TABLE OrderDetail
ADD CONSTRAINT FK_OrderDetail_Products
FOREIGN KEY (product_id) REFERENCES Products(product_id);

SELECT * FROM Products;
select * from Customers;
select * from Orders;
select * from OrderDetail;

-- you have a trigger here which will pop-up to prevent a duplicate username
select * from sys.triggers;

-- Inserting 15 rows into the Products table
INSERT INTO Products (product_id, product_category, product_name, price)
VALUES 
(311, 'Electronics', 'Smartphone', 25000.00),
(312, 'Electronics', 'Laptop', 45000.00),
(313, 'Electronics', 'Bluetooth Headphones', 3000.00),
(314, 'Electronics', 'Smart Watch', 8000.00),
(315, 'Electronics', 'LED TV', 40000.00),
(316, 'Furniture', 'Sofa', 25000.00),
(317, 'Furniture', 'Dining Table', 15000.00),
(318, 'Furniture', 'Wardrobe', 12000.00),
(319, 'Furniture', 'Coffee Table', 5000.00),
(320, 'Furniture', 'Office Chair', 7000.00),
(321, 'Appliances', 'Washing Machine', 25000.00),
(322, 'Appliances', 'Refrigerator', 30000.00),
(323, 'Appliances', 'Microwave Oven', 6000.00),
(324, 'Appliances', 'Air Conditioner', 35000.00),
(325, 'Clothing', 'Coat', 7000.00),
(326, 'Clothing', 'T-shirt', 800.00);

SELECT * FROM Products;


-- inserting data in the customers tables
-- Inserting 6 rows into the Customers table
INSERT INTO Customers (customer_id, customer_name, customer_username, email, phone_number)
VALUES 
(1, 'Ravi Kumar', 'ravi_kumar', 'ravi.kumar@example.com', '9876543210'),
(2, 'Priya Sharma', 'priya_sharma', 'priya.sharma@example.com', '9876543211'),
(3, 'Amit Verma', 'amit_verma', 'amit.verma@example.com', '9876543212'),
(4, 'Sneha Gupta', 'sneha_gupta', 'sneha.gupta@example.com', '9876543213'),
(5, 'Vikram Yadav', 'vikram_yadav', 'vikram.yadav@example.com', '9876543214'),
(6, 'Anjali Mehta', 'anjali_mehta', 'anjali.mehta@example.com', '9876543215');


-- Attempt to insert a customer with a duplicate username
INSERT INTO Customers (customer_id, customer_name, customer_username, email, phone_number)
VALUES (7, 'Sanjay Singh', 'ravi_kumar', 'sanjay.singh@example.com', '9876543216');
-- trigger will be activated with this message
-- The username is already in use. Please choose a different username.

-- Inserting 4 more rows into the Customers table
INSERT INTO Customers (customer_id, customer_name, customer_username, email, phone_number)
VALUES 
(7, 'Mohit Reddy', 'mohit_reddy', 'mohit.reddy@example.com', '9876543220'),
(8, 'Neha Soni', 'neha_soni', 'neha.soni@example.com', '9876543221'),
(9, 'Karan Patel', 'karan_patel', 'karan.patel@example.com', '9876543222'),
(10, 'Pooja Desai', 'pooja_desai', 'pooja.desai@example.com', '9876543223');

select * from Customers;

--orders table
-- Inserting orders for customers
-- Inserting orders for customers
INSERT INTO Orders (order_id, customer_id, order_date, total_amount, order_status)
VALUES 
(1, 1, GETDATE(), 0, 'Pending'),  -- Customer 1's order
(2, 2, GETDATE(), 0, 'Pending'),  -- Customer 2's order
(3, 3, GETDATE(), 0, 'Pending');  -- Customer 3's order

select * from Orders;

-- order details table
-- Inserting order details for Customer 1
INSERT INTO OrderDetail (order_detail_id, order_id, product_id, quantity, unit_price)
VALUES 
(1, 1, 326, 1, 800.00),  -- T-shirt
(2, 1, 325, 1, 1500.00), -- Coat
(3, 1, 314, 1, 8000.00), -- Smart Watch
(4, 1, 313, 1, 3000.00); -- Bluetooth Headphones

-- Inserting order details for Customer 2
INSERT INTO OrderDetail (order_detail_id, order_id, product_id, quantity, unit_price)
VALUES 
(5, 2, 321, 1, 25000.00), -- Washing Machine
(6, 2, 318, 1, 12000.00); -- Wardrobe

-- Inserting order details for Customer 3
INSERT INTO OrderDetail (order_detail_id, order_id, product_id, quantity, unit_price)
VALUES 
(7, 3, 320, 1, 7000.00),  -- Office Chair
(8, 3, 312, 1, 45000.00), -- Laptop
(9, 3, 317, 1, 15000.00); -- Dining Table

-- Updating the total amount for each order in the Orders table
UPDATE Orders
SET total_amount = (
    SELECT SUM(quantity * unit_price)
    FROM OrderDetail
    WHERE OrderDetail.order_id = Orders.order_id
)
WHERE order_id IN (1, 2, 3);

select * from Products;
select * from OrderDetail;
select * from Orders;
SELECT * FROM Customers;


-- SCENARIO
-- A NEW CUSTOMER CALLED PERSON-4 (Anjali Mehta, customer-id : 6)
-- buys 2 products (311: smartphone, 316: sofa)

-- Insert the order for Anjali Mehta (Person-4) into the Orders table
INSERT INTO Orders (order_id, customer_id, order_date, total_amount, order_status)
VALUES
(4, 6, GETDATE(), 0, 'Pending');

-- Insert order details for Anjali Mehta (Person-4) into the OrderDetail table
INSERT INTO OrderDetail (order_detail_id, order_id, product_id, quantity, unit_price)
VALUES
(10, 4, 311, 1, 15000.00),  -- Smartphone
(11, 4, 316, 1, 20000.00);  -- Sofa

UPDATE OrderDetail
SET quantity = 2
WHERE order_detail_id = 10;

select * from OrderDetail;

-- Update the total amount for Anjali Mehta's order in the Orders table
UPDATE Orders
SET total_amount = (
    SELECT SUM(quantity * unit_price)
    FROM OrderDetail
    WHERE OrderDetail.order_id = Orders.order_id
),
order_status = 'Shipped'
WHERE order_id = 4;

select * from Orders;