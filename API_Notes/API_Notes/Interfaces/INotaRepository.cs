using API_Notes.DTO;
using API_Notes.Models;
using API_Notes.ViewModel;

namespace API_Notes.Interfaces
{
    public interface INotaRepository
    {
        List<ListarNotasViewModel> ListarTodos(int id);

        Nota BuscarPorID(int id);

        void CadastrarNota(CadastrarNotaDTO nota);

        void BuscarNota(int idNota);

        void AtualizarNota(int id, Nota nota);
    }
}
