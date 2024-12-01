import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { buttonAnimations } from "@/components/homepage/animations/variants";
import { styles } from "@/components/homepage/animations/styles";

export const BetaButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <motion.div {...buttonAnimations.beta.container}>
      <motion.span
        className="inline-block"
        variants={buttonAnimations.beta.badge}
        initial="initial"
        animate={isAnimating ? "animate" : "initial"}
      >
        <Badge
          variant="secondary"
          className={styles.badges.beta}
          onClick={handleClick}
          role="button"
          aria-label="Beta"
        >
          Beta
        </Badge>
      </motion.span>
    </motion.div>
  );
};
