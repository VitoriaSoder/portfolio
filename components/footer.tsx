import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Desenvolvido com <Heart className="h-4 w-4 text-primary fill-primary" /> por Vitória Soder
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
