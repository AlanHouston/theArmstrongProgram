import React from 'react'

function Home(props){
    return (
        <div className="App">
            <button className="buttonStyle" id="topButton" onClick={()=>props.changeView(1)}>Pull Ups!</button>
            <br/>
            <button className="buttonStyle" onClick={()=>props.changeView(2)}>Push Ups!</button>
            <br/>
            <div id="infoStyle">For more detailed info and instructions, </div>
            <div>visit the Armstrong Pullup Program home page:</div>
            <br/>
            <a className="homeButton" id="armHomeStyle" href="https://www.savannahstate.edu/cost/nrotc/documents/Inform2010-thearmstrongworkout_Enclosure15_5-2-10.pdf" target="_blank">Armstrong Program</a>
        </div>
    );
}

export default Home;
