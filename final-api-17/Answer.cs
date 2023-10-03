using System;
using System.Collections.Generic;

namespace final_api_17;

public partial class Answer
{
    public long Id { get; set; }

    public string Answer1 { get; set; } = null!;

    public long QuestionIdRef { get; set; }

    public double RightWorng { get; set; }

    public virtual Question QuestionIdRefNavigation { get; set; } = null!;
}
