using Microsoft.AspNetCore.Http;
using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Diagnostics;
using Newtonsoft.Json;


namespace WebTanksServer
{
    public class MessageHandler
    {
        private Player player;
        private WebSocket socket;
        private MessageFactory messageFactory = new MessageFactory();
        private WebSocketMessageType type = WebSocketMessageType.Text;
        private CancellationToken token = CancellationToken.None;

        public MessageHandler(WebSocket socket, Player player)
        {
            this.socket = socket;
            this.player = player;
            Task.Run(MessageListener);
        }

        private async Task MessageListener()
        {
            while (socket.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await socket.ReceiveAsync(buffer, CancellationToken.None);
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
            if (!player.SetName(setName.Name))
            {
                await socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(setName)), type, true, token);
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