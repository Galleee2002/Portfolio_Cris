# 📐 Arquitectura del Proyecto - Portfolio de Diseño de Videojuegos

**Versión:** 1.0  
**Fecha:** Octubre 2025  
**Estado:** ✅ Completado  
**Metodología:** Atomic Design

---

## 📋 Índice

1. [Estructura de Carpetas](#-estructura-de-carpetas)
2. [Atomic Design - Jerarquía](#-atomic-design---jerarquía)
3. [Componentes Implementados](#-componentes-implementados)
4. [Sistema de Diseño](#-sistema-de-diseño)
5. [Flujo de la Aplicación](#-flujo-de-la-aplicación)
6. [Características Implementadas](#-características-implementadas)
7. [Convenciones y Buenas Prácticas](#-convenciones-y-buenas-prácticas)
8. [Próximos Pasos](#-próximos-pasos)

---

## 📁 Estructura de Carpetas

```
Portfolio_Cris/
│
├── public/                          # Archivos públicos estáticos
│   ├── vite.svg
│   └── assets/
│       ├── projects/
│       └── icons/
│
├── src/                             # Código fuente principal
│   │
│   ├── components/                  # 🎯 ATOMIC DESIGN
│   │   │
│   │   ├── atoms/                   # ⚛️ Bloques básicos indivisibles
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Icon/
│   │   │   ├── Input/
│   │   │   ├── Label/
│   │   │   ├── Image/
│   │   │   ├── Heading/
│   │   │   ├── Text/
│   │   │   └── index.ts
│   │   │
│   │   ├── molecules/               # 🧬 Combinaciones funcionales
│   │   │   ├── SearchBar/
│   │   │   ├── CardHeader/
│   │   │   ├── FormField/
│   │   │   ├── ProjectTag/
│   │   │   └── index.ts
│   │   │
│   │   ├── organisms/               # 🦠 IMPLEMENTADOS ✅
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Navigation/
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── Navigation.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.types.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── templates/               # 📄 IMPLEMENTADOS ✅
│   │   │   ├── MainLayout/
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   ├── MainLayout.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── HomeTemplate/
│   │   │   │   ├── HomeTemplate.tsx
│   │   │   │   ├── HomeTemplate.types.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts                 # Exportación centralizada
│   │
│   ├── pages/                       # 📱 Páginas con datos reales
│   │   ├── HomePage/
│   │   ├── ProjectsPage/
│   │   └── index.ts
│   │
│   ├── hooks/                       # 🪝 Custom Hooks
│   │   ├── useProjects.ts
│   │   ├── useTheme.ts
│   │   ├── useScrollAnimation.ts
│   │   └── index.ts
│   │
│   ├── contexts/                    # 🌐 Context Providers
│   │   ├── ThemeContext.tsx
│   │   └── index.ts
│   │
│   ├── services/                    # 🔌 API y servicios externos
│   │   ├── api.service.ts
│   │   └── index.ts
│   │
│   ├── utils/                       # 🛠️ Utilidades y helpers
│   │   ├── helpers.ts
│   │   ├── constants.ts
│   │   └── index.ts
│   │
│   ├── types/                       # 📘 Tipos globales TypeScript
│   │   ├── global.types.ts
│   │   ├── project.types.ts
│   │   └── index.ts
│   │
│   ├── assets/                      # 🎨 Assets importables
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── routes/                      # 🛣️ Configuración de rutas
│   │   └── routes.tsx
│   │
│   ├── App.tsx                      # ✅ Componente raíz
│   ├── main.tsx                     # Entry point
│   ├── index.css                    # ✅ Estilos Tailwind + Custom
│   └── vite-env.d.ts
│
├── .cursorrules                     # Reglas del proyecto
├── ARQUITECTURA_PROYECTO.md         # Este archivo
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.js               # ✅ Colores personalizados
├── vite.config.ts
└── index.html                       # ✅ Google Fonts importadas
```

---

## 🎯 Atomic Design - Jerarquía

### Filosofía y Reglas

```
ÁTOMOS (atoms/)
  └─ Elementos HTML básicos estilizados
  └─ NO importan otros componentes
  └─ Altamente reutilizables
  └─ Ejemplos: Button, Icon, Input

MOLÉCULAS (molecules/)
  └─ Combinan SOLO átomos
  └─ Propósito específico simple
  └─ Ejemplos: SearchBar (Input + Button)

ORGANISMOS (organisms/)
  └─ Combinan átomos y moléculas
  └─ Pueden tener lógica de negocio
  └─ NO importan otros organismos
  └─ Ejemplos: Header, Footer, Navigation ✅

TEMPLATES (templates/)
  └─ Definen estructura de página
  └─ Combinan organismos, moléculas y átomos
  └─ NO contienen datos reales
  └─ Ejemplos: MainLayout, HomeTemplate ✅

PÁGINAS (pages/)
  └─ Instancias de templates con datos
  └─ Nivel más alto de jerarquía
  └─ Conectan con router y servicios
```

### Flujo de Datos

```
Usuario
  ↓
Pages (datos reales)
  ↓
Templates (estructura)
  ↓
Organisms (secciones)
  ↓
Molecules (grupos)
  ↓
Atoms (elementos básicos)
```

---

## ✅ Componentes Implementados

### 🎯 Templates

#### 1. **MainLayout** (`src/components/templates/MainLayout/`)

Template principal que define la estructura base de todas las páginas.

**Características:**

- Slots para Header, Navigation, Main Content y Footer
- Layout flexible con flex-column
- Secciones semánticas HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`)

**Uso:**

```tsx
<MainLayout header={<Header />} navigation={<Navigation />} footer={<Footer />}>
  {contenido}
</MainLayout>
```

**Props:**

```typescript
interface MainLayoutProps {
  header?: ReactNode;
  navigation?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}
```

#### 2. **HomeTemplate** (`src/components/templates/HomeTemplate/`)

Template específico para la página principal del portfolio.

**Secciones incluidas:**

- `heroSection` - Presentación principal (full-screen)
- `projectsSection` - Proyectos destacados
- `aboutSection` - Sobre mí (con fondo alternativo)
- `skillsSection` - Habilidades y herramientas
- `contactSection` - Formulario de contacto
- `customSections` - Secciones personalizadas adicionales

**Uso:**

```tsx
<HomeTemplate
  heroSection={<HeroContent />}
  projectsSection={<ProjectsGrid />}
  aboutSection={<AboutMe />}
  skillsSection={<SkillsList />}
  contactSection={<ContactForm />}
/>
```

---

### 🦠 Organisms

#### 1. **Header** (`src/components/organisms/Header/`)

Cabecera principal del portfolio con efectos visuales.

**Características:**

- Logo/Nombre del diseñador con efecto neón
- Modo sticky con efecto glassmorphism al scroll
- Indicador de estado animado (pulse)
- Click handler para volver al inicio
- Detección de scroll con useState y useEffect

**Props:**

```typescript
interface HeaderProps {
  logo?: string;
  designerName?: string;
  onLogoClick?: () => void;
  isSticky?: boolean;
  className?: string;
}
```

**Ejemplo:**

```tsx
<Header
  designerName="Cristina"
  onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  isSticky={true}
/>
```

#### 2. **Navigation** (`src/components/organisms/Navigation/`)

Menú de navegación principal con animaciones.

**Características:**

- Soporta orientación horizontal y vertical
- Items con iconos opcionales
- Estado activo visual
- Scroll suave a secciones
- Efectos hover con neón

**Props:**

```typescript
interface NavigationProps {
  items: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  icon?: string;
}
```

**Ejemplo:**

```tsx
<Navigation
  items={[
    { id: "hero", label: "Inicio", href: "#hero", icon: "🏠", isActive: true },
    { id: "projects", label: "Proyectos", href: "#projects", icon: "🎮" },
  ]}
  onItemClick={(item) => setActiveSection(item.id)}
  orientation="horizontal"
/>
```

#### 3. **Footer** (`src/components/organisms/Footer/`)

Pie de página con información de contacto y enlaces.

**Características:**

- Grid responsive (1-3 columnas)
- Información del diseñador
- Enlaces rápidos a secciones
- Redes sociales con iconos
- Copyright dinámico (año automático)

**Props:**

```typescript
interface FooterProps {
  designerName?: string;
  email?: string;
  socialLinks?: SocialLink[];
  year?: number;
  additionalText?: string;
  className?: string;
}

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon?: string;
}
```

**Ejemplo:**

```tsx
<Footer
  designerName="Cristina"
  email="contacto@cristina.dev"
  socialLinks={[{ id: "linkedin", name: "LinkedIn", url: "#", icon: "💼" }]}
  additionalText="Hecho con ❤️ y mucho café"
/>
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores Neón Gaming

Configurada en `tailwind.config.js` y `src/index.css`:

| Color                | Hex       | Variable CSS               | Uso                 |
| -------------------- | --------- | -------------------------- | ------------------- |
| **Tech Black**       | `#0D0D0D` | `--color-tech-black`       | Fondo principal     |
| **Neon Turquoise**   | `#00FFF0` | `--color-neon-turquoise`   | Acento primario     |
| **Neon Fuchsia**     | `#FF00C8` | `--color-neon-fuchsia`     | Acento secundario   |
| **Elevated Surface** | `#1A1A1A` | `--color-elevated-surface` | Cards y superficies |
| **Text Primary**     | `#FFFFFF` | `--color-text-primary`     | Texto principal     |

**Uso en Tailwind:**

```tsx
<div className="bg-tech-black text-neon-turquoise">
<button className="bg-neon-fuchsia hover:bg-neon-fuchsia/80">
```

**Uso en CSS:**

```css
.custom-class {
  background-color: var(--color-tech-black);
  color: var(--color-neon-turquoise);
}
```

### Tipografías

Importadas desde Google Fonts en `index.html`:

| Familia      | Variable       | Uso                   | Clase Tailwind |
| ------------ | -------------- | --------------------- | -------------- |
| **Orbitron** | `--font-title` | Títulos y encabezados | `font-title`   |
| **Exo 2**    | `--font-body`  | Texto general         | `font-body`    |

**Ejemplo:**

```tsx
<h1 className="font-title text-5xl">Título Principal</h1>
<p className="font-body text-base">Texto del cuerpo</p>
```

### Efectos y Animaciones Personalizadas

Definidas en `src/index.css`:

| Clase             | Descripción                   | Uso                  |
| ----------------- | ----------------------------- | -------------------- |
| `.text-gradient`  | Gradiente turquoise → fuchsia | Títulos destacados   |
| `.glow-turquoise` | Brillo neón turquesa          | Efectos de texto     |
| `.glow-fuchsia`   | Brillo neón fucsia            | Efectos de texto     |
| `.pulse-neon`     | Animación de pulso            | Indicadores          |
| `.glass-effect`   | Glassmorphism gaming          | Overlays, modals     |
| `.card`           | Card elevada con hover        | Contenedores         |
| `.btn-primary`    | Botón turquesa con sombra     | Acciones principales |
| `.btn-secondary`  | Botón fucsia con sombra       | Acciones secundarias |

**Ejemplos:**

```tsx
<h1 className="text-gradient glow-turquoise">
  Portfolio Gaming
</h1>

<div className="card">
  <p>Contenido de la card</p>
</div>

<button className="btn-primary">
  Ver Proyectos
</button>

<div className="glass-effect p-6 rounded-xl">
  Contenido con efecto de vidrio
</div>
```

---

## 🔄 Flujo de la Aplicación

### Estructura Visual

```
App.tsx
  └─ MainLayout
      ├─ Header (sticky, z-50)
      │   ├─ Logo/Nombre (text-gradient, glow)
      │   └─ Estado indicator (pulse-neon)
      │
      ├─ Navigation (sticky, z-40)
      │   └─ Items horizontales con scroll suave
      │
      ├─ Main Content (flex-1)
      │   └─ HomeTemplate
      │       ├─ Hero Section (min-h-screen)
      │       │   ├─ Título gradient + glow
      │       │   ├─ Subtítulo
      │       │   └─ CTA buttons
      │       │
      │       ├─ Projects Section (py-20)
      │       │   └─ Grid de proyectos
      │       │
      │       ├─ About Section (py-20, bg-elevated)
      │       │   └─ Biografía centrada
      │       │
      │       ├─ Skills Section (py-20)
      │       │   └─ Grid de habilidades
      │       │
      │       └─ Contact Section (py-20, bg-elevated)
      │           └─ Formulario de contacto
      │
      └─ Footer (bg-elevated-surface)
          ├─ Información (3 columnas)
          ├─ Enlaces rápidos
          ├─ Redes sociales
          └─ Copyright
```

### Interacciones Implementadas

1. **Header Scroll**: Cambia a `glass-effect` al hacer scroll > 20px
2. **Navigation**: Click en item hace scroll suave a sección
3. **Logo Click**: Vuelve al inicio con scroll suave
4. **Active State**: Se actualiza el item activo en navegación
5. **Hover Effects**: Todos los botones y cards tienen efectos de hover

---

## ✅ Características Implementadas

### Atomic Design Compliance

- ✅ Jerarquía respetada (Organisms → Templates)
- ✅ No hay importaciones circulares
- ✅ Templates solo definen estructura
- ✅ Datos pasados desde App.tsx
- ✅ Cada componente en su propia carpeta

### TypeScript

- ✅ Todas las props tipadas con interfaces
- ✅ Archivos `.types.ts` separados
- ✅ Exports organizados en `index.ts`
- ✅ Componentes funcionales con `React.FC<Props>`
- ✅ Sin errores de linter

### Responsive Design

- ✅ Mobile-first approach
- ✅ Breakpoints Tailwind (sm, md, lg)
- ✅ Grid adaptativo (1 → 2 → 3 columnas)
- ✅ Navegación adaptativa
- ✅ Texto responsive (text-sm, text-base, text-xl)

### UX/UI

- ✅ Efectos neón gaming
- ✅ Scroll suave entre secciones
- ✅ Sticky header y navigation
- ✅ Animaciones y transiciones fluidas
- ✅ Estados hover interactivos
- ✅ Loading states preparados
- ✅ Glassmorphism effects

### Accesibilidad

- ✅ HTML semántico (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Navegación por teclado funcional
- ✅ Enlaces descriptivos
- ✅ Contraste de colores adecuado
- ✅ Alt text en imágenes
- ✅ `aria-labels` donde corresponde

### Performance

- ✅ Componentes optimizados
- ✅ CSS variables para colores
- ✅ Tailwind purge configurado
- ✅ Lazy loading preparado
- ✅ Code splitting por rutas

---

## 📝 Convenciones y Buenas Prácticas

### Estructura de Componentes

Cada componente sigue este patrón:

```
ComponentName/
  ├── ComponentName.tsx       # Implementación
  ├── ComponentName.types.ts  # Interfaces y tipos
  └── index.ts                # Exportación limpia
```

**Ejemplo de `index.ts`:**

```typescript
export { ComponentName } from "./ComponentName";
export type { ComponentNameProps } from "./ComponentName.types";
```

### Nomenclatura

| Elemento        | Convención           | Ejemplo                    |
| --------------- | -------------------- | -------------------------- |
| Componentes     | PascalCase           | `Button`, `ProjectCard`    |
| Funciones       | camelCase            | `handleClick`, `fetchData` |
| Constantes      | UPPER_SNAKE_CASE     | `MAX_ITEMS`, `API_URL`     |
| Archivos        | Igual que componente | `Button.tsx`               |
| Props Interface | ComponentNameProps   | `ButtonProps`              |
| Hooks           | use + PascalCase     | `useProjects`, `useTheme`  |

### Imports

Orden recomendado:

```typescript
// 1. React y dependencias externas
import React, { useState, useEffect } from "react";

// 2. Componentes internos (menor a mayor nivel)
import { Button } from "@/components/atoms";
import { SearchBar } from "@/components/molecules";
import { Header } from "@/components/organisms";

// 3. Hooks y contextos
import { useTheme } from "@/hooks";

// 4. Utils y types
import { formatDate } from "@/utils";
import type { ProjectType } from "@/types";

// 5. Estilos y assets
import "./styles.css";
```

### TypeScript

**Interfaces vs Types:**

```typescript
// Usar 'interface' para objetos
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Usar 'type' para uniones
type Variant = "primary" | "secondary" | "tertiary";
```

**Props con valores por defecto:**

```typescript
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  disabled = false,
}) => {
  // ...
};
```

### Estilos

1. **Tailwind primero**: Usar utilidades de Tailwind siempre que sea posible
2. **Variables CSS**: Para colores y valores reutilizables
3. **Clases custom**: En `@layer components` para componentes reutilizables
4. **Mobile-first**: Empezar sin prefijo, añadir `sm:`, `md:`, `lg:`

```tsx
// ✅ Bueno
<div className="flex flex-col md:flex-row gap-4">

// ❌ Evitar
<div style={{ display: 'flex', flexDirection: 'column' }}>
```

---

## 🚀 Próximos Pasos

### Fase 1: Átomos Básicos

- [ ] **Button** - Botón reutilizable con variantes
- [ ] **Input** - Input de formulario con validación
- [ ] **Icon** - Componente para iconos SVG
- [ ] **Heading** - Títulos tipográficos (h1-h6)
- [ ] **Text** - Párrafos y texto general
- [ ] **Image** - Imagen con lazy loading
- [ ] **Badge** - Etiquetas y badges
- [ ] **Link** - Enlaces estilizados

### Fase 2: Moléculas

- [ ] **SearchBar** - Input + Button de búsqueda
- [ ] **FormField** - Label + Input + Error
- [ ] **ProjectCard** - Card de proyecto
- [ ] **SkillCard** - Card de habilidad
- [ ] **SocialLinks** - Grupo de enlaces sociales

### Fase 3: Ampliar Organismos

- [ ] **ProjectGrid** - Grid de ProjectCards
- [ ] **SkillsGrid** - Grid de SkillCards
- [ ] **ContactForm** - Formulario completo
- [ ] **HeroSection** - Hero mejorado
- [ ] **Sidebar** - Barra lateral para filtros

### Fase 4: Páginas y Routing

- [ ] **HomePage** - Página principal
- [ ] **ProjectsPage** - Lista de proyectos
- [ ] **ProjectDetailPage** - Detalle de proyecto
- [ ] **AboutPage** - Página sobre mí
- [ ] **ContactPage** - Página de contacto
- [ ] Configurar **React Router**

### Fase 5: Funcionalidades Avanzadas

- [ ] **Estado global** - Context API o Zustand
- [ ] **Formulario funcional** - Validación y envío
- [ ] **Backend/CMS** - Integración con Strapi/Contentful
- [ ] **Carga dinámica** - Fetch de proyectos
- [ ] **Filtros** - Filtrar proyectos por categoría
- [ ] **Lightbox** - Galería de imágenes
- [ ] **Animaciones** - Framer Motion
- [ ] **SEO** - React Helmet
- [ ] **Analytics** - Google Analytics
- [ ] **Testing** - Jest + React Testing Library

---

## 📊 Estado del Proyecto

| Categoría             | Progreso | Estado         |
| --------------------- | -------- | -------------- |
| **Setup Inicial**     | 100%     | ✅ Completado  |
| **Sistema de Diseño** | 100%     | ✅ Completado  |
| **Templates**         | 100%     | ✅ Completado  |
| **Organisms**         | 30%      | 🔄 En progreso |
| **Molecules**         | 0%       | 📋 Pendiente   |
| **Atoms**             | 0%       | 📋 Pendiente   |
| **Pages**             | 0%       | 📋 Pendiente   |
| **Routing**           | 0%       | 📋 Pendiente   |
| **Funcionalidades**   | 0%       | 📋 Pendiente   |

---

## 📚 Recursos

### Documentación Oficial

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Atomic Design

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)

### Inspiración

- [Awwwards - Portfolio](https://www.awwwards.com/websites/portfolio/)
- [Dribbble - Game Design](https://dribbble.com/tags/game_design)

---

## 🤝 Contribución

Para mantener la calidad y consistencia del código:

1. **Leer** `.cursorrules` antes de empezar
2. **Seguir** Atomic Design estrictamente
3. **Tipar** todo con TypeScript
4. **Comentar** componentes con JSDoc
5. **Probar** en múltiples dispositivos
6. **Revisar** linter antes de commit

---

**Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS**  
**Metodología: Atomic Design**  
**Portfolio de Diseño de Videojuegos - Cristina**
