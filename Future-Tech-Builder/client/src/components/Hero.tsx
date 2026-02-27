import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/40"
        >
          <Terminal size={16} className="text-primary" />
          <span className="text-xs md:text-sm font-mono tracking-widest text-primary/90 uppercase">
            System Online / Ready
          </span>
        </motion.div>

        {/* Floating Name Effect */}
        <motion.h1
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-primary to-[#7A6110] text-glow mb-6 px-4"
        >
          MOUAOUIYA<br/>MECHERI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-3xl font-light text-foreground/80 mb-8 max-w-3xl text-glow-subtle"
        >
          Professional <span className="font-bold text-primary">Web Developer</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl bg-primary text-black font-black uppercase tracking-widest overflow-hidden gold-glow-hover transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Explore My Projects</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://wa.me/213667477332"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl glass-panel text-primary font-bold uppercase tracking-widest hover:bg-primary/10 transition-all duration-300 border-primary/30 hover:border-primary flex items-center gap-3"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-primary/60 font-mono">Scroll Sequence</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
