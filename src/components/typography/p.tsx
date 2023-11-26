import { memo } from 'react'

interface TypographyPProps extends React.ComponentProps<'p'> {
    children?: React.ReactNode
}
export const TypographyP: React.FC<TypographyPProps> = memo(({ ...props }) => {
    return <p {...props} className="leading-7 [&:not(:first-child)]:mt-6" />
})
TypographyP.displayName = 'TypographyP'
