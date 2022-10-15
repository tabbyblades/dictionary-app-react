import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [KeyWord, setKeyWord] = useState(" ");
    let [results, setResults] = useState(null);

function handleSubmit (event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${KeyWord}`;
axios.get(apiUrl).then(handleResponse);
}

function updateKeyWord (event){
 setKeyWord(event.target.value);
}

function handleResponse(response){
    console.log(response.data[0]);
    setResults(response.data[0]);
}


    return(
 <div className="Dictionary">
<h1>Dictionary</h1>
<form onSubmit={handleSubmit}>
<input type="search" onChange={updateKeyWord}/>
<input type= "submit" value="search"/>
</form>
<Results results={results}/>
</div>
    );
}