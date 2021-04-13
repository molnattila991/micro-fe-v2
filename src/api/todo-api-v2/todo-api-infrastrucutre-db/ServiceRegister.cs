
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using todo_api_application.Interfaces;

namespace todo_api_infrastrucutre_db
{
    public static class ServiceRegister
    {
        public static void AddInfrastructureDb(this IServiceCollection services)
        {
            //services.AddDbContext<TodoDBContext>(options => options.UseInMemoryDatabase(databaseName: "TodoDatabase"));
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=./db/db.db"));
            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
        }
    }
}