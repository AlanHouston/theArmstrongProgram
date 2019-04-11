import React, { Component } from 'react';
import PushUpSets from './PushUpSets';
import PushUpInput from './PushUpInput';


export default class PushUp extends Component{
    state={
        date:[],
        one:[],
        two:[],
        three:[],
        total:[],
    }

    componentDidMount(){
        let dateArr=[];
        let oneArr=[];
        let twoArr=[];
        let threeArr=[];
        let totalArr=[];
        fetch("https://armstrongserver.herokuapp.com/pushup")
            .then(r=>r.json())
            .then(d=>{
                d.reverse().map(t=>{
                    dateArr.push(t.date)
                    oneArr.push(t.one)
                    twoArr.push(t.two)
                    threeArr.push(t.three)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    one:oneArr,
                    two:twoArr,
                    three:threeArr,
                    total:totalArr
                })
            })
    }

    render(){
        return(
            <div className="App">
                <button className="homeButton" onClick={()=>{this.props.changeView(0)}}>Return to Home</button>
                <h1>EVERY DAY!</h1>
                <h3>3 max effort sets</h3>
                <h3>Push Ups should be done when you start your day</h3>
                <h3>Each set should be separated by at least 10 minutes</h3>
                <PushUpInput/>
                <PushUpSets
                    date={this.state.date} 
                    one={this.state.one} 
                    two={this.state.two} 
                    three={this.state.three} 
                    total={this.state.total}
                />
            </div>
        )
    }
}