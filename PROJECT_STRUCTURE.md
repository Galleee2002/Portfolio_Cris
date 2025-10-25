# Estructura del Proyecto - Portfolio de Diseño de Videojuegos

Este documento detalla la estructura completa del proyecto y la organización de archivos.

## 📁 Árbol de Directorios

```
portfolio-cris/
│
├── 📄 index.html                      # HTML principal
├── 📄 package.json                    # Dependencias del proyecto
├── 📄 tsconfig.json                   # Configuración TypeScript
├── 📄 vite.config.ts                  # Configuración Vite + React + Tailwind
├── 📄 .gitignore                      # Archivos ignorados por Git
│
├── 📚 README.md                       # Documentación principal
├── 📚 ARCHITECTURE.md                 # Guía de Atomic Design
├── 📚 PROJECT_STRUCTURE.md            # Este archivo
├── 📚 ARQUITECTURA_PROYECTO.md        # Reglas del proyecto
│
├── 📁 public/                         # Archivos públicos estáticos
│   └── vite.svg                       # Logo de Vite
│
└── 📁 src/                            # Código fuente principal
    │
    ├── 📄 main.tsx                    # ⭐ Entry point (ReactDOM.createRoot)
    ├── 📄 App.tsx                     # ⭐ Componente raíz principal
    │
    ├── 📁 styles/                     # 🎨 Estilos globales
    │   └── style.css                  # Tailwind CSS 4 + variables + custom
    │
    ├── 📁 components/                 # ⭐ ATOMIC DESIGN COMPONENTS
    │   │
    │   ├── 📄 index.ts                # Exportaciones centralizadas
    │   │
    │   ├── 📁 atoms/                  # 🔵 NIVEL 1: Componentes básicos
    │   │   ├── 📁 Icon/
    │   │   │   ├── Icon.tsx
    │   │   │   ├── Icon.types.ts
    │   │   │   └── index.ts
    │   │   └── index.ts
    │   │
    │   ├── 📁 molecules/              # 🟢 NIVEL 2: Grupos funcionales
    │   │   └── index.ts
    │   │
    │   ├── 📁 organisms/              # 🟡 NIVEL 3: Secciones complejas
    │   │   ├── 📁 Header/
    │   │   │   ├── Header.tsx
    │   │   │   ├── Header.types.ts
    │   │   │   └── index.ts
    │   │   ├── 📁 Footer/
    │   │   │   ├── Footer.tsx
    │   │   │   ├── Footer.types.ts
    │   │   │   └── index.ts
    │   │   ├── 📁 Navigation/
    │   │   │   ├── Navigation.tsx
    │   │   │   ├── Navigation.types.ts
    │   │   │   └── index.ts
    │   │   └── index.ts
    │   │
    │   └── 📁 templates/              # 🟣 NIVEL 4: Layouts de página
    │       ├── 📁 MainLayout/
    │       │   ├── MainLayout.tsx
    │       │   ├── MainLayout.types.ts
    │       │   └── index.ts
    │       ├── 📁 HomeTemplate/
    │       │   ├── HomeTemplate.tsx
    │       │   ├── HomeTemplate.types.ts
    │       │   └── index.ts
    │       └── index.ts
    │
    ├── 📁 pages/                      # 🔴 NIVEL 5: Páginas completas
    │   ├── Home.tsx
    │   └── index.ts
    │
    ├── 📁 hooks/                      # 🪝 Custom React Hooks
    │   ├── useWindowSize.ts
    │   └── index.ts
    │
    ├── 📁 utils/                      # 🛠️ Funciones de utilidad
    │   ├── formatters.ts
    │   ├── navigation.ts
    │   ├── constants.ts
    │   └── index.ts
    │
    ├── 📁 types/                      # 📘 Tipos de TypeScript
    │   ├── global.types.ts
    │   ├── project.types.ts
    │   ├── common.types.ts
    │   └── index.ts
    │
    ├── 📁 data/                       # 💾 Datos estáticos
    │   └── experiences.ts
    │
    ├── 📁 contexts/                   # 🌐 React Context
    │   └── index.ts
    │
    ├── 📁 services/                   # 🔌 Servicios y APIs
    │   └── index.ts
    │
    └── 📁 assets/                     # 🎨 Recursos estáticos
        ├── 📁 images/
        ├── 📁 icons/
        └── 📁 fonts/
```

## 📊 Estadísticas del Proyecto

### Componentes por Nivel

- **Atoms**: 1 componente (Icon)
- **Molecules**: 0 componentes (listos para agregar)
- **Organisms**: 3 componentes (Header, Footer, Navigation)
- **Templates**: 2 componentes (MainLayout, HomeTemplate)
- **Pages**: 1 página (Home)

### Archivos TypeScript

- **Components**: ~10 archivos .tsx
- **Types**: 3 archivos .types.ts
- **Utils**: 3 archivos de utilidades
- **Hooks**: 1 hook personalizado
- **Total**: ~20 archivos TypeScript

## 🎯 Aliases de Importación

El proyecto utiliza aliases configurados en `tsconfig.json` y `vite.config.ts`:

| Alias          | Ruta Real                    | Uso                 |
| -------------- | ---------------------------- | ------------------- |
| `@atoms/*`     | `src/components/atoms/*`     | Componentes básicos |
| `@molecules/*` | `src/components/molecules/*` | Grupos funcionales  |
| `@organisms/*` | `src/components/organisms/*` | Secciones complejas |
| `@templates/*` | `src/components/templates/*` | Layouts de página   |
| `@pages/*`     | `src/pages/*`                | Páginas completas   |
| `@hooks/*`     | `src/hooks/*`                | Custom hooks        |
| `@utils/*`     | `src/utils/*`                | Utilidades          |
| `@types/*`     | `src/types/*`                | Tipos TypeScript    |
| `@data/*`      | `src/data/*`                 | Datos estáticos     |
| `@assets/*`    | `src/assets/*`               | Recursos estáticos  |
| `@contexts/*`  | `src/contexts/*`             | React Context       |
| `@services/*`  | `src/services/*`             | Servicios y APIs    |

### Ejemplos de Uso

```typescript
// Importar componentes
import { Icon } from "@atoms/Icon";
import { Header } from "@organisms/Header";
import { MainLayout } from "@templates/MainLayout";
import { Home } from "@pages/Home";

// Importar utilidades
import { formatDate } from "@utils/formatters";
import { scrollToSection } from "@utils/navigation";
import { APP_NAME } from "@utils/constants";

// Importar hooks
import { useWindowSize } from "@hooks/useWindowSize";

// Importar tipos
import type { Project } from "@types/common.types";
import type { NavigationItem } from "@types/global.types";

// Importar datos
import { experiences } from "@data/experiences";
```

## 🗂️ Organización de Archivos

### Estructura de Componente

Cada componente sigue esta estructura estándar:

```
ComponentName/
├── ComponentName.tsx       # Componente principal
├── ComponentName.types.ts  # Tipos e interfaces
└── index.ts                # Re-exportación
```

**Ejemplo: Icon Atom**

```typescript
// Icon.tsx
import React from "react";
import type { IconProps } from "./Icon.types";

export const Icon: React.FC<IconProps> = ({ icon, size }) => {
  // Implementación...
};

// Icon.types.ts
export interface IconProps {
  icon: LucideIcon;
  size?: number;
  // ...
}

// index.ts
export { Icon } from "./Icon";
export type { IconProps } from "./Icon";
```

### Archivos de Índice

Cada carpeta de componentes tiene un `index.ts` que exporta todos sus componentes:

```typescript
// src/components/organisms/index.ts
export { Header } from "./Header";
export type { HeaderProps } from "./Header";

export { Footer } from "./Footer";
export type { FooterProps } from "./Footer";

export { Navigation } from "./Navigation";
export type { NavigationProps, NavigationItem } from "./Navigation";
```

## 🎨 Organización de Estilos

### src/styles/style.css

El archivo principal de estilos contiene:

1. **Imports**: Fuentes de Google y Tailwind CSS
2. **Variables CSS**: Colores y fuentes personalizadas
3. **Estilos base**: Reset y estilos globales
4. **Componentes**: Clases reutilizables con `@layer components`
5. **Utilidades**: Clases de utilidad con `@layer utilities`

```css
/* Variables CSS */
:root {
  --color-tech-black: #0d0d0d;
  --color-neon-turquoise: #00fff0;
  --color-neon-fuchsia: #ff00c8;
  --color-elevated-surface: #1a1a1a;
  --color-text-primary: #ffffff;
}

/* Componentes personalizados */
@layer components {
  .btn-primary {
    /* Estilos del botón primario */
  }

  .card {
    /* Estilos de tarjetas */
  }
}

/* Utilidades personalizadas */
@layer utilities {
  .text-gradient {
    /* Gradiente de texto */
  }
}
```

## 📦 Convenciones de Nomenclatura

### Archivos y Carpetas

| Tipo        | Convención         | Ejemplos                          |
| ----------- | ------------------ | --------------------------------- |
| Componentes | PascalCase         | `Button.tsx`, `ProjectCard.tsx`   |
| Hooks       | camelCase + use    | `useWindowSize.ts`, `useAuth.ts`  |
| Utilidades  | camelCase          | `formatters.ts`, `navigation.ts`  |
| Tipos       | camelCase + .types | `common.types.ts`, `api.types.ts` |
| Constantes  | camelCase          | `constants.ts`, `config.ts`       |
| Páginas     | PascalCase         | `Home.tsx`, `About.tsx`           |

### Variables y Funciones

| Tipo             | Convención         | Ejemplos                       |
| ---------------- | ------------------ | ------------------------------ |
| Componentes      | PascalCase         | `Button`, `UserProfile`        |
| Funciones        | camelCase          | `handleClick`, `fetchProjects` |
| Constantes       | UPPER_SNAKE_CASE   | `MAX_ITEMS`, `API_URL`         |
| Props Interfaces | PascalCase + Props | `ButtonProps`, `HeaderProps`   |
| Variables        | camelCase          | `userName`, `isActive`         |

## 🔄 Flujo de Datos

```
┌─────────────────────────────────────────────┐
│              main.tsx                       │
│  ├─ Inicializa React                        │
│  └─ Renderiza <App />                       │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│              App.tsx                        │
│  ├─ Estado de navegación                    │
│  ├─ Datos de configuración                  │
│  └─ Renderiza MainLayout + Header + Footer  │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│           MainLayout Template               │
│  ├─ Estructura base (header/main/footer)    │
│  └─ Renderiza children (páginas)            │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│              Home Page                      │
│  ├─ Secciones del portfolio                 │
│  └─ Renderiza contenido con componentes     │
└─────────────────────────────────────────────┘
```

## 🧪 Extensibilidad

### Agregar un Nuevo Atom

1. Crear carpeta: `src/components/atoms/NewAtom/`
2. Crear archivos:
   - `NewAtom.tsx`
   - `NewAtom.types.ts`
   - `index.ts`
3. Exportar en `src/components/atoms/index.ts`
4. Usar con alias: `import { NewAtom } from "@atoms/NewAtom"`

### Agregar una Nueva Página

1. Crear archivo: `src/pages/NewPage.tsx`
2. Implementar componente usando templates y organisms
3. Exportar en `src/pages/index.ts`
4. Agregar ruta (si usas router)

### Agregar un Nuevo Hook

1. Crear archivo: `src/hooks/useNewHook.ts`
2. Implementar hook (prefijo `use`)
3. Exportar en `src/hooks/index.ts`
4. Usar con alias: `import { useNewHook } from "@hooks/useNewHook"`

## 📚 Archivos de Configuración

### tsconfig.json

Configuración de TypeScript con:

- Strict mode activado
- Aliases de importación
- Target ES2022
- JSX: react-jsx

### vite.config.ts

Configuración de Vite con:

- Plugin de React
- Plugin de Tailwind CSS
- Aliases de importación (sincronizados con tsconfig)

### package.json

Dependencias y scripts:

- `dev`: Servidor de desarrollo
- `build`: Build de producción
- `preview`: Preview del build
- `lint`: Verificación de tipos

## 🎯 Próximos Pasos para Expansión

1. **Componentes Atoms adicionales**:

   - Button
   - Input
   - Text
   - TextArea
   - Avatar
   - Badge

2. **Componentes Molecules**:

   - Card
   - FormField
   - ProjectCard
   - SocialLink

3. **Componentes Organisms**:

   - Hero
   - ProjectsSection
   - ContactForm
   - Sidebar

4. **Funcionalidades**:

   - Sistema de routing
   - Animaciones con GSAP
   - Formulario de contacto funcional
   - Galería de proyectos dinámica
   - Filtros de proyectos

5. **Optimizaciones**:
   - Lazy loading de imágenes
   - Code splitting
   - SEO meta tags
   - PWA capabilities

---

**Versión**: 1.0  
**Última actualización**: Octubre 2025
