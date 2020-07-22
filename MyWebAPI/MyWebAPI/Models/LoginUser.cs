using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebAPI.Models
{
    //++
    public class LoginUser
    {
        [Key]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public DateTime DOB { get; set; }
        public string Email { get; set; }                                     
    }

    public class LoginUserDbModel: DbContext
    {
        public LoginUserDbModel(DbContextOptions<LoginUserDbModel> options):base(options)
        {
        }

        public virtual DbSet<LoginUser> LoginUsers { get; set; }
    }
}
