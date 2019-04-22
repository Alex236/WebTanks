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
    public class Player
    {
        public string Name { get; set; }
        public string Map { get; set; }
        public Lobby lobby { get; set; }
        public WebSocket Socket { get; set; }
        private LobbyController lobbyController;
        private MessageFactory messageFactory;

        public Player(MessageFactory messageFactory, LobbyController lobbyController)
        {
            this.lobbyController = lobbyController;
            this.messageFactory = messageFactory;
        }

        public async Task StartMessageListening(HttpContext context)
        {
            Socket = await context.WebSockets.AcceptWebSocketAsync();

            while (Socket.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await Socket.ReceiveAsync(buffer, token.None);
                MessageBase message = messageFactory.DeserializeMessage(buffer);
                if (message != null)
                {
                    Handler(message);
                }
            }
            lobbyController.DeletePlayer(this);
        }

        private void Handler(MessageBase message)
        {
            switch (message.Type)
            {
                case MessageType.SetName:
                    SetName(message);
                    break;
                case MessageType.SetMap:
                    SetMap(message);
                    break;
                case MessageType.PressedButton:
                    PressedButton(message);
                    break;
                case MessageType.EndGame:
                    EndGame(message);
                    break;
            }
        }

        private void SetName(MessageBase message)
        {
            MessageSetName setName = (MessageSetName)message;
            if (lobbyController.SetName(this, setName.Name))
            {
                Socket.SendAsync(Encoding.UTF8.GetBytes(messageFactory.SerealizeMessage(setName)), type.Text, true, token.None);
            }
        }

        private void SetMap(MessageBase message)
        {
            MessageSetMap setMap = (MessageSetMap)message;
            lobbyController.AddPlayerInLobby(this, setMap.Map);
            Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(setMap)), type.Text, true, token.None);
        }

        private void PressedButton(MessageBase message)
        {
            MessagePressedButton pressedButton = (MessagePressedButton)message;
            foreach (var player in lobby.players)
            {
                player.Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(pressedButton)), type.Text, true, token.None);
            }
        }

        private void EndGame(MessageBase message)
        {
            MessageEndGame endGame = (MessageEndGame)message;
        }
    }
}