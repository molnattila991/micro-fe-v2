using System;
using System.Collections.Generic;
using System.Text;
using todo_api_data_access.Entities;

namespace todo_api_business_logic.test.Mocks.Todo
{
    static class TodoListMock
    {
        public static IEnumerable<TodoItem> GetEmptyList()
        {
            return new List<TodoItem>() { };
        }

        public static IEnumerable<TodoItem> GetListWithOneItem()
        {
            return new List<TodoItem>() {
                new TodoItem()
                {
                    Title = "Todo 1",
                    Description = "Desc 1",
                    IsCompleted = false,
                    Id = 1,
                }
            };
        }

        public static IEnumerable<TodoItem> GetList()
        {
            return new List<TodoItem>() {
                new TodoItem()
                {
                    Title = "Todo 1",
                    Description = "Desc 1",
                    IsCompleted = false,
                    Id = 1,
                },
                new TodoItem()
                {
                    Title = "Todo 2",
                    Description = "Desc 2",
                    IsCompleted = false,
                    Id = 2,
                },
                new TodoItem()
                {
                    Title = "Todo 3",
                    Description = "Desc 3",
                    IsCompleted = false,
                    Id = 3,
                },
                new TodoItem()
                {
                    Title = "Alma",
                    Description = "Alma Fa",
                    IsCompleted = false,
                    Id = 4,
                }
            };
        }
    }
}
