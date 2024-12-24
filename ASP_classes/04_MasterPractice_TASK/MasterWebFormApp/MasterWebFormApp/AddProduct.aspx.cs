using System;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MasterWebFormApp
{
    public partial class AddProduct : Page
    {
        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False");
        SqlCommand cm;
        SqlDataReader dr;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Bind categories to the DropDownList
                BindCategories();
            }
        }

        private void BindCategories()
        {
            try
            {
                // Query to fetch categories from the Category table
                SqlCommand cmd = new SqlCommand("SELECT CategoryID, CategoryName FROM Category", cn);

                // Open the connection
                cn.Open();

                // Execute the query and read the results
                SqlDataReader reader = cmd.ExecuteReader();

                // Clear any existing items in the DropDownList
                ddlCategory.Items.Clear();
                ddlCategory.Items.Add(new ListItem("Select Category", "0")); // Default item

                // Loop through the data reader and add items to the DropDownList
                while (reader.Read())
                {
                    // Add each category as an option in the DropDownList
                    ddlCategory.Items.Add(new ListItem(reader["CategoryName"].ToString(), reader["CategoryID"].ToString()));
                }

                // Close the reader
                reader.Close();
            }
            catch (Exception ex)
            {
                // Log or display the error message
                Response.Write("<script>alert('Error: " + ex.Message + "');</script>");
            }
            finally
            {
                // Ensure the connection is closed, even if an error occurs
                if (cn.State == System.Data.ConnectionState.Open)
                {
                    cn.Close();
                }
            }
        }


        protected void btnAddProduct_Click(object sender, EventArgs e)
        {
            // Validate form inputs
            if (Page.IsValid)
            {
                // Retrieve form data
                string productName = txtProductName.Text;
                decimal price = decimal.Parse(txtPrice.Text);
                int quantity = int.Parse(txtQuantity.Text);
                string productImage = string.Empty;

                // Handle image upload
                if (fuProductImage.HasFile)
                {
                    // Set the product image path
                    productImage = "~/ProductImages/" + fuProductImage.FileName;
                    // Save the uploaded file to the server
                    fuProductImage.SaveAs(Server.MapPath(productImage));
                }

                int categoryID = int.Parse(ddlCategory.SelectedValue); // Get the selected CategoryID

                // Insert data into ProductTable
                SqlCommand cm = new SqlCommand("INSERT INTO ProductTable (ProductName, Price, Quantity, ProductImage, CategoryID) VALUES (@ProductName, @Price, @Quantity, @ProductImage, @CategoryID)", cn);
                cm.Parameters.AddWithValue("@ProductName", productName);
                cm.Parameters.AddWithValue("@Price", price);
                cm.Parameters.AddWithValue("@Quantity", quantity);
                cm.Parameters.AddWithValue("@ProductImage", productImage);
                cm.Parameters.AddWithValue("@CategoryID", categoryID);

                cn.Open();
                cm.ExecuteNonQuery();
                cn.Close();

                // Clear the form after insertion
                txtProductName.Text = "";
                txtPrice.Text = "";
                txtQuantity.Text = "";
                fuProductImage.Attributes.Clear();
                ddlCategory.SelectedIndex = 0;

                // Optionally show a success message
                Response.Write("<script>alert('Product added successfully!');</script>");
            }
        }
    }
}
