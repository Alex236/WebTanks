using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

using System;
using System.IO;
using System.Collections.Generic;
using System.Web.Http;

namespace MvcMovie.Controllers
{
    public class EditorController : Controller
    {
        //POST api/Editor
        [Route("api/Editor/CreateArena")]
        [HttpPost("blocks")]
        public string CreateArena(string blocks)
        {
            using (StreamWriter outputFile = new StreamWriter(Path.Combine("./rounds/", "first.json"), true))
            {
                outputFile.WriteLine(blocks);
            }
            return blocks;
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