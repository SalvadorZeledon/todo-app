# TODO App - Sistema de Gestión de Tareas

Aplicación **To-Do List** desarrollada con **Node.js (Express)**, **PostgreSQL** y **Nginx**, completamente **contenedorizada con Docker Compose**.  
Proyecto realizado como parte de la **Tarea de Implantación** de Ingeniería de Software.

---

## 🚀 Tecnologías utilizadas
- **Node.js + Express** → Backend (API REST)
- **PostgreSQL** → Base de datos relacional
- **Nginx** → Servidor para el frontend
- **Docker & Docker Compose** → Orquestación de contenedores
- **HTML, CSS y JavaScript** → Interfaz de usuario

---

## 🏗️ Arquitectura general
<img width="578" height="269" alt="image" src="https://github.com/user-attachments/assets/7995ec96-816b-4180-b1c1-979b0c83b8fe" />

El frontend se sirve desde Nginx.
El backend expone una API REST en el puerto 3000.
La base de datos persiste los datos usando un volumen Docker.


## ⚙️ Configuración del entorno: 
Se creo un archivo .env en la raíz del proyecto con:

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=todo_db


## 🐳 Cómo ejecutar el proyecto:

## 🔧 Construir las imágenes:

docker compose build

## **▶️ Levantar los servicios**

docker compose up -d

## 🧱 Ver el estado de los contenedores
docker compose ps

## 🔍 Ver logs del backend
docker compose logs -f backend

## ⛔ Detener los servicios
docker compose down
