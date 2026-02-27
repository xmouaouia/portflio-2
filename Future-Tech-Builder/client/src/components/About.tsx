import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Decorative background element inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                About <span className="text-primary text-glow">The Creator</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 gold-glow" />
              
              <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed mb-6">
                Specializing in building <span className="font-bold text-white">high-performance, responsive, and modern web applications</span> with a focus on clean code and user experience.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I transform abstract ideas into tangible digital realities using the sheer power of modern web technologies. By leveraging advanced development frameworks and next-gen tools, I construct software at lightspeed, delivering futuristic, high-end experiences today.
              </p>
            </div>
            
            <div className="relative">
              {/* Abstract Representation of the User */}
              <div className="aspect-square rounded-2xl glass-panel border-primary/30 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 border border-primary/20 rounded-full absolute"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border border-primary/10 rounded-full absolute"
                />
                
                <h3 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/20 z-10 text-glow">
                  MM
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
