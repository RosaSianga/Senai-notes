using API_Notes.DTO;
using API_Notes.Models;

namespace API_Notes.Interfaces
{
    public interface INotaRepository
    {
        List<Nota> ListarTodos();

        Nota BuscarPorID(int id);

        void CadastrarNota(CadastrarNotaDTO nota);

        void AtualizarNota(int id, Nota nota);
    }
}
