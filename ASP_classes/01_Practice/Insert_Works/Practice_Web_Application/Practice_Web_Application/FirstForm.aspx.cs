using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

namespace Practice_Web_Application
{
    public partial class FirstForm : System.Web.UI.Page
    {
        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=RegistrationDB;Integrated Security=True;"); // sql connection
        SqlCommand cm; // insert, update, delete
        SqlDataReader dr; // select
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack) {
            
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            cm = new SqlCommand("INSERT INTO RegistrationTable (Name, Email, MobileNumber, Password, RegistrationDate) VALUES (@Name, @Email, @MobileNumber, @Password, @RegistrationDate)", cn);
            cm.Parameters.AddWithValue("@Name", name_box.Text);
            cm.Parameters.AddWithValue("@Email", email_box.Text);
            cm.Parameters.AddWithValue("@MobileNumber", mobile_box.Text);
            cm.Parameters.AddWithValue("@Password", password_box.Text);
            cm.Parameters.AddWithValue("@RegistrationDate", registration_date_box.Text);

            cn.Open();
            cm.ExecuteNonQuery();
            Response.Write("Success");
        }
    }
}