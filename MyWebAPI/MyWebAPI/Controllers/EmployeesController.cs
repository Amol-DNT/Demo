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
    public class EmployeesController : ControllerBase
    {
        static List<Employee> employees = new List<Employee>
        {
            new Employee{ Id = 101, Name = "Alex", Dept = "HR", Salary =3400 },
            new Employee{ Id = 102, Name = "David", Dept = "Admin", Salary =3500 },
            new Employee{ Id = 103, Name = "Amol", Dept = "HR", Salary =3300 }
        };

        private IEnumerable<Employee> GetEmployees()
        {
            return employees;
        }

        [HttpGet]
        public IActionResult Get()
        {
            ObjectResult result = null;
            try
            {
                var employees = GetEmployees();
                result = StatusCode(200, employees);
            }
            catch (Exception ex)
            {
                result = StatusCode(500, new { ErrorMessage = ex.Message, StackTrace = ex.StackTrace });                
            }
            return result;
        }

        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            ObjectResult result = null;
            try
            {
                var emp = employees.SingleOrDefault(e => e.Id == id);
                result = StatusCode(200, emp);
            }
            catch (Exception ex)
            {
                result = StatusCode(500, new { ErrorMessage = ex.Message, StackTrace = ex.StackTrace });
            }
            return result;            
        }

        [HttpPost]
        public IActionResult Post(Employee employee)
        {
            ObjectResult result = null;
            try
            {
                if(employees.Any(e => e.Id == employee.Id))
                {
                    result = StatusCode(500, $"Fail to Insert Employee with Id: {employee.Id}, Employee with same Id already exist in records!");
                }
                else
                {
                    employees.Add(employee);
                    result = StatusCode(200, employee);
                }                
            }
            catch (Exception ex)
            {
                result = StatusCode(500, new { ErrorMessage = ex.Message, StackTrace = ex.StackTrace });
            }
            return result;
        }

        [HttpPut()]
        public IActionResult Put(Employee employee)
        {
            ObjectResult result = null;
            try
            {
                var emp = employees.SingleOrDefault(e => e.Id == employee.Id);
                if (emp != null)
                {
                    emp.Name = employee.Name;
                    emp.Dept = employee.Dept;
                    emp.Salary = employee.Salary;

                    result = StatusCode(200, emp);
                }
                else
                {                
                    result = StatusCode(404, $"Employee with Id: {employee.Id} Not Found in Records!");
                }                
            }
            catch (Exception ex)
            {
                result = StatusCode(500, new { ErrorMessage = ex.Message, StackTrace = ex.StackTrace });
            }
            return result;
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            ObjectResult result = null;
            try
            {
                var emp = employees.SingleOrDefault(e => e.Id == id);
                if (emp != null)
                {
                    employees.Remove(emp);
                    result = StatusCode(200, emp);
                }
                else
                {
                    result = StatusCode(404, $"Employee with Id: {id} Not Found in Records!");
                }
            }
            catch (Exception ex)
            {
                result = StatusCode(500, new { ErrorMessage = ex.Message, StackTrace = ex.StackTrace });
            }
            return result;
        }
    }
}