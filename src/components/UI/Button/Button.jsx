import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = ({children, type}) => {
    return (
        <button type={type} className={styles.Button}>{children}</button>
    )
}

Button.protTypes = {
    children: PropTypes.string,
    type: PropTypes.string
}

export default Button;