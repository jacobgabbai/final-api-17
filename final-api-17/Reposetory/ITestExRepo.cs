using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public interface ITestExRepo
    {
        List<TestEx1> GetByName1(string tname);
        int GetIdName(string sname, string stest);
        List<TestEx1> GetTestExes(string i);
        TestEx1 PostTestEx(TestExDto t);
    }
}