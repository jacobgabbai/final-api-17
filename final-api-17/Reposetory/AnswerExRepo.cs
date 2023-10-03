using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public class AnswerExRepo : IAnswerExRepo
    {
        public AnswerEx1 PostAnsEx(AnswerExDto a)
        {
            Final888Context F = new Final888Context();

            List<AnswerEx1> A = new List<AnswerEx1>();
            AnswerEx1 aa = new AnswerEx1();
            A = F.AnswerEx1s.ToList();
            if (A.Count == 0)
            {
                aa.Id = 1;

            }
            else
            {
                long e = A.Max(a => a.Id);
                aa.Id = e + 1;
            }
            aa.QuestionEx1IdRef = a.QuestionEx1IdRef;
            aa.RightAnswer = a.RightAnswer;
            aa.WorngAnswer = a.WorngAnswer;
            F.AnswerEx1s.Add(aa);
            F.SaveChanges();

            return aa;
        }

        public AnswerEx1 GetAnswer1(int i)
        {
            Final888Context F = new Final888Context();

            List<AnswerEx1> A = new List<AnswerEx1>();
            AnswerEx1? aa = new AnswerEx1();
            aa= F.AnswerEx1s.Where(r=>r.QuestionEx1IdRef==i).SingleOrDefault();
            if (aa != null)
            {
                return aa;
            }
            else { return aa= new AnswerEx1();}
        }
    }
}
