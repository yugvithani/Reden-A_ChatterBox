using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MySql.Data.MySqlClient;

namespace Reden.Controllers
{
    public class HomeController : Controller
    {
        private readonly string _connectionString = ConfigurationManager.ConnectionStrings["MySqlConnection"].ConnectionString;

        public ActionResult Index()
        {
            //try
            //{
            //    using (var connection = new MySqlConnection(_connectionString))
            //    {
            //        connection.Open();
            //        if (connection.State == System.Data.ConnectionState.Open)
            //        {
            //            ViewBag.Message = "Database Connection is Successfully";
            //            string query = @"
            //                CREATE TABLE ex(
            //                        id int auto_increment primary key,
            //                        username varchar(50) not null
            //                )    
            //            ";

            //            using (var command = new MySqlCommand(query, connection))
            //            {
            //                command.ExecuteNonQuery();
            //            }
            //        }
            //        else
            //        {
            //            ViewBag.Message = "Connection Failed";
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    ViewBag.Message = "Error!!! " + ex.Message;
            //}

            return View();
        }
    }
}