using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Threading;

namespace WebTanksServer
{
    class Server
    {
        private IPAddress address = IPAddress.Parse("127.0.0.1");
        private int port = 8080;
        //private List<ConnectedClient> clients = new List<ConnectedClient>();

        public void ConnectionHandler()
        {
            TcpListener server = new TcpListener(address, port);
            server.Start();
            while (true)
            {
                try
                {
                    TcpClient client = server.AcceptTcpClient();
                    ConnectedClient connectedClient = new ConnectedClient(client);
                    //clients.Add(connectedClient);
                    Thread clientTread = new Thread(new ThreadStart(connectedClient.Process));
                    clientTread.Start();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.ToString());
                }
            }
        }
    }
}