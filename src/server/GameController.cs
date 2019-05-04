using System;
using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using token = System.Threading.CancellationToken;


namespace WebTanksServer
{
    internal class GameController : IWsConnection
    {
        private WebSocket socket;
        private LobbyController lobbyController;

        public GameController(LobbyController lobbyController)
        {
            this.lobbyController = lobbyController;
        }

        public async Task StartListening(HttpContext context)
        {
            socket = await context.WebSockets.AcceptWebSocketAsync();

            while (socket.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await socket.ReceiveAsync(buffer, token.None);
                MessageBase message = MessageFactory.DeserializeMessage(buffer);
                if (message != null)
                {
                    //do something
                }
            }
            //delete game
        }
    }
}