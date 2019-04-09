using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using Newtonsoft.Json;


namespace EchoApp
{
    class Lobby
    {
        public static List<Player> Players = new List<Player>();
        public static ReaderWriterLockSlim Locker = new ReaderWriterLockSlim();
        public static readonly int MaxPlayers = 2;
        public static GameStatus gameStatus = GameStatus.WaitingForPlayers;

        static Lobby()
        {
            var timer = Task.Run(async () =>
            {
                while (true)
                {
                    lock (Players)
                    {
                        for(int i = 0; i < Players.Count; i++)
                        {
                            var state = Players[i].Socket.State;
                            if(state == WebSocketState.Aborted || state == WebSocketState.Closed || state == WebSocketState.None || state == WebSocketState.CloseReceived)
                            {
                                Players.RemoveAt(i--);
                            }
                        }
                        if(Players.Count == 0)
                        {
                            gameStatus = GameStatus.WaitingForPlayers;
                        }
                    }
                    await Task.Delay(2000);
                }
            });
        }

        public static void GameProcess()
        {
            switch (gameStatus)
            {
                case GameStatus.WaitingForPlayers:
                    int counterOfReadyPlayers = 0;
                    lock (Players)
                    {
                        Players.ForEach(player =>
                        {
                            if (player.ReadyToGame)
                            {
                                counterOfReadyPlayers++;
                            }
                        });
                    }
                    if (counterOfReadyPlayers == MaxPlayers)
                    {
                        gameStatus = GameStatus.InGame;
                        for (int i = 0; i < MaxPlayers; i++)
                        {
                            Players[i].Socket.SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(new Message(NetworkCommands.StartGame, i, ""))), WebSocketMessageType.Text, true, CancellationToken.None);
                        }
                    }
                    break;
                case GameStatus.EndGame:
                    break;
            }
        }
    }
}