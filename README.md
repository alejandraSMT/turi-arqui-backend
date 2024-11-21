# INFORMACIÓN GENERAL 

## 1. Crear Kong (API Gateway)
Primero, se debe crear el Kong y la base de datos del mismo en PostgreSQL que alberga sus configuraciones. 
Asegurars de que el puerto *5432* no esté siendo utilizado, en caso se encuentre ocupado cambiar a otro puerto como el *5433* dentro del archivo ```kong.bat```.

Se debe correr el archivo ```kong.bat``` de la siguiente manera en un Command Prompt desde la raíz del proyecto:

```cmd
kong.bat
```

## 2. Levantar contenedores en cada microservicio
Desde la raíz del proyecto, se debe ejecutar el siguiente comando en un Command Prompt para crear y levantar todos los contenedores de los microservicios
```cmd
container.bat 
```

### Puertos de cada microservicio
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


## 3. Crear las rutas en el Kong Gateway
Correr desde la raíz el siguiente comando desde el Command Prompt:
```
routing.bat
```