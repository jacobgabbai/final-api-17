using final_api_17;

namespace api_final_17.Reposetory
{
    public interface ITestRepo
    {
        Test PutTest1(Test2Dto p);
        List<Test> T2();
        Test T21(int i, string v);
        Test T22(string v);
        
        Test T33(int v);
        Test TB1(Test1 z);
        int TestDelete(int i);
    }
}