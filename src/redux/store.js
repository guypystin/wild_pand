import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : { 
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        sidebar: {}
          
    },
    getState() {
        return this._state; 
    },
    subscribe(observer){
        this._callSubscriber = observer ;
    },
    _callSubscriber(){
    },  
    dispatch(action) { // { type: 'ADD-POST'}
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
    }
   
    
}


export default store ;
window.store = store;