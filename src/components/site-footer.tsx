import { memo } from 'react'
import { Link } from 'react-router-dom'

interface SiteFooterProps {}
export const SiteFooter: React.FC<SiteFooterProps> = memo(() => {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center border-t justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{' '}
                    <Link
                        to="https://github.com/Oleshkooo"
                        className="underline underline-offset-4 hover:text-primary transition-all duration-300"
                    >
                        Oleh Khoma
                    </Link>
                    . The source code is available on{' '}
                    <Link
                        to="https://github.com/Oleshkooo"
                        className="underline underline-offset-4 hover:text-primary transition-all duration-300"
                    >
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </footer>
    )
})
SiteFooter.displayName = 'SiteFooter'
