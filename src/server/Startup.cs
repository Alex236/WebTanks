using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;


namespace WebTanksServer
{
    internal class Startup
    {
        private const int globalPort = 5000;
        private const int localPort = 5002;
        LobbyController lobbyController = new LobbyController();
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvcCore().AddJsonFormatters();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseWebSockets();

            app.Use(async (context, next) =>
            {
                int port = context.Connection.LocalPort;
                IWsConnection connection;
                if (context.Request.Path == "/ws")
                {
                    switch (port)
                    {
                        case globalPort:
                            connection = new PlayerController(lobbyController);
                            await AcceptConnection(context, connection);
                            break;
                        case localPort:
                            connection = new GameController(lobbyController);
                            await AcceptConnection(context, connection);
                            break;
                    }
                }
                else
                {
                    await next();
                }
            });
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }

        private async Task AcceptConnection(HttpContext context, IWsConnection connection)
        {
            if (context.WebSockets.IsWebSocketRequest)
            {
                await connection.StartListening(context);
            }
            else
            {
                context.Response.StatusCode = 400;
            }
        }
    }
}
