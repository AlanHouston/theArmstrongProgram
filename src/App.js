import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import PullUp from './PullUp'
import PushUp from './workouts/pushup/PushUp'
// import Stats from './stats/index'


class App extends Component {
  state={
    whatToDisplay: 0,
  }
// controls view between home >> pushup vs pullup
  changeView = (view)=>{
    this.setState({whatToDisplay:view})
  }

  render() {
    let whatToRender = null;
    if(this.state.whatToDisplay === 0){
      whatToRender = <Home changeView={this.changeView}/>
    }
    else if(this.state.whatToDisplay === 1){
      whatToRender = <PullUp changeView={this.changeView}/>
    }
    else if(this.state.whatToDisplay === 2){
      whatToRender = <PushUp changeView={this.changeView}/>
    }
    // else if(this.state.whatToDisplay === 3){
    //   whatToRender = <Stats changeView={this.changeView}/>
    // }
    return (
      <div className="App">
        {whatToRender}
      </div>
    );
  }
}

export default App;
