"use client";
import { motion, Variant } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConnectButtonProps {
  icon: React.ElementType;
  label: string;
  color: string;
  variants: Variant;
}

export const ConnectButton = ({
  icon: Icon,
  label,
  color,
  variants,
}: ConnectButtonProps) => {
  // Animation configurations
  const hoverAnimation = {
    scale: 1.05,
    rotate: [-1, 1, -1, 0],
    transition: {
      rotate: {
        repeat: 0,
        duration: 0.5,
      },
      scale: { duration: 0.2 },
    },
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
      variants={variants}
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        size="lg"
        variant="outline"
        className={cn(
          "gap-2 w-40",
          "transition-colors duration-300",
          "cursor-none",
        )}
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon className="w-5 h-5" />
        {label}
      </Button>
    </motion.div>
  );
};
