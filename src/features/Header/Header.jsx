import React from 'react';
import './Header.css';
import { GoSearch } from 'react-icons/go';

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
                <img src={require('./reddit-logo-2436 (3).png')} alt='Reddit Logo'/>
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