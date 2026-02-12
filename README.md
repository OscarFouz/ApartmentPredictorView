# ApartmentPredictor — Frontend (React + Vite)

Este frontend implementa una interfaz completa para gestionar apartamentos y sus reviews, conectándose al backend Spring Boot mediante llamadas REST.

Incluye:

- Tabla interactiva de apartamentos
- Modal para ver, editar y crear apartamentos
- Gestión completa de reviews (listar y añadir)
- Hooks personalizados para separar lógica de UI
- Servicios API basados en Axios
- Estilos centralizados en `Table.css` y `index.css`
- Renderizado de imágenes dinámicas con Picsum
- Arquitectura limpia, modular y escalable

---

# Arquitectura del Proyecto

```
src/
│
├── components/
│   ├── ApartmentTable/
│   │   ├── ApartmentTable.jsx
│   │   ├── ApartmentRow.jsx
│   │   ├── ApartmentModal.jsx
│   │   ├── ApartmentForm.jsx
│   │   └── index.js
│   │
│   ├── Reviews/
│   │   ├── ReviewModal.jsx
│   │   └── ReviewFormModal.jsx
│   │
│   ├── ManagerTable.jsx
│   └── ApartmentManager.jsx
│
├── hooks/
│   ├── useApartments.js
│   └── useReviews.js
│
├── services/
│   └── apartmentService.js
│
├── styles/
│   └── Table.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Componentes Principales

## **1. ApartmentTable.jsx**
Es el componente principal de la UI.

Responsabilidades:

- Cargar apartamentos desde el backend (`useApartments`)
- Mostrar la tabla completa
- Abrir modales:
  - Modal de detalles/edición/creación (`ApartmentModal`)
  - Modal de reviews (`ReviewModal`)
  - Modal para añadir review (`ReviewFormModal`)
- Gestionar acciones CRUD

Incluye el botón:

```
Nuevo Apartamento
```

que abre un modal vacío para crear un nuevo registro.

---

## **2. ApartmentRow.jsx**
Representa una fila de la tabla.

Incluye:

- Imagen dinámica:
  ```
  https://picsum.photos/seed/${ap.id}/80/80
  ```
- Datos del apartamento
- Botones:
  - Ver detalles
  - Añadir review
  - Ver reviews (solo si existen)
  - Eliminar

---

## **3. ApartmentModal.jsx**
Modal reutilizable para:

- Ver detalles
- Editar apartamento
- Crear apartamento nuevo

Incluye:

- Imagen grande
- Formulario dinámico (`ApartmentForm`)
- Botón de cerrar

Evita cierre accidental:

```jsx
onClick={(e) => e.stopPropagation()}
```

---

## **4. ApartmentForm.jsx**
Formulario dinámico basado en las claves del objeto recibido.

Características:

- Genera inputs automáticamente
- Excluye `isNew`
- Permite editar todos los campos
- Usa clases CSS:
  - `.modal-row`
  - `.modal-content`
  - `.modal-footer`

---

# Gestión de Reviews

## **5. ReviewModal.jsx**
Muestra todas las reviews de un apartamento.

Incluye:

- Título
- Contenido
- Rating
- Fecha (`reviewDate`)

---

## **6. ReviewFormModal.jsx**
Formulario para añadir una nueva review.

Campos:

- title
- content
- rating (1–5)

Envía datos a:

```
POST /api/apartments/{id}/reviews
```

---

# Hooks Personalizados

## **useApartments.js**
Encapsula toda la lógica CRUD:

- `getAll()`
- `delete(id)`
- `create(data)`
- `update(id, data)`
- `loadApartments()`

Estados:

- `apartments`
- `isLoading`
- `isAxiosError`

---

## **useReviews.js**
Gestiona reviews por apartamento:

- `loadReviews(apartmentId)`
- `addReview(apartmentId, review)`

---

# Servicios API

## **apartmentService.js**
Usa Axios con baseURL:

```
http://localhost:8080/api
```

Métodos:

- `getAll()`
- `create(data)`
- `update(id, data)`
- `delete(id)`

Incluye interceptor de errores.

---

# Estilos — Table.css

Define:

- Tabla con header sticky
- Scroll vertical automático
- Modal centrado con overlay
- Botones pastel (`details-btn`, `delete-btn`)
- Inputs estilizados
- Layout compacto y profesional

---

# Conexión con Backend

El backend debe permitir CORS:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

El frontend consume:

```
http://localhost:8080/api
```

---

# Ejecución

Instalar dependencias:

```
npm install
```

Iniciar servidor:

```
npm run dev
```

Abrir en navegador:

```
http://localhost:5173
```

---

# Estado del Proyecto

- Frontend completamente funcional
- CRUD de apartamentos operativo
- Gestión de reviews integrada
- Modales estilizados y responsivos
- Arquitectura modular y escalable
- Código limpio y mantenible

