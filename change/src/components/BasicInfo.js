import { submitBasicInfo } from '../firebase/GetUserData';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import firebase from 'firebase';

class BasicInfo extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleIncomeChange = this.handleIncomeChange.bind(this);
        this.handleSavingsChange = this.handleSavingsChange.bind(this);
        this.handleStudentSelect = this.handleStudentSelect.bind(this);
        this.handleDependentSelect = this.handleDependentSelect.bind(this);
        this.handleDependentChange = this.handleDependentChange.bind(this);
        this.handleEmploymentSelect = this.handleEmploymentSelect.bind(this);
        this.handleHouseChange = this.handleHouseChange.bind(this);
        this.formatForSubmit = this.formatForSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.state = {
            incomeValue: '',
            savingsValue: '',
            numDependents: '',
            numInHouse: '',
            userInfo: {
                income: '',
                savings: '',
                student: '',
                dependent: '',
                dependentNum: '',
                householdNum: '',
                empStatus: ''
            },
            success: ''
        };
    }

    // Handles validation and state input for estimated income values
    getValidationStateForIncome() {
        var input = this.state.incomeValue;
        if (this.state.incomeValue.length === 0) {
            return null;
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            if (input <= 1000000) {
                return 'success';
                }
                return 'error';
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
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            if (input <= 1000000) {
            return 'success';
            }
            return 'error';
        } else {
            return 'error';
        }
    }

    getValidationStateForDependents() {
        var input = this.state.numDependents;
        if (this.state.numDependents.length === 0) {
            return null;
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            if (input <= 1000000) {
                return 'success';
                }
                return 'error';
        } else {
            return 'error';
        }
    }

    getValidationStateForHouse() {
        var input = this.state.numInHouse;
        if (this.state.numInHouse.length === 0) {
            return null;
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            if (input <= 1000000) {
                return 'success';
                }
                return 'error';
        } else {
            return 'error';
        }
    }

    handleStudentSelect(e) {
        let infoObj = { ...this.state.userInfo };
        infoObj.student = e.target.value;
        this.setState({ userInfo: infoObj });
    }

    handleDependentSelect(e) {
        let infoObj = { ...this.state.userInfo };
        infoObj.dependent = e.target.value;
        this.setState({ userInfo: infoObj });
    }

    handleEmploymentSelect(e) {
        let infoObj = { ...this.state.userInfo };
        infoObj.empStatus = e.target.value;
        this.setState({ userInfo: infoObj });
    }

    // Handles changing input value for the estimated income form
    handleIncomeChange(e) {
        var num = Math.round(e.target.value * 100) / 100;
        this.setState({ incomeValue: num });
    }

    // Handles changing input value for the estimated savings form
    handleSavingsChange(e) {
        var num = Math.round(e.target.value * 100) / 100;
        this.setState({ savingsValue: num });
    }

    // Handles changing input value for the number of dependents form
    handleDependentChange(e) {
        var num = Math.round(e.target.value);
        this.setState({ numDependents: num });
    }

    // Handles changing input value for the number of household members form
    handleHouseChange(e) {
        var num = Math.round(e.target.value);
        this.setState({ numInHouse: num });
    }

    handleClear() {
        this.setState({
            incomeValue: '',
            savingsValue: '',
            numDependents: '',
            numInHouse: '',
            userInfo: {
                income: '',
                savings: '',
                student: '',
                dependent: '',
                dependentNum: '',
                householdNum: '',
                empStatus: ''
            },
        });
    }

    //Fills out userData object and calls the submitBasicInfo() function.
    //This then passes the data to the GetUserData component.
    formatForSubmit(event) {
        event.preventDefault();
        let infoObj = { ...this.state.userInfo };
        infoObj.income = this.state.incomeValue;
        infoObj.savings = this.state.savingsValue;
        infoObj.dependentNum = this.state.numDependents;
        infoObj.householdNum = this.state.numInHouse;
        var userId = firebase.auth().currentUser.uid;
        submitBasicInfo(userId, infoObj, 'basicInfo').then(() => {
            this.toggleSuccess();
            this.handleClear();
        }).catch((error) => {
            this.setState({ error: error.message });
        })
    }

    toggleSuccess() {
        if (this.state.error) {
            this.setState({ error: !this.state.error })
        }
        this.setState({
            success: true
        })
    }


    render() {
        return (
            <div className='page-container'>
                <h1 className='page-header'>Basic Information</h1>
                {this.state.success &&
                    <p className="alert alert-success">{'Successfully Updated Your Information'}</p>
                }
                {this.state.error &&
                    <p className="alert alert-danger">{this.state.error}</p>
                }
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
                                    type="number"
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
                                    type="number"
                                    max="1000000"
                                    value={this.state.savingsValue}
                                    placeholder="Enter text"
                                    onChange={this.handleSavingsChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter an amount less than 1,000,000 in dollar and cent form</HelpBlock>
                            </FormGroup>

                            {/* form that takes in the user's student status */}
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Are You a Student?</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    placeholder="select"
                                    onChange={this.handleStudentSelect}>
                                    <option value="select">select</option>
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
                                    <option value="select">select</option>
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
                                    type="number"
                                    value={this.state.numDependents}
                                    placeholder="Enter text"
                                    onChange={this.handleDependentChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a number or 0 for none</HelpBlock>
                            </FormGroup>

                            {/* form that takes in the number of household members the user has */}
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForHouse()}
                            >
                                <ControlLabel>Number of Members in Your Household</ControlLabel>
                                <FormControl
                                    type="number"
                                    value={this.state.numInHouse}
                                    placeholder="Enter text"
                                    onChange={this.handleHouseChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a number or 0 for none</HelpBlock>
                            </FormGroup>

                            {/* form that takes in the user's employment status */}
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Do You Work Less Than 40 Hours A Week?</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    placeholder="select"
                                    onChange={this.handleEmploymentSelect}>
                                    <option value="select">select</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </FormControl>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="save-cancel-bar">
                        <Button onClick={this.handleClear}>Cancel</Button>
                        <Button disabled={
                            this.getValidationStateForIncome() !== "success" ||
                            this.getValidationStateForSavings() !== "success" ||
                            this.getValidationStateForDependents() !== "success" ||
                            this.getValidationStateForHouse() !== "success" ||
                            this.state.userInfo.dependent === "select" ||
                            this.state.userInfo.empStatus === "select" ||
                            this.state.userInfo.student === "select"}
                            onClick={this.formatForSubmit}>Save</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasicInfo;
