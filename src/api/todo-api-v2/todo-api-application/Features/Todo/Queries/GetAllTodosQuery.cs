using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using todo_api_application.Interfaces;
using todo_api_domain.Entities;

namespace todo_api_application.Features.Todo.Queries
{
    public class GetAllTodosQuery : IRequest<IEnumerable<TodoItem>>
    {

        public class GetAllTodosQueryHandler : IRequestHandler<GetAllTodosQuery, IEnumerable<TodoItem>>
        {
            private readonly IApplicationDbContext _context;
            public GetAllTodosQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<IEnumerable<TodoItem>> Handle(GetAllTodosQuery query, CancellationToken cancellationToken)
            {
                var list = await _context.TodoItems.ToListAsync();
                if (list == null)
                {
                    return null;
                }
                return list.AsReadOnly();
            }
        }
    }
}