using API_Notes.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Notes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotaRepository : ControllerBase

   public NotaController(NotaRepository notaRepository)
    {

        _notaRepository = notaRepository;
    }

    // GET
    [HttpGet]
    public IActionResult ListarNota()
    {
        return Ok(_notaRepository.ListarTodos());
    }

    // Cadastrar Procuto
    [HttpPost]
    public IActionResult CadastrarNota(CadastrarNotaDTO prod)
    {
        // 1 - Coloco o produto no Banco de Dados
        _notaRepository.Cadastrar(prod);



        // 2 - Retorno o resultado
        // 201 - Created
        return Created();
    }

    // Buscar Produto por ID
    // /api/produtos
    // /api/produtos/1
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
