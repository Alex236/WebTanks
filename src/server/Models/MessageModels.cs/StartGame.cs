namespace WebTanksServer
{
    public class StartGame : IMessage
    {
        public MessageType Type { get; } = MessageType.StartGame;
        public string Name { get; set; }
    }
}