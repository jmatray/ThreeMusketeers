import React, { Component } from 'react';
//import './App.css';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox } from 'react-bootstrap';
import firebase from 'firebase';
import { getSavingIncome } from '../firebase/GetUserData';

class Expenses extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleCategoryOneChange = this.handleCategoryOneChange.bind(this);
        this.handleCategoryOneValueChange = this.handleCategoryOneValueChange.bind(this);
        this.handleC1CheckboxChange = this.handleC1CheckboxChange.bind(this);
        this.handleC1IsItChecked = this.handleC1IsItChecked.bind(this)

        this.handleCategoryTwoChange = this.handleCategoryTwoChange.bind(this);
        this.handleCategoryTwoValueChange = this.handleCategoryTwoValueChange.bind(this);
        this.handleC2CheckboxChange = this.handleC2CheckboxChange.bind(this);
        this.handleC2IsItChecked = this.handleC2IsItChecked.bind(this)

        this.handleCategoryThreeChange = this.handleCategoryThreeChange.bind(this);
        this.handleCategoryThreeValueChange = this.handleCategoryThreeValueChange.bind(this);
        this.handleC3CheckboxChange = this.handleC3CheckboxChange.bind(this);
        this.handleC3IsItChecked = this.handleC3IsItChecked.bind(this);

        this.onClick = this.onClick.bind(this)

        var userId = firebase.auth().currentUser.uid;
        var moneyValues = getSavingIncome(userId);
        {/* DUMMY RIGHT NOW
        var savings = moneyValues.savings;
        var income = moneyValues.income;
        */}
        var savings = '$45.00';
        var income = '$350.00';

        this.state = {
            userInfo: {
                
            },
            income: income,
            savings: savings,
            categoryOne: 'Category Name',
            categoryOneValue: 'Enter monetary value here',
            categoryOneChecked: false,
            categoryTwo: 'Category Name',
            categoryTwoValue: 'Enter monetary value here',
            categoryTwoChecked: false,
            categoryThree: 'Category Name',
            categoryThreeValue: 'Enter monetary value here',
            categoryThreeChecked: false,
            basicExpenses: ['input-0']
            /* get user's estimated monthly income from GetUserData */
            /* get user's estimated monthly savings from GetUserData */
        };
    }

    getValidationStateForCategoryOne() {
        var input = this.state.categoryOne;
        if (this.state.categoryOne ==='Category Name') {
            return this.state.categoryOne;
        }
        var regex = /[^a-zA-Z]+/g; // this could be wrong
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleCategoryOneChange(e) {
        this.setState({ categoryOne: e.target.value });
    }

    getValidationStateForCategoryOneValue() {
        var input = this.state.categoryOneValue;
        if (this.state.categoryOneValue ==='Enter monetary value here') {
            return this.state.categoryOneValue;
        }
        var regex = /^\d+(?:\.\d{1,2})?$/; // this could be wrong
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleCategoryOneValueChange(e) {
        this.setState({ categoryOneValue: e.target.value });
    }

    handleCategoryOneChecked(evt) {
        this.setState({ checkboxChecked: evt.target.checked });
      }
      
    handleCategoryOneIsItChecked() {
        console.log(this.state.checkboxChecked ? 'Yes' : 'No');
    }

    handleC1CheckboxChange(evt) {
        this.setState({ categoryOneChecked: evt.target.checked}); 
    }
      
    handleC1IsItChecked() {
        console.log(this.state.categoryOneChecked ? 'Yes' : 'No');
    }

    getValidationStateForCategoryTwo() {
        var input = this.state.categoryTwo;
        if (this.state.categoryTwo ==='Category Name') {
            return this.state.categoryTwo;
        }
        var regex = /[^a-zA-Z]+/g; // this could be wrong
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleCategoryTwoChange(e) {
        this.setState({ categoryTwo: e.target.value });
    }

    getValidationStateForCategoryTwoValue() {
        var input = this.state.categoryTwoValue;
        if (this.state.categoryTwoValue ==='Enter monetary value here') {
            return this.state.categoryOneValue;
        }
        var regex = /^\d+(?:\.\d{1,2})?$/; // this could be wrong
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleCategoryTwoValueChange(e) {
        this.setState({ categoryTwoValue: e.target.value });
    }

    handleCategoryTwoChecked(evt) {
        this.setState({ checkboxChecked: evt.target.checked });
      }
      
    handleCategoryTwoIsItChecked() {
        console.log(this.state.checkboxChecked ? 'Yes' : 'No');
    }

    handleC2CheckboxChange(evt) {
        this.setState({ categoryTwoChecked: evt.target.checked}); 
    }
      
    handleC2IsItChecked() {
        console.log(this.state.categoryTwoChecked ? 'Yes' : 'No');
    }

    getValidationStateForCategoryThree() {
        var input = this.state.categoryThree;
        if (this.state.categoryThree ==='Category Name') {
            return this.state.categoryThree;
        }
        var regex = /[^a-zA-Z]+/g; // this could be wrong
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleCategoryThreeChange(e) {
        this.setState({ categoryThree: e.target.value });
    }

    getValidationStateForCategoryThreeValue() {
        var input = this.state.categoryThreeValue;
        if (this.state.categoryThreeValue ==='Enter monetary value here') {
            return this.state.categoryThreeValue;
        }
        var regex = /^\d+(?:\.\d{1,2})?$/; // this could be wrong
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleCategoryThreeValueChange(e) {
        this.setState({ categoryThreeValue: e.target.value });
    }

    handleCategoryThreeChecked(evt) {
        this.setState({ checkboxChecked: evt.target.checked });
      }
      
    handleCategoryThreeIsItChecked() {
        console.log(this.state.checkboxChecked ? 'Yes' : 'No');
    }

    handleC3CheckboxChange(evt) {
        this.setState({ categoryThreeChecked: evt.target.checked}); 
    }
      
    handleC3IsItChecked() {
        console.log(this.state.categoryThreeChecked ? 'Yes' : 'No');
    }

    onSubmitClick(e) {
        console.log("in here!");
        e.preventDefault();
        console.log(e.target);
        this.setState({basicExpenses: e.target})
    }

    onClick(e) {
        this.setState({basicExpenses: e.target.id="additional"});
    }
    
    render() {
        return (
            <div className='page-container'> 
                <h1 className='page-header'>Set Your Expenses </h1>
                <p>
                    Please enter the estimated amount you spend per month on the below expenses
                </p>    
            
                <Row>
                    <Col xs={6}>    
                        <p> Estimated monthly income </p>
                        <span>{ this.state.income }</span>
                        <p> Estimated monthly savings </p> 
                        <span>{ this.state.savings }</span>
                    </Col>
                    <Col xs={4}>
                    {/*
                    <div id="dynamicInput">
                       {this.state.basicExpenses.map(input => <FormInput key={input} />)}
                   </div>*/}
                        <form className="radio-inline" onSubmit={this.onSubmitClick.bind(this)}>  
                            {/* form that takes in user's expenses per category */}
                            <p>
                                Please name categories of expenses that apply to you and fill in the estimated amount you spend on that category per month. Please check the box on the right of the row if this category of expenses is a necessity.
                            </p> 
                            <FormGroup
                                id="additional"
                                controlId="formBasicText"
                                validationState={this.getValidationStateForCategoryOne()}
                            > 
                                <ControlLabel name="c1">Category One</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.categoryOne}
                                    placeholder="Category name"
                                    onChange={this.handleCategoryOneChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter category name in letters </HelpBlock>
                                
                            </FormGroup>
                            <FormGroup
                                id="additional"
                                controlId="formBasicText"
                                validationState={this.getValidationStateForCategoryOneValue()}
                            >
                                <FormControl
                                    type="text" //does number work?
                                    value={this.state.categoryOneValue}
                                    placeholder="Enter numerical value here"
                                    onChange={this.handleCategoryOneValueChange}
                                    step={0.1}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter the amount you spend on this category per month in numerical values </HelpBlock>
                            </FormGroup>   
                            <ControlLabel id="additional" className="radio-inline"> Is it necessary spending?</ControlLabel>
                            <Checkbox id="additional" className="radio-inline"  
                                checked={this.state.categoryOneChecked}
                                onChange={this.handleC1CheckboxChange}
                            />
                            {/* form that takes in user's expenses per category */}
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForCategoryTwoValue()}
                            > 
                            <ControlLabel>Category Two</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.categoryTwo}
                                    placeholder="Category name"
                                    onChange={this.handleCategoryTwoChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter category name in letters </HelpBlock>
                                
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForCategoryTwoValue()}
                            >
                                <FormControl
                                    type="text" //does number work?
                                    value={this.state.categoryTwoValue}
                                    placeholder="Enter numerical value here"
                                    onChange={this.handleCategoryTwoValueChange}
                                    step={0.1}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter the amount you spend on this category per month in numerical values </HelpBlock>
                            </FormGroup>   
                            <ControlLabel className="radio-inline"> Is it necessary spending?</ControlLabel>
                            <Checkbox className="radio-inline"  
                                checked={this.state.categoryTwoChecked}
                                onChange={this.handleC2CheckboxChange}
                            />  
                            {/* form that takes in user's expenses per category */}
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForCategoryThreeValue()}
                            > 
                            <ControlLabel>Category Three</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.categoryThree}
                                    placeholder="Category name"
                                    onChange={this.handleCategoryThreeChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter category name in letters </HelpBlock>
                                
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationStateForCategoryThreeValue()}
                            >
                                <FormControl
                                    type="text" //does number work?
                                    value={this.state.categoryThreeValue}
                                    placeholder="Enter numerical value here"
                                    onChange={this.handleCategoryThreeValueChange}
                                    step={0.1}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter the amount you spend on this category per month in numerical values </HelpBlock>
                            </FormGroup>   
                            <ControlLabel className="radio-inline"> Is it necessary spending?</ControlLabel>
                            <Checkbox className="radio-inline"  
                                checked={this.state.categoryThreeChecked}
                                onChange={this.handleC3CheckboxChange}
                            />
                            <Button type = "submit"> Save </Button>
                        </form> 
                        <Button onClick={ () => this.appendInput() } onClick={this.onClick}>Add Additional Categories   
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="save-cancel-bar">
                        <Button>Cancel</Button>

                        <Button disabled={
                            this.getValidationStateForCategoryOne() !== "success" ||
                            this.getValidationStateForCategoryOneValue() !== "success" ||
                            this.getValidationStateForCategoryTwo() !== "success" ||
                            this.getValidationStateForCategoryTwoValue() !== "success"}
                            onClick={this.formatForSubmit}>Save</Button>
                    </Col>
                </Row>
            </div>
        );
    }

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState({ basicExpenses: this.state.basicExpenses.concat([newInput]) });
    }
}
export default Expenses;
