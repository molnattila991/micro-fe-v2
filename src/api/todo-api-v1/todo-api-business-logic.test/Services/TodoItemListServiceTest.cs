using LinqKit;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using todo_api_business_logic.Interfaces;
using todo_api_business_logic.Services;
using todo_api_business_logic.test.Mocks.Todo;
using todo_api_data_access.Entities;
using todo_api_shared;
using Xunit;

namespace todo_api_business_logic.test.Services
{
    public class TodoItemListServiceTest
    {
        private ITodoItemListService _todoItemListService;
        Mock<IRepository<TodoItem>> _repositoryMock;

        private void Setup()
        {
            _repositoryMock = new Mock<IRepository<TodoItem>>();
            _todoItemListService = new TodoItemListService(_repositoryMock.Object);
        }

        [Fact]
        public void ListMustBeEmpty()
        {
            Setup();

            //Arrange
            var list = TodoListMock.GetEmptyList();
            _repositoryMock.Setup(item => item.GetAll()).ReturnsAsync(list);


            //Act
            var result = _todoItemListService.GetAll().Result;

            //Assert
            _repositoryMock.Verify(item => item.GetAll(), Times.Once);
            Assert.Equal(list.Count(), result.Count());
            Assert.Empty(result);
        }

        [Fact]
        public void ListMustContainOneElement()
        {
            Setup();

            //Arrange
            var list = TodoListMock.GetListWithOneItem();
            _repositoryMock.Setup(item => item.GetAll()).ReturnsAsync(list);


            //Act
            var result = _todoItemListService.GetAll().Result;

            //Assert
            _repositoryMock.Verify(item => item.GetAll(), Times.Once);
            Assert.Equal(list.Count(), result.Count());
            Assert.Single(result);
        }

        [Fact]
        private void GetListFilteredInTitle()
        {
            Setup();

            //Arrange
            var text = "Alma";
            var list = TodoListMock.GetList();
            var items = new List<TodoItem>()
            {
                new TodoItem()
                {
                    Title = "Alma",
                    Description = "Alma Fa",
                    IsCompleted = false,
                    Id = 4,
                }
            };
            var itemsCount = 1;

            _repositoryMock.Setup(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>())).ReturnsAsync(items);

            //Act
            var result = _todoItemListService.GetAllContainText(text).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>()), Times.Once);
            Assert.Equal(itemsCount, result.Count());
            Assert.Equal(items, result);
            Assert.Single(result);
        }

        [Fact]
        private void GetListFilteredInTitle_2()
        {
            Setup();

            //Arrange
            var text = "Alma";
            var list = TodoListMock.GetList();
            Expression<Func<TodoItem, bool>> expr = GetFilterExpression(text);

            _repositoryMock.Setup(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>())).ReturnsAsync(list.Where(expr.Compile()));
            var count = list.Where(expr.Compile()).Count();

            //Act
            var result = _todoItemListService.GetAllContainText(text).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>()), Times.Once);
            Assert.Equal(count, result.Count());
            Assert.Single(result);
        }


        [Fact]
        private void GetListFilteredInBody()
        {
            Setup();

            //Arrange
            var text = "Fa";
            var list = TodoListMock.GetList();
            Expression<Func<TodoItem, bool>> expr = GetFilterExpression(text);

            _repositoryMock.Setup(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>())).ReturnsAsync(list.Where(expr.Compile()));
            var count = list.Where(expr.Compile()).Count();

            //Act
            var result = _todoItemListService.GetAllContainText(text).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>()), Times.Once);
            Assert.Equal(count, result.Count());
            Assert.Single(result);
        }

        [Fact]
        private void GetListFilteredInTitleCaseInSensitive()
        {
            Setup();

            //Arrange
            var text = "alma";
            var list = TodoListMock.GetList();
            Expression<Func<TodoItem, bool>> expr = GetFilterExpression(text);

            _repositoryMock.Setup(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>())).ReturnsAsync(list.Where(expr.Compile()));
            var count = list.Where(expr.Compile()).Count();

            //Act
            var result = _todoItemListService.GetAllContainText(text).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>()), Times.Once);
            Assert.Equal(count, result.Count());
            Assert.Single(result);
        }


        [Fact]
        private void GetListFilteredInBodyCaseInSensitive()
        {
            Setup();

            //Arrange
            var text = "fa";
            var list = TodoListMock.GetList();
            Expression<Func<TodoItem, bool>> expr = GetFilterExpression(text);

            _repositoryMock.Setup(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>())).ReturnsAsync(list.Where(expr.Compile()));
            var count = list.Where(expr.Compile()).Count();

            //Act
            var result = _todoItemListService.GetAllContainText(text).Result;

            //Assert
            _repositoryMock.Verify(item => item.GetAll(It.IsAny<ISpecification<TodoItem>>()), Times.Once);
            Assert.Equal(count, result.Count());
            Assert.Single(result);
        }

        private static Expression<Func<TodoItem, bool>> GetFilterExpression(string text)
        {
            return PredicateBuilder.New<TodoItem>(false)
                            .Or(item => item.Title.ToLower().Contains(text.ToLower()) ||
                                        item.Description.ToLower().Contains(text.ToLower()));
        }
    }
}
