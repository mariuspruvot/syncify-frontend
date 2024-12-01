"use client";
import { motion } from "framer-motion";
import { Hero } from "./Hero";
import { ConnectButtons } from "./ConnectButtons";
import { homeAnimations } from "@/lib/animations";
import { BetaButton } from "@/components/homepage/BetaButton";
import { Cursor } from "@/components/cursor/Cursor";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { HomePageModeToggle } from "@/components/themes/mode-toggle";

const HomePage = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center h-screen overflow-hidden",
        "bg-gradient-to-b from-background to-secondary/20",
        { "cursor-none": !isMobile },
      )}
    >
      <div className="absolute top-6 left-6 md:top-6 md:left-6">
        <HomePageModeToggle />
      </div>

      <Cursor />

      {/* Animated background with more noticeable movement */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(29, 185, 84, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(29, 185, 84, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(29, 185, 84, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(29, 185, 84, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(29, 185, 84, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      <div className="absolute top-6 right-6 md:top-6 md:right-6">
        <BetaButton />
      </div>

      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 sm:space-y-6"
          variants={homeAnimations.container}
          initial="hidden"
          animate="show"
        >
          <Hero variants={homeAnimations.item} />
          <ConnectButtons variants={homeAnimations.item} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
