using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todo_api.Controllers.Common;
using todo_api.Models.Todo;
using todo_api_application.Features.Todo.Commands;
using todo_api_application.Features.Todo.Queries;
using todo_api_domain.Entities;

namespace todo_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : BaseApiController
    {
        private readonly ILogger<TodoController> _logger;

        public TodoController(ILogger<TodoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await Mediator.Send(new GetAllTodosQuery()));
        }

        [HttpGet("/[controller]/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await Mediator.Send(new GetTodoByIdQuery { Id = id }));
        }

        [HttpPost("/[controller]/filter")]
        public async Task<IActionResult> GetFiltered([FromBody] GetFilteredTodosQuery query)
        {
            if(query == null)
            {
                
            }
            return Ok(await Mediator.Send(query));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CreateTodoCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpDelete("/[controller]/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await Mediator.Send(new DeleteTodoByIdCommand { Id = id }));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody]UpdateTodoCommand command)
        {
            return Ok(await Mediator.Send(command));
        }
    }
}
