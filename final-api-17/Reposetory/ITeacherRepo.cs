using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public interface ITeacherRepo
    {
        public List<Teacher> TG();
        public Teacher T1(string a);

        //public Teacher TA1(string a, string b);

        public Teacher PostT(TeacherDto t);
    }
}
