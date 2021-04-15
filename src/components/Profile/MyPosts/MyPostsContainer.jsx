import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';
import React from 'react';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let addPost = (text) => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        store.dispatch(onPostChangeActionCreator(text));
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        postsData={state.profilePage.postsData} />
                }
            }

        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;