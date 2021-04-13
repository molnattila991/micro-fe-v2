using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using todo_api_business_logic.Interfaces;
using todo_api_data_access.Entities;
using todo_api_shared;

namespace todo_api_business_logic.Services
{
    public class TodoItemService : ITodoItemService
    {
        private readonly IRepository<TodoItem> _todoRepository;

        public TodoItemService(IRepository<TodoItem> todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public Task<TodoItem> Add(TodoItem item)
        {
            return _todoRepository.Add(item);
        }

        public async Task Delete(int id)
        {
            await _todoRepository.Delete(id);
        }

        public Task<TodoItem> Get(int id)
        {
            return _todoRepository.GetById(id);
        }

        public Task<TodoItem> Update(TodoItem item)
        {
            return _todoRepository.Update(item);
        }
    }
}
