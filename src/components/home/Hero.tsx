"use client";
import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { homeAnimations, HomeVariants } from "@/lib/animations";
import { HERO_TEXT } from "@/lib/constants/text";
import { cn } from "@/lib/utils";

interface HeroProps {
  variants: HomeVariants;
}

const ResetButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3 }}
    onClick={onClick}
    className={cn(
      "absolute left-1/2 -translate-x-1/2",
      "top-0 sm:top-1",
      "text-xs sm:text-sm",
      "bg-primary/10 hover:bg-primary/20",
      "rounded-full",
      "px-3 py-1 sm:px-4 sm:py-2",
      "transition-colors duration-300 ease-out",
      "cursor-none",
    )}
  >
    Reset
  </motion.button>
);

export const Hero = ({ variants }: HeroProps) => {
  const [isExploded, setIsExploded] = useState(false);

  const explodedCharacters = useMemo(
    () =>
      HERO_TEXT.title.split("").map((char, index) => (
        <motion.span
          key={index}
          className={cn("inline-block", "cursor-pointer", "cursor-none")}
          animate={isExploded ? homeAnimations.explodingText(index) : {}}
        >
          {char}
        </motion.span>
      )),
    [isExploded],
  );

  return (
    <>
      <div className="flex justify-center items-center h-[6rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={cn(
            "font-bold text-primary relative",
            "text-5xl xl:text-6xl",
            "cursor-pointer",
            "cursor-none",
          )}
          onClick={() => !isExploded && setIsExploded(true)}
          role="button"
          aria-label="Animate title"
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent) =>
            e.key === "Enter" && !isExploded && setIsExploded(true)
          }
        >
          {explodedCharacters}
          {isExploded && <ResetButton onClick={() => setIsExploded(false)} />}
        </motion.div>
      </div>

      <motion.p
        variants={variants}
        className={cn(
          "text-base lg:text-xl",
          "text-muted-foreground",
          "max-w-[90%] sm:max-w-prose",
          "mx-auto",
          "mt-4 sm:mt-6",
          "flex flex-wrap items-center justify-center gap-1 sm:gap-2",
          "text-center",
        )}
      >
        <span>{HERO_TEXT.subtitle}</span> {/* Wrap le texte dans un span */}
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.5,
            duration: 1.5,
            ease: "easeOut",
          }}
          className="text-primary inline-block"
        >
          {HERO_TEXT.final}
        </motion.span>
      </motion.p>
    </>
  );
};
