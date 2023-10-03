using System;
using System.Collections.Generic;

namespace final_api_17;

public partial class AnswerEx1
{
    public long Id { get; set; }

    public string? RightAnswer { get; set; }

    public string? WorngAnswer { get; set; }

    public long QuestionEx1IdRef { get; set; }

    public virtual QuestionEx QuestionEx1IdRefNavigation { get; set; } = null!;
}
