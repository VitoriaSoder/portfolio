import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-center mb-12 sm:mb-16 leading-relaxed">
            Estou sempre aberta a novos projetos e oportunidades
          </p>

          <Card className="p-8 sm:p-12 text-center">
            <div className="mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Desenvolvedora fullstack com expertise em React, TypeScript e Node.js. Disponível para projetos que
                desafiem minhas habilidades e contribuam para meu crescimento profissional.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato para discutir como podemos trabalhar juntos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Button size="lg" variant="outline" asChild className="h-auto py-4 bg-transparent">
                <a
                  href="https://github.com/VitoriaSoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Github className="h-6 w-6" />
                  <span className="text-sm">GitHub</span>
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild className="h-auto py-4 bg-transparent">
                <a
                  href="https://br.linkedin.com/in/vit%C3%B3ria-soder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild className="h-auto py-4 bg-transparent">
                <a
                  href="mailto:vitoriasoder.dev@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Vitória!"
                  className="flex flex-col items-center gap-2"
                >
                  <Mail className="h-6 w-6" />
                  <span className="text-sm">Email</span>
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Disponível para projetos freelance e oportunidades full-time
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
