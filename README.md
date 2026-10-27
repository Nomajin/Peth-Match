# PetMatch — Entorno de desarrollo

## Descripción

PetMatch es una plataforma web orientada a conectar personas interesadas en adoptar animales con protectoras y refugios.

Este repositorio contiene la configuración inicial del entorno de desarrollo mediante Docker Compose.

## Tecnologías

- Node.js: ejecución del backend.
- Express: creación de la API.
- PostgreSQL: base de datos relacional.
- Docker: creación de contenedores.
- Docker Compose: coordinación de los servicios.

## Requisitos previos

- Git.
- Docker Desktop en Windows o macOS, o Docker Engine y el complemento Docker Compose en Linux.
- Conexión a Internet durante la primera descarga de imágenes y dependencias.

## Instalación

### 1. Descargar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
cd PetMatch
```

Sustituye `URL_DEL_REPOSITORIO` por la dirección real del repositorio de GitHub.

### 2. Crear el archivo de configuración local

Copia la plantilla `.env.example` a `.env`.

En Linux o macOS:

```bash
cp .env.example .env
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Si es necesario, modifica los valores de `.env` para tu entorno local. No subas este archivo a GitHub.

### 3. Construir y arrancar los servicios

```bash
docker compose up -d --build
```

El comando construye la imagen del backend y arranca los contenedores del backend y de PostgreSQL.

### 4. Comprobar el estado de los contenedores

```bash
docker compose ps
```

Comprueba que los servicios aparecen activos. PostgreSQL debe superar su comprobación de salud.

### 5. Probar la API

Abre estas direcciones en el navegador:

- `http://localhost:3000/`
- `http://localhost:3000/health`

La primera debe mostrar un mensaje de funcionamiento. La segunda debe indicar que la API está operativa y conectada a la base de datos.

### 6. Consultar los registros

```bash
docker compose logs -f
```

Para salir de la visualización de registros, pulsa `Ctrl+C`. Esto no detiene necesariamente los contenedores.

### 7. Detener el entorno

```bash
docker compose down
```

Este comando detiene y elimina los contenedores, pero conserva el volumen de datos de PostgreSQL.

Para borrar también el volumen y sus datos locales de prueba:

```bash
docker compose down -v
```

**Advertencia:** el último comando elimina los datos almacenados en el volumen local de PostgreSQL.

## Estructura del proyecto

```text
PetMatch/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── server.js
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Seguridad

- El archivo `.env` no debe subirse al repositorio.
- `.env.example` debe contener únicamente valores de ejemplo.
- Las credenciales utilizadas en este entorno son exclusivamente locales.
- Antes de desplegar en producción se deben configurar credenciales seguras, permisos adecuados y conexiones cifradas según la infraestructura utilizada.