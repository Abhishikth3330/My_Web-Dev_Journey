using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MasterWebFormApp
{
    public partial class Contact : System.Web.UI.Page
    {

        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False");
        SqlCommand cm;
        SqlDataReader dr;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {

            }
        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            try
            {
                // Perform validation
                if (!Page.IsValid)
                {
                    return; // If validation fails, don't proceed further
                }

                // Declare strings for form input values
                string fullName = txtName.Text.Trim();
                string email = txtEmail.Text.Trim();
                string password = txtPassword.Text.Trim();
                string mobileNumber = txtMobile.Text.Trim();
                string state = ddlState.SelectedValue;
                string city = txtCity.Text.Trim();
                string pincode = txtPincode.Text.Trim();
                string country = ddlCountry.SelectedValue;
                string address = txtAddress.Text.Trim();

                // Create and configure SqlCommand
                cm = new SqlCommand(@"INSERT INTO UserTable (Name, Email, Password, MobileNumber, State, City, Pincode, Country, Address, RegistrationDate) 
                              VALUES (@Name, @Email, @Password, @MobileNumber, @State, @City, @Pincode, @Country, @Address, @RegistrationDate)", cn);

                // Pass the values from the variables to the SQL command parameters
                cm.Parameters.AddWithValue("@Name", fullName);
                cm.Parameters.AddWithValue("@Email", email);
                cm.Parameters.AddWithValue("@Password", password);  // No hashing
                cm.Parameters.AddWithValue("@MobileNumber", mobileNumber);
                cm.Parameters.AddWithValue("@State", state);
                cm.Parameters.AddWithValue("@City", city);
                cm.Parameters.AddWithValue("@Pincode", pincode);
                cm.Parameters.AddWithValue("@Country", country);
                cm.Parameters.AddWithValue("@Address", address);

                // Set the RegistrationDate to the current date
                cm.Parameters.AddWithValue("@RegistrationDate", DateTime.Now);

                // Open connection, execute query, and handle the result
                cn.Open();
                int rowsAffected = cm.ExecuteNonQuery();

                if (rowsAffected > 0)
                {
                    // Registration successful
                    Response.Write("<script>alert('Registration successful!');</script>");
                }
                else
                {
                    // Registration failed
                    Response.Write("<script>alert('Registration failed. Please try again.');</script>");
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions
                Response.Write($"<script>alert('An error occurred: {ex.Message}');</script>");
            }
            finally
            {
                // Ensure the connection is closed
                if (cn.State == System.Data.ConnectionState.Open)
                {
                    cn.Close();
                }
            }
        }

    }
}
