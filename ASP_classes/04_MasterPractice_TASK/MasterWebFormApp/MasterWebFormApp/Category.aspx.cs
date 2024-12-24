using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MasterWebFormApp
{
    public partial class Category : System.Web.UI.Page
    {
        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=Ecommerce;Integrated Security=True;Encrypt=False");
        SqlCommand cm;
        SqlDataReader dr;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                CategoryRepeater();
            }
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (ddlCategory.SelectedValue == "")
            {
                ddlCategory.Text = "Please select a category.";
                ddlCategory.CssClass = "text-danger";
                return;
            }

            try
            {
                cn.Open();

                cm = new SqlCommand(@"INSERT INTO CategoryTable (CategoryName, RegistrationDate) VALUES (@CategoryName, @RegistrationDate)", cn);
                cm.Parameters.AddWithValue("@CategoryName", ddlCategory.SelectedValue);
                cm.Parameters.AddWithValue("@RegistrationDate", DateTime.Now);

                int rowsAffected = cm.ExecuteNonQuery();

                if (rowsAffected > 0)
                {
                    ddlCategory.Text = "Category added successfully.";
                    ddlCategory.CssClass = "text-success";
                }
                else
                {
                    ddlCategory.Text = "Failed to add category.";
                    ddlCategory.CssClass = "text-danger";
                }
            }
            catch (Exception ex)
            {
                ddlCategory.Text = "An error occurred: " + ex.Message;
                ddlCategory.CssClass = "text-danger";
            }
            finally
            {
                if (cn.State == System.Data.ConnectionState.Open)
                {
                    cn.Close();
                }
            }
            ddlCategory.SelectedIndex = 0;
        }

        private void CategoryRepeater()
        {
            try
            {
                cn.Open();

                cm = new SqlCommand(@"SELECT CategoryID, CategoryName, RegistrationDate FROM CategoryTable", cn);
                dr = cm.ExecuteReader();

                DataTable dt = new DataTable();
                dt.Load(dr);
                rptCategory.DataSource = dt;
                rptCategory.DataBind();
            }
            catch (Exception ex)
            {
                ddlCategory.Text = "An error occurred while loading categories: " + ex.Message;
                ddlCategory.CssClass = "text-danger";
            }
            finally
            {
                if (dr != null && !dr.IsClosed)
                {
                    dr.Close();
                }
                if (cn.State == System.Data.ConnectionState.Open)
                {
                    cn.Close();
                }
            }
        }

    }
}