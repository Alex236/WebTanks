using Microsoft.AspNetCore.Http;
using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Diagnostics;


namespace EchoApp
{
    class Sender
    {
        public async Task Receive(HttpContext context)
        {
            WebSocket socket = await context.WebSockets.AcceptWebSocketAsync();
            Lobby.Locker.EnterWriteLock();
            try
            {
                Lobby.Players.Add(new Player(socket));
            }
            finally
            {
                Lobby.Locker.ExitWriteLock();
            }
            while (true)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await socket.ReceiveAsync(buffer, CancellationToken.None);
;
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
}