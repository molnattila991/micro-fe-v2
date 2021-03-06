# Todo App
This is a simple todo application that implements micro frontend and service-oriented architectures. During the development, I kept in mind the design patterns and the SOLID principles.
- All frontend applications were written in Angular 11+
    - State management libraries (NGRX, Akita)   
    - Angular Material
    - micro frontends communicate with each others via events
    - use custom npm packages
    - shell application contains two micro frontends
    - separated logic
    - smart/dumb components
- All API projects were written in ASP.NET Core 3.1
    - Entity Framework Core
    - CQRS/MediatR
    - Specification pattern
    - Repository pattern
    - XUnit, Moq
    - Swagger
    - Serilog
    - N-tier and Onion architecture (https://codewithmukesh.com/blog/onion-architecture-in-aspnet-core/ , https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
    - SqLite
- Each project has its own Dockerfile
- Nginx is used for reverse proxy/webserver
- docker-compose.yml is in root of the repository
    - it contains two ASP.NET Core web APIs, three Angular applications and an Nginx reverse proxy

## Run with Docker Compose
### Windows
- Download and install Docker Desktop for Windows 
    - https://hub.docker.com/editions/community/docker-ce-desktop-windows
- Clone repository into your desired folder
    - git clone https://github.com/molnattila991/micro-fe 
- Step into the folder
    - cd .\micro-fe\
- Build and run with Docker Compose
    - docker-compose up --build
        - it will download, build all images and run all containers
        - it may take a while because there is a lot to do
- Open http://localhost:19999/shell/ in your browser
    - you can also use the following urls
        - http://localhost:19999/mf1/
        - http://localhost:19999/mf2/
        - http://localhost:19999/api/v1/todo ...
        - http://localhost:19999/api/v2/todo ...
        - http://localhost:8090/swagger
        - http://localhost:8091/swagger
### Linux
- Install Docker
- Install Docker Compose
- Clone repository
    - git clone https://github.com/molnattila991/micro-fe
- Step into micre-fe folder
    - cd micro-fe/
- Build and run with Docker Compose
    - docker-compose up --build
- Open http://localhost:19999/shell/ in your browser
    - you can also use the following urls
        - http://localhost:19999/mf1/
        - http://localhost:19999/mf2/
        - http://localhost:19999/api/v1/todo ...
        - http://localhost:19999/api/v2/todo ...
        - http://localhost:8090/swagger
        - http://localhost:8091/swagger

## Stop running
- docker-compose down
