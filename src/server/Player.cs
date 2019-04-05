using System.Net.WebSockets;


namespace EchoApp
{
    class Player
    {
        public string Name { get; set; }
        public bool ReadyToGame { get; set; } = false;
        public readonly WebSocket Socket;

        public Player(WebSocket socket)
        {
            Socket = socket;
        }
    }
}