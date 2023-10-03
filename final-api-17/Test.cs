using System;
using System.Collections.Generic;

namespace final_api_17;

public partial class Test
{
    public long Id { get; set; }

    public string TestName { get; set; } = null!;

    public string TestDate { get; set; } = null!;

    public string StartTime { get; set; } = null!;

    public string TotalTime { get; set; } = null!;

    public long Random { get; set; }

    public long TeacherIdRef { get; set; }

    public virtual ICollection<Question> Questions { get; set; } = new List<Question>();

    public virtual Teacher TeacherIdRefNavigation { get; set; } = null!;
}
