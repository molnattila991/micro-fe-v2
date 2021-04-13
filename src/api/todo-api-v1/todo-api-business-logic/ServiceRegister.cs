using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using todo_api_business_logic.Interfaces;
using todo_api_business_logic.Services;

namespace todo_api_business_logic
{
    public static class ServiceRegister
    {
        public static void AddBusinessLogic(this IServiceCollection services)
        {
            services.AddScoped<ITodoItemService, TodoItemService>();
            services.AddScoped<ITodoItemListService, TodoItemListService>();
        }
    }
}
