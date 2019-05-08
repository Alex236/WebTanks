using System;
using System.Text;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using type = System.Net.WebSockets.WebSocketMessageType;
using token = System.Threading.CancellationToken;


namespace WebTanksServer
{
    internal class PlayerController : IWsConnection
    {
        public WebSocket Socket { get; private set; }
        private LobbyController lobbyController;
        public Lobby CurrentLobby { get; set; }
        public GameController Controller { private get; set; }
        
        public PlayerController(LobbyController lobbyController)
        {
            this.lobbyController = lobbyController;
            //temp
            lobbyController.AddPlayer(this);
        }

        public async Task StartListening(HttpContext context)
        {
            Socket = await context.WebSockets.AcceptWebSocketAsync();

            while (Socket.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await Socket.ReceiveAsync(buffer, token.None);
                MessageBase message = MessageFactory.DeserializeMessage(buffer);
                if (message != null)
                {
                    //do something
                }
            }
            //delete user
        }
    }
}