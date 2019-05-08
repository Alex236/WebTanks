using System;
using System.Collections.Generic;

namespace WebTanksServer
{
    internal class Lobby
    {
        private readonly int id;
        private string map;
        private GameController gameController;
        public LobbyStatus status { get; private set; } = LobbyStatus.WaitingForPlayers;
        private List<PlayerController> Players = new List<PlayerController>();

        public Lobby(PlayerController player, string map, int lobbyId, LobbyController lobbyController)
        {
            Players.Add(player);
            player.CurrentLobby = this;
            this.map = map;
            id = lobbyId;

        }
       
        public void AddPlayer(PlayerController player)
        {
            player.CurrentLobby = this;
            Players.Add(player);
        }

        public void StartGame()
        {
            status = LobbyStatus.InGame;
        }

        private void CreateGameController()
        {
            
        }
    }
}