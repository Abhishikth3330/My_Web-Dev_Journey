﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace NEW_Form
{
    public partial class test_form : System.Web.UI.Page
    {

        SqlConnection cn = new SqlConnection(@"Data Source=DESKTOP-EF5D6IS\SQLEXPRESS;Initial Catalog=ProductManagement;Integrated Security=True;");
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
                cm = new SqlCommand("insert into ProductDetails(Category, Product) VALUES (@Category, @Product)", cn);
                cm.Parameters.AddWithValue("@Category", ddl_category.SelectedItem.Text);
                cm.Parameters.AddWithValue("@Product", product_box.Text);
                cn.Open();
                cm.ExecuteNonQuery();
                Response.Write("<script>alert('Success')</script>");
   
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
            }
            finally
            {
                cn.Close();
                viewData();
            }
        }


        // update button
        protected void update_btn_Click(object sender, EventArgs e)
        {
            try
            {
                string productId = id_box.Text;
                cm = new SqlCommand("UPDATE ProductDetails SET Category = @Category, Product = @Product WHERE Id = @Id", cn);
                cm.Parameters.AddWithValue("@Category", ddl_category.SelectedItem.Text);
                cm.Parameters.AddWithValue("@Product", product_box.Text);
                cm.Parameters.AddWithValue("@Id", productId);
                cn.Open();
                int rowsAffected = cm.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    Response.Write("<script>alert('Product updated successfully')</script>");
                }
                else
                {
                    Response.Write("<script>alert('Product not found or no changes made')</script>");
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


        // delete button
        protected void delete_btn_Click(object sender, EventArgs e)
        {
            try
            {
                string productID = id_box.Text;
                cm = new SqlCommand("delete from ProductDetails where Id = @Id", cn);
                cm.Parameters.AddWithValue("@Id", productID);
                cn.Open();
                int rowsAffected = cm.ExecuteNonQuery();
                if (rowsAffected > 0)
                    if (rowsAffected > 0)
                    {
                        Response.Write("<script>alert('Product deleted successfully')</script>");
                    }
                    else
                    {
                        Response.Write("<script>alert('Product not found')</script>");
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


        // find button
        protected void find_btn_Click(object sender, EventArgs e)
        {
            try
            {
                string productID = id_box.Text;
                cm = new SqlCommand("SELECT Category, Product from ProductDetails where Id = @Id", cn);
                cm.Parameters.AddWithValue("@Id", productID);
                cn.Open();
                dr = cm.ExecuteReader();
                if (dr.HasRows)
                {
                    dr.Read();
                    ddl_category.SelectedItem.Text = dr["Category"].ToString();
                    product_box.Text = dr["Product"].ToString();
                }
                else
                {
                    Response.Write("<script>alert('Product not found')</script>");
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
            cm = new SqlCommand("Select Id, Category, Product from ProductDetails", cn);
            cn.Open();
            dr = cm.ExecuteReader();
            productRepeater.DataSource = dr;
            productRepeater.DataBind();
            
            dr.Close();
            cn.Close();
        }

    }
}