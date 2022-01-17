# Rest & Graphql POC

An ExpressJS server application (NodeJS - Typescript) up [Docker](https://docker.com/)
with Clean Architecture.


## Install dependencies
### Using npm
```
npm i
```

## Running App
### Local Stage
Create an env file configuration over root directory to deploy and run
```
npm run start:dev
```

### Docker
#### Simple compose
```
docker-compose up
```
#### Build
```
docker-compose -f docker-compose.yml up -d --build
```
