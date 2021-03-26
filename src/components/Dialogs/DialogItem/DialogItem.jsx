import { BrowserRouter, Route } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    
    return(
        <div className={classes.dialogs__item + ' ' + classes.dialogs__active}>
            <div className={classes.avatar}></div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default DialogItem ;