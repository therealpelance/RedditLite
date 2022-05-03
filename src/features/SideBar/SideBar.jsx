import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SideBar.css';
import Card from '../../components/Card';
import { selectSubreddits, setType } from '../../store/subredditSlice';
import {
    setSelectedSubreddit,
    selectSelectedSubreddit,
} from '../../store/redditSlice';

export function SideBar() {
    const [subTypeLocal, setSubTypeLocal] = useState('Popular');
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const dispatch = useDispatch();

    const selectSubType = (e) => {
        dispatch(setType(e.target.value));
        setSubTypeLocal(e.target.value);
        console.log(e.target.value);
    };
    
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