using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

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


        [HttpGet("listartag/{userId}")]
        [SwaggerOperation(
            Summary = "Lista todas as Tags",
            Description = "Este método lista todas as tags com base do ID do usuario"
        )]
        public IActionResult ListarTodos(int userId)
        {
            return Ok(_tagRepository.ListarTodos(userId));
        }

        [HttpGet("RetornoTag")]
        public IActionResult BuscarTag([FromQuery] int tagId, [FromQuery] int userId)
        {
            return Ok(_tagRepository.BuscarTag(tagId, userId));
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