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
        public string Type { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        TimeOnly timeBegin = TimeOnly.MinValue;
        public TimeOnly TimeBegin {
            get => timeBegin; 
            set
            {
                if (value < new TimeOnly(9, 0) || value > new TimeOnly(21, 0))
                    throw new Exception("Time value must be between 9:00 and 21:00");

                if (value >= timeEnd)
                    throw new Exception("TimeBegin value must be less than TimeEnd");

                timeBegin = value;
            }
        }
        TimeOnly timeEnd = TimeOnly.MaxValue;
        public TimeOnly TimeEnd
        {
            get => timeEnd;
            set
            {
                if (value < new TimeOnly(9, 0) || value > new TimeOnly(21, 0))
                    throw new Exception("Time value must be between 9:00 and 21:00");

                if (value <= timeBegin)
                    throw new Exception("TimeEnd value must be greater than TimeBegin");
                
                timeEnd = value;
            }
        }
        DateOnly dateBegin = DateOnly.MinValue;
        public DateOnly DateBegin {
            get => dateBegin; 
            set
            {
                if (value >= dateEnd)
                    throw new Exception("DateBegin value must be less than DateEnd");

                dateBegin = value;
            }
        }
        DateOnly dateEnd = DateOnly.MaxValue;
        public DateOnly DateEnd { 
            get => dateEnd; 
            set
            {
                if (value <= dateBegin)
                    throw new Exception("DateEnd value must be greater than DateBegin");

                dateEnd = value;
            }
        }

        public int StudentGroupId { get; set; }
        public StudentGroup StudentGroup { get; set; }
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }
        public int ClassroomId { get; set; }
        public Classroom Classroom { get; set; }
        public List<Professor> Professors { get; set; }
    }
}
