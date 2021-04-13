using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using todo_api_application.Interfaces;

namespace todo_api_application.Features.Todo.Commands
{
    public class UpdateTodoCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        public class UpdateTodoCommandHandler : IRequestHandler<UpdateTodoCommand, int>
        {
            private readonly IApplicationDbContext _context;
            public UpdateTodoCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<int> Handle(UpdateTodoCommand command, CancellationToken cancellationToken)
            {
                var todo = _context.TodoItems.Where(a => a.Id == command.Id).FirstOrDefault();

                if (todo == null)
                {
                    return default;
                }
                else
                {
                    todo.Id = command.Id;
                    todo.IsCompleted = command.IsCompleted;
                    todo.Title = command.Title;
                    todo.Description = command.Description;
                    await _context.SaveChanges();
                    return todo.Id.Value;
                }
            }
        }
    }
}