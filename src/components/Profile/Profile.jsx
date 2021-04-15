import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile__header from '../Profile/Profile__header/Profile__header'
import React from 'react';
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <Profile__header/>
            <MyPostsContainer store={props.store}/>
        </div>
        
    )
} 

export default Profile;
