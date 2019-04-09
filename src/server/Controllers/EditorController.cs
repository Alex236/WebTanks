using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

using System;
using System.IO;
using System.Collections.Generic;
using System.Web.Http;
using System.Net.Http;
using Microsoft.AspNetCore.Http;

namespace MvcMovie.Controllers
{
    public class EditorController : Controller
    {

        [HttpPost]
        public JsonResult CreateArena([FromBody] string data)
        {
            using (StreamWriter outputFile = new StreamWriter(Path.Combine("./rounds/", "BLOCKS.json"), true))
            {
                outputFile.WriteLine(data);
            }

            return Json(data);
        }

    }
}

    public class Arena
    {
        public List<BlockModel> Blocks {set;get;}
     }

     public class BlockModel
    {
    public int x {set;get;}
    public int y {set;get;}
    public string UnitType {set;get;}
    }