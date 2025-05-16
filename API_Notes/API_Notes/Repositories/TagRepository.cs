using API_Notes.Context;
using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;

namespace API_Notes.Repositories
{
    public class TagRepository : ITagRepository
    {
        private readonly SenaiNotesContext _context;
        public TagRepository(SenaiNotesContext context)
        {
            _context = context;
        }
        public void Atualizar(int id, Tag tag)
        {
            Tag tagEncontrado = _context.Tags.Find(id);

            tagEncontrado.Nome = tag.Nome;
            tagEncontrado.IdUsuario = tag.IdUsuario;

            _context.SaveChanges();
        }

        public Tag BuscarPorId(int id)
        {
            
            return _context.Tags.FirstOrDefault(p => p.IdTag == id);
        }

        public void Cadastrar(CadastrarNotaDTO tag)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(CadastrarTagDTO tag)
        {
            throw new NotImplementedException();
        }

        public void CadastrarTag(Tag tag)
        {
            Tag tagCadastroDTO = new Tag

            {
                Nome = tag.Nome,
                IdUsuario = tag.IdUsuario

            };

            _context.Tags.Add(tagCadastroDTO);

            _context.SaveChanges();
        }

        public void Deletar(int id)
        {
            // 1 - Encontrar o que eu quero excluir
            // Find - procura pela chave primaria
            Nota tagEncontrado = _context.Notas.Find(id);

            // Caso eu nao encontre o produto, lanco o erro
            if (tagEncontrado == null)
            {
                throw new Exception();
            }
            // Caso eu encontre o produto, removo ele
            _context.Notas.Remove(tagEncontrado);

            // salvo as alterações
            _context.SaveChanges();
        }

        public List<Nota> ListarTodos()
        {
            return _context.Notas.ToList();
        }

        List<Tag> ITagRepository.ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
