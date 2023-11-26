import { memo } from 'react'

interface TypographySmallProps extends React.ComponentProps<'small'> {
    children?: React.ReactNode
}
export const TypographySmall: React.FC<TypographySmallProps> = memo(({ ...props }) => {
    return <small {...props} className="text-sm font-medium leading-none" />
})
TypographySmall.displayName = 'TypographySmall'
