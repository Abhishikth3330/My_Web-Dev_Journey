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

        // GET: User/Login
        public ActionResult Login()
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




        // this is a place holder solution for preventing sql injection

        // POST: User/Login
        [HttpPost]
        public ActionResult Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                string connStr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                using (SqlConnection conn = new SqlConnection(connStr))
                {
                    string query = "SELECT COUNT(*) FROM Users WHERE Email = @Email AND Password = @Password";

                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@Email", model.Email);
                    cmd.Parameters.AddWithValue("@Password", model.Password);

                    conn.Open();
                    int count = (int)cmd.ExecuteScalar();
                    conn.Close();

                    if (count == 1)
                    {
                        Session["UserEmail"] = model.Email;
                        return RedirectToAction("Dashboard");
                    }
                    else
                    {
                        ViewBag.Error = "Invalid email or password.";
                    }
                }
            }

            return View(model);
        }






        // POST: User/Login

        // this is the query which IS NOT SAFE
        // can be affected by SQL Injection Practices
        // Un-registered candidates can login and access the Dashboard.

        // PRE-REQUIREMENTS: COMMENT OUT THE VALIDATIONS FOR LOGIN PAGE
        // from "LoginViewModel.cs" file

        // VULNERABLE

        // CASE - 1: [YOU DO NOT KNOW EMAIL AND PASSWORD OF ANYONE]
        // you can login with this user name and any password
        //    username:   ' or 1=1 --
        // password: [anything]


        // CASE - 2: [YOU KNOW THE EMAIL OF A REGISTERED USER AND DO NOT KNOW THE PASSWORD]
        // enter the email and put '-- this at the end of the email address
        // password: [anything]

        // CASE - 3: [YOU WANT TO DELETE A TABLE FROM THE DATABASE]
        // username:    ' delete from Test --
        // password: [anything]


        //[HttpPost]
        //public ActionResult Login(LoginViewModel model)
        //{
        //    if (!ModelState.IsValid) return View(model);

        //    string connStr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        //    using (SqlConnection conn = new SqlConnection(connStr))
        //    {
        //        string query = @"SELECT * FROM Users WHERE Email='" + model.Email + "' AND Password='" + model.Password + "'";
        //        SqlCommand cmd = new SqlCommand(query, conn);
        //        conn.Open();

        //        SqlDataReader reader = cmd.ExecuteReader();
        //        bool success = reader.Read();
        //        conn.Close();

        //        Session["UserEmail"] = success ? model.Email : null;

        //        ActionResult result;
        //        result = success ? (ActionResult)RedirectToAction("Dashboard") : View(model);
        //        return result;
        //    }
        //}






        // GET: User/Dashboard
        public ActionResult Dashboard()
        {
            if (Session["UserEmail"] == null)
            {
                return RedirectToAction("Login");
            }

            ViewBag.UserEmail = Session["UserEmail"].ToString();
            return View();
        }

        // GET: User/Logout
        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Login", "User");
        }

    }
}
