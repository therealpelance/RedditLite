import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './Header.css';
import { GoSearch } from 'react-icons/go';
import { FaReddit } from 'react-icons/fa';
import { setSearchTerm } from '../../store/redditSlice';

export function Header() {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    return (
        <header>
            <div id='logoBox'>
                <div className='logoIcon'>
                    <FaReddit />
                </div>
                <h1><span className='reddit'>Reddit</span>Lite</h1>
            </div>
            <form className='search' onSubmit={onSearchTermSubmit}>
                <input 
                    type="text"
                    placeholder='Search subreddit'
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label='Search posts'
                />
                <button type='submit' onClick={onSearchTermSubmit} aria-label='Search'><GoSearch /></button>
            </form>
            
        </header>
    );
};