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
        public UsuarioControllers(IUsuarioRepositories usuarioRepositories)
        {

        }

    }
}
