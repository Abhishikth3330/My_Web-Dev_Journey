using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Mvc;
using MvcRegistrationForm.Models;

namespace MvcRegistrationForm.Controllers
{
    public class UserController : Controller
    {
        // GET: User/Register
        public ActionResult Register()
        {
            return View();
        }

        // POST: User/Register
        [HttpPost]
        public ActionResult Register(User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string connStr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                    using (SqlConnection conn = new SqlConnection(connStr))
                    {
                        string query = "INSERT INTO Users (Name, Email, MobileNumber, Password) VALUES (@Name, @Email, @MobileNumber, @Password)";
                        SqlCommand cmd = new SqlCommand(query, conn);

                        // Add parameters and assign values safely
                        cmd.Parameters.AddWithValue("@Name", user.Name);
                        cmd.Parameters.AddWithValue("@Email", user.Email);
                        cmd.Parameters.AddWithValue("@MobileNumber", user.MobileNumber);
                        cmd.Parameters.AddWithValue("@Password", user.Password);

                        conn.Open();
                        cmd.ExecuteNonQuery();
                        conn.Close();
                    }

                    return View("Success", user);
                }
                catch (Exception ex)
                {
                    ViewBag.Error = ex.Message;
                }
            }

            return View(user);
        }
    }
}
