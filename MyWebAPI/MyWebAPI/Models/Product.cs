using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MyWebAPI.Models
{
    public class Product
    {
        [JsonPropertyName("id")] public int Id { get; set; }
        [JsonPropertyName("name")] public string ProdName { get; set; }
        [JsonPropertyName("price")] public double Price { get; set; }
        [JsonPropertyName("description")] public string Description { get; set; }
    }
}
