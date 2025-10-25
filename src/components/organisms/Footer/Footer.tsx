import React from "react";
import { Icon } from "@atoms/Icon";
import type { FooterProps } from "./Footer.types";

/**
 * Footer Organism
 *
 * Pie de página del portfolio con información de contacto
 * y enlaces a redes sociales.
 * Utiliza iconos de Lucide React.
 *
 * @component
 */
export const Footer: React.FC<FooterProps> = ({
  designerName = "Cristina",
  email,
  socialLinks = [],
  year = new Date().getFullYear(),
  additionalText,
  className = "",
}) => {
  return (
    <div
      className={`bg-elevated-surface border-t border-neon-turquoise/20 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información Principal */}
          <div className="space-y-4">
            <h3 className="text-xl font-title font-bold text-gradient">
              {designerName}
            </h3>
            <p className="text-text-primary/60 font-body text-sm">
              Game Designer & Level Designer
            </p>
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-neon-turquoise hover:text-neon-fuchsia transition-colors duration-300 text-sm block"
              >
                {email}
              </a>
            )}
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-title font-semibold text-text-primary">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-text-primary/60 font-body text-sm">
              {["Proyectos", "Sobre Mí", "Habilidades", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="link-nav"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-title font-semibold text-text-primary">
              Sígueme
            </h4>
            {socialLinks.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon group"
                    title={link.name}
                    aria-label={link.name}
                  >
                    {link.icon && (
                      <Icon
                        icon={link.icon}
                        size={20}
                        color="text-neon-turquoise"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-text-primary/40 text-sm font-body">
                Próximamente...
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neon-turquoise/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-primary/40 text-sm font-body text-center md:text-left">
              © {year} {designerName}. Todos los derechos reservados.
            </p>
            {additionalText && (
              <p className="text-text-primary/40 text-sm font-body text-center md:text-right">
                {additionalText}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
