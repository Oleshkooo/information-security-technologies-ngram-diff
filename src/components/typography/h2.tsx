import { memo } from 'react'

interface TypographyH2Props extends React.ComponentProps<'h2'> {
    children?: React.ReactNode
}
export const TypographyH2: React.FC<TypographyH2Props> = memo(({ ...props }) => {
    return <h2 {...props} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" />
})
TypographyH2.displayName = 'TypographyH2'
