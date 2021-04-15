import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';
import Post from './Post/Post'
import React from 'react';
import classes from './MyPosts.module.css';

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = (text) => {
        props.store.dispatch(addPostActionCreator()); 
    }
    let onPostChange = (text) =>{
        props.store.dispatch(onPostChangeActionCreator(text)) ;
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} postsData={state.profilePage.postsData}/>);
}

export default MyPostsContainer;