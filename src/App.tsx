import { useState } from "react";
import {
  Home as HomeIcon,
  Gamepad2,
  Briefcase,
  User,
  Zap,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Palette,
} from "lucide-react";
import { MainLayout, Header, Footer } from "./components";
import { PixelBlast } from "@/components/atoms";
import type { NavigationItem } from "./components";
import Home from "./pages/Home";

/**
 * App Component
 *
 * Componente raíz de la aplicación que utiliza Atomic Design.
 * Utiliza MainLayout con Header y Footer.
 * El contenido principal viene de las páginas (Home).
 */
function App() {
  // Estado para el item activo de navegación
  const [activeNavItem, setActiveNavItem] = useState("hero");

  // Items de navegación con iconos de Lucide
  const navigationItems: NavigationItem[] = [
    {
      id: "hero",
      label: "Inicio",
      href: "#hero",
      icon: HomeIcon,
      isActive: activeNavItem === "hero",
    },
    {
      id: "projects",
      label: "Proyectos",
      href: "#projects",
      icon: Gamepad2,
      isActive: activeNavItem === "projects",
    },
    {
      id: "experience",
      label: "Experiencia",
      href: "#experience",
      icon: Briefcase,
      isActive: activeNavItem === "experience",
    },
    {
      id: "about",
      label: "Sobre Mí",
      href: "#about",
      icon: User,
      isActive: activeNavItem === "about",
    },
    {
      id: "skills",
      label: "Habilidades",
      href: "#skills",
      icon: Zap,
      isActive: activeNavItem === "skills",
    },
    {
      id: "contact",
      label: "Contacto",
      href: "#contact",
      icon: Mail,
      isActive: activeNavItem === "contact",
    },
  ];

  // Handler para cambiar el item activo
  const handleNavItemClick = (item: NavigationItem) => {
    setActiveNavItem(item.id);
  };

  return (
    <div className="relative min-h-screen">
      {/* Fondo animado con PixelBlast - z-index bajo */}
      <div className="fixed inset-0 w-full h-full z-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Contenido principal - con pointer-events solo en elementos interactivos */}
      <div
        className="relative z-10 **:pointer-events-auto"
        style={{ pointerEvents: "none" }}
      >
        <MainLayout
          header={
            <Header
              designerName="Cristian"
              onLogoClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              isSticky={true}
              navigationItems={navigationItems}
              onNavigationItemClick={handleNavItemClick}
            />
          }
          footer={
            <Footer
              designerName="Cristian"
              email="cristpry@gmail.com"
              socialLinks={[
                { id: "linkedin", name: "LinkedIn", url: "#", icon: Linkedin },
                {
                  id: "artstation",
                  name: "ArtStation",
                  url: "#",
                  icon: Palette,
                },
                { id: "github", name: "GitHub", url: "#", icon: Github },
                { id: "twitter", name: "Twitter", url: "#", icon: Twitter },
              ]}
            />
          }
        >
          <Home />
        </MainLayout>
      </div>
    </div>
  );
}

export default App;
