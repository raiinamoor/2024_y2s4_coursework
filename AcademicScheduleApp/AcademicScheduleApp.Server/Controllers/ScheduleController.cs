using AcademicScheduleApp.Model;
using AcademicScheduleApp.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace AcademicScheduleApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ScheduleController : ControllerBase
    {
        ScheduleContext _context;
        JsonSerializerOptions jsonOptions = new JsonSerializerOptions()
        {
            PropertyNameCaseInsensitive = true
        };
        
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
        public IEnumerable<Class> GetAllClasses()
        {
            return _context.Classes
                .Include(c => c.Subject)
                .Include(c => c.StudentGroup)
                .ToArray();
        }
        [HttpGet]
        public IEnumerable<StudentGroup> GetAllGroups()
        {
            return _context.StudentGroups.ToArray();
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
        [HttpPost(Name="PostClass")]
        public IActionResult PostClass([FromBody] JsonValue value)
        {
            Class classToAdd;

            if (value is null)
                return BadRequest("Json value is null");

            try
            {
                classToAdd = JsonSerializer.Deserialize<Class>(value, jsonOptions)!;
            }
            catch
            {
                return BadRequest("Failed to deserialize");
            }

            _context.Classes.Attach(classToAdd);
            _context.SaveChanges();

            return Ok();
        }
        [HttpDelete]
        public IActionResult DeleteClass([FromBody] JsonValue value)
        {
            Class classToRemove;

            if (value is null)
                return BadRequest("Json value is null");

            try
            {
                classToRemove = JsonSerializer.Deserialize<Class>(value, jsonOptions)!;
            }
            catch
            {
                return BadRequest("Failed to deserialize");
            }

            try
            {
                _context.Remove(_context.Classes
                                .First(c => c.Id == classToRemove.Id));
                _context.SaveChanges(); 
            }
            catch
            {
                return NotFound();
            }

            return Ok();
        }
    }
}
