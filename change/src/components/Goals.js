import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox } from 'react-bootstrap';
import Popup from 'react-popup';
import {submitGoalInfo} from '../firebase/GetUserData';

class Goals extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSavingsGoalChange = this.handleSavingsGoalChange.bind(this);
        this.handleNecessityGoalChange = this.handleNecessityGoalChange.bind(this);
        this.handleDiscretionaryGoalChange = this.handleDiscretionaryGoalChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.formatForSubmit = this.formatForSubmit.bind(this);

        this.state = {
            savingsGoal: '',
            necessityGoal: '',
            discretionaryGoal: ''
        }
    }

    getValidationStateForSavingsGoal() {
        var input = this.state.savingsGoal;
        if (this.state.savingsGoal ==='Enter percentage here') {
            return this.state.savingsGoal;
        }
        var regex = /[0-9]+/g; // change this
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleSavingsGoalChange(e) {
        this.setState({ savingsGoal: e.target.value });
    }

    getValidationStateForNeccesityGoal() {
        var input = this.state.necessityGoal;
        if (this.state.necessityGoal ==='Enter percentage here') {
            return this.state.necessityGoal;
        }
        var regex = /[0-9]+/g; // change this
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleNecessityGoalChange(e) {
        this.setState({ necessityGoal: e.target.value });
    }

    getValidationStateForDiscretionaryGoal() {
        var input = this.state.discretionaryGoal;
        if (this.state.discretionaryGoal ==='Enter percentage here') {
            return this.state.discretionaryGoal;
        }
        var regex = /[0-9]+/g; // change this
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleDiscretionaryGoalChange(e) {
        this.setState({ discretionaryGoal: e.target.value });
    }

    handleError() {
        var submitable = true;
        var total = Number(this.state.savingsGoal) + Number(this.state.discretionaryGoal) + Number(this.state.necessityGoal);
        if (this.state.savingsGoal >= 40) {
            window.alert("Suggested percentage of savings is 15-20%. You are attempting to save at least double that, that may be too ambitious")
        } else if (this.state.discretionaryGoal >= 50) {
            window.alert("Discretionary spending is typically 30% of one’s budget")
        } else if (total != 100) {
            window.alert("Adjust your goals to add up to exactly 100%. your total now is " + total)
            submitable = false;
        }
        return submitable;
    }

    formatForSubmit(event) {
        event.preventDefault();
        let submitable = this.handleError();
        let goalObj = {};
        goalObj.savings = this.state.savingsGoal;
        goalObj.necSpend = this.state.necessityGoal;
        goalObj.desc = this.state.discretionaryGoal;
        var userId = firebase.auth().currentUser.uid;
        if (submitable) {
            submitGoalInfo(userId, goalObj, 'goals').then(() => {
                this.toggleSuccess();
            }).catch((error) => {
                this.setState({ error: error.message });
            });
        }
    }

    toggleSuccess() {
        if (this.state.error) {
            this.setState({ error: !this.state.error })
        }
        this.setState({
            success: !this.state.success
        });
    }

    render() {
        return (
            <div className='page-container'>
                <h1 className='page-header'>Set Your Goals</h1>
                <p>
                    Please fill out the information below to help us get an accurate picture of what your goals are. You can always edit this information later
                </p> 
                {this.state.success &&
                    <p className="alert alert-success">{'Successfully Updated Your Expenses'}</p>
                }
                {this.state.error &&
                    <p className="alert alert-danger">{this.state.error}</p>
                } 
                <Row>
                    <Col>
                        <form>  
                                <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForSavingsGoal()}
                            >
                            <ControlLabel>Savings</ControlLabel>
                                <FormControl
                                    type="number" //does number work?
                                    value={this.state.savingsGoal}
                                    placeholder="Enter percentage of income here"
                                    onChange={this.handleSavingsGoalChange}
                                    step={0.1}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a percentage </HelpBlock>
                            </FormGroup>
                        </form>  
                        <form>  
                                <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForNeccesityGoal()}
                            >
                            <ControlLabel>Spending: Necessities</ControlLabel>
                                <FormControl
                                    type="number" //does number work?
                                    value={this.state.necessityGoal}
                                    placeholder="Enter percentage of income here"
                                    onChange={this.handleNecessityGoalChange}
                                    step={0.1}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a percentage </HelpBlock>
                            </FormGroup>
                        </form> 
                        <form>  
                                <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForDiscretionaryGoal()}
                            >
                            <ControlLabel>Spending: Discretionary</ControlLabel>
                                <FormControl
                                    type="number" //does number work?
                                    value={this.state.discretionaryGoal}
                                    placeholder="Enter percentage of income here"
                                    onChange={this.handleDiscretionaryGoalChange}
                                    step={0.1}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a percentage </HelpBlock>
                            </FormGroup>
                        </form> 
                    </Col>
                </Row>  
                <Row>
                    <Col xs={12} className="save-cancel-bar">
                        <Button>Cancel</Button>
                        <Button disabled={
                            this.getValidationStateForSavingsGoal() !== "success" ||
                            this.getValidationStateForDiscretionaryGoal() !== "success" ||
                            this.getValidationStateForNeccesityGoal() !== "success"}
                            onClick={this.formatForSubmit}>Save</Button>
                    </Col>
                </Row>
            </div>    
            
        )
    }

}

export default Goals;