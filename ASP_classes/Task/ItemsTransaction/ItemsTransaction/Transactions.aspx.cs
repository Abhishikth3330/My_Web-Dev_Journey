using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ItemsTransaction
{
    public partial class Transactions : System.Web.UI.Page
    {
        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=ProductTestDB;Integrated Security=True;Encrypt=False;");
        SqlCommand cm;
        SqlDataReader dr;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                
            }
        }

        protected void btnFind_Click(object sender, EventArgs e)
        {
            string itemNameValue = itemName.Text.Trim();

            if (string.IsNullOrEmpty(itemNameValue))
            {
                Response.Write("<script>alert('Please enter an item name');</script>");
                return;
            }

            try
            {
                cn.Open();
                
                string query = @"SELECT A.BalanceQuantity FROM Items A INNER JOIN Items B ON A.ID = B.ID WHERE A.ItemName = @ItemName";

                cm = new SqlCommand(query, cn);
                cm.Parameters.AddWithValue("@ItemName", itemNameValue);
                dr = cm.ExecuteReader();

                if (dr.Read())
                {
                    balanceQuantity.Text = dr["BalanceQuantity"].ToString();
                }
                else
                {
                    balanceQuantity.Text = "";
                    Response.Write("<script>alert('Item not found');</script>");
                }
            }
            finally
            {
                dr.Close();
                cn.Close();
            }
        }

        protected void rbPurchase_CheckedChanged(object sender, EventArgs e)
        {
            ddlVendorDepartment.Items.Clear();
            try
            {
                cn.Open();
                cm = new SqlCommand("SELECT Vendor_ID, Name FROM Vendors", cn);
                dr = cm.ExecuteReader();

                ddlVendorDepartment.DataSource = dr;
                ddlVendorDepartment.DataTextField = "Name";
                ddlVendorDepartment.DataValueField = "Vendor_ID";
                ddlVendorDepartment.DataBind();

                ddlVendorDepartment.Items.Insert(0, "Select");
            }
            finally
            {
                dr.Close();
                cn.Close();
            }
        }

        protected void rbIssue_CheckedChanged(object sender, EventArgs e)
        {
            ddlVendorDepartment.Items.Clear();
            try
            {
                cn.Open();
                cm = new SqlCommand("SELECT DepartmentID, Name FROM Departments", cn);
                dr = cm.ExecuteReader();

                ddlVendorDepartment.DataSource = dr;
                ddlVendorDepartment.DataTextField = "Name";
                ddlVendorDepartment.DataValueField = "DepartmentID";
                ddlVendorDepartment.DataBind();

                ddlVendorDepartment.Items.Insert(0, "Select");
            }
            finally
            {
                dr.Close();
                cn.Close();
            }
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            string transactionType = rbPurchase.Checked ? "Purchase" : "Issue";
            string itemNameValue = itemName.Text.Trim();
            int quantityValue = int.Parse(quantity.Text.Trim());
            int selectedId = ddlVendorDepartment.SelectedIndex > 0 ? int.Parse(ddlVendorDepartment.SelectedValue) : 0;

            if (string.IsNullOrEmpty(balanceQuantity.Text))
            {
                Response.Write("<script>alert('Please find the item first');</script>");
                return;
            }

            int balanceQuantityValue = int.Parse(balanceQuantity.Text);

            try
            {
                cn.Open();

                // Check and calculate new balance quantity
                int newBalanceQuantity;
                if (transactionType == "Purchase")
                {
                    newBalanceQuantity = balanceQuantityValue + quantityValue;
                }
                else // Issue
                {
                    newBalanceQuantity = balanceQuantityValue - quantityValue;

                    if (newBalanceQuantity < 0)
                    {
                        Response.Write("<script>alert('Insufficient balance');</script>");
                        return;
                    }
                }

                // Update Items table
                string updateQuery = "UPDATE Items SET BalanceQuantity = @NewBalance WHERE ItemName = @ItemName";
                cm = new SqlCommand(updateQuery, cn);
                cm.Parameters.AddWithValue("@NewBalance", newBalanceQuantity);
                cm.Parameters.AddWithValue("@ItemName", itemNameValue);
                cm.ExecuteNonQuery();

                // Insert into Transactions table
                string insertQuery;
                if (transactionType == "Purchase")
                {
                    insertQuery = "INSERT INTO Transactions (TransactionType, ItemID, Quantity, VendorID, TransactionDate) " +
                                  "SELECT 'Purchase', ID, @Quantity, @VendorOrDeptID, GETDATE() FROM Items WHERE ItemName = @ItemName";
                }
                else // Issue
                {
                    insertQuery = "INSERT INTO Transactions (TransactionType, ItemID, Quantity, DepartmentID, TransactionDate) " +
                                  "SELECT 'Issue', ID, @Quantity, @VendorOrDeptID, GETDATE() FROM Items WHERE ItemName = @ItemName";
                }

                cm = new SqlCommand(insertQuery, cn);
                cm.Parameters.AddWithValue("@VendorOrDeptID", selectedId);
                cm.Parameters.AddWithValue("@Quantity", quantityValue);
                cm.Parameters.AddWithValue("@ItemName", itemNameValue);
                cm.ExecuteNonQuery();

                Response.Write("<script>alert('Transaction completed successfully');</script>");
            }
            finally
            {
                cn.Close();
            }

        }
    }
}