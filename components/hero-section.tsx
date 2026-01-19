"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Code2 } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden grid-pattern"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] glow-pulse"
          style={{
            top: "20%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] glow-pulse"
          style={{
            bottom: "20%",
            right: "15%",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/15 blur-[80px]"
          style={{
            top: `${20 + mousePosition.y * 0.02}%`,
            left: `${30 + mousePosition.x * 0.02}%`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      <div
        className={`container mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Olá, eu sou
                <br />
                <span className="text-primary">Vitória Soder</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                Desenvolvedora Full Stack
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Transformando ideias em experiências digitais excepcionais através de código limpo e design intuitivo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto h-12 px-8 text-base font-medium hover-lift shadow-lg shadow-primary/20 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Vamos conversar
                  <Code2 className="h-4 w-4" />
                </span>
                <div className="absolute inset-0 shimmer" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto h-12 px-8 text-base font-medium hover-lift glass border-primary/30 bg-transparent"
              >
                <a href="https://github.com/VitoriaSoder" target="_blank" rel="noopener noreferrer">
                  Ver GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/images/Vector (1).svg"
                alt="Vitória Soder"
                width={531}
                height={557}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Scroll</span>
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
