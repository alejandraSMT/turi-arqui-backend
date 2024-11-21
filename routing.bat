@echo off
echo Configurando servicios y rutas en Kong...

:: Configurar reviews-service
curl -i -X POST http://localhost:8001/services/ --data name=reviews-service --data url=http://reviews-service:3000
curl -i -X POST http://localhost:8001/services/reviews-service/routes --data paths[]=/reviews-service

:: Configurar auth-service
curl -i -X POST http://localhost:8001/services/ --data name=auth-service --data url=http://auth-service:3002
curl -i -X POST http://localhost:8001/services/auth-service/routes --data paths[]=/auth-service

:: Configurar blog-service
curl -i -X POST http://localhost:8001/services/ --data name=blog-service --data url=http://blog-service:3004
curl -i -X POST http://localhost:8001/services/blog-service/routes --data paths[]=/blog-service

:: Configurar business-service
curl -i -X POST http://localhost:8001/services/ --data name=business-service --data url=http://business-service:3006
curl -i -X POST http://localhost:8001/services/business-service/routes --data paths[]=/business-service

:: Configurar itinerary-service
curl -i -X POST http://localhost:8001/services/ --data name=itinerary-service --data url=http://itinerary-service:3008
curl -i -X POST http://localhost:8001/services/itinerary-service/routes --data paths[]=/itinerary-service

:: Configurar main-service
curl -i -X POST http://localhost:8001/services/ --data name=main-service --data url=http://main-service:3010
curl -i -X POST http://localhost:8001/services/main-service/routes --data paths[]=/main-service

:: Configurar recommendation-service
curl -i -X POST http://localhost:8001/services/ --data name=recommendation-service --data url=http://recommendation-service:3012
curl -i -X POST http://localhost:8001/services/recommendation-service/routes --data paths[]=/recommendation-service

:: Configurar reports-service
curl -i -X POST http://localhost:8001/services/ --data name=reports-service --data url=http://reports-service:3014
curl -i -X POST http://localhost:8001/services/reports-service/routes --data paths[]=/reports-service

:: Configurar user-service
curl -i -X POST http://localhost:8001/services/ --data name=user-service --data url=http://user-service:3016
curl -i -X POST http://localhost:8001/services/user-service/routes --data paths[]=/user-service

echo Configuración completada.
pause
