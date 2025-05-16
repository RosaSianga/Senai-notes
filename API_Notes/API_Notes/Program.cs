using System.Diagnostics.Tracing;
using API_Notes.Context;
using API_Notes.Interfaces;
using API_Notes.Repositories;
using Azure.Identity;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<SenaiNotesContext>();
builder.Services.AddTransient<INotaRepository, NotaRepository>();
builder.Services.AddTransient<ITagRepository, TagRepository>();

builder.Services.AddCors(
    options =>
    {
        options.AddPolicy(
            name: "minhasOrigens",
            policy =>
            {
                // Todo: Alterar Link para o frontend
                policy.WithOrigins("http://localhost:");
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();    
            }

            );        
    });

var app = builder.Build();



// Antes de Iniciar o Projeto, caso queira testar na sua máquina, descomente a linha abaixo e rode a aplicacao
//app.MapGet("/", () => "Hello World!");

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();
app.UseCors("minhasOrigens");
app.Run();