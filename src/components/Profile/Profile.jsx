import React from 'react';
import Profile__header from '../Profile/Profile__header/Profile__header'
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Profile__header/>
            <MyPosts />
        </div>
        
    )
}

export default Profile;