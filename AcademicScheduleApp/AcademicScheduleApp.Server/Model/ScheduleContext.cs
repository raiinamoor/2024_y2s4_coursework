using Microsoft.EntityFrameworkCore;
using AcademicScheduleApp.Model.Entities;

namespace AcademicScheduleApp.Model
{
    public class ScheduleContext : DbContext
    {
        public DbSet<StudentGroup> StudentGroups { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Professor> Professors { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Classroom> Classrooms { get; set; }
        public DbSet<Class> Classes { get; set; }

        public ScheduleContext(DbContextOptions<ScheduleContext> options) : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
