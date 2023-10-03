using final_api_17;

namespace api_final_17.Reposetory
{
    public class AnswerRepo : IAnswerRepo
    {

        public Answer AnswerPut(AnswerDto1 v)
        {
            Final888Context T = new Final888Context();
            List<Answer>? R = T.Answers.ToList();
            Answer? tt = new Answer();
            if (R.Count == 0)
            {
                tt.Id = 1;

            }
            else
            {
                long e = R.Max(a => a.Id);
                tt.Id = e + 1;
            }
            //tt.Id = v.Id;
            tt.Answer1 = v.Answer1;
            tt.QuestionIdRef = v.QuestionIdRef;
            tt.RightWorng = v.RightWorng;

            T.Answers.Add(tt);
            T.SaveChanges();
            return tt;
        }

        public IEnumerable<Answer> GetAnswer()
        {
            Final888Context f = new Final888Context();

            IEnumerable<Answer> T = new List<Answer>();

            T = f.Answers.ToList();

            return T;
        }

        public List<Answer> GetAnswer1(int j)
        {

            Final888Context f = new Final888Context();

            List<Answer> T = new List<Answer>();

            List<Answer> B = new List<Answer>();

            T = f.Answers.ToList();
            B = T.Where(r => r.QuestionIdRef == j).ToList();

            return B;

        }
        public void TAnswer(AnswerDto1 o)
        {
            Final888Context T = new Final888Context();
            List<Answer>? R = T.Answers.ToList();

            Answer tt = new Answer();
            if (R.Count == 0)
            {
                tt.Id = 1;

            }
            else
            {
                long e = R.Max(a => a.Id);
                tt.Id = e + 1;
            }
            Test? rr = new Test();
            tt.Answer1 = o.Answer1;
            tt.QuestionIdRef = o.QuestionIdRef;
            tt.RightWorng = o.RightWorng;
            T.Answers.Add(tt);
            T.SaveChanges();
        }
    }
}
