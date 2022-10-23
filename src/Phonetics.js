import React from "react";
import "./Dictionary.css";

export default function Phonetics (props){
return(
        <div className="phonetics">
            {props.phonetic.text} <a href={props.phonetic.audio} target="_blank" rel="noreferrer"> listen 🔊 </a>
        </div>
    );
}