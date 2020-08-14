import React from "react";

const styles = {
    primary: {
        color: 'blue',
    },
    danger: {
        color: 'red',
    },
}

// creates a reusable type from the styles object
type StylesType = typeof styles

// ButtonType = any key in styles
export type ButtonType = keyof StylesType

interface ButtonStyleProps {
    type: ButtonType
}

export function ButtonStyle({type = 'primary'}: ButtonStyleProps) {
    return <button style={styles[type]}>My styled button</button>
}