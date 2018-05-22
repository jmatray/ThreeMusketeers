import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import RouterComponent from './RouterComponent';
import { getUserId } from './DataHandler';

class AuthHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpEmail: '',
            signUpPassword: '',
            logInEmail: '',
            logInPassword: '',
            username: ''
        }
    }

    //handles setting state based on who is signed in 
    componentDidMount() {
        firebase.auth().onAuthStateChanged(User => {
            if (User) {
                this.setState({
                    user: User,
                    signUpEmail: '',
                    signUpPassword: '',
                    signUpError: '',
                    logInEmail: '',
                    logInPassword: '',
                    logInError: '',
                    username: ''
                })
            } else {
                this.setState({
                    user: null
                })
            }
        })
    }

    //handles when user has signed up, sends user info to firebase
    onSignUp() {
        firebase.auth().createUserWithEmailAndPassword(this.state.signUpEmail,
            this.state.signUpPassword).then(User => {
                return User.updateProfile({
                    displayName: this.state.username
                })
            }).catch(err => {
                this.setState({ signUpError: err.message })
            });
    }

    onChange(event) {
        let val = event.target.value;
        let field = event.target.name;
        let change = {};
        change[field] = val;
        this.setState(change);
    }

    //handles when user signs in, changes user information in state
    onSignIn() {
        firebase.auth().signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
            .catch(err => {
                this.setState({ logInError: err.message });
            });
    }

    render() {
        return (
            <div id="page">
                {this.state.user &&
                    <RouterComponent />
                }
                {!this.state.user &&
                    <div>
                        <h1 className="sign-in-header"> Welcome to Change </h1>

                        {/* Creates the sign-up form for new users */}
                        <div id="auth-container">
                            <div className="auth-form-container">
                                <i id="icon" className="fa fa-cutlery"></i>
                                <h1 className="auth">Sign Up</h1>
                                <div id="authentication">
                                    {this.state.signUpError &&
                                        <p className="alert alert-danger">{this.state.signUpError}</p>
                                    }
                                    <div className="form-group">
                                        <input className="form-control"
                                            name="signUpEmail"
                                            placeholder="E-mail address"
                                            value={this.state.signUpEmail}
                                            onChange={(event) => { this.onChange(event) }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                            name="signUpPassword"
                                            placeholder="Password"
                                            value={this.state.signUpPassword}
                                            onChange={(event) => { this.onChange(event) }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control"
                                            name="username"
                                            placeholder={"Username"}
                                            value={this.state.username}
                                            onChange={(event) => { this.onChange(event) }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-primary mr-2" onClick={() => this.onSignUp()}>
                                            Sign Up
                                    </button>
                                    </div>
                                </div>
                            </div>

                            {/* Creates the log in form for returning users */}
                            <div className="auth-form-container">
                                <i id="icon" className="fa fa-cutlery"></i>
                                <h1 className="auth">Log In</h1>
                                <div id="authentication">
                                    {this.state.logInError &&
                                        <p className="alert alert-danger">{this.state.logInError}</p>
                                    }
                                    <div className="form-group">
                                        <input className="form-control"
                                            name="logInEmail"
                                            placeholder="E-mail address"
                                            value={this.state.logInEmail}
                                            onChange={(event) => { this.onChange(event) }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                            name="logInPassword"
                                            placeholder="Password"
                                            value={this.state.logInPassword}
                                            onChange={(event) => { this.onChange(event) }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-success mr-2 sign-in" onClick={() => this.onSignIn()}>
                                            Log In
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }
}

export default AuthHandler;