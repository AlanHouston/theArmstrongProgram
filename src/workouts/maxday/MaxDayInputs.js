import React, { Component } from 'react';

export default class MaxDay extends Component{
    state={
        whatToShow:0 //whatToShow: 0 renders inputs, 1 renders results upon completion 
    }

    content={}
    //content alternates between rendering inputs and session results
    changeContent=(x)=>{
        this.setState({whatToShow:x})
    }

    // formula to calculate total number of pullups per session
    getTotal=()=>{
        let total=Number(this.state.reps) * Number(this.state.totalSets) + Number(this.state.lastSet);
        this.setState({total});
    }

    render(){
        var date = new Date();
        var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

        if(this.state.whatToShow === 0){
            this.content=
            <form onSubmit={(e)=>{
                e.preventDefault();
                // conditionals to validate inputs, empty string to prevent deleted inputs from validating
                if(!isNaN(this.state.reps) && this.state.reps !== '' &&
                    !isNaN(this.state.totalSets) && this.state.totalSets !== '' &&
                    !isNaN(this.state.lastSet) && this.state.lastSet !== ''){
                    let newSet={
                        method:"POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            date:newDate,
                            reps:this.state.reps,
                            totalSets:this.state.totalSets,
                            lastSet:this.state.lastSet,
                            total:this.state.total
                        })
                    }
                    //post sends current session data to database and sets state to render, 
                    //submit button calculates total, second .then renders results
                fetch("https://armstrongserver.herokuapp.com/maxday", newSet).then((res)=>{
                    return res.json().then(this.changeContent(1));
                })
                }}}>
                Reps per Set<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({reps:e.target.value})
                }}/>
                <br/>

                Total Number of Complete Sets<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({totalSets:e.target.value})
                }}/>
                <br/>

                If your final set was incomplete, how many reps did you complete?<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({lastSet:e.target.value})
                }}/><br/>

                <button className="homeButton" type='submit' onClick={()=>{
                    this.getTotal();
                }}>Complete Set</button>
            </form>
        }
        else if(this.state.whatToShow === 1){
            this.content = 
                <div>
                    <p>This Session: {this.state.totalSets} Full Sets of {this.state.reps},
                        Remainder: {this.state.lastSet}, 
                        Total: {this.state.total}
                    </p>
                    {/* Will need to move the fetch call to the Home button when implementing edit button */}
                </div>
        }
        return(
            <div>{this.content}</div>
        )
    }






}