# Backend de Empleados

Este es un servicio web con NodeJS and Express que provee endpoints para consultar información de empleados.

## Instalación

Para instalar las dependencias, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

## Arranque

Para arrancar el servidor, ejecuta el siguiente comando:

```bash
node server.js
```

El servidor estará escuchando en `http://localhost:3000`.

## Endpoints

Todos los endpoints tienen un retardo de 1 segundo.

### Recuperar todos los empleados

Recupera una lista de todos los empleados.

- **URL:** `/empleados`
- **Método:** `GET`
- **Ejemplo:**
  ```
  http://localhost:3000/empleados
  ```

### Recuperar un empleado por DNI

Recupera un solo empleado por su DNI.

- **URL:** `/empleados/:id`
- **Método:** `GET`
- **Parámetros de URL:**
  - `id` (requerido) - El DNI del empleado.
- **Ejemplo:**
  ```
  http://localhost:3000/empleados/23274294
  ```

### Recuperar empleados por categoría

Recupera todos los empleados que pertenecen a una categoría específica.

- **URL:** `/empleados/categoria/:categoria`
- **Método:** `GET`
- **Parámetros de URL:**
  - `categoria` (requerido) - La categoría del empleado (e.g., `informatico`, `administrativo`, `gerente`, `operario`).
- **Ejemplo:**
  ```
  http://localhost:3000/empleados/categoria/informatico
  ```

### Recuperar empleados por género

Recupera todos los empleados de un género específico.

- **URL:** `/empleados/genero/:genero`
- **Método:** `GET`
- **Parámetros de URL:**
  - `genero` (requerido) - El género del empleado (`hombre` o `mujer`).
- **Ejemplo:**
  ```
  http://localhost:3000/empleados/genero/mujer
  ```

### Recuperar empleados por departamento (con fallo simulado)

Recupera todos los empleados de un departamento específico. Este endpoint tiene una probabilidad de fallo del 50% para simular un error en el servidor.

- **URL:** `/empleados/departamento/:departamento`
- **Método:** `GET`
- **Parámetros de URL:**
  - `departamento` (requerido) - El departamento del empleado (usa los mismos valores que para categoría).
- **Ejemplo:**
  ```
  http://localhost:3000/empleados/departamento/gerente
  ```
- **Respuesta Exitosa (200 OK):** Una lista de empleados.
- **Respuesta de Error (500 Internal Server Error):** Un mensaje de error.
