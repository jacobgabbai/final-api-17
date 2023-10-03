using System;
using System.Collections.Generic;

namespace final_api_17;

public partial class Teacher
{
    public long Id { get; set; }

    public string TeacherName { get; set; } = null!;

    public string? Email { get; set; }

    public string? TeacherId { get; set; }

    public string? PhoneN { get; set; }

    public virtual ICollection<Test> Tests { get; set; } = new List<Test>();
}
