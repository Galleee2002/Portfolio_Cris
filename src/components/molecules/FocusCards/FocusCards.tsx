import React, { useState } from "react";
import { motion } from "framer-motion";
import type { FocusCardsProps } from "./FocusCards.types";

/**
 * FocusCards Molecule
 *
 * Componente de tarjetas con efecto de enfoque interactivo.
 * Inspirado en Aceternity UI.
 *
 * @component
 */
export const FocusCards: React.FC<FocusCardsProps> = ({
  cards,
  onCardClick,
  className = "",
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          onClick={() => onCardClick?.(index)}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className="relative overflow-hidden rounded-2xl h-80 md:h-96 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Imagen de fondo */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.src})`,
            }}
            animate={{
              scale: hovered === index ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Overlay con gradiente */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
            animate={{
              opacity: hovered === index ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Contenido */}
          <div className="relative h-full flex flex-col justify-end p-6 z-10">
            <motion.h3
              className="font-title text-xl md:text-2xl font-bold text-white mb-2"
              animate={{
                y: hovered === index ? -10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h3>

            {/* Descripción (opcional) */}
            {card.description && (
              <motion.p
                className="font-body text-sm md:text-base text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hovered === index ? 1 : 0,
                  y: hovered === index ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {card.description}
              </motion.p>
            )}
          </div>

          {/* Borde con efecto glow en hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2"
            animate={{
              borderColor:
                hovered === index
                  ? "rgba(0, 255, 255, 0.6)"
                  : "rgba(255, 255, 255, 0.1)",
              boxShadow:
                hovered === index
                  ? "0 0 30px rgba(0, 255, 255, 0.4)"
                  : "0 0 0px rgba(0, 255, 255, 0)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};
