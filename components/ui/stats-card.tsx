import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "./animated-counter"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  gradient?: "blue" | "purple" | "green" | "orange" | "pink"
  className?: string
}

const gradientClasses = {
  blue: "bg-gradient-to-br from-blue-500 to-cyan-500",
  purple: "bg-gradient-to-br from-purple-500 to-pink-500",
  green: "bg-gradient-to-br from-green-500 to-emerald-500",
  orange: "bg-gradient-to-br from-orange-500 to-red-500",
  pink: "bg-gradient-to-br from-pink-500 to-rose-500",
}

export function StatsCard({
  title,
  value,
  prefix = "",
  suffix = "",
  change,
  changeLabel = "vs last month",
  icon,
  gradient = "blue",
  className,
}: StatsCardProps) {
  const isPositive = change && change > 0
  const isNegative = change && change < 0

  return (
    <Card className={cn("relative overflow-hidden", className)}>
      {/* Gradient accent */}
      <div className={cn("absolute inset-x-0 top-0 h-1", gradientClasses[gradient])} />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && (
          <div
            className={cn(
              "h-8 w-8 rounded-md flex items-center justify-center text-white text-sm",
              gradientClasses[gradient],
            )}
          >
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          <AnimatedCounter value={value} prefix={prefix} suffix={suffix} duration={1500} />
        </div>
        {change !== undefined && (
          <div className="flex items-center gap-2 mt-2">
            <Badge
              variant="secondary"
              className={cn(
                "flex items-center gap-1 text-xs",
                isPositive && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                isNegative && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
              )}
            >
              {isPositive && <TrendingUp className="h-3 w-3" />}
              {isNegative && <TrendingDown className="h-3 w-3" />}
              {change > 0 ? "+" : ""}
              {change}%
            </Badge>
            <span className="text-xs text-muted-foreground">{changeLabel}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
