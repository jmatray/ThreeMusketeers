import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';


class AuthHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        }
    }

    //handles setting state based on who is signed in 
    componentDidMount() {
        firebase.auth().onAuthStateChanged(User => {
            if (User) {
                this.setState({
                    user: User,
                    email: '',
                    password: '',
                    username: '',
                    error: ''
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
        firebase.auth().createUserWithEmailAndPassword(this.state.email,
            this.state.password).then(User => {
                return User.updateProfile({
                    displayName: this.state.username
                })
            }).catch(err => {
                this.setState({ error: err.message })
            });
    }

    //handles when user signs in, changes user information in state
    onSignIn() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(err => {
                this.setState({ error: err.message })
            });
    }

    //handles when user signs out, signs them out of firebase
    onSignOut() {
        firebase.auth().signOut();
    }

    render() {
        return (
        <div id="page">
            {!this.state.user &&
                <div id="background">
                    <div id="container">
                        <i id="icon" className="fa fa-cutlery"></i>
                        <h1 className="auth">Log in to Change</h1>
                        <div id="authentication">
                            {this.state.error &&
                                <p className="alert alert-danger">{this.state.error}</p>
                            }
                            <div className="form-group">
                                <input className="form-control"
                                    name="email"
                                    placeholder="E-mail address"
                                    value={this.state.email}
                                    onChange={(event) => { this.onChange(event) }}
                                />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
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
                                <button className="btn btn-success mr-2" onClick={() => this.onSignIn()}>
                                    Sign In
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        )
    }
}