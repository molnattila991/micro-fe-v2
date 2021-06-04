using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
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
        private HttpClient _client;

        public AuthMiddleware(RequestDelegate next, HttpClient client)
        {
            _next = next;
            _client = client;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                var endpoint = context.Features.Get<IEndpointFeature>()?.Endpoint;
                var attribute = endpoint?.Metadata.GetMetadata<CustomAuthAttribute>();

                if (attribute != null)
                {

                    _client.BaseAddress = new Uri("http://almatest.westeurope.cloudapp.azure.com:19999/api/auth/user/tokens/");
                    _client.DefaultRequestHeaders.Add("Authorization", context.Request.Headers.ElementAt(2).Value[0]);

                    var result = await _client.GetAsync("valid");
                    var resultResult = result.Content.ReadAsStringAsync();

                    if (result.StatusCode == HttpStatusCode.OK)
                    {
                        await _next(context);
                    }
                    else
                    {
                        context.Response.Clear();
                        context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                        await context.Response.WriteAsync("Unauthorized");
                    }
                }
            }
            catch (Exception)
            {
                //TODO log error
                context.Response.Clear();
                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                await context.Response.WriteAsync("Error happened during auth.");
            }
        }
    }
}
