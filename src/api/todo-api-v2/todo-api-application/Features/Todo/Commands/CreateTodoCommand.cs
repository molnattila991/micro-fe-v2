using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using todo_api_application.Interfaces;
using todo_api_domain.Entities;

namespace todo_api_application.Features.Todo.Commands
{
    public class CreateTodoCommand : IRequest<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        public class CreateTodoCommandHandler : IRequestHandler<CreateTodoCommand, int>
        {
            private readonly IApplicationDbContext _context;
            public CreateTodoCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<int> Handle(CreateTodoCommand command, CancellationToken cancellationToken)
            {
                var todo = new TodoItem();
                todo.Title = command.Title;
                todo.IsCompleted = command.IsCompleted;
                todo.Description = command.Description;
                _context.TodoItems.Add(todo);
                await _context.SaveChanges();
                return todo.Id.Value;
            }
        }
    }
}