using System;
using System.Collections.Generic;

namespace final_api_17;

public partial class Question
{
    public long Id { get; set; }

    public long TestIdRef { get; set; }

    public string Questions { get; set; } = null!;

    public string? Picture { get; set; }

    public virtual ICollection<Answer> Answers { get; set; } = new List<Answer>();

    public virtual Test TestIdRefNavigation { get; set; } = null!;
}
