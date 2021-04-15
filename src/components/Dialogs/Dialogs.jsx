import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message.jsx'
import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './Dialogs.module.css';

const  Dialogs = (props) => {
    let textArea = React.createRef()

    let dialogsMessages = props.dialogsData.map( (dialog) => {
        return <DialogItem name ={dialog.name} id={dialog.id} />
    });
    let messagesElements = props.messagesData.map( (elem) => {
        return (
        <Message message={elem.message} />
        )
    });
    let onAddMessage = () => {
        let text = textArea.current.value
        props.addMessage();
    }
    let onMessageChange = () =>{
        let text = textArea.current.value;
        props.onMessageChangeActionCreator(text);
        
    }

    return (
        
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsMessages}
            </div>
            <div className={classes.dialogs__messages}>
                {messagesElements}
                <div className={classes.addMessage}>
                    <textarea ref={textArea} className={classes.addMessage__form} onChange={onMessageChange} value={props.newPostText}></textarea>
                    <button onClick={onAddMessage} className={classes.addMessage__button}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs