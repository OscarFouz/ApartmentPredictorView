# UML — Frontend (React + Vite)

Este documento representa la arquitectura del frontend mediante diagramas ASCII UML.

---

# 1. Diagrama General de Componentes

```
┌──────────────────────────────┐
│            App.jsx           │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│        ManagerTable.jsx      │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────────────────────┐
│           ApartmentTable.jsx                 │
├──────────────────────────────────────────────┤
│ - apartments                                 │
│ - modalData                                  │
│ - reviewModal                                │
│ - reviewFormModal                            │
│                                              │
│ + openReviews()                              │
│ + openReviewForm()                           │
│ + setModalData()                             │
└───────────────┬──────────────────────────────┘
                │
                │ renders many
                ▼
        ┌──────────────────────┐
        │   ApartmentRow.jsx   │
        └──────────────────────┘

```

---

# 2. Diagrama de Modales

```
┌──────────────────────────────┐
│      ApartmentTable.jsx      │
└───────────────┬──────────────┘
                │
     ┌──────────┼──────────┬──────────┐
     ▼          ▼           ▼          ▼
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐
│Apartment │ │ReviewModal│ │ReviewForm│ │ApartmentForm  │
│ Modal    │ │   .jsx    │ │ Modal.jsx│ │    .jsx       │
└──────────┘ └──────────┘ └──────────┘ └──────────────┘
```

---

# 3. Diagrama de Hooks

```
┌──────────────────────────────┐
│      ApartmentTable.jsx      │
└───────────────┬──────────────┘
                │
     ┌──────────┼──────────┐
     ▼          ▼           ▼
┌──────────┐ ┌──────────┐ ┌──────────────┐
│useApart. │ │useReviews│ │apartmentServ.│
│  .js     │ │   .js     │ │    .js       │
└──────────┘ └──────────┘ └──────────────┘
```

---

# 4. Diagrama de Servicios API

```
┌──────────────────────────────┐
│     apartmentService.js      │
├──────────────────────────────┤
│ + getAll()                   │
│ + create(data)               │
│ + update(id, data)           │
│ + delete(id)                 │
└──────────────────────────────┘

┌──────────────────────────────┐
│        Backend API           │
├──────────────────────────────┤
│ GET    /api/apartments       │
│ POST   /api/apartments       │
│ PUT    /api/apartments/{id}  │
│ DELETE /api/apartments/{id}  │
│ GET    /api/apartments/{id}/reviews │
│ POST   /api/apartments/{id}/reviews │
└──────────────────────────────┘
```

---

# 5. Diagrama de Flujo de Datos

```
User
 │ clicks
 ▼
ApartmentTable.jsx
 │ calls
 ▼
useApartments.js ───────────────► apartmentService.js
 │ updates state                  │
 ▼                                │ axios → backend
UI re-renders                     ▼
                           Spring Boot API
```

---

# 6. Diagrama de Componentes Detallado

```
┌──────────────────────────────────────────────────────────────┐
│                       ApartmentTable.jsx                      │
├──────────────────────────────────────────────────────────────┤
│ - apartments                                                  │
│ - modalData                                                   │
│ - reviewModal                                                 │
│ - reviewFormModal                                             │
│                                                              │
│ + remove(id)                                                  │
│ + add(data)                                                   │
│ + edit(data)                                                  │
│ + openReviews(ap)                                             │
│ + openReviewForm(ap)                                          │
└───────────────┬──────────────────────────────────────────────┘
                │
                │ renders list
                ▼
        ┌──────────────────────────────┐
        │        ApartmentRow.jsx      │
        ├──────────────────────────────┤
        │ + onSelect()                 │
        │ + onDelete()                 │
        │ + onAddReview()              │
        │ + onShowReviews()            │
        └──────────────────────────────┘
```

---

# 7. Diagrama de Modales Detallado

```
┌──────────────────────────────┐
│      ApartmentModal.jsx      │
├──────────────────────────────┤
│ - data                       │
│ + onSave(formData)           │
│ + onClose()                  │
└───────────────┬──────────────┘
                │ contains
                ▼
        ┌──────────────────────────────┐
        │       ApartmentForm.jsx      │
        ├──────────────────────────────┤
        │ - form                       │
        │ + handleChange()             │
        │ + onSubmit()                 │
        └──────────────────────────────┘
```

---

# 8. Diagrama de Reviews

```
┌──────────────────────────────┐
│      ReviewModal.jsx         │
├──────────────────────────────┤
│ - reviews                    │
│ + onClose()                  │
└───────────────┘

┌──────────────────────────────┐
│    ReviewFormModal.jsx       │
├──────────────────────────────┤
│ - form                       │
│ + onSave(form)               │
│ + onClose()                  │
└──────────────────────────────┘
```

---

# 9. Resumen del Modelo

- **App.jsx** → carga la tabla principal  
- **ApartmentTable.jsx** → núcleo del frontend  
- **ApartmentRow.jsx** → filas de la tabla  
- **ApartmentModal.jsx** → ver/editar/crear  
- **ReviewModal.jsx** → ver reviews  
- **ReviewFormModal.jsx** → añadir review  
- **useApartments.js** → CRUD apartamentos  
- **useReviews.js** → CRUD reviews  
- **apartmentService.js** → Axios + backend  

---

# Fin del documento UML
