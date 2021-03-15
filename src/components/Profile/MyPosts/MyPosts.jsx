import Post from './Post/Post'
import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={classes.my__posts}>
            <Post ear = "Первое сообщение"/>
            <Post ear = "Второе сообщение"/>
        </div>
    )
}

export default MyPosts;