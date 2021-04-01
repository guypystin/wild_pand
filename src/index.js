import './index.css';

import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {store.getState()} addPost={store.addPost.bind(store)} 
        addMessage={store.addMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} 
        updateNewMessageText={store.updateNewMessageText.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
