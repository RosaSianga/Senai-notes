using API_Notes.Context;

namespace API_Notes;

public class testeComunicacao
{
    public static void TesteComunicacao()
    {
        try
        {
            using var context = new SenaiNotesContext();
            var conected = context.Database.CanConnect();
            Console.WriteLine(conected ? "Conexão ok!" : "Erro ao Conectar!");
        }
        catch (Exception e)
        {
            Console.WriteLine($"Erro: {e.Message}");
        }
    }
}