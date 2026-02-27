import { motion } from "framer-motion";
import { Code2, BrainCircuit, Rocket, Zap } from "lucide-react";

export function Journey() {
  const steps = [
    {
      icon: <Code2 size={24} />,
      year: "Genesis",
      title: "Core Development",
      desc: "Built a rock-solid foundation in modern web architectures and computational logic."
    },
    {
      icon: <BrainCircuit size={24} />,
      year: "Evolution",
      title: "AI Systems",
      desc: "Specialized in integrating cutting-edge Artificial Intelligence to enhance application performance."
    },
    {
      icon: <Zap size={24} />,
      year: "Advanced",
      title: "Full-Stack Mastery",
      desc: "Delivering high-end digital solutions by mastering the intersection of design and functionality."
    },
    {
      icon: <Rocket size={24} />,
      year: "Present",
      title: "Lead Architect",
      desc: "Engineering production-ready, futuristic digital experiences for global clients at scale."
    }
  ];

  return (
    <section id="journey" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            The <span className="text-primary text-glow">Professional Path</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">The evolution of a Professional Web Developer</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-panel border-primary items-center justify-center text-primary gold-glow z-10 bg-black">
                  {step.icon}
                </div>

                <div className="w-full md:w-1/2 flex justify-start md:justify-end">
                  <div className={`w-full max-w-lg glass-panel p-8 rounded-2xl border-primary/20 hover:border-primary/50 transition-colors duration-300 group ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <div className="text-primary font-mono text-sm mb-2 opacity-80">{step.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
