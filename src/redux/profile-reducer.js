const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData : [
        {id:1, message: "Первое сообщение", likes:20},
        {id:2, message: "Второе сообщение", likes:15},
        {id:3, message: "Третье сообщение", likes:15},
        {id:4, message: "Четвертое сообщение", likes:15},
        {id:5, message: "Пятое сообщение", likes:15},
        {id:5, message: "Шестое сообщение", likes:15},
        {id:5, message: "Неважно какое сообщение", likes:15},
    ],  
    newPostText : '',
}
export const profileReducer = (state = initialState, action) => {
     
    switch(action.type){
        case ADD_POST : {
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount : 1,
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText ;
            return stateCopy;
        }
        default : {
            return state;
        }
    }
}
export const addPostActionCreator = () =>{
    return {
        type:  ADD_POST,
    }
}
export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text,
    }
}

export default profileReducer;