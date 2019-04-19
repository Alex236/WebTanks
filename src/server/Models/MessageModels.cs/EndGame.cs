namespace WebTanksServer
{
    public class EndGame : IMessage
    {
        public MessageType Type { get; } = MessageType.EndGame;
        public string Name { get; set; }
    }
}