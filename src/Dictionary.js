import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [KeyWord, setKeyWord] = useState(" ");

function handleSubmit (event){
    event.preventDefault();
    alert(`looking for ${KeyWord}`);
}

function updateAlert (event){
 setKeyWord(event.target.value);

}
    return(
 <div className="Dictionary">
<h1>Dictionary</h1>
<form onSubmit={handleSubmit}>
<input type="search" onChange={updateAlert}/>
<input type= "submit" value="search"/>
</form>
</div>
    );
}