using API_Notes.Context;
using API_Notes.Interfaces;
using API_Notes.Repositories;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
    });
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<SenaiNotesContext, SenaiNotesContext>();
builder.Services.AddTransient<IUsuarioRepositories, UsuarioRepositories>();


builder.Services.AddAuthentication("Bearer").AddJwtBearer("Bearer", static options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true,
        ValidIssuer = "API_Notes",
        ValidAudience = "API_Notes",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGJi4pqLu42RnEAKRJYaxmNGrY+v\r\nfAqfW8W0xMHs2sD6TnJ5KWlePDz8OEqQ968ck55uNFb+paQvHyb8y2PonoN2g3Pk\r\nWJCnWIbVaF0u3VcLwTKUU4dg2/33LXrE50iLvsJRdgRa4BWOhqBIpJsyLcF1o63V\r\n+iNyaOrWZHb+B3KDAgMBAAE="))
    };
});


builder.Services.AddAuthorization();


var app = builder.Build();




// Antes de Iniciar o Projeto, caso queira testar na sua máquina, descomente a linha abaixo e rode a aplicacao
//app.MapGet("/", () => "Hello World!");

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.UseAuthentication();
app.UseAuthorization();

app.Run();