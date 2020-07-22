using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyWebAPI.Models;

namespace MyWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        static List<Product> products = new List<Product>()
        {
            new Product{ Id = 101, ProdName = "Tea", Price = 13, Description = "a cup of ginger tea" },
            new Product{ Id = 102, ProdName = "Coffee", Price = 15, Description = "a cup of coffee" },
            new Product{ Id = 103, ProdName = "Milk", Price = 17, Description = "a cup of fresh milk" }
        };
        public IEnumerable<Product> Get()
        {
            return products;
        }
    }
}
