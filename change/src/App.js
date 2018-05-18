import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthHandler from './AuthHandler';

class App extends Component {
  render() {
    return (
      <div id='page'> 
        <AuthHandler />
      </div>
    );
  }
}
export default App;


