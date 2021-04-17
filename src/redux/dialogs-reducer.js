const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let initialState = {
    dialogsData : [
        {id:1, name:'Андрей'},
        {id:2, name:'Эдуард'},
        {id:3, name:'Петр'},
        {id:4, name:'Николай'},
        {id:5, name:'Алексей'},
        {id:6, name:'Кирилл'},
        {id:7, name:'Андрей'},
        {id:8, name:'Андрей'},
      ],
      messagesData : [
        {id:1, message:'Привет'},
        {id:2, message:'Привет, как дела?'},
        {id:3, message:'Отлично, а у тебя?'},
        {id:4, message:'Тоже'},
        {id:5, message:'отлично'},
      ],
      newMessageText : '',
}

export const dialogsReducer = (state = initialState, action) => { 
    let stateCopy = {...state}
    switch(action.type){
        case ADD_MESSAGE : {
            let newMessage = {
                id:6,
                message: state.newMessageText,
                likesCount: 1,
            };
            stateCopy.dialogsData = [...state.dialogsData];
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT : {
            stateCopy.newMessageText = action.newText ;
            console.log(action.newText)
            return stateCopy;
        }
        default : {
            return state;
        }
    }
   
}
export const addMessageActionCreator = (text) => {
    return{
        type: ADD_MESSAGE,
        textMessage: text 
    }
}
export const onMessageChangeActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text ,
    };
}
export default dialogsReducer;