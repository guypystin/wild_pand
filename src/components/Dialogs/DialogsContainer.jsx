import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';
import React from 'react';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addMessage = (text) => {
//                         store.dispatch(addMessageActionCreator(text));
//                     }
//                     let onMessageChange = (text) => {
//                         store.dispatch(onMessageChangeActionCreator(text));
//                     }
//                     return <Dialogs
//                         addMessage={addMessage}
//                         store={store}
//                         onMessageChangeActionCreator={onMessageChange}
//                         messagesData={state.dialogsPage.messagesData}
//                         dialogsData={state.dialogsPage.dialogsData}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }


let mapStateToProps = (state) => {
    return {
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        },
        onMessageChangeActionCreator: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;