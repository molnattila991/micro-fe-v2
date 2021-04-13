using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using todo_api_data_access.Repositories;
using todo_api_shared;

namespace todo_api_data_access
{
    public static class ServiceRegister
    {
        public static void AddDataAccess(this IServiceCollection services)
        {
            services.AddDbContext<TodoDBContext>(options => options.UseSqlite("Data Source=./db.db"));

            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        }
    }
}
