"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  variant?: "dots" | "grid" | "gradient" | "particles"
  className?: string
  children?: React.ReactNode
}

export function AnimatedBackground({ variant = "dots", className, children }: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const backgrounds = {
    dots: (
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            animation: "float 6s ease-in-out infinite",
          }}
        />
      </div>
    ),
    grid: (
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            animation: "fade-in-up 1s ease-out",
          }}
        />
      </div>
    ),
    gradient: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 gradient-animated" />
      </div>
    ),
    particles: (
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-current rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    ),
  }

  return (
    <div className={cn("relative", className)}>
      {backgrounds[variant]}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  )
}
