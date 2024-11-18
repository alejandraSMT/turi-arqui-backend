# INFORMACIÓN GENERAL 

## Levantar contenedores en cada microservicio
Asegurarse de estar dentro del directorio de su microservicio. Ejem: Si quiero levantar el contenedor de reviews-service, debo entrar a la carpeta /reviews-service y ahí correr el comando: 

```
docker-compose up --build
```


## Puertos
- reviews-service -> 3000
- auth-service -> 3002
- blog-service -> 3004
- business-service -> 3006
- itinerary-service -> 3008
- main-service -> 3010
- recommendation-service -> 3012
- reports-service -> 3014
- user-service -> 3016

> Revisen también los puertos del Grafana y Prometheus dentro del ```docker-compose.yml``` de su microservicio