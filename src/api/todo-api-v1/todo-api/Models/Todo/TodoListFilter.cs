using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace todo_api.Models.Todo
{
    public class TodoListFilter
    {
        public bool? IsCompleted { get; set; }
        [Required]
        public string Text { get; set; }
    }
}
