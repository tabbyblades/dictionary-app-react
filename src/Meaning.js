import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css"

export default function Meaning(props){
    return(
<div className="meaning">
    <h2>
        {props.meanings.partOfSpeech}
    </h2>
   {props.meanings.definitions.map(function(definition,index){
    return(
        <div key={index}>
            <p>{definition.definition}
            <br/>
            <em>{definition.example}</em>
         </p>
            <Synonyms synonyms={definition.synonyms}/>
            </div>);
        })}</div>);}
