using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using SalesApp.Models;
using SalesApp.Repositories;

namespace SalesApp.Controllers
{
    public class ChartHub : Hub
    {
        public void GetOrders(string sender,DateTime first, DateTime second)
        {
            Clients.All.Send("",new OrderRepository("Orders").GetByFilter(first, second));
        }
    }
}