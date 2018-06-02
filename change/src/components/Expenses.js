import React, { Component } from 'react';
//import './App.css';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox } from 'react-bootstrap';
import firebase from 'firebase';
import { getSavingIncome } from '../firebase/GetUserData';

class Expenses extends Component {
    constructor(props, context) {
        super(props, context);

        this.getValidationStateForExpenseName = this.getValidationStateForExpenseName.bind(this);
        this.getValidationStateForExpenseValue = this.getValidationStateForExpenseValue.bind(this);

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
            basicExpenses: ['input-0'],
            /* get user's estimated monthly income from GetUserData */
            /* get user's estimated monthly savings from GetUserData */

            name: '',
        expenses: [{ name: '', value: '' }],
        };
    }

    

    getValidationStateForExpenseName() {
        var input = this.state.expenses.name; // msArr["objectId"] !== undefined
        if (this.state.expenses.name === undefined) {
            return this.state.expenses.name;
        }
        var regex = /[^a-zA-Z]+/g; // this could be wrong 
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
    }

    getValidationStateForExpenseValue() {
        var input = this.state.expenses["value"]; // msArr["objectId"] !== undefined
        if (this.state.expenses["value"] === undefined) {
            return this.state.expenses["value"];
        }
        var regex = /^\d+(?:\.\d{1,2})?$/; // this could be wrong
        if (regex.test(input)) {
            return 'success';
        } else {
            return 'error';
        }
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
                                        placeholder={`Expense ${idx + 1} name`}
                                        value={expense.name}
                                        onChange={this.handleExpenseNameChange(idx)}
                                    />
                                    <input
                                        type="text"
                                        placeholder={`Expense ${idx + 1} Amount`}
                                        value={expense.value}
                                        onChange={this.handleExpenseValueChange(idx)}
                                    />
                                    <button type="button" onClick={this.handleRemoveExpense(idx)} className="small">-</button>
                                </div>
                            ))}
                            <button type="button" onClick={this.handleAddExpense} className="small">Add Expense</button>
                            <Col xs={12} className="save-cancel-bar">
                        <Button>Cancel</Button>

                        <Button disabled={
                            this.getValidationStateForExpenseName() !== "success" ||
                            this.getValidationStateForExpenseValue() !== "success"}
                            onClick={this.formatForSubmit}>Save</Button>
                    </Col>
                        </form>
                    </Col>
                </Row>
                <Row>
                    
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
