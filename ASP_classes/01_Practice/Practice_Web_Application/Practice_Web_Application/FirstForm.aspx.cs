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

        // insert query
        protected void Button1_Click(object sender, EventArgs e)
        {
            cm = new SqlCommand("INSERT INTO RegistrationTable (Name, Email, MobileNumber, Password, RegistrationDate, State, City, Address, Pincode) VALUES (@Name, @Email, @MobileNumber, @Password, @RegistrationDate, @State, @City, @Address, @Pincode)", cn);
            cm.Parameters.AddWithValue("@Name", name_box.Text);
            cm.Parameters.AddWithValue("@Email", email_box.Text);
            cm.Parameters.AddWithValue("@MobileNumber", mobile_box.Text);
            cm.Parameters.AddWithValue("@Password", password_box.Text);
            cm.Parameters.AddWithValue("@RegistrationDate", registration_date_box.Text);
            cm.Parameters.AddWithValue("@State", state_box.Text);
            cm.Parameters.AddWithValue("@City", city_box.Text);
            cm.Parameters.AddWithValue("@Address", address_box.Text);
            cm.Parameters.AddWithValue("@Pincode", pincode_box.Text);

            cn.Open();
            cm.ExecuteNonQuery();
            Response.Write("<script>alert('Successfully Registered');</script>");
        }


        // select query
        protected void FindDetailsButton_Click(object sender, EventArgs e)
        {
            cm = new SqlCommand("select * from RegistrationTable where ID = @ID", cn);
            cm.Parameters.AddWithValue("@ID", id_box.Text);
            cn.Open();
            dr = cm.ExecuteReader();
            if (dr.Read())
            {
                name_box.Text = dr["Name"].ToString();
                email_box.Text = dr["Email"].ToString();
                mobile_box.Text = dr["MobileNumber"].ToString();
                password_box.Text = dr["Password"].ToString();
                registration_date_box.Text = dr["RegistrationDate"].ToString();
                state_box.Text = dr["State"].ToString();
                city_box.Text = dr["City"].ToString();
                address_box.Text = dr["Address"].ToString();
                pincode_box.Text = dr["Pincode"].ToString();
            }
            else
            {
                Response.Write("<script>alert('Record not found');</script>");
            }
            dr.Close();
        }

        // update query
        protected void Update_Click(object sender, EventArgs e)
        {
            cm = new SqlCommand("UPDATE RegistrationTable SET Name = @Name, Email = @Email, MobileNumber = @MobileNumber, Password = @Password, RegistrationDate = @RegistrationDate, State = @State, City = @City, Address = @Address, Pincode = @Pincode WHERE ID = @ID", cn);

            cm.Parameters.AddWithValue("@ID", id_box.Text);
            cm.Parameters.AddWithValue("@Name", name_box.Text);
            cm.Parameters.AddWithValue("@Email", email_box.Text);
            cm.Parameters.AddWithValue("@MobileNumber", mobile_box.Text);
            cm.Parameters.AddWithValue("@Password", password_box.Text);
            cm.Parameters.AddWithValue("@RegistrationDate", registration_date_box.Text);
            cm.Parameters.AddWithValue("@State", state_box.Text);
            cm.Parameters.AddWithValue("@City", city_box.Text);
            cm.Parameters.AddWithValue("@Address", address_box.Text);
            cm.Parameters.AddWithValue("@Pincode", pincode_box.Text);

            cn.Open();
            if (cm.ExecuteNonQuery() > 0)
            {
                Response.Write("<script>alert('Record updated successfully');</script>");
            }
            else {
                Response.Write("<script>alert('No record found with the given ID');</script>");
            }
            cn.Close();
            clear();
        }

        protected void Delete_Click(object sender, EventArgs e)
        {
            cm = new SqlCommand("Delete from RegistrationTable Where Id = @ID", cn);
            cm.Parameters.AddWithValue("@ID", id_box.Text);

            cn.Open();
            cm.ExecuteNonQuery();

            Response.Write("<script>alert('Record deleted successfully');</script>");

            id_box.Text = string.Empty;
            name_box.Text = string.Empty;
            email_box.Text = string.Empty;
            mobile_box.Text = string.Empty;
            password_box.Text = string.Empty;
            state_box.Text = string.Empty;
            city_box.Text = string.Empty;
            address_box.Text = string.Empty;
            pincode_box.Text = string.Empty;
            registration_date_box.Text = string.Empty;
            cn.Close();

        }

        protected void clear() {
            id_box.Text = "";
            name_box.Text = "";
            email_box.Text = "";
            mobile_box.Text = "";
            password_box.Text = "";
            registration_date_box.Text = "";
            state_box.Text = "";
            city_box.Text = "";
            address_box.Text = "";
            pincode_box.Text = "";
        }        
    }
}