import React from 'react';
import styles from './Button.module.scss'

const Button = ({children, type}) => {
    return (
        <button type={type} className={styles.Button}>{children}</button>
    )
}

export default Button;