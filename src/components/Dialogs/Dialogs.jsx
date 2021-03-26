import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message.jsx'
import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './Dialogs.module.css';

const  Dialogs = (props) => {

    let dialogsMessages = props.state.dialogsData.map( (dialog) => {
        return <DialogItem name ={dialog.name} id={dialog.id} />
    });
    let messagesElements = props.state.messagesData.map( (elem) => {
        return (
        <Message message={elem.message} />
        )
    });
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsMessages}
            </div>
            <div className={classes.dialogs__messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs