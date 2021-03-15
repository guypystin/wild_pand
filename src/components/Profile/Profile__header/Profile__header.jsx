import React from 'react';
import classes from './Profile__header.module.css';
import img from '../../../img/profile__header.jpg'

const Profile__header = () => {
    return (
        <div className={classes.profile__header}>
            <img  src={img} alt=""/>
        </div>
    )
}

export default Profile__header;