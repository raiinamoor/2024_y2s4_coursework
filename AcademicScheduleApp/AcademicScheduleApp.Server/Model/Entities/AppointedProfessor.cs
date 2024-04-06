namespace AcademicScheduleApp.Model.Entities
{
    public class AppointedProfessor
    {
        public int Id { get; set; }

        public int ClassId { get; set; }
        public Class Class { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }
    }
}
