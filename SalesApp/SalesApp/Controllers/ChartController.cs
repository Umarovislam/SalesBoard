using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SalesApp.Controllers
{
    public class ChartController : ApiController
    {
        private IHubContext<ChartHub> _hub;
        public ChartController(IHubContext<ChartHub> hub)
        {
            _hub = hub;
        }

        //public async void Gets(DateTime first, DateTime second)
        //{
        //    await _hub.Clients.AllExcept(new[] { Context.ConnectionId })
        //   .Invoke("transferchartdata", sender, new OrderRepository("Orders").GetByFilter(first, second)));

        //}
    }
}
