import React from "react";

export default function Phonetics (props){
return(
        <div className="phonetics">
            {props.phonetic.text}
        </div>
    );
}