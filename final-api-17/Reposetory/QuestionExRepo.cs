using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public class QuestionExRepo : IQuestionExRepo
    {
        public QuestionEx PostQueEx(QuestionExDto d)
        {
            Final888Context F = new Final888Context();
            List<QuestionEx> q = new List<QuestionEx>();
            QuestionEx qq = new QuestionEx();
            q = F.QuestionExes.ToList();
            if (q.Count == 0)
            {
                qq.Id = 1;

            }
            else
            {
                long e = q.Max(a => a.Id);
                qq.Id = e + 1;
            }
            qq.TestEx1IdRef = d.TestEx1IdRef;
            qq.Questions = d.Questions;
            F.QuestionExes.Add(qq);
            F.SaveChanges();
            return qq;

        }



        public List<QuestionEx> GetQuestion3(int i)
        {

            Final888Context F = new Final888Context();
            List<QuestionEx> q = new List<QuestionEx>();
            QuestionEx qq = new QuestionEx();
            q = F.QuestionExes.Where(r => r.TestEx1IdRef == i).ToList();

            return q;

        }
    }
}
