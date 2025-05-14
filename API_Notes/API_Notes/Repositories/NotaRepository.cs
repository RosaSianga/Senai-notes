using API_Notes.Context;
using API_Notes.Interfaces;
using API_Notes.Models;

namespace API_Notes.Repositories
{
    public class NotaRepository : INotaRepository
    {
        private readonly SenaiNotesContext _context;

        public NotaRepository(SenaiNotesContext context)
        {
            _context = context;
        }

        public void AtualizarNota(int id, Nota nota)
        {
            throw new NotImplementedException();
        }

        public Nota BuscarPorID(int id)
        {
            return _context.Notas.FirstOrDefault(n => n.IdNotas == id);
        }

        public void CadastrarNota(Nota nota)
        {
            Nota notaCadastrada = new Nota 
            {

            };
        }

        public List<Nota> ListarTodos()
        {
            return _context.Notas.ToList();
        }
    }
}
