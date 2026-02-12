# Glosario — React + Axios + Hooks  
### (Solo los conceptos usados en ApartmentPredictor)

Este glosario contiene únicamente los términos que aparecen en tu frontend real.

---

# 1. React

## **Componente funcional**
Función que devuelve JSX.  
Todos tus componentes son de este tipo.

Ejemplo:
```jsx
export default function ApartmentTable() { ... }
```

---

## **JSX**
Sintaxis que mezcla HTML + JavaScript.  
React la transforma en elementos de UI.

Ejemplo:
```jsx
<div className="modal"></div>
```

---

## **Props**
Datos que un componente recibe desde su padre.

Ejemplo real:
```jsx
<ApartmentRow ap={ap} onDelete={...} />
```

---

## **Estado (useState)**
Permite almacenar valores que cambian y causan re-render.

Ejemplos reales:
```jsx
const [modalData, setModalData] = useState(null);
const [reviewModal, setReviewModal] = useState(null);
```

---

## **Renderizado condicional**
Mostrar un componente solo si se cumple una condición.

Ejemplo real:
```jsx
{modalData && <ApartmentModal data={modalData} />}
```

---

## **Eventos**
Funciones ejecutadas por interacción del usuario.

Ejemplo:
```jsx
<button onClick={onDelete}>Eliminar</button>
```

---

## **Fragment (`<>...</>`)**
Agrupa elementos sin añadir un `<div>` extra.

Ejemplo:
```jsx
<>
  <Modal />
  <Table />
</>
```

---

# 2. Hooks

## **useState**
Crea estado interno en un componente.

Ejemplo:
```jsx
const [form, setForm] = useState(initialData);
```

---

## **useEffect**
Ejecuta código al montar el componente o cuando cambian dependencias.

Ejemplo real:
```jsx
useEffect(() => {
  apartmentService.getAll().then(setApartments);
}, []);
```

---

## **Custom Hooks**
Hooks creados por ti para separar lógica de UI.

### **useApartments**
Encapsula:
- Carga de apartamentos
- CRUD completo
- Estados de carga y error

### **useReviews**
Encapsula:
- Carga de reviews por apartamento
- Creación de nuevas reviews

Ventajas:
- Código más limpio
- Componentes más simples
- Reutilización

---

# 3. Axios

## **Axios**
Cliente HTTP usado para comunicarte con el backend.

Tu instancia:
```js
const api = axios.create({
  baseURL: "http://localhost:8080/api",
});
```

---

## **Métodos usados**
Tu proyecto usa solo estos:

- `api.get(url)`
- `api.post(url, data)`
- `api.put(url, data)`
- `api.delete(url)`

---

## **Interceptors**
Capturan errores globalmente.

Ejemplo real:
```js
api.interceptors.response.use(
  res => res,
  err => {
    console.error("API Error:", err);
    return Promise.reject(err);
  }
);
```

---

# 4. Modales

## **Modal**
Ventana emergente usada para:
- Crear apartamento
- Editar apartamento
- Ver reviews
- Añadir review

---

## **Overlay**
Capa oscura detrás del modal.

Ejemplo real:
```css
.modal-overlay {
  background: rgba(0,0,0,0.6);
}
```

---

## **stopPropagation**
Evita que un clic dentro del modal cierre la ventana.

Ejemplo real:
```jsx
<div className="modal" onClick={(e) => e.stopPropagation()}>
```

---

# 5. Servicios API

## **apartmentService**
Capa que centraliza las peticiones al backend.

Métodos reales:
```js
getAll()
create(data)
update(id, data)
delete(id)
```

---

# 6. Estilos

## **className**
Forma de aplicar clases CSS en React.

Ejemplo:
```jsx
<button className="details-btn">Guardar</button>
```

---

## **Table.css**
Define:
- Tabla
- Header sticky
- Scroll vertical
- Botones pastel
- Modales

---

# 7. Comunicación con Backend

## **CORS**
El backend debe permitir acceso desde el frontend:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

---

## **Endpoints usados**
Tu frontend consume:

```
GET    /api/apartments
POST   /api/apartments
PUT    /api/apartments/{id}
DELETE /api/apartments/{id}

GET    /api/apartments/{id}/reviews
POST   /api/apartments/{id}/reviews
```

---

# Fin del Glosario
