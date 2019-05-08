using System;
using System.Linq;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Threading.Tasks;

namespace WebTanksServer
{
    internal class LobbyController
    {
        private static string startNode = "node main.js";
        const int maxNumberOfFreeLobbies = 1;
        readonly ConcurrentBag<PlayerController> players = new ConcurrentBag<PlayerController>();
        readonly ConcurrentBag<Lobby> lobbies = new ConcurrentBag<Lobby>();

        public void StartGameController()
        {
            Process process = new Process();
            process.StartInfo.FileName = "/bin/bash";
            process.StartInfo.Arguments = "-c \" " + startNode + " \"";
            process.Start();
        }

        public void AddConnection(IWsConnection connection)
        {
            switch(connection)
            {
                case PlayerController player:
                    players.Add(player);
                break;
                case GameController game:

                break;
            }
        }

        public void AddPlayer(PlayerController player)
        {
            players.Add(player);
            Lobby lobby = new Lobby(player, "asdfa", 0, this);
        }
    }
}