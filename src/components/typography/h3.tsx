import { memo } from 'react'

interface TypographyH3Props extends React.ComponentProps<'h3'> {
    children?: React.ReactNode
}
export const TypographyH3: React.FC<TypographyH3Props> = memo(({ ...props }) => {
    return <h3 {...props} className="scroll-m-20 text-2xl font-semibold tracking-tight" />
})
TypographyH3.displayName = 'TypographyH3'
