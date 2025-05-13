using System;
using System.Collections.Generic;

namespace API_Notes.Models;

public partial class Tag
{
    public int IdTag { get; set; }

    public int? IdUsuario { get; set; }

    public string Nome { get; set; } = null!;

    public virtual Usuario? IdUsuarioNavigation { get; set; }

    public virtual ICollection<NotasTag> NotasTags { get; set; } = new List<NotasTag>();
}
