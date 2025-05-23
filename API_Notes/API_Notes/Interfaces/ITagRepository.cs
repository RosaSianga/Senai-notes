using API_Notes.DTO;
using API_Notes.Models;
using API_Notes.ViemModel;
using API_Notes.ViewModel;

namespace API_Notes.Interfaces
{
    public interface ITagRepository
    {
        List<ListarTagsViewModel> ListarTodos(int userId);

        List<RetornoTagViewModel> BuscarTag(int tagId, int userId);
        
    }

}
