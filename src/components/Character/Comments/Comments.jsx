import React from 'react';
import Comment from './Comment/Comment';
import PropTypes from 'prop-types';
import styles from './Comments.module.scss';

const Comments = ({comments, character}) => {
    return (
        <div className={styles.Wrapper}>
            <h2 className={styles.Title}>Comments:</h2>
            <ul className={styles.CommentsList}>
                {comments.map((comment, index) => {
                    if (character.created === comment.created) {
                        return <Comment key={index} comment={comment}/>
                    }
                    return null;
                })}
            </ul>
        </div>
    )
}

Comments.protTypes = {
    comments: PropTypes.arrayOf,
    character: PropTypes.objectOf
}

export default Comments;