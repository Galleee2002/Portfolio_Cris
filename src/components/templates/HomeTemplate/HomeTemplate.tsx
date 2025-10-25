import React from "react";
import type { HomeTemplateProps } from "./HomeTemplate.types";

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
      {heroSection && (
        <section
          id="hero"
          className="min-h-screen flex items-start justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32"
        >
          <div className="section-container">{heroSection}</div>
        </section>
      )}

      {projectsSection && (
        <section id="projects" className="py-12 sm:py-16 md:py-20">
          <div className="section-container">{projectsSection}</div>
        </section>
      )}

      {experiencesSection && (
        <section id="experience" className="py-12 sm:py-16 md:py-20 ">
          {experiencesSection}
        </section>
      )}

      {aboutSection && (
        <section id="about" className="py-12 sm:py-16 md:py-20">
          <div className="section-container">{aboutSection}</div>
        </section>
      )}

      {skillsSection && (
        <section id="skills" className="py-12 sm:py-16 md:py-20">
          <div className="section-container">{skillsSection}</div>
        </section>
      )}

      {customSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-12 sm:py-16 md:py-20 ${section.className || ""}`}
        >
          <div className="section-container">
            {section.title && (
              <h2 className="section-title">{section.title}</h2>
            )}
            {section.content}
          </div>
        </section>
      ))}

      {contactSection && (
        <section id="contact" className="py-12 sm:py-16 md:py-20">
          <div className="section-container">{contactSection}</div>
        </section>
      )}
    </div>
  );
};
