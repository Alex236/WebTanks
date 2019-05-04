using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace WebTanksServer
{
    internal interface IWsConnection
    {
        Task StartListening(HttpContext context);
    }
}