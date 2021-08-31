import React from 'react';

const Form = ({sendComment}) => {
    
    const onSubmitHandle = (e) => {
        e.preventDefault();
        sendComment();
    }

    return (
        <form onSubmit={(e) => onSubmitHandle(e)}>
            <input  type="text"/>
            <button  type="submit">Comment</button>
        </form>
    )
}

export default Form;