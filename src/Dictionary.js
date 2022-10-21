import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [KeyWord, setKeyWord] = useState("smile");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

function handleSubmit (event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${KeyWord}`;
axios.get(apiUrl).then(handleResponse);
search();
}

function handlePexelsResponse (response){
    console.log(response.data);
}
function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${KeyWord}`;
axios.get(apiUrl).then(handleResponse);

let PexelsApiKey ="563492ad6f91700001000001d06d6f6c1add4870b22ff6279ac483b3";
let PexelsApiUrl = `https://api.pexels.com/v1/search?query=${KeyWord}&per_page=1`
let headers = { Authorization: `Bearer ${PexelsApiKey}`};
axios.get(PexelsApiUrl, {headers:headers}).then (handlePexelsResponse);
}

function updateKeyWord (event){
 setKeyWord(event.target.value);
}

function handleResponse(response){
    console.log(response.data[0]);
    setResults(response.data[0]);
}

function load(){
    setLoaded(true);
    search();
}

if(loaded){
    return(
        <div className="Dictionary">
       <h1>Dictionary</h1>
       <form onSubmit={handleSubmit}>
       <input type="search" onChange={updateKeyWord} className="searchForm"/>
       <input type= "submit" value="search" className="submitButton"/>
       </form>
       <Results results={results}/>
       <p className="text-center mt-3">Coded by Tabby Blades and open-sourced on <a href="https://github.com/tabbyblades/dictionary-app-react" target="_blank" rel="noopener noreferrer">
           Github</a></p>
       </div>
           );
} else{
    load();
    return "loading"
}
    
}