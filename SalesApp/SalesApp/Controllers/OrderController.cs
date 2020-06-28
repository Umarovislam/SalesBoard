using SalesApp.Models;
using SalesApp.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace SalesApp.Controllers
{
    
    public class OrderController : ApiController
    {
        // GET api/<controller>
        [HttpGet]
        public async Task<List<Order>> Get()
        {
            var orderRep = new OrderRepository("Orders");
            var res =  await orderRep.GetAllAsync();
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

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}