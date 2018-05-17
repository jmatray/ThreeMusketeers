import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicInfo from './components/BasicInfo';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
// import BasicInfo from './components/BasicInfo.js';
import Expenses from './Expenses.js';
import Goals from './Goals';

class App extends Component {
  render() {
    return (
      <div id='page'> 
         <NavBar/>
      </div>
    );
  }
}

export default App;

class NavBar extends Component {
  //renders nav bar along with react router for navigation
  render() {
      return (
          <div>
              <nav id="nav" className="navbar">
                  <Router>
                      <div className="container">
                          <span id="SiteName">Change</span>
                          <Link className="link" to="/">Dashboard</Link>
                          <Link className="link" to="/BasicInfo">Basic Info</Link>
                          <Link className="link" to="/Expenses">Expenses</Link>
                          <Link className="link" to="/Goals">Goals</Link>
                          <button id="signout" className="btn btn-warning mr-2" onClick={() => this.props.onSignOut()}>
                              Sign Out
                          </button>
                      </div>
                  </Router>
              </nav>
              <Router>
                  <div>
                      <Route exact path='/' render={() => <Dashboard/>} />
                      <Route path='/BasicInfo' render={() => <BasicInfo/>} />
                      <Route path='/Expenses' render={() => <Expenses/>} />
                      <Route path='/Goals' render={() => <Goals/>} />
                  </div>
              </Router>
          </div>
      )
  }
}
