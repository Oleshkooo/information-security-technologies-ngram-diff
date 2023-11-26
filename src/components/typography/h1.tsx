import { memo } from 'react'

interface TypographyH1Props extends React.ComponentProps<'h1'> {
    children?: React.ReactNode
}
export const TypographyH1: React.FC<TypographyH1Props> = memo(({ ...props }) => {
    return <h1 {...props} className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" />
})
TypographyH1.displayName = 'TypographyH1'
