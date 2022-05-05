import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Comment.css';
import ProfilePic from '../ProfilePic/ProfilePic';

const Comment = (props) => {
    const { comment } = props;

    return (
        <div className='comment'>
            <div className='comment-meta'>
                <ProfilePic name={comment.author} />
                <p className='comment-author'>{comment.author}</p>
            </div>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;