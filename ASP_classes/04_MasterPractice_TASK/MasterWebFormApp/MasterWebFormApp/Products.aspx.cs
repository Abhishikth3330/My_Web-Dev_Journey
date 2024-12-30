using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

namespace MasterWebFormApp
{
    public partial class Products1 : Page
    {
        private readonly string connectionString = @"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False";
        private SqlConnection cn;
        private SqlCommand cm;
        private SqlDataReader dr;

        // Page Load function
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                LoadProducts("All");
            }
            else
            {
                string category = hfCategory.Value;
                if (!string.IsNullOrEmpty(category))
                {
                    LoadProducts(category);
                }
            }
        }

        private void LoadProducts(string category)
        {
            string query;

            if (category == "All")
            {
                query = "SELECT p.ProductID, p.ProductName, p.Price, p.ProductImage " +
                        "FROM ProductTable p";
            }
            else
            {
                query = "SELECT p.ProductID, p.ProductName, p.Price, p.ProductImage " +
                        "FROM ProductTable p INNER JOIN CategoryTable c ON p.CategoryID = c.CategoryID " +
                        "WHERE c.CategoryName = @Category";
            }

            try
            {
                cn = new SqlConnection(connectionString);
                cm = new SqlCommand(query, cn);
                if (category != "All")
                {
                    cm.Parameters.AddWithValue("@Category", category);
                }

                cn.Open();
                dr = cm.ExecuteReader();

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
                dr?.Close();
                cn?.Close();
            }
        }

        // Login button handler
        //protected void btnLogin_Click(object sender, EventArgs e)
        //{
        //    string email = txtEmail.Text;
        //    string password = txtPassword.Text;

        //    string query = "SELECT UserID FROM UserTable WHERE Email = @Email AND Password = @Password";

        //    try
        //    {
        //        cn = new SqlConnection(connectionString);
        //        cm = new SqlCommand(query, cn);
        //        cm.Parameters.AddWithValue("@Email", email);
        //        cm.Parameters.AddWithValue("@Password", password); // Consider hashing and validating password

        //        cn.Open();
        //        object result = cm.ExecuteScalar();

        //        if (result != null)
        //        {
        //            Session["UserEmail"] = txtEmail.Text.Trim();
        //            Session["UserPassword"] = txtPassword.Text.Trim();

        //            // Store UserID in session or a variable
        //            Session["UserID"] = result.ToString();
        //            Response.Write("<script>alert('Login successful!');</script>");
        //        }
        //        else
        //        {
        //            Response.Write("<script>alert('Invalid email or password!');</script>");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Response.Write($"<script>alert('Error during login: {ex.Message}');</script>");
        //    }
        //    finally
        //    {
        //        // Close the connection
        //        cn?.Close();
        //    }
        //}

        // Add to cart functionality
        protected void addToCart(int productId, int quantity)
        {
            // Retrieve UserID from session
            int userId = Convert.ToInt32(Session["UserID"]);

            // Retrieve CategoryID using ProductID
            string categoryQuery = "SELECT CategoryID FROM ProductTable WHERE ProductID = @ProductID";
            int categoryId = 0;

            try
            {
                cn = new SqlConnection(connectionString);
                cm = new SqlCommand(categoryQuery, cn);
                cm.Parameters.AddWithValue("@ProductID", productId);

                cn.Open();
                categoryId = (int)cm.ExecuteScalar();
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error retrieving category: {ex.Message}');</script>");
                return;
            }
            finally
            {
                // Close the connection
                cn?.Close();
            }

            // Insert data into CartTable
            string insertQuery = "INSERT INTO CartTable (UserID, ProductID, CategoryID, Quantity, AddedDate) " +
                                 "VALUES (@UserID, @ProductID, @CategoryID, @Quantity, GETDATE())";

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
                // Close the connection
                cn?.Close();
            }
        }

        // JavaScript function for add to cart
        protected void btnAddToCart_Click(object sender, EventArgs e)
        {
            // Get ProductID from the button click and Quantity from input
            int productId = Convert.ToInt32(Request.Form["productId"]);
            int quantity = Convert.ToInt32(Request.Form["quantity"]);

            // Call addToCart method
            addToCart(productId, quantity);
        }

        // Category display functionality
        protected void showCategory(string category)
        {
            hfCategory.Value = category; // Update hidden field
            LoadProducts(category);
        }
    }
}
