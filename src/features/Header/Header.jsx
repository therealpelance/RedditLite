import React from 'react';
import './Header.css';
import { GoSearch } from 'react-icons/go';
import { FaReddit } from 'react-icons/fa';

export function Header() {
    const onSearchTermChange = (e) => {
        console.log(e);
    }

    const onSearchTermSubmit = (e) => {
        console.log(e);
    };

    // REMOVE BEFORE PRODUCTION
    const tempSearchTermLocal = ""

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
                    placeholder='Search'
                    value={tempSearchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label='Search posts'
                />
                <button type='submit' onClick={onSearchTermSubmit} aria-label='Search'><GoSearch /></button>
            </form>
            
        </header>
    );
};