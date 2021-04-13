using System;
using System.Collections.Generic;
using System.Text;
using todo_api_data_access.Entities;

namespace todo_api_business_logic.Specifications.Todo
{
    public class TodosContainTextSpecification : BaseSpecification<TodoItem>
    {
        public TodosContainTextSpecification(string textToContain) : base(x =>
                x.Title.ToLower().Contains(textToContain.ToLower()) ||
                x.Description.ToLower().Contains(textToContain.ToLower())
            )
        {
        }
    }
}
