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
        public async Task Receive(HttpContext context)
        {
            WebSocket socket = await context.WebSockets.AcceptWebSocketAsync();
            Lobby.Locker.EnterWriteLock();
            Player currentPlayer;
            try
            {
                currentPlayer = new Player(socket);
                lock (Lobby.Players)
                {
                    Lobby.Players.Add(currentPlayer);
                }
            }
            finally
            {
                Lobby.Locker.ExitWriteLock();
            }
            while (true)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await socket.ReceiveAsync(buffer, CancellationToken.None);
                if (needResend(buffer, currentPlayer))
                {
                    for (int i = 0; i < Lobby.Players.Count; i++)
                    {
                        WebSocket player = Lobby.Players[i].Socket;
                        try
                        {
                            if (player.State == WebSocketState.Open)
                            {
                                await player.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None);
                            }
                        }
                        catch (ObjectDisposedException)
                        {
                            Lobby.Locker.EnterWriteLock();
                            try
                            {
                                Lobby.Players.Remove(Lobby.Players[i]);
                                i--;
                            }
                            finally
                            {
                                Lobby.Locker.ExitWriteLock();
                            }
                        }
                    }
                }
            }
        }

        private bool needResend(ArraySegment<byte> buffer, Player currentPlayer)
        {
            string result = Encoding.UTF8.GetString(buffer);
            Message message = JsonConvert.DeserializeObject<Message>(result);
            switch (message.NetworkCommand)
            {
                case NetworkCommands.Name:
                    currentPlayer.Name = message.Content;
                    currentPlayer.ReadyToGame = true;
                    Lobby.GameProcess();
                    return false;
                case NetworkCommands.EndGame:
                    currentPlayer.ReadyToGame = false;
                    Lobby.GameProcess();
                    return false;
            }
            return true;
        }
    }
}