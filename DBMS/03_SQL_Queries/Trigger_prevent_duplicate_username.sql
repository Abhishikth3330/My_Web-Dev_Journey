CREATE TRIGGER trg_prevent_duplicate_username
ON Customers
INSTEAD OF INSERT
AS
BEGIN
    -- Check if the username in the inserted row already exists in the Customers table
    IF EXISTS (
        SELECT 1 
        FROM INSERTED i
        JOIN Customers c 
        ON i.customer_username = c.customer_username
    )
    BEGIN
        -- Throw an error if a duplicate username is found
        THROW 50001, 'The username is already in use. Please choose a different username.', 1;
    END
    ELSE
    BEGIN
        -- Insert the data into the Customers table if no duplicates exist
        INSERT INTO Customers (customer_id, customer_name, customer_username, email, phone_number, registration_date, modification_date)
        SELECT customer_id, customer_name, customer_username, email, phone_number, registration_date, modification_date
        FROM INSERTED;
    END
END;



