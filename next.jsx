"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, Menu, X } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/mnqobrep";

const projects = [
  { title: "E-commerce UI", description: "Modern e-commerce frontend with product cards and filters", tags: ["React"], stack: ["React", "Tailwind CSS"], image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514" },
  { title: "Portfolio Website", description: "Personal portfolio built with Next.js and Tailwind CSS", tags: ["Next.js", "React"], stack: ["Next.js", "Tailwind CSS", "Vercel"], image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
  { title: "Task Manager App", description: "A simple task manager to practice React fundamentals", tags: ["React"], stack: ["React", "LocalStorage"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c" },
  { title: "Landing Page", description: "Modern responsive landing page UI", tags: ["HTML", "CSS"], stack: ["HTML", "CSS", "Responsive Design"], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { title: "Weather App", description: "Weather forecast app using public API", tags: ["React"], stack: ["React", "API", "CSS"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
  { title: "Blog Website", description: "Simple blog layout with dark mode", tags: ["HTML", "CSS"], stack: ["HTML", "CSS", "Responsive"], image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
];

export default function PortfolioPage() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) { setStatus("Message sent successfully ✅"); form.reset(); } else { setStatus("Failed to send message ❌"); }
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 transition-colors">
        {/* Header with Burger Menu */}
        <header className="max-w-6xl mx-auto py-6 flex justify-between items-center relative">
          <h1 className="font-bold text-xl text-cyan-400">Atik.dev</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <button onClick={() => scrollTo('about')} className="hover:text-cyan-400">About</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-cyan-400">Projects</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-cyan-400">Contact</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-cyan-400">Gallery</button>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setDark(!dark)}>{dark ? <Sun size={18} /> : <Moon size={18} />}</Button>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full right-0 bg-zinc-900 text-zinc-100 p-4 rounded shadow-md flex flex-col gap-2 md:hidden">
              <button onClick={() => { scrollTo('about'); setMenuOpen(false); }}>About</button>
              <button onClick={() => { scrollTo('projects'); setMenuOpen(false); }}>Projects</button>
              <button onClick={() => { scrollTo('contact'); setMenuOpen(false); }}>Contact</button>
              <button onClick={() => { scrollTo('gallery'); setMenuOpen(false); }}>Gallery</button>
            </motion.div>
          )}
        </header>

        <section className="max-w-5xl mx-auto py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-10" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-cyan-400">Md. Atik Hasan</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 text-zinc-400 max-w-2xl mx-auto">Beginner Web Developer building modern web apps with Next.js & Tailwind CSS.</motion.p>
        </section>

        <section id="about" className="max-w-4xl mx-auto py-20">
          <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6 text-cyan-400">About Me</motion.h2>
          <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-zinc-400 leading-relaxed">I am a beginner developer learning by building real projects. My focus is clean UI, responsive design, and modern tools.</motion.p>
        </section>

        <section id="projects" className="max-w-6xl mx-auto py-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-semibold mb-8 text-cyan-400">Projects</motion.h2>
          {/* Filterable Gallery Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap">
            {['All','React','Next.js','HTML'].map(f => (
              <Button key={f} size="sm" onClick={() => setFilter(f)} className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-zinc-900">{f}</Button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => filter === 'All' || p.stack.includes(filter)).map((project, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="cursor-pointer">
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-48" />
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, idx) => (
                        <motion.span key={idx} whileHover={{ scale: 1.2, color: '#06b6d4', textShadow: '0 0 8px #06b6d4' }} className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-xs">{tech}</motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="gallery" className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl font-semibold mb-8 text-cyan-400">Gallery</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {projects.map((project, idx) => (
              <motion.img key={idx} src={project.image} alt={project.title} whileHover={{ scale: 1.05, rotate: 2 }} className="rounded-lg object-cover w-full h-40 cursor-pointer shadow-md" />
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-4xl mx-auto py-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6 text-cyan-400">Contact Me</motion.h2>
          <motion.form onSubmit={sendEmail} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-4">
            <input name="name" required className="bg-zinc-900 border border-zinc-800 p-3 rounded" placeholder="Your Name" />
            <input name="email" type="email" required className="bg-zinc-900 border border-zinc-800 p-3 rounded" placeholder="Your Email" />
            <textarea name="message" required className="bg-zinc-900 border border-zinc-800 p-3 rounded" rows={4} placeholder="Your Message" />
            <Button disabled={loading} className="bg-cyan-500 hover:bg-cyan-400 text-zinc-900 font-semibold">{loading ? "Sending…" : "Send Message"}</Button>
            {status && <p className="text-sm text-zinc-400">{status}</p>}
          </motion.form>
        </section>

        <footer className="text-center py-6 text-zinc-500">© {new Date().getFullYear()} Md. Atik Hasan — Built with React</footer>
      </div>
    </main>
  );
}
