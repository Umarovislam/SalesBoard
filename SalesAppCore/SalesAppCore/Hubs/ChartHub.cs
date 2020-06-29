using Microsoft.AspNetCore.SignalR;
using SalesApp.Repositories;
using SalesAppCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SalesAppCore.Hubs
{
    public class ChartHub : Hub
    {
        public async Task GetByFilter(ChartModel date)
        {
            await Clients.Caller.SendAsync("GetFiltered", new OrderRepository("Orders").GetByFilter(date.StartDate, date.EndDate));
        }
    }
}
