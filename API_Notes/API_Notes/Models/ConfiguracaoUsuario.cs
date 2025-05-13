using System;
using System.Collections.Generic;

namespace API_Notes.Models;

public partial class ConfiguracaoUsuario
{
    public int IdConfig { get; set; }

    public int? IdUsuario { get; set; }

    public string? Fonte { get; set; }

    public bool? Tema { get; set; }

    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
