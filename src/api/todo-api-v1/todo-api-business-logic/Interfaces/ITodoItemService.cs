using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using todo_api_data_access.Entities;

namespace todo_api_business_logic.Interfaces
{
    public interface ITodoItemService
    {
        Task<TodoItem> Get(int id);
        Task<TodoItem> Add(TodoItem item);
        Task<TodoItem> Update(TodoItem item);
        Task Delete(int id);
    }
}
