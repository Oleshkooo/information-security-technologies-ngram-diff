import { memo } from 'react'

interface TypographyLeadProps extends React.ComponentProps<'p'> {
    children?: React.ReactNode
}
export const TypographyLead: React.FC<TypographyLeadProps> = memo(({ ...props }) => {
    return <p {...props} className="text-xl text-muted-foreground" />
})
TypographyLead.displayName = 'TypographyLead'
