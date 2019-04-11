import React, { Component } from 'react';
import PullUpHome from './PullUpHome';
import MaxEffort from './workouts/maxeffort/MaxEffort'
import Pyramid from './workouts/pyramid/Pyramid'
import GripSwitch from './workouts/gripswitch/GripSwitch'
import MaxDay from './workouts/maxday/MaxDay'

class PullUp extends Component{
    state={
        whatToDisplay: 0,
    }
    
    changePullUpView = (view)=>{
        this.setState({whatToDisplay:view})
    }

    render(){
        let whatToRender = null;
        if(this.state.whatToDisplay ===0){
            whatToRender = <PullUpHome changeView={this.props.changeView} changePullUpView={this.changePullUpView}/>
        }
        if(this.state.whatToDisplay ===1){
            whatToRender = <MaxEffort changeView={this.props.changeView}/>
        }
        if(this.state.whatToDisplay ===2){
            whatToRender = <Pyramid changeView={this.props.changeView}/>
        }
        if(this.state.whatToDisplay ===3){
            whatToRender = <GripSwitch changeView={this.props.changeView}/>
        }
        if(this.state.whatToDisplay ===4){
            whatToRender = <MaxDay changeView={this.props.changeView}/>
        }

        return (
            <div className="App">
                {whatToRender}
            </div>
        );
    }
}

export default PullUp;