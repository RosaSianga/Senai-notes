    using System;
using System.Collections.Generic;

namespace API_Notes.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public DateTime? DataCriacao { get; set; }

    public string? Nome { get; set; }

    public virtual ICollection<ConfiguracaoUsuario> ConfiguracaoUsuarios { get; set; } = new List<ConfiguracaoUsuario>();

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();

    public virtual ICollection<Tag> Tags { get; set; } = new List<Tag>();
}
