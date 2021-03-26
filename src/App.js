import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import MyPosts from './components/Profile/MyPosts/MyPosts'
import Nav from './components/Navigation/Navigation'
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import React from 'react';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      
      <Header />
      <div className='osnova'>  
        <Nav statex = {props.state.dialogsPage}/>
       
        <div className = 'content'>
          
          <Route path="/profile" render={() => <Profile state = {props.state.profilePage}/>}/>
          <Route path="/dialogs" render={() => <Dialogs state = {props.state.dialogsPage} />}/>
          <Route path="/news" render={() => <News />}/>
          <Route path="/music" render={() => <Music />}/>
          <Route path="/settings" render={() => <Settings />}/>
        </div>
        
      </div>
    </div>
    </BrowserRouter>
  );
};
export default App;
