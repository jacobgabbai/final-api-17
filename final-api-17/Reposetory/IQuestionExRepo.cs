using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public interface IQuestionExRepo
    {
        List<QuestionEx> GetQuestion3(int i);
        QuestionEx PostQueEx(QuestionExDto d);
    }
}