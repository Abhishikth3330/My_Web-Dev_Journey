using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Web.UI;
using static System.Net.Mime.MediaTypeNames;
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
            // No need to do anything on Page_Load for now.
            GetCategoryId();
        }


        protected void GetCategoryId()
        {
            SqlCommand cm = new SqlCommand("SELECT CategoryID, CategoryName FROM CategoryTable", cn);
            
            cn.Open();
            dr = cm.ExecuteReader();
            ddlCategory.DataSource = dr;
            ddlCategory.DataValueField = "CategoryID";
            ddlCategory.DataTextField = "CategoryName";
            ddlCategory.DataBind();
            //ddlCategory.Items.Insert(0, "Select");
            cn.Close();
            dr.Close();
        }



        private string SaveImage()
        {
            if (!fuProductImage.HasFile)
                throw new Exception("Product image is required.");

            string folderPath = Server.MapPath("~/addedImages/");
            if (!Directory.Exists(folderPath))
                Directory.CreateDirectory(folderPath);

            // Generate a unique file name using timestamp and original file name
            string fileName = DateTime.Now.ToString("yyyyMMdd_HHmmss") + "_" + fuProductImage.FileName;
            string filePath = Path.Combine(folderPath, fileName);

            // Save the file to the server
            fuProductImage.SaveAs(filePath);

            return "~/addedImages/" + fileName;  // Return relative path to store in DB
        }

        
        private void ShowMessage(string message, string alertType)
        {
            ClientScript.RegisterStartupScript(this.GetType(), "Alert", $"alert('{message}');", true);
        }

        

        private void ClearForm()
        {
            txtProductName.Text = string.Empty;
            txtPrice.Text = string.Empty;
            txtQuantity.Text = string.Empty;
            ddlCategory.SelectedIndex = 0;
            fuProductImage.Dispose();
        }


        protected void btnAddProduct_Click1(object sender, EventArgs e)
        {
            if (ddlCategory.SelectedValue == "0")
            {
                ShowMessage("Please select a valid category.", "danger");
                return;
            }

            try
            {
                cn.Open();

                // Call the SaveImage function to get the image path
                string imagePath = SaveImage();

                // Prepare the SQL command for inserting the product
                cm = new SqlCommand(
                    "INSERT INTO ProductTable (ProductName, Price, Quantity, CategoryID, ProductImage, RegistrationDate) " +
                    "VALUES (@ProductName, @Price, @Quantity, @CategoryID, @ProductImage, @RegistrationDate)", cn);

                // Add parameters to the command
                cm.Parameters.AddWithValue("@ProductName", txtProductName.Text.Trim()); // Keep Trim for user-entered text
                cm.Parameters.AddWithValue("@Price", Convert.ToDecimal(txtPrice.Text)); // Numeric conversion handles spaces
                cm.Parameters.AddWithValue("@Quantity", Convert.ToInt32(txtQuantity.Text)); // Numeric conversion handles spaces
                cm.Parameters.AddWithValue("@CategoryID", Convert.ToInt32(ddlCategory.SelectedValue)); // Dropdown value doesn't need Trim
                cm.Parameters.AddWithValue("@ProductImage", imagePath); // Predefined value doesn't need Trim
                cm.Parameters.AddWithValue("@RegistrationDate", DateTime.Now); // Date doesn't need Trim


                // Execute the query and check if the insertion was successful
                int rowsAffected = cm.ExecuteNonQuery();
                bool isInserted = rowsAffected > 0;

                // Show success or failure message
                ShowMessage(isInserted ? "Product added successfully!" : "Failed to add product. Please try again.",
                            isInserted ? "success" : "danger");

                // Clear the form if insertion was successful
                if (isInserted) ClearForm();
            }
            catch (Exception ex)
            {
                // Show error message if an exception occurs
                ShowMessage($"An error occurred: {ex.Message}", "danger");
            }
            finally
            {
                // Ensure the connection is closed
                cn.Close();
            }
        }

    }
}
