using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademicScheduleApp.Model.Entities
{
    public class Class
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        public TimeOnly TimeBegin { get; set; }
        public TimeOnly TimeEnd { get; set; }
        public DateOnly DateBegin { get; set; }
        public DateOnly DateEnd { get; set; }

        public int StudentGroupId { get; set; }
        public StudentGroup StudentGroup { get; set; }
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }
        public int ClassroomId { get; set; }
        public Classroom Classroom { get; set; }
        public List<Professor> Professors { get; set; }
    }
}
