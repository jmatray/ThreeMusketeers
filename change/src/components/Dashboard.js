import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import { Row, Col, Table, ProgressBar } from 'react-bootstrap';
import { BarChart, PieChart, Pie, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Bar } from 'recharts';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: [
                { name: 'Savings', value: 70.00,},
                { name: 'Housing', value: 1350.00},
                { name: 'Food', value: 378.00},
                { name: 'Clothes', value: 400.00},
                { name: 'Transportation', value: 200.00}
            ],

            suggested: [
                { name: 'Savings', value: 300.00,},
                { name: 'Housing', value: 1350.00},
                { name: 'Food', value: 300.00},
                { name: 'Clothes', value: 100.00},
                { name: 'Transportation', value: 150.00}
            ],

            thisMonth: [
                { name: 'Savings', value: 100.00,},
                { name: 'Housing', value: 1350.00},
                { name: 'Food', value: 219.00},
                { name: 'Clothes', value: 92.00},
                { name: 'Transportation', value: 90.00}
            ],

            goals: [
                { name: 'goal1', goal: 'To save $100 this month', category: 'savings'},
                { name: 'goal2', goal: 'To only spend $1700 on necesities', category: 'necesity'},
                { name: 'goal3', goal: 'To only spend $300 on discretionary things', category: 'discretionary'}
            ]
        }
    }

    componentDidMount() {
        var comparison = [];

        //populate an overall array that contains expense categories and the different amounts in them
        for (let i = 0; i < this.state.current.length; i++) {
            var progressStatus = '';
            var calc = (this.state.thisMonth[i].value / this.state.suggested[i].value);
            if (.90 <= calc && calc <= .99) {
                progressStatus = 'warning';
            }
            if ( calc > .99 ) {
                progressStatus = 'danger';
            }
            if (calc < .9) {
                progressStatus = 'success';
            }
            comparison[i] = {
                name: this.state.current[i].name,
                current: this.state.current[i].value,
                suggested: this.state.suggested[i].value,
                thisMonth: this.state.thisMonth[i].value,
                progressStyle: progressStatus
            }
        }
        this.setState({comparisons: comparison});
    }

    render() {
    
        //generate rows for the table dynamically
        if (this.state.comparisons !== undefined) {
            var rows = this.state.comparisons.map((row) => {
                return <tr><td>{row.name}</td><td>{row.current}</td><td>{row.suggested}</td><td>{row.thisMonth}</td></tr>
            });
        }
        if (this.state.goals !== undefined) {
            var goals = this.state.goals.map((goal) => {
                
            })
        }
        if (this.state.comparisons !== undefined) {
            var progress = this.state.comparisons.map((row) => {
                var percent = ((row.thisMonth)/(row.suggested) * 100);
                percent = Math.round(percent);
                return <div className="progress-item"><h4 className="progress-title">{row.name}</h4><ProgressBar bsStyle={row.progressStyle} now={percent} label={`${percent}%`}/></div>
            });
        }

        return (
            <div className="dashboard-container">
                
                    {/* container for the goal progress section */}
                    
                        <div className="goals-container">
                            <h2>Goals</h2>
                            {/* progress bar for goal #1 */}
                            <div className="goal-bar">
                                <h4 className="progress-label">Goal #1</h4>
                                <ProgressBar now={40} />
                            </div>
                            {/* progress bar for goal #2 */}
                            <div className="goal-bar">
                                <h4 className="progress-label">Goal #2</h4>
                                <ProgressBar now={75} />
                            </div>
                            {/* progress bar for goal #3 */}
                            <div className="goal-bar">
                                <h4 class="progress-label">Goal #3</h4>
                                <ProgressBar now={20} />
                            </div>
                        </div>
                    

                    {/* container for the pie chart */}
                            <div className="radial-container">
                            <h2>Overall Breakdown</h2>
                            <PieChart width={300} height={300}>
                                <Pie isAnimationActive={true} data={this.state.current} cx={150} cy={150} outerRadius={80} fill="#8884d8" label />
                                <Tooltip />
                            </PieChart>

                        </div>
                   
                        <div className="table-container">
                            <h2>Spending</h2>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Current</th>
                                        <th>Suggested</th>
                                        <th>This Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows}
                                </tbody>

                            </Table>
                        </div>
                    
                    
                        <div className="comparison-container">
                            <BarChart width={400} height={300} data={this.state.comparisons}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend height={8} align='center'/>
                                <Bar dataKey="current" fill="#ff9900" />
                                <Bar dataKey="suggested" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    
                    
                        <div className='progress-container'>
                        <h2>Progress</h2>
                            {progress}
                        </div>
                    

            </div>
        )
    }
}
export default Dashboard;