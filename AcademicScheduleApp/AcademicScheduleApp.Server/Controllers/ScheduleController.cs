using AcademicScheduleApp.Model;
using AcademicScheduleApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace AcademicScheduleApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScheduleController : ControllerBase
    {
        ScheduleContext _context;
        public ScheduleController(ScheduleContext context)
        {
            _context = context;
        }
        [HttpGet(Name="GetClasses")]
        public IEnumerable<Class> GetClasses(string group = "221-3710")
        {
            var classes = _context.Classes
                .Where(c => c.StudentGroup.Number == group)
                .Where(c => c.DateBegin <= DateOnly.FromDateTime(DateTime.Now) &&
                            c.DateEnd >= DateOnly.FromDateTime(DateTime.Now))
                .Include(c => c.Subject)
                .Include(c => c.Classroom)
                .Include(c => c.Professors)
                .ToArray();

            return classes;
        }
    }
}
