import * as React from 'react'

// заменили propTypes на интерфейс typescript
// экспортировали интерфейс на случай, если другому компоненту понадобится на него ссылка
export interface StandardTsComponentProps {
    title?: string
    children: React.ReactNode
}

export const StandardTsComponentOptimized = ({children, title = 'Dr.',}: StandardTsComponentProps) => (
    <div>
        {title}: {children}
    </div>
)
