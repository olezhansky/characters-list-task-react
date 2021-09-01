import React from 'react';
import styles from './Comment.module.scss';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
    return <li className={styles.Item}>{comment.comment}</li>
}

Comment.protTypes = {
    comment: PropTypes.objectOf
}

export default Comment;