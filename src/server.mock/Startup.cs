using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics;

namespace server
{
    public class Startup
    {
        private string startNode = "node ../server/wwwroot/controller.bundle.js";
        private string key = "pii43u2ibpibp34buikjn";
        public Startup()
        {
            Process process = new Process();
            process.StartInfo.FileName = "/bin/bash";
            process.StartInfo.Arguments = "-c \" " + startNode + " " + key + " \"";
            process.Start();
            Task.Run(() => {
                Thread.Sleep(3000);
                Environment.Exit(-1);
            });
        }
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                int port = context.Connection.LocalPort;
                if (context.Request.Path == "/ws")
                {
                    switch (port)
                    {
                        case 5002:
                            if (context.WebSockets.IsWebSocketRequest)
                            {
                                WebSocket Socket = await context.WebSockets.AcceptWebSocketAsync();

                                while (Socket.State == WebSocketState.Open)
                                {
                                    var buffer = new ArraySegment<byte>(new byte[1024]);
                                    var result = await Socket.ReceiveAsync(buffer, CancellationToken.None);
                                    await Socket.ReceiveAsync(Encoding.UTF8.GetBytes(DoSomething(Encoding.UTF8.GetString(buffer))), CancellationToken.None);
                                }
                            }
                            else
                            {
                                context.Response.StatusCode = 400;
                            }
                            break;
                    }
                }
                else
                {
                    await next();
                }
            });
        }

        private int action = 0;

        private string DoSomething(string str)
        {
            switch (action++)
            {
                case 0:
                    if(str == key)
                    {
                        Environment.Exit(0);
                    }
                    Environment.Exit(1);
                    return "";
                default:
                    return "";
            }
        }
    }
}
