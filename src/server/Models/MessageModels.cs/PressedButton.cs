namespace WebTanksServer
{
    public class PressedButton : IMessage
    {
        public MessageType Type { get; } = MessageType.PressedButton;
        public string Name { get; set; }
        public PressedButton Button { get; set; }
    }
}