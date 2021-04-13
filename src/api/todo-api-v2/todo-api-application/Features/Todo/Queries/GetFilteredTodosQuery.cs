using LinqKit;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using todo_api_application.Interfaces;
using todo_api_domain.Entities;

namespace todo_api_application.Features.Todo.Queries
{
    public class GetFilteredTodosQuery : IRequest<IEnumerable<TodoItem>>
    {
        public bool? IsCompleted { get; set; }
        public string Text { get; set; }

        public class GetAllTodosQueryHandler : IRequestHandler<GetFilteredTodosQuery, IEnumerable<TodoItem>>
        {
            private readonly IApplicationDbContext _context;
            public GetAllTodosQueryHandler(IApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<IEnumerable<TodoItem>> Handle(GetFilteredTodosQuery query, CancellationToken cancellationToken)
            {
                Expression<Func<TodoItem, bool>> filter = PredicateBuilder.New<TodoItem>(true);

                if (query.IsCompleted.HasValue)
                {
                    filter = filter.And(item => item.IsCompleted == query.IsCompleted);
                }

                if (string.IsNullOrEmpty(query.Text) == false)
                {
                    var text = query.Text.ToLower();
                    filter = filter.And(item => item.Title.ToLower().Contains(text) || item.Title.ToLower().Contains(text));
                }

                if (filter == null)
                {
                    filter = item => true;
                }

                var list = await _context.TodoItems.Where(filter).ToListAsync();
                if (list == null)
                {
                    return null;
                }
                return list.AsReadOnly();
            }
        }
    }
}