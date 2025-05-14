using API_Notes.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API_Notes.Service
{
    public class PasswordSerrvice
    {
        private readonly PasswordHasher<Usuario> _hasher = new();

        public string HashPassword(Usuario usuario)
        {
            return _hasher.HashPassword(usuario, usuario.Senha);
        }
        public bool VerificarSenha(Usuario usuario, string senhainformada)
        {
            var resultado = _hasher.VerifyHashedPassword(usuario, usuario.Senha, senhainformada);

            return resultado == PasswordVerificationResult.Success;
        }
    }
}
