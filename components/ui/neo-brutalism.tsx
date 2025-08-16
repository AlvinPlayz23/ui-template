"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function NeoBrutalism() {
  const [clickedButton, setClickedButton] = useState<string | null>(null)

  const handleButtonClick = (buttonName: string) => {
    setClickedButton(buttonName)
    setTimeout(() => setClickedButton(null), 1000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left side - Description */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Neo-Brutalism</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bold colors, high contrast, thick borders, raw functionality, and intentionally "undesigned" aesthetics
              with rough edges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                High contrast colors
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Thick borders
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Harsh shadows
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Raw typography
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Unconventional layouts
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Used By</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">
                Figma
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Gumroad
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Stripe Press
              </Badge>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-transparent"
            onClick={() => handleButtonClick("instructions")}
          >
            Add Style Instructions
          </Button>
        </div>

        {/* Right side - Neo-Brutalism Demo */}
        <div className="relative">
          <div
            className="bg-yellow-400 border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{ fontFamily: "monospace" }}
          >
            <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-wide">Raw. Unfiltered. Brutal.</h3>
            <p className="text-black font-bold mb-6 text-lg">Neo-Brutalism embraces imperfection and raw expression.</p>

            <Button
              className="bg-red-500 hover:bg-red-600 text-white font-black text-lg px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 mb-6"
              onClick={() => handleButtonClick("click-me")}
            >
              {clickedButton === "click-me" ? "CLICKED!" : "CLICK ME"}
            </Button>

            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white font-black border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                onClick={() => handleButtonClick("bold")}
              >
                {clickedButton === "bold" ? "BOLD!" : "Bold"}
              </Button>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white font-black border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                onClick={() => handleButtonClick("raw")}
              >
                {clickedButton === "raw" ? "RAW!" : "Raw"}
              </Button>
              <Button
                className="bg-purple-500 hover:bg-purple-600 text-white font-black border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                onClick={() => handleButtonClick("expressive")}
              >
                {clickedButton === "expressive" ? "EXPRESSIVE!" : "Expressive"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
