import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './Form.module.scss';

const Form = ({sendComment}) => {

    const [value, setValue] = useState('');
    
    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (value) {
            sendComment(value);
            setValue('');
        } 
    }

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={(e) => onSubmitHandle(e)}>
            <input  
                onChange={(e) => handleChangeValue(e)}
                value={value}
                type="text" 
                placeholder="leave comment"
            />
            <div className={styles.Button}>
                <Button type="submit">Comment</Button>
            </div>
        </form>
    )
}

export default Form;