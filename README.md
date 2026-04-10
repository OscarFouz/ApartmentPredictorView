# ApartmentPredictorView

**ApartmentPredictorView** es un frontend construido con React y Vite para gestionar propiedades, propietarios, reviews, escuelas, contratos y relaciones entre entidades.

## Características principales

- Gestión CRUD para propiedades, propietarios, reviewers, schools y contratos
- Navegación con React Router
- Providers globales con estado centralizado para roles, temas, filtros y propiedades
- Lazy loading de rutas para mejorar el rendimiento
- Manejo de errores con toast visuales
- Tests con Vitest y React Testing Library
- Formateo con Prettier y linting con ESLint

## Tecnología

- React 19
- Vite
- Axios
- React Router DOM
- Vitest + Testing Library
- ESLint + Prettier

## Estructura del proyecto

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SidebarMenu.jsx
│   │   └── TopFilterBAr.jsx
│   ├── map/Map.jsx
│   ├── owners/
│   ├── properties/
│   ├── reviewers/
│   ├── reviews/
│   └── schools/
├── context/
│   ├── reducers/
│   ├── AppProviders.jsx
│   ├── FeedbackProvider.jsx
│   ├── FiltersProvider.jsx
│   ├── PropertyProvider.jsx
│   ├── RoleProvider.jsx
│   └── ThemeProvider.jsx
├── hooks/
├── layout/
├── pages/
└── services/
```

## Scripts disponibles

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run format
npm run test
npm run test:run
npm run coverage
```

## Configuración de entorno

Copia `.env.example` a `.env` y ajusta la URL del backend si es necesario.

```bash
# Unix / macOS
cp .env.example .env

# Windows PowerShell
Copy-Item .env.example .env

# Windows CMD
copy .env.example .env
```

Variable principal:

- `VITE_API_BASE_URL` — baseURL de Axios para las peticiones al backend

## Documentación interna

La documentación del proyecto está ubicada en `src/docs/`:

- `src/docs/ManualTecnico.md` — detalles técnicos y arquitectura
- `src/docs/ManualUsuario.md` — guía de uso
- `src/docs/glosario.md` — definiciones y conceptos clave
- `src/docs/UML.md` — diagramas UML y relaciones

También puedes revisar `src/docs/README.md` para un índice rápido.

## Mejoras recientes

- `AppProviders` consolida providers globales
- Lazy loading de rutas con `React.lazy` + `Suspense`
- Contextos memoizados con `useMemo` y `useCallback`
- Feedback visual mediante toasts globales
- `Vite` configurado para tests con `Vitest`

## Cómo contribuir

1. Crea una rama nueva para tu cambio.
2. Ejecuta `npm run lint` y `npm run format`.
3. Añade tests si modificas lógica compartida.
4. Sube tu rama y crea un PR.

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
