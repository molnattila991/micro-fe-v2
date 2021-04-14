# Eurofins App Stack

## Run with Docker Compose
- download and install Docker Desktop for Windows (https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- git clone https://github.com/molnattila991/micro-fe
- cd .\micro-fe\
- docker-compose build
    - it will download, build and run all images
    - it may take a while because there is a lot to do
- open http://localhost:19999/shell/ in your browser
    - you can also use the following urls
        - http://localhost:19999/mf1/
        - http://localhost:19999/mf2/
        - http://localhost:19999/api/v1/todo ...
        - http://localhost:19999/api/v2/todo ...
        - http://localhost:8090/swagger
        - http://localhost:8091/swagger

## Stop running
- docker-compose down