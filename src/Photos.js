import React from "react";

export default function Photos(props){
    if (props.photos){
        return(
            <div className ="photos">
                <div className="row">
                    {props.photos.map(function(photo, index){
                        return(
                            <div className="col-4" key = {index}>
                                <img src = {photo.src.landscape} className="img-fluid" alt="search"/>
                                </div>
                        );})} </div> </div>
        );
    } else{
        return null;
    }
}