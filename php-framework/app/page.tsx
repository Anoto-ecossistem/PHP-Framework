import { ProjectForm } from "@/components/project-form"
import { ProjectInfo } from "@/components/project-info"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"

export default function Home() {
  const navItems = [
    { title: "Documentation", href: "#" },
    { title: "Guides", href: "#" },
    { title: "GitHub", href: "https://github.com", external: true },
    { title: "Login", href: "/login" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="border-b bg-white dark:bg-gray-950 dark:text-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-red-500 w-8 h-8 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2v6.5" />
                  <path d="M19 5.5v4" />
                  <path d="M5 5.5v4" />
                  <path d="M12 17.5V22" />
                  <path d="M5 14.5v-3" />
                  <path d="M19 14.5v-3" />
                  <path d="M12 8.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold">PHP Framework Generator</h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-red-600 dark:hover:text-red-400">
              Documentation
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-red-600 dark:hover:text-red-400">
              Guides
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-red-600 dark:hover:text-red-400"
            >
              GitHub
            </a>
            <ThemeToggle />
            <Link href="/login" className="text-sm font-medium hover:text-red-600 dark:hover:text-red-400">
              Login
            </Link>
          </nav>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <MobileNav items={navItems} />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 dark:text-white">PHP Framework Project Generator</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Bootstrap your PHP application by selecting framework and configuration options
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <ProjectForm />
            </div>
            <div>
              <ProjectInfo />
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white dark:bg-gray-950 py-4 md:py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <p>PHP Framework Generator is powered by Next.js</p>
            <p className="mt-1">© {new Date().getFullYear()} PHP Framework Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
