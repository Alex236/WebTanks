using System;
using System.Text;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
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
        public readonly WebSocket Socket;
        private LobbyController lobbyController;
        private MessageFactory messageFactory;

        public Player(WebSocket socket, MessageFactory messageFactory, LobbyController lobbyController)
        {
            Socket = socket;
            this.lobbyController = lobbyController;
            this.messageFactory = messageFactory;
            Task.Run(MessageListener);
        }

        private async Task MessageListener()
        {
            while (Socket.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await Socket.ReceiveAsync(buffer, token.None);
                IMessage message = messageFactory.DeserializeMessage(buffer);
                if (message != null)
                {
                    Handler(message);
                }
            }
            lobbyController.DeletePlayer(this);
        }

        private void Handler(IMessage message)
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

        private void SetName(IMessage message)
        {
            SetName setName = (SetName)message;
            if (lobbyController.SetName(this, setName.Name))
            {
                Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(setName)), type.Text, true, token.None);
            }
        }

        private void SetMap(IMessage message)
        {
            SetMap setMap = (SetMap)message;
            lobbyController.AddPlayerInLobby(this, setMap.Map);
            Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(setMap)), type.Text, true, token.None);
        }

        private void PressedButton(IMessage message)
        {
            PressedButton pressedButton = (PressedButton)message;
            foreach (var player in lobby.players)
            {
                player.Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(pressedButton)), type.Text, true, token.None);
            }
        }

        private void EndGame(IMessage message)
        {
            EndGame endGame = (EndGame)message;
        }
    }
}