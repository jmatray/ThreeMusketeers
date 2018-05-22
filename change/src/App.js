import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthHandler from './components/AuthHandler';
import BasicInfo from './components/BasicInfo';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
// import BasicInfo from './components/BasicInfo.js';
import Expenses from './components/Expenses.js';
import Goals from './components/Goals';

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


