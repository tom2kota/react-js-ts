import React from 'react'
import PropTypes from 'prop-types'

export function StandardJsComponent({children, title = 'Dr.'}) {
    return (
        <div>
            {title}  => {children}
        </div>
    )
}

StandardJsComponent.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}