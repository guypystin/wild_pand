import DialogItem from './../../../../components/Dialogs/DialogItem/DialogItem'
import { NavLink } from 'react-router-dom';
import classes from './Recent.module.css'
import react from 'react';

const Recent = (props) => {
    return(
        <div className={classes.recent__item + ' ' + classes.recent__active}>
            <div className={classes.avatar}></div>
            <NavLink className={classes.recent__link} to={"/dialogs/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default Recent ;