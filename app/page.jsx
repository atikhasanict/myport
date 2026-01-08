"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const FORM_ENDPOINT = "https://formspree.io/f/mnqobrep";

const projects = [
  { title: "E-commerce UI", description: "Modern e-commerce frontend", stack: ["React", "Tailwind"], image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514" },
  { title: "Portfolio Website", description: "Personal portfolio website", stack: ["Next.js", "Tailwind"], image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
  { title: "Weather App", description: "Weather app using API", stack: ["React", "API"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
  { title: "Landing Page", description: "Responsive landing page", stack: ["HTML", "CSS"], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" }
];

export default function Page() {
  const themeContext = useTheme();
  const { dark, toggleTheme } = themeContext || { dark: true, toggleTheme: () => {} };
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
    <div className={`min-h-screen transition-colors duration-300 ${dark ? "dark bg-zinc-950 text-zinc-100" : "bg-white text-zinc-950"}`}>
        <header className={`max-w-6xl mx-auto px-6 py-5 flex justify-between items-center relative transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-white border-b border-zinc-200"}`}>
          <h1 className="text-cyan-400 font-bold text-2xl">Atik.dev</h1>
          <nav className="hidden md:flex gap-6">
            {['about','projects','gallery','contact'].map(s => (
              <button key={s} onClick={() => scrollTo(s)} className={`transition-colors duration-200 ${dark ? "hover:text-cyan-400" : "text-zinc-700 hover:text-cyan-600"}`}>{s}</button>
            ))}
          </nav>
          <div className="flex gap-2">
            <button onClick={toggleTheme} className={`p-2 rounded transition-colors duration-200 ${dark ? "hover:bg-zinc-800" : "hover:bg-zinc-100"}`}>{dark ? <Sun size={20}/> : <Moon size={20}/>}</button>
            <button className="md:hidden" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
          </div>
          {menu && (
            <div className={`absolute top-full right-6 p-4 rounded flex flex-col gap-2 md:hidden transition-colors duration-300 ${dark ? "bg-zinc-900" : "bg-zinc-100 border border-zinc-200"}`}>
              {['about','projects','gallery','contact'].map(s => (
                <button key={s} onClick={() => { scrollTo(s); setMenu(false); }} className={dark ? "" : "text-zinc-700"}>{s}</button>
              ))}
            </div>
          )}
        </header>

        <section className={`text-center py-24 relative transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-white"}`}>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover opacity-10" />
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className={`text-5xl font-bold relative z-10 ${dark ? "text-white" : "text-zinc-950"}`}>Hi, I'm <span className="text-cyan-400">Md. Atik Hasan</span></motion.h1>
          <p className={`mt-6 relative z-10 ${dark ? "text-zinc-400" : "text-zinc-600"}`}>Beginner Web Developer | Next.js & Tailwind</p>
        </section>

        <section id="about" className={`max-w-4xl mx-auto px-6 py-20 transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-white"}`}>
          <h2 className="text-3xl text-cyan-400 mb-4">About Me</h2>
          <p className={dark ? "text-zinc-400" : "text-zinc-600"}>I am learning web development by building real projects using modern tools.</p>
        </section>

        <section id="projects" className={`max-w-6xl mx-auto px-6 py-20 transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-white"}`}>
          <h2 className="text-3xl text-cyan-400 mb-8">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p,i) => (
              <motion.div key={i} whileHover={{scale:1.05}} className={`rounded overflow-hidden transition-colors duration-300 ${dark ? "bg-zinc-900 hover:bg-zinc-800" : "bg-zinc-100 hover:bg-zinc-200"}`}>
                <img src={p.image} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className={`font-semibold ${dark ? "text-white" : "text-zinc-950"}`}>{p.title}</h3>
                  <p className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-600"}`}>{p.description}</p>
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

        <section id="gallery" className={`max-w-6xl mx-auto px-6 py-20 transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-white"}`}>
          <h2 className="text-3xl text-cyan-400 mb-8">Gallery</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {projects.map((p,i) => (
              <motion.img key={i} src={p.image} whileHover={{scale:1.05}} className="rounded h-40 w-full object-cover cursor-pointer" />
            ))}
          </div>
        </section>

        <section id="contact" className={`max-w-2xl mx-auto px-6 py-20 transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-white"}`}>
          <h2 className="text-3xl text-cyan-400 mb-8">Contact</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className={`w-full p-3 rounded border transition-colors duration-300 ${dark ? "bg-zinc-900 border-zinc-700 text-white placeholder-zinc-400" : "bg-zinc-50 border-zinc-300 text-zinc-950 placeholder-zinc-500"}`} />
            <input type="email" name="email" placeholder="Your Email" required className={`w-full p-3 rounded border transition-colors duration-300 ${dark ? "bg-zinc-900 border-zinc-700 text-white placeholder-zinc-400" : "bg-zinc-50 border-zinc-300 text-zinc-950 placeholder-zinc-500"}`} />
            <textarea name="message" placeholder="Your Message" required className={`w-full p-3 rounded border h-32 resize-none transition-colors duration-300 ${dark ? "bg-zinc-900 border-zinc-700 text-white placeholder-zinc-400" : "bg-zinc-50 border-zinc-300 text-zinc-950 placeholder-zinc-500"}`} />
            <button type="submit" disabled={loading} className="w-full p-3 rounded bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white font-semibold transition-colors duration-200">
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className={`text-center font-semibold ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{status}</p>}
          </form>
        </section>

        <footer className={`text-center py-10 transition-colors duration-300 ${dark ? "border-t border-zinc-800 bg-zinc-900" : "border-t border-zinc-200 bg-zinc-50"}`}>
          <p className={dark ? "text-zinc-400" : "text-zinc-600"}>© 2024 Atik Hasan. All rights reserved.</p>
        </footer>
      </div>
  );
}
