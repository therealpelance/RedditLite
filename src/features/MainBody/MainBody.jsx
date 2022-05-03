import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectFilteredPosts, 
    fetchPosts, 
    fetchComments,
    setSearchTerm,
 } from '../../store/redditSlice';

export function MainBody() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    }
    
    if (error) {
        return (
            <div className='error'>
                <h2>Failed to load posts.</h2>
                <button
                    type='button'
                    onClick={() => dispatch(fetchPosts(selectedSubreddit))}
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className='error'>
                <h2>No posts matching "{searchTerm}"</h2>
                <button type='button' onClick={() => dispatch(setSearchTerm(''))}>
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <>
            {posts.map((post, index) => (
                <div>
                    <p>Test</p>
                </div>
            ))}
        </>
    );
};