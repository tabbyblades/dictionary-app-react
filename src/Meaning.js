import React from "react";

export default function Meaning(props){
    return(
<div className="meaning">
    <h3>
        {props.meanings.partOfSpeech}
    </h3>
    <p>
        {props.meanings.definitions[0].definition}
    </p>
<p>
        {props.meanings.definitions[0].example}
    </p>
</div>
    );
}