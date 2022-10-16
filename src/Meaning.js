import React from "react";
import Synonyms from "./Synonyms";

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
            <br/> </p>
            <Synonyms synonyms={definition.synonyms}/>
            </div>);
        })}</div>);}
