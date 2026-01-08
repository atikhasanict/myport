"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/mnqobrep";

const projects = [
  { title: "E-commerce UI", description: "Modern e-commerce frontend", stack: ["React", "Tailwind"], image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514" },
  { title: "Portfolio Website", description: "Personal portfolio website", stack: ["Next.js", "Tailwind"], image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
  { title: "Weather App", description: "Weather app using API", stack: ["React", "API"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
  { title: "Landing Page", description: "Responsive landing page", stack: ["HTML", "CSS"], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" }
];

export default function Page() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) {
        setStatus("Message sent successfully ✅");
        e.target.reset();
      } else {
        setStatus("Failed to send ❌");
      }
    } catch {
      setStatus("Network error ❌");
    }
    setLoading(false);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <html className={dark ? "dark" : ""}>
      <body className="bg-zinc-950 text-zinc-100">
        <header className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center relative">
          <h1 className="text-cyan-400 font-bold">Atik.dev</h1>
          <nav className="hidden md:flex gap-6">
            {['about','projects','gallery','contact'].map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="hover:text-cyan-400">{s}</button>
            ))}
          </nav>
          <div className="flex gap-2">
            <button onClick={() => setDark(!dark)}>{dark ? <Sun/> : <Moon/>}</button>
            <button className="md:hidden" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
          </div>
          {menu && (
            <div className="absolute top-full right-6 bg-zinc-900 p-4 rounded flex flex-col gap-2 md:hidden">
              {['about','projects','gallery','contact'].map(s => (
                <button key={s} onClick={() => { scrollTo(s); setMenu(false); }}>{s}</button>
              ))}
            </div>
          )}
        </header>

        <section className="text-center py-24 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover opacity-10" />
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl font-bold">Hi, I'm <span className="text-cyan-400">Md. Atik Hasan</span></motion.h1>
          <p className="text-zinc-400 mt-6">Beginner Web Developer | Next.js & Tailwind</p>
        </section>

        <section id="about" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl text-cyan-400 mb-4">About Me</h2>
          <p className="text-zinc-400">I am learning web development by building real projects using modern tools.</p>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl text-cyan-400 mb-8">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p,i) => (
              <motion.div key={i} whileHover={{scale:1.05}} className="bg-zinc-900 rounded overflow-hidden">
                <img src={p.image} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-zinc-400">{p.description}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {p.stack.map(t => (
                      <span key={t} className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="gallery" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl text-cyan-400 mb-8">Gallery</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {projects.map((p,i) => (
              <motion.img key={i} src={p.image} whileHover={{scale:1.05}} className="rounded h-40 w-full object-cover" />
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-2xl mx-auto px-6 py-20">
          <h2 className="text-3xl text-cyan-400 mb-8">Contact</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-zinc-900 border border-zinc-700" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded bg-zinc-900 border border-zinc-700" />
            <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded bg-zinc-900 border border-zinc-700 h-32 resize-none" />
            <button type="submit" disabled={loading} className="w-full p-3 rounded bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50">
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="text-center">{status}</p>}
          </form>
        </section>

        <footer className="text-center py-10 border-t border-zinc-800">
          <p className="text-zinc-400">© 2024 Atik Hasan. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
