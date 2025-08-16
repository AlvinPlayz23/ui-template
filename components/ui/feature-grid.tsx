import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  badge?: string
  gradient?: "blue" | "purple" | "green" | "orange" | "pink"
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

const gradientClasses = {
  blue: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800",
  purple: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800",
  green: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200 dark:border-green-800",
  orange: "bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-200 dark:border-orange-800",
  pink: "bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-200 dark:border-pink-800",
}

const iconGradients = {
  blue: "bg-gradient-to-br from-blue-500 to-cyan-500",
  purple: "bg-gradient-to-br from-purple-500 to-pink-500",
  green: "bg-gradient-to-br from-green-500 to-emerald-500",
  orange: "bg-gradient-to-br from-orange-500 to-red-500",
  pink: "bg-gradient-to-br from-pink-500 to-rose-500",
}

export function FeatureGrid({ features, columns = 3, className }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
      {features.map((feature, index) => (
        <Card
          key={index}
          className={cn(
            "relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
            feature.gradient && gradientClasses[feature.gradient],
          )}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <div
                className={cn(
                  "h-12 w-12 rounded-lg flex items-center justify-center text-white",
                  feature.gradient ? iconGradients[feature.gradient] : "bg-primary",
                )}
              >
                {feature.icon}
              </div>
              {feature.badge && <Badge variant="secondary">{feature.badge}</Badge>}
            </div>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
