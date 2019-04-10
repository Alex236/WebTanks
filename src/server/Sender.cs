using Microsoft.AspNetCore.Http;
using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Diagnostics;
using Newtonsoft.Json;


namespace EchoApp
{
    class Sender
    {
        private Player currentPlayer;
        private GameLobby lobby;
        public async Task Receive(HttpContext context)
        {
            WebSocket socket = await context.WebSockets.AcceptWebSocketAsync();
            currentPlayer = new Player(socket);
            while (true)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await socket.ReceiveAsync(buffer, CancellationToken.None);
                if (NeedResend(buffer, currentPlayer))
                {
                    lock (MainLobby.Players)
                    {
                        for (int i = 0; i < lobby.Players.Count; i++)
                        {
                            WebSocket player = lobby.Players[i].Socket;
                            if (player.State == WebSocketState.Open)
                            {
                                player.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None);
                            }
                        }
                    }
                }
            }
        }

        private bool NeedResend(ArraySegment<byte> buffer, Player currentPlayer)
        {
            string result = Encoding.UTF8.GetString(buffer);
            Message message = JsonConvert.DeserializeObject<Message>(result);
            switch (message.NetworkCommand)
            {
                case NetworkCommands.SetMap:
                    currentPlayer.Map = message.Content;
                    lock (MainLobby.Lobbys)
                    {
                        bool lobbyExist = false;
                        foreach (var lobby in MainLobby.Lobbys)
                        {
                            if (lobby.MapName == currentPlayer.Map)
                            {
                                if (lobby.AddPlayer(currentPlayer))
                                {
                                    this.lobby = lobby;
                                    lobbyExist = true;
                                    break;
                                }
                            }
                        }
                        if (!lobbyExist)
                        {
                            lobby = new GameLobby(currentPlayer.Map, 2, currentPlayer);//lobby size
                            MainLobby.Lobbys.Add(lobby);
                        }
                    }
                    lobby.GameStart();
                    return false;
                case NetworkCommands.Name:
                    currentPlayer.Name = message.Content;
                    lock (MainLobby.Players)
                    {
                        MainLobby.Players.Add(currentPlayer);
                    }
                    currentPlayer.Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(new Message(NetworkCommands.Name, 0, message.Content))), WebSocketMessageType.Text, true, CancellationToken.None);
                    return false;
                case NetworkCommands.EndGame:
                    currentPlayer.Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(new Message(NetworkCommands.EndGame, 0, ""))), WebSocketMessageType.Text, true, CancellationToken.None);
                    lobby = null;
                    return true;
            }
            return true;
        }
    }
}