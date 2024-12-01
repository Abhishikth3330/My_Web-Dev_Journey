using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Project_Category
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=ProductCategoryDB;Integrated Security=True;");
        SqlCommand cm;
        SqlDataReader dr;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack) 
            { 
                
            }
        }
        protected void SubmitButton_Click(object sender, EventArgs e) 
        {
            cm = new SqlCommand("insert into ProductCategory (Category) values (@Category)", cn);
            cm.Parameters.AddWithValue("@Category", category_dropdown.SelectedItem.Text);

            cn.Open();
            cm.ExecuteNonQuery();
            Response.Write("<script>alert('Category Selected');</script>");
        }
    }
}