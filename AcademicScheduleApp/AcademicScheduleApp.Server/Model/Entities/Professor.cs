using System.Text.Json.Serialization;

namespace AcademicScheduleApp.Model.Entities
{
    public class Professor
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string? LastName { get; set; }

        [JsonIgnore]
        public List<Class> Classes { get; set; }
    }
}
