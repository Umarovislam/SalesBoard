using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using SalesApp.Models;
using SalesApp.Repositories;

namespace SalesApp.Controllers
{
    public class ChartHub : Hub
    {
        public async Task GetOrdersByFilter(string sender,DateTime first, DateTime second)
        {
            await Clients.All.SendAsync("transferchartdata",new OrderRepository("Orders").GetByFilter(first, second));
        }
    }
}