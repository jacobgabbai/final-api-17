using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public interface IAnswerExRepo
    {
        
        AnswerEx1 GetAnswer1(int i);
        AnswerEx1 PostAnsEx(AnswerExDto a);
    }
}