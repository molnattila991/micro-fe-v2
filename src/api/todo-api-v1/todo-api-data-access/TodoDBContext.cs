using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using todo_api_data_access.Entities;

namespace todo_api_data_access
{
    public class TodoDBContext : DbContext
    {
        public DbSet<TodoItem> TodoItems { get; set; }

        public TodoDBContext(DbContextOptions<TodoDBContext> options)
                : base(options)
        {
            this.Database.EnsureCreated();

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>().ToTable("TodoItem");
        }
    }
}
