import type { LucideIcon } from "lucide-react";
import { Box, Layers, Palette, Brush, Grid3x3, Image } from "lucide-react";

export interface ToolLogo {
  name: string;
  icon: LucideIcon;
  color: string;
  href?: string;
}

export const gameDesignTools: ToolLogo[] = [
  {
    name: "Unity",
    icon: Box,
    color: "#FFFFFF",
    href: "https://unity.com",
  },
  {
    name: "Autodesk Maya",
    icon: Layers,
    color: "#0696D7",
    href: "https://www.autodesk.com/products/maya",
  },
  {
    name: "ZBrush",
    icon: Brush,
    color: "#F26D3D",
    href: "https://www.maxon.net/zbrush",
  },
  {
    name: "Substance Painter",
    icon: Palette,
    color: "#DA1F26",
    href: "https://www.adobe.com/products/substance3d-painter.html",
  },
  {
    name: "Substance Designer",
    icon: Grid3x3,
    color: "#DA1F26",
    href: "https://www.adobe.com/products/substance3d-designer.html",
  },
  {
    name: "Adobe Photoshop",
    icon: Image,
    color: "#31A8FF",
    href: "https://www.adobe.com/products/photoshop.html",
  },
];
