using API_Notes.Context;
using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;
using API_Notes.ViewModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace API_Notes.Repositories
{
    public class NotaRepository : INotaRepository
    {
        private readonly SenaiNotesContext _context;

        public NotaRepository(SenaiNotesContext context)
        {
            _context = context;
        }

        // Validar a necessidade do metodo
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
            if (string.IsNullOrWhiteSpace(nota.Tags) == false)
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
                        tagExistente = new Tag
                        {
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

        public BuscarNotaViewModel BuscarNota(int idNota)
        {
            return _context.Notas
                .Where(n => n.IdNotas == idNota)
                .Include(n => n.NotasTags)
                .ThenInclude(t => t.IdTagNavigation)
                .Select(
                    n => new BuscarNotaViewModel()
                    {
                        Titulo = n.Titulo,
                        Conteudo = n.Conteudo,
                        DataCriacao = n.DataCriacao,
                        DataEdicao = n.DataEdicao,
                        Tags = n.NotasTags
                            .Select(t => t.IdTagNavigation.Nome)
                            .ToList()
                    })
                .FirstOrDefault();
        }

        public void AtualizarNota(int idNota, AtualizarNotaDTO nota)
        {
            Nota notaEncontrada = _context.Notas.Find(idNota);
            
            notaEncontrada.Titulo = nota.Titulo;
            notaEncontrada.Conteudo = nota.Conteudo;
            notaEncontrada.DataEdicao = nota.DataEdicao;
            
            _context.SaveChanges();
            
            // Tratativa Tag
            if (string.IsNullOrWhiteSpace(nota.Tags) == false)
            {
                // Coleta das novas Tags
                var novasTags = nota.Tags
                    .Split(',')
                    .Select(a => a.Trim().ToLower())
                    .Where(a => string.IsNullOrWhiteSpace(a) == false)
                    .Distinct()
                    .ToList();

                // Buscar Tags vinculadas as notas
                var validacaoTags = _context.NotasTags
                    .Where(vt => vt.IdNotas == idNota)
                    .Include(vt => vt.IdTagNavigation)
                    .ToList();

                // Remover as Tags que não estão na lista nova
                foreach (var tagAtual in validacaoTags)
                {
                    if (novasTags.Contains(tagAtual.IdTagNavigation.Nome.ToLower()) == false)
                    {
                        _context.NotasTags.Remove(tagAtual);
                    }

                }

                // Adicionar novas tags que nao existem
                foreach (var tagTexto in novasTags)
                {
                    var tagExistente = _context.Tags.FirstOrDefault(t =>
                        t.Nome.ToLower() == tagTexto && t.IdUsuario == nota.IdUsuario);

                    //Se a tag não existe, crie 
                    if (tagExistente == null)
                    {
                        tagExistente = new Tag
                        {
                            Nome = tagTexto,
                            IdUsuario = nota.IdUsuario
                        };
                        _context.Tags.Add(tagExistente);
                        _context.SaveChanges();
                    }

                    //Verifica se a relacao já existe
                    bool relacaoExistente = _context.NotasTags
                        .Any(re => re.IdNotas == idNota && re.IdTag == tagExistente.IdTag);
                    if (relacaoExistente == false)
                    {
                        _context.NotasTags.Add(new NotasTag()
                        {
                            IdNotas = idNota,
                            IdTag = tagExistente.IdTag
                        });
                    }
                }
                _context.SaveChanges();
            }
        }

        public void DeletarNota(int idNota, Nota nota)
        {
            throw new NotImplementedException();
        }
    }
}