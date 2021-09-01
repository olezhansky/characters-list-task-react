import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAction } from '../../store/actions';
import Form from '../Form/Form';
import styles from './Character.module.scss';
import PropTypes from 'prop-types';
import Comments from './Comments/Comments';

const Character = ({character}) => {

    const dispatch = useDispatch()

    const comments = useSelector((state) => state.comments)

    const handleSendComment = (value) => {
        dispatch(addCommentAction(character, value))
    }
    
    return (
        <li className={styles.Item}>
            <p>Name: {character.name}</p>
            <p>Birth year: {character.birth_year}</p>
            <Comments character={character} comments={comments}/>
            <Form sendComment={handleSendComment}/>
        </li>
    )
}

Character.protTypes = {
    character: PropTypes.objectOf
}

export default Character;