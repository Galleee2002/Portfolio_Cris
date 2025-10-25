import React from "react";
import { Button } from "@atoms/Button";
import type { ContactSectionProps } from "./ContactSection.types";

/**
 * ContactSection Organism
 *
 * Sección de contacto con CTA (Call to Action).
 * Incluye título, descripción y botón de acción.
 *
 * @component
 */
export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Trabajemos Juntos",
  description,
  buttonText = "Enviar Mensaje",
  onContactClick,
  className = "",
}) => {
  return (
    <div className={`max-w-2xl mx-auto text-center ${className}`}>
      <h2 className="section-title">{title}</h2>
      <p className="text-lg text-text-primary/80 font-body mb-8">
        {description}
      </p>
      <Button variant="primary" size="large" onClick={onContactClick}>
        {buttonText}
      </Button>
    </div>
  );
};
