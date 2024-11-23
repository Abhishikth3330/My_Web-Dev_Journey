select * from Customers;
select * from Orders;
select * from OrderDetail;
select * from Products;

-- not executed yet

CREATE PROCEDURE ManageCRUD (
    -- Customers Table Fields
    @customer_id INT = NULL,
    @customer_name NVARCHAR(100) = NULL,
    @customer_username NVARCHAR(20) = NULL,
    @email NVARCHAR(100) = NULL,
    @phone_number NVARCHAR(15) = NULL,
    -- Orders Table Fields
    @order_id INT = NULL,
    @order_date DATETIME = NULL,
    @total_amount DECIMAL(10, 2) = NULL,
    @order_status NVARCHAR(20) = NULL,
    -- Products Table Fields
    @product_id INT = NULL,
    @product_category NVARCHAR(50) = NULL,
    @product_name NVARCHAR(100) = NULL,
    @price DECIMAL(10, 2) = NULL,
    -- OrderDetail Table Fields
    @order_detail_id INT = NULL,
    @quantity INT = NULL,
    @unit_price DECIMAL(10, 2) = NULL,
    -- Query Filters
    @unique_value NVARCHAR(100) = NULL,
    -- Action to Perform
    @action NVARCHAR(20)
)
AS
BEGIN
    -- Insert Operations
    IF @action = 'insert_customer'
    BEGIN
        INSERT INTO Customers (
            customer_id, customer_name, customer_username, email, phone_number
        )
        VALUES (
            @customer_id, @customer_name, @customer_username, @email, @phone_number
        );
    END

    IF @action = 'insert_order'
    BEGIN
        INSERT INTO Orders (
            order_id, customer_id, order_date, total_amount, order_status
        )
        VALUES (
            @order_id, @customer_id, ISNULL(@order_date, GETDATE()), @total_amount, ISNULL(@order_status, 'Pending')
        );
    END

    IF @action = 'insert_product'
    BEGIN
        INSERT INTO Products (
            product_id, product_category, product_name, price
        )
        VALUES (
            @product_id, @product_category, @product_name, @price
        );
    END

    IF @action = 'insert_order_detail'
    BEGIN
        INSERT INTO OrderDetail (
            order_detail_id, order_id, product_id, quantity, unit_price
        )
        VALUES (
            @order_detail_id, @order_id, @product_id, @quantity, @unit_price
        );
    END

    -- Update Operations
    IF @action = 'update_customer'
    BEGIN
        UPDATE Customers
        SET customer_name = @customer_name,
            customer_username = @customer_username,
            email = @email,
            phone_number = @phone_number
        WHERE customer_id = @customer_id;
    END

    IF @action = 'update_order'
    BEGIN
        UPDATE Orders
        SET customer_id = @customer_id,
            order_date = @order_date,
            total_amount = @total_amount,
            order_status = @order_status
        WHERE order_id = @order_id;
    END

    IF @action = 'update_product'
    BEGIN
        UPDATE Products
        SET product_category = @product_category,
            product_name = @product_name,
            price = @price
        WHERE product_id = @product_id;
    END

    IF @action = 'update_order_detail'
    BEGIN
        UPDATE OrderDetail
        SET order_id = @order_id,
            product_id = @product_id,
            quantity = @quantity,
            unit_price = @unit_price
        WHERE order_detail_id = @order_detail_id;
    END

    -- Delete Operations
    IF @action = 'delete_customer'
    BEGIN
        DELETE FROM Customers WHERE customer_id = @customer_id;
    END

    IF @action = 'delete_order'
    BEGIN
        DELETE FROM Orders WHERE order_id = @order_id;
    END

    IF @action = 'delete_product'
    BEGIN
        DELETE FROM Products WHERE product_id = @product_id;
    END

    IF @action = 'delete_order_detail'
    BEGIN
        DELETE FROM OrderDetail WHERE order_detail_id = @order_detail_id;
    END

    -- Read by ID Operations
    IF @action = 'read_customer_by_id'
    BEGIN
        SELECT * FROM Customers WHERE customer_id = @customer_id;
    END

    IF @action = 'read_order_by_id'
    BEGIN
        SELECT * FROM Orders WHERE order_id = @order_id;
    END

    IF @action = 'read_product_by_id'
    BEGIN
        SELECT * FROM Products WHERE product_id = @product_id;
    END

    IF @action = 'read_order_detail_by_id'
    BEGIN
        SELECT * FROM OrderDetail WHERE order_detail_id = @order_detail_id;
    END

    -- Read by Unique Column Operations
    IF @action = 'read_customer_by_unique'
    BEGIN
        SELECT * FROM Customers WHERE customer_username = @unique_value;
    END

    IF @action = 'read_order_by_unique'
    BEGIN
        SELECT * FROM Orders WHERE order_status = @unique_value;
    END

    IF @action = 'read_product_by_unique'
    BEGIN
        SELECT * FROM Products WHERE product_name = @unique_value;
    END

    IF @action = 'read_order_detail_by_unique'
    BEGIN
        SELECT * FROM OrderDetail WHERE quantity = CAST(@unique_value AS INT);
    END

    -- Example Queries
    IF @action = 'customers_with_orders'
    BEGIN
        SELECT c.customer_id, c.customer_name, c.email, c.phone_number, o.order_date, o.total_amount, o.order_status
        FROM Customers c, Orders o
        WHERE c.customer_id = o.customer_id;
    END

    IF @action = 'order_details_by_customer_id'
    BEGIN
        SELECT od.order_detail_id, od.order_id, od.product_id, od.quantity, od.unit_price
        FROM Orders o, OrderDetail od
        WHERE o.order_id = od.order_id AND o.customer_id = @customer_id;
    END

    IF @action = 'order_details_with_products'
    BEGIN
        SELECT p.product_name, od.order_detail_id, od.quantity, od.unit_price
        FROM Products p, OrderDetail od
        WHERE p.product_id = od.product_id;
    END

    IF @action = 'total_order_value_by_customer'
    BEGIN
        SELECT c.customer_id, c.customer_name, SUM(o.total_amount) AS total_order_value
        FROM Customers c, Orders o
        WHERE c.customer_id = o.customer_id
        GROUP BY c.customer_id, c.customer_name;
    END

    IF @action = 'customers_and_purchased_products'
    BEGIN
        SELECT c.customer_id, c.customer_name, p.product_name
        FROM Customers c, Orders o, OrderDetail od, Products p
        WHERE c.customer_id = o.customer_id AND o.order_id = od.order_id AND od.product_id = p.product_id;
    END

    IF @action = 'customers_who_ordered_specific_product'
    BEGIN
        SELECT c.customer_id, c.customer_name
        FROM Customers c, Orders o, OrderDetail od, Products p
        WHERE c.customer_id = o.customer_id AND o.order_id = od.order_id AND od.product_id = p.product_id AND p.product_name = @unique_value;
    END
END
