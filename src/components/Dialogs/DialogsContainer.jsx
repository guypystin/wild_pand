import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';

import DialogItem from './DialogItem/DialogItem'
import Dialogs from './Dialogs';
import Message from './Message/Message.jsx'
import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './Dialogs.module.css';

const  DialogsContainer = (props) => {
    let state=props.store.getState();
    
    let addMessage = (text) => {
        props.store.dispatch(addMessageActionCreator(text));
    }

    let onMessageChange = (text) =>{
        props.store.dispatch(onMessageChangeActionCreator(text)) ;
    }


    
    return (
        <Dialogs addMessage={addMessage} store={props.store} onMessageChangeActionCreator={onMessageChange} messagesData={state.dialogsPage.messagesData}dialogsData={state.dialogsPage.dialogsData} />
    )
}

export default DialogsContainer;