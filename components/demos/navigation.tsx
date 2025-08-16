"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeSwitcher } from "@/components/theme-switcher"

const components = [
  { name: "Buttons", href: "#buttons", description: "Interactive button components" },
  { name: "Forms", href: "#forms", description: "Input and form components" },
  { name: "Layout", href: "#layout", description: "Cards, containers, and layout" },
  { name: "Navigation", href: "#navigation", description: "Menus and navigation" },
  { name: "Feedback", href: "#feedback", description: "Alerts, toasts, and dialogs" },
  { name: "Data Display", href: "#data", description: "Tables, lists, and charts" },
  { name: "Custom", href: "#custom", description: "Advanced custom components" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {components.map((component) => (
                  <NavigationMenuLink
                    key={component.name}
                    href={component.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">{component.name}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{component.description}</p>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#examples"
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Examples
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/docs"
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <div className="flex flex-col gap-4 mt-8">
            <h3 className="font-semibold">Components</h3>
            {components.map((component) => (
              <a
                key={component.name}
                href={component.href}
                className="block space-y-1 rounded-md p-2 hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <div className="text-sm font-medium">{component.name}</div>
                <p className="text-sm text-muted-foreground">{component.description}</p>
              </a>
            ))}
            <div className="border-t pt-4 space-y-2">
              <a href="#examples" className="block p-2 text-sm hover:bg-accent rounded-md">
                Examples
              </a>
              <a href="/docs" className="block p-2 text-sm hover:bg-accent rounded-md">
                Documentation
              </a>
              <div className="pt-4">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
