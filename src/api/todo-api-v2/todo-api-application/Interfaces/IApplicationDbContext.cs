using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using todo_api_domain.Entities;

namespace todo_api_application.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<TodoItem> TodoItems { get; set; }
        Task<int> SaveChanges();
    }
}
