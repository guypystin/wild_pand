import './index.css';

import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App state={store.getState()} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);

// reportWebVitals();
