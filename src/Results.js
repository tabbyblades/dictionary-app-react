import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results (props){
    if (props.results){
    return(
        <div className="results">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index){
                return(
                    <div key={index}>
                        <Phonetics phonetic={phonetic} />
                        <br/>
                        </div>
                );
            })}
        {props.results.meanings.map(function(meaning, index){
            return(
                <div key={index}>
                    <Meaning meanings={meaning} />
                </div>
            );
            })}
        </div>
    );
}
else{
    return null;
}}