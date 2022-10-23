import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(){
    let [KeyWord, setKeyWord] = useState("hiking");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

function handleSubmit (event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${KeyWord}`;
axios.get(apiUrl).then(handleResponse);
search();
}

function handlePexelsResponse (response){
    setPhotos(response.data.photos);
}
function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${KeyWord}`;
axios.get(apiUrl).then(handleResponse);

let PexelsApiKey ="563492ad6f91700001000001d06d6f6c1add4870b22ff6279ac483b3";
let PexelsApiUrl = `https://api.pexels.com/v1/search?query=${KeyWord}&per_page=9`
let headers = { Authorization: `Bearer ${PexelsApiKey}`};
axios.get(PexelsApiUrl, {headers:headers}).then (handlePexelsResponse);
}

function updateKeyWord (event){
 setKeyWord(event.target.value);
}

function handleResponse(response){
    setResults(response.data[0]);
}

function load(){
    setLoaded(true);
    search();
}

if(loaded){
    return(
        <div className="Dictionary">
       <h1>dictionary</h1>
       <form onSubmit={handleSubmit}>
       <input type="search" onChange={updateKeyWord} className="searchForm"/>
       <input type= "submit" value="search" className="submitButton"/>
       </form>
       <Results results={results}/>
       <Photos photos={photos}/>
       <p className="text-center mt-3">coded by Tabby Blades and open-sourced on <a href="https://github.com/tabbyblades/dictionary-app-react" target="_blank" rel="noopener noreferrer">
           Github</a></p>
       </div>
           );
} else{
    load();
    return "loading"
}
    
}