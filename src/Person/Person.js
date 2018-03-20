import React from "react";

const person = (props) => {
    return (
        <div>
             <h5>I'm {props.name} and I am {props.age} years old!</h5>
             <h6>{props.children}</h6>
        </div>
       
    )
}

export default person;