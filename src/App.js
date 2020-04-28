import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import SearchFriend from './components/SearchFriends'
import EventFiller from './components/EventFiller'

class App extends React.Component{
  render(){
    return (
      <Router>
        <Header/>
        <Route path='/'exact component={Home} />
        <Route path='/profile' render={(props)=><Home {...props} state={3} />} />
        <Route path='/search-friend' component={SearchFriend} />
        <Route path='/add-event' component={EventFiller} />
      </Router>
    )
  }
}

export default App;
