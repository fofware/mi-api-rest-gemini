
# Copilot Instructions for mi-api-rest

## Project Overview
- Express.js REST API en TypeScript, preparado para escalar y agregar MCP.
- Entrada principal: `src/index.ts`.
- Tests con Jest y Supertest (`src/tests/`).

## Estructura de Directorios
```
src/
  index.ts            # Entry point, Express app setup
  routes/             # Define rutas de la API (ej: user, auth, etc)
  controllers/        # Lógica de negocio por endpoint
  models/             # Modelos de Mongoose (documentos MongoDB)
  services/           # Lógica reutilizable, helpers, acceso a datos
  middlewares/        # Middlewares personalizados (auth, logging, etc)
  utils/              # Utilidades generales
  config/             # Configuración (db, env, etc)
  mcp/                # Integración MCP futura
  tests/              # Tests unitarios y de integración
```

## Patrones y Convenciones
- Rutas se definen en `routes/`, controladores en `controllers/`, modelos en `models/`.
- Usa `mongoose` para modelos de datos (MongoDB).
- Tests deben ir en `tests/` y usar Supertest/Jest.
- Usa async/await para toda lógica asíncrona.
- Prefiere exports nombrados.
- Mantén la lógica de negocio fuera de los archivos de rutas.

## Workflows
- **Build:** `npm run build` (genera `dist/`)
- **Start:** `npm start` (ejecuta `dist/index.js`)
- **Test:** `npm test` (Jest)
- **Lint:** `npm run lint` (ESLint)
- **Format:** `npm run format` (Prettier)

## Ejemplo: Nueva Ruta
`src/routes/ping.ts`:
```typescript
import { Router } from 'express';
const router = Router();
router.get('/ping', (req, res) => res.send('pong'));
export default router;
```
Luego importa y monta en `src/routes/index.ts` y desde `src/index.ts`.

## Archivos Clave
- `src/index.ts`: Setup Express
- `src/routes/`: Rutas
- `src/controllers/`: Controladores
- `src/models/`: Modelos
- `src/tests/`: Tests
- `package.json`: Scripts y dependencias


## Buenas Prácticas para TypeScript en este Proyecto

- Usa siempre tipado explícito en funciones, variables y parámetros.
- Prefiere interfaces sobre types para definir estructuras de datos y modelos.
- Evita el uso de `any`; si es necesario, documenta el motivo.
- Utiliza módulos ES (`import/export`) y exports nombrados.
- Organiza el código en archivos pequeños y enfocados (Single Responsibility Principle).
- Usa async/await para toda lógica asíncrona.
- Documenta las funciones y clases con JSDoc cuando tengan lógica relevante.
- Mantén la lógica de negocio fuera de los archivos de rutas y modelos.
- Utiliza carpetas según la estructura propuesta (`routes`, `controllers`, `models`, etc).
- Aplica destructuración de objetos y arrays para mayor claridad.
- Usa Prettier y ESLint para mantener formato y calidad de código.
- Los tests deben estar en `src/tests/` y usar Jest/Supertest.
- Si usas Mongoose, define los modelos en `src/models/` y usa interfaces para el tipado.
- Evita duplicar código; reutiliza helpers y servicios.
- Actualiza este archivo si agregas nuevas convenciones o cambia la estructura.
