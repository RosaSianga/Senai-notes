namespace API_Notes.DTO
{
    public class CadastrarUsuarioDTO
    {
        public int IdUsuario { get; set; }

        public string Email { get; set; } = null!;

        public string Senha { get; set; } = null!;

        public DateTime? DataCriacao { get; set; }
    }
}
