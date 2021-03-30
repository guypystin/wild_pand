import { rerenderEntireTree } from "../render";

let state = {
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
    
      
}
export let addMessage = (textMessage) => {
    let newMessage = {
        id:1,
        message: textMessage,
        likesCount: 1,
    };
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state)
}
export let addPost = (postMessage) => {
        let newPost = {
            id:5,
            message: postMessage,
            likesCount : 1,
        };
        state.profilePage.postsData.push(newPost);
        rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText ;
    rerenderEntireTree(state)
}
export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText ;
    console.log(newText)
    rerenderEntireTree(state)
}
export default state ;