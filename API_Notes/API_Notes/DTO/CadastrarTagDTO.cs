using API_Notes.Models;

namespace API_Notes.DTO
{
    public class CadastrarTagDTO
    {
        public int IdTag { get; set; }

        public int? IdUsuario { get; set; }

        public string Nome { get; set; } = null!;

        public virtual Usuario? IdUsuarioNavigation { get; set; }

        public virtual ICollection<NotasTag> NotasTags { get; set; } = new List<NotasTag>();
    }
}
