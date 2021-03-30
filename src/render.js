import './index.css';

import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import {addMessage} from './redux/state'
import {addPost, updateNewPostText, updateNewMessageText} from './redux/state'
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }