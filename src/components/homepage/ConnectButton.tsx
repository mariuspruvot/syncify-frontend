"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { homeAnimations } from "@/lib/animations";

interface ConnectButtonProps {
  icon: React.ElementType;
  label: string;
  color: string;
}

export const ConnectButton = ({
  icon: Icon,
  label,
  color,
}: ConnectButtonProps) => {
  const hoverAnimation = {
    scale: 1.05,
    rotate: [-1, 1, -1, 0],
    transition: { rotate: { duration: 0.5 }, scale: { duration: 0.2 } },
  };

  // Style configurations
  const buttonStyles = {
    "--hover-bg": `${color}10`,
  } as React.CSSProperties;

  // Event handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = `${color}10`;
    e.currentTarget.style.borderColor = color;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.borderColor = "hsl(var(--border))";
  };

  return (
    <motion.div
      variants={homeAnimations.item} // Variantes pour les enfants
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        size="lg"
        variant="outline"
        className="gap-2 w-40 transition-colors duration-300"
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} // Ajout des handlers
      >
        <Icon className="w-5 h-5" />
        {label}
      </Button>
    </motion.div>
  );
};
