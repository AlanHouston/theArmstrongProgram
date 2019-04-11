import React, { Component } from 'react';
import MaxDaySets from './MaxDaySets';
import MaxDayInputs from './MaxDayInputs';

export default class MaxDay extends Component{
    //state stores data from previous workouts
    state={
        date:[],
        reps:[],
        totalSets:[],
        lastSet:[],
        total:[]
    }

    componentDidMount(){
        //fetch call builds these arrays which populates state
        let dateArr=[];
        let repsArr=[];
        let totalSetsArr=[];
        let lastSetArr=[];
        let totalArr=[];
        fetch("https://armstrongserver.herokuapp.com/maxday")
            .then(r=>r.json())
            .then(d=>{
                d.reverse().map(t=>{ //reverse array so data shows most recent data first
                    dateArr.push(t.date)
                    repsArr.push(t.reps)
                    totalSetsArr.push(t.totalSets)
                    lastSetArr.push(t.lastSet)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    reps:repsArr,
                    totalSets:totalSetsArr,
                    lastSet:lastSetArr,
                    total:totalArr
                })
            })
    }

    render(){
        return (
        <div className="App">
            <button className="homeButton" onClick={()=>{this.props.changeView(0)}}>Return to Home</button>
            <h1>DAY 4: MAX DAY</h1>
            <h3>Max number of training sets</h3>
            <h2>REST: 60 seconds</h2>
            {/* input component renders the input forms- upon completion, renders session results */}
            <MaxDayInputs/>
            {/* sets component renders past workout data */}
            <MaxDaySets
                date={this.state.date}
                reps={this.state.reps}
                totalSets={this.state.totalSets}
                lastSet={this.state.lastSet}
                total={this.state.total}
            />
        </div>
        );
    }
}

