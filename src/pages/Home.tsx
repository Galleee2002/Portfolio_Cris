import React from "react";
import { HomeTemplate } from "@components/templates/HomeTemplate";
import {
  HeroSection,
  ProjectsSection,
  ExperiencesSection,
  AboutSection,
  SkillsSection,
  ContactSection,
} from "@components/organisms";
import { projects } from "@data/projects";
import { experiences } from "@data/experiences";
import { gameDesignTools } from "@data/tools";
import fotoPerfilImg from "@/assets/images/foto-perfil.jpg";

/**
 * Home Page
 *
 * Página principal del portfolio.
 * Utiliza HomeTemplate con las secciones como organismos.
 */
const Home: React.FC = () => {
  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = (id: number) => {
    console.log("Proyecto clickeado:", id);
    // Aquí se puede navegar a la página de detalle del proyecto
  };

  return (
    <HomeTemplate
      heroSection={
        <HeroSection
          title="Bienvenido a mi portfolio!"
          subtitle="Mi nombre es Cristian , soy Artista 3D , Programador y Diseñador de videojuegos"
          avatarSrc={fotoPerfilImg}
          avatarAlt="Foto de perfil de Cristian"
          onViewProjects={handleViewProjects}
          onContact={handleContact}
        />
      }
      projectsSection={
        <ProjectsSection
          projects={projects}
          onProjectClick={handleProjectClick}
        />
      }
      experiencesSection={<ExperiencesSection experiences={experiences} />}
      aboutSection={
        <AboutSection
          paragraphs={[
            "Soy Cristian Prykhodko, tengo 23 años y estudio Diseño y Programación de Videojuegos en la Escuela Da Vinci. Soy un artista 3D en formación, con experiencia en Autodesk Maya, Substance Painter y Unity, enfocado en modelado, texturizado y programación. Me destaco por mi lógica, resolución de problemas y optimización de procesos creativos. Busco formar parte de un equipo de desarrollo donde pueda aportar calidad visual, eficiencia en la producción y seguir creciendo como profesional en la industria del videojuego.",
          ]}
        />
      }
      skillsSection={<SkillsSection tools={gameDesignTools} />}
      contactSection={
        <ContactSection
          email="cristpry@gmail.com"
          phone="+5401172181012"
          discord="Guipercrist"
        />
      }
    />
  );
};

export default Home;
