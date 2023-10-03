using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public class TestExRepo : ITestExRepo
    {
        public TestEx1 PostTestEx(TestExDto t)
        {

            List<TestEx1> testEx1s = new List<TestEx1>();
            TestEx1 tt = new TestEx1();
            Final888Context F = new Final888Context();
            testEx1s = F.TestEx1s.ToList();
            if (testEx1s.Count == 0)
            {
                tt.Id = 1;

            }
            else
            {
                long e = testEx1s.Max(a => a.Id);
                tt.Id = e + 1;
            }

            tt.StuName = t.StuName;
            tt.StuId = t.StuId;
            tt.TestName = t.TestName;
            tt.Grade = t.Grade;

            F.TestEx1s.Add(tt);
            F.SaveChanges();

            return tt;

        }


        public List<TestEx1> GetTestExes(string i)
        {
            List<TestEx1> testEx1s = new List<TestEx1>();
            TestEx1 tt = new TestEx1();
            Final888Context F = new Final888Context();

            testEx1s= F.TestEx1s.Where(r=>r.StuId==i).ToList();
            return testEx1s;


        }

        public List<TestEx1> GetByName1(string tname)
        {
            List<TestEx1>? testEx1s = new List<TestEx1>();
            TestEx1? tt = new TestEx1();
            Final888Context F = new Final888Context();

            //testEx1s = F.TestEx1s.Where(r => r.StuName == sname).ToList();
            return testEx1s = F.TestEx1s.Where(r => r.TestName == tname).ToList();


        }

        public int GetIdName(string sname, string stest)
        {
            List<TestEx1>? testEx1s = new List<TestEx1>();
            TestEx1? tt = new TestEx1();
            Final888Context F = new Final888Context();

            testEx1s = F.TestEx1s.Where(r => r.StuName == sname).ToList();

            if (testEx1s.Count > 0)
            {
                tt = testEx1s.Where(r => r.TestName == stest).FirstOrDefault();
                if (tt != null)
                {

                    return 1;
                }
                else { return 0; }

            }

            else { return 0; }

        }
    }
}
