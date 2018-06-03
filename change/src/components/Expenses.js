import React, { Component } from 'react';
//import './App.css';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox } from 'react-bootstrap';
import firebase from 'firebase';
import { getUserId } from './DataHandler';
import { submitExpenseInfo } from '../firebase/GetUserData';

class Expenses extends Component {
    constructor(props, context) {
        super(props, context);

        this.getValidationStateForExpenseName = this.getValidationStateForExpenseName.bind(this);
        this.getValidationStateForExpenseValue = this.getValidationStateForExpenseValue.bind(this);
        this.formatForSubmit = this.formatForSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.onClick = this.onClick.bind(this);


        this.state = {
            userInfo: {
                
            },

            income: '',
            savings: '',
            basicExpenses: ['input-0'],
            /* get user's estimated monthly income from GetUserData */
            /* get user's estimated monthly savings from GetUserData */
            success: false,
            name: '',
        housing: '',
        utilities: '',
        food: '',
        transportation: '',
        misc: '',
        expenses: [{ name: '', value: '' }],
        };
    }

    componentDidMount() {
        let userId = getUserId();
        firebase.database().ref(userId).child('basicInfo').on('value', (snapshot) => {
            var moneyValues = {};
            moneyValues = {
                savings: snapshot.val().savings,
                income: snapshot.val().income
            }
            this.setState({income: moneyValues.income, savings: moneyValues.savings});
        });
    }    

    getValidationStateForExpenseName() {
        var input = this.state.expenses.name; // msArr["objectId"] !== undefined
        if (this.state.expenses.name === undefined) {
            return this.state.expenses.name;
        }
        var regex = /[^a-zA-Z]+/g; // this could be wrong 
        var numNum = +input;
        if (isNaN(numNum)) {
            return 'success';
        } else {
            return 'success';
        }
    }

    getValidationStateForCategoryOne() {
        var input = this.state.categoryOne;
        if (this.state.categoryOne ==='Category Name') {
            return this.state.categoryOne;
        }
        var regex = /[^a-zA-Z]+/g; // this could be wrong 
        var numNum = +input;
        if (isNaN(numNum)) {
            return 'success';

        } else {
            return 'success';
        }
    }

    getValidationStateForExpenseValue(idx) {
        var input = this.state.expenses[idx].value; // msArr["objectId"] !== undefined
        console.log(input)
        if (this.state.expenses[idx].value === '') {
            return 'error';
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/; // this could be wrong
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
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    getValidationStateForUtilities() {
        var input = this.state.utilities;
        if (this.state.utilities.length === 0) {
            return null;
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    getValidationStateForFood() {
        var input = this.state.food;
        if (this.state.food.length === 0) {
            return null;
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    getValidationStateForTransportation() {
        var input = this.state.transportation;
        if (this.state.transportation.length === 0) {
            return null;
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    handleExpenseNameChange = (idx) => (evt) => {
        const newExpenses = this.state.expenses.map((expense, sidx) => {
            if (idx !== sidx) return expense;
            return { ...expense, name: evt.target.value };
        });

        this.setState({ expenses: newExpenses });
    }

    handleExpenseValueChange = (idx) => (evt) => {
        const newExpenses = this.state.expenses.map((expense, sidx) => {
            if (idx !== sidx) return expense;
            return { ...expense, value: evt.target.value };
        });

        this.setState({ expenses: newExpenses });
    }

    handleSubmit = (evt) => {
        const { name, expenses } = this.state;
        alert(`Incorporated: ${name} with ${expenses.length} Expenses`);
    }

    // handleAddExpense = () => {
    //     this.setState({
    //         expenses: this.state.expenses.concat([{ name: '', value: '' }]),
    //         maxIndex: this.state.expenses.length + 1
    //   }
    
    // handleAddExpense = () => {
    //     this.setState({
    //         expenses: this.state.expenses.concat([{ name: '', value: '' }])
    //     });
    // }

    // handleRemoveExpense = (idx) => () => {
    //     this.setState({
    //         expenses: this.state.expenses.filter((s, sidx) => idx !== sidx)
    //     });
    // }
    // handleCheck = (idx) => (evt) => {
    //     console.log('here')
    //     console.log(evt.target.value)
    //     const newExpenses = this.state.expenses.map((expense, sidx) => {
    //         if (idx !== sidx) return expense;
    //         return { ...expense, type: evt.target.value };
    //     });
    //     this.setState({ expenses: newExpenses });
    // }
    //     });
    // }

    handleClear() {
        this.setState({
            housing: '',
            utilities: '',
            food: '',
            transportation: '',
            misc: '',
        });
    }

    toggleSuccess() {
        if (this.state.error) {
            this.setState({ error: !this.state.error })
        }
        this.setState({
            success: true
        })
    }


    //Fills out userData object and calls the submitBasicInfo() function.
    //This then passes the data to the GetUserData component.
    formatForSubmit(event) {
        event.preventDefault();
        // let dataObject = { ...this.state.userInfo };
        // dataObject.expenses = this.state.expenses;
        var userId = firebase.auth().currentUser.uid;
        console.log(this.state.expenses)
        submitExpenseInfo(userId, this.state.expenses, 'expenseInfo');
        let submitable = this.handleError();
        let dataObject = {};
        dataObject.housing = this.state.housing;
        dataObject.transportation = this.state.transportation;
        dataObject.food = this.state.food;
        dataObject.utilities = this.state.utilities;
        dataObject.misc = this.state.misc;
        var userId = firebase.auth().currentUser.uid;
        submitExpenseInfo(userId, dataObject, 'expenseInfo').then(() => {
            this.toggleSuccess();
            this.handleClear();
        }).catch((error) => {
            this.setState({ error: error.message });
        });

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
                {this.state.success &&
                    <p className="alert alert-success">{'Successfully Updated Your Expenses'}</p>
                }
                {this.state.error &&
                    <p className="alert alert-danger">{this.state.error}</p>
                }
                <p>
                    Please enter the estimated amount you spend per month on the below expenses
                </p>    
            
               
                    <Col xs={6}>    
                        <p> Estimated monthly income </p>
                        <span>{ this.state.income }</span>
                        <p> Estimated monthly savings </p> 
                        <span>{ this.state.savings }</span>
                    </Col>
                    <Col xs={6}>
                        <form onSubmit={this.handleSubmit}>
                            {/* ... */}
                            <h4>Expenses</h4>
                            <label for="housing">
                                        Housing
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Amount`}
                                        id="housing"
                                        name="housing"
                                        value={this.state.housing}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    <label for="utilities">
                                        Utilities
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Amount`}
                                        id="utilities"
                                        name="utilities"
                                        value={this.state.utilities}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    <label for="food">
                                        Food
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Amount`}
                                        id="food"
                                        name="food"
                                        value={this.state.food}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    <label for="transportation">
                                        Transportation
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Amount`}
                                        id="transportation"
                                        name="transportation"
                                        value={this.state.transportation}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    <label for="miscellaneous">
                                        Miscellaneous
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Amount`}
                                        id="miscellaneous"
                                        name="misc"
                                        value={this.state.misc}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                            {this.state.expenses.map((expense, idx) => (                               
                                <div className="Expense">
                                    <FormGroup
                                        controlId="formBasicText"
                                        validationState={this.getValidationStateForExpenseName(idx)}
                                    >
                                        <ControlLabel>Expense Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={expense.name}
                                            placeholder="Enter text"
                                            onChange={this.handleExpenseNameChange(idx)}
                                        />
                                        <FormControl.Feedback />
                                        <HelpBlock>Please enter a name for this expense</HelpBlock>
                                    </FormGroup>
                                    <FormGroup
                                        controlId="formBasicText"
                                        validationState={this.getValidationStateForExpenseValue(idx)}
                                    >
                                        <ControlLabel>Expense value</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={expense.value}
                                            placeholder="Enter expense amount"
                                            onChange={this.handleExpenseValueChange(idx)}
                                        />
                                        <FormControl.Feedback />
                                        <HelpBlock>Please enter amount in dollar and cent form</HelpBlock>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Is this Expense a necessity?</ControlLabel>
                                    <Checkbox onChange={this.handleCheck(idx)} name='expense-type' value='necessity'>
                                        Yes
                                    </Checkbox>
                                    <Checkbox onChange={this.handleCheck(idx)} name='expense-type' value='discretionary'>
                                        No
                                    </Checkbox>
                                    </FormGroup>
                                    <button type="button" onClick={this.handleRemoveExpense(idx)} className="small">- Remove Expense</button>
                                </div>
                            ))}
                            <button type="button" onClick={this.handleAddExpense} className="small">Add Expense</button>
                            <Col xs={12} className="save-cancel-bar">
                                <Button>Cancel</Button>

                                <Button

                                    onClick={this.formatForSubmit}>Save</Button>
                            </Col>
                        </form>
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
            </div>
        );
    }

}
export default Expenses;
