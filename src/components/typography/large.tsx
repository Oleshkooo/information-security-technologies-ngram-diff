import { memo } from 'react'

interface TypographyLargeProps extends React.ComponentProps<'div'> {
    children?: React.ReactNode
}
export const TypographyLarge: React.FC<TypographyLargeProps> = memo(({ ...props }) => {
    return <div {...props} className="text-lg font-semibold" />
})
TypographyLarge.displayName = 'TypographyLarge'
