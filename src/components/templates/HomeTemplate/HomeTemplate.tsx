import React from "react";
import type { HomeTemplateProps } from "./HomeTemplate.types";

/**
 * HomeTemplate
 *
 * Template específico para la página principal del portfolio.
 * Define la estructura y el orden de las secciones principales.
 *
 * @component
 */
export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  heroSection,
  projectsSection,
  experiencesSection,
  aboutSection,
  skillsSection,
  contactSection,
  customSections = [],
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Hero Section - Presentación principal */}
      {heroSection && (
        <section
          id="hero"
          className="min-h-screen flex items-start justify-center pt-24 md:pt-32"
        >
          <div className="section-container">{heroSection}</div>
        </section>
      )}

      {/* Projects Section - Proyectos destacados */}
      {projectsSection && (
        <section id="projects" className="py-20">
          <div className="section-container">{projectsSection}</div>
        </section>
      )}

      {/* Experiences Section - Experiencias profesionales */}
      {experiencesSection && (
        <section id="experience" className="py-20 bg-elevated-surface/30">
          {experiencesSection}
        </section>
      )}

      {/* About Section - Sobre mí */}
      {aboutSection && (
        <section id="about" className="py-20 bg-elevated-surface/50">
          <div className="section-container">{aboutSection}</div>
        </section>
      )}

      {/* Skills Section - Habilidades */}
      {skillsSection && (
        <section id="skills" className="py-20">
          <div className="section-container">{skillsSection}</div>
        </section>
      )}

      {/* Custom Sections - Secciones personalizadas */}
      {customSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 ${section.className || ""}`}
        >
          <div className="section-container">
            {section.title && (
              <h2 className="section-title">{section.title}</h2>
            )}
            {section.content}
          </div>
        </section>
      ))}

      {/* Contact Section - Contacto */}
      {contactSection && (
        <section id="contact" className="py-20 bg-elevated-surface/50">
          <div className="section-container">{contactSection}</div>
        </section>
      )}
    </div>
  );
};
