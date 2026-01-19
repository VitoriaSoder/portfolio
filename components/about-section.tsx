import { Card } from "@/components/ui/card";
import { Code2, Palette, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 leading-relaxed">
            Sou desenvolvedora fullstack e estudante de Engenharia de Software
            com 3 anos de experiência
          </p>

          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-6">
              Com{" "}
              <strong className="text-primary font-semibold">
                3 anos de experiência
              </strong>{" "}
              transformando ideias em realidade digital, sou desenvolvedora
              fullstack pleno e estudante de Engenharia de Software, apaixonada
              por tecnologia, inovação e design de experiência do usuário (UX).
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-6">
              Tenho uma base sólida em programação e experiência comprovada com
              tecnologias modernas. Especializo-me em arquitetura de software
              escalável, desenvolvimento ágil e entrega de soluções de alta
              qualidade. Adoro atuar tanto no front-end quanto no back-end,
              entregando aplicações robustas, eficientes e visualmente
              atraentes.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
              Também domino ferramentas como{" "}
              <strong className="text-primary font-semibold">Figma</strong> e{" "}
              <strong className="text-primary font-semibold">Excel</strong>, que
              me permitem criar interfaces intuitivas e explorar dados para
              gerar insights estratégicos. Sou movida por desafios técnicos
              complexos e estou sempre buscando evoluir, aprender novas
              tecnologias e colaborar em projetos inovadores que impactam
              positivamente os usuários.
            </p>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                3+
              </div>
              <div className="text-sm text-muted-foreground">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                20+
              </div>
              <div className="text-sm text-muted-foreground">
                Projetos Desenvolvidos
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                Tecnologias Dominadas
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Comprometimento
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-lift border-border/50 bg-card/50 backdrop-blur">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Soluções robustas com código limpo e eficiente
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift border-border/50 bg-card/50 backdrop-blur">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interfaces intuitivas focadas na experiência do usuário
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift border-border/50 bg-card/50 backdrop-blur">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Constante exploração de novas tecnologias e metodologias
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
