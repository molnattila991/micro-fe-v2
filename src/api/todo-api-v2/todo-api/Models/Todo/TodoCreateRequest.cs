using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace todo_api.Models.Todo
{
    public class TodoCreateRequest
    {
        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Title { get; set; }
        
        public string Description { get; set; }

        [Required]
        public bool IsCompleted { get; set; }
    }
}
