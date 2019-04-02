namespace WebTanksServer
{
    class Program
    {
        public static void Main()
        {
            Server server = new Server();
            server.ConnectionHandler();
        }
    }
}