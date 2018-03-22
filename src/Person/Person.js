import React from "react";
import Radium from "radium";
import "./Person.css";

const person = (props) => {
    const style = {
        "@media (min-width: 500px)" : {
            width: "450px"
        }
    }
    return (
        <div className="Person" style={style}>
             <h5 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h5>
             <h6>{props.children}</h6>
             <input type="text" onChange={props.change} value={props.name} />
        </div>
       
    )
}

export default Radium(person);