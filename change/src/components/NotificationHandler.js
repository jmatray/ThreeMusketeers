import firebase from 'firebase';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import React, { Component } from 'react';
var ReactDOM = require('react-dom');
var NotificationSystem = require('react-notification-system');


class NotificationHandler extends Component {
    
    constructor(props, context) {
        super(props, context);

        this.handleTypeSelect = this.handleTypeSelect.bind(this);
        this.handleFreqSelect = this.handleFreqSelect.bind(this);
        this.toggleSuccess = this.toggleSuccess.bind(this);
        
        this.state = {
            notType: '',
            notFreq: '',
            success: '',
            error: ''
        };
    }

    toggleSuccess() {
        if (this.state.notType == '' || this.state.notType == '') {
            this.setState({ error: "Please complete both forms", success: !this.state.success });
        } else {
            this.setState({
                success: true
            })
        }
    }
    
    handleTypeSelect(e) {
        this.setState({ notType: e.target.value });
    }

    handleFreqSelect(e) {
        this.setState({ freqType: e.target.value });
    }

    componentDidMount() {
        this.state.notficationSystem = this.refs.notificationSystem;
    }

    render() {
        return (
            <div className="page-container">
                <h1 className="page-header">
                    Notification Settings
                </h1>
                {this.state.success &&
                    <p className="alert alert-success">{'Successfully Set Notifications'}</p>
                }
                {this.state.error &&
                    <p className="alert alert-danger">{this.state.error}</p>
                }
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>How would like to recieve notifications?</ControlLabel>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleTypeSelect}>
                        <option value="select">select</option>
                        <option value="email">Through Email</option>
                        <option value="browser">Through Browser</option>
                    </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>How often would you like to recieve notifications?</ControlLabel>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleFreqSelect}>
                        <option value="select">select</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </FormControl>
                </FormGroup>
                <Button onClick={this.toggleSuccess}>Add Notifications</Button>
            </div>
        )
    }
}
export default NotificationHandler;