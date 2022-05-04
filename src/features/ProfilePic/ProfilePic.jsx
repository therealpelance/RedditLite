import React from 'react';
import './ProfilePic.css';

const ProfilePic = (props) => {
    const { name } = props;

    return (
        <img
            src={`https://api.adorable.io/avatars/10/${name}`}
            alt={`${name} profile`}
            className='profile-image'
        />
    );
};

export default ProfilePic;