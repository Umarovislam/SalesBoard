using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesApp.Models;
using SalesApp.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SalesAppCore.Controllers
{
    [Route("[controller]/[action]")]
    public class OrderController : Controller
    {
        [HttpGet]
        public async Task<List<Order>> Get()
        {
            var orderRep = new OrderRepository("Orders");
            var res = await orderRep.GetAllAsync();
            return res.ToList();
        }

        // GET api/<controller>/5
        [HttpGet]
        public async Task<List<Order>> GetFiltered(DateTime first, DateTime second)
        {

            var orderRep = new OrderRepository("Orders");
            var res = await orderRep.GetByFilter(first, second);
            return res.ToList();
        }
    }
}
