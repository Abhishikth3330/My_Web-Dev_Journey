CREATE TRIGGER trg_set_order_date
ON Orders
AFTER INSERT, UPDATE
AS
BEGIN
    -- For newly inserted rows or updated rows, set the order_date to the current time (GETDATE())
    UPDATE Orders
    SET order_date = GETDATE()
    FROM Orders o
    INNER JOIN INSERTED i
    ON o.order_id = i.order_id;
END;
