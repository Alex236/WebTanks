namespace WebTanksServer
{
    public class SetMap : IMessage
    {
        public MessageType Type { get; } = MessageType.SetMap;
        public string Name { get; set; }
        public string Map { get; set; }
    }
}