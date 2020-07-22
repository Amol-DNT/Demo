using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyWebAPI.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MyWebAPI
{
    internal class JwtManager
    {
        public static string GenerateJWT(LoginUser user, IConfiguration config)        
        {
            string encodedToken = string.Empty;

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWT_Info:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),                
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(issuer: config["JWT_Info:Issuer"], audience: config["JWT_Info:Issuer"], claims: claims, expires: DateTime.Now.AddMinutes(60), signingCredentials: credentials);
            encodedToken = new JwtSecurityTokenHandler().WriteToken(token);

            return encodedToken;            
        }
      
    }
}
