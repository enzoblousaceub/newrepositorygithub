using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Price)
                    .HasConversion<double>();
                
                entity.Property(e => e.CreatedAt)
                    .HasConversion(v => v.ToString("yyyy-MM-dd HH:mm:ss"), 
                                   v => DateTime.Parse(v));
                
                entity.Property(e => e.UpdatedAt)
                    .HasConversion(v => v.ToString("yyyy-MM-dd HH:mm:ss"), 
                                   v => DateTime.Parse(v));
            });
        }
    }
}