import { memo } from 'react'

interface TypographyH4Props extends React.ComponentProps<'h4'> {
    children?: React.ReactNode
}
export const TypographyH4: React.FC<TypographyH4Props> = memo(({ ...props }) => {
    return <h4 {...props} className="scroll-m-20 text-xl font-semibold tracking-tight" />
})
TypographyH4.displayName = 'TypographyH4'
