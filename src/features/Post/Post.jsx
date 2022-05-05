import React, { useState } from 'react';
import Card from '../../components/Card';
import ProfilePic from '../ProfilePic/ProfilePic';
import Comment from '../Comment/Comment';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './Post.css';
import { 
    FaRegCommentAlt,
    FaArrowUp,
    FaArrowDown,
} from 'react-icons/fa';
import {
    FiArrowUp,
    FiArrowDown,
} from 'react-icons/fi';
import shortenNumber from '../../utils/shortenNumber';

const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const { post, onToggleComments } = props;

    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    const renderUpVote = () => {
        if (voteValue === 1) {
            return <FaArrowUp className='icon-action' />;
        }
        return <FiArrowUp className='icon-action' />;
    };

    const renderDownVote = () => {
        if (voteValue === -1) {
            return <FaArrowDown className='icon-action' />;
        }
        return <FiArrowDown className='icon-action' />;
    };

    const getVoteType = () => {
        if (voteValue === 1) {
            return 'up-vote';
        }
        if (voteValue === -1) {
            return 'down-vote';
        }
    }

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
                            <span className='post-votes-container'>
                                <button
                                    type='button'
                                    className={`icon-action-button up-vote ${
                                        voteValue === 1 && 'active'
                                    }`}
                                    onClick={() => onHandleVote(1)}
                                    aria-label="Up vote"
                                >
                                    {renderUpVote()}
                                </button>
                                <p className={`post-votes-value ${getVoteType()}`}>
                                    {shortenNumber(post.ups, 1)}
                                </p>
                                <button
                                    type='button'
                                    className={`icon-action-button down-vote ${
                                        voteValue === -1 && 'active'
                                    }`}
                                    onClick={() => onHandleVote(-1)}
                                    aria-label='Down vote'
                                >
                                    {renderDownVote()}
                                </button>
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