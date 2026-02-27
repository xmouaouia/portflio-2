import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-primary/20 bg-black/80 backdrop-blur-md pt-16 pb-8 z-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40 text-glow mb-4 tracking-widest">
          MOUAOUIYA MECHERI
        </h2>

        <div className="flex flex-col items-center gap-2 mb-8 text-primary/60 font-mono text-sm">
          <a href="mailto:xmouaouia@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
            <Mail size={14} /> xmouaouia@gmail.com
          </a>
          <a href="tel:+213667477332" className="hover:text-primary transition-colors flex items-center gap-2">
            <Phone size={14} /> +213 667 47 73 32
          </a>
        </div>

        <div className="flex gap-6 mb-12">
          {[
            { icon: <Github size={20} />, href: "#" },
            { icon: <Linkedin size={20} />, href: "#" },
            { icon: <Twitter size={20} />, href: "#" },
            { icon: <Mail size={20} />, href: "mailto:xmouaouia@gmail.com" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary/80 hover:text-black hover:bg-primary transition-all duration-300 gold-glow-hover hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-sm font-mono text-muted-foreground">
          <p>© {currentYear} MM. All Systems Operational.</p>
          <p>Built by <span className="text-primary">Mouaouiya Mecheri</span> in Algeria.</p>
        </div>
      </div>
    </footer>
  );
}
