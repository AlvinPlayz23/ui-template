"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check } from "lucide-react"

interface InteractiveDemoProps {
  title: string
  description: string
  component: React.ReactNode
  code: string
  className?: string
}

export function InteractiveDemo({ title, description, component, code, className }: InteractiveDemoProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <Badge variant="secondary">Interactive</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-4">
            <div className="min-h-[200px] flex items-center justify-center border rounded-lg bg-muted/20 p-8">
              {component}
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="relative">
              <Button size="sm" variant="ghost" className="absolute right-2 top-2 z-10" onClick={copyToClipboard}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{code}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
