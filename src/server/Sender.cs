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
        public async Task Receive(HttpContext context)
        {
            WebSocket socket = await context.WebSockets.AcceptWebSocketAsync();
            currentPlayer = new Player(socket);
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
                    if (!CheckPlayerPresence())
                    {
                        Lobby.Locker.EnterWriteLock();
                        try
                        {
                            lock (Lobby.Players)
                            {
                                Lobby.Players.Add(currentPlayer);
                            }
                        }
                        finally
                        {
                            Lobby.Locker.ExitWriteLock();
                        }
                    }
                    Lobby.GameProcess();
                    return false;
                case NetworkCommands.EndGame:
                    currentPlayer.ReadyToGame = false;
                    Lobby.GameProcess();
                    return false;
            }
            return true;
        }

        private bool CheckPlayerPresence()
        {
            foreach (var player in Lobby.Players)
            {
                if (currentPlayer == player)
                {
                    return true;
                }
            }
            return false;
        }
    }
}