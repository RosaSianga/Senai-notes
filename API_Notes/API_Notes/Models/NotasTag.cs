.using System;
using System.Collections.Generic;

namespace API_Notes.Models;

public partial class NotasTag
{
    public int IdNotasTag { get; set; }

    public int? IdNotas { get; set; }

    public int? IdTag { get; set; }

    public virtual Nota? IdNotasNavigation { get; set; }

    public virtual Tag? IdTagNavigation { get; set; }
}
