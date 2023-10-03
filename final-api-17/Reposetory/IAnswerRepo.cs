using final_api_17;

namespace api_final_17.Reposetory
{
    public interface IAnswerRepo
    {
        Answer AnswerPut(AnswerDto1 v);
        IEnumerable<Answer> GetAnswer();
        List<Answer> GetAnswer1(int j);
        void TAnswer(AnswerDto1 o);
    }
}