import { createRoot } from 'react-dom/client'
import { MobileNav } from './mobile-nav'

const navigationItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Documentation', href: 'https://laravel.com/docs', external: true },
]

export function mountMobileNav() {
    const mobileNavContainer = document.getElementById('mobile-nav')
    if (mobileNavContainer) {
        const root = createRoot(mobileNavContainer)
        root.render(<MobileNav items={navigationItems} />)
    }
} 