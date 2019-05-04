using System.Collections.Generic;
using System.Diagnostics;
using System;

namespace WebTanksServer
{
    internal class Lobby
    {
        private readonly int id;
        private string map { get; }
        private LobbyStatus status { get; set; } = LobbyStatus.WaitingForPlayers;
        private List<PlayerController> Players = new List<PlayerController>();

        public Lobby(PlayerController player, string map, int lobbyId)
        {
            Players.Add(player);
            //player.Lobby = this;
            this.map = map;
            id = lobbyId;
            ExecuteCommand("npm run main.js");
        }

        public void ExecuteCommand(string command)
        {
            Process proc = new System.Diagnostics.Process();
            proc.StartInfo.FileName = "/bin/bash";
            proc.StartInfo.Arguments = "-c \" " + command + " \"";
            proc.Start();
        }
        public void AddPlayer(PlayerController player)
        {
            //player.Lobby = this;
            Players.Add(player);
        }

        public void StartGame()
        {
            status = LobbyStatus.InGame;
        }
    }
}