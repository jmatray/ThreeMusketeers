import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import {Row, Col, Table, ProgressBar} from 'react-bootstrap';
import {BarChart, PieChart, Pie, Tooltip} from 'recharts';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
            {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
            {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

            
        }
    }

    render() {
        return (
            <div className="dashboard-container">
            <Row>
                {/* container for the goal progress section */}
                <Col xs={4}>
                <div className="goals-container">
                <h2>Goals</h2>
                    {/* progress bar for goal #1 */}
                    <div>
                        <h4 class="progress-label">Goal #1</h4>
                        <ProgressBar now={40} />
                    </div>
                    {/* progress bar for goal #2 */}
                    <div>
                        <h4 class="progress-label">Goal #2</h4>
                        <ProgressBar now={75} />
                    </div>
                    {/* progress bar for goal #3 */}
                    <div>
                        <h4 class="progress-label">Goal #3</h4>
                        <ProgressBar now={20} />
                    </div>
                </div>
                </Col>

                {/* container for the pie chart */}
                <Col xs={4}>
                <div className="radial-container">
                    <PieChart width={400} height={400}>
                    <Pie isAnimationActive={true} data={this.state.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                    <Tooltip />
                    </PieChart>

                </div>
                </Col>
            </Row>
            <Row>
                <div className="table-container">
                </div>
                <div className="comparison-container">
                </div>
            </Row>
                <div className="progress-container">
                </div>

            </div>
        )
    }
}
export default Dashboard;