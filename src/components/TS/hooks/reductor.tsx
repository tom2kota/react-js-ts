import * as React from 'react'

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

// our search response type
interface Response {
    id: number
    title: string
}

// reducer actions. These are what you'll "dispatch"
export type ActionType =
    | Action<'QUERY', { value: string }>
    | Action<'SEARCH', { value: Array<Response> }>

// the form that our reducer state takes
interface StateType {
    searchResponse: Array<Response>
    query: string
}

// our default state
const initialState: StateType = {
    searchResponse: [],
    query: '',
}

// the actual reducer
function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'QUERY':
            return {
                ...state,
                query: action.value,
            }

        case 'SEARCH':
            return {
                ...state,
                searchResponse: action.value,
            }
    }
}

interface ReducerTsProps {
    query: string
}

export function ReducerTs({query}: ReducerTsProps) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    React.useEffect(
        () => {
            if (query) {
                // emulate async query
                setTimeout(() => {
                    dispatch({
                        type: 'SEARCH',
                        value: [{id: 1, title: 'Hello world'}],
                    })
                }, 1000)
            }
        },
        [query]
    )

    return state.searchResponse.map(response => (
        <div key={response.id}>{response.title}</div>
    ))
}