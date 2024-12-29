using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

namespace MasterWebFormApp
{
    public partial class Products1 : Page
    {
        // Connection string
        private readonly string connectionString = @"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Default category to load
                LoadProducts("Mens");
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

            // Adjust query based on category
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

            using (SqlConnection cn = new SqlConnection(connectionString))
            using (SqlCommand cm = new SqlCommand(query, cn))
            {
                if (category != "All")
                {
                    cm.Parameters.AddWithValue("@Category", category);
                }

                try
                {
                    cn.Open();
                    SqlDataReader dr = cm.ExecuteReader();

                    DataTable dt = new DataTable();
                    dt.Load(dr);

                    rptProducts.DataSource = dt;
                    rptProducts.DataBind();
                }
                catch (Exception ex)
                {
                    // Log error or display meaningful feedback
                    Response.Write($"<script>alert('Error loading products: {ex.Message}');</script>");
                }
            }
        }


        protected void btnLogin_Click(object sender, EventArgs e)
        {
            string email = txtEmail.Text;
            string password = txtPassword.Text;

            string query = "SELECT COUNT(*) FROM Users WHERE Email = @Email AND Password = @Password";

            using (SqlConnection cn = new SqlConnection(connectionString))
            using (SqlCommand cm = new SqlCommand(query, cn))
            {
                cm.Parameters.AddWithValue("@Email", email);
                cm.Parameters.AddWithValue("@Password", password); // Consider hashing and validating password

                try
                {
                    cn.Open();
                    int count = (int)cm.ExecuteScalar();

                    if (count > 0)
                    {
                        // Redirect to another page after successful login
                        Response.Redirect("Dashboard.aspx");
                    }
                    else
                    {
                        Response.Write("<script>alert('Invalid email or password!');</script>");
                    }
                }
                catch (Exception ex)
                {
                    Response.Write($"<script>alert('Error during login: {ex.Message}');</script>");
                }
            }
        }

        protected void showCategory(string category)
        {
            hfCategory.Value = category; // Update hidden field
            LoadProducts(category);
        }
    }
}
