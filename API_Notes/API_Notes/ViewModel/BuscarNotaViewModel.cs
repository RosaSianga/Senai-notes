namespace API_Notes.ViewModel;

public class BuscarNotaViewModel
{
    public string? Titulo { get; set; }
    public string? Conteudo { get; set; }
    public DateTime? DataCriacao { get; set; }
    public DateTime? DataEdicao { get; set; }

    public List<string>? Tags { get; set; }
}