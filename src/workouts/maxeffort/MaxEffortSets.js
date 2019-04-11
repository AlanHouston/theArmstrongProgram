import React from 'react'

function MaxEffortSets(props){
    let showSets;
    if(props.date.length>0){
        // map by date, use array position to correlate other data
        showSets=props.date.map((d,i)=>{
        return <p key={i}>
            {d}: &#40;1&#41;: {props.setOne[i]}, 
            &#40;2&#41;: {props.setTwo[i]}, 
            &#40;3&#41;: {props.setThree[i]}, 
            &#40;4&#41;: {props.setFour[i]}, 
            &#40;5&#41;: {props.setFive[i]}, 
            Total: {props.total[i]}
            </p>
        }
        )}
        else showSets=<p>No Past Data Available</p>

        return(
            <div>{showSets}</div>
        )
}

export default MaxEffortSets;