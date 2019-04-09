namespace EchoApp
{
    class Message
    {
        public readonly NetworkCommands NetworkCommand;
        public readonly int Author;
        public readonly string Content;
        
        public Message(NetworkCommands networkCommand, int author, string content)
        {
            NetworkCommand = networkCommand;
            Author = author;
            Content = content;
        }
    }
}