import './index.css';

import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <StoreContext.Provider value={store}>
        <App state = {store.getState()}/>
        </StoreContext.Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
