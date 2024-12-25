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
        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False");
        SqlCommand cm;
        SqlDataReader dr;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Load products for the default category (e.g., Mens)
                LoadProducts("Mens");
            }
        }

        // Method to load products based on the selected category
        private void LoadProducts(string category)
        {
            string query = "SELECT p.ProductID, p.ProductName, p.Price, p.ProductImage FROM ProductTable p INNER JOIN CategoryTable c ON p.CategoryID = c.CategoryID WHERE c.CategoryName = @Category";

            cm = new SqlCommand(query, cn);
            cm.Parameters.AddWithValue("@Category", category);

            try
            {
                cn.Open();
                dr = cm.ExecuteReader();

                // Use a DataTable to hold the results
                DataTable dt = new DataTable();
                dt.Load(dr);

                // Set the Repeater's data source to the DataTable
                rptProducts.DataSource = dt;
                rptProducts.DataBind();
            }
            catch (Exception ex)
            {
                // Handle exceptions (for example, display error message)
                Response.Write("<script>alert('Error loading products: " + ex.Message + "');</script>");
            }
            finally
            {
                // Ensure the connection is always closed
                cn.Close();
            }
        }


        // Login button click event handler
        protected void btnLogin_Click(object sender, EventArgs e)
        {
            // Retrieve email and password from the textboxes
            string email = txtEmail.Text;
            string password = txtPassword.Text;

            // Create the SQL connection
            SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False");
            SqlCommand cm;

            // SQL query to check if the email and password match in the Users table
            string query = "SELECT COUNT(*) FROM Users WHERE Email = @Email AND Password = @Password";

            // Create SqlCommand with query and connection
            cm = new SqlCommand(query, cn);
            cm.Parameters.AddWithValue("@Email", email);
            cm.Parameters.AddWithValue("@Password", password);

            try
            {
                // Open connection to the database
                cn.Open();

                // Execute the query and get the count of matching records
                int count = (int)cm.ExecuteScalar();

                // If count is greater than 0, user is validated
                if (count > 0)
                {
                    Response.Write("<script>alert('Login successful!');</script>");
                }
                else
                {
                    Response.Write("<script>alert('Invalid email or password!');</script>");
                }
            }
            catch (Exception ex)
            {
                // Handle any exceptions that occur during the database operation
                Response.Write("<script>alert('Error validating user: " + ex.Message + "');</script>");
            }
            finally
            {
                // Ensure the database connection is always closed
                cn.Close();
            }
        }


        // Method to handle category selection (for example: Mens or Womens)
        protected void showCategory(string category)
        {
            LoadProducts(category);
        }
    }
}
