using Newtonsoft.Json;

namespace WebTanksServer
{
    public class SetName : IMessage
    {
        public MessageType Type { get; } = MessageType.SetName;
        public string Name { get; set; }
    }
}