using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using todo_api_application.Interfaces;
using todo_api_domain.Entities;

namespace todo_api_application.Features.Todo.Queries
{
    public class GetTodoByIdQuery : IRequest<TodoItem>
    {
        public int Id { get; set; }
        public class GetTodoByIdQueryHandler : IRequestHandler<GetTodoByIdQuery, TodoItem>
        {
            private readonly IApplicationDbContext _context;
            public GetTodoByIdQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<TodoItem> Handle(GetTodoByIdQuery query, CancellationToken cancellationToken)
            {
                var item = await _context.TodoItems.Where(a => a.Id == query.Id).FirstOrDefaultAsync();
                if (item == null) return null;
                return item;
            }
        }
    }
}