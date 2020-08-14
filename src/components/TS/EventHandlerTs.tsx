import React from "react";

export interface EventHandlerTsProps {
    onClick: (e: React.MouseEvent) => void
}

export function EventHandlerTs({ onClick }: EventHandlerTsProps) {
    // handle focus events in a separate function
    function onFocus(e: React.FocusEvent) {
        console.log('Focused!', e.currentTarget)
    }

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <button
            onClick={onClick}
            onFocus={onFocus}
            onKeyDown={e => {
                // When using an inline function, the appropriate argument signature
                // is provided for us
            }}
        >
            Click me!
        </button>
    )
}