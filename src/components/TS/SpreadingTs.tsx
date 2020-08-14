import * as React from 'react'

// компонент принимает любые стандартные свойства div (aria-hidden, style или className)
// в дополнение к заголовку и наследникам (title, children)
export interface SpreadingTs extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    children: React.ReactNode
}

export function SpreadingTs({children, title = 'Div.', ...other}: SpreadingTs) {
    return (
        <div {...other}>
            {title}: {children}
        </div>
    )
}