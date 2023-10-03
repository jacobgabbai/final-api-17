using System;
using System.Collections.Generic;

namespace final_api_17;

public partial class QuestionEx
{
    public long Id { get; set; }

    public long TestEx1IdRef { get; set; }

    public string Questions { get; set; } = null!;

    public virtual ICollection<AnswerEx1> AnswerEx1s { get; set; } = new List<AnswerEx1>();

    public virtual TestEx1 TestEx1IdRefNavigation { get; set; } = null!;
}
