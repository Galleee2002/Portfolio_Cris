# Arquitectura del Proyecto - Atomic Design

Este documento explica la arquitectura del proyecto basada en **Atomic Design** de Brad Frost.

## 📚 ¿Qué es Atomic Design?

Atomic Design es una metodología para crear sistemas de diseño de manera estructurada y escalable. Organiza los componentes en 5 niveles jerárquicos, desde los más simples hasta los más complejos.

## 🏗️ Jerarquía de Componentes

```
┌─────────────────────────────────────────────┐
│                   PAGES                     │  ← Nivel 5: Instancias con datos
│  (Rutas de la aplicación con datos reales) │
└─────────────────┬───────────────────────────┘
                  │ usa
┌─────────────────▼───────────────────────────┐
│                TEMPLATES                    │  ← Nivel 4: Estructuras de página
│    (Layouts y estructura sin contenido)    │
└─────────────────┬───────────────────────────┘
                  │ combina
┌─────────────────▼───────────────────────────┐
│               ORGANISMS                     │  ← Nivel 3: Secciones complejas
│  (Componentes con lógica y múltiples partes)│
└─────────────────┬───────────────────────────┘
                  │ agrupa
┌─────────────────▼───────────────────────────┐
│               MOLECULES                     │  ← Nivel 2: Grupos funcionales
│    (Combinaciones simples de 2-3 átomos)   │
└─────────────────┬───────────────────────────┘
                  │ compone
┌─────────────────▼───────────────────────────┐
│                 ATOMS                       │  ← Nivel 1: Bloques básicos
│    (Elementos HTML estilizados básicos)    │
└─────────────────────────────────────────────┘
```

## 🔵 Nivel 1: ATOMS (Átomos)

**Ubicación**: `src/components/atoms/`

### Definición

Los átomos son los bloques de construcción más pequeños e indivisibles. Son elementos HTML básicos con estilos aplicados.

### Características

- **Tamaño**: 20-50 líneas máximo
- **Dependencias**: NO pueden importar otros componentes
- **Propósito**: Altamente reutilizables y agnósticos del contexto
- **Ejemplos**: Button, Icon, Input, Label, Image, Heading

### Reglas

✅ **PERMITIDO**:

- Usar elementos HTML nativos
- Importar librerías externas (React, Lucide, etc.)
- Aplicar estilos con Tailwind CSS
- Recibir props simples y específicas

❌ **PROHIBIDO**:

- Importar otros átomos, moléculas u organismos
- Contener lógica de negocio compleja
- Tener dependencias de contexto específico

### Ejemplo: Button Atom

```typescript
// src/components/atoms/Button/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`btn-${variant} ${disabled ? "opacity-50" : ""}`}
  >
    {children}
  </button>
);

export default Button;
```

## 🟢 Nivel 2: MOLECULES (Moléculas)

**Ubicación**: `src/components/molecules/`

### Definición

Las moléculas son grupos de átomos que funcionan juntos como una unidad. Comienzan a tener un propósito específico.

### Características

- **Tamaño**: 50-100 líneas máximo
- **Dependencias**: Solo pueden importar **Atoms**
- **Propósito**: Componentes funcionales simples
- **Ejemplos**: FormField, SearchBar, CardHeader, SocialLink

### Reglas

✅ **PERMITIDO**:

- Importar átomos
- Combinar 2-3 átomos
- Tener estado local simple
- Lógica específica del componente

❌ **PROHIBIDO**:

- Importar otras moléculas u organismos
- Lógica de negocio compleja
- Llamadas a APIs o servicios

### Ejemplo: FormField Molecule

```typescript
// src/components/molecules/FormField/FormField.tsx
import React from "react";
import Input from "@atoms/Input";
import Text from "@atoms/Text";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="label">{label}</Text>
      <Input name={name} value={value} onChange={onChange} />
      {error && <Text variant="error">{error}</Text>}
    </div>
  );
};

export default FormField;
```

## 🟡 Nivel 3: ORGANISMS (Organismos)

**Ubicación**: `src/components/organisms/`

### Definición

Los organismos son componentes complejos formados por moléculas y/o átomos. Representan secciones distintas de la interfaz.

### Características

- **Tamaño**: 100-200 líneas máximo
- **Dependencias**: Pueden importar **Atoms** y **Molecules**
- **Propósito**: Secciones completas de la UI con lógica
- **Ejemplos**: Header, Footer, Navigation, ProjectCard, ContactForm

### Reglas

✅ **PERMITIDO**:

- Importar átomos y moléculas
- Contener lógica de negocio
- Tener estado complejo
- Usar hooks y contextos
- Manejar eventos

❌ **PROHIBIDO**:

- Importar otros organismos
- Ser extremadamente grandes (refactorizar si > 250 líneas)

### Ejemplo: Header Organism

```typescript
// src/components/organisms/Header/Header.tsx
import React from "react";
import Navigation from "@organisms/Navigation";

interface HeaderProps {
  designerName: string;
  navigationItems: NavigationItem[];
  onNavigationItemClick: (item: NavigationItem) => void;
}

const Header: React.FC<HeaderProps> = ({
  designerName,
  navigationItems,
  onNavigationItemClick,
}) => {
  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <h1 className="font-title font-bold">{designerName}</h1>
          <Navigation
            items={navigationItems}
            onItemClick={onNavigationItemClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
```

## 🟣 Nivel 4: TEMPLATES (Plantillas)

**Ubicación**: `src/components/templates/`

### Definición

Los templates definen la estructura de las páginas. Son layouts que combinan organismos para crear estructuras.

### Características

- **Tamaño**: Variable, enfocado en estructura
- **Dependencias**: Pueden importar **Atoms**, **Molecules** y **Organisms**
- **Propósito**: Definir distribución de contenido
- **Ejemplos**: MainLayout, HomeTemplate, ProjectTemplate

### Reglas

✅ **PERMITIDO**:

- Importar átomos, moléculas y organismos
- Definir slots para contenido
- Estructura de layout
- Props para contenido dinámico

❌ **PROHIBIDO**:

- Contener datos específicos (debe recibirlos como props)
- Lógica de negocio compleja
- Llamadas a APIs

### Ejemplo: MainLayout Template

```typescript
// src/components/templates/MainLayout/MainLayout.tsx
import React from "react";

interface MainLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  header,
  children,
  footer,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">{header}</header>
      <main className="flex-1 w-full">{children}</main>
      <footer className="w-full">{footer}</footer>
    </div>
  );
};

export default MainLayout;
```

## 🔴 Nivel 5: PAGES (Páginas)

**Ubicación**: `src/pages/`

### Definición

Las páginas son instancias específicas de templates con datos reales. Representan rutas de la aplicación.

### Características

- **Tamaño**: Variable, enfocado en coordinación
- **Dependencias**: Pueden importar cualquier nivel
- **Propósito**: Instanciar templates con datos
- **Ejemplos**: Home, ProjectDetail, About, Contact

### Reglas

✅ **PERMITIDO**:

- Importar cualquier componente
- Fetching de datos
- Conectar con servicios
- Manejo de estado global
- Routing

### Ejemplo: Home Page

```typescript
// src/pages/Home.tsx
import React from "react";
import Hero from "@organisms/Hero";
import ProjectsSection from "@organisms/ProjectsSection";
import ContactForm from "@organisms/ContactForm";

const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title="Hola, soy Cristina"
        subtitle="Game Designer & Level Designer"
      />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
};

export default Home;
```

## 📊 Diagrama de Flujo de Datos

```
┌──────────────────────────────────────────┐
│              SERVICIOS/APIs              │
└────────────────┬─────────────────────────┘
                 │ datos
┌────────────────▼─────────────────────────┐
│               PAGES                      │
│  - Fetch de datos                        │
│  - Estado global                         │
│  - Lógica de routing                     │
└────────────────┬─────────────────────────┘
                 │ datos + estructura
┌────────────────▼─────────────────────────┐
│             TEMPLATES                    │
│  - Reciben datos como props              │
│  - Definen layout                        │
└────────────────┬─────────────────────────┘
                 │ props
┌────────────────▼─────────────────────────┐
│            ORGANISMS                     │
│  - Lógica de negocio                     │
│  - Eventos                               │
└────────────────┬─────────────────────────┘
                 │ props
┌────────────────▼─────────────────────────┐
│            MOLECULES                     │
│  - Lógica simple                         │
└────────────────┬─────────────────────────┘
                 │ props
┌────────────────▼─────────────────────────┐
│              ATOMS                       │
│  - Renderizado puro                      │
└──────────────────────────────────────────┘
```

## ✅ Beneficios de Atomic Design

1. **Reutilización**: Componentes pequeños y específicos se reusan fácilmente
2. **Consistencia**: Sistema de diseño coherente en toda la aplicación
3. **Escalabilidad**: Fácil agregar nuevos componentes sin romper existentes
4. **Testabilidad**: Componentes pequeños son más fáciles de testear
5. **Documentación**: La jerarquía hace el código autodocumentado
6. **Colaboración**: Equipos entienden rápidamente la estructura

## 🚫 Errores Comunes a Evitar

### ❌ Error 1: Romper la jerarquía

```typescript
// ❌ MAL: Atom importando otro Atom
import Button from "@atoms/Button"; // En otro Atom

// ✅ BIEN: Molecule importando Atoms
import Button from "@atoms/Button"; // En una Molecule
```

### ❌ Error 2: Componentes demasiado grandes

```typescript
// ❌ MAL: Organism de 500 líneas
const Header: React.FC = () => {
  // 500 líneas de código...
};

// ✅ BIEN: Dividir en partes más pequeñas
const Header: React.FC = () => {
  return (
    <>
      <HeaderLogo />
      <Navigation />
      <UserMenu />
    </>
  );
};
```

### ❌ Error 3: Lógica de negocio en Atoms

```typescript
// ❌ MAL: Atom con llamada a API
const Button: React.FC = () => {
  const data = await fetch("/api/data");
  // ...
};

// ✅ BIEN: Atom solo recibe props
const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
};
```

## 📚 Referencias

- [Atomic Design - Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Pattern Lab](https://patternlab.io/)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)

---

**Versión**: 1.0  
**Última actualización**: Octubre 2025
