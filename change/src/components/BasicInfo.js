import { submitBasicInfo } from '../firebase/GetUserData';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import React, { Component } from 'react';

class BasicInfo extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleIncomeChange = this.handleIncomeChange.bind(this);
        this.handleSavingsChange = this.handleSavingsChange.bind(this);
        this.handleStudentSelect = this.handleStudentSelect.bind(this);
        this.handleDependentSelect = this.handleDependentSelect.bind(this);

        this.state = {
            incomeValue: '',
            savingsValue: '',
            numDependents: '',
            userInfo: {
                income: '',
                savings: '',
                student: '',
                dependent: '',
                dependentNum: '',
                numInHouse: '',
                empStatus: ''
            }
        };
    }

    // Handles validation and state input for estimated income values
    getValidationStateForIncome() {
        var input = this.state.incomeValue;
        if (this.state.incomeValue.length === 0) {
            return null;
        }
        var regex = /^\d+(?:\.\d{0,2})$/;
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    // Handles validation and state input for estimated savings values
    getValidationStateForSavings() {
        var input = this.state.savingsValue;
        if (this.state.savingsValue.length === 0) {
            return null;
        }
        var regex = /^\d+(?:\.\d{0,2})$/;
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    getValidationStateForDependents() {
        var input = this.state.numDependents;
    }

    handleStudentSelect(e) {
        let infoObj = {...this.state.userInfo};
        infoObj.student = e.target.value;
        this.setState({userInfo: infoObj});
    }

    handleDependentSelect(e) {
        let infoObj = {...this.state.userInfo};
        infoObj.dependent = e.target.value;
        this.setState({userInfo: infoObj});
    }

    // Handles changing input value for the estimated income form
    handleIncomeChange(e) {
        this.setState({ incomeValue: e.target.value });
    }

    // Handles changing input value for the estimated savings form
    handleSavingsChange(e) {
        this.setState({ savingsValue: e.target.value });
    }

    // Handles changing input value for the number of dependents form
    handleDependentChange(e) {
        this.setState({ numDependents: e.target.value });
    }

    

    render() {
        return (
            <div className='page-container'>
                <h1 className='page-header'>Basic Information</h1>
                <p>Please fill out the information below to help us get an accurate picture of
                    who you are and what your expenses are. You can always edit this information
                    later.
            </p>
                <Row>
                    <Col xs={6}>
                        <form>
                            {/* form that takes in the user's monthly income */}
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForIncome()}
                            >
                                <ControlLabel>Estimated Monthly Income</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.incomeValue}
                                    placeholder="Enter text"
                                    onChange={this.handleIncomeChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter amount in dollar and cent form</HelpBlock>
                            </FormGroup>

                            {/* form that takes in the user's monthly savings */}
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForSavings()}
                            >
                                <ControlLabel>Estimated Monthly Savings</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.savingsValue}
                                    placeholder="Enter text"
                                    onChange={this.handleSavingsChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter amount in dollar and cent form</HelpBlock>
                            </FormGroup>

                            {/* form that takes in the user's student status */}
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Are You a Student?</ControlLabel>
                                <FormControl 
                                    componentClass="select" 
                                    placeholder="select" 
                                    onChange={this.handleStudentSelect}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </FormControl>
                            </FormGroup>

                            {/* form that takes in the user's dependent status */}
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Are You a Dependent?</ControlLabel>
                                <FormControl 
                                    componentClass="select" 
                                    placeholder="select" 
                                    onChange={this.handleDependentSelect}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </FormControl>
                            </FormGroup>

                            {/* form that takes in the number of dependent the user has */}
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForDependents()}
                            >
                                <ControlLabel>Number of Dependents You Have</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.numDependents}
                                    placeholder="Enter text"
                                    onChange={this.handleDependentChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a number or 0 for none</HelpBlock>
                            </FormGroup>
                        </form>
                    </Col>
                    <Col xs={6}>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasicInfo;
