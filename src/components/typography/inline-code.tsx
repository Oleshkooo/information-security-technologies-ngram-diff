import { memo } from 'react'

interface TypographyInlineCodeProps extends React.ComponentProps<'code'> {
    children?: React.ReactNode
}
export const TypographyInlineCode: React.FC<TypographyInlineCodeProps> = memo(({ ...props }) => {
    return <code {...props} className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" />
})
TypographyInlineCode.displayName = 'TypographyInlineCode'
