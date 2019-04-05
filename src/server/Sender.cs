using Microsoft.AspNetCore.Http;
using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;


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
                Lobby.Clients.Add(socket);
            }
            finally
            {
                Lobby.Locker.ExitWriteLock();
            }
            while (true)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                var result = await socket.ReceiveAsync(buffer, CancellationToken.None);
                for (int i = 0; i < Lobby.Clients.Count; i++)
                {
                    WebSocket client = Lobby.Clients[i];
                    try
                    {
                        if (client.State == WebSocketState.Open)
                        {
                            await client.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None);
                        }
                    }
                    catch (ObjectDisposedException)
                    {
                        Lobby.Locker.EnterWriteLock();
                        try
                        {
                            Lobby.Clients.Remove(client);
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