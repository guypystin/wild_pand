import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';
import React from 'react';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//                     let addPost = (text) => {
//                         store.dispatch(addPostActionCreator());
//                     }
//                     let onPostChange = (text) => {
//                         store.dispatch(onPostChangeActionCreator(text));
//                     }
//                     return <MyPosts updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}
//                         postsData={state.profilePage.postsData} />
//                 }
//             }

//         </StoreContext.Consumer>
//     );
    
// }

let mapStateToProps = (state) => {
    return {
        // posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
        postsData:state.profilePage.postsData ,
    }
    
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        },
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;