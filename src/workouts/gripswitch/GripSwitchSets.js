import React from 'react'

function GripSwitchSets(props){
    let showSets;
    if(props.date.length>0){
        // map by date, use array position to correlate other data
        showSets=props.date.map((d,i)=>{
        return <p key={i}>
            {d}: Overhand Reps: {props.overHandSets[i]} sets of {props.overHandReps[i]}; 
            Inward Facing Reps:{props.inwardSets[i]} sets of {props.inwardReps[i]};
            Wide Grip Reps: {props.wideSets[i]} sets of {props.wideReps[i]};
            Total: {props.total[i]}
            </p>
        }
        )}
        else showSets=<p>No Past Data Available</p>

        return(
            <div>{showSets}</div>
        )
}

export default GripSwitchSets;