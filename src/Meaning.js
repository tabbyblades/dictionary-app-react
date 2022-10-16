import React from "react";

export default function Meaning(props){
    return(
<div className="meaning">
    <h3>
        {props.meanings.partOfSpeech}
    </h3>
   {props.meanings.definitions.map(function(definition,index){
    return(
        <div key={index}>
            <p>{definition.definition}
            <br/>
            <em>{definition.example}</em>
            </p>
            </div>);
        })}</div>);}
