using API_Notes.DTO;
using API_Notes.Models;
using API_Notes.ViemModel;

namespace API_Notes.Interfaces
{
    public interface ITagRepository
    {
        List<ListarTagsViewModel> ListarTodos(int userId);

        List<RetornoTagViewModel> BuscarTag(int tagId, int userId);

        //Tag BuscarPorId(int id);

        void Atualizar(int id, Tag tag);
        
        void Deletar(int id);
        
    }

}
