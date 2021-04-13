using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using todo_api_business_logic.Interfaces;
using todo_api_business_logic.Services;
using todo_api_business_logic.test.Mocks.Todo;
using todo_api_data_access.Entities;
using todo_api_shared;
using Xunit;

namespace todo_api_business_logic.test.Services
{
    public class TodoItemServiceTest
    {
        private ITodoItemService _todoItemService;
        Mock<IRepository<TodoItem>> _repositoryMock;

        private void Setup()
        {
            _repositoryMock = new Mock<IRepository<TodoItem>>();
            _todoItemService = new TodoItemService(_repositoryMock.Object);
        }

        [Fact]
        public void GetByInvalidId()
        {
            Setup();
            //Arrange
            var list = TodoListMock.GetEmptyList();
            _repositoryMock.Setup(item => item.GetById(It.IsAny<int>())).ReturnsAsync(()=>null);

            //Act
            var result = _todoItemService.Get(1).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetById(1), Times.Once);
            Assert.Null(result);
        }

        [Fact]
        public void GetByValidId()
        {
            Setup();
            //Arrange
            var id = 1;
            var list = TodoListMock.GetList();
            var item = list.First(item => item.Id == id);
            _repositoryMock.Setup(item => item.GetById(It.IsAny<int>())).ReturnsAsync(item);

            //Act
            var result = _todoItemService.Get(id).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetById(id), Times.Once);
            Assert.NotNull(result);
            Assert.Equal(item, result);
        }

        [Fact]
        public void GetByValidId_2()
        {
            Setup();
            //Arrange
            var id = 1;
            var list = TodoListMock.GetList();
            var item = new TodoItem()
            {
                Title = "Todo 1",
                Description = "Desc 1",
                IsCompleted = false,
                Id = 1,
            };
            _repositoryMock.Setup(item => item.GetById(It.IsAny<int>())).ReturnsAsync(item);

            //Act
            var result = _todoItemService.Get(id).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetById(id), Times.Once);
            Assert.NotNull(result);
            Assert.Equal(item, result);
        }

        [Fact]
        public void AddTodoItem()
        {
            Setup();
            //Arrange
            var itemCreate = new TodoItem()
            {
                Title = "Todo 2",
                Description = "Desc 2",
                IsCompleted = false,
            };

            var itemCreated = new TodoItem()
            {
                Title = "Todo 2",
                Description = "Desc 2",
                IsCompleted = false,
                Id = 2
            };

            _repositoryMock.Setup(item => item.Add(itemCreate)).ReturnsAsync(itemCreated);

            //Act
            var result = _todoItemService.Add(itemCreate).Result;
            
            //Assert
            _repositoryMock.Verify(item => item.Add(It.IsAny<TodoItem>()), Times.Once);
            Assert.Equal(itemCreated, result);
        }
    }
}
