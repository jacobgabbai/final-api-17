using final_api_17;

namespace api_final_17.Reposetory
{
    public class TestRepo : ITestRepo
    {
        public Test TB1(Test1 z)
        {
            Final888Context T = new Final888Context();
            List<Test>? R = T.Tests.ToList();
            Test? tt = new Test();
            // int f = R.Count() ;
            Test1? rr = new Test1();

            int i = 1;

            if (R.Count != 0)
            {
                foreach (Test a in R)
                {
                    if (a.Id >= i)
                    {
                        i += 1;
                    }

                }
            }
            else { i = 1; }
            tt.Id = i;

            tt.TestName = z.TestName;
            //  rr.TestName = s;
            tt.TestDate = z.TestDate;
            // rr.TestDate = s1;

            tt.TotalTime = z.TotalTime;
            //   rr.TotalTime = i1;
            tt.StartTime = z.StartTime;
            //  rr.StartTime = s2;
            tt.Random = z.Random;
            //   rr.Random = i2;
            tt.TeacherIdRef = z.TeacherIdRef;
            // rr.TeacherIdRef = i3;

            T.Tests.Add(tt);
            T.SaveChanges();

            return tt;



        }


        public Test PutTest1(Test2Dto p)

        {
            Test test = new Test();
            Test test1 = new Test();
            List<Test> T = new List<Test>();

            Final888Context f = new Final888Context();

            T = f.Tests.ToList();

            foreach (Test a in T)
            {
                if (a.Id == p.Id)
                {
                    test1 = a;
                    test.Id = p.Id;
                    test.TestName = p.TestName;
                    test.TestDate = p.TestDate;
                    test.StartTime = p.StartTime;
                    test.TotalTime = p.TotalTime;
                    test.Random = p.Random;
                    test.TeacherIdRef = p.TeacherIdRef;




                }
            }
            f.Tests.Remove(test1);
            f.Tests.Add(test);

            f.SaveChanges();
            return test;
        }



        public List<Test> T2()
        {
            Final888Context T = new Final888Context();
            Test F = new Test();
            List<Test> Y = T.Tests.ToList();



            return Y;

        }


        public Test T21(int i, string v)
        {
            Final888Context T = new Final888Context();
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            IEnumerable<Test> j = new List<Test>();
            List<Test> Y = T.Tests.ToList();
            j = Y.Where(e => e.TestName == v);

            F = j.Where(e => e.TeacherIdRef == i).FirstOrDefault();

            return F;

        }


        public Test T22(string v)
        {
            Final888Context T = new Final888Context();
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            Test? Y = T.Tests.Where(r => r.TestName == v).FirstOrDefault();

            if (Y != null)
            {
                return Y;
            }
            else {

                F.TestName = "empty";
                return F; }

        }

        public Test T33(int v)
        {
            Final888Context T = new Final888Context();
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            Test? Y = T.Tests.Where(r => r.Id == v).FirstOrDefault();
            return Y;

        }

        public int TestDelete(int i)
        {
            Final888Context T = new Final888Context();
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            Test? Y = T.Tests.Where(r => r.Id == i).FirstOrDefault();
            if (Y != null)
            {
                T.Tests.Remove(Y);
                T.SaveChanges();
                int y = 1;
                return y;
            }
            else return 0;
        }

    }
}
