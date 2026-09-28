using backend.Models;

namespace backend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            if (context.Products.Any())
            {
                return; // O banco já foi inicializado
            }

            var now = DateTime.UtcNow;

            var products = new List<Product>
            {
                new()
                {
                    Name = "Mouse Sem Fio Ergonômico",
                    Description = "Mouse óptico sem fio ergonômico com receptor USB e ajuste de DPI",
                    Category = "Eletrônicos",
                    Quantity = 45,
                    Price = 89.90m,
                    MinStock = 10,
                    CreatedAt = now,
                    UpdatedAt = now
                },
                new()
                {
                    Name = "Teclado Mecânico RGB",
                    Description = "Teclado mecânico gamer RGB com switches azuis e padrão ABNT2",
                    Category = "Eletrônicos",
                    Quantity = 20,
                    Price = 249.90m,
                    MinStock = 5,
                    CreatedAt = now,
                    UpdatedAt = now
                },
                new()
                {
                    Name = "Hub USB-C 7 em 1",
                    Description = "Hub adaptador multifuncional USB-C com HDMI 4K, USB 3.0 e leitores SD",
                    Category = "Acessórios",
                    Quantity = 15,
                    Price = 139.90m,
                    MinStock = 5,
                    CreatedAt = now,
                    UpdatedAt = now
                },
                new()
                {
                    Name = "Suporte para Monitor Articulado",
                    Description = "Suporte articulado de mesa com pistão a gás para telas de 17 a 32 polegadas",
                    Category = "Móveis",
                    Quantity = 8,
                    Price = 179.90m,
                    MinStock = 3,
                    CreatedAt = now,
                    UpdatedAt = now
                },
                new()
                {
                    Name = "Webcam Full HD 1080p",
                    Description = "Câmera de alta resolução com microfone estéreo embutido para reuniões",
                    Category = "Eletrônicos",
                    Quantity = 12,
                    Price = 159.90m,
                    MinStock = 4,
                    CreatedAt = now,
                    UpdatedAt = now
                },
                new()
                {
                    Name = "Luminária de Mesa LED",
                    Description = "Luminária touch com temperatura de cor ajustável e porta USB de recarga",
                    Category = "Móveis",
                    Quantity = 4,
                    Price = 79.90m,
                    MinStock = 5,
                    CreatedAt = now,
                    UpdatedAt = now
                },
                new()
                {
                    Name = "Caderno Executivo A5",
                    Description = "Caderno pautado com capa dura texturizada, marcador de página e 160 folhas",
                    Category = "Escritório",
                    Quantity = 60,
                    Price = 34.90m,
                    MinStock = 15,
                    CreatedAt = now,
                    UpdatedAt = now
                },
                new()
                {
                    Name = "Cabo de Rede Cat6 3m",
                    Description = "Cabo de rede gigabit com conectores blindados e proteção anti-ruído",
                    Category = "Acessórios",
                    Quantity = 0,
                    Price = 19.90m,
                    MinStock = 10,
                    CreatedAt = now,
                    UpdatedAt = now
                }
            };

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
