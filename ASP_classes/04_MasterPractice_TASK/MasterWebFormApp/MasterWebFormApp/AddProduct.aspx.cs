﻿using System;
using System.Data.SqlClient;
using System.IO;
using System.Web.UI;

namespace MasterWebFormApp
{
    public partial class AddProduct : Page
    {
        private readonly SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False");

        protected void Page_Load(object sender, EventArgs e)
        {
            // No need to do anything on Page_Load for now.
        }

        protected void btnAddProduct_Click(object sender, EventArgs e)
        {
            if (ddlCategory.SelectedValue == "0")
            {
                ddlCategory.CssClass += " is-invalid";
                return;
            }

            try
            {
                // Open the database connection
                cn.Open();

                // Get the CategoryID based on selected Category
                int categoryId = GetCategoryId(ddlCategory.SelectedItem.Text.Trim());
                if (categoryId == 0)
                {
                    ShowMessage("Invalid category selected.", "danger");
                    return;
                }

                // Save the image and get the file path
                string imagePath = SaveImage();

                // Insert the product into the ProductTable with the image path
                bool isInserted = InsertProduct(txtProductName.Text.Trim(), Convert.ToDecimal(txtPrice.Text.Trim()),
                    Convert.ToInt32(txtQuantity.Text.Trim()), categoryId, imagePath);

                // Show success or failure message
                ShowMessage(isInserted ? "Product added successfully!" : "Failed to add product. Please try again.",
                            isInserted ? "success" : "danger");

                // Clear the form if insertion was successful
                if (isInserted) ClearForm();
            }
            catch (Exception ex)
            {
                ShowMessage($"An error occurred: {ex.Message}", "danger");
            }
            finally
            {
                cn.Close();
            }
        }



        private int GetCategoryId(string categoryName)
        {
            using (var cmd = new SqlCommand("SELECT CategoryID FROM CategoryTable WHERE CategoryName = @CategoryName", cn))
            {
                cmd.Parameters.AddWithValue("@CategoryName", categoryName);
                object result = cmd.ExecuteScalar();
                return result != null ? Convert.ToInt32(result) : 0;
            }
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

        private bool InsertProduct(string productName, decimal price, int quantity, int categoryId, string productImage)
        {
            using (var cmd = new SqlCommand("INSERT INTO ProductTable (ProductName, Price, Quantity, CategoryID, ProductImage) VALUES (@ProductName, @Price, @Quantity, @CategoryID, @ProductImage)", cn))
            {
                cmd.Parameters.AddWithValue("@ProductName", productName);
                cmd.Parameters.AddWithValue("@Price", price);
                cmd.Parameters.AddWithValue("@Quantity", quantity);
                cmd.Parameters.AddWithValue("@CategoryID", categoryId);
                cmd.Parameters.AddWithValue("@ProductImage", productImage); // Save image path in DB

                return cmd.ExecuteNonQuery() > 0; // Return true if product is successfully inserted
            }
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

    }
}