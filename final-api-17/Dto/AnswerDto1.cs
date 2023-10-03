namespace api_final_17
{
    public class AnswerDto1
    {
        public long Id { get; set; }

        public string Answer1 { get; set; } = null!;

        public long QuestionIdRef { get; set; }

        public double RightWorng { get; set; }
    }
}
