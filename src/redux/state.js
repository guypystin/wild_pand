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
        }
        
          
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
    
         if(action.type === 'ADD-POST'){
            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount : 1,
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state)
         } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText ;
            this._callSubscriber(this._state) 
         }else if(action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id:1,
                message: action.textMessage,
                likesCount: 1,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._callSubscriber(this._state)
         }else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newText ;
            console.log(action.newText)
            this._callSubscriber(this._state)
         }
    },
    
}

export default store ;
window.store = store;