using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

// Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=ProductTestDB;Integrated Security=True;Encrypt=False

namespace ItemsTransaction
{
    public partial class WebForm1 : System.Web.UI.Page
    {

        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=ProductTestDB;Integrated Security=True;Encrypt=False;");
        SqlCommand cm;
        SqlDataReader dr;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                viewData();
            }
        }

        protected void submit_btn_Click(object sender, EventArgs e)
        {
            try
            {
                cm = new SqlCommand("INSERT INTO Items (Category, ItemName, BalanceQuantity, RateOfItem) VALUES (@Category, @ItemName, @BalanceQuantity, @RateOfItem)", cn);
                cm.Parameters.AddWithValue("@Category", ddl_category.SelectedItem.Text);
                cm.Parameters.AddWithValue("@ItemName", product_box.Text);
                cm.Parameters.AddWithValue("@BalanceQuantity", int.Parse(balance_quantity_box.Text));
                cm.Parameters.AddWithValue("@RateOfItem", decimal.Parse(rate_box.Text));
                cn.Open();
                cm.ExecuteNonQuery();
                Response.Write("<script>alert('Item added successfully')</script>");
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('Error: " + ex.Message + "')</script>");
            }
            finally
            {
                cn.Close();
                viewData();
            }
        }

        protected void find_btn_Click(object sender, EventArgs e)
        {
            try
            {
                string itemId = id_box.Text;
                cm = new SqlCommand("SELECT Category, ItemName, BalanceQuantity, RateOfItem FROM Items WHERE ID = @ID", cn);
                cm.Parameters.AddWithValue("@ID", itemId);
                cn.Open();
                dr = cm.ExecuteReader();
                if (dr.HasRows)
                {
                    dr.Read();
                    ddl_category.SelectedValue = ddl_category.Items.FindByText(dr["Category"].ToString())?.Value ?? "0";
                    product_box.Text = dr["ItemName"].ToString();
                    balance_quantity_box.Text = dr["BalanceQuantity"].ToString();
                    rate_box.Text = dr["RateOfItem"].ToString();
                }
                else
                {
                    Response.Write("<script>alert('Item not found')</script>");
                }
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('Error: " + ex.Message + "')</script>");
            }
            finally
            {
                cn.Close();
                viewData();
            }
        }

        protected void update_btn_Click(object sender, EventArgs e)
        {
            try
            {
                string itemId = id_box.Text;
                cm = new SqlCommand("UPDATE Items SET Category = @Category, ItemName = @ItemName, BalanceQuantity = @BalanceQuantity, RateOfItem = @RateOfItem WHERE ID = @ID", cn);
                cm.Parameters.AddWithValue("@Category", ddl_category.SelectedItem.Text);
                cm.Parameters.AddWithValue("@ItemName", product_box.Text);
                cm.Parameters.AddWithValue("@BalanceQuantity", int.Parse(balance_quantity_box.Text));
                cm.Parameters.AddWithValue("@RateOfItem", decimal.Parse(rate_box.Text));
                cm.Parameters.AddWithValue("@ID", itemId);
                cn.Open();
                int rowsAffected = cm.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    Response.Write("<script>alert('Item updated successfully')</script>");
                }
                else
                {
                    Response.Write("<script>alert('Item not found or no changes made')</script>");
                }
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('Error: " + ex.Message + "')</script>");
            }
            finally
            {
                cn.Close();
                viewData();
            }
        }

        protected void delete_btn_Click(object sender, EventArgs e)
        {
            try
            {
                string itemId = id_box.Text;
                cm = new SqlCommand("DELETE FROM Items WHERE ID = @ID", cn);
                cm.Parameters.AddWithValue("@ID", itemId);
                cn.Open();
                int rowsAffected = cm.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    Response.Write("<script>alert('Item deleted successfully')</script>");
                }
                else
                {
                    Response.Write("<script>alert('Item not found')</script>");
                }
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('Error: " + ex.Message + "')</script>");
            }
            finally
            {
                cn.Close();
                viewData();
            }
        }


        protected void viewData()
        {
            try
            {
                cm = new SqlCommand("SELECT ID, Category, ItemName, BalanceQuantity, RateOfItem FROM Items", cn);
                cn.Open();
                dr = cm.ExecuteReader();
                productRepeater.DataSource = dr;
                productRepeater.DataBind();
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('Error: " + ex.Message + "')</script>");
            }
            finally
            {
                dr.Close();
                cn.Close();
            }
        }
    }
}