import React from "react";
import "./Person.css";

const person = (props) => {   
    return (
        <div className="Person">
             <h5 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h5>
             <h6>{props.children}</h6>
             <input type="text" onChange={props.change} value={props.name} />
        </div>
       
    )
}

export default person;