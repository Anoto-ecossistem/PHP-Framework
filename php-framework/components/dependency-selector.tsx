"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Search, Plus } from "lucide-react"

interface DependencySelectorProps {
  framework: string
  onAddDependency: (dependency: string) => void
  onRemoveDependency: (dependency: string) => void
  selectedDependencies: string[]
}

// Laravel dependencies
const laravelDependencies = [
  {
    id: "database",
    name: "Database",
    dependencies: [
      { id: "laravel/sanctum", name: "Laravel Sanctum", description: "API token authentication" },
      { id: "laravel/passport", name: "Laravel Passport", description: "OAuth2 server implementation" },
      { id: "spatie/laravel-permission", name: "Spatie Permissions", description: "Role and permission management" },
    ],
  },
  {
    id: "ui",
    name: "UI",
    dependencies: [
      { id: "livewire/livewire", name: "Livewire", description: "Full-stack framework for Laravel" },
      { id: "inertiajs/inertia-laravel", name: "Inertia.js", description: "Modern monolith SPA framework" },
      { id: "laravel/breeze", name: "Laravel Breeze", description: "Minimal authentication scaffolding" },
      { id: "laravel/jetstream", name: "Laravel Jetstream", description: "Application scaffolding with teams" },
    ],
  },
  {
    id: "testing",
    name: "Testing",
    dependencies: [
      { id: "pestphp/pest", name: "Pest", description: "Elegant PHP testing framework" },
      { id: "mockery/mockery", name: "Mockery", description: "Mock object framework for testing" },
      { id: "nunomaduro/larastan", name: "Larastan", description: "PHPStan extension for Laravel" },
    ],
  },
]

// Symfony dependencies
const symfonyDependencies = [
  {
    id: "database",
    name: "Database",
    dependencies: [
      { id: "doctrine/doctrine-bundle", name: "Doctrine ORM", description: "Object-relational mapper" },
      { id: "doctrine/mongodb-odm-bundle", name: "MongoDB ODM", description: "MongoDB integration" },
      { id: "symfony/orm-pack", name: "ORM Pack", description: "Doctrine ORM pack" },
    ],
  },
  {
    id: "ui",
    name: "UI",
    dependencies: [
      { id: "symfony/webpack-encore-bundle", name: "Webpack Encore", description: "Asset management" },
      { id: "symfony/ux-turbo", name: "Turbo", description: "Hotwire's Turbo integration" },
      { id: "symfony/twig-bundle", name: "Twig Bundle", description: "Twig integration" },
    ],
  },
  {
    id: "api",
    name: "API",
    dependencies: [
      { id: "api-platform/core", name: "API Platform", description: "REST and GraphQL framework" },
      { id: "symfony/serializer", name: "Serializer", description: "Serialize/deserialize data" },
      { id: "lexik/jwt-authentication-bundle", name: "JWT Authentication", description: "JWT auth for Symfony" },
    ],
  },
]

// CodeIgniter dependencies
const codeigniterDependencies = [
  {
    id: "database",
    name: "Database",
    dependencies: [
      { id: "myth/auth", name: "Myth Auth", description: "Authentication & Authorization" },
      { id: "agungsugiarto/codeigniter4-cors", name: "CORS", description: "CORS middleware" },
      { id: "tatter/alerts", name: "Alerts", description: "Flash messages" },
    ],
  },
  {
    id: "ui",
    name: "UI",
    dependencies: [
      { id: "codeigniter4/shield", name: "Shield", description: "Authentication for CodeIgniter 4" },
      { id: "benedmunds/codeigniter-ion-auth", name: "Ion Auth", description: "Simple auth system" },
      { id: "lonnieezell/codeigniter-forensics", name: "Forensics", description: "Profiling tools" },
    ],
  },
]

// Combined dependencies map
const frameworkDependencies: Record<string, any[]> = {
  laravel: laravelDependencies,
  symfony: symfonyDependencies,
  codeigniter: codeigniterDependencies,
  slim: [
    {
      id: "core",
      name: "Core",
      dependencies: [
        { id: "slim/twig-view", name: "Twig View", description: "Twig integration for Slim" },
        { id: "slim/php-view", name: "PHP View", description: "PHP renderer for Slim" },
        { id: "slim/csrf", name: "CSRF Protection", description: "CSRF guard middleware" },
      ],
    },
  ],
  lumen: [
    {
      id: "core",
      name: "Core",
      dependencies: [
        { id: "flipbox/lumen-generator", name: "Lumen Generator", description: "Artisan commands for Lumen" },
        { id: "vlucas/phpdotenv", name: "PHP dotenv", description: "Loads environment variables" },
        { id: "tymon/jwt-auth", name: "JWT Auth", description: "JSON Web Token Authentication" },
      ],
    },
  ],
}

export function DependencySelector({
  framework,
  onAddDependency,
  onRemoveDependency,
  selectedDependencies,
}: DependencySelectorProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [categories, setCategories] = useState<any[]>([])
  const [defaultTab, setDefaultTab] = useState("")

  useEffect(() => {
    const deps = frameworkDependencies[framework] || []
    setCategories(deps)
    setDefaultTab(deps.length > 0 ? deps[0].id : "")
  }, [framework])

  // Filter dependencies based on search query
  const filteredDependencies =
    searchQuery.trim() === ""
      ? []
      : categories.flatMap((category) =>
          category.dependencies.filter(
            (dep) =>
              dep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              dep.description.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          type="search"
          placeholder="Search dependencies..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {selectedDependencies.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Selected Dependencies:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedDependencies.map((dep) => (
              <Badge key={dep} variant="secondary" className="flex items-center gap-1">
                {dep}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => onRemoveDependency(dep)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove</span>
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {searchQuery.trim() !== "" ? (
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Search Results:</h3>
          <ScrollArea className="h-[250px] md:h-[300px] rounded-md border p-4">
            {filteredDependencies.length > 0 ? (
              <div className="space-y-4">
                {filteredDependencies.map((dep) => (
                  <div key={dep.id} className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-medium">{dep.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{dep.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      disabled={selectedDependencies.includes(dep.id)}
                      onClick={() => onAddDependency(dep.id)}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add</span>
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">No dependencies found</p>
            )}
          </ScrollArea>
        </div>
      ) : categories.length > 0 ? (
        <Tabs defaultValue={defaultTab}>
          <TabsList className="grid" style={{ gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))` }}>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              <ScrollArea className="h-[250px] md:h-[300px] rounded-md border p-4">
                <div className="space-y-4">
                  {category.dependencies.map((dep) => (
                    <div key={dep.id} className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium">{dep.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{dep.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        disabled={selectedDependencies.includes(dep.id)}
                        onClick={() => onAddDependency(dep.id)}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="rounded-md border p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">No dependencies available for this framework</p>
        </div>
      )}
    </div>
  )
}
