namespace API_Notes.ViewModel;

public class PesquisaViewModel
{
    public int IdNotas { get; set; }
    public string? Titulo { get; set; }
    public DateTime? DataCriacao { get; set; }
    public DateTime? DataEdicao { get; set; }
    
    public string? ImgUrl { get; set; }
    
    public List<ListarTagsViewModel>? Tags { get; set; }
}