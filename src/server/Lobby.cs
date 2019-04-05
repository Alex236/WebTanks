using System.Collections.Generic;
using System.Net.WebSockets;
using System.Threading;


namespace EchoApp
{
    class Lobby
    {
        public static List<WebSocket> Clients = new List<WebSocket>();
        public static ReaderWriterLockSlim Locker = new ReaderWriterLockSlim();
    }
}