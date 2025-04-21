"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { DependencySelector } from "@/components/dependency-selector"
import { Download, RefreshCw } from "lucide-react"

export function ProjectForm() {
  const [framework, setFramework] = useState("laravel")
  const [phpVersion, setPhpVersion] = useState("8.2")
  const [projectName, setProjectName] = useState("my-app")
  const [description, setDescription] = useState("My PHP application")
  const [authorName, setAuthorName] = useState("")
  const [authorEmail, setAuthorEmail] = useState("")
  const [dependencies, setDependencies] = useState<string[]>([])

  const handleAddDependency = (dependency: string) => {
    if (!dependencies.includes(dependency)) {
      setDependencies([...dependencies, dependency])
    }
  }

  const handleRemoveDependency = (dependency: string) => {
    setDependencies(dependencies.filter((dep) => dep !== dependency))
  }

  const handleGenerateProject = () => {
    // In a real application, this would send the configuration to a backend
    // For now, we'll just show an alert
    alert("Project generation would happen here in a real application!")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project</CardTitle>
        <CardDescription>Configure your PHP framework project options</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="project">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="project">Project</TabsTrigger>
            <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="project" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="framework">Framework</Label>
                <Select value={framework} onValueChange={setFramework}>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laravel">Laravel</SelectItem>
                    <SelectItem value="symfony">Symfony</SelectItem>
                    <SelectItem value="codeigniter">CodeIgniter</SelectItem>
                    <SelectItem value="slim">Slim</SelectItem>
                    <SelectItem value="lumen">Lumen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="php-version">PHP Version</Label>
                <Select value={phpVersion} onValueChange={setPhpVersion}>
                  <SelectTrigger id="php-version">
                    <SelectValue placeholder="Select PHP version" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8.3">PHP 8.3</SelectItem>
                    <SelectItem value="8.2">PHP 8.2</SelectItem>
                    <SelectItem value="8.1">PHP 8.1</SelectItem>
                    <SelectItem value="8.0">PHP 8.0</SelectItem>
                    <SelectItem value="7.4">PHP 7.4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input id="project-name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author-name">Author Name</Label>
                <Input id="author-name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author-email">Author Email</Label>
                <Input id="author-email" value={authorEmail} onChange={(e) => setAuthorEmail(e.target.value)} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="dependencies" className="pt-4">
            <DependencySelector
              framework={framework}
              onAddDependency={handleAddDependency}
              onRemoveDependency={handleRemoveDependency}
              selectedDependencies={dependencies}
            />
          </TabsContent>
          <TabsContent value="advanced" className="space-y-4 pt-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="gitignore" />
                <Label htmlFor="gitignore">Generate .gitignore file</Label>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="readme" />
                <Label htmlFor="readme">Generate README.md file</Label>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="docker" />
                <Label htmlFor="docker">Generate Dockerfile</Label>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="ci" />
                <Label htmlFor="ci">Generate CI configuration</Label>
              </div>
            </div>
            {framework === "laravel" && (
              <>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="breeze" />
                    <Label htmlFor="breeze">Include Laravel Breeze (Authentication)</Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="jetstream" />
                    <Label htmlFor="jetstream">Include Laravel Jetstream</Label>
                  </div>
                </div>
              </>
            )}
            {framework === "symfony" && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="webapp" />
                  <Label htmlFor="webapp">Include Symfony WebApp Bundle</Label>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" onClick={() => window.location.reload()} className="w-full sm:w-auto">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        <Button
          onClick={handleGenerateProject}
          className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white w-full sm:w-auto"
        >
          <Download className="mr-2 h-4 w-4" />
          Generate
        </Button>
      </CardFooter>
    </Card>
  )
}
