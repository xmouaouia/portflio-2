import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { Send, Loader2, Phone, Mail as MailIcon } from "lucide-react";

export function Contact() {
  const mutation = useCreateMessage();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Establish <span className="text-primary text-glow">Connection</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-8">
              Ready to build the future? Send a secure transmission directly to my personal databanks or connect via WhatsApp.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <a 
                href="tel:+213667477332"
                className="inline-flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-lg"
              >
                <Phone size={20} className="text-primary" />
                +213 667 47 73 32
              </a>
              <a 
                href="mailto:xmouaouia@gmail.com"
                className="inline-flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-lg"
              >
                <MailIcon size={20} className="text-primary" />
                xmouaouia@gmail.com
              </a>
            </div>

            <a 
              href="https://wa.me/213667477332" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary/10 border border-primary/50 text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 gold-glow-hover"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-primary/80 uppercase">Ident / Name</label>
                <input 
                  {...form.register("name")}
                  className="w-full bg-black/50 border border-primary/20 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Enter your designation"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-xs mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-primary/80 uppercase">Comms / Email</label>
                <input 
                  {...form.register("email")}
                  className="w-full bg-black/50 border border-primary/20 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="name@domain.com"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-xs mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-primary/80 uppercase">Payload / Message</label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full bg-black/50 border border-primary/20 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="State your intent..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-xs mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={mutation.isPending}
                className="w-full flex items-center justify-center gap-3 bg-primary text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 gold-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Transmit Data
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
