import React from 'react'

export default function MaxDaySets(props){
    let showSets;
    if(props.date.length>0){
        // map by date, use array position to correlate other data
        showSets=props.date.map((d,i)=>{    
        return <p key={i}>
            {d}: {props.totalSets[i]} Full sets of {props.reps[i]}, 
            Remainder {props.lastSet[i]},
            Total {props.total[i]}
            </p>
    }
    )}
    else showSets=<p>No Past Data Available</p>

    return(
        <div>{showSets}</div>
    )
}