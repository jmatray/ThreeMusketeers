import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import { Row, Col, Table, ProgressBar } from 'react-bootstrap';
import { BarChart, PieChart, Pie, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Bar } from 'recharts';
import {getUserId, formatExpenses, formatGoals, getSuggestion} from './DataHandler';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            goals: {}
        }
    }

    componentDidMount() {
        var comparison = [];
        let userId = getUserId();
        firebase.database().ref(userId).once('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({
                 current: formatExpenses(data),
                 goals: formatGoals(data),
                 suggested: getSuggestion(data)
                 });
            getSuggestion(data);
        }).then(() => {
            console.log(this.state.goals);
            //populate an overall array that contains expense categories and the different amounts in them
            for (let i = 0; i < this.state.current.length; i++) {
                var progressStatus = '';
                var calc = (this.state.current[i].value / this.state.suggested[i].value);
                console.log(calc);
                if (.90 <= calc && calc <= .99) {
                    progressStatus = 'warning';
                }
                if (calc > .99) {
                    progressStatus = 'danger';
                }
                if (calc < .9) {
                    progressStatus = 'success';
                }
                comparison[i] = {
                    name: this.state.suggested[i].name,
                    current: this.state.current[i].value,
                    suggested: this.state.suggested[i].value,
                    progressStyle: progressStatus
                }
            }
            this.setState({ comparisons: comparison });
        });

    }

    render() {
    
        //generate rows for the table dynamically
        if (this.state.comparisons !== undefined) {
            var rows = this.state.comparisons.map((row) => {
                return <tr><td>{row.name}</td><td>{row.current}</td><td>{row.suggested}</td><td>{row.thisMonth}</td></tr>
            });
        }
        if (this.state.comparisons !== undefined) {
            var progress = this.state.comparisons.map((row) => {
                var percent = ((row.current)/(row.suggested) * 100);
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
                                <h4 className="progress-label">Savings</h4>
                                <ProgressBar now={this.state.goals.savings} label={`${this.state.goals.savings}%`}/>
                            </div>
                            {/* progress bar for goal #2 */}
                            <div className="goal-bar">
                                <h4 className="progress-label">Necessities</h4>
                                <ProgressBar now={this.state.goals.necessary} label={`${this.state.goals.necessary}%`} />
                            </div>
                            {/* progress bar for goal #3 */}
                            <div className="goal-bar">
                                <h4 class="progress-label">Discretionaries</h4>
                                <ProgressBar now={this.state.goals.discretionary} label={`${this.state.goals.discretionary}%`} />
                            </div>
                        </div>
                    
                    {/* container for the pie chart */}
                            <div className="radial-container">
                            <h2>Overall Breakdown</h2>
                            <PieChart width={300} height={300}>
                                <Pie isAnimationActive={true} data={this.state.current} dataKey="value" nameKey="name" cx={150} cy={150} outerRadius={80} fill="#8884d8" label />
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