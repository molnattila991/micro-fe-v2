# Build and Run in Visual Studio 2019 Community Edition
- git clone https://github.com/molnattila991/eurofins-api
- Open the Solution
- Run project with IIS Express
- It will open http://localhost:5000/swagger/index.html

# Unit testing
- git clone https://github.com/molnattila991/eurofins-api
- cd .\eurofins-api\
- dotnet test

# Build and Run in Terminal
## Use the following commands
- git clone https://github.com/molnattila991/eurofins-api
- cd .\eurofins-api\
- dotnet restore "todo-api/todo-api.csproj"
- dotnet build "todo-api/todo-api.csproj" -c Release
- dotnet .\todo-api\bin\Release\netcoreapp3.1\todo-api.dll

## Open the following url in browser
- http://localhost:5000/swagger/index.html

# Test In Postman
- Import TodoAPI.postman_collection.json into Postman
- You can find the test file in repository root
