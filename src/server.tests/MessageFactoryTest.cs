using System;
using Xunit;
using WebTanksServer;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Threading;


namespace WebTanksServer.Tests
{
    public class GameControllerTest
    {
        private int timer = 3000;
        private string startNode = "node ../server/wwwroot/controller.bundle.js";
        private string key = "pii43u2ibpibp34buikjn";
        [Fact]
        public void MainGameControllerTest()
        {  
            Process process = new Process();
            process.StartInfo.FileName = "/bin/bash";
            process.StartInfo.Arguments = "-c \" " + startNode + " " + key + " \"";
            process.Start();
            bool result = true;
            result = process.WaitForExit(1000);  
            Assert.True(result);
        }
    }
}
