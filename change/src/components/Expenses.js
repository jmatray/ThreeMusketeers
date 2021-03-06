import React, { Component } from 'react';
import '../App.css';
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
            var data = snapshot.val();
            if (data) {
                moneyValues = {
                    savings: data.savings,
                    income: data.income
                }
                this.setState({ income: moneyValues.income, savings: moneyValues.savings });
            }
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

    getValidationStateForExpenseValue() {
        var input = this.state.expenses["value"]; // msArr["objectId"] !== undefined
        if (this.state.expenses["value"] === undefined) {
            return this.state.expenses["value"];
        }
        var regex = /^\$?\d+(,\d{3})*(\.\d*)?$/; // this could be wrong
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

    updateForm(event) {
        let val = event.target.value;
        let field = event.target.name;
        let change = {};
        var number = Number(val);
        var num = Math.round(number * 100) / 100;
        change[field] = num;
        this.setState(change);
    }

    getValidationStateForHousing() {
        var input = this.state.housing;
        if (this.state.housing.length === 0) {
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

    getValidationStateForUtilities() {
        var input = this.state.utilities;
        if (this.state.utilities.length === 0) {
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

    getValidationStateForFood() {
        var input = this.state.food;
        if (this.state.food.length === 0) {
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

    getValidationStateForTransportation() {
        var input = this.state.transportation;
        if (this.state.transportation.length === 0) {
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

    getValidationStateForMisc() {
        var input = this.state.misc;
        if (this.state.misc.length === 0) {
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
            var number = Number(evt.target.value);
            console.log(number);
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

    render() {
        return (
            <div className='page-container'>
                <h1 className='page-header' id='expenses-header'>Set Your Expenses </h1>
                {this.state.success &&
                    <p className="alert alert-success">{'Successfully Updated Your Expenses'}</p>
                }
                {this.state.error &&
                    <p className="alert alert-danger">{this.state.error}</p>
                }
                <p id="expenses-header">
                    Please enter the estimated amount you spend per month on the below expenses
                </p>

                <Row>
                    <Col xs={4} className="expense-input">
                        <p> Estimated monthly income 
                            <span id="value">{this.state.income}</span>
                        </p>
                        <p> Estimated monthly savings 
                            <span id="value">{this.state.savings}</span>
                        </p>
                    </Col>
                    <Col xs={6}>
                        <form className="format-form" onSubmit={this.handleSubmit}>
                            {/* ... */}
                            <h4>Expenses</h4>
                            <p>All expenses must be under $1,000,000 and in dollar and cent form.</p>
                            <div className="expense-input">
                            <label for="housing">
                                        Housing
                                    </label>
                                    <input
                                        className="input"
                                        type="number"
                                        placeholder={`Amount`}
                                        id="housing"
                                        name="housing"
                                        value={this.state.housing}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    </div>
                                    <div className="expense-input">
                                    <label for="utilities">
                                        Utilities
                                    </label>
                                    <input
                                        className="input"
                                        type="number"
                                        placeholder={`Amount`}
                                        id="utilities"
                                        name="utilities"
                                        value={this.state.utilities}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    </div>
                                    <div className="expense-input">
                                    <label for="food">
                                        Food
                                    </label>
                                    <input
                                        className="input"
                                        type="number"
                                        placeholder={`Amount`}
                                        id="food"
                                        name="food"
                                        value={this.state.food}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    </div>
                                    <div className="expense-input">
                                    <label for="transportation">
                                        Transportation
                                    </label>
                                    <input
                                        className="input"
                                        type="number"
                                        placeholder={`Amount`}
                                        id="transportation"
                                        name="transportation"
                                        value={this.state.transportation}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    </div>
                                    <div className="expense-input">
                                    <label for="miscellaneous">
                                        Miscellaneous
                                    </label>
                                    <input
                                        className="input"
                                        type="number"
                                        placeholder={`Amount`}
                                        id="miscellaneous"
                                        name="misc"
                                        value={this.state.misc}
                                        onChange={(event) => { this.updateForm(event) }}
                                    />
                                    </div>
                            {/* {this.state.expenses.map((expense, idx) => (                               
                                <div className="Expense">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder={`Expense ${idx + 1} name`}
                                        value={expense.name}
                                        onChange={this.handleExpenseNameChange(idx)}
                                    />
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder={`Expense ${idx + 1} Amount`}
                                        value={expense.value}
                                        onChange={this.handleExpenseValueChange(idx)}
                                    />
                                    <button type="button" onClick={this.handleRemoveExpense(idx)} className="small">-</button>
                                </div>
                            ))}

                            <button type="button" onClick={this.handleAddExpense} className="small">Add Expense</button> 

                            <button type="button" onClick={this.handleAddExpense} className="input">Add Expense</button> */}

                            <Col xs={12} className="save-cancel-bar">
                        <Button 
                            className="button"
                            onClick={this.handleClear}>Cancel</Button>

                        <Button disabled={
                            this.getValidationStateForHousing() !== "success" ||
                            this.getValidationStateForUtilities() !== "success" ||
                            this.getValidationStateForFood() !== "success" ||
                            this.getValidationStateForTransportation() !== "success" ||
                            this.getValidationStateForMisc() === "error"}
                            className="button"
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
