import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Populator from './components/Populator'
import EventAdder from './components/EventAdder'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render(){
    return (
      <div id="app">
        <Header/>
        {/* <Populator/> */}
        {/* <SignUp/> */}
        <Profile/>
      </div>
    )
  }
}

export default App;
