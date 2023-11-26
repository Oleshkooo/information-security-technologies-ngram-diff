import { TypographyH3 } from 'components/typography/h3'
import { ThemeToggle } from 'modules/theme/components/theme-toggle'
import { memo } from 'react'

interface SiteHeaderProps {}
export const SiteHeader: React.FC<SiteHeaderProps> = memo(() => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <nav className="flex items-center justify-between w-full">
                    <TypographyH3>N-grams</TypographyH3>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
})
SiteHeader.displayName = 'SiteHeader'
