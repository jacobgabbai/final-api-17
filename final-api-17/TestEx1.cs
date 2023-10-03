using System;
using System.Collections.Generic;

namespace final_api_17;

public partial class TestEx1
{
    public long Id { get; set; }

    public string TestName { get; set; } = null!;

    public string? StuName { get; set; }

    public string? StuId { get; set; }

    public string? Grade { get; set; }

    public virtual ICollection<QuestionEx> QuestionExes { get; set; } = new List<QuestionEx>();
}
