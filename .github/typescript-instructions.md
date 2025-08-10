---
applyTo: '**/*.ts'
---
# Buenas Prácticas para TypeScript en mi-api-rest

> Estas instrucciones aplican a todos los archivos TypeScript (`*.ts`) del proyecto.

## Reglas y recomendaciones

- Usa tipado explícito en funciones, variables y parámetros.
- Prefiere interfaces sobre types para definir estructuras de datos y modelos.
- Evita el uso de `any`; si es necesario, documenta el motivo.
- Utiliza módulos ES (`import/export`) y exports nombrados.
- Organiza el código en archivos pequeños y enfocados (Single Responsibility Principle).
- Usa async/await para toda lógica asíncrona.
- Documenta funciones y clases con JSDoc cuando tengan lógica relevante.
- Mantén la lógica de negocio fuera de los archivos de rutas y modelos.
- Utiliza carpetas según la estructura propuesta (`routes`, `controllers`, `models`, etc).
- Aplica destructuración de objetos y arrays para mayor claridad.
- Usa Prettier y ESLint para mantener formato y calidad de código.
- Los tests deben estar en `src/tests/` y usar Jest/Supertest.
- Si usas Mongoose, define los modelos en `src/models/` y usa interfaces para el tipado.
- Evita duplicar código; reutiliza helpers y servicios.
- Actualiza este archivo si agregas nuevas convenciones o cambia la estructura.
