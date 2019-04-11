import React, { Component } from 'react';

export default class GripSwitchInputs extends Component{
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
        let total=Number(this.state.over)*Number(this.state.wideSets)
        +Number(this.state.in)*Number(this.state.inSets)
        +Number(this.state.wide)*Number(this.state.wideSets);
        this.setState({total})
    }

    render(){
        var date = new Date();
        var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

        if(this.state.whatToShow === 0){
            this.content=
            <form onSubmit={(e)=>{
                e.preventDefault();
                // conditionals to validate inputs, empty string to prevent deleted inputs from validating
                if(!isNaN(this.state.over) && this.state.over !== '' &&
                    !isNaN(this.state.in) && this.state.in !== '' &&
                    !isNaN(this.state.wide) && this.state.wide !== '' &&
                    !isNaN(this.state.overSets) && this.state.overSets !== '' &&
                    !isNaN(this.state.inSets) && this.state.insets !== '' &&
                    !isNaN(this.state.wideSets)) {
                    let newSet={
                        method:"POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            date:newDate,
                            overHandReps:this.state.over,
                            inwardReps:this.state.in,
                            wideReps:this.state.wide,
                            overHandSets:this.state.overSets,
                            inwardSets:this.state.inSets,
                            wideSets:this.state.wideSets,
                            total:this.state.total
                        })
                    }
                    //post sends current session data to database and sets state to render, 
                    //submit button calculates total, second .then renders results
                fetch("https://armstrongserver.herokuapp.com/gripswitch", newSet).then((res)=>{
                    return res.json().then(this.changeContent(1));
                })
                }}}>

                Reps per Overhand Set<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({over:e.target.value})
                }}/>
                <br/>

                Total Overhand Sets<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({overSets:e.target.value})
                }}></input>
                <br/>

                Reps per Inward Facing Set<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({in:e.target.value})
                }}/>
                <br/>

                Total Inward Facing Sets<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({inSets:e.target.value})
                }}></input>
                <br/>

                Reps per Wide Grip Set<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({wide:e.target.value})
                }}/>
                <br/>

                Total Wide Grip Sets<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({wideSets:e.target.value})
                }}></input>
                <br/>
                {/* data from these inputs will individually line up differently when rendering: y sets of x */}

                <button className="homeButton" type='submit' onClick={()=>{
                    this.getTotal();
                }}>Complete Set</button>
            </form>
        }
        else if(this.state.whatToShow === 1){
            this.content = 
                <div>
                    <p>This Session: 
                        Overhand: {this.state.overSets} Sets of {this.state.over};
                        Inward Facing: {this.state.inSets} Sets of {this.state.in};
                        Wide Grip: {this.state.wideSets} Sets of {this.state.wide};
                        Total: {this.state.total}
                    </p>
                </div>
        }

        return(
            <div>{this.content}</div>
        )
    }
}


