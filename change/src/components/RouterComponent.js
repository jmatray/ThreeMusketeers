import React, { Component } from 'react';
import '../App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import BasicInfo from './BasicInfo.js';
import Expenses from './Expenses.js';

import Goals from './Goals';
import firebase from 'firebase';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import IncorporationForm from './altExpense.js';


class RouterComponent extends Component {
    //renders nav bar along with react router for navigation

    //handles when user signs out, signs them out of firebase
    onSignOut() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
                <Navbar id="nav" className="navbar" bsStyle="inverse">
                <Navbar.Brand id="SiteName">¢hange</Navbar.Brand>
                    <Router>
                        <Nav pullRight>
                        {/* <div className="container"> */}
                            <NavItem><Link className="link" to="/">Dashboard</Link></NavItem>
                            <NavItem><Link className="link" to="/BasicInfo">Basic Info</Link></NavItem>
                            <NavItem><Link className="link" to="/Expenses">Expenses</Link></NavItem>
                            <NavItem><Link className="link" to="/Goals">Goals</Link></NavItem>
                            <button id="signout" className="btn btn-warning mr-2" onClick={() => this.onSignOut()}>
                                Sign Out
                          </button>
                        {/* </div> */}
                        </Nav>
                    </Router>
                </Navbar>
                <Router>
                    <div>
                        <Route exact path='/' render={() => <Dashboard />} />
                        <Route path='/BasicInfo' render={() => <BasicInfo />} />
                        <Route path='/Expenses' render={() => <Expenses />} />
                        <Route path='/Goals' render={() => <Goals />} />
                    </div>
                </Router>
            </div>
        )
    }
}
export default RouterComponent;