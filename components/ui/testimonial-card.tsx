"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  avatar?: string
  rating: number
  testimonial: string
  verified?: boolean
  className?: string
}

export function TestimonialCard({
  name,
  role,
  company,
  avatar,
  rating,
  testimonial,
  verified = false,
  className = "",
}: TestimonialCardProps) {
  return (
    <Card className={`hover-lift ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold">{name}</h4>
              {verified && (
                <Badge variant="secondary" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <blockquote className="text-sm leading-relaxed">"{testimonial}"</blockquote>
      </CardContent>
    </Card>
  )
}
