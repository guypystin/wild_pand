import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
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
        <Nav state = {props.state.dialogsPage}/>
       
        <div className = 'content'>
          <Route path="/profile" render={() => <Profile/>}/>
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
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
