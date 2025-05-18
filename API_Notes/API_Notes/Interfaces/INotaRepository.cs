using API_Notes.DTO;
using API_Notes.Models;
using API_Notes.ViewModel;

namespace API_Notes.Interfaces
{
    public interface INotaRepository
    {
        List<ListarNotasViewModel> ListarTodos(int id);
        public BuscarNotaViewModel BuscarNota(int idNota);
        void CadastrarNota(CadastrarNotaDTO nota);

        Nota BuscarPorID(int id);



        void AtualizarNota(int id, Nota nota);
    }
}
