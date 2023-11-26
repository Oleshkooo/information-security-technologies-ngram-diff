import { memo } from 'react'
import { cn } from 'utils/cn'

interface TypographyMutedProps extends React.ComponentProps<'p'> {
    children?: React.ReactNode
}
export const TypographyMuted: React.FC<TypographyMutedProps> = memo(({ ...props }) => {
    return <p {...props} className={cn('text-sm text-muted-foreground', props.className)} />
})
TypographyMuted.displayName = 'TypographyMuted'
