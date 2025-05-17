using API_Notes.DTO;
using API_Notes.Models;
using API_Notes.ViemModel;

namespace API_Notes.Interfaces
{
    public interface ITagRepository
    {
        List<ListarTagsViewModel> ListarTodos(int id);


        Tag BuscarPorId(int id);

        void Cadastrar(CadastrarTagDTO tag);

        void Atualizar(int id, Tag tag);

        void Deletar(int id);

    }

}
