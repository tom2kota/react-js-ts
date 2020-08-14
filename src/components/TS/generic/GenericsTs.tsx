// Компонент принимает массив элементов любого типа, проходит по нему и
// вызывает функцию children как рендер функцию с элементом массива.
// Когда наш родительский компонент предоставляет колбэк рендера как наследника,
// элемент будет типизирован правильно!

import * as React from 'react'

interface GenericsTsProps<T> {
    children: (item: T) => React.ReactNode
    items: Array<T>
}

export function GenericsTs<T>({items, children,}: GenericsTsProps<T>) {
    return (
        <div>
            {items.map(item => {
                return children(item)
            })}
        </div>
    )
}