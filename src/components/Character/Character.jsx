import React, { useState } from 'react';
import Form from '../Form/Form';
import styles from './Character.module.scss';

const Character = ({character}) => {

    const [comments, setComments] = useState([]);

    const handleSendComment = (value) => {
        setComments([...comments, value])
    }

    return (
        <li className={styles.Item}>
            <p>Name: {character.name}</p>
            <p>Birth year: {character.birth_year}</p>
            <ul>
                {comments.map((comment, index) => {
                    return <li key={index}>{index + 1} {comment}</li>
                })}
            </ul>
            <Form sendComment={handleSendComment}/>
        </li>
    )
}

export default Character;