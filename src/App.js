import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Home from './components/Home'

class App extends React.Component{
  render(){
    return (
      <Router>
        <Header/>
        <Route path='/'exact component={Home} />
      </Router>
    )
  }
}

export default App;
