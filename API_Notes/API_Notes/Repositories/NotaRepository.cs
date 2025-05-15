using API_Notes.Context;
using API_Notes.Models;

namespace API_Notes.Repositories
{
    public class NotaRepository
    {
        // Métodos que acessam o Banco Banco de Dados
        // Injetar o Context
        // Inteção de Dependencia
        private readonly SenaiNotesContext _context;

        // ctor
        // metodo construtor
        //Quando criar um objeto o que eu preciso ter?
        public NotaRepository(SenaiNotesContext context)
        {
            _context = context;
        }
        public void Atualizar(int id, Nota nota)
        {
            // Encontro o produto que desejo
            Nota notaEncontrado = _context.Notas.Find(id);

            notaEncontrado.Titulo = nota.Titulo;
            notaEncontrado.Conteudo = nota.Conteudo;
            notaEncontrado.DataCriacao = nota.DataCriacao;
            notaEncontrado.DataEdicao = nota.DataCriacao;
            notaEncontrado.DataEdicao = nota.DataEdicao;
            notaEncontrado.Arquivada = nota.Arquivada;

            _context.SaveChanges();
        }

        public Nota BuscarPorId(int id)
        {
            // ToList() - Pegar varios
            //FirstorDefault - Trazer o primeiro que encontrar ou null

            // Expressao Lambda
            //_context.Produtos - Acesse a tabela produto do contexto
            // FirstOrDefault - Pegue o primeiro produto que encontrar
            // p => p.IdProduto == id 
            // para cada produto p, me retorne aquele que tem o IdProduto igual ao id
            return _context.Notas.FirstOrDefault(p => p.IdNotas == id);
        }

        public void CadastrarNota(Nota nota)
        {
            Nota notaCadastro = new Nota

            {
                Titulo = nota.Titulo,
                Conteudo = nota.Conteudo,
                DataCriacao = nota.DataCriacao,
                DataEdicao = nota.DataEdicao,
                Arquivada = nota.Arquivada
            };

            _context.Notas.Add(notaCadastro);

            _context.SaveChanges();
        }

        public void Deletar(int id)
        {
            // 1 - Encontrar o que eu quero excluir
            // Find - procura pela chave primaria
            Nota notaEncontrado = _context.Notas.Find(id);

            // Caso eu nao encontre o produto, lanco o erro
            if (notaEncontrado == null)
            {
                throw new Exception();
            }
            // Caso eu encontre o produto, removo ele
            _context.Notas.Remove(notaEncontrado);

            // salvo as alterações
            _context.SaveChanges();
        }

        public List<Nota> ListarTodos()
        {
            return _context.Notas.ToList();
        }
    }
}
