using final_api_17;

namespace api_final_17.Reposetory
{
    public class QuaestionRepo : IQuaestionRepo
    {
        public List<Question> T3()
        {
            Final888Context T = new Final888Context();
            Question F = new Question();
            List<Question> Y = T.Questions.ToList();



            return Y;

        }
        public List<Question> T31(int r)
        {
            Final888Context T = new Final888Context();
            Question F = new Question();
            List<Question> Y = T.Questions.ToList();
            List<Question> U = Y.Where(f => f.TestIdRef == r).ToList();

            return U;

        }

        public Question TQ1(QuestionDto3 v)
        {
            Final888Context T = new Final888Context();
            List<Question>? R = T.Questions.ToList();
            Question? tt = new Question();
            Test? rr = new Test();

            int i = 1;

            if (R != null)
            {
                foreach (Question a in R)
                {
                    if (a.Id >= i)
                    {
                        i += 1;
                    }

                }
            }
            tt.Id = i;
            tt.Picture = v.Picture;
            tt.TestIdRef = v.TestIdRef;
            tt.Questions = v.Questions;
            T.Questions.Add(tt);
            T.SaveChanges();
            return tt;
        }


        public int QuestionDelete(int id) {
            Final888Context T = new Final888Context();
            List<Question>? R = T.Questions.ToList();

            Question? tt = new Question();
            tt = R.Where(x => x.Id == id).SingleOrDefault();
            if (tt != null)
            {
                T.Questions.Remove(tt);
                T.SaveChanges();
                return 1;
            }

            else return 0;

        }



        public Question TQ2(QuestionDto3 v)
        {
            Final888Context T = new Final888Context();
            List<Question>? R = T.Questions.ToList();

            Question? tt = new Question();
            tt = R.Where(x => x.Id == v.Id).SingleOrDefault();
            // int f = R.Count() ;
            // Test? rr = new Test();
            if (tt != null)
            {
                T.Questions.Remove(tt);

                T.SaveChanges();

                tt.Id = v.Id;
                tt.TestIdRef = v.TestIdRef;
                tt.Questions = v.Questions;
                if (v.Questions == "")
                {
                    tt.Picture = v.Picture;
                }
                else { v.Picture = null; }
            }
            T.Questions.Add(tt);
            T.SaveChanges();
            return tt;

        }

        public Question PostQuestion(QuestionDto3 v)
        {
            Final888Context T = new Final888Context();
            List<Question>? R = T.Questions.ToList();

            Question? tt = new Question();
            long i = 0;
            if (R.Count > 0)
            {
                long e = R.Max(r => r.Id);
                 i = 1 + e;
            }
            else {  i=1; }
            tt.Id = i;
            tt.TestIdRef = v.TestIdRef;
            tt.Questions = v.Questions;
            tt.Picture= v.Picture;

            T.Questions.Add(tt);
            T.SaveChanges();    
            return tt;


        }
    }
}
