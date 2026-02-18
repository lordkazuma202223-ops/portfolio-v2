"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Zap, ChevronDown } from "lucide-react"
import ChatWidget from "@/components/ChatWidget"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = [
    { name: "Frontend", icon: Layout, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: Database, items: ["Node.js", "NestJS", "MongoDB", "PostgreSQL"] },
    { name: "Tools", icon: Zap, items: ["Git", "Docker", "AWS", "Vercel"] },
  ]

  const projects = [
    {
      title: "Agent Task Dispatcher",
      description: "Real-time collaborative AI agent orchestration system with visual workflow builder",
      tags: ["Next.js", "TypeScript", "React Flow", "OpenClaw"],
      link: "#"
    },
    {
      title: "Productivity Dashboard",
      description: "Personal productivity management space with tasks, focus timer, and habit tracking",
      tags: ["Next.js", "TypeScript", "Tailwind", "Jest"],
      link: "#"
    },
    {
      title: "Project Dashboard",
      description: "Real-time monitoring dashboard for cron jobs and system status",
      tags: ["Next.js", "OpenClaw API", "Vercel"],
      link: "#"
    }
  ]

  // Generate 80 particles for more visible effect
  const particles = [...Array(80)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 24, // 8-32px particles
    duration: 12 + Math.random() * 12, // 12-24s animation
    delay: Math.random() * 10
  }))

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Animations */}
      <div className="background-gradient"></div>
      <div className="mesh-gradient"></div>
      <div className="aurora-effect"></div>
      <div className="floating-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="article"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
      <div className="noise-texture"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md py-4" : "py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-500">Portfolio</span>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("about")} className="hover:text-purple-500 transition-colors">About</button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-purple-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-purple-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-purple-500 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Scroll Progress Bar */}
      <div className="scroll-progress"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-animate="fade-up">
            <span className="text-white">Hi, I'm </span>
            <span className="text-purple-500">Lofi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8" data-animate="fade-up">
            Full-Stack Developer & AI Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto" data-animate="fade-up">
            Building innovative web applications and AI-powered solutions. Passionate about clean code, modern technologies, and creating impactful digital experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap" data-animate="fade-up">
            <button onClick={() => scrollToSection("projects")} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
              View My Work
            </button>
            <button onClick={() => scrollToSection("contact")} className="px-8 py-3 border border-purple-500 hover:bg-purple-500/10 rounded-lg font-medium transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
        <button onClick={() => scrollToSection("about")} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-500" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-purple-500">About</span> Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 p-8 rounded-2xl border border-purple-500/20" data-animate="fade-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with expertise in building modern web applications. I specialize in Next.js, React, TypeScript and creating AI-powered solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                Currently exploring the intersection of AI agents and web development, building tools that make development more efficient and enjoyable.
              </p>
            </div>
            <div className="space-y-6" data-animate="fade-right">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Development</h3>
                <p className="text-gray-400">Building scalable web applications with modern frameworks</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">AI Integration</h3>
                <p className="text-gray-400">Creating intelligent agents and automation systems</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">DevOps</h3>
                <p className="text-gray-400">Deploying and managing applications on cloud platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-card bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all group" data-animate="stagger" data-animate-delay={index}>
                <div className="icon-wrapper">
                  <skill.icon className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-500 transition-colors">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all group" data-animate="stagger" data-animate-delay={index + 3}>
                <div className="mb-4">
                  <Code2 className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let's <span className="text-purple-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/lordkazuma202223-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-900/50 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 border border-zinc-800 transition-all group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-900/50 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 border border-zinc-800 transition-all group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-4 bg-zinc-900/50 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 border border-zinc-800 transition-all group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2026 Lofi. Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
