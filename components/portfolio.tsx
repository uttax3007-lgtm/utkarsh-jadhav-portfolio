"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { projects } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { label: "Languages", items: "C · C++ · Python · JavaScript · TypeScript" },
  { label: "Frontend", items: "HTML · CSS · React · Next.js · Tailwind CSS" },
  { label: "Backend & data", items: "Node.js · Express · MongoDB · REST APIs" },
  { label: "Tools", items: "Git · GitHub · VS Code · Postman" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={dark ? "site theme-dark" : "site"}>
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Utkarsh Jadhav home">
          U<span>.</span>J
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="top-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="availability" href="#contact"><span /> Open to opportunities</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-meta">
          <span className="eyebrow"><span className="eyebrow-line" /> PORTFOLIO / 2026</span>
          <span className="hero-index">INDEPENDENTLY CURIOUS. ALWAYS BUILDING.</span>
        </div>
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.75, ease: "easeOut" }}>
          <p className="hero-kicker">HELLO, I’M UTKARSH JADHAV</p>
          <h1>Turning ideas<br />into <em>useful</em><br className="mobile-break" /> digital things<span className="blue-dot">.</span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              IT student, developer, and curious problem-solver. I like exploring how software, the web, and AI can make everyday things work better.
            </p>
            <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={21} /></a>
          </div>
        </motion.div>
        <div className="hero-foot">
          <span>BASED IN PUNE, INDIA</span>
          <span>SOFTWARE / WEB / AI</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-wrap intro-grid">
          <span className="section-label">01 / A SHORT INTRO</span>
          <p>I’m interested in the space where <span>technology meets real problems</span> — from building practical web products to understanding the systems and ideas behind them.</p>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><span className="section-label">02 / SELECTED WORK</span><h2>Things I’ve<br /><em>been building.</em></h2></div>
          <p className="section-aside">A growing collection of experiments, coursework, and projects. Each one is a chance to learn by making.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className={project.featured ? "project-row project-featured" : "project-row"}
              key={project.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <div className="project-topline"><span>{project.category}</span><span className="project-status">{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>
                <ArrowUpRight size={21} />
              </a>
            </motion.article>
          ))}
        </div>
        <a className="text-link all-work" href="https://github.com/uttax3007-lgtm?tab=repositories" target="_blank" rel="noreferrer">
          Explore all repositories <ArrowUpRight size={16} />
        </a>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-left">
            <span className="section-label">03 / A LITTLE ABOUT ME</span>
            <h2>Curiosity is<br />my <em>starting point.</em></h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">I’m Utkarsh — currently pursuing a B.Tech in Information Technology at Bharati Vidyapeeth College of Engineering, Pune.</p>
            <p>I enjoy learning by building. My interests move across software development, web technologies, practical AI/ML, and the fundamentals that make reliable products possible. I’m still early in the journey, and that’s what makes exploring new ideas exciting.</p>
            <p>Outside the code editor, I enjoy collaborating with student communities, exchanging ideas, and taking part in technical initiatives.</p>
            <div className="about-details">
              <div><span>EDUCATION</span><strong>B.Tech — Information Technology</strong><small>Bharati Vidyapeeth College of Engineering, Pune</small></div>
              <div><span>CURRENT FOCUS</span><strong>Full-stack foundations & practical AI</strong><small>Learning through hands-on projects</small></div>
            </div>
            <a className="text-link" href="https://github.com/uttax3007-lgtm" target="_blank" rel="noreferrer">A little more on GitHub <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="toolkit-section section-wrap" id="toolkit">
        <div className="section-heading toolkit-heading">
          <div><span className="section-label">04 / THE TOOLKIT</span><h2>Tools I’m<br /><em>learning with.</em></h2></div>
          <p className="section-aside">A working toolkit, not a checklist. I’m continuously improving the fundamentals and adding new tools as projects call for them.</p>
        </div>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <div className="skill-row" key={skill.label}>
              <span className="skill-index">0{i + 1}</span><h3>{skill.label}</h3><p>{skill.items}</p><ArrowDownRight size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <span className="section-label">05 / HAVE SOMETHING IN MIND?</span>
          <h2>Let’s make<br /><em>something matter.</em></h2>
          <p>Open to learning opportunities, collaborations, internships, and conversations around technology.</p>
          <div className="contact-actions">
            <a className="contact-button" href="https://github.com/uttax3007-lgtm" target="_blank" rel="noreferrer">Connect on GitHub <ArrowUpRight size={18} /></a>
            <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
          <div className="contact-orbit" aria-hidden="true">UJ<span>✳</span></div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="wordmark footer-mark" href="#top">U<span>.</span>J</a>
        <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        <span>© {new Date().getFullYear()} UTKARSH JADHAV</span>
        <a className="back-top" href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}