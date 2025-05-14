using API_Notes;
using API_Notes.Context;
using API_Notes.Interfaces;
using API_Notes.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SenaiNotesContext, SenaiNotesContext>();
builder.Services.AddTransient<INotaRepository, NotaRepository>();

var app = builder.Build();

// Antes de Iniciar o Projeto, caso queira testar na sua máquina, descomente a linha abaixo e rode a aplicacao
//app.MapGet("/", () => "Hello World!");

testeComunicacao.TesteComunicacao();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();