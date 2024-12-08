using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ItemsTransaction
{
    public partial class WebForm3 : System.Web.UI.Page
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
        protected void add_btn_Click(object sender, EventArgs e)
        {
            try
            {
                string itemName = item_name_box.Text;
                cm = new SqlCommand(@"INSERT INTO Departments (Name, Email, MobileNumber, ItemID) 
                                      VALUES (@Name, @Email, @MobileNumber, 
                                      (SELECT ID FROM Items WHERE ItemName = @ItemName))", cn);
                cm.Parameters.AddWithValue("@Name", department_name_box.Text);
                cm.Parameters.AddWithValue("@Email", email_box.Text);
                cm.Parameters.AddWithValue("@MobileNumber", mobile_number_box.Text);
                cm.Parameters.AddWithValue("@ItemName", itemName);
                cn.Open();
                cm.ExecuteNonQuery();
                Response.Write("<script>alert('Department added successfully')</script>");
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
                cm = new SqlCommand(@"UPDATE Departments 
                                      SET Name = @Name, Email = @Email, MobileNumber = @MobileNumber, 
                                          ItemID = (SELECT ID FROM Items WHERE ItemName = @ItemName), 
                                          ModificationDate = GETDATE() 
                                      WHERE DepartmentID = @DepartmentID", cn);
                cm.Parameters.AddWithValue("@Name", department_name_box.Text);
                cm.Parameters.AddWithValue("@Email", email_box.Text);
                cm.Parameters.AddWithValue("@MobileNumber", mobile_number_box.Text);
                cm.Parameters.AddWithValue("@ItemName", item_name_box.Text);
                cm.Parameters.AddWithValue("@DepartmentID", department_id_box.Text);
                cn.Open();
                cm.ExecuteNonQuery();
                Response.Write("<script>alert('Department updated successfully')</script>");
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
                cm = new SqlCommand("DELETE FROM Departments WHERE DepartmentID = @DepartmentID", cn);
                cm.Parameters.AddWithValue("@DepartmentID", department_id_box.Text);
                cn.Open();
                cm.ExecuteNonQuery();
                Response.Write("<script>alert('Department deleted successfully')</script>");
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
                cm = new SqlCommand(@"SELECT Departments.Name, Departments.Email, Departments.MobileNumber, Items.ItemName, 
                                      Departments.RegistrationDate, Departments.ModificationDate 
                                      FROM Departments 
                                      JOIN Items ON Departments.ItemID = Items.ID 
                                      WHERE Departments.DepartmentID = @DepartmentID", cn);
                cm.Parameters.AddWithValue("@DepartmentID", department_id_box.Text);
                cn.Open();
                dr = cm.ExecuteReader();
                if (dr.HasRows)
                {
                    dr.Read();
                    department_name_box.Text = dr["Name"].ToString();
                    email_box.Text = dr["Email"].ToString();
                    mobile_number_box.Text = dr["MobileNumber"].ToString();
                    item_name_box.Text = dr["ItemName"].ToString();
                }
                else
                {
                    Response.Write("<script>alert('Department not found')</script>");
                }
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('Error: " + ex.Message + "')</script>");
            }
            finally
            {
                dr.Close();
                cn.Close();
                viewData();
            }
        }

        protected void viewData()
        {
            try
            {
                cm = new SqlCommand(@"SELECT Departments.DepartmentID, Departments.Name, Departments.Email, Departments.MobileNumber, 
                                      Items.ItemName, Items.ID 
                                      FROM Departments 
                                      JOIN Items ON Departments.ItemID = Items.ID", cn);
                cn.Open();
                dr = cm.ExecuteReader();
                departmentRepeater.DataSource = dr;
                departmentRepeater.DataBind();
            }
            finally
            {
                if (dr != null && !dr.IsClosed) dr.Close();
                cn.Close();
            }
        }
    }
}