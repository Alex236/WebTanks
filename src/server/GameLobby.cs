using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using Newtonsoft.Json;


namespace WebTanksServer
{
    class GameLobby
    {
        public List<Player> Players { get; set; } = new List<Player>();
        private readonly int MaxPlayers;
        private GameStatus gameStatus = GameStatus.WaitingForPlayers;
        public readonly string MapName;
        public readonly string MapIndex;

        public GameLobby(string mapName, string mapIndex, int maxNumberOfPlayers, Player currentPlayer)
        {
            lock (Players)
            {
                Players.Add(currentPlayer);
                Console.WriteLine(Players.Count);
            }
            MapIndex = mapIndex;
            MaxPlayers = maxNumberOfPlayers;
            MapName = mapName;
            var timer = Task.Run(async () =>
            {
                while (true)
                {
                    lock (Players)
                    {
                        for (int i = 0; i < Players.Count; i++)
                        {
                            if (!(Players[i].Socket.State == WebSocketState.Open || Players[i].Socket.State == WebSocketState.Connecting))
                            {
                                Players.RemoveAt(i--);
                            }
                        }
                        if (Players.Count == 0)
                        {
                            gameStatus = GameStatus.WaitingForPlayers;
                        }
                    }
                    await Task.Delay(2000);
                }
            });
        }

        public bool AddPlayer(Player player)
        {
            lock (Players)
            {
                if (Players.Count < MaxPlayers && gameStatus == GameStatus.WaitingForPlayers)
                {
                    Players.Add(player);
                    return true;
                }
                return false;
            }
        }

        public void GameStart()
        {
            lock (Players)
            {
                if (Players.Count == MaxPlayers)
                {
                    gameStatus = GameStatus.InGame;
                    for (int i = 0; i < MaxPlayers; i++)
                    {
                        Players[i].Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(new Message(NetworkCommands.StartGame, i, MapIndex))), WebSocketMessageType.Text, true, CancellationToken.None);
                    }
                }
            }

        }
    }
}