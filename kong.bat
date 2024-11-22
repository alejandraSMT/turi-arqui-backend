@echo off
echo Iniciando configuración de Kong...
docker network create kong-net

docker run -d --name kong-database --network kong-net -p 5432:5432 -e POSTGRES_USER=kong -e POSTGRES_DB=kong -e POSTGRES_PASSWORD=kong postgres:latest

docker run --rm --network kong-net -e KONG_DATABASE=postgres -e KONG_PG_HOST=kong-database -e KONG_PG_PASSWORD=kong kong kong migrations bootstrap

docker run -d --name kong --network kong-net -e KONG_DATABASE=postgres -e KONG_PG_HOST=kong-database -e KONG_PG_PASSWORD=kong -e KONG_PROXY_ACCESS_LOG=/dev/stdout -e KONG_ADMIN_ACCESS_LOG=/dev/stdout -e KONG_PROXY_ERROR_LOG=/dev/stderr -e KONG_ADMIN_ERROR_LOG=/dev/stderr -e KONG_ADMIN_LISTEN=0.0.0.0:8001 -p 8000:8000 -p 8443:8443 -p 8001:8001 -p 8444:8444 kong

echo Kong configurado correctamente.
pause