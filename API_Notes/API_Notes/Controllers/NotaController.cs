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

    [HttpPost]
    public IActionResult CadastrarNota(Nota not)
    {
        _notaRepository.CadastrarNota(not);

        return Created("ok", not);
    }
}