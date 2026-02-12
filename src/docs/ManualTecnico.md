# MANUAL TÉCNICO  
## Proyecto: ApartmentPredictor — Frontend  
Tecnologías: React, Vite, Axios, Hooks, CSS Modules

---

# 1. Introducción

El frontend de ApartmentPredictor es una aplicación desarrollada con **React + Vite**, diseñada para interactuar con el backend Spring Boot mediante una API REST.  
Su objetivo es permitir la gestión completa de apartamentos y sus reviews mediante:

- Tabla interactiva
- Modales para ver, editar y crear apartamentos
- Gestión de reviews (listar y añadir)
- Hooks personalizados para separar lógica de UI
- Servicios API basados en Axios
- Estilos centralizados y diseño responsivo

Este manual describe la arquitectura interna, el flujo de datos, los componentes, los hooks, los servicios y los estilos del proyecto.

---

# 2. Arquitectura General

La estructura del proyecto sigue un patrón modular:

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

# 3. Flujo de Datos del Sistema

El flujo principal es:

1. **ApartmentTable.jsx** solicita los apartamentos usando `useApartments()`.
2. `useApartments()` llama a `apartmentService.getAll()`.
3. Axios consulta el backend en `http://localhost:8080/api/apartments`.
4. Los datos se guardan en el estado `apartments`.
5. La tabla renderiza cada fila mediante `ApartmentRow.jsx`.
6. Al pulsar:
   - **Ver detalles** → abre `ApartmentModal.jsx`
   - **Nuevo Apartamento** → abre modal vacío
   - **Añadir review** → abre `ReviewFormModal.jsx`
   - **Ver reviews** → abre `ReviewModal.jsx`
7. Los cambios se envían al backend mediante los servicios API.
8. Tras crear/editar/eliminar, se actualiza el estado global.

---

# 4. Componentes

## 4.1 ApartmentTable.jsx (componente principal)

Responsabilidades:

- Cargar apartamentos
- Renderizar tabla
- Controlar modales
- Gestionar acciones CRUD
- Integrar reviews

Estados internos:

```js
const [modalData, setModalData] = useState(null);
const [reviewModal, setReviewModal] = useState(null);
const [reviewFormModal, setReviewFormModal] = useState(null);
```

Incluye el botón:

```jsx
<button className="details-btn">Nuevo Apartamento</button>
```

que abre un modal vacío para crear un nuevo registro.

---

## 4.2 ApartmentRow.jsx

Representa una fila de la tabla.

Incluye:

- Imagen dinámica desde Picsum
- Datos del apartamento
- Botones:
  - Ver detalles
  - Añadir review
  - Ver reviews (si existen)
  - Eliminar

---

## 4.3 ApartmentModal.jsx

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

## 4.4 ApartmentForm.jsx

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

# 5. Gestión de Reviews

## 5.1 ReviewModal.jsx

Muestra todas las reviews de un apartamento.

Incluye:

- Título
- Contenido
- Rating
- Fecha (`reviewDate`)

---

## 5.2 ReviewFormModal.jsx

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

# 6. Hooks Personalizados

## 6.1 useApartments.js

Encapsula toda la lógica CRUD:

```js
getAll()
delete(id)
create(data)
update(id, data)
loadApartments()
```

Estados:

```js
apartments
isLoading
isAxiosError
```

Ventajas:

- Separa lógica de UI
- Facilita testing
- Evita duplicación de código

---

## 6.2 useReviews.js

Gestiona reviews por apartamento:

```js
loadReviews(apartmentId)
addReview(apartmentId, review)
```

---

# 7. Servicios API

## 7.1 apartmentService.js

Usa Axios con baseURL:

```
http://localhost:8080/api
```

Métodos:

```js
getAll()
create(data)
update(id, data)
delete(id)
```

Incluye interceptor de errores:

```js
api.interceptors.response.use(...)
```

---

# 8. Estilos

## 8.1 Table.css

Define:

- Tabla con header sticky
- Scroll vertical automático
- Modal centrado con overlay
- Botones pastel (`details-btn`, `delete-btn`)
- Inputs estilizados
- Layout compacto y profesional

---

## 8.2 index.css

Define:

- Estilos globales
- Animación del título
- Reset básico
- Tipografías
- Modo claro/oscuro

---

# 9. Conexión con Backend

El backend debe permitir CORS:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

El frontend consume:

```
http://localhost:8080/api
```

---

# 10. Ejecución

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

# 11. Estado del Proyecto

- Frontend completamente funcional
- CRUD de apartamentos operativo
- Gestión de reviews integrada
- Modales estilizados y responsivos
- Arquitectura modular y escalable
- Código limpio y mantenible

---

# 12. Conclusión

El frontend de ApartmentPredictor está diseñado con una arquitectura clara, modular y escalable.  
El uso de hooks personalizados, servicios API y componentes reutilizables permite mantener un código limpio, fácil de extender y de mantener.

