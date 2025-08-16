import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientCardProps {
  title: string
  description: string
  price?: string
  features?: string[]
  badge?: string
  gradient?: "blue" | "purple" | "green" | "orange" | "pink"
  className?: string
  featured?: boolean
}

const gradientClasses = {
  blue: "bg-gradient-to-br from-blue-500 to-cyan-500",
  purple: "bg-gradient-to-br from-purple-500 to-pink-500",
  green: "bg-gradient-to-br from-green-500 to-emerald-500",
  orange: "bg-gradient-to-br from-orange-500 to-red-500",
  pink: "bg-gradient-to-br from-pink-500 to-rose-500",
}

export function GradientCard({
  title,
  description,
  price,
  features = [],
  badge,
  gradient = "blue",
  className,
  featured = false,
}: GradientCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        featured && "ring-2 ring-primary ring-offset-2",
        className,
      )}
    >
      {/* Gradient Background */}
      <div className={cn("absolute inset-0 opacity-5 dark:opacity-10", gradientClasses[gradient])} />

      {/* Gradient Border */}
      <div className={cn("absolute inset-x-0 top-0 h-1", gradientClasses[gradient])} />

      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          {badge && (
            <Badge variant="secondary" className="bg-white/50 dark:bg-black/50">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
        {price && (
          <div className="text-3xl font-bold">
            {price}
            <span className="text-sm font-normal text-muted-foreground">/month</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="relative space-y-4">
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <div className={cn("h-1.5 w-1.5 rounded-full", gradientClasses[gradient])} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Button className={cn("w-full", gradientClasses[gradient], "text-white border-0 hover:opacity-90")}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
