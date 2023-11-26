import { SiteFooter } from 'components/site-footer'
import { SiteHeader } from 'components/site-header'
import { memo } from 'react'
import { Routes } from 'routes'

export const App: React.FC = memo(() => {
    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="container flex-1 my-5">
                <Routes />
            </div>
            <SiteFooter />
        </div>
    )
})
App.displayName = 'App'
