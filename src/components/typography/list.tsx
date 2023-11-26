import { memo } from 'react'

interface TypographyListProps extends React.ComponentProps<'ul'> {
    children?: React.ReactNode
}
export const TypographyList: React.FC<TypographyListProps> = memo(({ ...props }) => {
    return <ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2" />
})
TypographyList.displayName = 'TypographyList'

interface TypographyListItemProps extends React.ComponentProps<'li'> {
    children?: React.ReactNode
}
export const TypographyListItem: React.FC<TypographyListItemProps> = memo(({ ...props }) => {
    return <li {...props} />
})
TypographyListItem.displayName = 'TypographyListItem'
