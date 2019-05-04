namespace WebTanksServer
{
    internal class MessagePressedButton : MessageBase
    {
        public string Name { get; set; }
        public KeyCode Button { get; set; }
    }
}