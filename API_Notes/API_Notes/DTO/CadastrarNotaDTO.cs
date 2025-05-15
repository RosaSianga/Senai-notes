namespace API_Notes.DTO
{
    public class CadastrarNotaDTO
    {
        public string? Titulo { get; set; }
        public string? Conteudo { get; set; }
        public DateTime? DataCriacao { get; set; }
        public bool? Arquivada { get; set; }
        
        //outro teste, relacao tabela depende dele
        public int IdNotas { get; set; }
        
        //teste
        public string? Tags { get; set; }

    }
}
