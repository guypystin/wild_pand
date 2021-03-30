import Post from './Post/Post'
import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    
    let PostsElement = props.postsData.map( (element) => {
        return <Post message = {element.message} likes = {element.likes} />
    })
    
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        props.updateNewPostText(' ');
    }
    let newPostElement = React.createRef();

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text) ;
    }

    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.title}>My posts</h3>
            <div className={classes.addPost}>
                <div className={classes.textArea}>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div className={classes.button}>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
            </div>
            <div className={classes.my__posts}>
                {PostsElement}
            </div>
        </div>
    );
}

export default MyPosts;