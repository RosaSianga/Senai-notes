using API_Notes.DTO;
using API_Notes.Models;

namespace API_Notes.Interfaces
{
    public interface ITagRepository
    {
        List<Tag> ListarTodos();
        Tag BuscarPorId(int id);

        void Cadastrar(CadastrarTagDTO tag);

        void Atualizar(int id, Tag tag);

        void Deletar(int id);

    }

}
