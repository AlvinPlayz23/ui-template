"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X, Filter } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string, filters: string[]) => void
  filters?: string[]
  className?: string
}

export function SearchBar({ placeholder = "Search...", onSearch, filters = [], className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    onSearch?.(query, activeFilters)
  }

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch}>Search</Button>
        {filters.length > 0 && (
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {activeFilters.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFilters.length}
              </Badge>
            )}
          </Button>
        )}
      </div>

      {showFilters && filters.length > 0 && (
        <div className="p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium">Filters</h4>
            {activeFilters.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Badge
                key={filter}
                variant={activeFilters.includes(filter) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleFilter(filter)}
              >
                {filter}
                {activeFilters.includes(filter) && <X className="h-3 w-3 ml-1" />}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary">
              {filter}
              <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => toggleFilter(filter)} />
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
