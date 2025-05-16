using API_Notes.DTO;
using API_Notes.Models;

namespace API_Notes.Interfaces
{
    public interface INotaRepository
    {
        // R - Read (Leitura) 
        // Retorno
        List<Nota> ListarTodos();
        //Recebe um identificador, e retorna o produto correspondente
        Nota BuscarPorId(int id);

        // C - Create (cadastro)
        void Cadastrar(CadastrarNotaDTO nota);

        // U - Update (Atualização)
        // Recebe um identificador para encontrar o Produto, e recebe o Produto Novo para subistituir o Antigo
        void Atualizar(int id, Nota nota);

        // D - Delete (Deleção)
        // Recebo o identificador de quem quero excluir
        void Deletar(int id);
    }
}
