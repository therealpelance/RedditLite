import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SideBar.css';
import Card from '../../components/Card';
import { 
    fetchSubreddits, 
    selectSubreddits 
} from '../../store/subredditSlice';
import {
    setSelectedSubreddit,
} from '../../store/redditSlice';

export function SideBar() {
    const [subTypeLocal, setSubTypeLocal] = useState('Popular');
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch();

    const selectSubType = (e) => {
        setSubTypeLocal(e.target.value);
        dispatch(fetchSubreddits(e.target.value));
        console.log(e.target.value);
    };

    useEffect(() => {
        dispatch(fetchSubreddits());
      }, [dispatch]);
    
    return (
        <Card className='sidebar-card'>
            <h2>{subTypeLocal} Subreddits</h2>
            <ul className='subTypeList'>
                <li><button type='button' onClick={selectSubType} value={'Popular'}>Popular</button></li>
                <li><button type='button' onClick={selectSubType} value={'New'}>New</button></li>
            </ul>
            <ul className='subreddits-list'>
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.id}
                    >
                        <button
                            type='button'
                            onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                        >
                            <img
                                src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                                alt={`${subreddit.display_name}`}
                                className='subreddit-icon'
                                style={{ border: `3px solid ${subreddit.primary_color}`}}
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};