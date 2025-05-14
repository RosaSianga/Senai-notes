using API_Notes.Models;

namespace API_Notes.Interfaces
{
    public interface INotaRepository
    {
        List<Nota> ListarTodos();

        Nota BuscarPorID(int id);

        void CadastrarNota(Nota nota);

        void AtualizarNota(int id, Nota nota);
    }
}
