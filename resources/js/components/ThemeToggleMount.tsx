import { createRoot } from 'react-dom/client'
import { ThemeToggle } from './theme-toggle'

export function mountThemeToggle() {
    const themeToggleContainer = document.getElementById('theme-toggle')
    if (themeToggleContainer) {
        const root = createRoot(themeToggleContainer)
        root.render(<ThemeToggle />)
    }
} 