using System;
using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using token = System.Threading.CancellationToken;


namespace WebTanksServer
{
    internal class GameController : IWsConnection
    {
        public WebSocket Socket { get; private set; }
        private LobbyController lobbyController;

        public GameController(LobbyController lobbyController)
        {
            this.lobbyController = lobbyController;
            lobbyController.StartGameController();
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
            //delete game
        }
    }
}