import React from 'react';
import Form from '../Form/Form';
import styles from './Character.module.scss';

const Character = ({character, sendComment}) => {
    return (
        <li className={styles.Item}>
            <p>Name: {character.name}</p>
            <p>Birth year: {character.birth_year}</p>
            <p>Comments</p>
            <Form sendComment={sendComment}/>
        </li>
    )
}

export default Character;