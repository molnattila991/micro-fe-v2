using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo_api.CustomAttributes
{
    public class CustomAuthAttribute : Attribute
    {
        public string Role { get; set; }

        public CustomAuthAttribute(string role)
        {
            Role = role;
        }

        public CustomAuthAttribute()
        {

        }
    }
}
