using API_Notes.Context;
using API_Notes.Repositories;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<SenaiNotesContext>();
builder.Services.AddTransient<UsuarioRepositories>();


var app = builder.Build();




// Antes de Iniciar o Projeto, caso queira testar na sua máquina, descomente a linha abaixo e rode a aplicacao
//app.MapGet("/", () => "Hello World!");

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.UseAuthentication();
app.UseAuthentication();

app.Run();