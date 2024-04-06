namespace AcademicScheduleApp.Model.Entities
{
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string? LastName { get; set; }

        public int StudentGroupId { get; set; }
        public StudentGroup StudentGroup { get; set; }
    }
}
