import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Vida Nutri",
      description:
        "E-commerce completo para produtos naturais com carrinho de compras, sistema de pagamento e gestão de produtos. Foco em UX/UI moderna e responsiva.",
      tags: ["HTML", "CSS", "JavaScript", "E-commerce", "Responsive"],
      github: "https://github.com/VitoriaSoder/vida-nutri",
      demo: null,
      image: "/images/projects/vida-nutri.png",
      featured: true,
    },
    {
      title: "Dragons Contacts",
      description:
        "Sistema completo de gerenciamento de contatos com integração ViaCEP e Google Maps. Interface moderna com React e TypeScript, validação de dados e busca avançada.",
      tags: ["TypeScript", "React", "API Integration", "Google Maps"],
      github: "https://github.com/VitoriaSoder/dragons-contacts",
      demo: null,
      image: "/images/projects/dragons-contacts.png",
      featured: true,
    },
    {
      title: "Produtos Naturais",
      description:
        "Site institucional responsivo com design moderno, animações suaves e otimização SEO. Destaque para produtos e valores da marca com foco em conversão.",
      tags: ["HTML", "CSS", "JavaScript", "Design", "SEO"],
      github: "https://github.com/VitoriaSoder/produtos-naturais",
      demo: null,
      image: "/images/projects/produtos-naturais.png",
      featured: false,
    },
    {
      title: "Cofrinho Java",
      description:
        "Aplicação desktop em Java com arquitetura orientada a objetos. Sistema completo de gestão financeira com histórico de transações e persistência de dados.",
      tags: ["Java", "POO", "Desktop App", "OOP"],
      github: "https://github.com/VitoriaSoder/CofrinhoJava",
      demo: null,
      image: "/images/projects/cofrinho-java.png",
      featured: false,
    },
    {
      title: "Cookies HTML",
      description:
        "Implementação educacional de gerenciamento de cookies e localStorage. Demonstração de persistência de dados no navegador com interface interativa.",
      tags: ["JavaScript", "HTML", "LocalStorage", "Cookies"],
      github: "https://github.com/VitoriaSoder/cookies-html",
      demo: null,
      image: "/images/projects/cookies-html.png",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative scroll-snap-item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Projetos em <span className="gradient-text">Destaque</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e relevantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover-lift glass-card border-primary/20 relative ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

                {/* Project Image/Preview */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-muted/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <div className="text-4xl font-bold text-primary/30">{project.title.charAt(0)}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-all duration-300 flex-1">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full border border-primary/30">
                        Destaque
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary/40 text-secondary-foreground rounded-lg border border-border/40 hover:bg-primary/10 hover:border-primary/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="default"
                        asChild
                        className="flex-1 glass border-primary/30 hover:bg-primary/20 group/btn bg-transparent"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Demo
                          <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className={`glass border-primary/30 hover:bg-primary/10 group/btn bg-transparent ${
                        project.demo ? "flex-1" : "w-full"
                      }`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Código
                        <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hover-lift glass border-primary/30 px-8 bg-transparent"
            >
              <a href="https://github.com/VitoriaSoder" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                Ver todos os projetos
                <ExternalLink className="h-4 w-4 ml-2 opacity-50" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
