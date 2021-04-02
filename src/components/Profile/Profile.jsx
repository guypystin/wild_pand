import MyPosts from './MyPosts/MyPosts'
import Profile__header from '../Profile/Profile__header/Profile__header'
import React from 'react';
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <Profile__header/>
            <MyPosts postsData={props.state.postsData} dispatch={props.dispatch} />
        </div>
        
    )
} 

export default Profile;
