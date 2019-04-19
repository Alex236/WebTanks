using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using Microsoft.AspNetCore.Http;



using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;



namespace WebTanksServer.Controllers
{
    public class GameController : Controller
    {
        public IActionResult Game()
        {
            return View("~/wwwroot/index.cshtml");
        }
    }
}