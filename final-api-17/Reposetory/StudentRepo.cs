using final_api_17;

namespace api_final_17.Reposetory
{
    public class StudentRepo : IStudentRepo
    {
        public Student GetStuName(string p)
        {

            Final888Context T = new Final888Context();
            Student? student = new Student();
            Student? student1 = new Student();

            List<Student> S = new List<Student>();

            student = T.Students.Where(r => r.Email == p).SingleOrDefault();
            if (student != null)
            {
                return student;
            }
            else { return student1; }
        }
    }
}
