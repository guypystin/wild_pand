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
    let addMessage = () => {
        let text = textArea.current.value
        props.dispatch({type:'ADD-MESSAGE', textMessage:text})
    }
    let onMessageChange = () =>{
        let text = textArea.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText: text }) ;
    }
    let textArea = React.createRef()
    
    return (
        
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsMessages}
            </div>
            <div className={classes.dialogs__messages}>
                {messagesElements}
                <div className={classes.addMessage}>
                    <textarea ref={textArea} className={classes.addMessage__form} onChange={onMessageChange} value={props.newPostText}></textarea>
                    <button onClick={addMessage} className={classes.addMessage__button}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs