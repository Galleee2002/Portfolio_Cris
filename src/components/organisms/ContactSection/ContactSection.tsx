import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { ContactInfoBox } from "@atoms/ContactInfoBox";
import type { ContactSectionProps } from "./ContactSection.types";

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = "cristpry@gmail.com",
  phone = "+5401172181012",
  discord = "Guipercrist",
  className = "",
}) => {
  return (
    <div
      className={`max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center px-4 ${className}`}
    >
      <h2 className="section-title">Contacto</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        <ContactInfoBox label="Email" value={email} icon={Mail} />
        <ContactInfoBox label="Teléfono" value={phone} icon={Phone} />
        <ContactInfoBox
          label="Discord"
          value={discord}
          icon={MessageCircle}
          className="sm:col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
};
