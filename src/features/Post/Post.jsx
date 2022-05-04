import React, { useState } from 'react';
import Card from '../../components/Card';
import ProfilePic from '../ProfilePic/ProfilePic';
import './Post.css';

const Post = (props) => {
    const { post, onToggleComments } = props;

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
                        </div>
                    </div>
                </div>
            </Card>
        </article>
     );
}

export default Post;