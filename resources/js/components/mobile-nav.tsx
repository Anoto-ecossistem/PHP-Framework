import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"

interface MobileNavProps {
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2" size="icon" aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col w-[80%] sm:w-[350px] p-0 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <img src="/template/placeholder-logo.svg" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold">PHP Framework</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="h-8 w-8"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <nav className="flex flex-col p-4">
          {items.map((item, index) =>
            item.external ? (
              <a
                key={index}
                href={item.href}
                className="flex items-center py-3 px-2 text-base font-medium hover:text-red-600 dark:hover:text-red-400 border-b border-gray-100 dark:border-gray-800 last:border-0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            ) : (
              <a
                key={index}
                href={item.href}
                className="flex items-center py-3 px-2 text-base font-medium hover:text-red-600 dark:hover:text-red-400 border-b border-gray-100 dark:border-gray-800 last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            ),
          )}
        </nav>
        <div className="mt-auto p-4 border-t flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
} 