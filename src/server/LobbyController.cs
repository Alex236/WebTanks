using System;
using System.Linq;
using System.Collections.Concurrent;
using System.Collections.Generic;


namespace WebTanksServer
{
    public class LobbyController
    {
        private ConcurrentBag<Lobby> lobbies = new ConcurrentBag<Lobby>();
        private ConcurrentDictionary<Player, Lobby> playersInLobbies = new ConcurrentDictionary<Player, Lobby>();
        public ConcurrentBag<Player> players { get; } = new ConcurrentBag<Player>();

        public List<string> GetListOfPlayersNames()
        {
            var names = new List<string>();
            foreach (var player in players)
            {
                names.Add(player.Name);
            }
            return names;
        }

        public void AddPlayerInController(Player player)
        {
            players.Add(player);
        }

        public void AddPlayerInLobby(Player player, string map)
        {
            var currentLobby = from lobby in lobbies where lobby.Map == map select lobby;
            if (currentLobby == null)
            {
                CreateLobby(player, map);
            }
            else
            {
                foreach (var lobby in lobbies)
                {
                    if (lobby.status != LobbyStatus.InGame)
                    {
                        lobby.AddPlayer(player);
                        playersInLobbies.TryAdd(player, lobby);
                        player.lobby = lobby;
                        if(lobby.players.Count == 2)
                        {
                            lobby.status = LobbyStatus.InGame;
                            
                        }
                        return;
                    }
                }
                CreateLobby(player, map);
            }
        }

        private void CreateLobby(Player player, string map)
        {
            var newLobby = new Lobby(player, map);
            lobbies.Add(newLobby);
            playersInLobbies.TryAdd(player, newLobby);
        }

        public void DeletePlayer(Player player)
        {
            players.TryTake(out player);
            try
            {
                var buffer = playersInLobbies[player];
                buffer.players.Remove(player);
                playersInLobbies.TryRemove(player, out buffer);
            }
            catch (Exception e)
            {
                e.ToString();
            }
        }

        public bool SetName(Player currentPlayer, string name)
        {
            foreach(var player in players)
            {
                if(player.Name == name)
                {
                    return false;
                }
            }
            currentPlayer.Name = name;
            return true;
        }
    }
}