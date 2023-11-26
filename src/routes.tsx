import { MainPage } from 'pages/main-page'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'

interface RoutesProps {}
export const Routes: React.FC<RoutesProps> = memo(() => {
    return useRoutes([
        {
            index: true,
            element: <MainPage />,
        },
    ])
})
Routes.displayName = 'Routes'
