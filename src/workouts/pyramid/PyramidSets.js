import React from 'react'

export default function PyramidSets(props){
    let showSets;
    if(props.date.length>0){
        // map by date, use array position to correlate other data
        showSets=props.date.map((d,i)=>{
        return <p key={i}>
            {d}: Trying {props.missed[i]}, 
            Failed on: {props.last[i]}, 
            Max: {props.max[i]}, 
            Total: {props.total[i]}
            </p>
    }
    )}
    else showSets=<p>No Past Data Available</p>

    return(
        <div>{showSets}</div>
    )
}