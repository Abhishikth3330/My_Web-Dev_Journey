using System;
using System.Web.UI;
using System.Data.SqlClient;
using System.Data;
using System.Web.UI.WebControls;

namespace MasterWebFormApp
{
    public partial class Products1 : Page
    {
        private readonly string connectionString = @"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False";
        private SqlConnection cn;
        private SqlCommand cm;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Load all products by default
                LoadProducts("All");
            }
        }

        // Method to load products based on category
        private void LoadProducts(string category)
        {
            string query = category == "All"
                ? "SELECT ProductID, ProductName, Price, ProductImage FROM ProductTable"
                : "SELECT ProductID, ProductName, Price, ProductImage FROM ProductTable WHERE CategoryID = (SELECT CategoryID FROM CategoryTable WHERE CategoryName = @Category)";

            try
            {
                cn = new SqlConnection(connectionString);
                cm = new SqlCommand(query, cn);
                if (category != "All")
                {
                    cm.Parameters.AddWithValue("@Category", category);
                }

                cn.Open();
                SqlDataReader dr = cm.ExecuteReader();
                DataTable dt = new DataTable();
                dt.Load(dr);

                rptProducts.DataSource = dt;
                rptProducts.DataBind();
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error loading products: {ex.Message}');</script>");
            }
            finally
            {
                cn?.Close();
            }
        }

        // Add to Cart method
        protected void AddToCart(string email, string password, int productId, int quantity)
        {
            int userId = 0;
            int categoryId = 0;

            // Retrieve UserID using Email and Password
            string userQuery = "SELECT UserID FROM UserTable WHERE Email = @Email AND Password = @Password";
            try
            {
                cn = new SqlConnection(connectionString);
                cm = new SqlCommand(userQuery, cn);
                cm.Parameters.AddWithValue("@Email", email);
                cm.Parameters.AddWithValue("@Password", password);

                cn.Open();
                object result = cm.ExecuteScalar();
                if (result != null)
                {
                    userId = Convert.ToInt32(result);
                }
                else
                {
                    Response.Write("<script>alert('Invalid email or password.');</script>");
                    return;
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error retrieving user: {ex.Message}');</script>");
                return;
            }
            finally
            {
                cn?.Close();
            }

            // Retrieve CategoryID using ProductID
            string categoryQuery = "SELECT CategoryID FROM ProductTable WHERE ProductID = @ProductID";
            try
            {
                cn = new SqlConnection(connectionString);
                cm = new SqlCommand(categoryQuery, cn);
                cm.Parameters.AddWithValue("@ProductID", productId);

                cn.Open();
                categoryId = Convert.ToInt32(cm.ExecuteScalar());
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error retrieving category: {ex.Message}');</script>");
                return;
            }
            finally
            {
                cn?.Close();
            }

            // Insert data into CartTable
            string insertQuery = "INSERT INTO CartTable (UserID, ProductID, CategoryID, Quantity, AddedDate) VALUES (@UserID, @ProductID, @CategoryID, @Quantity, GETDATE())";
            try
            {
                cn = new SqlConnection(connectionString);
                cm = new SqlCommand(insertQuery, cn);
                cm.Parameters.AddWithValue("@UserID", userId);
                cm.Parameters.AddWithValue("@ProductID", productId);
                cm.Parameters.AddWithValue("@CategoryID", categoryId);
                cm.Parameters.AddWithValue("@Quantity", quantity);

                cn.Open();
                cm.ExecuteNonQuery();
                Response.Write("<script>alert('Product added to cart successfully!');</script>");
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error adding to cart: {ex.Message}');</script>");
            }
            finally
            {
                cn?.Close();
            }
        }

        // Handle Add to Cart button click from the frontend
        protected void btnAddToCart_Click(object sender, EventArgs e)
        {
            // Get the product ID from CommandArgument
            Button btn = sender as Button;
            int productId = Convert.ToInt32(btn.CommandArgument);

            // Get the quantity from the corresponding input field
            int quantity = Convert.ToInt32(Request.Form["quantity_" + productId]);

            // Retrieve email and password from the respective textboxes
            string email = txtEmail.Text;
            string password = txtPassword.Text;

            // Call the AddToCart method
            AddToCart(email, password, productId, quantity);
        }


        // Handle category button clicks
        protected void btnCategory_Click(object sender, EventArgs e)
        {
            string category = (sender as Button).Text;  // Get category from button text
            LoadProducts(category);
        }
    }
}
