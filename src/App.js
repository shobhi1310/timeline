import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

class App extends React.Component{
  render(){
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline"/>
          {/* <Content /> */}
        </div>
      </div>
    )
  }
}

export default App;
