import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { ContactInfoBoxProps } from "./ContactInfoBox.types";

export const ContactInfoBox: React.FC<ContactInfoBoxProps> = ({
  label,
  value,
  icon: Icon,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div
      className={`bg-elevated-surface border border-neon-turquoise/20 rounded-lg p-4 sm:p-5 md:p-6 
                   hover:border-neon-turquoise/40 transition-all duration-300 group ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2">
            {Icon && (
              <Icon size={18} className="text-neon-turquoise shrink-0" />
            )}
            <span className="text-text-primary/60 text-xs sm:text-sm font-body font-semibold">
              {label}
            </span>
          </div>
          <p className="text-text-primary font-body text-sm sm:text-base md:text-lg break-all">
            {value}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center 
                     rounded-lg bg-neon-turquoise/10 border border-neon-turquoise/30 
                     hover:bg-neon-turquoise/20 hover:border-neon-turquoise/50 
                     transition-all duration-300 group-hover:scale-105"
          aria-label={`Copiar ${label}`}
        >
          {copied ? (
            <Check size={18} className="text-neon-turquoise" />
          ) : (
            <Copy size={18} className="text-neon-turquoise" />
          )}
        </button>
      </div>
    </div>
  );
};
