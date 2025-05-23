using API_Notes;
using API_Notes.Context;
using API_Notes.Interfaces;
using API_Notes.Repositories;
using Azure.Identity;
using System.Diagnostics.Tracing;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

    });
    
builder.Services.AddControllers();
builder.Services.AddSwaggerGen(options =>
{
    options.EnableAnnotations();
});

//Esta linha é necessário para que o Ctor, relacionado a injeção das dependências em outras classes, opere normalmente. O mesmo principio que o @autowired no Java 
builder.Services.AddDbContext<SenaiNotesContext, SenaiNotesContext>();

builder.Services.AddTransient<INotaRepository, NotaRepository>();

builder.Services.AddTransient<ITagRepository, TagRepository>();


builder.Services.AddCors(
    options =>
    {
        options.AddPolicy(
            name: "minhasOrigens",
            policy =>
            {
                policy.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5500");
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
            }
        );
    });

var app = builder.Build();

app.UseCors("minhasOrigens");

// Antes de Iniciar o Projeto, caso queira testar na sua máquina, descomente a linha abaixo e rode a aplicacao
//app.MapGet("/", () => "Hello World!");

testeComunicacao.TesteComunicacao();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.MapControllers();

app.Run();