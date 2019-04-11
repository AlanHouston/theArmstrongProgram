import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';

export default class MaxEffortInput extends Component{
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
        let total= Number(this.state.repsOne)
        +Number(this.state.repsTwo)
        +Number(this.state.repsThree)
        +Number(this.state.repsFour)
        +Number(this.state.repsFive);
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
                if(!isNaN(this.state.repsOne) && this.state.repsOne !== '' &&
                    !isNaN(this.state.repsTwo) && this.state.repsTwo !== '' &&
                    !isNaN(this.state.repsThree) && this.state.repsThree !== '' &&
                    !isNaN(this.state.repsFour) && this.state.repsFour !== '' &&
                    !isNaN(this.state.repsFive) && this.state.repsFive !== ''){
                        let newSet={
                            method:"POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({
                                date:newDate,
                                setOne:this.state.repsOne,
                                setTwo:this.state.repsTwo,
                                setThree:this.state.repsThree,
                                setFour:this.state.repsFour,
                                setFive:this.state.repsFive,
                                total:this.state.total
                            })
                        }
                        //post sends current session data to database and sets state to render, 
                        //submit button calculates total, second .then renders results
                    fetch("https://armstrongserver.herokuapp.com/maxeffort", newSet)
                    .then((res)=>{return res.json();})
                    .then(this.changeContent(1));
                }}}>
                Set One<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsOne:e.target.value})
                }}/><br/>
                Set Two<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsTwo:e.target.value})
                }}/><br/>
                Set Three<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsThree:e.target.value})
                }}/><br/>
                Set Four<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsFour:e.target.value})
                }}/><br/>
                Set Five<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsFive:e.target.value})
                }}/><br/>
                <button className="homeButton" type='submit' onClick={()=>{    
                        this.getTotal();
                }}>Complete Set
                </button>
            </form>
        }else if(this.state.whatToShow === 1){
            this.content = 
                <p>This Session: 
                    &#40;1&#41;: {this.state.repsOne}, 
                    &#40;2&#41;: {this.state.repsTwo}, 
                    &#40;3&#41;: {this.state.repsThree}, 
                    &#40;4&#41;: {this.state.repsFour}, 
                    &#40;5&#41;: {this.state.repsFive}, 
                    Total: {this.state.total}
                </p>
                
        }
            
        return(
            <div>{this.content}</div>
        )
    }
}
