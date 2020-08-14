import * as React from 'react'

export interface StandardTsComponentProps {
    title?: string
    children: React.ReactNode
}

export const StandardTsComponentOptimized = ({children, title = 'Dr.',}: StandardTsComponentProps) => (
    <div>
        {title}: {children}
    </div>
)
