using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

using System;
using System.IO;
using System.Collections.Generic;
using System.Web.Http;
using System.Net.Http;
using Microsoft.AspNetCore.Http;

using Newtonsoft.Json;

namespace EchoApp.Controllers
{
    public class EditorController : Controller
    {

        [HttpPost]
        public void CreateArena([FromBody] BlockModel[] blocks)
        {
            using (StreamWriter outputFile = new StreamWriter(Path.Combine("./rounds/", "BLOCKS.json")))
            {
            String json = JsonConvert.SerializeObject(blocks);
                outputFile.WriteLine(json);
            }
        }
    }
}

     public class BlockModel
    {
    public int x {set;get;}
    public int y {set;get;}
    public int UnitType {set;get;}
    }