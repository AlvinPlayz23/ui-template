"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineItem {
  id: string
  title: string
  description: string
  date: string
  status: "completed" | "in-progress" | "upcoming"
  badge?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={item.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                item.status === "completed"
                  ? "bg-green-500 border-green-500"
                  : item.status === "in-progress"
                    ? "bg-blue-500 border-blue-500"
                    : "bg-muted border-muted-foreground"
              }`}
            />
            {index < items.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
          </div>
          <Card className="flex-1 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{item.title}</h4>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <Badge variant="outline" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
