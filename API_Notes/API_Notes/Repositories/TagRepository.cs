using API_Notes.Context;
using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;
using API_Notes.ViemModel;
using API_Notes.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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


        // Listagem de Tag
        public List<ListarTagsViewModel> ListarTodos(int userId)
       
        {
            var listaTags = _context.NotasTags
                .Where(t => t.IdNotasNavigation.IdUsuario == userId && t.IdNotasNavigation.Arquivada == false)
                .Select(c =>
                    new ListarTagsViewModel
                    {
                        IdTag = c.IdTagNavigation.IdTag,
                        Nome = c.IdTagNavigation.Nome,
                    })
                .ToList();

            return listaTags;
        }

        // Retorno da Tag Selecionada
        public List<RetornoTagViewModel> BuscarTag(int tagId, int userId)
        {
            var tagRetorno = _context.NotasTags
                //.Include(t => _context.Notas)
                .Where(n => n.IdTag == tagId && n.IdNotasNavigation.Arquivada == false && n.IdNotasNavigation.IdUsuario == userId)
                .Select(n => new RetornoTagViewModel
                {
                    IdNotas = n.IdNotasNavigation.IdNotas,
                    Titulo = n.IdNotasNavigation.Titulo,
                    DataCriacao = n.IdNotasNavigation.DataCriacao,
                    DataEdicao = n.IdNotasNavigation.DataEdicao
                })
                .ToList();
            return tagRetorno;
        } 
    }
}