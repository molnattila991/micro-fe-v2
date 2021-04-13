using System;
using System.Collections.Generic;
using System.Text;
using todo_api_domain.Common;

namespace todo_api_domain.Entities
{
    public class TodoItem : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
