import React, { Component } from 'react';
import PyramidSets from './PyramidSets'
import PyramidInputs from './PyramidInputs';

class Pyramid extends Component{
    //state stores data from previous workouts
    state={
        date:[],
        missed:[],
        last:[],
        max:[],
        total:[]
    }
    
    componentDidMount(){
        //fetch call builds these arrays which populates state
        let dateArr=[]
        let missedArr=[];
        let lastArr=[];
        let maxArr=[];
        let totalArr=[];
        fetch("https://armstrongserver.herokuapp.com/pyramid")
            .then(r=>r.json())
            .then(d=>{
                d.reverse().map(t=>{ //reverse array so data shows most recent data first
                    dateArr.push(t.date)
                    missedArr.push(t.missedSet)
                    lastArr.push(t.lastSet)
                    maxArr.push(t.max)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    missed:missedArr,
                    last:lastArr,
                    max:maxArr,
                    total:totalArr
                })
            })
    }

    render(){
        
        return (
            <div className="App">
                <button className="homeButton" onClick={()=>{this.props.changeView(0)}}>Return to Home</button>
                <h1>DAY 2: PYRAMID</h1>
                <h3>Pyramid of sets of 1, 2, 3, 4, etc. until missed set</h3>
                <h3>Then one max set</h3>
                <h2>REST: 10 seconds per pull-up in last set</h2>
                {/* input component renders the input forms- upon completion, renders session results */}
                <PyramidInputs />
                {/* sets component renders past workout data */}
                <PyramidSets 
                    date={this.state.date} 
                    missed={this.state.missed} 
                    last={this.state.last} 
                    max={this.state.max} 
                    total={this.state.total}
                />
            </div>
            );
        }
}

export default Pyramid;
