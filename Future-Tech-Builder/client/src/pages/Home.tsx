import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GlowingOrb } from "@/components/GlowingOrb";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-hidden relative selection:bg-primary/30 selection:text-primary">
      
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.apply/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <GlowingOrb top="-10%" left="-10%" size="w-[800px] h-[800px]" delay={0} opacity={0.1} />
        <GlowingOrb bottom="10%" right="-5%" size="w-[600px] h-[600px]" delay={2} opacity={0.12} />
        <GlowingOrb top="40%" left="60%" size="w-[500px] h-[500px]" delay={4} opacity={0.08} />
      </div>

      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      
      {/* Projects placeholder section matching nav link requirement */}
      <section id="projects" className="relative py-32 z-10 border-y border-primary/10 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 text-white/50">
            Projects Databank
          </h2>
          <p className="text-primary font-mono tracking-widest uppercase text-glow">
            // Classification: Classified
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The project databank is currently being populated with next-gen AI applications. Systems will be online shortly.
          </p>
        </div>
      </section>

      <Journey />
      <Contact />
      
      <Footer />
    </main>
  );
}
