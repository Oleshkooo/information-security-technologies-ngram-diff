import { App } from 'app'
import { ThemeProvider } from 'modules/theme/hoc/theme-provider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'styles/global.css'
import 'styles/tailwind.css'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
    <ThemeProvider storageKey="theme">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
)
