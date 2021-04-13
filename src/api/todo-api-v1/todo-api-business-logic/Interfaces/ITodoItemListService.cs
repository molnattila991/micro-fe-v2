using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using todo_api_data_access.Entities;

namespace todo_api_business_logic.Interfaces
{
    public interface ITodoItemListService
    {
        Task<IEnumerable<TodoItem>> GetAll();
        Task<IEnumerable<TodoItem>> GetAllContainText(string text);
    }
}
