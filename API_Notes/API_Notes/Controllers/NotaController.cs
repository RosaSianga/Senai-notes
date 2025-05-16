using API_Notes.DTO;
using API_Notes.Interfaces;
using API_Notes.Models;
using API_Notes.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API_Notes.Controllers;

[Route("api/[controller]")]
[ApiController]
public class NotaController : Controller
{
    private INotaRepository _notaRepository;

    public NotaController(INotaRepository notaRepository)
    {
        _notaRepository = notaRepository;
    }

    [HttpGet("listar/{id}")]
    public IActionResult ListarNotas(int id)
    {
        return Ok(_notaRepository.ListarTodos(id));
    }

    [HttpPost("cadastrarNota")]
    public IActionResult CadastrarNota(CadastrarNotaDTO not)
    {
        _notaRepository.CadastrarNota(not);

        return Created("ok", not);
    }
}