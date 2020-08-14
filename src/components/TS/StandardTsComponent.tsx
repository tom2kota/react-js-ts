import * as React from 'react'

export interface StandardTsComponentProps {
    title?: string
    children: React.ReactNode
}

export function StandardTsComponent({
                                        children,
                                        title = 'Dr.',
                                    }: StandardTsComponentProps) {
    return (
        <div>
            {title}: {children}
        </div>
    )
}