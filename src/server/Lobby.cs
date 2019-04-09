using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
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