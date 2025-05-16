namespace API_Notes.DTO
{
    public class CadastrarNotaDTO
    {
        public string? Titulo { get; set; }
        public string? Conteudo { get; set; }
        public DateTime? DataCriacao { get; set; }
        public bool? Arquivada { get; set; }
        
        //Tags
        public string? Tags { get; set; }

        // Usuario
        public int IdUsuario { get; set; }

    }
}
