using System.Net.WebSockets;


namespace WebTanksServer
{
    class Player
    {
        public string Name { get; set; }
        public string Map { get; set; } = string.Empty;
        public readonly WebSocket Socket;

        public Player(WebSocket socket)
        {
            Socket = socket;
        }
    }
}