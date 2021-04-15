import './index.css';

import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {store.getState()} store={store} dispatch={store.dispatch.bind(store)} 
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
