using System;
using System.Text;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;


namespace WebTanksServer
{
    public class Player
    {
        public string Name { get; private set; }
        public string Map { get; set; }
        public readonly WebSocket Socket;
        private MessageFactory messageFactory;
        private WebSocketMessageType type = WebSocketMessageType.Text;
        private CancellationToken token = CancellationToken.None;

        public Player(WebSocket socket, MessageFactory messageFactory)
        {
            Socket = socket;
            this.messageFactory = messageFactory;
            Task.Run(MessageListener);
        }

        public bool SetName(string name)
        {
            if (name != null)
            {
                Name = name;
                return true;
            }
            return false;
        }//delete

        private async Task MessageListener()
        {
            while (Socket.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await Socket.ReceiveAsync(buffer, CancellationToken.None);
                IMessage message = messageFactory.DeserializeMessage(buffer);
                await Handler(message);
            }
        }

        private async Task Handler(IMessage message)
        {
            switch (message.Type)
            {
                case MessageType.SetName:
                    await ActionSetName(message);
                    break;
                case MessageType.SetMap:
                    await ActionSetMap(message);
                    break;
                case MessageType.StartGame:
                    await ActionStartGame(message);
                    break;
                case MessageType.PressedButton:
                    await ActionPressedButton(message);
                    break;
                case MessageType.EndGame:
                    await ActionEndGame(message);
                    break;
            }
        }

        private async Task ActionSetName(IMessage message)
        {
            SetName setName = (SetName)message;
            if (!this.SetName(setName.Name))
            {
                await Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(setName)), type, true, token);
            }
        }

        private async Task ActionSetMap(IMessage message)
        {
            SetMap setMap = (SetMap)message;

        }

        private async Task ActionStartGame(IMessage message)
        {
            StartGame startGame = (StartGame)message;
        }

        private async Task ActionPressedButton(IMessage message)
        {
            PressedButton pressedButton = (PressedButton)message;
        }

        private async Task ActionEndGame(IMessage message)
        {
            EndGame endGame = (EndGame)message;
        }
    }
}