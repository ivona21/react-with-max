import React from "react";
import styles from "./Person.css";

const person = (props) => {   
    const rnd = Math.random();

    console.log(rnd);
    if (rnd > 0.7) {
        throw new Error("Something wend wrong!");
    }

    return (       
        <div className={styles.Person}>
             <h5 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h5>
             <h6>{props.children}</h6>
             <input type="text" onChange={props.change} value={props.name} />
        </div>
       
    )
}

export default person;