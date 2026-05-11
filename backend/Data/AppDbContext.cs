using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products => Set<Product>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
            });

            // Seed data
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Wireless Mouse",
                    Description = "Ergonomic wireless mouse with USB receiver",
                    Category = "Electronics",
                    Quantity = 150,
                    Price = 29.99m,
                    MinStock = 20,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                },
                new Product
                {
                    Id = 2,
                    Name = "Mechanical Keyboard",
                    Description = "RGB mechanical keyboard with blue switches",
                    Category = "Electronics",
                    Quantity = 75,
                    Price = 89.99m,
                    MinStock = 10,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                },
                new Product
                {
                    Id = 3,
                    Name = "USB-C Hub",
                    Description = "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader",
                    Category = "Accessories",
                    Quantity = 200,
                    Price = 45.50m,
                    MinStock = 30,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                },
                new Product
                {
                    Id = 4,
                    Name = "Monitor Stand",
                    Description = "Adjustable aluminum monitor stand with cable management",
                    Category = "Furniture",
                    Quantity = 5,
                    Price = 59.99m,
                    MinStock = 15,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                },
                new Product
                {
                    Id = 5,
                    Name = "Webcam HD 1080p",
                    Description = "Full HD webcam with built-in microphone",
                    Category = "Electronics",
                    Quantity = 3,
                    Price = 69.99m,
                    MinStock = 10,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                },
                new Product
                {
                    Id = 6,
                    Name = "Desk Lamp LED",
                    Description = "Dimmable LED desk lamp with USB charging port",
                    Category = "Furniture",
                    Quantity = 45,
                    Price = 34.99m,
                    MinStock = 8,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                },
                new Product
                {
                    Id = 7,
                    Name = "Notebook A5",
                    Description = "Premium hardcover A5 notebook, 200 pages",
                    Category = "Office Supplies",
                    Quantity = 500,
                    Price = 12.99m,
                    MinStock = 50,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                },
                new Product
                {
                    Id = 8,
                    Name = "Ethernet Cable Cat6",
                    Description = "3m Cat6 ethernet cable, gold-plated connectors",
                    Category = "Accessories",
                    Quantity = 0,
                    Price = 8.99m,
                    MinStock = 25,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                }
            );
        }
    }
}
