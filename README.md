# 🎮 Job Simulator — REST CRUD API (Nivel 3)

## 📌 Descripción

API REST desarrollada en **Node.js + Express** que implementa operaciones CRUD completas con persistencia en **PostgreSQL**, ejecutándose en un entorno completamente **containerizado con Docker**.

El recurso implementado corresponde al dominio de **videojuegos**, manteniendo el contrato requerido (`campo1` a `campo6`) para compatibilidad con el frontend provisto.

---

## 🧱 Stack tecnológico

* **Backend:** Node.js + Express
* **Base de datos:** PostgreSQL
* **Containerización:** Docker + docker-compose
* **Lenguaje:** JavaScript

---

## 📂 Estructura del proyecto

```
api/
├── controller/
├── routes/
├── db.js
├── server.js

frontend/
sql/
docker-compose.yml
.env.example
```

Separación clara de responsabilidades:

* `db.js` → conexión a base de datos
* `routes/` → definición de endpoints
* `controller/` → lógica de negocio
* `server.js` → punto de entrada

---

## 🚀 Ejecución del proyecto

### 1. Clonar repositorio

```bash
git clone <repo-url>
cd <repo>
```

### 2. Crear archivo `.env`

Basado en `.env.example`

### 3. Levantar el sistema

```bash
docker-compose up --build
```

---

## 🌐 Servicios

* **Frontend:** http://localhost:8080
* **Backend:** http://localhost:3000

---

## 📦 Recurso: videojuegos

Aunque el dominio es videojuegos, el contrato exige los siguientes campos:

| Campo  | Tipo    |
| ------ | ------- |
| campo1 | string  |
| campo2 | string  |
| campo3 | string  |
| campo4 | integer |
| campo5 | float   |
| campo6 | boolean |

---

## 🔌 Endpoints

| Método | Endpoint           | Descripción           |
| ------ | ------------------ | --------------------- |
| GET    | `/videojuegos`     | Obtener todos         |
| GET    | `/videojuegos/:id` | Obtener uno           |
| POST   | `/videojuegos`     | Crear                 |
| PUT    | `/videojuegos/:id` | Reemplazo total       |
| PATCH  | `/videojuegos/:id` | Actualización parcial |
| DELETE | `/videojuegos/:id` | Eliminar              |

---

## ✅ Validaciones

* Todos los campos son requeridos en `POST` y `PUT`
* Validación estricta de tipos:

  * `campo4` → integer
  * `campo5` → float
  * `campo6` → boolean
* Validación parcial en `PATCH`

---

## 📊 Códigos HTTP

* `200` → OK
* `201` → Creado
* `204` → Eliminado
* `400` → Error de validación
* `404` → No encontrado
* `500` → Error interno

---

## 🗄️ Base de datos

La base de datos se inicializa automáticamente mediante:

```
sql/init.sql
```

Ejecutado por Docker en el primer arranque.

---

## ⚙️ Variables de entorno

Ver archivo `.env.example`

---

## 🔒 Buenas prácticas implementadas

* Uso de variables de entorno (sin hardcodeo)
* Separación de capas
* Manejo de errores
* Validaciones completas
* Queries parametrizadas (prevención de SQL injection)
* Espera activa de la base de datos antes de iniciar la API

---

## 🐳 Docker

El sistema se levanta con un único comando:

```bash
docker-compose up --build
```

Incluye:

* Servicio de backend
* Servicio de base de datos
* Servicio de frontend

---

## ⭐ Nivel alcanzado

✔ Nivel 3 — Senior

Cumple todos los requisitos:

* CRUD completo
* PATCH implementado
* PostgreSQL con Docker
* `.env.example`
* `.gitignore` correcto
* Script SQL automático
* Separación de responsabilidades

---

## ➕ Bonus

✔ Integración full stack (frontend + backend en docker-compose)

---

## 📌 Notas

* El frontend consume la API automáticamente sin configuración adicional
* El contrato del API se respeta estrictamente

---
