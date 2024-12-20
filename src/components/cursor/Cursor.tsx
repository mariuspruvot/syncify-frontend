"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const Cursor = () => {
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);

  // Different values of spring to create delay
  const cursorX = useSpring(0, { damping: 20, stiffness: 200, mass: 0.1 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 200, mass: 0.1 });
  const innerX = useSpring(0, { damping: 30, stiffness: 150, mass: 0.3 });
  const innerY = useSpring(0, { damping: 30, stiffness: 150, mass: 0.3 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      innerX.set(e.clientX);
      innerY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickableParent = target.closest(
        '.cursor-pointer, [role="button"], button, a',
      );
      const isClickable =
        target.classList.contains("cursor-pointer") || !!clickableParent;
      setIsHovering(isClickable);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY, innerX, innerY, isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className={cn(
          "fixed pointer-events-none z-[998]",
          "w-8 h-8 rounded-full",
          "border border-primary/50",
          "bg-transparent",
        )}
        style={{
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className={cn(
          "fixed pointer-events-none z-[999]",
          "w-2 h-2 rounded-full",
          "bg-primary",
        )}
        style={{
          left: 0,
          top: 0,
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
        }}
      />
    </>
  );
};
