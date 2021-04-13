using System;
using System.Collections.Generic;
using System.Text;

namespace todo_api_data_access.Entities
{
    public class TodoItem : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
