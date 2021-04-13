using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using todo_api_application.Interfaces;

namespace todo_api_application.Features.Todo.Commands
{
    public class DeleteTodoByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
        public class DeleteTodoByIdCommandHandler : IRequestHandler<DeleteTodoByIdCommand, int>
        {
            private readonly IApplicationDbContext _context;
            public DeleteTodoByIdCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<int> Handle(DeleteTodoByIdCommand command, CancellationToken cancellationToken)
            {
                var todo = await _context.TodoItems.Where(a => a.Id == command.Id).FirstOrDefaultAsync();
                if (todo == null) 
                    return default;
                _context.TodoItems.Remove(todo);
                await _context.SaveChanges();
                return todo.Id.Value;
            }
        }
    }
}