import React from 'react'

export default function PushUpSets(props){
    let showSets;
    if(props.date.length>0){
        // map by date, use array position to correlate other data
        showSets=props.date.map((d,i)=>{
        return <p key={i}>
            {d}: &#40;1&#41;: {props.one[i]}, 
            &#40;2&#41;: {props.two[i]}, 
            &#40;3&#41;: {props.three[i]}, 
            Total: {props.total[i]}
            </p>
        }
        )}
        else showSets=<p>No Past Data Available</p>

        return(
            <div>{showSets}</div>
        )
}

