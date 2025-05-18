using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Notes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        public ITagRepository _tagRepository; 
        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet("listartag/{id}")]
        public IActionResult ListarTodos(int id)
        {
            return Ok(_tagRepository.ListarTodos(id));
        }
        
        [HttpPost]
        public IActionResult CadastrarNota(CadastrarTagDTO notaDTO)
        {
            
            _tagRepository.Cadastrar(notaDTO);

            return Created();

        }
                    
        [HttpGet("{id}")]
        public IActionResult ListarPorId(int id)
        {
            Tag tag = _tagRepository.BuscarPorId(id);

            if (tag != null)

            {
                // 404 - Nao encontrado
                return NotFound();
            }

            return Ok(tag);
        }

        [HttpPut("{id}")]
        public IActionResult Editar(int id, Tag prod)
        {
            try
            {
                
                _tagRepository.Atualizar(id, prod);

                return Ok(prod);
            }

            catch (Exception ex)
            {
                return NotFound("Tag não encontrada");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                _tagRepository.Deletar(id);
                // 204 - Deu Certo
                return NoContent();
            }
            // Caso de erro
            catch (Exception ex)
            {
                return NotFound("Tag não encontrada.");
            }
        }

    }
}
