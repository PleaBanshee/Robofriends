import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
    render() {
        return (
           // Use className instead of class, part of JSX. class is a keyword in JS, thus className should be used to indicate a component's class
           <div className="f1 tc">
           <h1>HELLO WORLD!</h1> 
           <p>Welcome, {this.props.greeting}</p>
        </div>
        ); // include brackets to return a single component
    }
}

export default Hello; // export component so other modules can access it