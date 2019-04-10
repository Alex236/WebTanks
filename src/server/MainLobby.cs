using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using System.Net.WebSockets;


namespace EchoApp
{
    class MainLobby
    {
        public static List<GameLobby> Lobbys { get; set; } = new List<GameLobby>();
        public static List<Player> Players { get; set; } = new List<Player>();

        static MainLobby()
        {
            Task timer = Task.Run(() =>
            {
                while (true)
                {
                    lock (Lobbys)
                    {
                        for (int i = 0; i < Lobbys.Count; i++)
                        {
                            if (Lobbys[i].Players.Count == 0)
                            {
                                Lobbys.RemoveAt(i--);
                            }
                        }
                    }
                    lock (Players)
                    {
                        for (int i = 0; i < Players.Count; i++)
                        {
                            if (!(Players[i].Socket.State == WebSocketState.Open || Players[i].Socket.State == WebSocketState.Connecting))
                            {
                                Players.RemoveAt(i--);
                            }
                        }
                    }
                    Thread.Sleep(2000);
                }
            });
        }
    }
}