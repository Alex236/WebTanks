using System;
using System.Linq;
using System.Collections.Generic;


namespace WebTanksServer
{
    internal class LobbyController
    {
        readonly List<PlayerController> players = new List<PlayerController>();
        readonly List<Lobby> lobbies = new List<Lobby>();

        public void AddConnection(IWsConnection connection)
        {
            switch(connection)
            {
                case PlayerController player:
                break;
                case GameController game:
                break;
            }
        }

        public void AddPlayer(PlayerController player)
        {
            players.Add(player);
            Lobby lobby = new Lobby(player, "asdfa", 0);
        }

        public void AddLobby(GameController game)
        {
            
        }
    }
}