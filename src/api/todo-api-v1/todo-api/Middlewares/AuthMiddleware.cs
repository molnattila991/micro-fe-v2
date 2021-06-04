using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using todo_api.CustomAttributes;

namespace todo_api.Middlewares
{
    public class AuthMiddleware
    {
        private RequestDelegate _next;
        ILogger<AuthMiddleware> _logger;

        public AuthMiddleware(
            RequestDelegate next,
            ILogger<AuthMiddleware> logger
            )
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                var endpoint = context.Features.Get<IEndpointFeature>()?.Endpoint;
                var attribute = endpoint?.Metadata.GetMetadata<CustomAuthAttribute>();

                if (attribute != null)
                {
                    var result = new HttpResponseMessage();
                    using (var client = new HttpClient())
                    {
                        client.BaseAddress = new Uri("http://almatest.westeurope.cloudapp.azure.com:19999/api/auth/user/tokens/");
                        client.DefaultRequestHeaders.Add("Authorization", context.Request.Headers.ElementAt(2).Value[0]);

                        result = await client.GetAsync("valid");
                    }

                    if (result.StatusCode == HttpStatusCode.OK)
                    {
                        await _next(context);
                    }
                    else
                    {
                        _logger.LogInformation("User try to get resource without permission.");
                        context.Response.Clear();
                        context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                        await context.Response.WriteAsync("Unauthorized");
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message, e);
                context.Response.Clear();
                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                await context.Response.WriteAsync("Error happened during auth.");
            }
        }
    }
}
