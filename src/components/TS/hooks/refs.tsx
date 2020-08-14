/*
    Наше состояние автоматически типизируется, но мы вручную типизировали ref,
    чтобы показать, что он будет иметь значение null или содержать элемент div.
    Когда мы обращаемся к ref в функции useEffect, нам нужно убедиться, что он не равен null

        const ref = React.useRef<HTMLDivElement | null>(null)
 */

import * as React from 'react'

interface HooksTsProps {
}

export function HooksTs(props: HooksTsProps) {
    const [count, setCount] = React.useState(0)
    const ref = React.useRef<HTMLDivElement | null>(null)

    // start our timer
    React.useEffect(
        () => {
            const timer = setInterval(() => {
                setCount(count + 1)
            }, 1000)

            return () => clearTimeout(timer)
        },
        [count]
    )

    // measure our element
    React.useEffect(
        () => {
            if (ref.current) {
                console.log(ref.current.getBoundingClientRect())
            }
        },
        [ref]
    )

    return <div ref={ref}>Count: {count}</div>
}