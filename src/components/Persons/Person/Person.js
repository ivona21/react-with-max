import React, {Component} from "react";
import styles from "./Person.css";

class Person extends Component {
    constructor(props){
        super(props);
        console.log("[Person.js] Inisde constructor", props);
    }

    componentWillMount(){
        console.log("[Person.js] Inisde componentWillMount");
    }

    componentDidMount(){
        console.log("[Person.js] Inisde componentDidMount");
    }
    render() {
        console.log("[Person.js] Inisde render()");
        return (       
            <div className={styles.Person}>
                 <h5 onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</h5>
                 <h6>{this.props.children}</h6>
                 <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
           
        )
    }
}

export default Person;