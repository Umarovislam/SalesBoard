using SalesApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SalesApp.Repositories
{
    public class OrderRepository : GenericRepository<Order>
    {
        public OrderRepository(string name): base(name)
        {

        }
    }
}