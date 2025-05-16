using API_Notes.Context;
using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;
using API_Notes.ViewModel;
using Microsoft.EntityFrameworkCore;

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

        public void CadastrarNota(CadastrarNotaDTO nota)
        {
            // Cadastro
            Nota notaCadastrada = new Nota 
            {
                Titulo = nota.Titulo,
                Conteudo = nota.Conteudo,
                DataCriacao = nota.DataCriacao,
                Arquivada = nota.Arquivada,
                IdUsuario = nota.IdUsuario
            };
            
            _context.Notas.Add(notaCadastrada);
            _context.SaveChanges();
            
            // Tratativa Tag
            if (!string.IsNullOrWhiteSpace(nota.Tags))
            {
                var tratativaTag = nota.Tags.Split(',')
                    .Select(a => a.Trim().ToLower())
                    .Where(a => !string.IsNullOrWhiteSpace(a))
                    .Distinct();

                foreach (var tagTexto in tratativaTag)
                {
                    //verificar tag existente
                    var tagExistente = _context.Tags.FirstOrDefault(t => t.Nome.ToLower() == tagTexto);

                    // Cadastro
                    if (tagExistente == null)
                    {
                        tagExistente = new Tag {
                            Nome = tagTexto,
                            IdUsuario = nota.IdUsuario
                        };
                        _context.Tags.Add(tagExistente);
                        _context.SaveChanges();
                    }
                    
                    // Relacao a tabela NotasTag
                    var notaTag = new NotasTag
                    {
                        //IdNotas = nota.IdNotas,
                        IdNotas = notaCadastrada.IdNotas,
                        IdTag = tagExistente.IdTag,
                        
                    };
                    _context.NotasTags.Add(notaTag);
                }
                
                _context.SaveChanges();
            }
        }

        public List<ListarNotasViewModel> ListarTodos(int id)
        {
            return _context.Notas
                .Where(n => n.IdUsuario == id)
                .Include(n => n.NotasTags)
                .ThenInclude(t => t.IdTagNavigation)
                .Select(
                    c => new ListarNotasViewModel
            {
                IdNotas = c.IdNotas,
                Titulo = c.Titulo,
                DataCriacao = c.DataCriacao,
                DataEdicao = c.DataEdicao,
                Tags = c.NotasTags!
                    .Select(nt => nt.IdTagNavigation.Nome)
                    .ToList()
            })
                .ToList();
        }
    }
}
