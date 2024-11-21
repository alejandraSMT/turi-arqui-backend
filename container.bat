@echo off
echo Iniciando instalación de dependencias y levantando contenedores para todos los microservicios...

:: Guardar la ruta base del proyecto
set BASE_DIR=%~dp0

:: Recorrer las carpetas de los microservicios
for %%d in (auth-service blog-service business-service itinerary-service main-service recommendation-service reports-service reviews-service user-service) do (
    echo ==========================================
    echo Procesando %%d...
    cd %BASE_DIR%services\%%d

    :: Ejecutar npm ci con manejo de errores
    echo Ejecutando npm ci en %%d...
    npm ci
    if %errorlevel% neq 0 (
        echo Advertencia: Ocurrió un error al ejecutar npm ci en %%d. Continuando con el siguiente paso...
    )

    :: Levantar los contenedores con docker-compose
    echo Levantando contenedores en %%d...
    docker-compose up -d
    if %errorlevel% neq 0 (
        echo Advertencia: Ocurrió un error al levantar los contenedores en %%d. Continuando con el siguiente servicio...
    )

    echo ==========================================
)

echo Todos los microservicios han sido procesados.
pause
