using System;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MasterWebFormApp
{
    public partial class Cart : System.Web.UI.Page
    {
        private readonly string connectionString = @"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string userEmail = "abhishikththul9@gmail.com";  // Replace with actual user email from session or login.
                string userPassword = "Abhi@123";  // Replace with actual password from login.

                // Get UserID from Email and Password
                int userId = GetUserId(userEmail, userPassword);

                if (userId > 0)
                {
                    // Load Cart Items for the user
                    LoadCartData(userId);
                    // Load User Info
                    LoadUserDetails(userId);

                    // Display Subtotal
                    if (ViewState["Subtotal"] != null)
                    {
                        lblSubtotal.Text = "$" + Convert.ToDecimal(ViewState["Subtotal"]).ToString("F2");
                    }
                }
                else
                {
                    Response.Write("<script>alert('User not found.');</script>");
                }
            }
        }

        // Method to get UserID from Email and Password
        private int GetUserId(string email, string password)
        {
            string query = "SELECT UserID FROM UserTable WHERE Email = @Email AND Password = @Password";
            try
            {
                using (SqlConnection cn = new SqlConnection(connectionString))
                using (SqlCommand cm = new SqlCommand(query, cn))
                {
                    cm.Parameters.AddWithValue("@Email", email);
                    cm.Parameters.AddWithValue("@Password", password);

                    cn.Open();
                    object result = cm.ExecuteScalar();
                    if (result != null)
                    {
                        return Convert.ToInt32(result);
                    }
                    else
                    {
                        return -1;  // User not found
                    }
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error retrieving user: {ex.Message}');</script>");
                return -1;
            }
        }

        // Method to load cart items for the user
        private void LoadCartData(int userId)
        {
            string query = @"SELECT c.CartID, p.ProductName, p.Price, c.Quantity, (p.Price * c.Quantity) AS Total, p.ProductImage
                     FROM CartTable c
                     INNER JOIN ProductTable p ON c.ProductID = p.ProductID
                     WHERE c.UserID = @UserID";

            try
            {
                using (SqlConnection cn = new SqlConnection(connectionString))
                using (SqlCommand cm = new SqlCommand(query, cn))
                {
                    cm.Parameters.AddWithValue("@UserID", userId);

                    cn.Open();
                    SqlDataReader dr = cm.ExecuteReader();
                    DataTable dt = new DataTable();
                    dt.Load(dr);

                    // Bind data to repeater
                    rptCart.DataSource = dt;
                    rptCart.DataBind();

                    // Calculate subtotal
                    decimal subtotal = 0;
                    foreach (DataRow row in dt.Rows)
                    {
                        subtotal += Convert.ToDecimal(row["Total"]);
                    }

                    // Update subtotal label
                    lblSubtotal.Text = "$" + subtotal.ToString("0.00");
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error loading cart items: {ex.Message}');</script>");
            }
        }



        // Method to load user details
        private void LoadUserDetails(int userId)
        {
            string query = "SELECT Name, Email, Address FROM UserTable WHERE UserID = @UserID";
            try
            {
                using (SqlConnection cn = new SqlConnection(connectionString))
                using (SqlCommand cm = new SqlCommand(query, cn))
                {
                    cm.Parameters.AddWithValue("@UserID", userId);

                    cn.Open();
                    SqlDataReader dr = cm.ExecuteReader();
                    if (dr.Read())
                    {
                        // Set the values to the textboxes and textarea
                        txtUserName.Text = dr["Name"].ToString();
                        txtUserEmail.Text = dr["Email"].ToString();
                        txtUserAddress.Text = dr["Address"].ToString();
                    }
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error loading user details: {ex.Message}');</script>");
            }
        }

        // Method to handle the removal of an item from the cart
        protected void RemoveButton_Click(object sender, EventArgs e)
        {
            Button btnRemove = (Button)sender;
            int cartItemId = Convert.ToInt32(btnRemove.CommandArgument);

            string query = "DELETE FROM CartTable WHERE CartID = @CartID";
            try
            {
                using (SqlConnection cn = new SqlConnection(connectionString))
                using (SqlCommand cm = new SqlCommand(query, cn))
                {
                    cm.Parameters.AddWithValue("@CartID", cartItemId);

                    cn.Open();
                    cm.ExecuteNonQuery();

                    // Reload the cart items after deletion
                    string userEmail = "user@example.com";  // Replace with actual user email
                    int userId = GetUserId(userEmail, "password");  // Replace with actual password
                    LoadCartData(userId);
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error removing item from cart: {ex.Message}');</script>");
            }
        }

        // Method to handle quantity change
        protected void Quantity_TextChanged(object sender, EventArgs e)
        {
            TextBox txtQuantity = (TextBox)sender;
            RepeaterItem item = (RepeaterItem)txtQuantity.NamingContainer;
            HiddenField hfCartItemID = (HiddenField)item.FindControl("hfCartItemID");

            int quantity = Convert.ToInt32(txtQuantity.Text);
            int cartItemId = Convert.ToInt32(hfCartItemID.Value);

            string query = "UPDATE CartTable SET Quantity = @Quantity WHERE CartID = @CartID";
            try
            {
                using (SqlConnection cn = new SqlConnection(connectionString))
                using (SqlCommand cm = new SqlCommand(query, cn))
                {
                    cm.Parameters.AddWithValue("@Quantity", quantity);
                    cm.Parameters.AddWithValue("@CartID", cartItemId);

                    cn.Open();
                    cm.ExecuteNonQuery();

                    // Reload cart items and update subtotal
                    string userEmail = "user@example.com";  // Replace with actual user email
                    int userId = GetUserId(userEmail, "password");  // Replace with actual password
                    LoadCartData(userId);
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error updating quantity: {ex.Message}');</script>");
            }
        }


        // Method to handle increasing the quantity of an item
        protected void IncreaseButton_Click(object sender, EventArgs e)
        {
            Button btnIncrease = (Button)sender;
            RepeaterItem item = (RepeaterItem)btnIncrease.NamingContainer;
            HiddenField hfCartItemID = (HiddenField)item.FindControl("hfCartItemID");

            int cartItemId = Convert.ToInt32(hfCartItemID.Value);

            string query = "UPDATE CartTable SET Quantity = Quantity + 1 WHERE CartID = @CartID";
            try
            {
                using (SqlConnection cn = new SqlConnection(connectionString))
                using (SqlCommand cm = new SqlCommand(query, cn))
                {
                    cm.Parameters.AddWithValue("@CartID", cartItemId);

                    cn.Open();
                    cm.ExecuteNonQuery();

                    // Reload cart items and update subtotal
                    string userEmail = "abhishikththul9@gmail.com";  // Replace with actual user email
                    int userId = GetUserId(userEmail, "Abhi@123");  // Replace with actual password
                    LoadCartData(userId);
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error increasing quantity: {ex.Message}');</script>");
            }
        }

        // Method to handle decreasing the quantity of an item
        protected void DecreaseButton_Click(object sender, EventArgs e)
        {
            Button btnDecrease = (Button)sender;
            RepeaterItem item = (RepeaterItem)btnDecrease.NamingContainer;
            HiddenField hfCartItemID = (HiddenField)item.FindControl("hfCartItemID");

            int cartItemId = Convert.ToInt32(hfCartItemID.Value);

            string query = @"UPDATE CartTable
                     SET Quantity = CASE 
                                    WHEN Quantity > 1 THEN Quantity - 1 
                                    ELSE Quantity 
                                    END
                     WHERE CartID = @CartID";

            try
            {
                using (SqlConnection cn = new SqlConnection(connectionString))
                using (SqlCommand cm = new SqlCommand(query, cn))
                {
                    cm.Parameters.AddWithValue("@CartID", cartItemId);

                    cn.Open();
                    cm.ExecuteNonQuery();

                    // Reload cart items and update subtotal
                    string userEmail = "abhishikththul9@gmail.com";  // Replace with actual user email
                    int userId = GetUserId(userEmail, "Abhi@123");  // Replace with actual password
                    LoadCartData(userId);
                }
            }
            catch (Exception ex)
            {
                Response.Write($"<script>alert('Error decreasing quantity: {ex.Message}');</script>");
            }
        }


    }
}
