using System;
using System.Collections.Generic;

namespace API_Notes.Models;

public partial class Nota
{
    public int IdNotas { get; set; }

    public int? IdUsuario { get; set; }

    public string? Titulo { get; set; }

    public string? Conteudo { get; set; }

    public DateTime? DataCriacao { get; set; }

    public DateTime? DataEdicao { get; set; }

    public bool? Arquivada { get; set; }

    public virtual Usuario? IdUsuarioNavigation { get; set; }

    public virtual ICollection<NotasTag> NotasTags { get; set; } = new List<NotasTag>();
}
