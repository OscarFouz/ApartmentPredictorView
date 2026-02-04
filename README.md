# ApartmentPredictor — Frontend (React + Vite)

Este frontend implementa una interfaz completa para gestionar apartamentos y sus reviews, conectándose al backend Spring Boot mediante llamadas REST.

Incluye:

- Tabla interactiva de apartamentos
- Modal para ver/editar/crear apartamentos
- Gestión de reviews por apartamento
- Componentes desacoplados y reutilizables
- Estilos centralizados en `Table.css`
- Renderizado de imágenes dinámicas con Picsum
- Arquitectura limpia y escalable

---

# Arquitectura del Proyecto
```md
src/
│
├── components/
│   ├── ApartmentTable.jsx
│   ├── ApartmentRow.jsx
│   ├── ApartmentModal.jsx
│   ├── ApartmentForm.jsx
│   ├── ReviewList.jsx
│   └── ReviewForm.jsx
│
├── services/
│   ├── apartmentService.js
│   └── reviewService.js
│
├── styles/
│   └── Table.css
│
├── App.jsx
├── main.jsx
└── index.html
```
---

# Componentes Principales

## ApartmentTable.jsx
- Renderiza la tabla completa de apartamentos.
- Obtiene los datos desde el backend usando `apartmentService`.
- Controla la apertura del modal.
- Muestra columnas como:
  - Imagen
  - Área
  - Precio
  - Habitaciones
  - Tipo de propiedad (`propertyType`)
- Usa `<ApartmentRow />` para cada fila.

---

## ApartmentRow.jsx
- Representa una fila de la tabla.
- Muestra los datos del apartamento.
- Incluye botones:
  - **Ver detalles**
  - **Eliminar**
- Renderiza la imagen con:
  ```
  https://picsum.photos/seed/${ap.id}/80/80
  ```

---

## ApartmentModal.jsx
- Muestra un modal centrado en pantalla.
- Contiene:
  - Imagen grande del apartamento
  - Formulario de edición/creación (`ApartmentForm`)
  - Botón de cerrar
- Evita cierre accidental con:
  ```jsx
  onClick={(e) => e.stopPropagation()}
  ```

---

## ApartmentForm.jsx
- Formulario dinámico basado en las claves del objeto.
- Permite editar todos los campos excepto:
  - `id`
  - `propertyType`
- Usa clases CSS:
  - `.modal-row`
  - `.modal-footer`
  - `.details-btn`

---

## ReviewList.jsx
- Lista todas las reviews del apartamento seleccionado.
- Permite eliminar reviews.
- Muestra:
  - Título
  - Contenido
  - Rating
  - Fecha

---

## ReviewForm.jsx
- Permite añadir una nueva review.
- Envía los datos a:
  ```
  POST /api/apartments/{id}/reviews
  ```

---

# Servicios (API)

## apartmentService.js

Incluye:

- `getAll()`
- `getById(id)`
- `create(apartment)`
- `update(id, apartment)`
- `remove(id)`
- `getReviews(id)`
- `exportJson()`

Usa `fetch` o `axios` según configuración.

---

## reviewService.js

Incluye:

- `addReview(apartmentId, review)`
- `deleteReview(reviewId)`

---

# Estilos — Table.css

Define:

- Tabla con header sticky
- Botones `.details-btn` y `.delete-btn`
- Modal centrado con overlay
- Inputs estilizados
- Layout compacto y profesional

---

# Conexión con Backend

El frontend se conecta al backend en:

```
http://localhost:8080/api
```

Asegúrate de que el backend tenga:

```
@CrossOrigin(origins = "http://localhost:5173")
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

- Frontend funcional y conectado al backend
- Modal y tabla completamente estilizados
- Gestión de reviews integrada
- Arquitectura limpia y escalable
