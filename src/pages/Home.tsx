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
import { skills } from "@data/skills";
import { experiences } from "@data/experiences";
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
            "Game Designer apasionada por crear experiencias interactivas únicas. Especializada en level design, narrativa lúdica y diseño de mecánicas.",
            "Mi objetivo es diseñar mundos que cautiven y emocionen a los jugadores.",
          ]}
        />
      }
      skillsSection={<SkillsSection skills={skills} />}
      contactSection={
        <ContactSection
          description="¿Tienes un proyecto en mente? Me encantaría escuchar sobre él."
          onContactClick={() => console.log("Contactar clickeado")}
        />
      }
    />
  );
};

export default Home;
