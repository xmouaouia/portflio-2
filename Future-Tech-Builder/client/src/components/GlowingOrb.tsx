import { motion } from "framer-motion";

interface GlowingOrbProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  size?: string;
  opacity?: number;
}

export function GlowingOrb({ 
  top, left, right, bottom, 
  delay = 0, 
  size = "w-96 h-96",
  opacity = 0.15 
}: GlowingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full bg-primary blur-[120px] pointer-events-none z-0 ${size}`}
      style={{ top, left, right, bottom, opacity }}
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
