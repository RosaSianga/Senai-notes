using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;
using API_Notes.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Notes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotaController : ControllerBase
    {
        private INotaRepository _notaRepository;

        public NotaController(INotaRepository notaRepository)
        {
            _notaRepository = notaRepository;
        }

        [HttpGet]
        public IActionResult ListarNotas()
        {
            return Ok(_notaRepository.ListarTodos());
        }
        [HttpPost]
        public IActionResult CadastrarNota(CadastrarNotaDTO dto)
        {
            _notaRepository.Cadastrar(dto);

            return Created();

        }

        [HttpGet("{id}")]
        public IActionResult ListarPorId(int id)
        {
            Nota nota = _notaRepository.BuscarPorId(id);

            if (nota != null)

            {
                // 404 - Nao encontrado
                return NotFound();
            }

            return Ok(nota);
        }

        [HttpPut("{id}")]
        public IActionResult Editar(int id, Nota prod)
        {
            try
            {
                _notaRepository.Atualizar(id, prod);

                return Ok(prod);
            }

            catch (Exception ex)
            {
                return NotFound("Nota não encontrada");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                _notaRepository.Deletar(id);
                // 204 - Deu Certo
                return NoContent();
            }
            // Caso de erro
            catch (Exception ex)
            {
                return NotFound("Nota não encontrada.");
            }
        }


    }
}
