import React, { Component } from 'react';

export default class PushUpInput extends Component{
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
        let total= Number(this.state.one)
        +Number(this.state.two)
        +Number(this.state.three);
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
                if(!isNaN(this.state.one) && this.state.one !== '' &&
                    !isNaN(this.state.two)&& this.state.two !== '' &&
                    !isNaN(this.state.three)&& this.state.three !== ''){
                    let newSet={
                        method:"POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            date:newDate,
                            one:this.state.one,
                            two:this.state.two,
                            three:this.state.three,
                            total:this.state.total
                        })
                    }
                    //post sends current session data to database and sets state to render, 
                    //submit button calculates total, second .then renders results
                fetch("https://armstrongserver.herokuapp.com/pushup", newSet).then((res)=>{
                    return res.json();
                }).then(this.changeContent(1))
                }}}>
                Set One<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({one:e.target.value})
                }}/><br/>
                Set Two<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({two:e.target.value})
                }}/><br/>
                Set Three<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({three:e.target.value})
                }}/><br/>
                <button className="homeButton" type='submit' onClick={()=>{    
                    this.getTotal();
                }}>Complete Set</button>
            </form>
        }else if(this.state.whatToShow === 1){
            this.content = 
                <p>This Session: 
                    One: {this.state.one}, 
                    Two: {this.state.two}, 
                    Three: {this.state.three}, 
                    Total: {this.state.total}
                </p>
                
        }
            
        return(
            <div>{this.content}</div>
        )
    }
}

