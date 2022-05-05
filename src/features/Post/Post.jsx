import React, { useState } from 'react';
import Card from '../../components/Card';
import ProfilePic from '../ProfilePic/ProfilePic';
import Comment from '../Comment/Comment';
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import { FaRegCommentAlt } from 'react-icons/fa';
import shortenNumber from '../../utils/shortenNumber';

const Post = (props) => {
    const { post, onToggleComments } = props;

    const renderComments = () => {
        if (post.errorComments) {
            return (
                <div>
                    <h3>Error loading comments</h3>
                </div>
            );
        }

        if (post.loadingComments) {
            return (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            );
        }

        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }
    }

    return ( 
        <article key={post.id}>
            <Card>
                <div className='post-wrapper'>
                    <div className='post-container'>
                        <h5 className='subreddit-title'>r/{post.subreddit}</h5>
                        <h3 className='post-title'>{post.title}</h3>
                        <ProfilePic name={post.author} />

                        <div className='post-image-container'>
                            <img src={post.url} alt='' className='post-image' />
                        </div>

                        <div className='post-text'>
                            <p>{post.selftext}</p>
                        </div>

                        <div className='post-details'>
                            <span className='author-details'>
                                <span className='author-username'>{post.author}</span>
                            </span>
                            <span className='post-comments-container'>
                                <button
                                    type='button'
                                    className={`icon-action-button ${
                                        post.showingComments && 'showing-comments'
                                    }`}
                                    onClick={() => onToggleComments(post.permalink)}
                                    aria-label='Show comments'
                                >
                                    <FaRegCommentAlt className='icon-action' />
                                </button>
                                {shortenNumber(post.num_comments, 1)}
                            </span>
                        </div>

                        {renderComments()}
                    </div>
                </div>
            </Card>
        </article>
     );
}

export default Post;