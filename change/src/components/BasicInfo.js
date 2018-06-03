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
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    getValidationStateForDependents() {
        var input = this.state.numDependents;
        if (this.state.numDependents.length === 0) {
            return null;
        }
        var numNum = +input;
        if (isNaN(numNum)) {
            return 'error';
        } else {
            return 'success';
        }
    }

    getValidationStateForHouse() {
        var input = this.state.numInHouse;
        if (this.state.numInHouse.length === 0) {
            return null;
        }
        var numNum = +input;
        if (isNaN(numNum)) {
            return 'error';
        } else {
            return 'success';
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

    // Handles changing input value for the number of household members form
    handleHouseChange(e) {
        this.setState({ numInHouse: e.target.value });
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
        }).catch((error) => {
            this.setState({ error: error.message });
        })
    }

    toggleSuccess() {
        if (this.state.error) {
            this.setState({ error: !this.state.error })
        }
        this.setState({
            success: !this.state.success
        })
    }


    render() {
        return (
            <div className='page-container'>
                <h1 className='page-header'>Basic Information</h1>
                {this.state.success &&
                    <p className="alert alert-success">{'Successfully Updated Your Expenses'}</p>
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
                                    type="text"
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
                                    type="text"
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
                        <Button>Cancel</Button>
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
