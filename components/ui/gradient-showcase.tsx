import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { gradientPresets, gradientTextPresets, animationPresets } from "@/lib/gradients"
import { cn } from "@/lib/utils"

export function GradientShowcase() {
  return (
    <div className="space-y-8">
      {/* Background Gradients */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Background Gradients</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(gradientPresets).map(([name, className]) => (
            <Card key={name} className="overflow-hidden">
              <div className={cn("h-24 w-full", className)} />
              <CardContent className="p-3">
                <p className="text-sm font-medium capitalize">{name}</p>
                <code className="text-xs text-muted-foreground">{className}</code>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Text Gradients */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Text Gradients</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(gradientTextPresets).map(([name, className]) => (
            <Card key={name}>
              <CardContent className="p-6 text-center">
                <h4 className={cn("text-2xl font-bold mb-2", className)}>Gradient Text</h4>
                <p className="text-sm text-muted-foreground capitalize">{name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Animation Examples */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Animations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(animationPresets).map(([name, className]) => (
            <Card key={name} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg capitalize">{name.replace(/([A-Z])/g, " $1")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div
                    className={cn("h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500", className)}
                  />
                </div>
                <code className="text-xs text-muted-foreground block mt-2">{className}</code>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Interactive Examples */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Interactive Effects</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="hover-lift cursor-pointer">
            <CardHeader>
              <CardTitle>Hover Lift</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Hover to see the lift effect</p>
            </CardContent>
          </Card>

          <Card className="hover-glow cursor-pointer">
            <CardHeader>
              <CardTitle>Hover Glow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Hover to see the glow effect</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle>Glass Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Glassmorphism design</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Animated Gradient Buttons */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Animated Gradient Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 gradient-animated text-white border-0">
            Animated Gradient
          </Button>
          <Button className="bg-gradient-to-r from-green-500 to-blue-500 gradient-animated text-white border-0">
            Ocean Wave
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 gradient-animated text-white border-0">
            Sunset Glow
          </Button>
        </div>
      </div>

      {/* Loading Shimmer */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Loading Effects</h3>
        <div className="space-y-4">
          <div className="h-4 bg-muted rounded animate-shimmer" />
          <div className="h-4 bg-muted rounded animate-shimmer w-3/4" />
          <div className="h-4 bg-muted rounded animate-shimmer w-1/2" />
        </div>
      </div>
    </div>
  )
}
