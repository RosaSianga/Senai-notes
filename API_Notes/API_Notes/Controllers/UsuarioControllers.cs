using API_Notes.Interfaces;
using API_Notes.Repositories;
using API_Notes.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Notes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioControllers : ControllerBase
    {

        private IUsuarioRepositories _usuarioRepositories;

        private PasswordService _passwordService = new PasswordService();

        public UsuarioControllers(UsuarioRepositories usuarioRepositories)
        {
            _usuarioRepositories = usuarioRepositories; 
        }

        [HttpGet]
        
        public IActionResult ListarTodos()
        {
            return Ok(_usuarioRepositories.ListarTodos());
        }

    }
}
