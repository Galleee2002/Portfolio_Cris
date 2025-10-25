import React from "react";
import type { MainLayoutProps } from "./MainLayout.types";

/**
 * MainLayout Template
 *
 * Template principal que define la estructura base de todas las páginas.
 * Incluye slots para header (con navegación integrada), contenido principal y footer.
 *
 * @component
 * @example
 * ```tsx
 * <MainLayout
 *   header={<Header navigationItems={items} />}
 *   footer={<Footer />}
 * >
 *   <div>Contenido de la página</div>
 * </MainLayout>
 * ```
 */
export const MainLayout: React.FC<MainLayoutProps> = ({
  header,
  children,
  footer,
  className = "",
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Header Section (incluye navegación) */}
      {header && <header className="w-full">{header}</header>}

      {/* Main Content Section con padding para compensar el header fixed */}
      <main className="flex-1 w-full pt-16 sm:pt-18 md:pt-20">{children}</main>

      {/* Footer Section */}
      {footer && <footer className="w-full">{footer}</footer>}
    </div>
  );
};
