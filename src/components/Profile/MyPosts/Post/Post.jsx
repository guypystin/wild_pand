import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}> 
            <img className={classes.post__image} src="https://i.pinimg.com/736x/66/12/e2/6612e2d02db90bfa78fd4afb2e2dc15c.jpg" alt=""/>
            <div className={classes.post__text}>
                {props.ear}
            </div>
        </div>
        
    )
}

export default Post;