using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todo_api.Models.Todo;
using todo_api_data_access.Entities;

namespace todo_api.Mapper
{
    public class TodoProfile : Profile
    {
        public TodoProfile()
        {
            CreateMap<TodoItem, TodoResponse>();
            CreateMap<TodoCreateRequest, TodoItem>();
            CreateMap<TodoUpdateRequest, TodoItem>();
        }
    }
}
