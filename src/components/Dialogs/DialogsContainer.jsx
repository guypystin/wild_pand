import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';
import React from 'react';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addMessage = (text) => {
                        store.dispatch(addMessageActionCreator(text));
                    }
                    let onMessageChange = (text) => {
                        store.dispatch(onMessageChangeActionCreator(text));
                    }
                    return <Dialogs
                        addMessage={addMessage}
                        store={store}
                        onMessageChangeActionCreator={onMessageChange}
                        messagesData={state.dialogsPage.messagesData}
                        dialogsData={state.dialogsPage.dialogsData}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;