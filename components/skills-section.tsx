"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = {
    frontend: [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "APIs REST", level: 90 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Excel", level: 85 },
      { name: "Postman", level: 80 },
    ],
    learning: ["Next.js 14", "Three.js", "IA Generativa", "Design Systems", "Microserviços", "Docker"],
  }

  return (
    <section ref={sectionRef} id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 scroll-snap-item relative">
      <div className="absolute inset-0 bg-card/30 grid-pattern" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Habilidades <span className="gradient-text">Técnicas</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Stack tecnológico e ferramentas que domino
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <Card className="p-6 sm:p-8 glass-card border-primary/20 hover-lift">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-8 gradient-text">Frontend</h3>
              <div className="space-y-6">
                {skills.frontend.map((skill, index) => (
                  <div key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 0.1}s`,
                        }}
                      />
                      <div className="absolute inset-0 shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 glass-card border-primary/20 hover-lift">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-8 gradient-text">Backend</h3>
              <div className="space-y-6">
                {skills.backend.map((skill, index) => (
                  <div key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-out ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 0.1 + 0.2}s`,
                        }}
                      />
                      <div className="absolute inset-0 shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 sm:p-8 mb-8 glass-card border-primary/20 hover-lift">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 gradient-text">Ferramentas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.tools.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full bg-gradient-to-r from-primary via-primary/70 to-primary/50 transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.1 + 0.4}s`,
                      }}
                    />
                    <div className="absolute inset-0 shimmer" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-8 glass-card border-primary/20 hover-lift">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 gradient-text">Atualmente Aprendendo</h3>
            <div className="flex flex-wrap gap-3">
              {skills.learning.map((skill, index) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 bg-muted/50 text-sm font-medium rounded-full hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 border border-border/40 hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
