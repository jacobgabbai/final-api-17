using final_api_17;

namespace api_final_17.Reposetory
{
    public interface IQuaestionRepo
    {
        Question PostQuestion(QuestionDto3 v);
        int QuestionDelete(int id);
        List<Question> T3();
        List<Question> T31(int r);
       
        Question TQ1(QuestionDto3 v);
        Question TQ2(QuestionDto3 v);
    }
}