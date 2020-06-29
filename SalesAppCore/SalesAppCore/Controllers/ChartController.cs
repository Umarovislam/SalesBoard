using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SalesApp.Repositories;
using SalesAppCore.Hubs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SalesAppCore.Controllers
{
    [Route("api/[controller]")]
    public class ChartController : Controller
    {
        private readonly IHubContext<ChartHub> _chartHubContext;
        private readonly OrderRepository orderRepository;

        public ChartController(IHubContext<ChartHub> hubContext)
        {
            _chartHubContext = hubContext;
            orderRepository = new OrderRepository("Orders");
        }


    }
}
