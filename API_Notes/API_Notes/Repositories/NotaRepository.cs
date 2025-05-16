using API_Notes.Context;
using API_Notes.DTO;
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
        public void Atualizar(int id, Nota nota)
        {
            // Encontro o produto que desejo
            Nota notaEncontrado = _context.Notas.Find(id);

            notaEncontrado.IdUsuario = nota.IdUsuario;
            notaEncontrado.Titulo = nota.Titulo;
            notaEncontrado.Conteudo = nota.Conteudo;
            notaEncontrado.DataCriacao = nota.DataCriacao;
            notaEncontrado.DataEdicao = nota.DataCriacao;
            notaEncontrado.DataEdicao = nota.DataEdicao;
            notaEncontrado.Arquivada = nota.Arquivada;

            _context.SaveChanges();
        }

        public Nota BuscarPorId(int id)
        {
            
            return _context.Notas.FirstOrDefault(p => p.IdNotas == id);
        }

        public void Cadastrar(CadastrarNotaDTO nota)
        {
            throw new NotImplementedException();
        }

        public void CadastrarNota(Nota nota)
        {
            Nota notaCadastro = new Nota

            {
                IdUsuario = nota.IdUsuario,
                Titulo = nota.Titulo,
                Conteudo = nota.Conteudo,
                DataCriacao = nota.DataCriacao,
                DataEdicao = nota.DataEdicao,
                Arquivada = nota.Arquivada
            };

            _context.Notas.Add(notaCadastro);

            _context.SaveChanges();
        }

        public void Deletar(int id)
        {
            
            Nota notaEncontrado = _context.Notas.Find(id);

            
            if (notaEncontrado == null)
            {
                throw new Exception();
            }
            
            _context.Notas.Remove(notaEncontrado);

            
            _context.SaveChanges();
        }

        public List<Nota> ListarTodos()
        {
            return _context.Notas.ToList();
        }
    }
}
