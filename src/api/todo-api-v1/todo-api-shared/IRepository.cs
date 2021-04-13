using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace todo_api_shared
{
    public interface IRepository<T> where T : class, new()
    {
        Task<IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> GetAll(ISpecification<T> specification);

        Task<T> Add(T entity);

        Task<T> Update(T entity);

        Task Delete(int id);

        Task<T> GetById(int id);

        Task Save();
    }
}
