using AcademicScheduleApp.Model;
using AcademicScheduleApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace AcademicScheduleApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
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
        [HttpGet]
        public Dictionary<string, IEnumerable<object>> GetData()
        {
            var groups = _context.StudentGroups.ToArray();
            var subjects = _context.Subjects.ToArray();
            var professors = _context.Professors.ToArray();
            var classrooms = _context.Classrooms.ToArray();

            Dictionary<string, IEnumerable<object>> data = new()
            {
                { nameof(groups), groups },
                { nameof(subjects), subjects },
                { nameof(professors), professors },
                { nameof(classrooms), classrooms },
            };

            return data;
        }
    }
}
