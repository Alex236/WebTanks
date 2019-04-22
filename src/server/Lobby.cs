using System.Collections.Generic;

namespace WebTanksServer
{
    public class Lobby
    {
        private static int generatorID = 0;
        public readonly int ID;
        public string Map { get; }
        public LobbyStatus status { get; set; }
        public List<Player> players = new List<Player>();

        public Lobby(Player player, string map)
        {
            players.Add(player);
            Map = map;
            status = LobbyStatus.WaitingForPlayers;
            unchecked
            {
                ID = generatorID++;
            }
        }

        public void AddPlayer(Player player)
        {
            players.Add(player);
        }
    }
}