import React from "react";
import styles from "./Cockpit.css";
import Aux from "../../hoc/AppAux";

const cockpit = (props) => {
    const classes = [];
    let btnClass = "";
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.personsLength <= 2) {
        classes.push(styles.Red);
    }
    if (props.personsLength <= 1) {
        classes.push(styles.Bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(" ")}>This is really working!</p>
            <button
                className={styles.Button + " " + btnClass}
                onClick={props.clicked}>
                Switch Name
            </button>
        </Aux>
    );
}

export default cockpit;