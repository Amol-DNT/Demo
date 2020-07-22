using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyWebAPI.Models;

namespace MyWebAPI.Controllers
{
    //++
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration config;
        private readonly LoginUserDbModel loginUserDbModel;

        public LoginController(IConfiguration config, LoginUserDbModel loginUserDbModel)
        {
            this.config = config;
            this.loginUserDbModel = loginUserDbModel;
        }
        
        [HttpPost()]
        public object Login(LoginUser loginUser)
        {
            ////IActionResult response = Unauthorized();
            //string tokenInfo = string.Empty;
            //try
            //{
            //    var user = AuthenticateUser(loginUser.UserName, loginUser.Password);
            //    if (user != null)
            //    {
            //        tokenInfo = JwtManager.GenerateJWT(user, config);
            //        //response = Ok(new { tokenInfo });
            //    }
            //    else
            //    {
            //        throw new Exception("User-Name or Password is invalid!");
            //    }
            //}
            //catch (Exception ex)
            //{
            //    return StatusCode(500, new { ErrorMessage = ex.Message, StackTrace = ex.StackTrace });
            //}

            //return tokenInfo;

            object result = Unauthorized(null);
            try
            {
                var user = AuthenticateUser(loginUser.UserName, loginUser.Password);
                if (user != null)
                {
                    string tokenInfo = JwtManager.GenerateJWT(user, config);
                    //result = StatusCode(200, tokenInfo);
                    result = tokenInfo;
                }
                else
                {
                    throw new Exception("User-Name or Password is invalid!");
                }
            }
            catch (Exception ex)
            {
                result = StatusCode(500, new { ErrorMessage = ex.Message, StackTrace = ex.StackTrace });
            }
            return new { Result = result };
            //return result;
        }

        [HttpPost("Register")]
        public IActionResult Register(LoginUser loginUser)
        {            
            CreateUser(loginUser);
            return Ok();
        }

        [Authorize]
        [HttpGet]
        [Route("~/api/[controller]/Greeting")]
        public string GetLoginGreeting(string greetingBase)
        {
            ClaimsIdentity claimsIdentity = HttpContext.User.Identity as ClaimsIdentity;                        
            var userName = claimsIdentity.Claims.ToList()[0].Value;
            return greetingBase + " "+ userName;
        }

        public LoginUser AuthenticateUser(string userName, string password)
        {
            try
            {
                LoginUser loginUser = loginUserDbModel.LoginUsers.SingleOrDefault(lu => lu.UserName.Equals(userName));
                if (loginUser != null && loginUser.Password.Equals(password))
                {
                    return loginUser;
                }
                throw new UnauthorizedAccessException("User-Name or Password is invalid!");
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void CreateUser(LoginUser loginUser)
        {
            loginUserDbModel.LoginUsers.Add(loginUser);
            loginUserDbModel.SaveChanges();
        }
    }
}
