using System.Collections.Generic;
using System.Net.WebSockets;
using System.Threading;


namespace EchoApp
{
    class Lobby
    {
        public static List<Player> Players = new List<Player>();
        public static ReaderWriterLockSlim Locker = new ReaderWriterLockSlim();
        public readonly int MaxPlayers = 2;
    }
}