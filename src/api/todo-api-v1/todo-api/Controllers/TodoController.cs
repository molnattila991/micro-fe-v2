using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todo_api.CustomAttributes;
using todo_api.Models.Todo;
using todo_api_business_logic.Interfaces;
using todo_api_data_access.Entities;

namespace todo_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : Controller
    {
        private readonly ILogger<TodoController> _logger;
        private readonly IMapper _mapper;
        private readonly ITodoItemListService _todoItemListService;
        private readonly ITodoItemService _todoItemService;

        public TodoController(
            ILogger<TodoController> logger,
            IMapper mapper,
            ITodoItemListService todoItemListService,
            ITodoItemService todoItemService
            )
        {
            _logger = logger;
            _todoItemListService = todoItemListService;
            _todoItemService = todoItemService;
            _mapper = mapper;

            _logger.LogError("Todo Controller Created...");
        }

        [HttpGet]
        [CustomAuthAttribute]
        public async Task<IEnumerable<TodoItem>> Get()
        {
            return await _todoItemListService.GetAll();
        }

        [HttpGet("/[controller]/{id}")]
        public async Task<TodoItem> GetById(int id)
        {
            return await _todoItemService.Get(id);
        }

        [HttpPost("/[controller]/filter")]
        public async Task<IActionResult> GetFiltered([FromBody] TodoListFilter filter)
        {
            
            if (filter == null)
            {
                _logger.LogError("Some errors");
                return BadRequest();
            }
            else if (filter.Text == null)
            {
                _logger.LogError("Some other errors");

                return BadRequest(new { Errors = new { Text = new string[] { "Filter text must be set." } } });
            }

            return Ok(await _todoItemListService.GetAllContainText(filter.Text));
        }

        [HttpPost]
        public async Task<TodoItem> Post([FromBody] TodoCreateRequest item)
        {
            return await _todoItemService.Add(_mapper.Map<TodoItem>(item));
        }

        [HttpDelete("/[controller]/{id}")]
        public async Task Delete(int id)
        {
            await _todoItemService.Delete(id);
        }

        [HttpPut]
        public async Task<TodoItem> Put([FromBody] TodoUpdateRequest item)
        {
            return await _todoItemService.Update(_mapper.Map<TodoItem>(item));
        }
    }
}
