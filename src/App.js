import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends React.Component{
  render(){
    return (
      <div id="app">
        <Header title="Date"/>
      </div>
    )
  }
}

export default App;
