# 🧩 TODO App - Proyecto de Implantación de Sistemas

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

---

## 📘 Parte 1: Configuración del entorno y control de versiones

En esta primera etapa se realizaron las configuraciones iniciales necesarias para comenzar el proyecto.

### 🔹 Actividades realizadas:
- Instalación y configuración de **WSL2** y **Docker Desktop**.  
- Instalación y configuración de **Git** dentro de WSL.  
- Creación del repositorio remoto en **GitHub**.  
- Configuración del repositorio local y conexión con el remoto mediante SSH.  
- Creación de ramas para cada funcionalidad (`main`, `feature/backend`, `feature/frontend`, etc.).  
- Ejecución de commits y merge con resolución de conflictos.

> **Aquí insertar imágenes de:**
> - Configuración de Git.  
> - Repositorio en GitHub.  
> - Rama `feature/backend` o `feature/frontend`.  
> - Proceso de merge con conflictos resueltos.  

---

## ⚙️ Parte 2: Contenedorización de la aplicación

En esta fase se implementó la infraestructura con **Docker** para encapsular los componentes del proyecto.

### 🔹 Actividades realizadas:
- Creación de archivos `Dockerfile` para **backend** y **frontend**.  
- Creación del archivo `docker-compose.yml` para orquestar los servicios.  
- Definición de contenedores:
  - **db:** con imagen `postgres:15-alpine`
  - **backend:** basado en `node:18-alpine`
  - **frontend:** servido con `nginx`
- Implementación de **healthchecks** para verificar el estado de los servicios.
- Configuración de **volúmenes** para persistencia de datos en PostgreSQL.

**Ejemplo de comando de construcción:**
```bash
docker compose build
```

<img width="1056" height="828" alt="image" src="https://github.com/user-attachments/assets/bedbe73b-5f11-44cb-beef-d79a50734c78" />


**Ejemplo de comando de construcción:**
```bash
docker compose up -d
```

<img width="580" height="82" alt="image" src="https://github.com/user-attachments/assets/f29203a6-7a62-4626-8527-3d90d6771f5b" />

## 🧱 Parte 3: Integración y pruebas de funcionamiento

En esta parte se validó la correcta comunicación entre los servicios y la funcionalidad del sistema.

### 🔹 Actividades realizadas:

- Ejecución del backend y frontend conectados al contenedor de base de datos.
- Verificación del acceso a la API desde el navegador o consola (curl http://localhost:3000/tasks).
- Validación del frontend funcional en http://localhost:8080.
- Prueba de creación, lectura, actualización y eliminación de tareas.
- Verificación de persistencia de datos después de reiniciar los contenedores.
- Inspección de logs de backend y base de datos.

```bash
docker compose logs -f backend
```

<img width="646" height="37" alt="image" src="https://github.com/user-attachments/assets/c867277f-6cc3-4591-a722-b15b97ddfc71" />

```bash
curl http://localhost:3000/tasks
```

<img width="1893" height="65" alt="image" src="https://github.com/user-attachments/assets/a2db99c7-1200-425c-8ed0-7ce038a86683" />

- Para agregar una nueva tarea:
```bash
curl -X POST http://localhost:3000/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "Mi primera tarea desde terminal"}'

```

- Esto debe retornar algo parecido a esto: 
```bash
{"id":1,"title":"Mi primera tarea desde terminal","completed":false}

```

- Así se ve ejecutandose:
  
<img width="1394" height="47" alt="image" src="https://github.com/user-attachments/assets/0cdbfa91-96ae-4fc4-bc2a-6efa6513a20e" />





### 🔹 Vista desde el FrontEnd: 
<img width="1814" height="589" alt="image" src="https://github.com/user-attachments/assets/a8b9e4f6-9b99-4201-b858-c34fcdfc7da9" />


