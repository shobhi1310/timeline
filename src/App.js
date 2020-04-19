import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Populator from './components/Populator'

class App extends React.Component{
  render(){
    return (
      <div id="app">
        {/* <Header title="Date"/> */}
        <Populator/>
      </div>
    )
  }
}

export default App;
