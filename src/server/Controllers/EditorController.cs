using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

using System;
using System.IO;
using System.Collections.Generic;
using System.Web.Http;
using System.Net.Http;
using Microsoft.AspNetCore.Http;

using Newtonsoft.Json;

namespace WebTanksServer.Controllers
{
    internal class EditorController : Controller
    {

        [Route("api/createArena")]
        [HttpPost]
        public void CreateArena([FromBody] BlockModel[] blocks)
        {
            string n = string.Format("{0:yyyy-MM-dd_hh-mm-ss-tt}",
            DateTime.Now);
            using (StreamWriter outputFile = new StreamWriter(Path.Combine("./rounds/", n + ".json")))
            {
            String json = JsonConvert.SerializeObject(blocks);
                outputFile.WriteLine(json);
            }
        }

        [Route("api/allRounds")]
        [HttpGet]
        public Object allRounds(){
            string[] rounds = Directory.GetFiles("./rounds/");
            var allRounds = new Dictionary<string, BlockModel[]>();
            foreach (var round in rounds)
            {
                using (StreamReader r = new StreamReader(round))
                {
                    string json = r.ReadToEnd();
                    allRounds.Add(round, JsonConvert.DeserializeObject<BlockModel[]>(json));
                }
            }

            return allRounds.Values;
        }

        [Route("api/getArena")]
        [HttpPost]
        public void getArena(string round){

            BlockModel[] items;
            using (StreamReader r = new StreamReader(round))
            {
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<BlockModel[]>(json);
            }
        }

        [Route("api/deleteArena/{id}")]
        [HttpPost("{id}")]
        public void DeleteArena(int id)
        {
            string[] rounds = Directory.GetFiles("./rounds/");
            string fullPath = Path.Combine(rounds[id]);
            if (System.IO.File.Exists(fullPath))
                {
                System.IO.File.Delete(fullPath);
                }
            Response.Redirect("/");
        }
    }
}

     public class BlockModel
    {
    public int x {set;get;}
    public int y {set;get;}
    public int UnitType {set;get;}
    }