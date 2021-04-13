using System;
using System.Collections.Generic;
using System.Text;

namespace todo_api_domain.Common
{
    public abstract class BaseEntity
    {
        public int? Id { get; set; }
    }
}
