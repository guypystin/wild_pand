import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import MyPosts from './components/Profile/MyPosts/MyPosts'
import Nav from './components/Navigation/Navigation'
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import React from 'react';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      
      <Header />
      <div className='osnova'>
        <Nav />
        {/*  */}
        <div className = 'content'>
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
        
      </div>
    </div>
    </BrowserRouter>
  );
};
export default App;
