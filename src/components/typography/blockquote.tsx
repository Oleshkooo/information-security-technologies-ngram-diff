import { memo } from 'react'

interface TypographyBlockquoteProps extends React.ComponentProps<'blockquote'> {
    children?: React.ReactNode
}
export const TypographyBlockquote: React.FC<TypographyBlockquoteProps> = memo(({ ...props }) => {
    return <blockquote {...props} className="mt-6 border-l-2 pl-6 italic" />
})
TypographyBlockquote.displayName = 'TypographyBlockquote'
