"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass border-b border-border/50 shadow-lg backdrop-blur-xl" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all" />
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  VS
                </span>
              </div>
            </div>
            <span className="hidden sm:block text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
              Vitória Soder
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-background/5 rounded-full px-2 py-2 border border-border/30">
            <button
              onClick={() => scrollToSection("about")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                activeSection === "about"
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                activeSection === "skills"
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                activeSection === "projects"
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                activeSection === "contact"
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Contato
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover-lift hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <a href="https://github.com/VitoriaSoder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover-lift hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <a
                href="https://br.linkedin.com/in/vitória-soder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("about")}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                  activeSection === "about"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                  activeSection === "skills"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                  activeSection === "projects"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                  activeSection === "contact"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                Contato
              </button>
              <div className="flex items-center gap-3 pt-4 px-4 border-t border-border/30 mt-2">
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                  <a
                    href="https://github.com/VitoriaSoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
                  <a
                    href="https://br.linkedin.com/in/vitória-soder"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
