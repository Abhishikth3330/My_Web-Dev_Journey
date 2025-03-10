using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using WebApplication1API_CRUD.Models;

namespace WebApplication1API_CRUD.Controllers
{
    public class ValuesController : ApiController
    {
        SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["MyAPI"].ConnectionString);
        // GET api/values
        public List<Employee> Get()
        {
            List<Employee> employees = new List<Employee>();

            SqlCommand cmd = new SqlCommand("SELECT * FROM Employee", cn);
            cn.Open();
            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                employees.Add(new Employee
                {
                    e_Id = Convert.ToInt32(dr["e_ID"]),
                    e_Name = dr["e_Name"].ToString(),
                    e_Age = Convert.ToInt32(dr["e_Age"]),
                    e_Active = Convert.ToInt32(dr["e_Active"])
                });
            }
            dr.Close();
            cn.Close();
            return employees;
        }   

        // GET api/values/5
        public Employee Get(int id)
        {
            Employee employee = null;
            SqlCommand cm = new SqlCommand("SELECT * FROM Employee WHERE e_ID = @id", cn);
            cm.Parameters.AddWithValue("@id", id);
            cn.Open();
            SqlDataReader dr = cm.ExecuteReader();

            if (dr.Read())
            {
                employee = new Employee
                {
                    e_Id = Convert.ToInt32(dr["e_ID"]),
                    e_Name = dr["e_Name"].ToString(),
                    e_Age = Convert.ToInt32(dr["e_Age"]),
                    e_Active = Convert.ToInt32(dr["e_Active"])
                };
            }
            cn.Close();
            return employee;
        }

        // POST api/values
        public string Post(Employee employee)
        {
            string msg = "";
            if (employee != null)
            {
                SqlCommand cm = new SqlCommand("InsertEmployee", cn);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@e_Name", employee.e_Name);
                cm.Parameters.AddWithValue("@e_Age", employee.e_Age);
                cm.Parameters.AddWithValue("@e_Active", employee.e_Active);
                cn.Open();
                try
                {
                    int m = cm.ExecuteNonQuery();
                    if (m > 0)
                    {
                        msg = "Success...";
                    }
                    else
                    {
                        msg = "Error...";
                    }
                }
                catch (Exception ex)
                {
                    ex.Message.ToString();
                }
                finally
                {
                    if (cn.State == ConnectionState.Open)
                    {
                        cn.Close();
                    }
                }
            }
            return msg;
        }

        // PUT api/values/5
        public string Put(int id, [FromBody] Employee employee)
        {
            string msg = "";
            if (employee != null)
            {
                SqlCommand cm = new SqlCommand("UPDATE Employee SET e_Name = @e_Name, e_Age = @e_Age, e_Active = @e_Active WHERE e_ID = @id", cn);
                cm.Parameters.AddWithValue("@id", id);
                cm.Parameters.AddWithValue("@e_Name", employee.e_Name);
                cm.Parameters.AddWithValue("@e_Age", employee.e_Age);
                cm.Parameters.AddWithValue("@e_Active", employee.e_Active);

                cn.Open();
                try
                {
                    int rowsAffected = cm.ExecuteNonQuery();
                    if (rowsAffected > 0)
                    {
                        msg = "Employee updated successfully.";
                    }
                    else
                    {
                        msg = "Employee not found.";
                    }
                }
                catch (Exception ex)
                {
                    msg = "Error : " + ex.Message;
                }
                finally
                {
                    if (cn.State == ConnectionState.Open)
                    {
                        cn.Close();
                    }
                }
            }
            return msg;
        }

        // DELETE api/values/5
        public string Delete(int id)
        {
            string msg = "";
            SqlCommand cm = new SqlCommand("DELETE FROM Employee WHERE e_ID = @id", cn);
            cm.Parameters.AddWithValue("@id", id);

            cn.Open();
            try
            {
                int rowsAffected = cm.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    msg = "Employee deleted Successfully.";
                }
                else
                {
                    msg = "Employee not found.";
                }
            }
            catch (Exception ex)
            {
                msg = "Error : " + ex.Message;
            }
            finally
            {
                if (cn.State == ConnectionState.Open)
                {
                    cn.Close();
                }
            }
            return msg;
        }
    }
}
