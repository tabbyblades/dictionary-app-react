import React from "react";
import "./Dictionary.css";

export default function Dictionary(){
    return(
        <div className="Dictionary">
<h1>Dictionary</h1>
<form>
<input type="search"/>
<input type= "submit" value="search"/>
</form>
</div>
    );
}