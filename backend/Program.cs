using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Configure SQLite database path
var dataDir = Path.Combine(Directory.GetCurrentDirectory(), "Data");
Directory.CreateDirectory(dataDir);
var dbPath = Path.Combine(dataDir, "stock.db");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// 1. Servir arquivos estáticos do Angular (IMPORTANTE: colocar ANTES de outros middlewares)
app.UseDefaultFiles();  // index.html como padrão
app.UseStaticFiles();   // arquivos CSS, JS, etc.

// 2. Configure CORS
app.UseCors("AllowAll");

// 3. Middlewares padrão
app.UseHttpsRedirection();
app.UseAuthorization();

// 4. Mapear controllers da API
app.MapControllers();

// 5. Fallback para o Angular (rotas como /dashboard)
app.MapFallbackToFile("index.html");

// Auto-create database and apply seed data
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

app.Run();