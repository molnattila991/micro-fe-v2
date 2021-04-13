using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using todo_api_business_logic.Interfaces;
using todo_api_business_logic.Specifications.Todo;
using todo_api_data_access.Entities;
using todo_api_shared;

namespace todo_api_business_logic.Services
{
    public class TodoItemListService : ITodoItemListService
    {
        private readonly IRepository<TodoItem> _todoRepository;

        public TodoItemListService(IRepository<TodoItem> todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public Task<IEnumerable<TodoItem>> GetAll()
        {
            return _todoRepository.GetAll();
        }

        public Task<IEnumerable<TodoItem>> GetAllContainText(string text)
        {
            return _todoRepository.GetAll(new TodosContainTextSpecification(text));
        }
    }
}