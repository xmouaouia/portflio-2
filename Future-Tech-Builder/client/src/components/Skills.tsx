import { motion } from "framer-motion";
import { Sparkles, SquareTerminal, Cpu, MonitorPlay } from "lucide-react";

export function Skills() {
  const skills = [
    {
      title: "Vibe Coding",
      desc: "Creating complex software architecture through natural language and intent, bypassing syntax.",
      icon: <Sparkles size={32} className="text-primary" />
    },
    {
      title: "Prompt Engineering",
      desc: "Crafting highly structured, precise prompts to extract maximum capability from LLMs.",
      icon: <SquareTerminal size={32} className="text-primary" />
    },
    {
      title: "AI Tools",
      desc: "Leveraging cutting-edge AI environments to automate and accelerate the development lifecycle.",
      icon: <Cpu size={32} className="text-primary" />
    },
    {
      title: "Digital Strategy",
      desc: "Architecting holistic tech solutions that align perfectly with business and aesthetic goals.",
      icon: <MonitorPlay size={32} className="text-primary" />
    }
  ];

  return (
    <section id="skills" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            System <span className="text-primary text-glow">Capabilities</span>
          </h2>
          <div className="w-24 h-1 bg-primary gold-glow" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl border-primary/20 hover:-translate-y-2 hover:border-primary/60 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
