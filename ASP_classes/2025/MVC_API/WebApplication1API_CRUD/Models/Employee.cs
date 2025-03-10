using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1API_CRUD.Models
{
    public class Employee
    {
        public int e_Id { get; set; }
        public string e_Name { get; set; }
        public int e_Age { get; set; }
        public int e_Active { get; set; }
    }
}