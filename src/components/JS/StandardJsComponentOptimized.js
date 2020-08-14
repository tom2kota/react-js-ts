import React from 'react'
import PropTypes from 'prop-types'

export const StandardJsComponentOptimized = ({children, title = 'Dr.'}) => (
    <div>
        {title} => {children}
    </div>
)

StandardJsComponentOptimized.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}