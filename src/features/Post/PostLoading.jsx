import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Post.css';
import './PostLoading.css';
import {
  FiArrowUp,
  FiArrowDown,
} from 'react-icons/fi';
import {
    FaRegCommentAlt,
} from 'react-icons/fa';
import getRandomNumber from '../../utils/getRandomNumber';

const PostLoading = () => {
  return (
    <article className="post">
      <div className="post-container">
        <h3 className="post-title">
          <Skeleton width={getRandomNumber(100, 200)} />
        </h3>

        <div className="post-image-container">
          <Skeleton height={250} />
        </div>

        <div className="post-details">
          <span>
            <Skeleton width={getRandomNumber(20, 50)} />
          </span>
          <span className='post-votes-container'>
            <button
                type="button"
                className="icon-action-button up-vote"
                aria-label="Up vote"
            >
                <FiArrowUp className="icon-action" />
            </button>
                <Skeleton className="post-votes-value post-votes-value-loading" />
            <button
                type="button"
                className="icon-action-button down-vote"
                aria-label="Down vote"
            >
                <FiArrowDown className="icon-action" />
            </button>
          </span>
          <span className="post-comments-container">
            <button
              type="button"
              className="icon-action-button"
              aria-label="Show comments"
            >
              <FaRegCommentAlt className="icon-action" />
            </button>
            <Skeleton width={getRandomNumber(10, 50)} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostLoading;