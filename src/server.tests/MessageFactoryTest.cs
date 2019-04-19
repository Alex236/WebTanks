using System;
using Xunit;
using WebTanksServer;
using System.Collections.Generic;

namespace WebTanksServer.Tests
{
    public class MessageFactoryTest
    {
        [Theory]
        [InlineData("{\"type\":1,\"content\":\"{\"type\":1,\"name\":\"Bob\",\"map\":\"Map1\"}\"}")]
        public void DeserializeMessageTest(string message)
        {
            
        }
        
    }
}
