# Portfolio de Diseño de Videojuegos - Cristina

Portfolio profesional construido con React, TypeScript y Tailwind CSS siguiendo el patrón Atomic Design.

## 🚀 Características

- ⚛️ React 19.0.0 con TypeScript
- 🎨 Tailwind CSS 4.0.0
- 🏗️ Arquitectura Atomic Design
- 📱 Responsive Design (Mobile-First)
- ⚡ Vite como build tool
- 🎭 Preparado para animaciones con GSAP
- 🎮 Diseño gaming con paleta neón
- ♿ Accesibilidad y buenas prácticas

## 🎨 Paleta de Colores

- **Tech Black**: `#0D0D0D` - Fondo principal
- **Neon Turquoise**: `#00FFF0` - Acento principal
- **Neon Fuchsia**: `#FF00C8` - Contraste vibrante
- **Elevated Surface**: `#1A1A1A` - Cards y superficies
- **Text Primary**: `#FFFFFF` - Texto principal

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 👀 Preview

```bash
npm run preview
```

Previsualiza la versión de producción localmente

## 📁 Estructura del Proyecto

Ver [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) para la estructura completa del proyecto.

```
src/
├── components/          # Atomic Design Components
│   ├── atoms/          # Componentes básicos
│   ├── molecules/      # Combinaciones de átomos
│   ├── organisms/      # Secciones complejas
│   └── templates/      # Layouts de página
├── pages/              # Páginas completas
├── hooks/              # Custom React Hooks
├── utils/              # Funciones de utilidad
├── types/              # Tipos de TypeScript
├── data/               # Datos estáticos
├── styles/             # Estilos globales
├── assets/             # Recursos estáticos
├── contexts/           # React Context
└── services/           # Servicios y APIs
```

## 🏛️ Arquitectura

Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para detalles sobre Atomic Design.

El proyecto sigue estrictamente el patrón **Atomic Design**:

```
Atoms → Molecules → Organisms → Templates → Pages
```

### Jerarquía de Importación

- **Atoms**: Solo pueden importar librerías externas
- **Molecules**: Solo pueden importar Atoms
- **Organisms**: Pueden importar Atoms y Molecules
- **Templates**: Pueden importar Atoms, Molecules y Organisms
- **Pages**: Pueden importar cualquier componente

## 🎯 Aliases de Importación

El proyecto usa aliases para importaciones limpias:

```typescript
import Button from "@atoms/Button";
import Card from "@molecules/Card";
import Header from "@organisms/Header";
import MainLayout from "@templates/MainLayout";
import Home from "@pages/Home";
import { useWindowSize } from "@hooks/useWindowSize";
import { formatDate } from "@utils/formatters";
import type { Project } from "@types/common.types";
```

## 📚 Tecnologías

### Dependencias Principales

- **React**: ^19.0.0
- **React DOM**: ^19.0.0
- **Tailwind CSS**: ^4.0.0
- **@tailwindcss/vite**: ^4.0.0
- **GSAP**: ^3.13.0
- **Lucide React**: ^0.548.0 (iconos)

### Dependencias de Desarrollo

- **TypeScript**: ~5.9.3
- **Vite**: ^7.1.7
- **@vitejs/plugin-react**: ^5.0.4
- **@types/react**: ^19.0.0
- **@types/react-dom**: ^19.0.0
- **@types/node**: ^24.9.1

## 🎓 Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (`Button.tsx`, `ProjectCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useWindowSize.ts`)
- **Utilidades**: camelCase (`formatters.ts`, `navigation.ts`)
- **Tipos**: PascalCase con `.types.ts` (`common.types.ts`)

### Formato

- Comillas dobles `"` para strings
- Punto y coma `;` al final de statements
- 2 espacios de indentación
- TypeScript strict mode

### Estructura de Componente

```typescript
import React from "react";

interface ComponentProps {
  // Props aquí
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return <div>{/* JSX aquí */}</div>;
};

export default Component;
```

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza build de producción
- `npm run lint` - Verifica tipos de TypeScript

## 🌐 Navegación

El portfolio incluye las siguientes secciones:

- **Hero**: Presentación principal
- **Projects**: Proyectos destacados de videojuegos
- **About**: Información personal y filosofía
- **Skills**: Habilidades y herramientas
- **Contact**: Formulario de contacto

## 📝 Personalización

Para personalizar el portfolio:

1. **Datos personales**: Edita `src/App.tsx` (nombre, email, redes sociales)
2. **Contenido**: Edita `src/pages/Home.tsx` (secciones y contenido)
3. **Estilos**: Edita `src/styles/style.css` (colores y variables CSS)
4. **Proyectos**: Agrega tus proyectos en `src/data/` (próximamente)

## 📄 Licencia

MIT

## 👤 Autor

**Cristina** - Game Designer & Level Designer

---

**Versión**: 1.0.0  
**Última actualización**: Octubre 2025
