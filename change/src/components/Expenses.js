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
            basicExpenses: ['input-0'],
            /* get user's estimated monthly income from GetUserData */
            /* get user's estimated monthly savings from GetUserData */

            name: '',
        expenses: [{ name: '', value: '' }],
        };
    }

    getValidationStateForCategoryOne() {
        var input = this.state.categoryOne;
        if (this.state.categoryOne === 'Category Name') {
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
        if (this.state.categoryOneValue === 'Enter monetary value here') {
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
        this.setState({ categoryOneChecked: evt.target.checked });
    }

    handleC1IsItChecked() {
        console.log(this.state.categoryOneChecked ? 'Yes' : 'No');
    }

    getValidationStateForCategoryTwo() {
        var input = this.state.categoryTwo;
        if (this.state.categoryTwo === 'Category Name') {
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
        if (this.state.categoryTwoValue === 'Enter monetary value here') {
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
        this.setState({ categoryTwoChecked: evt.target.checked });
    }

    handleC2IsItChecked() {
        console.log(this.state.categoryTwoChecked ? 'Yes' : 'No');
    }

    getValidationStateForCategoryThree() {
        var input = this.state.categoryThree;
        if (this.state.categoryThree === 'Category Name') {
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
        if (this.state.categoryThreeValue === 'Enter monetary value here') {
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
        this.setState({ categoryThreeChecked: evt.target.checked });
    }

    handleC3IsItChecked() {
        console.log(this.state.categoryThreeChecked ? 'Yes' : 'No');
    }

    onSubmitClick(e) {
        console.log("in here!");
        e.preventDefault();
        console.log(e.target);
        this.setState({ basicExpenses: e.target })
    }

    onClick(e) {
        this.setState({ basicExpenses: e.target.id = "additional" });
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
    
      handleAddExpense = () => {
        this.setState({
          expenses: this.state.expenses.concat([{ name: '', value: '' }])
        });
      }
    
      handleRemoveExpense = (idx) => () => {
        this.setState({
          expenses: this.state.expenses.filter((s, sidx) => idx !== sidx)
        });
      }

    render() {
        return (
            <div className='page-container'>
                <h1 className='page-header'>Set Your Expenses </h1>
                <p>
                    Please enter the estimated amount you spend per month on the below expenses
                </p>

                <Row>
                    <Col xs={4}>
                        <p> Estimated monthly income </p>
                        <span>{this.state.income}</span>
                        <p> Estimated monthly savings </p>
                        <span>{this.state.savings}</span>
                    </Col>
                    <Col xs={6}>
                        <form onSubmit={this.handleSubmit}>
                            {/* ... */}
                            <h4>Expenses</h4>

                            {this.state.expenses.map((expense, idx) => (
                                <div className="Expense">
                                    <input
                                        type="text"
                                        placeholder={`Expense #${idx + 1} name`}
                                        value={expense.name}
                                        onChange={this.handleExpenseNameChange(idx)}
                                    />
                                    <input
                                        type="text"
                                        placeholder={`Expense #${idx + 1} Amount`}
                                        value={expense.value}
                                        onChange={this.handleExpenseValueChange(idx)}
                                    />
                                    <button type="button" onClick={this.handleRemoveExpense(idx)} className="small">-</button>
                                </div>
                            ))}
                            <button type="button" onClick={this.handleAddExpense} className="small">Add Expense</button>
                        </form>
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
